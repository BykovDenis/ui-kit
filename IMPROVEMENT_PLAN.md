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

### 4.1. [x] Доступность (a11y)
Select/MultiSelect: роли `combobox`/`listbox`/`option`, `aria-expanded`,
`aria-activedescendant`, клавиатурная навигация (стрелки, Enter, Esc, Home/End);
Datepicker: роль `dialog`+grid для календаря; фокус-трап в Popup.
Начать с Select как самого используемого.

Сделано (ветка feature/select-a11y):
- **Select** — APG combobox: input `role=combobox` +
  `aria-expanded/controls/autocomplete/activedescendant`, список `role=listbox`,
  опции `role=option` + `aria-selected`; клавиатура ArrowUp/Down (wrap),
  Home/End, Enter, Esc; подсветка синхронна фильтру. 4 unit + 3 e2e.
- **MultiSelect** — это не combobox, а кнопка-раскрывашка с панелью
  (поиск + кнопки), поэтому честная модель: триггер `aria-expanded` +
  `aria-haspopup=dialog` + `aria-controls` + `aria-label`, панель
  `role=dialog`; доступные имена у поиска и кнопок-крестиков удаления
  (были безымянные). Tab-навигация нативная (опции — настоящие кнопки).
- **Datepicker** — календарь `role=dialog` + локализованный `aria-label`;
  кнопки дней: `aria-label` с полной датой, `aria-current=date` (сегодня),
  `aria-pressed` (выбранный); 4 иконочные кнопки навигации получили имена.
  Формальный `role=grid` не ставился: разметка плоская, без строк-недель —
  grid без row был бы ложью для скринридера. Попутно исправлен вложенный
  компонент-портал (ремаунт-баг из 2.1, тот же паттерн).
- **Popup** — `role=dialog` + `aria-label(ledby)`, фокус входит в попап при
  открытии и возвращается к оперу при закрытии, Esc → новый опциональный
  `onClose`; попутно тот же фикс вложенного портала. Полный focus-trap не
  ставился: Popup немодальный (без оверлея), trap корректен только с
  `aria-modal=true`.

### 4.2. [x] Новый API как основной
- JSDoc `@deprecated` на `getNewReactThemeContext`/`getNewReactIconContext`;
- README с примерами `<ThemeProvider theme={...}>` / `<IconProvider ...>`;
- demo-app перевести на провайдеры как образец использования;
- план удаления compat-шимов в 1.0.0 core.

Сделано: `@deprecated` JSDoc на обоих шимах (исходники + ручные d.ts) с
целями удаления — core 1.0.0 / icon 2.0.0. Три README переписаны на
provider-first: `core/packages/README.md` (уходит в tarball; темы, ITheme,
`useTheme()`, fallback, секция Legacy bootstrap), корневой `README.md`
(ThemeProvider+IconProvider, legacy в `<details>`), `icon/README.md` (был
1 строкой — теперь install, IconProvider, `useIconContext()`, legacy).
demo-app полностью на провайдерах: `app.tsx` — `<ThemeProvider>` +
`<IconProvider>` + AppLayout с `useTheme()`; 4 потребителя переведены с
`useContext(ReactThemeContext)` на `useTheme()`/`useIconContext()`.
Проверено против опубликованных 0.4.0/1.1.0: Jest 214/214, Cypress e2e
116/116 (15 спеков).

### 4.3. [~] TypeScript strict
Включать `strict: true` попакетно (начать с shared: styles, helpers, types),
убирать `any`, генерировать d.ts из исходников вместо ручных `index.d.ts`
(ручные уже расходились с реальностью при миграции).

Срез 1 (shared): `tsconfig.strict.json` с include-списком мигрированных
пакетов + `npm run type-check` в core + вызов в Jenkinsfile перед юнитами.
Strict-чистые: constants, enums, helpers, styles, types, utilities (7 ошибок,
все в helpers; мёртвый render-children-with-props удалён — tabs держит свою
копию). Причина расхождения ручных d.ts найдена: rollup-plugin-dts предпочитает
соседний `src/index.d.ts` исходнику — ручной файл молча затенял реальные типы.
styles переведён на генерацию из `index.ts` (ручной d.ts удалён, добавлены
`export type ITheme/IThemes`, паритет проверен диффом, @deprecated теперь
в dist). Осталось: компонентные пакеты (33 ручных src/index.d.ts) + icon.
Проверено: type-check 0 ошибок, Jest 214/214, e2e 116/116 (tarball).

Срез 2: strict-include расширен с 6 до 36 директорий. Аудит показал 193
ошибки, но у 17 пакетов — ноль; ещё ~40 погасли фиксами сигнатур хелперов
(isNotEmptyNumber/isNotEmptyString — type predicates, rgbToRgba принимает
undefined, key-up хендлеры с опциональным колбэком). Точечно починены
checkbox, radio, file-uploader, tab, switcher, sticky-bottom-panel,
icons-components (add-icon). +@types/uuid в core devDeps (uuid 10 без
типов). Вне strict: datepicker (83), multi-select (24), select (16),
table-columns-visible (12), input (9), textfield (7) — и тестовые файлы.
Проверено: type-check 0, Jest 214/214, e2e 116/116 (tarball).

Срез 3: input, textfield, table-columns-visible strict-чистые (39/42
директорий). Честные сигнатуры parseValue/calculationPaddingByTextAlign,
в IInput.onChange/onRemove параметр name опционален (name — опциональный
проп). Найден реальный баг: fontWeight={props?.fontWeight |
FONT_WEIGHT_REGULAR} — ПОБИТОВОЕ или, искажавшее нестандартные значения
(300|400=444), заменён на ??. Осталось: select (16), multi-select (24),
datepicker (83), тестовые файлы, icon-пакет.
Проверено: type-check 0, Jest 214/214, e2e 116/116 (tarball).

Срез 4: select strict-чистый (40/42). Найден необъявленный тип `IElement`
в iselect.d.ts — не ловился раньше только из-за noImplicitAny:false в
базовом конфиге (TS резолвил в any); заменён на IOption. IOption.label
теперь `string | null` (соответствует рантайму — activeElement может
быть очищен). onChange/onRemove/onMouseDown — опциональные колбэки.
datepicker (не в strict-списке) использует ISelect и IOption — под
базовым (non-strict) конфигом кросс-ошибок нет, они всплывают только
под --strict, так что сборка/рантайм не затронуты.
Осталось: multi-select (24), datepicker (83), тестовые файлы, icon.
Проверено: type-check 0, Jest 214/214, e2e 116/116 (tarball, включая
select.cy.tsx 14/14 и datepicker).

Срез 5: multi-select strict-чистый (41/42). Найден структурный баг типов:
TMultiSelectObjects/TMultiSelectString расширяли TMultiSelect через `&`
(пересечение), а не переопределение — для полей elementNames/onChange,
переобъявленных с другим типом, пересечение давало невыполнимые типы
(`string[] & TMultiSelectOption[]`), которые раньше молча проходили
только из-за некорректной проверки. Исправлено на
`Omit<TMultiSelect, keys> & {...}`. Остальное — как в прошлых срезах:
опциональные колбэки, честные типы filter/map, dataset-чтения. Удалён
мёртвый хелпер get-values-from-elements.ts (нигде не импортировался).
Осталось: только datepicker (83) + тестовые файлы + icon-пакет.
Проверено: type-check 0, Jest 214/214, e2e 116/116 (tarball, включая
multiselect.cy.tsx 8/8).

---

## Договорённости

- Каждый пункт — отдельный коммит (или серия), после — Jest + e2e локально.
- Релизы: patch за баги (2.x), minor за API (4.2); demo-app бампаем сразу после
  публикации, иначе CI e2e падает на старом lockfile.
- Публикация: `npm publish --access public` из `core/packages/` и `icon/`
  (не из `core/` — там private root-core).
