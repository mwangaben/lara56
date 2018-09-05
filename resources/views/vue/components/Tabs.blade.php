@extends('layouts.app')


@section('content')
    <tabs>
        <tab name="Picture" :selected="true">
            <h1 class="display-4">Talking of pictures ahh! we have lots of them</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur a
                dipisicing elit. Ut voluptates et nostrum fugiat nemo, nulla suscipit corporis. Voluptate error quasi laboriosam nulla nostrum! Quod placeat nemo libero odio nam. Odio.
            </p>
        </tab>
        <tab name="Music">
            <h1 class="display-4">Playing Music 24/7</h1>
        </tab>

        <tab name="Videos">
            <h1 class="display-4">We are streaming newly reased movies</h1>
        </tab>

        <tab name="Documents">
            <h1 class="display-4">Your documents are right where you are</h1>
        </tab>

        <tab name="About Us">
            <h1 class="display-4">We are the game changers in tech</h1>
        </tab>
    </tabs>
@endsection