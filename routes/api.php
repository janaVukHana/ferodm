<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::middleware('auth:sanctum')->group(function() {
    Route::get('/user', function(Request $request) {
        return $request->user();
    });
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::apiResource('/products', ProductController::class,['except'=>['index']]);
    // Route::get('/contact-us', [ContactController::class, 'index']);
    // Route::get('/contact-us/{contact}', [ContactController::class, 'show']);
    // Route::delete('/contact-us/{contact}', [ContactController::class, 'destroy']);
});

// UNPROTECTED ROUTES
Route::get('/products', [ProductController::class, 'index']);

Route::post('/login', [AuthController::class, 'login']);