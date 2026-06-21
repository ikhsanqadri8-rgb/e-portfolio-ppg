const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
const navbar = document.querySelector(".custom-navbar");

let hideTimeout;
let isHoveringNavbar = false;

/* =========================
   DETECT HOVER NAVBAR
========================= */

navbar.addEventListener("mouseenter", () => {

    isHoveringNavbar = true;

});

navbar.addEventListener("mouseleave", () => {

    isHoveringNavbar = false;

});

/* =========================
   SCROLL EVENT
========================= */

window.addEventListener("scroll", () => {

    /* =========================
       ACTIVE NAV LINK
    ========================= */

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }

    });

    /* =========================
       FLOATING NAVBAR
    ========================= */

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

    /* =========================
       SHOW NAVBAR SAAT SCROLL
    ========================= */

    navbar.classList.remove("navbar-hide");

    /* =========================
       RESET TIMER
    ========================= */

    clearTimeout(hideTimeout);

    /* =========================
       HIDE SETELAH DIAM
    ========================= */

    hideTimeout = setTimeout(() => {

        if (
            window.scrollY > 120 &&
            !isHoveringNavbar
        ) {

            navbar.classList.add("navbar-hide");

        }

    }, 1500);

});   

/* =========================
   PDF PREVIEW MODAL
========================= */

function openPDF(pdfPath) {

    document.getElementById("pdfViewer").src = pdfPath;

    const pdfModal = new bootstrap.Modal(
        document.getElementById("pdfModal")
    );

    pdfModal.show();

}

document
.getElementById("pdfModal")
.addEventListener("hidden.bs.modal", () => {

    document.getElementById("pdfViewer").src = "";

});

/* =========================
   IMAGE GALLERY MODAL
========================= */

function showImage(src) {

    document.getElementById("modalImage").src = src;

    const imageModal = new bootstrap.Modal(
        document.getElementById("imageModal")
    );

    imageModal.show();

}

/* =========================
   CLOSE IMAGE WHEN CLICKED
========================= */

document
.getElementById("modalImage")
.addEventListener("click", () => {

    const modal = bootstrap.Modal.getInstance(
        document.getElementById("imageModal")
    );

    if (modal) {
        modal.hide();
    }

});