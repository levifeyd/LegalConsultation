@extends('layout.app.app')
@section('title', 'Статьи')
@section('content')
@include('partials.header')
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="resources/js/filter.js"></script>
    <script src="resources/js/filter_id.js"></script>
    <div class="container mx-auto px-6 py-8">
        <h3 class="text-gray-700 text-3xl font-medium">Лента заявок</h3>
        <div class="container mt-6">
            <div class="row">
                <div class="col-md-12">
                    @if($user->hasRole('user'))
                        <a href="{{ route('create_new_request') }}" class="btn btn-success mb-4">Добавить новую заявку</a>
                    <p>Выберите период даты заявки</p>
                    <div class="container">
                    <form>
                        @csrf
                        <input name="dateFrom" type="text" id="dateFrom" class="w-full h-12" placeholder="Веедите дату с(2023-02-22 09:21:07)"/>
                        <input name="dateTo" type="text" id="dateTo" class="w-full h-12" placeholder="Веедите дату до (2023-03-22 22:21:07)"/>
                        <button type="button" id="dateFilter" class="btn btn-primary">Показать по дате</button>
                    </form><br>
                    </div>

                    <div class="requests-controls">
                        <button type="button" id="user_id_filter" value="{{$user->id}}" class="btn btn-success mb-4">Показать только мои заявки</button>
                    </div>
                    @endif
                    @if($user->hasRole('lawyer'))
                    <div class="filter-controls">
                        <label for="status-filter">Выбрать статус:</label>
                        <select id="status-filter">
                            <option value="Все" selected>Все</option>
                            <option value="Новая">Новая</option>
                            <option value="В работе">В работе</option>
                            <option value="Выполнена">Выполнена</option>
                        </select>
                    </div>
                    @endif
                    <ul id="requests-list">
                    @foreach($requests as $request)
                        @if(($user->hasRole('lawyer')
                            && (($request->lawyer_id == $user->id) || $request->status == 'Новая'))
                            || $user->hasRole('user'))
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
                        @endif
                    @endforeach
                    </ul>
                </div>
            </div>
        </div>
    </div>
@endsection
