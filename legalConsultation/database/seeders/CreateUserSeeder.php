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
            'name' => 'Polina',
            'email' => 'Polina@mail.ru',
            'password' => bcrypt('qweasdzxc'),
        ]);

        Role::create([
            'name'=>'user',
            'created_at'=>Carbon::now(),
            'updated_at'=>Carbon::now(),
        ]);

        $user->assignRole('user');
    }
}
