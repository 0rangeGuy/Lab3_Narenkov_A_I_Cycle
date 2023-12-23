let DigitOne = prompt('Введите число к');
let DigitTwo = prompt('Введите массив');
DigitOne = Number(DigitOne);

DigitTwo=DigitTwo.split(' ');
let Call = true;

for (let i = 0; i < DigitTwo.length; i++){
    if (Number(DigitTwo[i])>=DigitOne){
        call = false
    }
}
alert(Call)