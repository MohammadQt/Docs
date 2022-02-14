var matericons = matericons.icons;
Defer(function() {
    var e, t = document.getElementById("codes");
    for (e in matericons) {
        var n = [],
            a = matericons[e].tags;
        for (r in a) n = a;
        var o = "<button id='button_icon_" + e.toLowerCase().replace(/[-]/g, "_") + "' class='btn_icon_pack alpha_button_icon' type='button' aria-label='" + e + "' title='icon_" + e.toLowerCase().replace(/[_]/g, " ") + " " + n + "' data-toggle-class-on-target='active' data-toggle-target='#dialog_icons' aria-controls='dialog_icons' aria-expanded='false' aria-haspopup='listbox' data-toggle-outside='' data-title='" + e.replace(/[-_]/g, " ") + "' ><svg width='24' height='24' viewBox='0 0 24 24'>" + matericons[e].contents + "</svg></button";
        t.innerHTML += o
    }
    document.querySelector(".loader_icons_pack").remove(), window.easyToggleState();
    document.querySelector(".name_input").removeAttribute("style");
    for (var i = document.querySelectorAll(".btn_icon_pack"), r = 0; r < i.length; r++) i[r].addEventListener("click", function() {
        var e = this.getAttribute("data-title"),
            t = this.querySelector("path").getAttribute("d");
        document.getElementById("dialog_icons").querySelector(".dialog_header span").innerHTML = e, document.getElementById("icon_path").innerText = t, document.getElementById("icon_path_svg").innerText = "<svg width='24' height='24' viewBox='0 0 24 24'><path d='" + t + "'></path></svg>",document.getElementById("short_icon").innerText = "<span icon='" + e.toLowerCase().replace(/[ ]/g, "-") + "'></span>",document.getElementById("icon_demo").innerHTML = "<svg width='64' height='64' viewBox='0 0 24 24'><path d='" + t + "'></path></svg>"
    })
}, 150), document.getElementById("icon_name").addEventListener("keyup", function() {
    var e, t = document.getElementById("icon_name").value.toUpperCase(),
        n = document.querySelectorAll(".grid button");
    for (i = 0; i < n.length; i++) {
        e = n[i].getAttribute("title").toUpperCase();
        var a = new RegExp(t, "i");
        e.match(a) ? n[i].style.display = "" : n[i].style.display = "none"
    }
},500);	