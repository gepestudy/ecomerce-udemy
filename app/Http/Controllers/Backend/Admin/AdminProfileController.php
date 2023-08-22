<?php

namespace App\Http\Controllers\Backend\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminProfileController extends Controller
{
    public function index()
    {
        return Inertia::render('admin/Profile');
    }

    public function update(Request $request)
    {
        $request->validate([
            'email' => ['email', 'required'],
            'name' => ['required'],
        ]);
        dd($request->all());
    }
}