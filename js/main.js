


// * * * FORMULAIRE DE CONTACT

emailjs.init('Z9mrCsFuVErU08H-e')

const formEl = document.getElementById("subscribe-form");
const checkbox = document.getElementById("cgu");
const checkboxLabel = checkbox.nextElementSibling;
const btn = document.querySelector('.submit-button');

formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    // Vérification de la case à cocher
    if (!checkbox.checked) {
        checkboxLabel.style.color = "red"; // Met le texte du label en rouge
        checkboxLabel.style.fontWeight = "bold";
        return;
    }

    // remise à zéro du style du label
    checkboxLabel.style.color = "";
    checkboxLabel.style.fontWeight = "";

    btn.value = 'Envoi...';

    const serviceID = 'infraloc_gmail_nolann';
    const templateID = 'template_6pl9wii';

    emailjs.sendForm(serviceID, templateID, formEl)
        .then(() => {
            btn.value = 'Envoyer ma demande';
            formEl.reset();
        }, (err) => {
            btn.value = 'Envoyer ma demande';
            console.error(`Échec de l'envoi de l'email. Veuillez réessayer.`, err);
        });

});







