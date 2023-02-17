<?php

use Illuminate\Support\Facades\Route;

Route::get('/',[\App\Http\Controllers\IndexController::class, 'index'])->name('home');
Route::get('/account', [\App\Http\Controllers\IndexController::class, 'account'])->name('account');

Route::middleware("guest")->group(function () {
    Route::get('/login',[\App\Http\Controllers\AuthController::class, 'showLoginForm'])->name('login');
    Route::post('/login_process',[\App\Http\Controllers\AuthController::class, 'login'])->name('login_process');
});

Route::middleware("auth")->group(function () {
    Route::get('/logout',[\App\Http\Controllers\AuthController::class, 'logout'])
        ->name('logout');
    Route::get('/create_new_request', [\App\Http\Controllers\RequestController::class, 'create'])
        ->name('create_new_request');
    Route::post('/add_new_request', [\App\Http\Controllers\RequestController::class, 'store'])
        ->name("add_new_request");

    Route::get('add_answer/{id}',[\App\Http\Controllers\IndexController::class, 'addAnswer'])
        ->name('add_answer')->middleware('can:take-request');
    Route::post('get_answer/{id}', [\App\Http\Controllers\RequestController::class, 'getAnswer'])
        ->name("get_answer");
});
