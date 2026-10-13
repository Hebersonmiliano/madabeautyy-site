const toggle=document.querySelector('.menu-toggle');const menu=document.querySelector('#menu');toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));menu.classList.toggle('open',!open)});menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');toggle?.setAttribute('aria-expanded','false')}));document.querySelector('#year').textContent=new Date().getFullYear();

const pedicureDialog=document.querySelector('#pedicure-gallery');
const pedicureOpen=document.querySelector('.gallery-open');
const pedicureClose=pedicureDialog?.querySelector('.gallery-close');
pedicureOpen?.addEventListener('click',()=>{pedicureDialog.showModal();document.body.classList.add('gallery-is-open')});
pedicureClose?.addEventListener('click',()=>pedicureDialog.close());
pedicureDialog?.addEventListener('click',event=>{if(event.target===pedicureDialog)pedicureDialog.close()});
pedicureDialog?.addEventListener('close',()=>{document.body.classList.remove('gallery-is-open');pedicureOpen?.focus()});
