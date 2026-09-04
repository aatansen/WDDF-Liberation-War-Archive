document.addEventListener("DOMContentLoaded", function () {
    const search = document.getElementById("documentSearch");
    const filter = document.getElementById("documentFilter");

    if (search && filter) {
        search.addEventListener("input", filterDocuments);
        filter.addEventListener("change", filterDocuments);
    }

    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const message = document.getElementById("formMessage");

            if (form.checkValidity()) {
                message.textContent = "Your inquiry has been submitted successfully.";
                message.style.color = "green";
                form.reset();
            } else {
                message.textContent = "Please fill in all required fields.";
                message.style.color = "red";
            }
        });
    }
});

function filterDocuments() {
    const searchText = document.getElementById("documentSearch").value.toLowerCase();
    const selectedType = document.getElementById("documentFilter").value;
    const documents = document.querySelectorAll(".document");

    documents.forEach(function (documentItem) {
        const text = documentItem.textContent.toLowerCase();
        const type = documentItem.getAttribute("data-type");

        const matchesSearch = text.includes(searchText);
        const matchesType = selectedType === "all" || type === selectedType;

        documentItem.style.display =
            matchesSearch && matchesType ? "block" : "none";
    });
}

function showDocument(title, date, type, source) {
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalDate").textContent = date;
    document.getElementById("modalType").textContent = type;
    document.getElementById("modalSource").textContent = source;
    document.getElementById("documentModal").style.display = "block";
}

function closeDocument() {
    document.getElementById("documentModal").style.display = "none";
}

function openImage(path, caption) {
    document.getElementById("largeImage").src = path;
    document.getElementById("largeImage").alt = caption;
    document.getElementById("imageCaption").textContent = caption;
    document.getElementById("downloadImage").href = path;
    document.getElementById("imageModal").style.display = "block";
}

function closeImage() {
    document.getElementById("imageModal").style.display = "none";
}

window.addEventListener("click", function (event) {
    const documentModal = document.getElementById("documentModal");
    const imageModal = document.getElementById("imageModal");

    if (event.target === documentModal) {
        closeDocument();
    }

    if (event.target === imageModal) {
        closeImage();
    }
});
