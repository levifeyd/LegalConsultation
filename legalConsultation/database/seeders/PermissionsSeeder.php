<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
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
        Permission::create(['name'=>'complete-request']);
        Permission::create(['name'=>'take-request']);
        Permission::create(['name'=>'accept-solution-request']);
    }
}
