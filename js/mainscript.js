"use strict";
var refpage;
(function (refpage) {
    window.addEventListener('DOMContentLoaded', init);
    let gallerydiv = document.getElementsByClassName('article');
    function init() {
        galleryload(refpage.Datenarray);
    }
    function galleryload(_daten) {
        for (let key in _daten) {
            let value = _daten[key];
            for (let i = 0; i < value.length; i++) {
                //console.log(value[i].name, value[i].link, value[i].image, value[i].description);
                createinputoption(value[i].name, value[i].link, value[i].image, value[i].description);
            }
        }
    }
    function createinputoption(_name, _link, _img, _description) {
        let div = document.createElement("div");
        div.setAttribute("class", "condiv");
        div.addEventListener("click", sendToProject);
        div.addEventListener("touchstart", sendToProject);
        //condiv erstellt
        let name_h_element = document.createElement("h1");
        name_h_element.innerText = _name;
        div.appendChild(name_h_element);
        // Header erstellt und in condiv eingefuegt
        let img_element = document.createElement("img");
        img_element.setAttribute("src", _img);
        img_element.setAttribute("alt", _description);
        div.appendChild(img_element);
        // Bild erstellt und in condiv eingefuegt.
        let innerdiv = document.createElement("div");
        innerdiv.setAttribute("class", "innerdiv");
        // innerdiv erstellt für hover overlay und text anzeige
        let textdiv = document.createElement("div");
        textdiv.innerText = _description;
        textdiv.setAttribute("class", "text");
        // text anzeige bei hover erstellt.
        let link_element = document.createElement("a");
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
    function sendToProject(_e) {
        var _a;
        switch (_e.type) {
            case "touchstart":
                console.log("touch event fired and else worked");
                let touch_url = _e.target;
                let touch_link_child = touch_url.parentElement;
                console.log(touch_link_child);
                let touch_link_parent_second_atri = touch_link_child.children[2].getAttribute("href");
                console.log(touch_link_parent_second_atri);
                //location.href = touch_link_child;
                break;
            case "click":
                console.log("click fired");
                let url = _e.target;
                let link_child = url.parentElement;
                console.log(link_child);
                let link_parent_second_atri = (_a = link_child.parentElement) === null || _a === void 0 ? void 0 : _a.children[2].getAttribute("href");
                console.log(link_parent_second_atri);
                //location.href = link_parent_second_atri;
                break;
            default:
                break;
        }
    }
})(refpage || (refpage = {}));
