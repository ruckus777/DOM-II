// Your code goes here //i started
et destination = document.querySelectorAll('.destination')

let callBack = e =>{
    e.stopPropagation()
    alert('clicked')
}

let stopProp = e =>{
    e.stopPropagation()
    alert('clicked Button')
}

destination[0].addEventListener('click',callBack)

let dButton = destination[0].querySelector('.btn')
console.log(dButton)
dButton.addEventListener('click',stopProp)

let navLinks = document.querySelectorAll('.nav .nav-link')
navLinks.forEach(link =>{
    link.addEventListener('mouseover', function(e){
        link.style.color = "blue";
    })
    link.addEventListener('click', function(e){
        e.preventDefault()
        link.classList.toggle("mystyle");
    })
})

let busImage = document.querySelector('.intro img')
window.addEventListener('scroll', function(e){
    busImage.classList.toggle("cat");
})