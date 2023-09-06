<?php

namespace App\Http\Controllers\Backend\admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class AdminProfileController extends Controller
{
    public function index()
    {
        return Inertia::render('admin/AdminProfile');
    }

    public function updateProfile(Request $request)
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
        return redirect()->route('admin.profile')->with(['success' => 'Profile Updated']);
    }

    public function updatePassword(Request $request)
    {
        $request->validate([
            'current_password' => ['required', Rules\Password::defaults()],
            'new_password' => ['required', Rules\Password::defaults()],
        ]);
        $user = User::find(Auth::user()->id);
        if (!Hash::check($request->current_password, $user->password)) {
            return throw ValidationException::withMessages([
                'current_password' => 'The provided password does not match your current password.',
            ]);
        } elseif (Hash::check($request->new_password, $user->password)) {
            return throw ValidationException::withMessages([
                'new_password' => 'New password cannot be same as current password.',
            ]);
        }
        $user->update([
            'password' => bcrypt($request->new_password),
        ]);
        return redirect()->back()->with(['success' => 'Password Updated']);
    }
}
