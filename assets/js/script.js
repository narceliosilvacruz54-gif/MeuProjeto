const imgsDestaque = [
  "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1065/b_white/f_auto/q_auto/store/software/switch2/70010000130792/21d17919819cffebda2817f9b0110116c28568e0b6fa30a9778f1679271be809",
  "https://www.adrenaline.com.br/wp-content/uploads/2025/06/resident-evil-requiem-tudo-sobre-o-jogo.png",
  "https://www.adrenaline.com.br/wp-content/uploads/2026/06/God-of-War-Laufey-State-Play-912x569.jpeg"
  ]
 
let atual = 1;
 
const imagem = document.querySelector("#destaqueImagem")

setInterval(function (){
  atual++;
  if(atual >= imgsDestaque.length){
    atual = 0;
  } 
 
  imagem.src = imgsDestaque[atual]
 
}, 1000) 