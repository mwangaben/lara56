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

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam quia voluptatibus dolores ipsa nam quas, excepturi exercitationem quasi itaque dolorum optio aut sequi mollitia, corporis assumenda molestiae repellat reprehenderit, facilis.</p>
        </tab>

        <tab name="Videos">
            <h1 class="display-4">We are streaming newly reased movies</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam commodi, possimus porro rerum, reprehenderit non aut magni delectus asperiores ut officiis qui dolor nostrum, nulla corrupti! Accusantium omnis unde laborum!</p>
        </tab>

        <tab name="Documents">
            <h1 class="display-4">Your documents are right where you are</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi aliquid quis assumenda, pariatur a illo, aspernatur numquam dignissimos dolor repudiandae recusandae totam delectus quo. Beatae quae accusantium dolore at. Eaque.</p>
        </tab>

        <tab name="About Us">
            <h1 class="display-4">We are the game changers in tech</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium maxime veniam pariatur vero ea cum, rerum quidem aliquid consectetur dolorem, nobis molestias similique ab culpa itaque in modi velit natus.</p>
        </tab>
    </tabs>
@endsection