function notifFunction() {
    document.getElementById("notif-menu-id").classList.toggle("show");
  }

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.notif')) {
    var dropdowns = document.getElementsByClassName("notif-menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function messageFunction() {
    document.getElementById("message-menu-id").classList.toggle("show");
  }

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.message')) {
    var dropdowns = document.getElementsByClassName("message-menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function openmobileMenu() {
  document.getElementById("mobileMenu").style.width = "100%";
}

function closeMobileMenu() {
  document.getElementById("mobileMenu").style.width = "0";
}