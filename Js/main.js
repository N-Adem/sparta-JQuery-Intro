document.addEventListener('DOMContentLoaded', function () {
    console.log("ready to go");



    $(function (event) {
        console.log("ready to gooop");

        //var itemCount = document.getElementById('count');
        //var item = $('#count'); // jq
        //var itemList = $('.lIst');// jq

        //var tagLi = document.getElementsByTagName('li');
        //var tag = $('li');
//=======Creating a tag and pushing it into another tag i.e the <ul>.|
      /*  var shopItem = document.createElement('li'); 
        var wholeList = document.getElementById('shopping list');
        shopItem.innerText = "bacon";
        wholeList.appendChild(shopItem);
        console.log(shopItem);/*/
//-------------------------------------------------------------------|
        var newLiJQ = $("<li> new Item </li>");
        $('#list').append(newLiJQ);
       
        var arrToDo = ['cheese', 'sausage', 'bacon'];
        
        /*for(let i =0; i < arrToDo.length; i++){
            console.log(arrToDo[i]);
        }*/
        /*$(arrToDo).each(function(item,todo){
            console.log(todo);
        }) */

        arrToDo.forEach(function(todo){
            console.log(todo);
        })
    });// JQuery
});// DOM Loading 
