<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PagesController;

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

Route::get('/', [PagesController::class, 'auth.login']);

Route::get('index', [PagesController::class, 'index'])->middleware('auth');

Route::get('contacto', [PagesController::class, 'contacto'])->middleware('auth');

Route::get('blog', [PagesController::class, 'blog'])->middleware('auth');

Route::get('galeria', [PagesController::class, 'galeria'])->middleware('auth');

Route::get('galeria/{id}', [PagesController::class, 'galeria'])->middleware('auth');

Route::get('registro', [PagesController::class, 'registro'])->middleware('auth');

Route::get('registro/{id}', [PagesController::class, 'registro'])->middleware('auth');

Route::get('nosotros', [PagesController::class, 'nosotros'])->middleware('auth');

Auth::routes(['register'=>false, 'reset'=>false]);

Route::get('/home', [PagesController::class, 'index'])->name('home');

Route::group(['middleware' => 'auth'], function(){
    Route::get('/', [PagesController::class, 'index'])->name('home');
});
