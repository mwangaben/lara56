<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::post('/questions/{number}', function () {
     return 'Hello';
});

Route::get('computed', function () {
    return view('vue/computed');
});

Route::get('components/message', function () {
    return view('vue/components/message');
});

Route::get('components/modal', function () {
    return view('vue/components/modal');
});

Route::get('components/tabs', function () {
    return view('vue/components/tabs');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
