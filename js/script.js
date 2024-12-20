
// TOGGLE MENU
const toggleMenu = document.querySelector('.toggle-menu');
const toggleMenuButton = document.querySelector('.site-menu-button');
const toggleMenuLinks = document.querySelectorAll('.toggle-menu a');
toggleMenuButton.onclick = function () {
  if (toggleMenu.getAttribute('data-menustate') === 'closed') {
    // if closed, open it    
    toggleMenu.setAttribute('data-menustate', 'open');
  } else {
    // else, close it
    toggleMenu.setAttribute('data-menustate', 'closed');
  }
};
// CLOSE THE MENU WHEN A USER CLICKS ON ANY LINK
toggleMenuLinks.forEach((el) => {
  el.onclick = () => {
    toggleMenu.setAttribute('data-menustate', 'closed');
  }
});




// INSTERSECTION OBSERVER
const myobserver = new IntersectionObserver((entries) => {

  // LOOP THROUGH ALL ENTRIES

  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.setAttribute("data-viewstate", "active");
    } else {
      entry.target.setAttribute("data-viewstate", "innactive");
    };

  });

});

const mytargets = document.querySelectorAll('.observe-me');
mytargets.forEach((el) => {
  myobserver.observe(el)

});