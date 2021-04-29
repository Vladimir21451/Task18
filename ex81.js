
   const status =document.querySelector('#status');
   const mapLink = document.querySelector('#map-link');
   const btn = document.querySelector('.btn-test');
   const btnZone = document.querySelector('.btn-zone');
   const error =() =>{
       status.textContent ="Нельзя получить местоположение";
   }
   const success = (position) =>{
       const latitude = position.coords.latitude;
       const longitude = position.coords.longitude;

       // status.textContent = 'Широта: {latitude}' + 'Долгота: {longitude}';
      // mapLink.href ='http://www.openstreetmap/org/#map=18/${latitude}/${longitude};'
      // mapLink.textContent ='Ссылка на карту';
      // alert('Here1');
   }
   btn.addEventListener('click', () =>{
   // alert('Here2');
    mapLink.href = "";
    mapLink.textContent = "";
    if(!navigator.geolocation){
        status.textContent = 'Geolocation не поддерживается Вашим браузером';
    }
    else {
        status.textContent ='Определение местоположения...';
        navigator.geolocation.getCurrentPosition(showPosition);
        //alert(longitude);
    }
    
})
function showPosition(position) {
    /* Выводим координаты */
    longitude = position.coords.longitude;
    latitude = position.coords.latitude;
    status.textContent  += 'Широта:' +  (position.coords.latitude).toFixed(2) + '   ' + 
    'Долгота:' + (position.coords.longitude).toFixed(2);
   // document.write("Широта: " + position.coords.latitude + "<br />");
   // document.write("Долгота: " + position.coords.longitude);
   status.textContent += 'Ширина экрана:' + screen.width + ' ' +'Высота экрана: ' +  screen.height;
}
btnZone.addEventListener('click', () => {
   // alert(typeof(longitude));
   if(typeof(longitude) === 'undefined'){ 
    alert('Сначала получите данные геолокации');
    return;
   }  
   else{
        const loadUrl = 'https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=55&long=37.';                                                      
        // alert(loadUrl);
        fetch(loadUrl)
            .then((response) => {
                console.log('response',response);
                const result = response.json();
                console.log('result',result);
                return result;
            })
            .then((data) => {console.log(data),createUL(data);
               // alert(data.date_time_txt);
                //alert(data.timezone);
            })
            .catch(() => {console.log('error');
           })
           
   }
})
function createUL(data){
    let headList=document.getElementsByTagName('h2')[1]
   // var body = document.body;
        var ul = document.createElement('ul');
      var text ='Часовой пояс:' +  data.timezone;     
      var li = document.createElement('li');
      li.textContent = text;
      ul.appendChild(li);
      li = document.createElement('li');
       text ='Время:' +  data.date_time_txt;
      li.textContent = text;
      ul.appendChild(li);
      headList.appendChild(ul);
      li.style.cssFloat = 'center';

    } 
