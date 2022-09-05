const command = [
    {
        id: "man",
        name: "man (ang. manual) – instrukcja obsługi",
        skladnia: "man nazwa_strony",
        info: "Polecenie służące do wyświetlania stron pomocy man.\n",
        flags: `Aplikacja nie jest prawdziwym terminalem i należy wykorzystywać tylko te polecnia i ich flagi, które są w manualu.
        ls - lista zawatości katalogu
        cd - zmienia katalog roboczy
        pwd - wypisz nazwę bieżącego/roboczego katalogu
        cat - łączyć pliki i drukuje na standardowym wyjściu
        cp - kopiuje pliki i katalogi
        mv - przenosi lub zmienia nazwy plików
        mkdir - tworzy katalogi
        rmdir - usuwa puste katalogi
        rm - usuwa pliki lub katalogi
        touch - zmienia znaczniki czasu plików i tworzy pliki jak nieistnieją
        history -  wyświetla historię wiersza poleceń
        clear -  czyści ekran terminala
        tail -  wyświetla ostatnią część plików
        head -  wyświetla pierwszą część plików
        date -  wydrukuj datę i godzinę systemową
        nano - edytor
        echo - wyświetla linię tekstu
        wc - wypisuje liczbę nowych linii, słów i bajtów dla każdego pliku
        whoami - drukuje identyfikator użytkownika`

    },
    {
        id: "ls",
        name: "ls - lista zawatości katalogu \n",
        skladnia: "ls [OPTION]... [FILE]...\n",
        info: "Wyświetla informacje o PLIKACH (bieżący katalog domyślnie). Sortuj wpisy alfabetycznie\n",
        flags: ` -a  wyświetla wszystkie pliki, w tym pliki ukryte, zaczynające się od '.' 
                -d  wyświetla katalogi a nie ich zawartość 
                -l  wyświetli więcej informacji o plikach 
                -r  odwrotna kolejność podczas sortowania 
                -S  sortuj według rozmiaru pliku 
                --help`
    },
    {
        id: "cd",
        name: "cd - zmienia katalog roboczy(w prawdziwym manualy nie ma opisukomendy cd)\n",
        skladnia: "cd [OPTION / DIRECTORY] \n",
        info: "Jeśli podano DIRECTORY, zmienia katalog roboczy powłoki na DIRECTORY. Domyślnie zmienia się na HOME (zmienna powłoki).\n",
        flags: ` ..  przechodzi do katalogu o jeden wyższego w drzewie katalogów niż obecny
                -   wraca do poprzedniego katalogu`
    },
    {
        id: "pwd",
        name: "pwd - wypisz nazwę bieżącego/roboczego katalogu\n",
        skladnia: "pwd [OPTION]... \n",
        info: "Wydrukuje pełną nazwę pliku bieżącego katalogu roboczego.\n",
        flags: ` --help`
    },
    {
        id: "cat",
        name: "cat - łączyć pliki i drukuje na standardowym wyjściu\n",
        skladnia: "cat [OPTION]... [FILE]...\n",
        info: "łączy PLIK(i) i wdrukuje na standardowym wyjściu.\n",
        flags: ` -n  numeruje wszystkie linie wyjściowe  
                --help`
    },
    {
        id: "cp",
        name: "cp - kopiuje pliki i katalogi\n",
        skladnia: "cp [OPTION]... SOURCE... DIRECTORY\n",
        info: "Skopiuj SOURCE do DIRECTORY lub wiele SOURCE(s) do DIRECTORY.\n",
        flags: ` -i  powiadamia przed nadpisaniem istniejącego pliku
                -n  nie nadpisuje istniejącego pliku
                -f  usuwa istniejące pliki docelowe, nigdy nie pyta
                -l  łączy pliki zamiast nadpisywać
                --help`
    },
    {
        id: "mv",
        name: "mv - przenosi lub zmienia nazwy plików\n ",
        skladnia: "mv [OPTION]... SOURCE... DIRECTORY\n",
        info: "Zmień nazwę SOURCE na DEST lub przenieś SOURCE(s) do DIRECTORY.\n",
        flags: ` -i   powiadamia przed nadpisaniem istniejącego pliku
                -n   nie nadpisuje istniejącego pliku
                -f   nie powiadamia przed nadpisaniem istniejącego pliku
                --help`
    },
    {
        id: "mkdir",
        name: "mkdir - tworzy katalogi\n",
        skladnia: "mkdir [OPTION]... DIRECTORY...\n",
        info: "Utwórz KATALOG(I), jeśli jeszcze nie istnieją.\n",
        flags: ` --help`
    },
    {
        id: "rmdir",
        name: "rmdir - usuwa puste katalogi\n",
        skladnia: "rmdir [OPTION]... DIRECTORY...\n",
        info: "Usuwa KATALOG(-i), jeśli są puste.\n",
        flags: ` --help`
    },
    {
        id: "rm",
        name: "rm - usuwa pliki lub katalogi\n",
        skladnia: "rm [OPTION]... [FILE]...\n",
        info: "Usuwa pliki lub katalogi\n",
        flags: ` -i  pyta przed każdym usunięciem.
                -r  usuwa katalogi i ich zawartość.
                -f  ignoruje nieistniejące pliki, nigdy nie pyta.
                --help`
    },
    {
        id: "touch",
        name: "touch - zmienia znaczniki czasu plików\n",
        skladnia: "touch [OPTION]... FILE...\n",
        info: `Aktualizuje czasy dostępu i modyfikacji każdego PLIKU na aktualny czas. Argument FILE, który nie istnieje, jest tworzony jako pusty.\n`,
        flags: ` -a  zmienia tylko czas dostępu..
                -c  nie tworzy żadnych plików.
                -m  zmienia tylko czas modyfikacji. 
                --help`
    },
    {
        id: "history",
        name: "history -  wyświetla historię wiersza poleceń\n",
        skladnia: "history [OPTION]...\n",
        info: ` Wyświetla historię wiersza poleceń.\n`,
        flags: ` -c   czysci liste historii.
                --help`
    },
    {
        id: "clear",
        name: "clear -  czyści ekran terminala\n",
        skladnia: "",
        info: ` Czyści ekran terminala\n`,
        flags: ``
    },
    {
        id: "tail",
        name: "tail -  wyświetla ostatnią część plików\n",
        skladnia: "tail [OPTION]... [FILE]...\n",
        info: ` Wydrukuj ostatnie 10 wierszy każdego PLIKU na standardowe wyjście.\n Z więcej niż jeden PLIK, poprzedź każdy nagłówkiem podając plik Nazwa.\n`,
        flags: ` -n   wypisuje ostatnie N wierszy.
                --help`
    },
    {
        id: "head",
        name: "head -  wyświetla pierwszą część plików\n",
        skladnia: "head [OPTION]... [FILE]...\n",
        info: ` Wydrukuj pierwsze 10 wierszy każdego PLIKU na standardowe wyjście.\n Z więcej niż jeden PLIK, poprzedź każdy nagłówkiem podając plik Nazwa.\n `,
        flags: ` -n   wypisuje ostatnie N wierszy.
                --help`
    },
    {
        id: "date",
        name: "date -  wydrukuj datę i godzinę systemową\n",
        skladnia: "",
        info: ` Wyświetl aktualny czas i datę\n`,
        flags: ``
    },
    {
        id: "nano",
        name: "nano - edytor\n",
        skladnia: "",
        info: `Aby zapisać wprowadzone dane natiśnij Ctrl+q (w prawdziwym terminalu Ctrl+o) 
        aby wyjść naciśnij Ctrl+x`,
        flags: ``
    },
    {
        id: "echo",
        name: "echo - wyświetla linię tekstu\n",
        skladnia: "echo [STRING]...\n",
        info: `Echo STRING(i) na standardowe wyjście.\n`,
        flags: `--help`
    },
    {
        id: "wc",
        name: "wc - wypisuje liczbę nowych linii, słów i bajtów dla każdego pliku\n",
        skladnia: "wc [OPTION]... [FILE]...\n",
        info: `Wyświetlaj liczbę nowych wierszy, słów i bajtów dla każdego PLIKU oraz sumę wierszy,\n
        Poniższe opcje mogą służyć do wybrania, które zliczenia mają być drukowane,
        zawsze w następującej kolejności: nowa linia, słowo, znak, bajt,\n
        maksymalna długość linii.\n `,
        flags: ` -c  drukuje tylko liczbę bajtów.
                -l  drukuje tylko liczbę wierszy.
                -m  drukuje tylko liczbę znaków.
                -w  drukuje tylko liczbę słów.
                --help`
    },
    {
        id: "whoami",
        name: "whoami - drukuje identyfikator użytkownika\n",
        skladnia: "whoami [OPTION]...\n",
        info: `Wydrukuj nazwę użytkownika powiązaną z aktualnym aktywnym użytkownikiem.\n`,
        flags: `--help`
    },
]

export default command