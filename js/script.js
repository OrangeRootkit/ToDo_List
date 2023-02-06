'use stict';

const input = document.querySelector('.input');
const button = document.querySelector('.button');



const showStorage = ()=>{
    console.log(localStorage)
    for (let i = 0; i < localStorage.length; i++) {
    console.log(localStorage.getItem(localStorage.key(i)))
    };
}

showStorage();


button.addEventListener('click', ()=> {
    if (localStorage.length == 0) {localStorage.setItem('item', input.value);
    } else {
    localStorage.setItem(`item${localStorage.length+1}`, input.value);
    }
    showStorage();
    console.log(localStorage.length);
});


input.addEventListener('click', ()=> {
    input.value = localStorage.getItem(localStorage.key(localStorage.length-1));
});

// localStorage.clear();


