<h1>Публикация UI-Kit</h1>

<ol>
    <li>В консоли lerna bootstrap (установка всех зависимостей пакетов в node_modules)</li>
    <li>В консоли lerna run build (транспилировать все пакеты в dist в соответствующих директориях)</li>
    <li>Закоммитить все изменения</li>
    <li>Перейти в папку cd packages </li>
    <li>lerna public (указать новую версию) </li>
    <li>npm publish --registry https://nexus.sigma.sbrf.ru/nexus/content/repositories/npm-corp/ </li>
</ol>
