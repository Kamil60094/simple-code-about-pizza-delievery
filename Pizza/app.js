function liczenie(jakapizza, ilesztuk, ktoreosiedle)
{
    let koszt;
    let dojazd;
    switch(jakapizza)
    {
        case "a": koszt = 39; break;
        case "b": koszt = 43; break;
        case "c": koszt = 32; break;
    }
    switch(ktoreosiedle.id)
    {
        case "osiedlea": dojazd = 10; break;
        case "osiedleb": dojazd = 15; break;
        case "osiedlec": dojazd = 20; break;
    }
    koszt = koszt * ilesztuk + dojazd;
    return koszt;
    
}
function validation(s)
{
    return /[a-c]+$/.test(s);
}

//UI i logika aplikacji
const wynik = document.getElementById("wynik");
const elpolicz = document.getElementById("policz");
const elreset = document.getElementById("reset");

elpolicz.addEventListener("click",() => {
    const ktorapizza = document.getElementById("pizzachoice").value;
    const ilesztuk = parseInt(document.getElementById("howmuch").value);
    const zaznaczony = document.querySelector('input[name="whereto"]:checked');

    if(validation(ktorapizza) == true && ilesztuk >= 0)
        wynik.textContent = "Koszt: " + liczenie(ktorapizza, ilesztuk, zaznaczony);
    else
        wynik.textContent = "Wpisano niepoprawne dane";
})

elreset.addEventListener("click", () => {
    wynik.textContent = "Koszt: ";
    document.getElementById("pizzachoice").value = "";
    document.getElementById("howmuch").value = "";
    document.getElementById("osiedlea").checked = true;
})

