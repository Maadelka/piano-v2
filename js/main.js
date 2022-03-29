document.body.style.backgroundColor=`gray`

let ck=document.getElementById('ck')
let child=document.querySelectorAll('child')

const arr = ['z','x','c','v','b','n','m',',','.','s','d','g','h','j','l',';','q','w','e','r','t','y','u','i','o','p','3','4','5','7','8','0','-']
let kDown = window.addEventListener('keydown',hasil)
let kUp = window.addEventListener('keyup',akhir)
let audio
let value

function hasil(e){

    let hasilK = e.key
    const index = arr.indexOf(hasilK)
    value = arr[index]
    audio = new Audio(`assets/nada1/${value}.mp3`)
    audio.play()
    if(e.key == '.'){
        audio = new Audio(`assets/nada1/as.mp3`)
        audio.play()
    }
    document.getElementById(value).style.backgroundColor='darkblue'
}

let hId= value
function akhir(e){
    document.getElementById(value).style.backgroundColor='blanchedalmond'
}































// let q = document.getElementById('satu')
// let dua = document.getElementById('dua')
// let tiga = document.getElementById('tiga')
// let empat = document.getElementById('empat')
// let lima = document.getElementById('lima')

// window.addEventListener('keydown',function(e){
//     switch(e.key){
//         case 'q': satu.classList.add('hover');
//         break;
//         case 'w': dua.classList.add('hover');
//         break;
//         case 'e': tiga.classList.add('hover');
//         break;
//         case 'r': empat.classList.add('hover');
//         break;
//         case 't': lima.classList.add('hover');
//     }
// })
// window.addEventListener('keyup',function(e){
//     switch(e.key){
//         case 'q': satu.classList.remove('hover');
//         break;
//         case 'w': dua.classList.remove('hover');
//         break;
//         case 'e': tiga.classList.remove('hover');
//         break;
//         case 'r': empat.classList.remove('hover');
//         break;
//         case 't': lima.classList.remove('hover');
//     }
// })



