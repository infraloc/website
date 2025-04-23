// Comment fonctionne Infraloc ?
const icon = document.getElementById('toggle-icon');
const iconP = document.getElementById('p-fonctionnement');

const paragraphe = document.getElementById('fonctionnement');

iconP.addEventListener('click', function () {
    if (icon.textContent === '+') {
        icon.textContent = '-';
        iconP.style.fontWeight = "bold";
        paragraphe.style.display = 'initial';
    } else {
        icon.textContent = '+';
        iconP.style.fontWeight = "normal";
        paragraphe.style.display = 'none';
    }
});

// Qui peut utiliser Infraloc ?
const whoP = document.getElementById('toggle-who');
const who = document.getElementById('p-who');

const whocontent = document.getElementById('who');

who.addEventListener('click', function () {
    if (whoP.textContent === '+') {
        whoP.textContent = '-';
        who.style.fontWeight = "bold";
        whocontent.style.display = 'initial';
    } else {
        whoP.textContent = '+';
        who.style.fontWeight = "normal";
        whocontent.style.display = 'none';
    }
});

// Quelles infrastructures seront gérables avec InfraLoc ?
const infraP = document.getElementById('toggle-infra');
const infra = document.getElementById('p-infra');

const infraContent = document.getElementById('infra');

infra.addEventListener('click', function () {
    if (infraP.textContent === '+') {
        infraP.textContent = '-';
        infra.style.fontWeight = "bold";
        infraContent.style.display = 'initial';
    } else {
        infraP.textContent = '+';
        infra.style.fontWeight = "normal";
        infraContent.style.display = 'none';
    }
});

//Sécurité
const howP = document.getElementById('toggle-how');
const how = document.getElementById('p-how');

const howContent = document.getElementById('how');

how.addEventListener('click', function () {
    if (howP.textContent === '+') {
        howP.textContent = '-';
        how.style.fontWeight = "bold";
        howContent.style.display = 'initial';
    } else {
        howP.textContent = '+';
        how.style.fontWeight = "normal";

        howContent.style.display = 'none';
    }
});

//
const secuP = document.getElementById('toggle-secu');
const secu = document.getElementById('p-secu');

const secuContent = document.getElementById('secu');

secu.addEventListener('click', function () {
    if (secuP.textContent === '+') {
        secuP.textContent = '-';
        secu.style.fontWeight = "bold";
        secuContent.style.display = 'initial';
    } else {
        secuP.textContent = '+';
        secu.style.fontWeight = "normal";
        secuContent.style.display = 'none';
    }
});
