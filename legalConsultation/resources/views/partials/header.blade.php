<nav class="">
    <div class="mb-2 sm:mb-0 inner">
{{--        <span class="text-xs text-grey-dark">Юридическая консультация</span>--}}
        <h1 class="text-xl text-gray-800">Юридическая консутльтация</h1>
        <h5 class="text-xl text-gray-800">Здравствуйте
            @if(isset($user))
                {{ $user->name }}
            @endif
        !</h5>
    </div>
{{--    <div class="sm:mb-0 self-right">--}}
        @auth("web")
            <div style="float: right">
                <a href="{{route('logout')}}" class="tab">Выйти</a>
            </div>
                <a href="{{ route('account') }}" class="text-indigo-600 hover:text-indigo-900">Мой кабинет</a>
        @endauth
        @guest("web")
        <div style="float: right">
            <a href="{{route('login')}}" class="text-md">Войти</a>
        </div>
        @endguest
{{--    </div>--}}
</nav>
