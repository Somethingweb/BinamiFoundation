// Function to toggle the navigation menu (drawer)
function toggleNav() {
    const menu = document.querySelector('.nav-menu');
    const overlay = document.querySelector('.overlay');
    
    // Toggle the 'open' class to slide the drawer in/out
    menu.classList.toggle('open');
    
    // Show or hide the overlay
    overlay.style.display = menu.classList.contains('open') ? 'block' : 'none';
  }
  
  // Function to close the navigation menu when the overlay is clicked
  function closeNav() {
    const menu = document.querySelector('.nav-menu');
    const overlay = document.querySelector('.overlay');
    
    // Remove the 'open' class to hide the menu
    menu.classList.remove('open');
    
    // Hide the overlay
    overlay.style.display = 'none';
  }
  
  // Attach event listeners
  document.querySelector('.hamburger').addEventListener('click', toggleNav);
  document.querySelector('.overlay').addEventListener('click', closeNav);
  