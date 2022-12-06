var tabcontent= document.getElementsByClassName("tab-contents");
var tabLinks= document.getElementsByClassName("tab-links");
function opentab(tabname){
    for(link of tabLinks){
      link.classList.remove("active-link");
    }
    for(content of tabcontent){
        content.classList.remove("active-tab");
      }
      event.currentTarget.classList.add("active-link");
      document.getElementById(tabname).classList.add("active-tab")
}

var sidemenu = document.getElementById("side-menu");
function openmenu(){
  sidemenu.style.right="0";
}

function closemenu(){
 sidemenu.style.right="-200px";
}