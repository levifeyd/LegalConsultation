<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RequestController extends Controller
{
    public function index()
    {
        $posts = \App\Models\Request::query()->orderBy("created_at", "desc")->get();
        return view('dashboard', [
            'posts' => $posts,
        ]);
    }
    public function create(){
        return view('requests.create_request');
    }
    public function store(Request $request) {
//        $request->validate([
//            "name"=>'required|string|max:255',
//            "text"=>'required|string|',
//        ]);
        \App\Models\Request::query()->create($request->all());
        return redirect()->back()->with('status','Post added!');
    }
}
