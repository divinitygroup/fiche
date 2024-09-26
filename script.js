
function toggleJustification() {
    const suivi = document.getElementById('suiviNecessaire').value;
    const justificationField = document.getElementById('justificationField');

    if (suivi === 'OUI') {
        justificationField.style.display = 'block';
    } else {
        justificationField.style.display = 'none';
    }
}


const users = {
    "Evan MOUNGINDO": "CITY",
    "Mercia OUNTELANTALOU": "FIRE",
    "Christians KAYA ETEKA": "FOCON",
    "Gendel KIBANGOU": "FLOW",
    "Néhémie BIMBENI": "TECH"
};

// Gestion du formulaire de soumission
document.getElementById('meetingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;

    if (users[user] && users[user] === password) {
        displaySummary();
    } else {
        showErrorModal();
    }
});

function displaySummary() {
    const user = document.getElementById('user').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const prospectsPrevus = document.getElementById('prospectsPrevus').value;
    const prospectsRencontres = document.getElementById('prospectsRencontres').value;
    const conversion = document.getElementById('conversion').value;
    const objectif = document.getElementById('objectif').value;
    const suiviNecessaire = document.getElementById('suiviNecessaire').value;
    const justification = document.getElementById('justification').value;
    const critiques = document.getElementById('critiques').value;

    const summaryContent = `
        <p><strong>Utilisateur :</strong> ${user}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Date :</strong> ${date}</p>
        <p><strong>Heure :</strong> ${time}</p>
        <p><strong>Nombre de prospects prévus :</strong> ${prospectsPrevus}</p>
        <p><strong>Nombre de prospects rencontrés :</strong> ${prospectsRencontres}</p>
        <p><strong>Taux de conversion estimé :</strong> ${conversion}%</p>
        <p><strong>Objectif du jour :</strong> ${objectif}</p>
        <p><strong>Suivi nécessaire :</strong> ${suiviNecessaire}</p>
        ${suiviNecessaire === 'OUI' ? `<p><strong>Justification :</strong> ${justification}</p>` : ''}
        <p><strong>Critiques des clients :</strong> ${critiques}</p>
    `;

    document.getElementById('summaryContent').innerHTML = summaryContent;
    document.getElementById('summaryModal').style.display = 'flex';
}

// Fermeture de la modale de récapitulatif
function closeSummaryModal() {
    document.getElementById('summaryModal').style.display = 'none';
}

// Affichage de la modale d'erreur
function showErrorModal() {
    document.getElementById('errorModal').style.display = 'flex';
}

// Fermeture de la modale d'erreur
function closeErrorModal() {
    document.getElementById('errorModal').style.display = 'none';
}


document.getElementById('emailBtn').addEventListener('click', function() {
    const email = 'divinitygroup23@gmail.com';
    const subject = 'Récapitulatif de la réunion';
    const body = document.getElementById('summaryContent').innerText;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});


document.getElementById('smsBtn').addEventListener('click', function() {
    const phone = '+242068336096';
    const body = document.getElementById('summaryContent').innerText;
    window.location.href = `sms:${phone}?body=${encodeURIComponent(body)}`;
});


document.getElementById('whatsappBtn').addEventListener('click', function() {
    const phone = '+242068336096';
    const message = document.getElementById('summaryContent').innerText;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
});
