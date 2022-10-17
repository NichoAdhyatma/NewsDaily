<?php

namespace App\Http\Controllers;

use App\Models\News;
use Inertia\Inertia;
use Inertia\Controller;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request['key']) {
            $news = News::latest()->where('title', 'like', '%'.$request['key'].'%')->get();
            if ($news) return $news;
        }
        $news = News::latest()->paginate(8)->withQueryString();

        return Inertia::render('News', [
            'title' => 'News Page',
            'desc' => 'Berita terkini kami sediakan untuk anda..',
            'news' => $news
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\News  $news
     * @return \Illuminate\Http\Response
     */
    public function show(News $news)
    {
        return Inertia::render('News/NewsDetail', [
            'title' => 'Detail News',
            'news' => $news
        ]);
    }
}
