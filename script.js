const toggle=document.querySelector('.menu-toggle');const menu=document.querySelector('#menu');toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));menu.classList.toggle('open',!open)});menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');toggle?.setAttribute('aria-expanded','false')}));document.querySelector('#year').textContent=new Date().getFullYear();

document.querySelectorAll('.gallery-open').forEach(openButton=>{
  const dialog=document.querySelector(`#${openButton.dataset.galleryTarget}`);
  const closeButton=dialog?.querySelector('.gallery-close');
  openButton.addEventListener('click',()=>{dialog?.showModal();document.body.classList.add('gallery-is-open')});
  closeButton?.addEventListener('click',()=>dialog.close());
  dialog?.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});
  dialog?.addEventListener('close',()=>{document.body.classList.remove('gallery-is-open');openButton.focus()});
});
