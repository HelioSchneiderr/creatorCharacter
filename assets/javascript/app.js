const names = document.getElementById(`name`);
const forc = document.getElementById(`forc`);
const int = document.getElementById(`int`);
const des = document.getElementById(`name`);
const person = document.getElementById(`person`);
const btnCreate = document.querySelector(".butonCreate");
const questions = document.querySelector("#questions");
const title = document.querySelector(".textTitle")


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

    if(force > 10){
        forc.value = 0;
    };

    let character = `Your character is called ${name} has ${force} strength, ${dest} dexterity, ${inter} intelligence, and he sure is a guy ${perso}`
    
    console.log(character)


    



    //Your character is called ${} has ${} strength, ${} dexterity, ${} intelligence, and he sure is a guy ${};
});

