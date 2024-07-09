const img = document.querySelector(".carrosel-lanches img")

let aux = 0

function changeImage(){
    aux++
    img.src = `assets/img/burguer${aux}.webp`
    if(aux == 5){
        aux = 0
    }
}

setInterval(changeImage, 2000)
