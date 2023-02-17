@extends('layout.app.app')
@section('title', 'Добавить ответ на заявку')
@section('content')
    @include('partials.header')
    <div class="container mx-auto px-6 py-8">
    <h3 class="text-gray-700 text-3xl font-medium">Ответ на заявку №{{ $request->id }}</h3>
        <div class="container mt-6">
            <form action="{{ route("get_answer, $request->id") }}"  method="post">
                @csrf
                <label for="exampleFormControlTextarea1">Напииште ответ на заявку</label>
                <textarea name="text" class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                <button type="submit" class="btn btn-primary mt-4">Отправить ответ</button>
            </form>
        </div>
    </div>
@endsection
