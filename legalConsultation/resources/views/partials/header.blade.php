<nav class="">
    <div class="mb-2 sm:mb-0 inner" style="text-align: center">
        <h1 class="text-xl text-gray-800">Юридическая консутльтация</h1>
        <h5 class="text-xl text-gray-800">Здравствуйте
            @if(isset($user))
                {{ $user->name }}
            @endif
        !</h5>
{{--    </div>--}}
        @auth("web")
            <a href="{{ route('account') }}" class="btn btn-primary">Мой кабинет</a>
            <a href="{{route('logout')}}" class="btn btn-primary">Выйти</a>
        @endauth
        @guest("web")
            <a href="{{route('login')}}" class="btn btn-primary">Войти</a>
        @endguest
    </div>
</nav>
