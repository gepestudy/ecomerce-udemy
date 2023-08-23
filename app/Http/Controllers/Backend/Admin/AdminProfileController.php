<?php

namespace App\Http\Controllers\Backend\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
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
            'email' => ['email', 'required', Rule::unique('users', 'email')->ignore(Auth::user()->id)],
            'name' => ['required'],
            'image' => ['image', 'mimes:png,jpg,jpeg', 'max:5120'],
        ]);
        dd($request->hasFile('image'));
    }
}
