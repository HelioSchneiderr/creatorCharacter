const btn = document.getElementsByClassName(`btn`);

function remove(){
    btn.parentNode.removeChild(`btn`)
}

btn.addEventListener("click", remove());