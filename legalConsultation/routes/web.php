<?php

use Illuminate\Support\Facades\Route;

Route::get('/',[\App\Http\Controllers\IndexController::class, 'index'])->name('home');


Route::middleware("guest")->group(function () {
    Route::get('/login',[\App\Http\Controllers\AuthController::class, 'showLoginForm'])->name('login');
    Route::post('/login_process',[\App\Http\Controllers\AuthController::class, 'login'])->name('login_process');
});

Route::middleware("auth")->group(function () {
    Route::get('/account', [\App\Http\Controllers\IndexController::class, 'account'])->name('account');
    Route::get('/logout',[\App\Http\Controllers\AuthController::class, 'logout'])
        ->name('logout');
    Route::get('/create_new_request', [\App\Http\Controllers\RequestController::class, 'create'])
        ->name('create_new_request');
    Route::post('/add_new_request', [\App\Http\Controllers\RequestController::class, 'store'])
        ->name("add_new_request");

    Route::get('add_answer/{id}',[\App\Http\Controllers\IndexController::class, 'addAnswer'])
        ->name('add_answer');
    Route::put('update_answer/{id}', [\App\Http\Controllers\RequestController::class, 'updateAnswer'])
        ->name('update_answer');

    Route::get('add_comment/{id}',[\App\Http\Controllers\IndexController::class, 'addComment'])
        ->name('add_comment');
    Route::put('update/{id}', [\App\Http\Controllers\RequestController::class, 'updateComment'])
        ->name('update_comment');

    Route::get('complete_request/{id}', [\App\Http\Controllers\IndexController::class, 'completeRequest'])
        ->name('complete_request');

    Route::get('/requests/filter', [\App\Http\Controllers\IndexController::class, 'filterStatus'])
        ->name('requests.filter');
    Route::get('/requests/filter_id', [\App\Http\Controllers\IndexController::class, 'filterId'])
        ->name('requests.filter_id');
    Route::get('/requests/filter_date', [\App\Http\Controllers\IndexController::class, 'filterDate'])
        ->name('requests.filter_date');


});
