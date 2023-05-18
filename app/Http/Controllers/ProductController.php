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
            'title' => ['required', 'max:10'],
            'image' => ['required','image']
        ]);

        $image = request()->file('image');
        $image_name = time().'.'.$image->getClientOriginalExtension();
        $image->move('images/',$image_name);

        $formData['image'] = $image_name; 

        $product = Product::create($formData);

        return response(new ProductResource($product), 201);
        // 201 == the request has succeeded and has led to the creation of a resource.

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
{
    $product = Product::find($id);

    if (!$product) {
        return response()->json(['product' => 'Product not found'], 404);
    }

    return new ProductResource($product);
}

    /**
 * Update the specified resource in storage.
 */
public function update(Request $request, string $id)
{
    $product = Product::find($id);

    if (!$product) {
        return response()->json(['product' => 'Product not found'], 404);
    }

    $formData = $request->validate([
        'title' => ['required', 'max:10'],
        'image' => ['nullable','image']
    ]);

    if ($request->hasFile('image')) {
        $image = $request->file('image');
        $image_name = time() . '.' . $image->getClientOriginalExtension();
        $image->move('images/', $image_name);
        $formData['image'] = $image_name;

        // Delete the old image only if it exists
        if ($product->image) {
            unlink('images/' . $product->image);
        }
    }

    $product->update($formData);

    return new ProductResource($product);
}



    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        // Delete the old image only if it exists
        if ($product->image) {
            unlink('images/' . $product->image);
        }        
        $product->delete();
        return response('', 204);
    }
}
