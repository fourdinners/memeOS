import Window from "/window.js";
import Apps from "/apps.js";

class Main {

  main() {
    let mw = document.getElementById("main-wrapper-id");


    let us = document.getElementById("user-name");
    let udisplay = document.getElementById("top-login-text");
    let btn = document.getElementById("submit-name");
    let ttext = document.getElementById("intro-text");
    let ddate = document.getElementById("date-display");
    let wcontent = document.getElementById("main-window-content");
    let cwindow = document.getElementById("close-window");


    let smenu = document.getElementById("start-menu"); //start menu
    let bstart = document.getElementById("start-display"); //start menu text
    let btool = document.getElementById("bottom-toolbar"); //wrapper for entire toolbar
    let mwindow = document.getElementById("app-window"); //wrapper for app window


    let ssystem = document.getElementById("menu-system");
    let scalc = document.getElementById("menu-calculator");
    let ssettings = document.getElementById("menu-settings");
    let scontacts = document.getElementById("menu-contacts");

    //HIDE ELEMENTS
    smenu.style.visibility = "hidden";
    bstart.style.visibility = "hidden";
    btool.style.visibility = "hidden";
    mwindow.style.visibility = "hidden";

    //LOGIN
    btn.addEventListener('click', ()=>{
      Window.logIn();
      Window.hideLogin();
    })


    //MENU OPTIONS
    ssystem.addEventListener('click', ()=>{
      Apps.systemApp();
    })
    scalc.addEventListener('click', ()=>{
      Apps.calcApp();
    })
    ssettings.addEventListener('click', ()=>{
      Apps.settingsApp();
    })
    scontacts.addEventListener('click', ()=>{
      Apps.contactsApp();
    })


    // mw.addEventListener('mouseleave', ()=>{
    //   mwindow.style.visibility = "visible";
    //   mwindow.textContent = "Paused";
    // })    

    //CHANGE DATE DISPLAY
    ddate.addEventListener("mouseover", ()=>{
      Window.datePopUp();
    })
    ddate.addEventListener("mouseleave", ()=>{
      Window.logIn();
    })

    //CLOSE WINDOW
    cwindow.addEventListener('click', ()=>{ 
      Window.closeWindow();
    })

    //START MENU INERACTIONS
    bstart.addEventListener('mouseover', ()=>{
      smenu.style.visibility = "visible";
    })
    bstart.addEventListener('mouseleave', ()=>{
      smenu.style.visibility = "hidden";
    })
    smenu.addEventListener('mouseover', ()=>{
      smenu.style.visibility = "visible";
    })
    smenu.addEventListener('mouseleave', ()=>{
      smenu.style.visibility = "hidden";
    })

}
}

export default Main;