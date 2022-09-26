<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\News;
use App\Models\Category;
use App\Models\Comment;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory(10)->create();
        
        News::factory(20)->create();

        Comment::factory(10)->create();

        Category::create([
            'name' => 'Programming'
        ]);
        Category::create([
            'name' => 'Food'
        ]);
        Category::create([
            'name' => 'Jokes'
        ]);
    }
}
