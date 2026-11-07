// ===== DIAPORAMA =====

const slides = document.querySelectorAll(".slide");

let index = 0;

function afficherSlide() {

    // Cacher l'image actuelle
    slides[index].classList.remove("active");

    // Passer à l'image suivante
    index = (index + 1) % slides.length;

    // Afficher la nouvelle image
    slides[index].classList.add("active");
}

// Changement automatique toutes les 3 secondes
setInterval(afficherSlide, 3000);
// ===== FORMULAIRE DE CONTACT WHATSAPP =====

const formulaire = document.getElementById("contactForm");

if (formulaire) {

    formulaire.addEventListener("submit", function(e) {

        e.preventDefault();

        const nom = document.getElementById("nom").value;
        const email = document.getElementById("email").value;
        const telephone = document.getElementById("telephone").value;
        const message = document.getElementById("message").value;

        const numeroWhatsApp = "243828515416";

        const texte = `Bonjour CLIM-WETU !

Nom : ${nom}
E-mail : ${email}
Téléphone : ${telephone}

Message :
${message}`;

        const lien = "https://wa.me/" + numeroWhatsApp + "?text=" + encodeURIComponent(texte);

        window.open(lien, "_blank");

    });

}