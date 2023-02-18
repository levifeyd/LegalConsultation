@extends('layout.app.app')
@section('title', 'Добавить ответ на заявку')
@section('content')
    @include('partials.header')
    <div class="container mx-auto px-6 py-8">
        <h3 class="text-gray-700 text-3xl font-medium">Комментарий к заявке №{{ $request->id }}</h3>
        <div class="container mt-6">
            <form method="POST" action="{{ route('update_comment', $request->id) }}">
                @csrf
                @method('PUT')
                <label for="exampleFormControlTextarea1">Напишите комментарий к заявке</label>
                <textarea name="comment" class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                <button type="submit" class="btn btn-primary mt-4">Отправить</button>
            </form>
        </div>
    </div>
@endsection
