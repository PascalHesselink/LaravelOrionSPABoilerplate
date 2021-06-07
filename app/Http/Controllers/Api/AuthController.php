<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\AuthenticatedUserResource;
use App\Models\User;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    /**
     * Default array of data to send upon login, register or retrieving the user authenticated data.
     *
     * @param User $user
     * @return AuthenticatedUserResource[]
     */
    public function meData(User $user): array
    {
        return [
                'user' => new AuthenticatedUserResource($user),
        ];
    }

    /**
     * Register the user
     *
     * @param Request $request
     * @return Application|ResponseFactory|Response
     * @throws ValidationException
     */
    public function register(Request $request)
    {
        $this->validate($request, [
                'name'                  => 'required|string|min:3|max:20|unique:users,name|regex:/^[a-zA-Z0-9_]*$/',
                'email'                 => 'required|email:rfc,filter|unique:users,email',
                'password'              => 'required|confirmed|min:6',
                'password_confirmation' => 'required|string|min:6'
        ]);

        $user = User::create([
                'name'     => $request->name,
                'email'    => $request->email,
                'password' => Hash::make($request->password)
        ]);

        return response(array_merge($this->meData($user), [
                'access_token' => $user->createToken('auth_token')->plainTextToken
        ]), 200);
    }

    /**
     * Sign in the user
     *
     * @param Request $request
     * @return Application|ResponseFactory|Response
     * @throws ValidationException
     */
    public function login(Request $request)
    {
        $request->validate([
                'email'    => 'required|email',
                'password' => 'required',
        ]);

        $user = User::whereEmail($request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                    'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        return response(array_merge($this->meData($user), [
                'access_token' => $user->createToken('auth_token')->plainTextToken
        ]), 200);
    }

    /**
     * Retrieve the user authenticated data
     *
     * @return Application|ResponseFactory|Response
     */
    public function me()
    {
        $user = auth()->guard('sanctum')->user();

        return response(array_merge($this->meData($user), [
            //
        ]), 200);
    }

    /**
     * Logout the authenticated user
     *
     */
    public function logout()
    {
        $user = auth()->guard('sanctum')->user();

        $user->currentAccessToken()->delete();
    }
}
