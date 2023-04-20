<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Resources\ProductResource;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return ProductResource::collection(Product::orderBy('id', 'desc')->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // MOZE I StoreProductRequest $request CLASS DA SE NAPRAVI kao CodeHolic
        $formData = $request->validate([
            'title' => ['required', 'max:10']
        ]);

        $product = Product::create($formData);

        return response(new ProductResource($product), 201);
        // 201 == the request has succeeded and has led to the creation of a resource.

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();
        return response('', 204);
    }
}
