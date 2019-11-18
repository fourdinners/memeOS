class Window {

static logIn(){

    //CALL ELEMENTS AND SET VARIABLES
    let currentDate = new Date();
    let outputDate = currentDate.toLocaleTimeString('en-US');
    let udisplay = document.getElementById("top-login-text");
    let bstart = document.getElementById("start-display"); //start menu text
    let btool = document.getElementById("bottom-toolbar"); //wrapper for entire toolbar
    let us = document.getElementById("user-name");
    let ddate = document.getElementById("date-display");   

        //TOP BAR DISPLAY TEXT
        udisplay.textContent = `Welcome, ${us.value} to memeOS v0.03`;
        ddate.textContent = `${outputDate}`;
        btool.style.visibility = "visible";
        bstart.style.visibility = "visible";
}

static closeWindow(){

    //CALL ELEMENTS
    let mwindow = document.getElementById("app-window"); 
    let wcontent = document.getElementById("main-window-content");

    //WIPE AND HIDE WINDOW
    wcontent.innerHTML = "";
    mwindow.style.visibility = "hidden";
}

static hideLogin(){

    //CALL ELEMENTS

    let us = document.getElementById("user-name"); 
    let btn = document.getElementById("submit-name");
    let ttext = document.getElementById("intro-text");
    //HIDE ELEMENTS
    us.style.visibility = "hidden";
    btn.style.visibility = "hidden";
    ttext.style.visibility = "hidden";
}

static datePopUp(){
    let currentDate = new Date();
    let outputDate = currentDate.toDateString();
    let ddate = document.getElementById("date-display");   
    ddate.textContent = `${outputDate}`;
}

}

export default Window;