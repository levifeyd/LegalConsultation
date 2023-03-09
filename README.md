# Описание
Тестовое задание на Laravel(PHP). Включает в себя форму авторизации, две роли (Клиент, Юрист) и возможности для клиента добавлять заявки, комменитровать ответ юриста на заявку, и ставить статус для завявки "выполнено".
* У юриста есть возможность отвечать на заявки клиентов. 
* Также есть фильтры(показать только свои заявки для роли 'user' и фильтр по статусу заявки для роли 'lawyer') использующие ajax запросы.
* Регистрация отсутствует, пароли и логины(клиент, юрист) есть в файле CreateUserSeeder.php.
# Авторизация
![Auth view](screenshots/auth_page.png)
# Панель для роли "Клиент"
![Main view](screenshots/account_page_1.png)
![Main view](screenshots/account_page_2.png)
![Main view](screenshots/account_page_3.png)
![Main view](screenshots/account_page_4.png)
# Можно создать новую заявку указав категорию и написать текст заявки, также можно добавить изображение
![Main view](screenshots/create_page_1.png)
![Main view](screenshots/create_page_2.png)
![Main view](screenshots/complete_!_create_page_3.png)
# Так рабоатет фильтр по датам заявок
![Main view](screenshots/filter_date_page_account_page_1.png)
![Main view](screenshots/filter_date_page_account_page_2.png)
# Так рабоатет фильтр "Показать только мои зявки"
![Main view](screenshots/filter_only_my_page_account_page_1.png)
![Main view](screenshots/filter_only_my_page_account_page_2.png)
# Панель для роли "Клиент"
![Main view](screenshots/lawyer_page.png)
# Так можно применить фильтр по заявкам и указать нужную категорию заявок по статусу("новая", "выполена","в работе")
![Main view](screenshots/law_filter_new.png)
#  Можно дать ответ на заявку
![Main view](screenshots/take_req.png)
