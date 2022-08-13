const command = {
    info: "W manualu wyświetlane są tylko komendy i flagi z których można korzystać w tym terminalu (które zostale zaprogramowane)\n",
    ls: {
        name: "ls - lista zawatości katalogu",
        skladnia: "ls [OPTION]... [FILE]..." ,
        info: "Wyświetla informacje o PLIKACH (bieżący katalog domyślnie). Sortuj wpisy alfabetycznie",
        flags:` -a  wyświetla wszystkie pliki, w tym pliki ukryte, zaczynające się od '.' \n 
                -d  wyświetla katalogi a nie ich zawartość \n
                -l  wyświetli więcej informacji o plikach \n
                -r  odwrotna kolejność podczas sortowania \n
                -S  sortuj według rozmiaru pliku \n
                --help`
    },
    cd: {
        name: "cd - zmienia katalog roboczy(w prawdziwym manualy nie ma opisukomendy cd)",
        skladnia: "cd [OPTION / DIRECTORY] " ,
        info: "Jeśli podano DIRECTORY, zmienia katalog roboczy powłoki na DIRECTORY. Domyślnie zmienia się na HOME (zmienna powłoki).",
        flags:` ..  przechodzi do katalogu o jeden wyższego w drzewie katalogów niż obecny\n
                -   wraca do poprzedniego katalogu`
    },
    pwd: {
        name: "pwd - wypisz nazwę bieżącego/roboczego katalogu",
        skladnia: "pwd [OPTION]... " ,
        info: "Wydrukuje pełną nazwę pliku bieżącego katalogu roboczego.",
        flags:` --help`
    },
    cat: {
        name: "cat - łączyć pliki i drukuje na standardowym wyjściu",
        skladnia: "cat [OPTION]... [FILE]..." ,
        info: "łączy PLIK(i) i wdrukuje na standardowym wyjściu.",
        flags:` -n  numeruje wszystkie linie wyjściowe \n 
                --help`
    },
    cp: {
        name: "cp - kopiuje pliki i katalogi",
        skladnia: "cp [OPTION]... SOURCE... DIRECTORY" ,
        info: "Skopiuj SOURCE do DIRECTORY lub wiele SOURCE(s) do DIRECTORY.",
        flags:` -i  powiadamia przed nadpisaniem istniejącego pliku\n
                -n  nie nadpisuje istniejącego pliku\n
                -f  usuwa istniejące pliki docelowe, nigdy nie pyta\n
                -l  łączy pliki zamiast nadpisywać\n
                --help`
    },
    mv: {
        name: "mv - przenosi lub zmienia nazwy plików ",
        skladnia: "mv [OPTION]... SOURCE... DIRECTORY" ,
        info: "Zmień nazwę SOURCE na DEST lub przenieś SOURCE(s) do DIRECTORY.",
        flags:` -i  powiadamia przed nadpisaniem istniejącego pliku\n
                -n  nie nadpisuje istniejącego pliku\n
                -f  Nie powiadamia przed nadpisaniem istniejącego pliku\n
                --help`  
    },
    mkdir: {
        name: "Tworzy katalogi",
        skladnia: "mkdir [OPTION]... DIRECTORY..." ,
        info: "Utwórz KATALOG(I), jeśli jeszcze nie istnieją.",
        flags:` --help`  
    },
    rmdir: {
        name: "rmdir - usuwa puste katalogi",
        skladnia: "mkdir [OPTION]... DIRECTORY..." ,
        info: "Usuwa KATALOG(-i), jeśli są puste.",
        flags:` --help`  
    },
    rm: {
        name: "rm - usuwa pliki lub katalogi",
        skladnia: "rm [OPTION]... [FILE]..." ,
        info: "Usuwa pliki lub katalogi",
        flags:` -i  pyta przed każdym usunięciem.\n
                -r  usuwa katalogi i ich zawartość.\n
                -f  ignoruje ​​nieistniejące pliki, nigdy nie pyta.\n
                --help`  
    },
    touch: {
        name: "touch - zmienia znaczniki czasu plików",
        skladnia: "touch [OPTION]... FILE...",
        info: `Aktualizuje czasy dostępu i modyfikacji każdego PLIKU do Obecny czas. Argument FILE, który nie istnieje, jest tworzony jako pusty.`,
        flags:` -a  zmienia tylko czas dostępu..\n
                -c  nie tworzy żadnych plików.\n
                -m  zmienia tylko czas modyfikacji. \n
                --help`  
    },
    history: {
        name: "history -  wyświetla historię wiersza poleceń",
        skladnia: "history [OPTION]...",
        info: ` Wyświetla historię wiersza poleceń.`,
        flags:` -c   czysci liste historii.\n
                --help`  
    },
    clear: {
        name: "clear -  czyści ekran terminala",
        skladnia: "",
        info: ` Czyści ekran terminala`,
        flags:``  
    },
    tail: {
        name: "tail -  wyświetla ostatnią część plików",
        skladnia: "tail [OPTION]... [FILE]...",
        info: ` Wydrukuj ostatnie 10 wierszy każdego PLIKU na standardowe wyjście.\n Z więcej niż jeden PLIK, poprzedź każdy nagłówkiem podając plik
        Nazwa.
 `,
        flags:` -n   wypisuje ostatnie N ​​wierszy.\n
                --help`  
    },
    head: {
        name: "head -  wyświetla pierwszą część plików",
        skladnia: "head [OPTION]... [FILE]...",
        info: ` Wydrukuj pierwsze 10 wierszy każdego PLIKU na standardowe wyjście.\n Z więcej niż jeden PLIK, poprzedź każdy nagłówkiem podając plik
        Nazwa.
 `,
        flags:` -n   wypisuje ostatnie N ​​wierszy.\n
                --help`  
    },
    date: {
        name: "date -  wydrukuj datę i godzinę systemową",
        skladnia: "",
        info: ` Wyświetl aktualny czas i datę`,
        flags:``  
    },
    nano: {
        name: "nano - edytor",
        skladnia: "",
        info: `Edytor`,
        flags:``  
    },
    echo: {
        name: "echo - wyświetla linię tekstu",
        skladnia: "echo [STRING]...",
        info: `Echo STRING(i) na standardowe wyjście.`,
        flags:`--help`  
    },
    wc: {
        name: "wc - wypisuje liczbę nowych linii, słów i bajtów dla każdego pliku",
        skladnia: "wc [OPTION]... [FILE]...",
        info: `Wyświetlaj liczbę nowych wierszy, słów i bajtów dla każdego PLIKU oraz sumę
        wiersz,\n
        Poniższe opcje mogą służyć do wybrania, które zliczenia mają być drukowane,
        zawsze w następującej kolejności: nowa linia, słowo, znak, bajt,\n
        maksymalna długość linii. `,
        flags:` -c  drukuje tylko liczbę bajtów.\n
                -l  drukuje tylko liczbę wierszy.\n
                -m  drukuje tylko liczbę znaków.\n
                -w  drukuje tylko liczbę słów.\n
                --help`  
    },
    whoami: {
        name: "whoami - drukuje identyfikator użytkownika",
        skladnia: "whoami [OPTION]...",
        info: `Wydrukuj nazwę użytkownika powiązaną z aktualnym aktywnym użytkownikiem.`,
        flags:`--help`  
    },
}
export default command