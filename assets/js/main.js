// Small JS to toggle mobile nav
(function(){
  function setup(toggleId, navId){
    var btn = document.getElementById(toggleId);
    var nav = document.getElementById(navId);
    if(!btn || !nav) return;
    btn.addEventListener('click', function(){
      nav.classList.toggle('show');
    });
  }

  setup('nav-toggle','site-nav');
  setup('nav-toggle-2','site-nav-2');
  setup('nav-toggle-3','site-nav-3');
  setup('nav-toggle-4','site-nav-4');
  setup('nav-toggle-5','site-nav-5');
})();
