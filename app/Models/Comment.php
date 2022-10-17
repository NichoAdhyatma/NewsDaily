<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\News;

class Comment extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    protected $with = ['user'];


    public function news() {
        return $this->belongsTo(News::class, 'news_id');
    }

    public function user() {
        return $this->belongsTo(User::class, 'user_id');
    }
}
