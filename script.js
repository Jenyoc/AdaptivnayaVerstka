(()=> {
  let moreInfoBtn=document.querySelector('.moreInfoBtn'),
      leftBtn=document.querySelector('.leftBtn'),
      mainBottomBtn=document.querySelector('.mainBottomBtn'), t;

  scrollUp=()=>{
    let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
    if(top > 0) {
      window.scrollBy(0,-50);
      t = setTimeout('scrollUp()',20);
    } else clearTimeout(t);
    return false;
  };

  scrollBottom=()=>{
    if(pageYOffset < document.body.clientHeight-window.innerHeight) {
      window.scrollBy(0,50);
      t = setTimeout('scrollBottom()',20);
    } else clearTimeout(t);
    return false;
  };

  moreInfoBtn.addEventListener('click',scrollBottom);
  leftBtn.addEventListener('click', scrollUp);
  mainBottomBtn.addEventListener('click', scrollUp)

})();