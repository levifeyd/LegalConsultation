<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Permission;

class PermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
//        Permission::create(['name'=>'complete-request']);
//        Permission::create(['name'=>'take-request']);
//        Permission::create(['name'=>'accept-solution-request']);
//        Permission::create(['name'=>'add-comment']);
        DB::table('role_has_permissions')->insert([
            'permission_id'=> '4',
            'role_id'=>'2'
        ]);
    }
}
