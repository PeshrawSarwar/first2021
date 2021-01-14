<?php

use Illuminate\Database\Seeder;

class adminsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('admins')->insert([
            'name' => 'pesha',
            'email' => 'pesha@gmail.com',
            'password' => Hash::make('abcd1234'),
            'created_at'=>now()
        ]);
    }
}
