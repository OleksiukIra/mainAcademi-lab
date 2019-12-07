function fillForm() {
    var str = window.location.search.substring(1);
    var arr = str.split('&');
    for (var i = 0; i < arr.length; i++) {
        var valueAndKey = arr[i].split('=');
        var element = document.querySelector('[name="' + valueAndKey[0] + '"]');
        if (element) {
            element.value = decodeURI(valueAndKey[1]);
        }
    }
}

function submitForm(e) {
    e.preventDefault();
    var form = document.forms.valide_data;
    var params = [];
    for (var i = 0; i < form.length; i++) {
        var element = form[i];
        if (element.value && element.name && element.value.length > 0) {
            params.push(element.name + '=' + element.value);
        }
    }
    window.location.search = '?' + encodeURI(params.join('&'));
}

document.getElementById('submit-btn').onclick = submitForm;
fillForm();


window.onload = function () {
    setTimeout(function () {
        document.getElementsByClassName('animation')[0].style.opacity = 0;
    }, 1000);
}


(function() {
    let images = document.getElementsByTagName('img');    
    for (let i = 0; i < images.length; i++) {
        let fakeImg = new Image();
        fakeImg.src = images[i].getAttribute('data-src');
        fakeImg.onload = () => {
            images[i].src = fakeImg.src;

        }
    }
})()
