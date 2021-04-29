const wsUrl = "wss://echo.websocket.org/";
const btnOpen = document.querySelector('.btn-open');
const btnClose = document.querySelector('.btn-close');
const btnSend = document.querySelector('.btn-send');
const btnSendGeo =document.querySelector('.btn-send-geo');
var websocket;

function writeToScreen(message){
    let pre = document.createElement("p");
    pre.style.wordWrap ="break-word";
    pre.innerHTML = message;
    output.appendChild(pre);
}
//Открытие соединения
btnOpen.addEventListener('click', ()=>{
     websocket = new WebSocket(wsUrl);
    //alert(websocket.readyState);
    websocket.onopen = function(evt){
        writeToScreen("CONNECTED"); 
    };
    websocket.onclose = function(evt){
        writeToScreen("DISCONNECTED");
    };
    //отображение отклика сервера
    websocket.onmessage = function(evt){
       // alert(geo.value);
        if(geo.value == ""){
        writeToScreen('<span style ="color:blue;">RESPONSE:' + evt.data + '<span>')
        }
        //else{geo.value=""}
    };
    websocket.onerror = function(evt){
        writeToScreen('<span style = "color: red;"> ERROR: <span>' + evt.data)
    }
})
//Закрытие socket'а
btnClose.addEventListener('click', ()=>{
   // alert('btnClose');
    websocket.close();
    websocket = null;
});
//отправка сообщения на сервер
btnSend.addEventListener('click', ()=>{
   geo.value ="";
    //const message = "Test message";
    const message = document.getElementById('msg').value;
    writeToScreen('SEND: ' +message);
    websocket.send(message);
})
//отправка геоданных на сервер
btnSendGeo.addEventListener('click', ()=>{
    //alert('btn-send-geo');
    if(!navigator.geolocation){
        status.textContent = 'Geolocation не поддерживается Вашим браузером';
    }
    else {
        navigator.geolocation.getCurrentPosition(showPosition);
       // alert(longitude);
    }
})
function showPosition(position) {
    /* Выводим координаты */
   // longitude = position.coords.longitude;
    //latitude = position.coords.latitude;
    let geo = document.getElementById('geo'); 
    geo.value = 'Широта:' +  (position.coords.latitude).toFixed(2) + '   ' + 
    'Долгота:' + (position.coords.longitude).toFixed(2);
    writeToScreen('SEND: ' + geo.value );
    websocket.send(geo.value);
  
}


   