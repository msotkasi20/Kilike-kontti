//luetaan muuttujaan querySelectorin toiminnat napeista
const buttoni = document.querySelector('#onnennumero-buttoni')
const tulos = document.querySelector('#onnennumero-tulos')
const button1 = document.querySelector('#sanonnat-buttoni')
const tulos1 = document.querySelector('#sanonnat-vastaus')
const button2 = document.querySelector('#kahavi-buttoni')
const tulos2 = document.querySelector('#kahavi-palkki')
const kommentti = document.querySelector('#kahavi-kommentti')
const button3 = document.querySelector('#kaveri-buttoni')
const arvontavastaus = document.querySelector('#arvonta-vastaus')

const palauteNappulat = document.querySelectorAll('#kuvakkeet button')

//tehdään onnennumeron arvonta funktio, numerot 1-100
buttoni.addEventListener('click', () => {
    const numero = Math.floor(Math.random() * 100) +1
    tulos.textContent = `Onneksi olokoon, sullekki löyty onnennumero ja se o: ${numero}`
})

//tehdään sanontojen array ja eventlistener
const lauseet = [
    "Etteenpäin se o vaikka turvallee lentäs!",
    "Voi elläimen käsi!",
    "Heleppua o ku heinän juonti!",
    "Ookkonää Oulusta, pelekääkkönää polliisia?",
]

button1.addEventListener('click', () => {
    const satunnainen = lauseet[Math.floor(Math.random() * lauseet.length)]
    tulos1.textContent = `Täsä: ${satunnainen}`
})

//tehdään kahvintarpeenmittarin eventlistener
button2.addEventListener('click', () => {
    const tarve = Math.floor(Math.random() * 6) +5  //5-10!
    console.log("Kahavintarve: ", tarve); //tarkistukseen

    const prosentti = (tarve / 10) * 100
    tulos2.style.width = `${prosentti}%`

    //kommentit mittarin viereen
    let teksti = ''
    if (tarve <= 6) {
        teksti = 'Ny ehkä vielä pärjää yhelä normikupila..'
    } else if (tarve <= 8) {
        teksti = 'Kahavihammasta kolottaa jo hirviästi, pittää ottaa tuopilline!'
    } else {
        teksti = 'Ny sitä kahavia tänne jo mahotonta vauhtia, paa heti sankko!'
    }

    const arvoKentta = document.getElementById('kahavi-arvo')
    const kommenttiKentta = document.getElementById('kahavi-kommentti')

    if (arvoKentta && kommenttiKentta) {
        arvoKentta.textContent = `Palijo tarttee: ${tarve} / 10`
        kommenttiKentta.textContent = teksti
    } else {
        console.warn("Arvo- tai kommenttikenttää ei löytynyt!")
    } 
})

//päätöksentekokaverille eventlistener
button3.addEventListener('click', () => {
    const vaihtoehto1 = document.getElementById("eka").value.trim()
    const vaihtoehto2 = document.getElementById("toka").value.trim()

    if (!vaihtoehto1 || !vaihtoehto2) {
        arvontavastaus.textContent = "Hei pahvi, syötä eka kumpiki vaihtis!!!"
        return;
    }

    const valinta = Math.random() < 0.5 ? vaihtoehto1 : vaihtoehto2
    arvontavastaus.textContent = `Oikia vastaus: ${valinta}. Ei siitä nyt vaa sitte!`
})

//Pallautemittari: palautetaan painallukset localStoragesta haulla tai alustetaan arvot nolliksi
const painallukset = JSON.parse(localStorage.getItem("painalluksetKertaa")) || {
    "tosi-happy": 0,
    "happy": 0,
    "neutraali": 0,
    "surullinen": 0
}

//joka naaman painallukset lasketaan ja tallennetaan
palauteNappulat.forEach(button => {
    const tyyppi = button.dataset.feedback;
    const laskuri = button.querySelector('.counter')
    laskuri.textContent = painallukset[tyyppi] || 0

    button.addEventListener("click", () => {
        painallukset[tyyppi]++
        localStorage.setItem("painalluksetKertaa", JSON.stringify(painallukset))
        laskuri.textContent = painallukset[tyyppi]
    })
})
