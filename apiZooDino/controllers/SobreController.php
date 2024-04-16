<?php

class SobreController
{
    public function index()
    {
        echo 'Página sobre - Select';

    }
    public function store($objeto)
    {
        echo 'Página sobre - Insert';

    }
    public function show($id)
    {
        echo 'Página sobre - Select com Id';

    }
    public function update($id, $objeto )
    {
        echo 'Página sobre - Update';
    }
    public function destroy()
    {
        echo 'Página sobre - Delete';
    }
}