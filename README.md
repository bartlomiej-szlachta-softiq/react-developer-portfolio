# React Developer Portfolio

Aplikacja webowa utworzona w React na potrzeby szkolenia wewnętrznego SOFTIQ.

### Cel szkolenia

Rozwój aplikacji spełniającej funkcję portfolio programisty, przykład: https://react-developer-portfolio-zeta.vercel.app/.

### Stos technologiczny (w finalnej aplikacji)

- [React](https://pl.reactjs.org/)
- [React Router](https://reactrouter.com/en/main)
- [Bootstrap](https://getbootstrap.com/)
- JavaScript ES6
- HTML5
- CSS

### Przygotowanie środowiska deweloperskiego

1. Instalacja narzędzia [npm](https://www.npmjs.com/), najprościej poprzez [node.js](https://nodejs.org/en/download/).
2. (Dla Windowsa) Dodanie *npm* do zmiennej środowiskowej `PATH` (domyślnie jest w katalogu `C:\Users\SQ12345\AppData\Roaming\npm`).
3. W folderze projektu wykonanie komendy `npm install`, która pobierze pliki wykorzystywanych bibliotek (w tym Reacta) do katalogu `node_modules`.
4. W folderze projektu wykonanie komendy `npm start`, która uruchomi lokalny serwer deweloperski obsługujący hot-reloading.

### Przebieg szkolenia

1. Krótkie wprowadzenie teoretyczne
2. Omówienie działania docelowej aplikacji
3. Uruchomienie bazowego projektu
4. Omówienie bazowego projektu
5. Nauka poszczególnych aspektów Reacta podczas implementacji dodatkowych funkcjonalności do bazowego projektu w ramach wymienionych zadań. Rozwiązanie każdego z zadań będzie się znajdować na osobnej gałęzi o nazwie np `task5`.
   1. Trzeba utworzyć nowy komponent o nazwie np `ProjectsList`, wyświetlający nagłówek *Projekty* i renderować go w `App.jsx` pod formularzem.
   2. Imię, nazwisko i stanowisko osoby trzeba przekazać do komponentu `Header` przez `props`.
   3. W komponencie `Header` trzeba dodać ikonę poczty e-mail. Najechanie kursorem na ikonę powinno zmienić jego styl. Definicja stylu kursora powinna znajdować się w pliku `css`/`scss`. Obsługa naciśnięcia ikony będzie w ramach następnego zadania.
   4. Trzeba dodać stan w `App.jsx` przechowujący informację o tym, czy formularz jest widoczny. Naciśnięcie ikony poczty powinno pokazywać / ukrywać formularz.
   5. Trzeba dodać pola formularza, których wartości będą przechowywane w stanie komponentu. Wpisanie wartości do pól formularza powinno zaktualizować stan komponentu.
   6. Naciśnięcie etykiety pola powinno ustawić focus na powiązane pole. Trzeba użyć hooka `useId`.
   7. W momencie naciśnięcia przycisku *Wyślij* trzeba wysłać zapytanie API. Na czas wysyłania zapytania przycisk powinien być wyłączony oraz powinna być widoczna animacja. Po otrzymaniu odpowiedzi trzeba wyświetlić wiadomość, jaka przyszła przez API, oraz wyczyścić pola formularza.
   8. Trzeba wykonać zapytanie uzyskujące listę projektów. Na czas wykonywania zapytania trzeba wyświetlić animację ładowania. Wyświetlenie projektów będzie w ramach następnego zadania, na ten moment wystarczy zapisać je w stanie.
   9. Trzeba wyświetlać załadowane wcześniej dane o projektach.
   10. Trzeba dodać do projektu bibliotekę `react-router`. Trzeba przerobić aplikację w taki sposób, żeby były zdefiniowane dwie ścieżki. `/` (główny ekran) i `/contact`. Na obu ekranach powinien być wyświetlany nagłówek (nasz komponent `Header`). Na stronie głównej byłaby lista projektów, a nagłówek zawierałby dotychczasową ikonę kontaktu (przekierowującą na adres `/contact`). Pod adresem `/contact` byłby formularz kontaktowy, a nagłówek wyświetlałby ikonę powrotu, która przekierowywałaby pod adres `/`. Najlepiej, gdyby nazwy ścieżek aplikacji znajdowały się w osobnym pliku, np `/src/utils/routeNames.js`.
   11. Trzeba na głównym ekranie (pod adresem `/`) wyświetlać tylko 3 pierwsze projekty oraz wyświetlać przycisk 'Pokaż więcej'. Naciśnięcie przycisku powinno przekierować na nowy ekran, pod adresem `/projects`, na którym byłby wyświetlany komponent Header oraz lista wszystkich projektów (taka, jak do tej pory na stronie głównej). W komponencie `Header` zamiast ikony kontaktu wyświetlałaby się ikona powrotu, przekierowująca na ekran główny. Po wejściu na adres `/projects` powinno być wykonywane zapytanie API pobierające projekty.
   12. Trzeba utworzyć kontekst pobierający i przechowujący informację o projektach oraz wykorzystywać go we wszystkich miejscach, gdzie potrzebne są dane projektów. Dzięki temu, przechodząc ze strony głównej na stronę z projektami, nie będzie się pojawiać animacja ładowania.
   13. Trzeba utworzyć własny hook o nazwie np `useAsyncAction`, który byłby wrapperem dla asynchronicznych funkcji. Jako argument przyjmowałby funkcję `action`, która przyjmuje opcjonalny parametr i nie zwraca żadnej wartości. Hook przechowywałby informację o tym, czy trwa wysyłanie zapytania, oraz o tym, czy wystąpił błąd. Zwracaną wartością z hooka byłaby lista, w której:
         - pierwszym elementem jest asynchroniczna funkcja wywołująca funkcję `action`, ale z obsługą błędów,
         - drugim elementem byłaby informacja o tym, czy trwa wysyłanie zapytania,
         - trzecim elementem byłaby informacja o tym, czy wystąpił błąd.
