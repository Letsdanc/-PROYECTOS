//BOTONES
const miBoton1 = document.getElementById('Reproducir1');
const miBoton2 = document.getElementById('Reproducir2');
const miBoton3 = document.getElementById('Reproducir3');

//PAUSAS
const Pausar1 = document.getElementById('Pausar1');
const Pausar2 = document.getElementById('Pausar2');
const Pausar3 = document.getElementById('Pausar3');


//reiniciadas
const Reiniciar1 = document.getElementById('Reiniciar1');
const Reiniciar2 = document.getElementById('Reiniciar2');
const Reiniciar3 = document.getElementById('Reiniciar3');

//REPETIR
const Repetir1 = document.getElementById('Repetir1');
const Repetir2 = document.getElementById('Repetir2');
const Repetir3 = document.getElementById('Repetir3');

//MUSICAS
const audio1 = new Audio('Dembere - Mestizo Is Back.mp3');
const audio2 = new Audio('MXZI_Dj_Samir_DJ_Javi26_-_MONTAGEM_XONADA_(SkySound.cc).mp3');
const audio3 = new Audio('BLUEEE LAKEEEEE.mp3');


//REINCIAR
if(Reiniciar1){
  Reiniciar1.addEventListener('click', function(){
     audio1.currentTime = 0;
  });
}

if(Reiniciar2){
  Reiniciar2.addEventListener('click', function(){
     audio2.currentTime = 0;
  });
}

if(Reiniciar3){
  Reiniciar3.addEventListener('click', function(){
     audio3.currentTime = 0;
  });
}



//REPETIR
if(Repetir1){
  Repetir1.addEventListener('click', function(){
    audio1.loop = true;
  });
}


if(Repetir2){
  Repetir2.addEventListener('click', function(){
    audio2.loop = true;
  });
}


if(Repetir3){
  Repetir3.addEventListener('click', function(){
    audio3.loop = true;
  });
}



//sonar
if(miBoton1 && audio1){
  miBoton1.addEventListener('click', function(){
    audio1.play();
   
});
}

if(miBoton2 && audio2){
  miBoton2.addEventListener('click', function(){
  audio2.play();
});
}
 

if(miBoton3 && audio3){
  miBoton3.addEventListener('click', function(){
  audio3.play();
  });
}
  

//pausar
if(Pausar1){
   Pausar1.addEventListener('click', function(){
   audio1.pause(); 
   });
}


if(Pausar2){
Pausar2.addEventListener('click', function(){
   audio2.pause();
   });
}


if(Pausar3){
Pausar3.addEventListener('click', function(){
    audio3.pause();
   });
}



