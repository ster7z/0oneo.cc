var typed = new Typed("#typewr", {
    strings: ["Web Developer", "Frontend Developer"],
    smartBackspace: true,
    loop: true,
    typeSpeed: 50,
    backSpeed: 50,
});

function gotoID(id) {
    // Mendapatkan referensi ke elemen dengan ID "targetElement"
    var elemen = document.getElementById(id);

    // Atau scroll ke elemen tersebut
    elemen.scrollIntoView({
        behavior: "smooth"
    });
}

function gotoURL(url) {
    // Mengarahkan ke URL yang diinginkan
    window.location.href = "https://" + url;
}