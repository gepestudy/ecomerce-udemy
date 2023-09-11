<?php

use App\Http\Controllers\Backend\Vendor\VendorController;
use App\Http\Controllers\Backend\Vendor\VendorProfileController;
use Illuminate\Support\Facades\Route;

Route::get('dashboard', [VendorController::class, 'dashboard'])->name('dashboard');

Route::prefix('profile')->group(function () {
    Route::get('/', [VendorProfileController::class, 'index'])->name('profile');
    Route::post('/update-profile', [VendorProfileController::class, 'updateProfile'])->name('profile.update');
    Route::post('/update-password', [VendorProfileController::class, 'updatePassword'])->name('password.update');
});
