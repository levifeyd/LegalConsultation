@extends('layout.app.app')
@section('title', 'Добавить новую статью')
@section('content')
<div class="container mt-6">
    <div class="row">
        <div class="col-md-12">
            @if(session('status'))
                <div class="alert alert-success">
                    {{session('status')}}
                </div>
            @endif
            <form method="POST" action="#">
                @csrf
                <div class="form-group">
                    <label for="exampleInputEmail">Title</label>
                    <input name="name" type="text" class="form-control" id="exampleInputEmail">
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Text</label>
                    <textarea name="text" class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</div>
@endsection
