namespace refpage {
    export interface Datensatz {
        name: string;
        link: string;
        image: string;
        description: string;
    }
    export interface Projekte {
        [key: string]: Datensatz[];
    }
    export let Datenarray: Projekte
        = {

        "Pro": [
            { name: "Mannschaftsgebäude 3D Model", link: "https://nisaba.villingen-schwenningen.de/gebaeudeansicht", image: "img/nisaba.png", description: "Ein Gruppenprojekt in Villingen-Schwenningen. Gearbeitet wurde mit Drohnen- und Bodenaufnahmen, um die Gebäude per Fotogrammetrie als 3D-Model zu berechnen. Mein Hauptbeitrag, ist das Mannschaftsgebäude 1 als Model. Es war das einzige Gebäude, welches nicht berechnet wurde und somit in Blender modelliert ist." },
            { name: "Drei Lagezeichen Visual Novel", link: "https://obiwan1337.github.io/Lagezeichen/Template.html", image: "img/titlescreen720.png", description: "Die drei Lagezeichen und der Loronavirus. Ihr begleitet drei Jungen aus Locky Beach bei der Aufklärung einer mysteriösen Krankheit (bestimmt nicht Corona). Dabei sind die drei Lagezeichen in brenzligen Situationen. Ihr entscheidet für die drei Lagezeichen. Wo wird ihre Forschung die drei Lagezeichen hinbringen?" },
            { name: "Rodelhang Shooter", link: "https://obiwan1337.github.io/EIA2/Aufg12/aufg12.html", image: "img/rodelhang.png", description: "Ein Spiel in TS/JS. Aufgabe war es einen Rodelhang Shooter umzusetzen mit Html, CSS und TS. Zum Spielen ist ein Bildschirm mit FullHDß Auflösung benötigt.Die Highscore Funktion ist nicht mehr funktional. Heruko hat die Instanz inzwischen gelöscht." },
            { name: "Wetermate Smartwatch App", link: "https://www.figma.com/proto/gveFN9xcaYTjIfH2tjVSSI/Wettermate-smartwatch?node-id=33%3A334&scaling=scale-down&page-id=0%3A1", image: "img/wettermate.png", description: "Eine Visual Novel. Begleite die Drei Lagezeichen auf einem neuen Fall. (nur in chromebasierten Browsern abspielbar)" },
            //{ name: "Mondbasis Story", link: "lunglung", image: "", description: "Eine Kurzgeschichte über einen Tag bei den geheimen Mondnazis." },
            { name: "Kurzfilm Webtalk im RL", link: "https://youtu.be/nI8nMZ9bjoQ?t=2048", image: "img/webtalk.png", description: "Ein in Gruppenarbeit enstandener Kurzfilm." },
            //{ name: "Eragon Storyboard", link: "manman", image: "", description: "" }
        ]
    }
}