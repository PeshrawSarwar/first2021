<?php

namespace App\Http\Controllers\Admins;

use App\Http\Controllers\Controller;
use App\Http\Resources\ItemResource;
use App\Traits\UploadPhoto;
use Illuminate\Http\Request;
use App\Models\Item;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\ItemStoreRequest;

class ItemsController extends Controller
{
    //
    use UploadPhoto;

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ItemStoreRequest $request){

        $image_path ='';

        if ($request->hasFile('image')) {
            $image_path = $request->file('image')->store('public/items');
        }

        // $fileName=$this->UploadPhoto($request->file('image') , 'storage/items');

        $item=Item::create([
            'name' => $request->get('name'),
            'description' => $request->get('description'),
            'image' => $image_path,
            'barcode' => $request->get('barcode'),
            'price' => $request->get('price'),
            'quantity' => $request->get('quantity'),
            'status' => $request->get('status'),

        ]);
        return response()->json(compact('item'));
    }

    public function getItem(){
        $items=Item::orderBy('id','desc')->paginate(5);
        if (request()->wantsJson()) {
            return  ItemResource::collection($items);
        }
        // return response()->json(compact('items'));
    }

    public function editItem($id){
        $items=Item::find($id);
        if (request()->wantsJson()) {
            return response()->json(compact('items'));
        }
    }

    public function updateItem(Request $request,$id){
        // $rules=$this->ItemRules();

        // $validator=Validator::make($request->all(),$rules);

        // if($validator->fails()){
        //     return response()->json(['error at validation'] , 400);
        // }

        if ($request->hasFile('image')) {
            $image_path = $request->file('image')->store('public/items');
        }

        $items=Item::find($id);

        $items->name        = $request->name;
        $items->description = $request->description;
        $items->image       = $image_path;
        $items->barcode       = $request->barcode;
        $items->price       = $request->price;
        $items->quantity       = $request->quantity;
        $items->status       = $request->status;



        $items->save();

        if (request()->wantsJson()) {
            return  ItemResource::collection($items);
        }
    }

    public function getCount(){
		$items=Item::all();
		$itemsCount=$items->count();
        if (request()->wantsJson()) {
            return  ItemResource::collection($itemsCount);
        }
	}
}
