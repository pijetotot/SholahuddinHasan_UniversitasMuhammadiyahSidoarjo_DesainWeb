  // Select the dropdown element
  const dropdown = document.querySelector('.nav-item.dropdown');

  // Add event listeners for mouse enter and leave
  dropdown.addEventListener('mouseenter', () => {
    const dropdownToggle = new bootstrap.Dropdown(dropdown.querySelector('.dropdown-toggle'));
    dropdownToggle.show(); // Show the dropdown menu
  });

  dropdown.addEventListener('mouseleave', () => {
    const dropdownToggle = new bootstrap.Dropdown(dropdown.querySelector('.dropdown-toggle'));
    dropdownToggle.hide(); // Hide the dropdown menu
  });

