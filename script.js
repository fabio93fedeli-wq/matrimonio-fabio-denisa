AOS.init({ once: true, offset: 120, duration: 1000 });

// --- TRADUZIONI MULTILINGUA ---
const translations = {
    it: {
        intro: "Ci sposiamo",
        save_date: "Save the Date",
        date: "26 Settembre 2026",
        // AGGIORNATO:
        ceremony_title: "La Cerimonia e il Ricevimento",
        ceremony_text: "Vi aspettiamo alle ore 11:00 presso:",
        maps_btn: "Apri in Google Maps",
        gift_title: "Il nostro regalo più grande",
        gift_text: "La vostra presenza è per noi il dono più prezioso. <br>Se desiderate farci un regalo ne saremo lieti. <br>Così che il vostro contributo ci aiuti a dare inizio al nostro viaggio di vita insieme.",
        copy_btn: "Copia IBAN",
        copied_msg: "Copiato!",
        bank_owner: "Intestato a: Fabio Fedeli e Denisa Nuri",
        footer_msg: "Non vediamo l'ora di festeggiare con voi!",
        footer_thanks: "Grazie a tutti"
    },
    en: {
        intro: "We are getting married",
        save_date: "Save the Date",
        date: "September 26, 2026",
        // AGGIORNATO:
        ceremony_title: "Ceremony and Reception",
        ceremony_text: "We expect you at 11:00 AM at:",
        maps_btn: "Open in Google Maps",
        gift_title: "Our Greatest Gift",
        gift_text: "Your presence is our most precious gift. <br>If you wish to give us a present, we would be delighted. <br>Your contribution will help us start our life journey together.",
        copy_btn: "Copy IBAN",
        copied_msg: "Copied!",
        bank_owner: "Account Holders: Fabio Fedeli & Denisa Nuri",
        footer_msg: "We can't wait to celebrate with you!",
        footer_thanks: "Thank you all"
    },
    sq: {
        intro: "Po martohemi",
        save_date: "Save the Date",
        date: "26 Shtator 2026",
        // AGGIORNATO:
        ceremony_title: "Ceremonia dhe Pritja",
        ceremony_text: "Ju presim në orën 11:00 në:",
        maps_btn: "Hape në Google Maps",
        gift_title: "Dhurata jonë më e madhe",
        gift_text: "Prania juaj është dhurata jonë më e çmuar. <br>Nëse dëshironi të na bëni një dhuratë, do të jemi të lumtur. <br>Kontributi juaj do të na ndihmojë të nisim udhëtimin tonë të jetës së bashku.",
        copy_btn: "Kopjo IBAN",
        copied_msg: "U kopjua!",
        bank_owner: "Mbajtësit e llogarisë: Fabio Fedeli & Denisa Nuri",
        footer_msg: "Mezi presim të festojmë me ju!",
        footer_thanks: "Faleminderit të gjithëve"
    }
};

function setLanguage(lang) {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = Array.from(document.querySelectorAll('.lang-btn'))
        .find(b => b.textContent.toLowerCase() === lang);
    if(activeBtn) activeBtn.classList.add('active');
}

function copiaIban() {
    const ibanText = document.getElementById("ibanText").innerText;
    const msgElement = document.getElementById("copiaMsg");

    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(ibanText)
            .then(() => {
                msgElement.style.display = "block";
                setTimeout(() => { msgElement.style.display = "none"; }, 2500);
            })
            .catch(err => { alert("L'IBAN è: " + ibanText); });
    } else {
        alert("L'IBAN è: " + ibanText);
    }
}