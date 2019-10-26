
var numberA = prompt('Введите первое число');
var numberB = prompt('Введите второе число');
var numberCheckResult = 'Неверно';

if (numberA > 0 && numberA < 20 
    || numberB >= 8 && numberB < 15){
    numberCheckResult = 'Верно';
}

document.
    getElementsByClassName('js-user-numbers')[0]
    .innerText = numberA + ', ' + numberB;

document
    .getElementsByClassName('js-nuber-check-result')[0]
    .innerText = numberCheckResult;
