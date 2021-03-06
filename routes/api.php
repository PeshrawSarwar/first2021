<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::group(['prefix' => 'admins', 'namespace' => 'Admins'], function () {
    Route::post('login', 'AdminsController@adminsLogin');

});

Route::group(['prefix' => 'admins', 'namespace' => 'Admins', 'middleware'=>['adminsRoutes', 'jwt.auth'] ], function () {
    Route::get('authAdmin', 'AdminsController@getAuthenticatedAdmin');
});

Route::group(['prefix' => 'admins', 'namespace' => 'Admins', 'middleware'=>['adminsRoutes', 'jwt.auth'] ], function () {
    Route::post('add/items', 'ItemsController@store');
    Route::get('get/items', 'ItemsController@getItem');
    Route::get   ('edit/items/{id}'        , 'ItemsController@editItem');
    Route::get   ('get/items/count'        , 'ItemsController@getCount');
    Route::post  ('update/items/{id}'      , 'ItemsController@updateItem');
    Route::delete('delete/items/{id}'      , 'ItemsController@deleteItem');
});



// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
