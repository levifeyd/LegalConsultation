<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CreateRequest extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('request')->insert([
            'text'=>'Завка юристу',
            'photo'=>'',
            'category'=>'Земельные споры',
            'status'=>'Новая',
            'answer'=>'',
            'user_id'=>'1',
            'lawyer_id'=>'',
            'comment'=>''
        ]);
    }
}
