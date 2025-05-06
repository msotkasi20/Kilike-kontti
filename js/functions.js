//luetaan muuttujaan querySelectorin toiminnat napeista
const button = document.querySelector('#onnennumero-buttoni')
const tulos = document.querySelector('#onnennumero-tulos')
const button1 = document.querySelector('#sanonnat-buttoni')
const tulos1 = document.querySelector('#sanonnat-vastaus')
const button2 = document.querySelector('#kahavi-buttoni')
const tulos2 = document.querySelector('#kahavi-palkki')
const kommentti = document.querySelector('#kahavi-kommentti')
const button3 = document.querySelector('#kaveri-buttoni')

const palauteNappulat = document.querySelectorAll('#kuvakkeet button')

//tehdään onnennumeron arvonta funktio, numerot 1-100
button.addEventListener('click', () => {
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

//tehdään kahvintarpeenmittarin evenlistener
button2.addEventListener('click', () => {
    const tarve = Math.floor(Math.random() * 6) +5  //5-10!
    tulos2.style.width = `${(tarve / 10) * 100}%`

    let teksti = ''
    if (arvo <= 6) {
        teksti = 'Ny ehkä vielä pärjää yhelä normikupila..'
    } else if (arvo <= 8) {
        teksti = 'Kahavihammasta kolottaa jo hirviästi, pittää ottaa tuopilline!'
    } else {
        teksti = 'Ny sitä kahavia tänne jo mahotonta vauhtia, paa heti sankko!'
    }

    kommentti.textContent = teksti
})

//palautetaan painallukset localStoragesta haulla tai alustetaan arvot nolliksi
const painallukset = JSON.parse(localStorage.getItem("painnalluksetKertaa")) || {
    "tosi-happy": 0,
    "happy": 0,
    "neutraali": 0,
    "surullinen": 0
}

//joka naaman painallukset lasketaan ja tallennetaan
palauteNappulat.forEach(button => {
    const tyyppi = button.dataset.feedback;
    const laskuri = button.querySelector('.counter')
    laskuri.textContent = painallukset[tyyppi]

    button.addEventListener("click", () => {
        painallukset[tyyppi]++
        localStorage.setItem("painalluksetKertaa", JSON.stringify(painallukset))
        laskuri.textContent = painallukset[tyyppi]
    })
})
