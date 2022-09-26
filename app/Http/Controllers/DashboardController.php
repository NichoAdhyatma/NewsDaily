<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\News;

class DashboardController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth', 'verified']);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Dashboard/MyNews', [
            'title' => 'Dashboard | MyNews',
            'news' => News::where('user_id', auth()->user()->id)->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render(
            'Dashboard/FormNews',
            [
                'title' => 'Form Add News',
                'category' => Category::all(),
                'action' => 'create'

            ]
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            "title" => 'required|min:4|max:255',
            "category_id" => 'required',
            "body" => 'required'
        ]);

        $validatedData['author'] = auth()->user()->name;
        $validatedData['user_id'] = auth()->user()->id;


        News::create($validatedData);

        return redirect('/dashboard/mynews')->with('message', 'News has been added');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return Inertia::render('Dashboard/FormNews', [
            'title' => 'Form Edit News',
            'news' => News::where('id', $id)->get(),
            'action' => 'update'
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            "title" => 'required|min:4|max:255',
            "category_id" => 'required',
            "body" => 'required'
        ]);

        $validatedData['author'] = auth()->user()->name;
        $validatedData['user_id'] = auth()->user()->id;

        News::where('id', $id)->update($validatedData);

        return redirect('/dashboard/mynews')->with('message', 'News Has been Updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        News::destroy($id);

        return back()->with('message', 'News Deleted');
    }
}
