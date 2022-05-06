alert(`DJDJDJ`)

const names = document.getElementById(`name`);
const forc = document.getElementById(`forc`);
const int = document.getElementById(`int`);
const des = document.getElementById(`name`);
const person = document.getElementById(`person`);
const btnCreate = document.querySelector(".butonCreate");
const questions = document.querySelector("#questions");
const title = document.querySelector(".textTitle")


names.addEventListener("keypress", (e) =>{
    

    if(e.keycode > 47 && e.keycode < 58){
        e.preventDefault();
    }
        
    
    
});

btnCreate.addEventListener("click", ()=>{
    questions.style.display = `none`;
    questions.classList.add(`julio`);
    title.textContent = " Your Character"
    
    //values
    let name = names.value;
    let force = forc.value;
    let inter = int.value;
    let dest = des.value;
    let perso = person.value;

    //Names 

    



    



    //Your character is called ${} has ${} strength, ${} dexterity, ${} intelligence, and he sure is a guy ${};
});

