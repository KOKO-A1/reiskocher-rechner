const reis = document.getElementById("reis");
const gramm = document.getElementById("gramm");

const reisbecher = document.getElementById("reisbecher");
const wasserbecher = document.getElementById("wasserbecher");
const modus = document.getElementById("modus");
const wasserml = document.getElementById("wasserml");

function berechnen() {

    const grammWert = parseFloat(gramm.value);

    if (isNaN(grammWert) || grammWert <= 0) {
        reisbecher.textContent = "0,00";
        wasserbecher.textContent = "0,00";
        wasserml.textContent = "0 ml";
        modus.textContent = "-";
        return;
    }

    const daten = reis.value.split("|");

    const faktor = parseFloat(daten[0]);
    const programm = daten[1];

    const cupsReis = grammWert / 130;
    const cupsWasser = cupsReis * faktor;
    const mlWasser = cupsWasser * 150;
    console.log(cupsWasser);
    console.log(mlWasser);

    reisbecher.textContent = cupsReis.toFixed(2).replace(".", ",");
    wasserbecher.textContent = cupsWasser.toFixed(2).replace(".", ",");
    wasserml.textContent = Math.round(mlWasser) + " ml";
    modus.textContent = programm;
}

gramm.addEventListener("input", berechnen);
reis.addEventListener("change", berechnen);

berechnen();
