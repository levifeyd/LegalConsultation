<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IndexController extends Controller {
    public function index() {
        return view('welcome');
    }
    public function account() {
        $requests = \App\Models\Request::query()->orderBy("created_at", "desc")->get();
        return view('account')->with([
            'requests'=>$requests,
        ]);
    }
}
