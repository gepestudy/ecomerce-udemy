<?php

use App\Http\Controllers\Backend\Admin\AdminController;
use App\Http\Controllers\Backend\admin\AdminProfileController;
use Illuminate\Support\Facades\Route;


Route::get('dashboard', [AdminController::class, 'dashboard'])->name('dashboard');

Route::prefix('profile')->group(function () {
    Route::get('/', [AdminProfileController::class, 'index'])->name('profile.index');
});
