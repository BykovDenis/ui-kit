# План улучшений UI Kit

Рабочий план после миграции темизации на React Context (core 0.3.0 / icon 1.1.0, июль 2026).
Идём по этапам сверху вниз; внутри этапа пункты можно брать в любом порядке.
Отмечаем выполненное: `[x]`, в работе: `[~]`.

---

## Этап 1. Быстрые победы

### 1.1. [x] Transient props в styled-components
**Проблема:** кастомные пропсы (`backgroundColor`, `focusColor`, `isOpen`, `isActive`, …)
утекают в DOM-атрибуты — сотни `console.error` в Jest/CI-логах, за которыми не видно
реальных ошибок.
**Решение (реализовано):** обёртка `styled` в `styles/src/styled.ts` —
Proxy над styled-components с `shouldForwardProp` на базе `@emotion/is-prop-valid`
(на строковых тегах в DOM проходят только валидные атрибуты); все 74 файла
переведены на `import { styled } from '@dbykov-ui-kit/styles'`. Кастомные
`on*`-колбэки (`onRemove`, `onDialogVisibleChange`) is-prop-valid пропускает —
они убраны из спредов точечно (input, select, sticky-bottom-panel).
**Готово, когда:** `npm test` не печатает ни одного warning «does not recognize the prop».
Факт: 189 warning-строк → 0; Jest 49/49 (208); SSR-смоук без утечек; e2e 15/15 (113/113).

### 1.2. [x] Булев `private` в манифестах
**Проблема:** `"private": "false"` строкой — truthy для npm (EPRIVATE при публикации
из неправильной папки, споткнулись при релизе 0.3.0).
**Решение:** `core/package.json` и все `core/packages/*/package.json` — привести к
булеву типу (`true` для непубликуемых, убрать поле у публикуемого).
**Готово, когда:** `grep -r '"private": "false"'` пуст.
Факт: нарушитель был один — core/package.json (компонентные уже были булевы);
заодно добавлен `private: true` в checkbox и styles, где поля не было.
Публикуемые (core/packages, icon) — корректно без поля. Коммит e4167bc.

### 1.3. [x] Гигиена репозитория
- удалить `core/packages/tsconfig.json--old`, `core/packages/_tmp-configs/`;
- поправить опечатку «storebook» в скриптах/конфигах;
- вычистить закомментированные workspace-импорты в demo-app;
- обновить `CLAUDE.md`: описана старая архитектура через `globalThis`, нужно
  описать ThemeProvider/useTheme + compat-шимы.

Сделано (коммит a2b7532): −377 строк мусора; CLAUDE.md переписан — theme context,
styled-обёртка, схема сборки externals+relative dist, реальный publishing flow.

### 1.4. [x] CHANGELOG для icon
Завести `icon/CHANGELOG.MD` по образцу core, задним числом описать 1.1.0.
Факт: файл существовал, но в HTML-разметке и заканчивался на 1.0.2 —
конвертирован в markdown в стиле core, добавлена запись 1.1.0.

---

## Этап 2. Баги в компонентах

### 2.1. [x] Select: setState во время рендера + гонка debounce-фильтра
**Проблема:** в `core/packages/select/src/index.tsx` (~строка 336) setState вызывается
в теле рендера; после выбора опции список мигает нефильтрованным состоянием —
из-за этого флачил e2e (стабилизирован на уровне теста, первопричина осталась:
пользователь может кликнуть не в ту опцию).
**Решение:** перенести синхронизацию в `useEffect`/`useMemo`, фильтр считать
производным состоянием, а не копией.
**Готово, когда:** Jest + e2e зелёные, повтор `errors-table.cy.tsx` ×10 без флака
даже с позиционным селектором.

Сделано (коммит 67f7f03). Дефектов оказалось три: вложенный компонент-портал
(новый тип каждый рендер → полный ремаунт списка при любом setState — тот же
паттерн исправлен в обоих multi-select), фильтрация в passive-эффекте по [label]
(закоммиченный кадр со старым фильтром между нажатием и эффектом), setState в
map при рендере. Фильтр/isFoundValue/isNewElement теперь useMemo-производные;
«идёт фильтрация» = label есть + activeElement пуст (семантика сохранена).
Стресс-критерий: позиционный div:first — 0/10 до фикса, 10/10 после.

### 2.2. [x] Анти-паттерн «props → useState»
**Проблема:** Button и ряд компонентов инициализируют состояние из пропсов и не
реагируют на их смену (у потребителей «залипают» значения).
**Решение:** аудит всех `useState(props.*)`; где состояние не нужно — убрать,
где нужно — контролируемый/неконтролируемый паттерн с `defaultValue`.
**Затрагивает:** button, input, multi-select, datepicker (аудит покажет полный список).

Сделано (коммит 61a8dce). Аудит: 22 вхождения в 13 файлах. 17 зеркал заменены
на производные значения (state+эффект → одно выражение; копии без синка молча
игнорировали смену пропа — реальный фикс: isNotRunDebounce в input, Select
передаёт его динамически). Оставлены как state (полу-контролируемые, сеттеры
в обработчиках): value в textfield/datepicker, isError в datepicker, inputValue
в input. Проверки: Jest 208, полная сборка, Cypress 113/113.

---

## Этап 3. Инфраструктура

### 3.1. [x] Апгрейд Jest 27 → 29
**Проблема:** jest 27 + ts-jest 29 несовместимы по мажорам, держатся на явно
приколоченном `jest-util@27.5.1` (костыль после падения CI).
**Решение:** jest/@types/jest/jest-environment-jsdom → 29.x; убрать `jest-util` из
devDeps; убрать `__mocks__/uuidMock.js` и маппинг `^uuid$` (Jest 29 умеет ESM).
**Готово, когда:** 49 сьютов зелёные без jest-util в манифесте и без uuid-мока.
Сделано (коммит 544432e): jest/@types/jest/jest-environment-jsdom 29.7.0;
jest-util 29 хостится сам; uuid-мок не понадобился (после ресинка lockfile
uuid CJS-совместимый); 2 снапшота обновлены под новый формат сериализатора.

### 3.2. [x] Jenkinsfile: упростить и ускорить
- заменить ~30 последовательных стадий «X deploy» одной стадией с `build.sh`;
- вынести publish из хвоста пайплайна (сейчас он недостижим при любом падении)
  или сделать отдельной джобой; добавить публикацию icon;
- кэшировать npm (сейчас каждый билд качает всё с нуля);
- почистить `core/packages/.npmrc` после publish-стадии (протухший токен уже
  ломал ручную публикацию).

Сделано (коммиты cc53a4c, d995bd0): 578 строк → ~170, 5 стадий; publish
достижим, идемпотентен (проверка версии в registry), с 15-минутным таймаутом
на подтверждение, публикует и icon, удаляет .npmrc после себя; установки с
--prefer-offline --no-audit --no-fund.

### 3.3. [x] Выровнять версии зависимостей
- styled-components: core 6.4.0 vs demo-app 6.0.7 (вложенная копия в node_modules);
- Storybook: микс 8/9/10 в devDeps — привести к одной мажорной версии;
- react/@types/react: единая версия во всех workspace.

Сделано (коммит d995bd0): styled-components 6.4.0 везде (вложенная копия в
demo-app исчезла); Storybook весь на 10.4.6, три неиспользуемых пакета 8.x/9.x
удалены; react 18.2.0 + @types 18.0.28/18.0.11 везде (в icon/styles был react
18.3.0 — та самая вторая копия из SSR-смоука); у icon/styles больше нет своих
devDeps — собирается инструментами icon (свой node_modules со вторым rollup
ломал сборку); @testing-library/dom и user-event объявлены явно.

---

## Этап 4. Стратегическое

### 4.1. [~] Доступность (a11y)
Select/MultiSelect: роли `combobox`/`listbox`/`option`, `aria-expanded`,
`aria-activedescendant`, клавиатурная навигация (стрелки, Enter, Esc, Home/End);
Datepicker: роль `dialog`+grid для календаря; фокус-трап в Popup.
Начать с Select как самого используемого.

Сделано (ветка feature/select-a11y): **Select** реализует APG combobox —
input `role=combobox` + `aria-expanded/controls/autocomplete/activedescendant`,
список `role=listbox`, опции `role=option` + `aria-selected`; клавиатура
ArrowUp/Down (с wrap), Home/End, Enter, Esc; подсветка highlightedIndex
синхронна фильтру (Enter берёт лучший матч). `IInput`/`IList` расширены
`React.AriaAttributes`. 4 unit-теста + 3 e2e (Test 12-14). Осталось:
MultiSelect, Datepicker, Popup focus-trap.

### 4.2. [ ] Новый API как основной
- JSDoc `@deprecated` на `getNewReactThemeContext`/`getNewReactIconContext`;
- README с примерами `<ThemeProvider theme={...}>` / `<IconProvider ...>`;
- demo-app перевести на провайдеры как образец использования;
- план удаления compat-шимов в 1.0.0 core.

### 4.3. [ ] TypeScript strict
Включать `strict: true` попакетно (начать с shared: styles, helpers, types),
убирать `any`, генерировать d.ts из исходников вместо ручных `index.d.ts`
(ручные уже расходились с реальностью при миграции).

---

## Договорённости

- Каждый пункт — отдельный коммит (или серия), после — Jest + e2e локально.
- Релизы: patch за баги (2.x), minor за API (4.2); demo-app бампаем сразу после
  публикации, иначе CI e2e падает на старом lockfile.
- Публикация: `npm publish --access public` из `core/packages/` и `icon/`
  (не из `core/` — там private root-core).
