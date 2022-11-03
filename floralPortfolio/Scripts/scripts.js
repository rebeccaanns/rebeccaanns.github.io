"use strict";

(function(){
    let modal = document.querySelector(".modal");

    let modalOverlay = document.querySelector(".modalOverlay");

    let closeButton = document.querySelector(".modalOverlayClose");

    let modalImage = document.querySelector(".modalImg");

    let images = document.querySelectorAll(".imageGridImg");

    for(let i = 0; i < images.length; i++){
        images[i].addEventListener("click", openModalEvent);
    }

    function openModalEvent(evt){
        modal.classList.toggle("closed");

        modalOverlay.classList.toggle("closed");

        modalImage.src = evt.target.src.replace("300x200", "560x360");
    }

    closeButton.addEventListener('click', closeButtonEvent);

    function closeButtonEvent(){
        closeButtonEvent.stopPropagation();

        modal.classList.toggle("closed");

        modalOverlay.classList.toggle("closed");
    }

    modalOverlay.addEventListener('click', closeModalEvent);

    function closeModalEvent(){
        modal.classList.toggle("closed");

        modalOverlay.classList.toggle("closed");
    }
})();

onclick="this.paused ? this.play() : this.pause();"