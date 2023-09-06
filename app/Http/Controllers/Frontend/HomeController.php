<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        if(auth()->user()){
            $role = Auth::user()->role;
            if($role == 'admin' || $role == 'vendor'){
                return redirect()->route($role.'.dashboard');
            }
        }
        return Inertia::render('frontend/home/Home');
    }
}
