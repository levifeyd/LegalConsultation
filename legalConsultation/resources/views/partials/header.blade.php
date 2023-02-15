<nav class="">
    <div class="mb-2 sm:mb-0 inner">
        <span class="text-xs text-grey-dark">Юридическая консультация</span>
    </div>
    <div class="sm:mb-0 self-center">
        @auth("web")
            <a href="{{route('logout')}}" class="text-md no-underline text-grey-darker hover:text-blue-900 ml-2 px-1">Выйти</a>
        @endauth
        @guest("web")
            <a href="{{route('login')}}" class="text-md no-underline text-grey-darker hover:text-blue-900 ml-2 px-1">Войти</a>
        @endguest
        <style>
            .line {
                border-bottom: 1px solid black;
            }
        </style>
        <p></p>
    </div>
</nav>
