@extends('layout.app.app')
@section('title', 'Статьи')
@section('content')
    @include('partials.header')
    <div class="container mx-auto px-6 py-8">
        <h3 class="text-gray-700 text-3xl font-medium">Заявки</h3>
        <div class="container mt-6">
            <div class="row">
                <div class="col-md-12">
                <a href="{{ route('create_new_request') }}" class="btn btn-success mb-4">Добавить новую заявку</a>
                    @foreach($requests as $request)
                    <div class="card mb-4">
                        <h5 class="card-header">Заявка № {{$request->id}}</h5>
                        <h5 class="card-header">Категория: {{$request->category}}</h5>
                        <p>{{$request->text}}</p>
                        <p>Дата создания : {{$request->created_at}}</p>
                        <div class="card-body">
                            <form method="post" style="display: inline-block">
                                <a href="#" class="btn btn-primary mt-4">Оставить коментарий к заявке</a>
                                <input type="text" class="form-control mt-4" placeholder="Комметерий к заявке">
                                <a href="#" class="btn btn-success mt-4">Ответить на заявку</a>
                            </form>
                        </div>
                    </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
@endsection
