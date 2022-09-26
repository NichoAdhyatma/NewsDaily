<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Category;
use App\Models\User;

class News extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    protected $with = ['category', 'user', 'comment'];

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function comment() {
        return $this->hasMany(Comment::class);
    }
}
