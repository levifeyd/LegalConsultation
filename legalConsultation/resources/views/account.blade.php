@extends('layout.app.app')
@section('title', 'Статьи')
@section('content')

    <div class="container mx-auto px-6 py-8">
        <h3 class="text-gray-700 text-3xl font-medium">Статьи</h3>
        <div class="container mt-6">
            <div class="row">
                <div class="col-md-12">
                <a href="#" class="btn btn-success mb-4">Добавить новый запрос</a>
                    <div class="card mb-4">
                        <h5 class="card-header">Название запроса</h5>
                        <div class="card-body">
                            <a href="#" class="btn btn-primary">Добавить</a>
                            <form method="post" style="display: inline-block">
                                <button type="submit" class="btn btn-danger">Удалить</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
