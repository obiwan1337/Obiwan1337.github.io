namespace refpage {
    window.addEventListener('DOMContentLoaded', init);
    let gallerydiv = document.getElementsByClassName('article');
    function init() {
        galleryload(Datenarray);
    }
    function galleryload(_daten: Projekte) {

        for (let key in _daten) {

            let value: Datensatz[] = _daten[key];

            for (let i: number = 0; i < value.length; i++) {
                //console.log(value[i].name, value[i].link, value[i].image, value[i].description);
                createinputoption(value[i].name, value[i].link, value[i].image, value[i].description);

            }
        }
    }
    function createinputoption(_name: string, _link: string, _img: string, _description: string): void {
        let div: HTMLDivElement = document.createElement("div");
        div.setAttribute("class", "condiv");
        div.addEventListener("click", sendToProject);
        div.addEventListener("touchstart", sendToProject);
        //condiv erstellt
        let name_h_element: HTMLElement = document.createElement("h1");
        name_h_element.innerText = _name;
        div.appendChild(name_h_element);
        // Header erstellt und in condiv eingefuegt

        let img_element: HTMLImageElement = document.createElement("img");
        img_element.setAttribute("src", _img);
        img_element.setAttribute("alt", _description);

        div.appendChild(img_element);
        // Bild erstellt und in condiv eingefuegt.
        let innerdiv: HTMLDivElement = document.createElement("div");
        innerdiv.setAttribute("class", "innerdiv");
        // innerdiv erstellt für hover overlay und text anzeige
        let textdiv: HTMLDivElement = document.createElement("div");
        textdiv.innerText = _description;
        textdiv.setAttribute("class", "text");
        // text anzeige bei hover erstellt.
        let link_element: HTMLAnchorElement = document.createElement("a");
        link_element.setAttribute("href", _link);
        link_element.setAttribute("class", "link_box");

        // link element für jeweiliges Projekt erstellt.
        div.appendChild(link_element);
        innerdiv.appendChild(textdiv);
        // inner div wird mit textdiv bestueckt
        div.appendChild(innerdiv);
        // innerdiv wird in condiv eingefügt

        gallerydiv[0].appendChild(div);

    }
    function sendToProject(_e: Event): void {
        
        switch (_e.type) {
            case "touchstart":
                console.log("touch event fired and else worked");
                let touch_url = _e.target as HTMLDivElement;
                
                let touch_link_child = <HTMLDivElement>touch_url.parentElement;
                console.log(touch_link_child);
                let touch_link_parent_second_atri: string = <string>touch_link_child.children[2].getAttribute("href");
                console.log(touch_link_parent_second_atri);
                //location.href = touch_link_child;
                break;
            case "click":
                console.log("click fired");
                let url = _e.target as HTMLDivElement;
                let link_child: HTMLDivElement = <HTMLDivElement>url.parentElement;
                console.log(link_child);
                let link_parent_second_atri: string = <string>link_child.parentElement?.children[2].getAttribute("href");
                console.log(link_parent_second_atri);
                //location.href = link_parent_second_atri;
                break;
            default:
                break;
        }




    }
}