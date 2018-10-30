function openTab(evt, section) {
  var i, body, tabLink, bdy;
  
  body = document.getElementsByClassName("body");
  for (i = 0; i < body.length; i++) {
    body[i].style.display = "none";
  }
  
  tabLink = document.getElementsByClassName("tabLink");
  for (i = 0; i < tabLink.length; i++){
    tabLink[i].className = tabLink[i].className.replace("active", "");
  }
  
  document.getElementById(section).style.display = "block";
  evt.currentTarget.className += "active";
  
}