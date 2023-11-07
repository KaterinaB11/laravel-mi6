<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\Status;
use Illuminate\Support\Facades\DB;

class StatusesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('statuses')->truncate();

        $statuses = [
            'Active',
            'Alive',
            'Arrested',
            'Deceased',
            'In Custody',
            'Incarcerated',
            'Retired',
            'Unknown'
        ];

        foreach ($statuses as $name) {
            Status::create([
                'name' => $name
            ]);
        }
    }
}
