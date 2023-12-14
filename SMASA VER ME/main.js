window.addEventListener("scroll", function() {
    var element = document.querySelector(".header-nav-top");

    // Jika telah menggulir (misalnya, 100 piksel dari atas), ubah warna menjadi merah
    if (window.scrollY > 20) {
        element.style.backgroundColor = "rgb(14, 64, 94)";
        element.style.borderColor = "rgb(255, 187, 0)"
    } else {
        element.style.backgroundColor = "transparent";
        element.style.borderColor = "transparent" // Kembali ke warna awal jika belum menggulir
    }
});

window.addEventListener("scroll", function() {
    var element = document.querySelector(".imgMpls");
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    var vwChange = (window.scrollY / viewportWidth) * 100;

    // Jika telah menggulir (misalnya, 100 piksel dari atas), ubah warna menjadi merah
    if (window.scrollY > 750) {
        element.style.opacity = "100%";
        element.style.top = "0%";
    } else {
        element.style.opacity = "0%";
        element.style.top = "50%";
    }
});

window.addEventListener("scroll", function() {
    var element = document.querySelector(".main-textSecSe");
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    var vwChange = (window.scrollY / viewportWidth) * 100;

    // Jika telah menggulir (misalnya, 100 piksel dari atas), ubah warna menjadi merah
    if (window.scrollY > 750) {
        element.style.opacity = "100%";
        element.style.left = "0%";
    } else {
        element.style.opacity = "0%";
        element.style.left = "-50%";
    }
});

window.addEventListener("scroll", function() {
    var element1 = document.querySelector(".info1-secThird");
    var element2 = document.querySelector(".info2-secThird");
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    var vwChange = (window.scrollY / viewportWidth) * 100;

    // Jika telah menggulir (misalnya, 100 piksel dari atas), ubah warna menjadi merah
    if (window.scrollY > 1450) {
        element1.style.opacity = "100%";
        element2.style.opacity = "100%";
        element1.style.top = "0%";
        element2.style.top = "0%";
    } else {
        element1.style.opacity = "0%";
        element2.style.opacity = "0%";
        element1.style.top = "50%";
        element2.style.top = "50%";
    }
});

window.addEventListener("scroll", function() {
    var element1 = document.querySelector(".info3-secThird");
    var element2 = document.querySelector(".info4-secThird");
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    var vwChange = (window.scrollY / viewportWidth) * 100;

    // Jika telah menggulir (misalnya, 100 piksel dari atas), ubah warna menjadi merah
    if (window.scrollY > 1850) {
        element1.style.opacity = "100%";
        element2.style.opacity = "100%";
        element1.style.top = "0%";
        element2.style.top = "0%";
    } else {
        element1.style.opacity = "0%";
        element2.style.opacity = "0%";
        element1.style.top = "50%";
        element2.style.top = "50%";
    }
});

window.addEventListener("scroll", function() {
    var element1 = document.querySelector(".karnaval1");
    var element2 = document.querySelector(".karnaval2");
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    var vwChange = (window.scrollY / viewportWidth) * 100;

    // Jika telah menggulir (misalnya, 100 piksel dari atas), ubah warna menjadi merah
    if (window.scrollY > 2400) {
        element1.style.opacity = "100%";
        element2.style.opacity = "100%";
        element1.style.bottom = "3vw";
        element2.style.top = "3vw";
        element1.style.objectPosition = "-290px";
        element2.style.objectPosition = "-90px";
    } else {
        element1.style.opacity = "0%";
        element2.style.opacity = "0%";
        element1.style.bottom = "-5vw";
        element2.style.top = "8vw";
        element1.style.objectPosition = "0px";
        element2.style.objectPosition = "0px";
    }
});

window.addEventListener("scroll", function() {
    var element3 = document.querySelector(".karnaval3");
    var element4 = document.querySelector(".karnaval4");
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    var vwChange = (window.scrollY / viewportWidth) * 100;

    // Jika telah menggulir (misalnya, 100 piksel dari atas), ubah warna menjadi merah
    if (window.scrollY > 2400) {
        element3.style.opacity = "100%";
        element4.style.opacity = "100%";
        element3.style.bottom = "3vw";
        element4.style.top = "3vw";
        element3.style.objectPosition = "-170px";
        element4.style.objectPosition = "-240px";
    } else {
        element3.style.opacity = "0%";
        element4.style.opacity = "0%";
        element3.style.bottom = "-5vw";
        element4.style.top = "8vw";
        element3.style.objectPosition = "0px";
        element4.style.objectPosition = "0px";
    }
});

window.addEventListener("scroll", function() {
    var element = document.querySelector(".right-secFourth");
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    var vwChange = (window.scrollY / viewportWidth) * 100;

    // Jika telah menggulir (misalnya, 100 piksel dari atas), ubah warna menjadi merah
    if (window.scrollY > 2400) {
        element.style.opacity = "100%";
        element.style.left = "0px";
    } else {
        element.style.opacity = "0%";
        element.style.left = "400px";
    }
});

window.addEventListener("scroll", function() {
    var element1 = document.querySelector(".img1-pramuka");
    var element2 = document.querySelector(".img2-pramuka");
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    var vwChange = (window.scrollY / viewportWidth) * 100;

    // Jika telah menggulir (misalnya, 100 piksel dari atas), ubah warna menjadi merah
    if (window.scrollY > 3450) {
        element1.style.opacity = "100%";
        element2.style.opacity = "100%";
        element1.style.top = "5vw";
        element2.style.top = "0vw";
        element1.style.objectPosition = "0px";
        element2.style.objectPosition = "-600px";
    } else {
        element1.style.opacity = "0%";
        element2.style.opacity = "0%";
        element1.style.top = "8vw";
        element2.style.top = "3vw";
        element1.style.objectPosition = "-100px";
        element2.style.objectPosition = "-700px";
    }
});

window.addEventListener("scroll", function() {
    var element = document.querySelector(".left-secFifth");
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    var vwChange = (window.scrollY / viewportWidth) * 100;

    // Jika telah menggulir (misalnya, 100 piksel dari atas), ubah warna menjadi merah
    if (window.scrollY > 3450) {
        element.style.opacity = "100%";
        element.style.right = "0px";
    } else {
        element.style.opacity = "0%";
        element.style.right = "200px";
    }
});

window.addEventListener("scroll", function() {
    var element = document.querySelector(".main-clmn5");
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    var vwChange = (window.scrollY / viewportWidth) * 100;

    // Jika telah menggulir (misalnya, 100 piksel dari atas), ubah warna menjadi merah
    if (window.scrollY > 3950) {
        element.style.opacity = "100%";
        element.style.bottom = "5vw";
    } else {
        element.style.opacity = "0%";
        element.style.bottom = "-3vw";
    }
});

window.addEventListener("scroll", function() {
    var element = document.querySelector(".clmnTop-6");
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    var vwChange = (window.scrollY / viewportWidth) * 100;

    // Jika telah menggulir (misalnya, 100 piksel dari atas), ubah warna menjadi merah
    if (window.scrollY > 4500) {
        element.style.opacity = "100%";
    } else {
        element.style.opacity = "0%";
    }
});

window.addEventListener("scroll", function() {
    var element = document.querySelector(".visualNews-6");
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    var vwChange = (window.scrollY / viewportWidth) * 100;

    // Jika telah menggulir (misalnya, 100 piksel dari atas), ubah warna menjadi merah
    if (window.scrollY > 4700) {
        element.style.opacity = "100%";
        element.style.top = "0vw";
    } else {
        element.style.opacity = "0%";
        element.style.top = "5vw";
    }
});

window.addEventListener("scroll", function() {
    var element = document.querySelector(".main-secSeventh");
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    var vwChange = (window.scrollY / viewportWidth) * 100;

    // Jika telah menggulir (misalnya, 100 piksel dari atas), ubah warna menjadi merah
    if (window.scrollY > 5300) {
        element.style.opacity = "100%";
    } else {
        element.style.opacity = "0%";
    }
});

window.addEventListener("scroll", function() {
    var element = document.querySelector(".main-title-8");
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    var vwChange = (window.scrollY / viewportWidth) * 100;

    // Jika telah menggulir (misalnya, 100 piksel dari atas), ubah warna menjadi merah
    if (window.scrollY > 6300) {
        element.style.opacity = "100%";
    } else {
        element.style.opacity = "0%";
    }
});

window.addEventListener("scroll", function() {
    var element = document.querySelector(".newsTop-8");
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    var vwChange = (window.scrollY / viewportWidth) * 100;

    // Jika telah menggulir (misalnya, 100 piksel dari atas), ubah warna menjadi merah
    if (window.scrollY > 6400) {
        element.style.opacity = "100%";
        element.style.top = "0vw";
    } else {
        element.style.opacity = "0%";
        element.style.top = "5vw";
    }
});

window.addEventListener("scroll", function() {
    var element1 = document.querySelector(".img1-8");
    var element2 = document.querySelector(".img2-8");
    var element3 = document.querySelector(".img3-8");
    var element4 = document.querySelector(".img4-8");
    var element5 = document.querySelector(".img5-8");
    var element6 = document.querySelector(".img6-8");
    var element = [element1, element2, element3, element4, element5, element6];
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    var vwChange = (window.scrollY / viewportWidth) * 100;

    // Jika telah menggulir (misalnya, 100 piksel dari atas), ubah warna menjadi merah
    element.forEach(function(el) {
        if (window.scrollY > 6800) {
            el.style.opacity = "100%";
        } else {
            el.style.opacity = "0%";
        }
    })
});

window.addEventListener("scroll", function() {
    var element = document.querySelector(".block-footer");
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    var vwChange = (window.scrollY / viewportWidth) * 100;

    // Jika telah menggulir (misalnya, 100 piksel dari atas), ubah warna menjadi merah
    if (window.scrollY > 7200) {
        element.style.opacity = "100%";
        element.style.bottom = "5vw";
    } else {
        element.style.opacity = "0%";
        element.style.bottom = "0vw";
    }
});