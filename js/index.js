// Your code goes here

//1 mouseover
let mainNav = document.querySelector('.main-navigation')
console.log(mainNav)

mainNav.addEventListener('mouseover', event =>{
    event.target.style.backgroundColor = 'maroon'
})

//2 wheel
let textContent = document.querySelector('.text-content')
console.log(textContent)
textContent.addEventListener('wheel', event =>{
    event.target.style.backgroundColor = 'yellow';
}) 

//3 drag 
let introImg = document.querySelector('.intro img')
console.log(introImg)
introImg.addEventListener('drag', event =>{
    event.target.style.border = '8px dotted yellow';
}) 

//4 dblclick
let footer = document.querySelector('.footer')
console.log(footer)
footer.addEventListener('dblclick', event =>{
    event.target.style.border = '8px dotted red';
})

//5 click
let button = document.querySelector('.btn')
console.log(button)
button.addEventListener('click', () => {
    button.textContent = 'you clicked'
  })

//6 keydown
document.addEventListener('keydown', function (eventObj) {
    if (eventObj.key === 'Escape') {
      eventObj.target.style.border = '8px dashed purple';
    }
  })

//7 keyup
document.addEventListener('keyup', function (eventObj) {
    if (eventObj.key === 'b') {
      eventObj.target.style.color = 'purple';

    }
  })

//8  mouseup
introImg.addEventListener('mouseup', event =>{
    event.target.style.opacity = '0.1';
}) 

//9 mouseout
mainNav.addEventListener('mouseout', event =>{
    event.target.style.backgroundColor = 'pink'
})


//10  resize
window.onresize = changeText;
function changeText() {
    textContent.textContent = 'hi my name is Ariana'
    textContent.style.color = 'blue'
    textContent.style.fontSize = '10rem'
    textContent.style.border = '8px dotted skyblue'
  }

  //prevent the event propagation properly
let nav = document.querySelector('.nav')
console.log(nav)
nav.addEventListener('mouseover', (event) => {
    event.stopPropagation();
  });

  //Stop the navigation items from refreshing the page by using `preventDefault()`
document.querySelectorAll('nav a').forEach(item => 
    item.addEventListener('click',  (event) => {
    event.preventDefault();
  }));