class Apps {
    
static systemApp(){

    //CALL ELEMENTS
    let wcontent = document.getElementById("main-window-content");
    let mwindow = document.getElementById("app-window");
    wcontent.textContent = `You are using ${navigator.appName} 

                            With the ${navigator.appCodeName} browser
                            
                            On ${navigator.platform} architecture`;

    mwindow.style.visibility = "visible"; //show window
}    

static calcApp(){

    //CALL ELEMENTS
    let wcontent = document.getElementById("main-window-content");
    let mwindow = document.getElementById("app-window");
    wcontent.textContent = "";


    //SET CALC INPUTS
    let firstInput = document.createElement("input");
        firstInput.type = "number";
        firstInput.style ="width: 3em"; // set the CSS class

    let secondInput = document.createElement("input");
        secondInput.type = "number";
        secondInput.style ="width: 3em";  // set the CSS class

    let inputButton = document.createElement("button");
        inputButton.innerHTML = '=';

    let calcOperator = document.createElement("span");
        calcOperator.textContent = " + ";

    let calcTopText = document.createElement("span");
        calcTopText.textContent = 'Answers';

    let breaker = document.createElement("br");

    //SEND ELEMENTS TO DOM
    wcontent.appendChild(firstInput);
    wcontent.appendChild(calcOperator);   
    wcontent.appendChild(secondInput);
    wcontent.appendChild(inputButton);
    wcontent.appendChild(breaker);
    wcontent.appendChild(calcTopText);


    //DO THE MATH
    inputButton.addEventListener("click", ()=>{
        let sumOne = firstInput.value;
        let sumTwo = secondInput.value;   
        let numOne = parseInt(sumOne);
        let numTwo = parseInt(sumTwo);
        let breaker = document.createElement("br");
        let answerDisplay = document.createElement("span");
            answerDisplay.textContent = `${numOne+numTwo}`;
            wcontent.appendChild(breaker);
            wcontent.appendChild(answerDisplay);
    })


    mwindow.style.visibility = "visible"; //show window
}   

static settingsApp(){

    //CALL ELEMENTS
    let wcontent = document.getElementById("main-window-content");
    let mwindow = document.getElementById("app-window");
    let bg = document.getElementById("main-wrapper-id"); 



    //SET ELEMENTS
    let bgDefault = {name:"Default", color: "white"}
    let bgPopcorn = {name:"Popcorn", url:"url('https://i.imgur.com/42aLJEo.jpg')"}
    let bgPizza = {name:"Pizza", url:"url('https://i.imgur.com/8wGhtzn.png')"}
    let breaker = document.createElement("br");

    //SETTINGS HEADER
    let bgTitle = document.createElement("span");
        bgTitle.textContent = `Choose Background `;   
        wcontent.appendChild(bgTitle);
        wcontent.appendChild(breaker);     

    //FIRST WALLPAPER
    let defaultImage = document.createElement("span");
    let defaultSet = document.createElement("button");  
        defaultSet.innerHTML = 'Set'; 
        defaultImage.textContent = `${bgDefault.name} `;   
        wcontent.appendChild(defaultImage);
        wcontent.appendChild(defaultSet);  
  
    //SECOND WALLPAPER
    let popcornImage = document.createElement("span");
    let popcornSet = document.createElement("button");  
        popcornSet.innerHTML = 'Set'; 
        popcornImage.textContent = `${bgPopcorn.name} `;   
        wcontent.appendChild(popcornImage);
        wcontent.appendChild(popcornSet);  


    //THIRD WALLPAPER
    let pizzaImage = document.createElement("span");
    let pizzaSet = document.createElement("button");  
        pizzaSet.innerHTML = 'Set'; 
        pizzaImage.textContent = `${bgPizza.name} `;   
        wcontent.appendChild(pizzaImage);
        wcontent.appendChild(pizzaSet); 
    

    //BUTTONS TO CHANGE BACKGROUND
    defaultSet.addEventListener('click', ()=>{ 
        bg.style.backgroundImage = "none";
        bg.style.backgroundColor = bgDefault.color;
    })
        pizzaSet.addEventListener('click', ()=>{ 
        bg.style.backgroundImage = bgPizza.url;
        bg.style.backgroundSize =  "400px 250px";
    })
        popcornSet.addEventListener('click', ()=>{ 
        bg.style.backgroundImage = bgPopcorn.url;
        bg.style.backgroundSize = "400px 250px";
    })

    mwindow.style.visibility = "visible"; 
}    

static contactsApp(){

    //CALL ELEMENTS
    let wcontent = document.getElementById("main-window-content");
    let mwindow = document.getElementById("app-window");

        wcontent.textContent = "Contacts here";
        mwindow.style.visibility = "visible"; //show window
}    

}

export default Apps;