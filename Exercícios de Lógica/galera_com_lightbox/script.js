const galeria= document.querySelectorAll(".gallery-item");
const ligthbox= document.querySelector(".lightbox");
const lightboxImage= document.querySelector(".lightbox-image");
const lightboxClose= document.querySelector(".lightbox-close");

galeria.forEach((item) => {

    item.addEventListener("click", () => {

        const url= item.querySelector(".gallery-image").getAttribute("data-src");
        lightboxImage.setAttribute("src", url);
        ligthbox.style.display= "flex";

    });

});

lightboxClose.addEventListener("click", () => {

    ligthbox.style.display= "none";
});