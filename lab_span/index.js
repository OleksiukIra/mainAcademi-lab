let span = document.getElementsByClassName('text')[0];
let newTag = document.createElement('b');

document.getElementById('changed').onclick = function changeText(){
    span.innerHTML = '<b>' + span.textContent + '</b>';
    //  span.replaceWith(newTag);
}



document.getElementById('btn_result').onclick = function displayResult(){
    let field_1 = parseInt(document.getElementById('field_1').value);
    let field_2 = parseInt(document.getElementById('field_2').value);


    let result = field_1 + field_2;

    document.getElementById('result').innerHTML = result;
}



// let arr = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
// let date = new Date();
// let day = date.getDate();
// let month =arr[date.getMonth()];
// let year = date.getFullYear();
//     document.getElementsByClassName('data_1')[0].innerHTML= day + ' /'+ month +'/ ' + year;


  
let str = '2018-11-12';
let date = new Date(str);
let day = date.getDate();
let month =date.getMonth()+1;
let year = date.getFullYear();
document.getElementsByClassName('date_2')[0].innerHTML= day + ' /'+ month +'/ ' + year; ;
