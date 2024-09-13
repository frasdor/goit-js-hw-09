import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import {images} from "./images";
import {initImages} from "./gallery"
console.log ({images});


document.querySelector(".gallery").appendChild(initImages(images));


const lightbox = new SimpleLightbox('ul.gallery li a', {
     captionType: "alt",
     sourceAttr: "href",
     overlay: true,
 });


    lightbox.options('show.simplelightbox', function() {
        console.log("lightbox on")
    });
    