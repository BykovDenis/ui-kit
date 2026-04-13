<h1>Публикация UI-Kit</h1>

<ol>
    <li>Перейти в каталог packages</li>
    <li>В консоли npm run prepare-ui-kit </li>
    <li>Закоммитить все изменения</li>
    <li>lerna publish (указать новую версию) - при публикации возникнет ошибка, публикацию в нексус делать через npm </li>
    <li>В package.json корне packages указать новую версию пакета </li>
    <li>Закоммитить новые версии пакетов </li>
    <li>В консоли npm run publish-ui-kit</li>
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
