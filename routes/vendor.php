<?php

use App\Http\Controllers\Backend\Vendor\VendorController;
use Illuminate\Support\Facades\Route;

Route::get('dashboard', [VendorController::class, 'dashboard'])->name('dashboard');
