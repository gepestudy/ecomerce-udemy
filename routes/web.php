<?php

use App\Http\Controllers\Frontend\HomeController;
use App\Http\Controllers\Frontend\UserDashboardController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use App\Http\Controllers\Frontend\UserProfileController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('frontend/home/Home', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });





Route::get('/test', function () {
    // return response(Storage::get('profiles/1.jpg'))->header('Content-Type', 'image/jpeg');
    return 'ok';
});

;

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::get('/', [HomeController::class, 'index'])->name('home')->name('home');
//user routes
Route::middleware(['auth','verified'])->prefix('user')->as('user.')->group(function () {
    Route::get('dashboard',[UserDashboardController::class,'index'])->name('dashboard');
    Route::get('profile', [UserProfileController::class,'index'])->name('profile');

});

require __DIR__ . '/auth.php';
// require __DIR__ . '/admin.php';
// require __DIR__ . '/vendor.php';
