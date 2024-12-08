let user = 0;
let comp = 0;

const divselect = document.querySelectorAll(".manyaa");

const textsel = document.querySelectorAll("#hn");
const userscore=document.querySelector("#you");
const compscore=document.querySelector("#comp");


const tryagain = () => {
    console.log("same same tyr again");
    textsel.forEach(hn => {
        hn.innerText = "game is drewwn play again";
        hn.style.backgroundColor="purple";
    })
}

const compchoice = () => {
    const option = ["rock", "paper", "scissor"];
    const comm = Math.floor(Math.random() * 3);
    return option[comm];
}

const binner = (element , userchoice , compvalue) => {
    if (element) {
        user++;
        userscore.innerText=user;
        console.log("you are playing good");
        textsel.forEach(hn => {
            hn.innerText = `you play good ${userchoice} beats ${compvalue} `;
            hn.style.backgroundColor="green";
        })
    } else {
        comp++;
        compscore.innerText=comp;
        console.log("try more hard");
        textsel.forEach(hn => {
            hn.innerText = `you loose ${compvalue} beats ${userchoice}`;
            hn.style.backgroundColor="red";
        })
    }
}

const playgame = (userchoice ) => {
    console.log("user has choosed : ", userchoice);
    const compvalue = compchoice();
    console.log("computer value is : ", compvalue);
    if (userchoice === compvalue) {
        tryagain();
    } else {
        let element = true;

        if (userchoice === "rock") {
            element = compvalue === "paper" ? false : true;
        } else if (userchoice === "paper") {
            element = compvalue === "rock" ? true : false;
        } else {
            element = compvalue === "rock" ? false : true;
        }

        binner(element , userchoice,compvalue);



    }
}


divselect.forEach((manyaa) => {
    manyaa.addEventListener("click", () => {
        let userchoice = manyaa.getAttribute("id");
        // console.log("choice selected ",userchoice);
        playgame(userchoice);

    })
})
