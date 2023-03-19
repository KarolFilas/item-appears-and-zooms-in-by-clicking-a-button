const btn = document.querySelector('button')
const li = document.querySelectorAll('li')
const ul = document.querySelector('ul')

let size = 10

console.log(li);

const liList = () => {
    size += 2
    for (let i = 0; i < li.length; i++) {
        li[i].style.display = 'block'
        li[i].style.fontSize = size + 'px'
    }
}

btn.addEventListener('click', liList)