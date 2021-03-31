function clearAll(){
  
  localStorage.setItem('INGRESSO'," ");
  localStorage.setItem('OFFERTORIO'," ");
  localStorage.setItem('COMUNIONE'," ");
  localStorage.setItem('FINALE'," ");

  localStorage.setItem('INGRESSOh'," ");
  localStorage.setItem('OFFERTORIOh'," ");
  localStorage.setItem('COMUNIONEh'," ");
  localStorage.setItem('FINALEh'," ");

  console.log(localStorage);
  stmpAll();
}


function stmpAll(){

  document.getElementById('st0').href =  localStorage.getItem('INGRESSOh');
  document.getElementById('st1').href =  localStorage.getItem('OFFERTORIOh');
  document.getElementById('st3').href =  localStorage.getItem('COMUNIONEh');
  document.getElementById('st4').href =  localStorage.getItem('FINALEh');


  document.getElementById('st0').innerHTML =  localStorage.getItem('INGRESSO');
  document.getElementById('st1').innerHTML =  localStorage.getItem('OFFERTORIO');
  document.getElementById('st3').innerHTML =  localStorage.getItem('COMUNIONE');
  document.getElementById('st4').innerHTML =  localStorage.getItem('FINALE');
  
}
 
let p,n,h;

function saveSong(){
    p = document.getElementById('inputParte').value;
    n = document.getElementById('title').innerHTML ;
    h = location.href;
    localStorage.clear;

    localStorage.setItem(p,n);
    localStorage.setItem(p+'h',h);
    console.log(p,n,h);
    console.log(localStorage);
    alert("Salvato in "+ p)
}








