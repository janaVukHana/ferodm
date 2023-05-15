<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;
use App\Http\Resources\MessageResource;

class MessageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return MessageResource::collection(Message::orderBy('id', 'desc')->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // MOZE I StoreMessageRequest $request CLASS DA SE NAPRAVI kao CodeHolic
        $formData = $request->validate([
            'name' => ['required', 'min:2'],
            'email' => ['required', 'email'],
            'phone' => ['required'],
            'message' => ['required', 'min:20', 'max:100'],
        ]);

        $message = Message::create($formData);

        return response(new MessageResource($message), 201);
        // 201 == the request has succeeded and has led to the creation of a resource.

    }
/**
 * Display the specified resource.
 */
public function show(string $id)
{
    $message = Message::find($id);

    if (!$message) {
        return response()->json(['message' => 'Message not found'], 404);
    }

    return new MessageResource($message);
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
    public function destroy(Message $message)
    {        
        $message->delete();
        return response('', 204);
    }
}
