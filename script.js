document.body.addEventListener('keyup',(event)=>{
 tocarMusica(event.code.toLocaleLowerCase())

})

document.querySelector('.composer button').addEventListener('click',()=>{
    let musica = document.querySelector('#input').value

    if(musica!==''){
        musicaArray = musica.split('')
        playMusica(musica)
    }
})

function tocarMusica(sound){
let audioSom = document.querySelector(`#s_${sound}`)
let elementoTecla = document.querySelector(`div[data-key="${sound}"]`)

if(audioSom){
    audioSom.currentTime = 0
    audioSom.play()
}
if(elementoTecla){
    elementoTecla.classList.add('active')

    setTimeout(()=>{
        elementoTecla.classList.remove('active')
    }, 300)
}

}

function playMusica(musicaArray){
    let wait=0
    
    for(let i of musicaArray){
        setTimeout(()=>{
            tocarMusica(`key${i}`)
        },wait)

        wait += 250
    }
}

tocarMusica(`key${i}`)