<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    //
    public function index(){
        return view('index')->with('mensaje', 'homepage');
    }

    public function contacto(){
        return view('contacto')->with('mensaje', 'contacto');
    }

    public function blog(){
        return view('blog')->with('mensaje', 'blog');
    }

    public function crearArticulo(){
        return view('crearArticulo')->with('mensaje', 'crearArticulo');
    }

    public function galeria(){
        return view('galeria')->with('mensaje', 'galeria');
    }

    public function registro(){
        return view('registro')->with('mensaje', 'registro');
    }

    public function nosotros(){
        return view('nosotros')->with('mensaje', 'nosotros');
    }
}
