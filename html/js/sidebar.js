const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(menuItem => {
  menuItem.addEventListener('click', (event) => {
    const subMenu = menuItem.querySelector('.sub-menu');
    
    if (subMenu && subMenu.contains(event.target)) {
      // Clicked element is within the sub-menu, do not toggle the 'expanded' class
      return;
    }
    
    menuItem.classList.toggle('expanded');
  });
});