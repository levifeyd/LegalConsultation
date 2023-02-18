<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class IndexController extends Controller {
    public function index() {
        return view('welcome');
    }
    public function account() {
        $requests = \App\Models\Request::query()->orderBy("created_at", "desc")->get();
        $user = auth()->user();
        return view('account')->with([
            'requests'=>$requests,
            'user'=>$user,
        ]);
    }
    public function addAnswer($id) {
        $request = \App\Models\Request::query()->findOrFail($id);
//        dd($request->id);
        return view('answer')->with([
            'request'=>$request,
        ]);
    }
    public function addComment($id) {
        $request = \App\Models\Request::query()->findOrFail($id);
//        dd($request);
        return view('comment')->with([
            'request' => $request,
        ]);
    }
    public function completeRequest($id) {
//        dd($id);
        $request = \App\Models\Request::query()->where('id', $id)->update(['status'=>'Выполнена']);
        return view('account')->with('status', 'Request completed');
    }
}
