

const teoria = [
    {
        id: 1,
        name: "Polecenia: man, pwd, ls, cd, clear",
        polecemie1: `Ls
        ls [options] [file | directory]
        Polecenie “ls”  wyświetla listę plików i podkatalogów danego katalogu.\n
           Flagi:
            -a  wyświetla wszystkie pliki, w tym pliki ukryte, zaczynające się od '.' 
            -d  wyświetla katalogi a nie ich zawartość 
            -l  wyświetli więcej informacji o plikach 
            -r  odwrotna kolejność podczas sortowania 
            -S  sortuj według rozmiaru pliku 
            --help
            Przykłady:
            # wyświetli więcej informacji o plikach
            $ ls -l
            total 1
            drwxr-xr-x 2 root root 4096 Jun 9 21:14 bin/
            ^
            pierwsza kolumna to typ pliku: d = katalog   f = plik,  pozostałe znaki to są uprawnienia plików i katalogów

            #Wymień katalogi w bieżącym katalogu:
            $ ls -d */
            `,
        polecemie2: `Pwd 
        pwd
        Wypisuje ścieżkę do bieżącego/roboczego katalogu 
        Przykłady: 
        $ pwd
        /usr/lib/X11`,
        polecemie3: `Cd 
        cd [Options] [Directory]
        Jeśli podano katalog, zmienia katalog roboczy powłoki na katalog. Jeśli nie, przechodzi do katalogu domowego. 
        ..  przechodzi do katalogu o jeden wyższego w drzewie katalogów niż obecny
        -   wraca do poprzedniego katalogu 
        Przykłady: 
        #Przejdź do folderu sybase:
        $ cd /usr/lokalny/sybase
        $ pwd
        /usr/lokalny/sybase

        #Przejść do katalogu o jeden wyższego w drzewie katalogów niż obecny:
        $ cd ..
        $ pwd
        /usr/lokalny/

        #Wracaj do poprzedniego katalogu:
        $ cd -
        $ pwd
        /usr/lokalny/sybase

        $ cd (Powrót do katalogu domowego)
        `,
        polecemie4: `Clear
        clear
        Czyści ekran terminala, jeśli jest to możliwe.  
        `,
        polecemie5: `Man 
        man nazwa_strony
        Polecenie służące do wyświetlania stron pomocy man. Nazwa jest skrótem od ang. manual – instrukcja obsługi.

        Przykład: 
        $ man ls
        
        $ man cat
        
        $ man cp`,
    },
    {
        id: 2,
        name: "Polecenia: touch, nano, mkdir, rmdir, rm",
        polecemie1: `Touch 
        touch [options] file
        Polecenie tworzy pusty plik lub zmienia datę modyfikacji i 
        ostatniego dostępu na aktualną datę już istniejącego pliku. 
        Flagi:
            -a  zmienia tylko czas dostępu..
            -c  nie tworzy żadnych plików.
            -m  zmienia tylko czas modyfikacji. 
            --help
            Przykłady: 
            $ date
            śro sie 16 13:06:41 CEST 2006

            $ ls -l
            -rw-r--r-- 1 user user 0 2006-08-16 13:04 plik1

            $ touch plik2
            $ ls -l
            -rw-r--r-- 1 user user 0 2006-08-16 13:04 plik1
            -rw-r--r-- 1 user user 0 2006-08-16 13:06 plik2

            $ touch plik1
            $ ls -l
            -rw-r--r-- 1 user user 0 2006-08-16 13:06 plik1
            -rw-r--r-- 1 user user 0 2006-08-16 13:06 plik2
            `,
        polecemie2: `Nano 
        nano plik_name
        Edytor tekstu w Uniksie i systemach postuniksowych (w tym Linuksie).
        Tworzy nowy plik jeśli ten o podanej nazwie nie istnieje.
        Aby zapisać wprowadzone dane natiśnij Ctrl+q (w prawdziwym terminalu Ctrl+o) 
        aby wyjść naciśnij Ctrl+x 
        Przykłady: 
        $ nano plik_name `,
        polecemie3: `Rm 
        rm [options]... file…
        Polecenie usuwa podany jako argument plik. Domyślnie nie usuwa katalogów. 
        Aby usuwać katalog z jego zawartością należy użyć parametru -r. 
          Flagi: 
            -i  pyta przed każdym usunięciem.
            -r  usuwa katalogi i ich zawartość.
            -f  ignoruje nieistniejące pliki, nigdy nie pyta.
            --help 
        Przykłady: 
        $rm demo.txt
        $rm -i demo1.txt
        rm: remove regular empty file 'rm'? (yes or no) 
        $rm -r katalog
        `,
        polecemie4: `Mkdir 
        mkdir [OPTION] DIRECTORY
        Polecenie służy do tworzenia katalogów, jeśli jeszcze nie istnieją.
        Flagi:
            --help
        Przykłady: 
        $ mkdir katalog1
        $ mkdir katalog2
        $ ls -l
        drwxr-xr-x 2 user user 48 2006-08-16 12:50 katalog1
        drwxr-xr-x 2 user user 48 2006-08-16 12:50 katalog2
        `,
        polecemie5: `Rmdir 
        rmdir [OPTION]... DIRECTORY...  
        Służy do usuwania pustych katalogów. W przeciwieństwie do polecenia rm,
        nie umożliwia usuwania plików i niepustych katalogów.
        Flagi:
            --help 
        Przykłady: 
        $ mkdir katalog2
        $ ls -l
        drwxr-xr-x 2 user user 48 2006-08-16 12:50 katalog1
        drwxr-xr-x 2 user user 48 2006-08-16 12:50 katalog2
       
        $ rmdir katalog1
        $ ls -l
        drwxr-xr-x 2 user user 48 2006-08-16 12:50 katalog2
        `,
    },
    {
        id: 3,
        name: "Polecenia: history, tail, head, whoami, date",
        polecemie1: `history 
        history [option]
        Wyświetla listę poleceń użytych od początku sesji terminala 
        Flagi:
        -c   czysci liste historii.
        --help
            Przykłady: 
            #wyświetlić tylko pięć ostatnich wpisów
            $ history 5
            $ history -c
            `,
        polecemie2: `Tail 
        tail [options]... [file]...
        To narzędzie wiersza poleceń, które drukuje ostatnie 10 wierszy 
        określonych plików. Jeśli podano więcej niż jedną nazwę pliku, 
        to dane z każdego pliku są poprzedzone jego nazwą pliku.
        Flagi:
        -n   wypisuje ostatnie N wierszy.
        --help
        Przykłady: 
        $ tail plik_name
       
        #Wyodrębnij ostatnie 85 wierszy z pliku:
        $ tail -n 85 file.txt `,
        polecemie3: `Head 
        rm [options]... file…
        To narzędzie wiersza poleceń, które drukuje pierwsze 10 wierszy 
        określonych plików. Jeśli podano więcej niż jedną nazwę pliku, 
        to dane z każdego pliku są poprzedzone jego nazwą pliku. 
        Flagi:
        -n   wypisuje ostatnie N wierszy.
        --help
        Przykłady: 
        $ head plik_name
        
        #Wyodrębnij pierwsze 5 wierszy z pliku:
        $ head -n 5 file.txt 
        `,
        polecemie4: `Whoami 
        Polecenie wypisuje nazwę użytkownika powiązaną z aktualnym aktywnym użytkownikiem.
        Flagi:
        --help
        Przykłady: 
        $ whoami 
        root
       
        `,
        polecemie5: `Date 
        Wyświetla aktualny czas i datę
        Przykłady: 
        $ date
        Sat Sep 03 2022 01:32:17 GMT+0200 
        `,
    },
    {
        id: 4,
        name: "Polecenia: cat, echo, wc, cp, mv",
        polecemie1: `Cat 
        cat [options] [file]
        Wyświetla zawartość podanych plików. Służy również do ich łączenia, 
        poprzez przekierowywanie wyjścia w powłoce (przy użyciu znaku >).
        Flagi:
        -n  numeruje wszystkie linie wyjściowe  
        --help
            Przykłady: 
            $ cat -n plik.txt
            1 To jest pierwsza linia.
            2 Ta druga.
            3 To ostatnia linia.
            `,
        polecemie2: `Echo 
        echo [options] [string]
        Polecenie wyświetlające podany tekst na standardowe wyjście (zazwyczaj na ekran terminala). 
        Tekst ten może być podany w całości jako jeden argument lub jako kilka argumentów (wówczas zostaną one połączone spacjami). 
    
        Przykłady: 
        $ echo "Hello World"
        
        $ $(cat my_file.txt) `,
        polecemie3: `Wc 
        wv [options] file
        Służy do liczenia bajtów, znaków, słów oraz linii w podanych plikach. 
        Flagi: 
        -c  drukuje tylko liczbę bajtów.
            -l  drukuje tylko liczbę wierszy.
            -m  drukuje tylko liczbę znaków.
            -w  drukuje tylko liczbę słów.
            --help 
        Przykłady: 
        $ wc plik_name
        
        #Policz liczbę słów w plik.txt
        $ wc -w plik.txt
        `,
        polecemie4: `Cp 
        cp [option] source directory
        Polecenie umożliwiające kopiowanie plików i katalogów. 
        Jako pierwszy parametr przyjmuje ścieżkę do pliku bądź katalogu (lub jego nazwę), który chcemy skopiować; 
        jako drugi - ścieżkę (lub nazwę) pod którą ma się znaleźć jego kopia. Jeśli drugim parametrem jest nazwa lub ścieżka katalogu, 
        kopiowany element zostanie umieszczony w tym katalogu pod swą oryginalną nazwą.
        Flagi:   
        -i  powiadamia przed nadpisaniem istniejącego pliku
            -n  nie nadpisuje istniejącego pliku
            -f  usuwa istniejące pliki docelowe, nigdy nie pyta
            -l  łączy pliki zamiast nadpisywać
            --help
        Przykłady: 
        #Skopiuj plik file do pliku file.txt:
        $ cp file file.txt
        #Skopiuj plik.txt do folderu Dokumenty:
        $ cp -f plik.txt /Dokumenty
        `,
        polecemie5: `Mv 
        mv [option] source directory
        Służy do przenoszenia plików i zmiany ich nazwy. 
        Flagi:
        -i   powiadamia przed nadpisaniem istniejącego pliku
            -n   nie nadpisuje istniejącego pliku
            -f   nie powiadamia przed nadpisaniem istniejącego pliku
            --help
        Przykłady: 
        #Zmień nazwę pliku apple na orange.doc: 
        $ mv apple orange.doc
        
        #Przenieś orange.doc do folderu Dokumenty: 
        $mv orange.doc ~/Documents
        `,
    },
]

export default teoria