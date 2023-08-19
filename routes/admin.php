<?php

use App\Http\Controllers\Backend\Admin\AdminController;
use Illuminate\Support\Facades\Route;


Route::get('dashboard', [AdminController::class, 'dashboard'])->name('admin.dashboard');
