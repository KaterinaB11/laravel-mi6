<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Person;
use Illuminate\Http\Request;

class PersonController extends Controller
{
    public function index()
    {
        $people = Person::with('aliases', 'image', 'status')
        ->get();

        return $people;
    }

    public function show($person_id)
    {
        $person = Person::with('aliases', 'image', 'status')
            ->find($person_id);

        return $person;
    }
}