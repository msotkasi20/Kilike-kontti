const tekosyyt = [
    "Pijin kiirettä, mutten just ehtiny..",
    "Tyyny halas nii lujasti, etten päässy irti...",
    "Mun hamsteri söi mun läppärin...",
    "Yritin onnikkaa, muttei käyny tuuri...",
    "Vejin pää punasena, nii lähti nahka päästä...",
    "Meijjän porukat ei antanu mun tehä läksyjä...",
    "Just ku pääsin koodin loppuu, nii ohojelma kaatu...",
    "Lähin kyllä aikonaa, vaa e ehtiny tulla perille ajosa..",
    "Olin ulukona ja akku loppu eikä piuha ollu mukana...",
    "Tuuli nii kovvaa, että päävvyin Tuiraan...",
    "Koira oli aamula niin vauhisa, etten voinu lähtiä...",
    "Pulut kampitti Letkunpuistosa, nii meni housun polovet rikki...",
    "Vejin täyttä Tuirasa alamäkkeen ja polokupyörän rattaat irtosi..."
]

//DOMContentLoaded varmistaa, että nappula on olemassa ennenkuin lisätään eventlistener
document.addEventListener('DOMContentLoaded', () => {
    const nappula = document.getElementById("tekosyy-buttoni")
    const vastaus = document.getElementById("tekosyy-vastaus")

    nappula.addEventListener('click', () => {
        const satunnainen = tekosyyt[Math.floor(Math.random() * tekosyyt.length)]
        vastaus.textContent = `Täsä paras syy ikinä: ${satunnainen}`
    })
})