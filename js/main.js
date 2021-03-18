const linkContact = document.querySelector(".contacts a");
const contactForm = document.querySelector(".modal-contact-form");
const contactFormClose = contactForm.querySelector(".modal-close");
const contactName = contactForm.querySelector(".contact-name");
const contactEmail = contactForm.querySelector(".contact-email");
const contactMessage = contactForm.querySelector(".contact-message");

const linkMap = document.querySelector(".contacts img");
const modalMap = document.querySelector(".modal-map");
const modalMapClose = modalMap.querySelector(".modal-close");

linkMap.addEventListener('click', function(e) {
  e.preventDefault();
  modalMap.classList.add("modal-show");
});

modalMapClose.addEventListener("click", function (e) {
  e.preventDefault();
  modalMap.classList.remove("modal-show");
});

linkContact.addEventListener('click', function(e) {
  e.preventDefault();
  contactForm.classList.add("modal-show");
  contactName.focus();
});

contactFormClose.addEventListener("click", function (e) {
  e.preventDefault();
  contactForm.classList.remove("modal-show");
  contactForm.classList.remove("modal-error");
});

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 27) {
    if (contactForm.classList.contains("modal-show")) {
      e.preventDefault();
      contactForm.classList.remove("modal-show");
      contactForm.classList.remove("modal-error");
    }
  }
});


contactForm.addEventListener("submit", function (e) {
  if (!contactName.value || !contactEmail.value || !contactMessage.value) {
    e.preventDefault();
    contactForm.classList.remove("modal-error");
    contactForm.offsetWidth = contactForm.offsetWidth;
    contactForm.classList.add("modal-error");
}});
