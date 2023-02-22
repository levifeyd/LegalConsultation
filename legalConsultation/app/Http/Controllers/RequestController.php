<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RequestController extends Controller {
    public function index() {
        $posts = \App\Models\Request::query()->orderBy("created_at", "desc")->get();
        return view('dashboard', [
            'posts' => $posts,
        ]);
    }
    public function create() {
        return view('requests.create_request');
    }
    public function store(Request $request) {
        $request->validate([
            "category"=>'required',
            "text"=>'required',
            "photo"=>'image',
        ]);

        $input = $request->all();
        $input['status'] = 'Новая';
        $input['photo'] = str_replace("public/posts","",  $request->file("photo")->store("public/posts"));
        $input['user_id'] = Auth::user()->id;

        \App\Models\Request::query()->create($input);
        return redirect()->back()->with('status','Заявка принята!');
    }
    public function updateAnswer($id, Request $request) {
        $request->validate([
            'answer'=>'required'
        ]);
        $input = $request->all();
        $req = \App\Models\Request::query()->where('id', $id)->update([
            'answer' => $input['answer'],
            'status'=>'В работе',
            'lawyer_id'=> Auth::user()->id,
        ]);
        return redirect()->back()->with('status','Ответ на заявку принят!');
    }

    public function updateComment($id, Request $request) {
        $request->validate([
            'comment'=>'required'
        ]);
        $input = $request->all();
        $req = \App\Models\Request::query()->where('id', $id)->update(['comment'=>$input['comment']]);
        return redirect()->back()->with('status','Комментарий добавлен!');
    }
}
