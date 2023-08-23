<?php

namespace App\Http\Controllers\Backend\admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
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
            'image' => ['image', 'mimes:png,jpg,jpeg', 'max:5120', 'nullable'],
        ]);


        $user = User::find(Auth::user()->id);
        $user->email = $request->email;
        $user->name = $request->name;
        if ($request->hasFile('image')) {
            if ($user->image) {
                Storage::delete('public/profiles/' . $user->image);
            }
            $file = $request->file('image');
            $fileName = $file->getClientOriginalName();
            $file->storeAs('public/profiles', $fileName);
            $user->image = $fileName;
        }
        $user->save();
        return redirect()->back()->with(['success' => 'Profile Updated']);
    }
}
