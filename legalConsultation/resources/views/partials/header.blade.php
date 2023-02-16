<nav class="">
    <div class="mb-2 sm:mb-0 inner">
{{--        <span class="text-xs text-grey-dark">Юридическая консультация</span>--}}
        <h1 class="text-xl text-gray-800">Юридическая консутльтация</h1>
    </div>
    <div class="sm:mb-0 self-center">
        @auth("web")
            <a href="{{route('logout')}}" class="text-md">Выйти</a>
        @endauth
        @guest("web")
            <a href="{{route('login')}}" class="text-md">Войти</a>
        @endguest
            <br>
            <a href="{{ route('account') }}" class="text-indigo-600 hover:text-indigo-900">Мой кабинет</a>
    </div>
</nav>
