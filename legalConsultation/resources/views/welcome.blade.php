@extends('layout.app.app')
@section('title', 'Юридическая Консультация')

@section('content')
    @include('partials.header')
    <div class="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg">
        <div class="grid grid-cols-1 md:grid-cols-2">
{{--            @foreach($posts as $post)--}}
{{--                @include('posts.partials.item',["post"=>$post])--}}
{{--            @endforeach--}}
        </div>
    </div>
@endsection
