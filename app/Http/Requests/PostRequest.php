<?php

namespace App\Http\Requests;

use Orion\Http\Requests\Request;

class PostRequest extends Request
{
    public function commonRules(): array
    {
        return [
                'title' => 'required|min:6',
                'body'  => 'required|min:10',
        ];
    }

    public function storeRules(): array
    {
        return [
            //
        ];
    }

    public function updateRules(): array
    {
        return [
            //
        ];
    }
}
