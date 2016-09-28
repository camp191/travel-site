import $ from 'jquery';

class Modal {
  constructor() {
    this.openModalButton = $('.open-modal');
    this.modal = $(".modal");
    this.closeModalButton = $(".modal__close");
    this.event();
  }

  event() {
    //clicking open modal
    this.openModalButton.click(this.openModal.bind(this));

    //clicking x to close modal
    this.closeModalButton.click(this.closeModal.bind(this));

    //pushes any key
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if(e.keyCode == 27) {
      this.closeModal();
    }
  }

  openModal() {
    this.modal.addClass("modal--is-visible");
    //avoid href go to top of page
    return false;
  }

  closeModal() {
    this.modal.removeClass("modal--is-visible");
  }
}

export default Modal;
