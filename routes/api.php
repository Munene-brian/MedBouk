<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\patient;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();



});

Route::get('/patient',function (){
    return patient::all();
});


Route::post('/patient', function (){
    request()->validate([
        'Name' => 'required',
        'dob' => 'required'
    ]);

    return patient::create([
        'Name' => request('Name'),
        'dob' => request('dob'),
        ]);
});
// Route::post('/patient', function (){


//     request()->validate([
//     'Name' => 'required',
//     'dob' => 'required'
//     ]);
    
    
//         return Post::create([
//             'Name' => request('Name'),
//             'dob' => request('dob'),
//         ]);
//     });

//     Route::put('/patient/{patient}',function (patient $patient){

//         request()->validate([
//             'Name' => 'required',
//             'dob' => 'required'
//             ]);
    
//     $success =  $patient-> update([
//         'Name' => request('Name'),
//         'dob' => request('dob')
//     ]);
//     return ['success' => $success];
    
//     });