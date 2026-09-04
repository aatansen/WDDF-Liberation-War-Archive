document.addEventListener("DOMContentLoaded", function () {

  const documentSearch = document.getElementById("documentSearch");
  const documentFilter = document.getElementById("documentFilter");

  if (documentSearch && documentFilter) {

    documentSearch.addEventListener("input", filterDocuments);
    documentFilter.addEventListener("change", filterDocuments);

  }


  const contactForm = document.getElementById("contactForm");

  if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();
      const formMessage = document.getElementById("formMessage");


      if (
        name === "" ||
        email === "" ||
        subject === "" ||
        message === ""
      ) {

        formMessage.textContent =
          "Please fill in all required fields.";

        formMessage.style.color = "red";

        return;
      }


      formMessage.textContent =
        "Thank you. Your inquiry has been submitted successfully.";

      formMessage.style.color = "green";

      contactForm.reset();

    });

  }

});



function filterDocuments() {

  const searchText =
    document.getElementById("documentSearch")
      .value
      .toLowerCase();

  const selectedType =
    document.getElementById("documentFilter")
      .value;

  const documents =
    document.querySelectorAll(".document-card");


  documents.forEach(function (documentCard) {

    const text =
      documentCard.textContent.toLowerCase();

    const type =
      documentCard.getAttribute("data-type");


    const matchesSearch =
      text.includes(searchText);

    const matchesFilter =
      selectedType === "all" ||
      type === selectedType;


    if (matchesSearch && matchesFilter) {

      documentCard.style.display = "block";

    } else {

      documentCard.style.display = "none";

    }

  });

}



function showDocumentDetails(
  title,
  date,
  type,
  source,
  description
) {

  const modal =
    document.getElementById("documentModal");

  document.getElementById("modalTitle")
    .textContent = title;

  document.getElementById("modalDate")
    .textContent = date;

  document.getElementById("modalType")
    .textContent = type;

  document.getElementById("modalSource")
    .textContent = source;

  document.getElementById("modalDescription")
    .textContent = description;


  modal.style.display = "block";

}



function closeDocumentDetails() {

  document.getElementById("documentModal")
    .style.display = "none";

}



function openGalleryImage(imagePath, caption) {

  const modal =
    document.getElementById("galleryModal");

  const image =
    document.getElementById("galleryModalImage");

  const captionElement =
    document.getElementById("galleryModalCaption");

  const download =
    document.getElementById("downloadImage");


  image.src = imagePath;

  image.alt = caption;

  captionElement.textContent = caption;

  download.href = imagePath;


  modal.style.display = "block";

}



function closeGalleryImage() {

  document.getElementById("galleryModal")
    .style.display = "none";

}



window.addEventListener("click", function (event) {

  const documentModal =
    document.getElementById("documentModal");

  const galleryModal =
    document.getElementById("galleryModal");


  if (event.target === documentModal) {

    documentModal.style.display = "none";

  }


  if (event.target === galleryModal) {

    galleryModal.style.display = "none";

  }

});