function calculateSum(a,b){
const btn = document.querySelector('#btn-text');
const btnIcon = document.querySelector('.btn-icon');
var svg='<svg' +
' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">' +
'<path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>' +
'<path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>' +
' </svg>'
   // btnIcon.innerHTML= svg;
    var svg2= '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-app" viewBox="0 0 16 16">' +
   '<path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z"/>' +
  '</svg>'
 // alert(localStorage.getItem('svg'));
  if(localStorage.getItem('svg') === '1'){
    btnIcon.innerHTML= svg2;
    localStorage.setItem('svg','2');
  }
  else{
    btnIcon.innerHTML= svg;
    localStorage.setItem('svg','1');
  }
}
