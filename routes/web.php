<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\NewsController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;

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

Route::get('/', function () {
    return Inertia::render('Homepage', [
        'title' => 'Homepage | News',
        'desc' => 'Homepage',
    ]);
});

Route::get('/m', function () {
    return Inertia::render('Movie', [
        'title' => 'Movie',
        'desc' => 'Movie API'
    ]);
});


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::resource('/dashboard/mynews', DashboardController::class)->names(['index' => 'mynews']);

Route::resource('/news', NewsController::class)->only(['index', 'show']);

require __DIR__ . '/auth.php';

// Route::get('/welcome', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });