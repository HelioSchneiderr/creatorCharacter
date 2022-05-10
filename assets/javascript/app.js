
const btnCreate = document.querySelector(".butonCreate");
const questions = document.querySelector("#questions");
const title = document.querySelector(".textTitle")
const textP = document.querySelector(".textP")




btnCreate.addEventListener("click", () => {

    //INPUTS
    const names = document.getElementById(`name`).value;
    const forc = parseInt(document.getElementById(`forc`).value);
    const int = parseInt(document.getElementById(`int`).value);
    const des = parseInt(document.getElementById(`des`).value);
    const person = parseInt(document.getElementById(`person`).value);

    //0 to 10, condition
    if (forc <= 10 && des <= 10 && int <= 10 && person <= 10) {
        
        //style none
        questions.style.display = `none`;
        questions.classList.add(`julio`);
        
        //Final Text
        title.textContent = " Your Character";
        textP.textContent = `Your character is called ${names} has ${forc} strength, ${des} dexterity, ${int} intelligence, and he sure is a guy ${person}`;
        
        //Final img
        let img = document.createElement("img");
        img.src=`../../imagens/avatar${numberRandom(1, 5)}.png`;
        textP.appendChild(img);

        

        
    } else {
        alert("Some field is wrong")
    }
    
});


function numberRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
