<?php

namespace App\Http\Controllers;

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

    public function filterStatus(Request $request) {
        $status = $request->input('status');

        if ($status && $status != 'Все') {
            $requests = \App\Models\Request::where('status', $status)->get();
        } else {
            $requests = \App\Models\Request::all();
        }
        $user = auth()->user();

        return view('account', [
            'requests' => $requests,
            'user'=> $user,
        ]);
    }
    public function filterId(Request $request) {
        $user_id = $request->input('user_id');

        if ($user_id) {
            $requests = \App\Models\Request::where('user_id', $user_id)->get();
        } else {
            $requests = \App\Models\Request::all();
        }
        $user = auth()->user();

        return view('account', [
            'requests' => $requests,
            'user'=> $user,
        ]);
    }

    public function filterDate(Request $request) {
        $dateFrom = $request->input('dateFrom');
        $dateTo = $request->input('dateTo');
        if($dateFrom && $dateTo) {
            $requests = \App\Models\Request::query()
                ->whereBetween('created_at', [$dateFrom, $dateTo])
                ->get();
        } else {
            $requests = \App\Models\Request::all();
        }
        $user = auth()->user();
        return view('account', [
            'requests' => $requests,
            'user'=> $user,
        ]);
    }


    public function addAnswer($id) {
        $request = \App\Models\Request::query()->findOrFail($id);
        $user = auth()->user();
        return view('answer')->with([
            'request'=>$request,
            'user'=> $user,
        ]);
    }
    public function addComment($id) {
        $request = \App\Models\Request::query()->findOrFail($id);
        $user = auth()->user();
        return view('comment')->with([
            'request' => $request,
            'user'=> $user,
        ]);
    }
    public function completeRequest($id) {
        $request = \App\Models\Request::query()->where('id', $id)->update(['status'=>'Выполнена']);
        $requests = \App\Models\Request::all();
        $user = auth()->user();
        return view('account')->with([
            'status', 'Заявка выполнена!',
            'requests' => $requests,
            'user'=> $user,
        ]);
    }
}
