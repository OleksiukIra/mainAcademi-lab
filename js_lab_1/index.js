var li = document.getElementsByTagName('li');

function colorOfElement(){
    for(var i =0; i <li.length; i++){
    if(i % 2){
        li[i].style.color = "green";
    }else {
        li[i].style.color = "blue";
    }
}
}


colorOfElement();

function changeImg(){
    
    document.getElementById('hide').onclick = function(){
        var oldImage = document.getElementById('image').getAttribute('src');
        var newImg = document.getElementById('image').getAttribute('data-src')

        document.getElementById('image').setAttribute('src', newImg);
        document.getElementById('image').setAttribute('data-src', oldImage);

    }
}
changeImg();