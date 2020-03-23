/*
document.getElementById('id12');
document.getElementsByClassName('kjf');
document.querySelector('dkj');*/



document.getElementById('burger').onclick = function(){
    addMenu()

}
function addMenu(){
    document.getElementById('menu').classList.toggle('show'); //работает в две стороны toolge//
}
addMenu();