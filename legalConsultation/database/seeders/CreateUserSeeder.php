<?php

namespace Database\Seeders;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Role;


class CreateUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::query()->create([
            'name' => 'John',
            'email' => 'john@mail.ru',
            'password' => bcrypt('qweasdzxc'),
        ]);
//        $user = User::query()->create([
//            'name' => 'Polina',
//            'email' => 'Polina@mail.ru',
//            'password' => bcrypt('qweasdzxc'),
//        ]);
//        $user = User::query()->create([
//            'name' => 'LawyerJack',
//            'email' => 'LawyerJack@mail.ru',
//            'password' => bcrypt('qweasdzxc'),
//        ]);
        //     $user = User::query()->create([
//            'name' => 'LawyerAlex',
//            'email' => 'LawyerAlex@mail.ru',
//            'password' => bcrypt('qweasdzxc'),
//        ]);
//            $user = User::query()->create([
//            'name' => 'Artem',
//            'email' => 'artem@mail.ru',
//            'password' => bcrypt('qweasdzxc'),
//        ]);

//        Role::create([
//            'name'=>'user',
//            'created_at'=>Carbon::now(),
//            'updated_at'=>Carbon::now(),
//        ]);

        $user->assignRole('user');
    }
}
