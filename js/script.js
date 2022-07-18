
// sticky header
const headerStrip = document.querySelector(`[data-sticky='header']`);
window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop >= 50) {
    headerStrip.classList.add("sticky-strip");
  }
  else {
    headerStrip.classList.remove("sticky-strip");
  }
});


// scroll to section
let targetNav = document.querySelectorAll(`[data-target-section]`);
let targetSection = document.querySelectorAll(`[data-section]`);

// get boostrap nav el
const navToggler = document.querySelector(`.navbar-toggler`);
const navCollapse = document.querySelector(`.navbar-collapse`);

targetNav.forEach((el) => {
  el.addEventListener('click', () => {
    
    // remove and add cls
    navToggler.classList.add('collapsed')
    navCollapse.classList.remove('show')

    let targetName = el.getAttribute('data-target-section');
    let getSection = document.querySelector(`[data-section=${targetName}]`);
    window.scrollTo(0, getSection.offsetTop - 70)
  });
})


// go to top button
let gotoTop = document.querySelector(`[data-goto="top"]`);
window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 350) {
    gotoTop.classList.add("btn-visible");
  }
  else {
    gotoTop.classList.remove("btn-visible");
  }
});
gotoTop.addEventListener('click', () => {
  document.documentElement.scrollTop = 0;
});


// for contact form
const collapsHidden = document.querySelector('.btn-collaps')
if(collapsHidden){
  collapsHidden.addEventListener('click', () =>{
    collapsHidden.classList.add('d-none')
  })
}
const collapsShow = document.querySelector('.btn-collaps-show')
if(collapsShow){
  collapsShow.addEventListener('click', () =>{
    collapsHidden.classList.remove('d-none')
  })
}