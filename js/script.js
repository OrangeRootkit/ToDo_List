'use stict';

const input = document.querySelector('.input');
const button = document.querySelector('.button-add');
const card = document.querySelector('.card');
const input_block = document.querySelector('.input-block');
const delete_block = document.querySelector('.delete-block');
const listTask = document.querySelector('ul')
console.log(listTask);


//create task
const createTask = () => {
    let task = document.createElement('li');
    task.classList.add("task-block");

    task.innerHTML = 
        `<input class="toggle-checkbox" type="checkbox">
        <div class="toggle__wrapper">
            <div class="toggle-text">${input.value}
            </div>
            <img class="toggle-x" src="./images/x.svg" alt="x" srcset="">
        </div>`
    return task;
};

// add task to task list
button.addEventListener('click', ()=> {
    if (input.value == '') {
        input.style.backgroundColor = "rgba(255, 0, 0, 0.4)";
        setTimeout(()=>input.style.backgroundColor ='#FFF', 1000);
    } else {
        listTask.appendChild(createTask());
        input.value = '';
    }
});

// delete and complete function
const modifyCard = () => {
    card.addEventListener('click', (e)=> {
        if (e.target.className == 'toggle-x') {
            console.log(e.target.parentElement.parentElement.remove())
        } 
        if (e.target.className == 'toggle-checkbox' && e.target.checked) {
            console.log(e.target.nextElementSibling.firstElementChild)
            e.target.nextElementSibling.firstElementChild.classList.add('toggle-text-checked')
        }
    });
}
modifyCard();



// local storage
// const showStorage = ()=>{
//     console.log(localStorage)
//     for (let i = 0; i < localStorage.length; i++) {
//     console.log(localStorage.getItem(localStorage.key(i)))
//     };
// }

// showStorage();

// button.addEventListener('click', ()=> {
//     if (localStorage.length == 0) {localStorage.setItem('item', input.value);
//     } else {
//     localStorage.setItem(`item${localStorage.length+1}`, input.value);
//     }
//     showStorage();
//     console.log(localStorage.length);
// });

// input.addEventListener('click', ()=> {
//     input.value = localStorage.getItem(localStorage.key(localStorage.length-1));
// });


// localStorage.clear();






// delete task

