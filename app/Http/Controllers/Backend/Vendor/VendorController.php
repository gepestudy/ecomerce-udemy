<?php

namespace App\Http\Controllers\Backend\Vendor;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VendorController extends Controller
{
    public function dashboard()
    {
        return Inertia::render('vendor/Dashboard');
    }
}
