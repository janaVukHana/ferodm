<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);  THIS IS DEFAULT
        return [
            'id' => $this->id,
            'title' => $this->title,
            'image' => $this->image,
            'created_at' => $this->created_at->format('Y-m-d H:i:s')
        ];
    }
}
