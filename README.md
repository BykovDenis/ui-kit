<h1>Публикация UI-Kit</h1>

<ol>
    <li>В консоли lerna bootstrap (установка всех зависимостей пакетов в node_modules)</li>
    <li>В консоли lerna run build (транспилировать все пакеты в dist в соответствующих директориях)</li>
    <li>Закоммитить все изменения</li>
    <li>lerna publish (указать новую версию) - при публикации возникнет ошибка, публикацию в нексус делать через npm </li>
    <li>В package.json корне packages указать новую версию пакета </li>
    <li>Закоммитить новые версии пакетов </li>
    <li>Перейти в папку cd packages </li>
    <li>lerna clean (почистить все пакеты node_modules) - для уменьшения размера пакета </li>
    <li>npm publish --registry https://nexus.sigma.sbrf.ru/nexus/content/repositories/npm-corp/ </li>
</ol>

<h2> Работа с Lerna</h2>

<ul>
    <li> 
        <b>lerna add <package>[@version] [--dev] [--exact] [--peer]</b>
    </li>
    <li>
        lerna clean - почистить все node_modules
    </li>
</ul>
