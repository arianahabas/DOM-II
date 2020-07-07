// Your code goes here

// mouseover
let mainNav = document.querySelector('.main-navigation')
console.log(mainNav)

mainNav.addEventListener('mouseover', event =>{
    event.target.style.backgroundColor = 'grey'
})

//wheel
let textContent = document.querySelector('.text-content')
console.log(textContent)
textContent.addEventListener('wheel', event =>{
    event.target.style.backgroundColor = 'green';
}) 

//drag 
let introImg = document.querySelector('.intro img')
console.log(introImg)
introImg.addEventListener('drag', event =>{
    event.target.style.border = '8px dotted yellow';
}) 

//dblclick
let footer = document.querySelector('.footer')
console.log(footer)
footer.addEventListener('dblclick', event =>{
    event.target.style.border = '8px dotted red';
})

