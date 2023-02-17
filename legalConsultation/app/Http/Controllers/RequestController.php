<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RequestController extends Controller {
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
        $request->validate([
            "category"=>'required',
            "text"=>'required',
            "photo"=>'required',
        ]);

        $input = $request->all();
        $input['status'] ='new request';
        $input['user_id'] = Auth::user()->id;

        \App\Models\Request::query()->create($input);
        return redirect()->back()->with('status','Post added!');
    }
    public function update($id, Request $request) {
        $request->validate([
            'text'=>'required'
        ]);
        $input = $request->all();
        $req = \App\Models\Request::query()->where('id', $id)->update(['answer' => $input['text']]);
        return redirect()->back()->with('status','Answer added!');
    }
}