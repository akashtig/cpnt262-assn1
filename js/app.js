const green = 'rgba(118,174, 170, 1)'
const black = 'rgba(23,35, 50, 1)'
const brown = 'rgba(205,164, 133, 1)'
const greenblue = 'rgba(62,171, 201, 1)'
const pink = 'rgba(254,156, 161, 1)'
const blue = 'rgba(98,189, 254, 1)'

const data = [
    {
        topic: 'FOOD',
        title: 'Wake Up and Smell the Coffee',
        price: '$0.90',
        color: green
    },
    {
        topic: 'ARCHITECTURE',
        title: 'The Brand New NASA Office',
        price: '$0.19',
        color: black
    },
    {
        topic: 'TRAVEL',
        title: 'Experience the Saharan Sands',
        price: '$2.29',
        color: brown
    },
    {
        topic: 'INTERIOR',
        title: '9 Air-Cleaning Plants Your Home Needs',
        price: '$0.09',
        color: greenblue
    },
    {
        topic: 'FOOD',
        title: 'One Month Sugar Detox',
        price: '$0.99',
        color: pink
    },
    {
        topic: 'PHOTOGRAPHY',
        title: 'Shooting Minimal Instagram Photos',
        price: '$0.29',
        color: blue
    }
]

// Instructions
// Take the data above and display it as tiles on the page
let newElement = document.querySelector('main')
let newContent=``
for(elements of data){
    
    newContent = newContent+`<article class='card' style="background-color: ${elements.color}">
                                <h3>${elements.topic}</h3>
                                <h2>${elements.title}</h2>
                                <button>Read for ${elements.price}</button>
                             </article>`
                       
}
newElement.innerHTML=newContent




