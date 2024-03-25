const botao = document.querySelector(".convertButton");

botao.addEventListener('click', ConversorTemperatura);

function ConversorTemperatura() {
    const temperaturaInput = parseFloat(document.querySelector(".tempInput").value);
    const de = document.querySelector(".unitInput").value.toLowerCase();
    const para = document.querySelector(".unitOutput").value.toLowerCase();
    let temperatura;
    const resultado = document.querySelector(".result");

    if (de === "celsius" && para === "kelvin") {
        temperatura = temperaturaInput + 273.15;
    } else if (de === "celsius" && para === "fahrenheit") {
        temperatura = (temperaturaInput * 9) / 5 + 32;
    } else if (de === "kelvin" && para === "celsius") {
        temperatura = temperaturaInput - 273.15;
    } else if (de === "kelvin" && para === "fahrenheit") {
        temperatura = (temperaturaInput - 273.15) * 9 / 5 + 32;
    } else if (de === "fahrenheit" && para === "celsius") {
        temperatura = (temperaturaInput - 32) * 5 / 9;
    } else if (de === "fahrenheit" && para === "kelvin") {
        temperatura = (temperaturaInput - 32) * 5 / 9 + 273.15;
    }

    resultado.textContent = temperatura;
}
