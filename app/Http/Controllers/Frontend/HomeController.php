<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $role = auth()->user()->role;
        if($role !== 'user'){
            return redirect()->route($role.'.dashboard');
        }
        return Inertia::render('frontend/home/Home');
    }
}
