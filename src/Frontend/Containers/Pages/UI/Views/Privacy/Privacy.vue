<template>
    <div class="privacy">
        <BaseHeading class="privacy__heading">Политика приватности</BaseHeading>
        <div class="privacy__text">
            <section class="privacy__main">
                <BaseHeading
                    :level="2"
                    class="privacy__section-heading"
                >
                    Определение и термины
                </BaseHeading>
                <ol class="privacy__list">
                    <li>
                        Сайт – любой из сайтов компании, размешенных в сети Интернет.
                    </li>
                    <li>Клиент – физическое лицо, использующее сайт Компании.</li>
                    <li>Персональные данные - информация, относящаяся к определенному Клиенту, указанная в п. 3.1 настоящего
                        Положения.</li>
                    <li>Обработка персональных данных – любые операции, совершаемые с использованием средств автоматизации
                        или без использования таких средств с персональными данными, включая сбор, запись, систематизацию,
                        накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу
                        (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение
                        персональных данных.</li>
                    <li>Cookies - фрагменты данных, отправляемых веб-сервером браузеру при посещении сайта Клиентом.
                        Компания автоматически получает некоторые виды информации, получаемой в процессе взаимодействия
                        пользователей с Cайтом. Речь идет о технологиях и сервисах, таких как веб-протоколы, куки,
                        веб-отметки, а также приложения и инструменты указанных третьей стороны. Куки – это часть данных,
                        автоматически располагающаяся на жестком диске компьютера при каждом посещении веб-сайта. Таким
                        образом, куки – это уникальный идентификатор браузера для веб-сайта. Куки дают возможность хранить
                        информацию на сервере и помогают легче ориентироваться в веб-пространстве, а также позволяют
                        осуществлять анализ сайта, оценку результатов и таргетирование поведенческой рекламы. Большинство
                        веб-браузеров разрешают использование куки, однако можно изменить настройки для отказа от работы с
                        куки или отслеживания пути их рассылки. При этом некоторые ресурсы могут работать некорректно, если
                        работа куки в браузере будет запрещена.</li>
                </ol>
            </section>
            <section class="privacy__targets">
                <BaseHeading
                    :level="2"
                    class="privacy__section-heading"
                >Цели и принципы</BaseHeading>
                <p>Клиент предоставляет свои персональные данные с целью:</p>
                <ul class="privacy__list">
                    <li>создания учетной записи;</li>
                    <li>оформление бронирования столов;</li>
                    <li>получения новостей, рекламных акций;</li>
                    <li>использования иных имеющихся на сайте сервисов, включая форум, персональные блоги, сервис обмена
                        личными сообщениями между зарегистрированными участниками, персонализированные комментарии и отзывы,
                        но не ограничиваясь ими.</li>
                </ul>
                <p>Предоставленные данные могут быть использованы в целях продвижения товаров от имени Компании или от имени
                    партнеров Компании.</p>
            </section>
            <section class="privacy__information">
                <BaseHeading
                    :level="2"
                    class="privacy__section-heading"
                >Информация, подлежащая обработке</BaseHeading>
                <p>Персональные данные, разрешённые к обработке в рамках настоящей Политики конфиденциальности,
                    предоставляются Клиентом путём заполнения регистрационной формы на сайте Компании и включают в себя
                    следующую информацию:</p>
                <ul class="privacy__list">
                    <li>ФИО Клиента;</li>
                    <li>контактный телефон Клиента;</li>
                    <li>адрес электронной почты (e-mail);</li>
                    <li>историю бронирования;</li>
                    <li>Компания также получает данные, которые автоматически передаются в процессе просмотра при посещении
                        сайта.</li>
                </ul>
            </section>
            <section class="privacy__cookies">
                <BaseHeading
                    :level="2"
                    class="privacy__section-heading"
                >
                    Политика использования cookie-файлов
                </BaseHeading>
                <p>
                    Политика использования cookie - файлов применяется в дополнение к общей Политике конфиденциальности и
                    описывает типы файлов cookie, цели их использования и способы, с помощью которых можно от них
                    отказаться.
                </p>
                <p>
                    Что такое cookie – файлы:
                </p>
                <p>
                    Во время просмотра любых сайтов в сети Интернет на ваш компьютер загружается сама страница, а также
                    небольшой текстовый файл под названием «cookie». С их помощью сайт запоминает информацию о ваших
                    посещениях. Это упрощает взаимодействие с сайтом и делает его полезнее для вас. В этих целях также
                    используются другие технологии, включая уникальные идентификаторы (они нужны, чтобы различать браузеры,
                    приложения или устройства), пиксели и локальное хранилище. Сookie автоматически располагаются на жестком
                    диске компьютера при каждом посещении веб-сайта.
                </p>
                <p>ВАЖНО: Вы можете отказаться от использования cookie, выбрав соответствующие настройки в браузере.</p>
                <p>
                    Используя Сайт, вы соглашаетесь с настоящей Политикой и подтверждаете свое согласие на использование cookie – файлов в установленном порядке.
                </p>
                <p>
                    В случае несогласия с порядком использования cookie – файлов указанным образом Вы можете ограничить использование cookie – файлов в настройках вашего браузера или не использовать Сайт.
                </p>
            </section>
        </div>
    </div>
</template>

<script setup>
import BaseHeading from '@/Shared/Components/BaseHeading/BaseHeading.vue';


</script>

<style lang="scss">@import "@/Containers/Pages/UI/Assets/Scss/pages-text";
@import '@/Shared/Assets/Scss/container';

.privacy {
    @include site-container;
    @include pages-content;
}</style>