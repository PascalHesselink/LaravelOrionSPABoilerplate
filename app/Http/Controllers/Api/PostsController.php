<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\PostRequest;
use App\Models\Post;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;
use Orion\Concerns\DisablePagination;
use Orion\Http\Controllers\Controller;
use Orion\Http\Requests\Request;

class PostsController extends Controller
{
    use DisablePagination;

    protected $model = Post::class;

    protected $request = PostRequest::class;


    public function resolveUser()
    {
        return Auth::guard('sanctum')->user();
    }

    protected function buildIndexFetchQuery(Request $request, array $requestedRelations): Builder
    {
        $query = parent::buildIndexFetchQuery($request, $requestedRelations);

        $query->whereUserId($request->user()->id);

        return $query;
    }

    protected function beforeSave(Request $request, $post)
    {
        $post->user()->associate($request->user());
    }
}
