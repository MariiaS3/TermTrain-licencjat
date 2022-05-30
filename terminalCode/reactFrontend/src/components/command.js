const command = {
    ls: {
        name: "ls",
        flags: [
            {
                name: "a",
                info: "wyświetla wszystkie pliki, w tym pliki ukryte, zaczynające się od '.' ",
            },
            {
                name: "d",
                info: "wyświetla katalogi, a nie ich zawartość",
            },
            {
                name: "l",
                info: "Wyświetla listę plików i katalogów, z dodatkowymi informacjami w formacie długiej listy ",
            },
            {
                name: "S",
                info: "Sortowanie według rozmiaru, od największego",
            },
            {
                name: "r",
                info: "Odwraca kolejnośc podczas sortowania",
            },
            {
                name: "help",
                info: "",
            },
        ],
        info: "Polecenie służy do wyświetlania listy plików lub katalogów"
    },
    cd: {
        name: "cd",
        flags: [
            {
                name: "help",
                info: ""
            }
        ],
        info: "Zmienia katalog roboczy"
    },
    pwd: {
        name: "pwd",
        flags: [
            {
                name: "help",
                info: ""
            }
        ],
        info: "Wyświetla nazwę bieżącego/roboczego katalogu"
    },
    cat: {
        name: "cat",
        flags: [
            {
                name: "n",
                info: "Numeruje wszystkie linie wyjściowe"
            },
            {
                name: "help",
                info: ""
            }
        ],
        info: "Odczytuje dane z pliku i podaje ich zawartość jako wyjście. Pomaga tworzyć, przeglądać, łączyć pliki. "
    },
    cp: {
        name: "cp",
        flags: [
            {
                name: "i",
                info: "Ostrzega przed nadpisaniem pliku docelowego (zastępuje poprzednią opcję -n)"
            },
            {
                name: "n",
                info: "Nie nadpisuje istniejącego pliku (zastępuje poprzednią opcję -i)"
            },
            {
                name: "r",
                info: "Kopiowanie struktury katalogów."
            },
            {
                name: "help",
                info: ""
            }
        ],
        info: "Kopiuje pliki i katalogi"
    },
    mv: {
        name: "mv",
        flags: [
            {
                name: "f",
                info: "Nie ostrzega przed nadpisaniem."
            },
            {
                name: "i",
                info: "Ostrzega przed nadpisaniem"
            },
            {
                name: "n",
                info: "Nie nadpisuje istniejącego pliku"
            },
            {
                name: "help",
                info: ""
            }
        ],
        info: "Przenosi lub zmienia nazwy plików lub katalogów"
    },
    mkdir: {
        name: "mkdir",
        flags: [
            {
                name: "help",
                info: ""
            }
        ],
        info: "Tworzy katalogi"
    },
    rmdir: {
        name: "rmdir",
        flags: [
            {
                name: "help",
                info: ""
            }
        ],
        info: "Usuwa puste katalogi"
    },
    rm: {
        name: "rm",
        flags: [
            {
                name: "f",
                info: "Ignoruje nieistniejące pliki i argumenty"
            },
            {
                name: "r",
                info: "Służy do rekursywnego usuwania katalogów i ich zawartości."
            },
            {
                name: "R",
                info: "Służy do rekursywnego usuwania katalogów i ich zawartości."
            },
            {
                name: "d",
                info: "Służy do usuwania pustych katalogów."
            },
            {
                name: "i",
                info: "Służy do wyświetlania komunikatu i potwierdzenia z użytkownikiem przed każdym usunięciem."
            },
            {
                name: "help",
                info: ""
            },
        ],
        info: "Usuwa pliki lub katalogi"
    },
    touch: {
        name: "touch",
        flags: [
            {
                name: "a",
                info: "Zmienia lub zaktualizuje ostatnie czasy dostępu lub modyfikacji pliku"
            },
            {
                name: "c",
                info: "Służy do sprawdzania, czy plik został utworzony, czy nie. Jeśli nie został utworzony, nie twórz go."
            },
            {
                name: "help",
                info: ""
            }
        ],
        info: "Służy do tworzenia, zmiany i modyfikowania znaczników czasu pliku. Służy do tworzenia pliku bez zawartości."
    },
    history: {
        name: "history",
        flags: [
            {
                name: "help",
                info: ""
            }
        ],
        info: "GNU History Library"
    },
}
export default command