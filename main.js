const openButton=document.getElementById('open-btn')
const closeButton=document.getElementById('close-btn')
const aside=document.getElementById('aside-bar')

openButton.addEventListener('click',()=>{
    aside.classList.add('active-aside')
})

closeButton.addEventListener('click',()=>{
    aside.classList.remove('active-aside')
})