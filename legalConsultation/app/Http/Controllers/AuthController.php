<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller {
    public function showLoginForm() {
        return view('auth.login');
    }

    public function login(Request $request) {
        $data = $request->validate([
            "email"=>["required","email", "string"],
            "password"=>["required"],
        ]);

        if (auth("web")->attempt($data)) {
            return redirect(route('account'));
        }

        return redirect(route('login'))->withErrors(["email"=> "Пользотваель не найден,
                     либо данные введены не правильно"]);
    }
    public function logout() {
        auth("web")->logout();
        return redirect(route("login"));
    }
}
