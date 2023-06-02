document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".menu-item");
  
    menuItems.forEach(function(item) {
      item.addEventListener("click", function() {
        const submenu = this.querySelector(".sub01-menu");
        submenu.classList.toggle("show");
      });
    });
  });  
  document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".sub01-menu");
  
    menuItems.forEach(function(item) {
      item.addEventListener("click", function() {
        const submenu = this.querySelector(".submenu02-menu");
        submenu.classList.toggle("show");
      });
    });
  }); 