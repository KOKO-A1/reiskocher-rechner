const reis = document.getElementById("reis");
const gramm = document.getElementById("gramm");

const reisbecher = document.getElementById("reisbecher");
const wasseranzeige = document.getElementById("wasseranzeige");
const wasserml = document.getElementById("wasserml");
const modus = document.getElementById("modus");

function berechnen() {

    const grammWert = parseFloat(gramm.value);

    if (isNaN(grammWert) || grammWert <= 0) {
        reisbecher.textContent = "0,00";
        wasseranzeige.innerHTML = '0,00 Becher <span id="wasserml">(≈ 0 ml)</span>';
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
    wasseranzeige.innerHTML =
        cupsWasser.toFixed(2).replace(".", ",") +
        " Becher <span>(≈ " +
        Math.round(mlWasser) +
        " ml)</span>";
    modus.textContent = programm;
}

gramm.addEventListener("input", berechnen);
reis.addEventListener("change", berechnen);

berechnen();
