@extends('layout.app.app')
@section('title', 'Статьи')
@section('content')
    @include('partials.header')
    <div class="container mx-auto px-6 py-8">
        <h3 class="text-gray-700 text-3xl font-medium">Лента заявок</h3>
        <div class="container mt-6">
            <div class="row">
                <div class="col-md-12">
                    @if($user->hasRole('user'))
                        <a href="{{ route('create_new_request') }}" class="btn btn-success mb-4">Добавить новую заявку</a>
                    @endif
                    @foreach($requests as $request)
                        <div class="card mb-4">
                            <h8 class="card-header">Заявка № {{$request->id}}</h8>
                            <h8 class="card-header">Категория: {{$request->category}}</h8>
                            <h8 class="card-header">Статус заявки: {{$request->status}}</h8>
                            @if($request->status == 'Выполнена' || $request->status == 'В работе')
                                <h8 class="card-header">Ответ на заявку: {{$request->answer}}</h8>
                            @endif
                            @if(isset($request->comment))
                                <h8 class="card-header">Комментарий к заявке: {{$request->comment}}</h8>
                            @endif
                            <p>{{$request->text}}</p>
                            <p>Дата создания : {{$request->created_at}}</p>
                            <div class="card-body">
                                <form method="post" style="display: inline-block">
                                    @if($user->hasRole('user') && $request->status == 'В работе' && !isset($request->comment))
                                        <a href="{{ route('add_comment', $request->id) }}" class="btn btn-primary">Оставить коментарий к заявке</a>
                                    @endif
                                    @if($user->hasRole('user') && $request->status == 'В работе')
                                        <a href="{{ route('complete_request', $request->id) }}" class="btn btn-primary">Заявка выполнена</a>
                                    @endif
                                    @if($user->hasRole('lawyer') && ($request->status == "Новая"))
                                        <a href="{{ route('add_answer', $request->id) }}" class="btn btn-success mt-4">Выполнить заявку</a>
                                    @endif
                                </form>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
@endsection
