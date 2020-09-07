"use strict";

(function(){
    var modal = document.querySelector(".modal");

    var modalOverlay = document.querySelector(".modalOverlay");

    var closeButton = document.querySelector(".modalOverlayClose");

    var modalImage = document.querySelector(".modalImg");

    var images = document.querySelectorAll(".imageGridImg");

    for(var i = 0; i < images.length; i++){
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