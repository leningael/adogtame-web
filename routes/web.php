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

Route::get('/', [PagesController::class, 'index']);

Route::get('index', [PagesController::class, 'index']);

Route::get('contacto', [PagesController::class, 'contacto']);

Route::get('blog', [PagesController::class, 'blog']);

Route::get('galeria', [PagesController::class, 'galeria']);

Route::get('registro', [PagesController::class, 'registro']);

Route::get('nosotros', [PagesController::class, 'nosotros']);
