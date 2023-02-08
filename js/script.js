'use stict';

const input = document.querySelector('.input');
const button = document.querySelector('.button-add');
const card = document.querySelector('.card');
const input_block = document.querySelector('.input-block');
const delete_block = document.querySelector('.delete-block');
const listTask = document.querySelector('ul');
const delete_complete = document.querySelector('.delete-complete');
const delete_all = document.querySelector('.delete-all');
console.log(delete_all);

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
button.addEventListener('click',  ()=> {
    if (input.value == '') {
        input.style.backgroundColor = "rgba(255, 0, 0, 0.4)";
        setTimeout(()=>input.style.backgroundColor ='#FFF', 1000);
    } else {
        listTask.appendChild(createTask());
        input.value = '';
    }
});

// delete and complete function for task
const modifyCard = () => {
    let arr = [];
    card.addEventListener('click', (e)=> {
        if (e.target.className == 'toggle-x') {
            e.target.parentElement.parentElement.remove();
        } 
        if (e.target.className == 'toggle-checkbox' && e.target.checked) {
            e.target.nextElementSibling.firstElementChild.classList.add('toggle-text-checked');
        }
        if (e.target.className == 'toggle-checkbox' && e.target.checked == false) {
            e.target.nextElementSibling.firstElementChild.classList.remove('toggle-text-checked')
        }
    });
}
modifyCard();

// delete completed 
const deleteTasks = () => {
    card.addEventListener('click', (e)=> {
        if (e.target == delete_complete) {
            let temp = document.querySelectorAll(".task-block");
            console.log(temp);
        }
        
    })
}
    deleteTasks();

// delete completed and delete all
const deleteAllTasks = () => {
    card.addEventListener('click', (e)=> {
        if (e.target == delete_all) {
            listTask.innerHTML = '';
        }
    })
}
deleteAllTasks();


// save storage
const save = () => {

    function saveStorage () {
        {
            const arr = [];
            localStorage.clear();
            // listTask.children.forEach(el => {arr.push(el)});
            console.log(listTask.children[0].childNodes[2].childNodes[1].textContent)
            for (let i=0; i<listTask.children.length; i++) {
                arr.push(listTask.children[i].childNodes[2].childNodes[1].textContent);
                console.log(arr);
            }
            localStorage.setItem('key', JSON.stringify(arr))
        }
    }

    button.addEventListener('click', saveStorage);
    card.addEventListener('click', (e)=> {
        if (e.target.className == 'toggle-x') {
            saveStorage();
        }
    });
        
}
save();

// load storage
const load = () => {
    console.log(JSON.parse(localStorage.getItem('key')));
    let arr = JSON.parse(localStorage.getItem('key'));
    console.log(arr);
    for (let i of arr) {
        console.log(i)
    }
    for (let i of arr) {

        function createTask () {
            let task = document.createElement('li');
            task.classList.add("task-block");
        
            task.innerHTML = 
                `<input class="toggle-checkbox" type="checkbox">
                <div class="toggle__wrapper">
                    <div class="toggle-text">${i}
                    </div>
                    <img class="toggle-x" src="./images/x.svg" alt="x" srcset="">
                </div>`

            listTask.appendChild(task);
        };
        createTask();
    }
}
load()