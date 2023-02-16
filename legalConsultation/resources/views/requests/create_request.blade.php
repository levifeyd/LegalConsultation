@extends('layout.app.app')
@section('title', 'Добавить новую статью')
@section('content')
    @include('partials.header')
    <div class="container mx-auto px-6 py-8">
        <h3 class="text-gray-700 text-3xl font-medium">Новая Заявка</h3>
        <div class="container mt-6">
            <div class="row">
                <div class="col-md-12">
                @if(session('status'))
                    <div class="alert alert-success">
                        {{session('status')}}
                    </div>
                @endif
                    <form enctype="multipart/form-data" method="POST" action="{{ route("add_new_request") }}">
                        @csrf
                            <div class="form-group">
                                <label for="exampleFormControlSelect2">Категория заявки</label>
                                <select name="category" class="form-control" id="exampleFormControlSelect2">
                                    <option value="Земельные споры">Земельные споры</option>
                                    <option value="Семейные споры">Семейные споры</option>
                                    <option value="Трудовые споры">Трудовые споры</option>
                                    <option value="Споры с ГИБДД">Споры с ГИБДД</option>
                                </select>
                            </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Опишите вашу проблему</label>
                            <textarea name="text" class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                        </div>
                        <div class="form-group">
                            <input name="photo" type="file" class="w-full h-12" placeholder="Прикрепите фото"/>
                        </div>
                        <button type="submit" class="btn btn-primary">Отправить заявку</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
