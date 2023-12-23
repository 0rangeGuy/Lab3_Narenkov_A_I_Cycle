function Smth(DigitOne) {
    Summ = Number();
    for (let i = 1; i <= DigitOne; i++){
        Summ = Summ + 1/i;
        console.log(Summ, 1/i)
    }
    return(Summ)
}

let DigitOne = prompt('Введите N.');
DigitOne = Smth(Number(DigitOne))
alert(DigitOne)