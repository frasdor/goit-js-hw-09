import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import {images} from "./images";
console.log ({images});

const createImage = ({preview, original, description}) =>{
    const li = document.createElement("li");
    li.classList.add("gallery-item");

    li.innerHTML = 
        `<a class="gallery-link" href="${original}">
            <img 
                class="gallery-image" 
                src="${preview}" 
                alt="${description}" 
                />
         </a>`;


    return li;
};

const initImages = (images) => {
   const imgs =  images.map(createImage);
   const fragment = document.createDocumentFragment();
   fragment.append(...imgs);
   return fragment;
};

const main = () => {
    document.querySelector(".gallery").appendChild(initImages(images));
};

main();

const lightbox = new SimpleLightbox('ul.gallery li', {
     captionType: "alt"
 });


    
    