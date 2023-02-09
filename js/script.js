'use stict';

const input = document.querySelector('.input');
const button = document.querySelector('.button-add');
const card = document.querySelector('.card');
const input_block = document.querySelector('.input-block');
const delete_block = document.querySelector('.delete-block');
const listTask = document.querySelector('ul');
const delete_complete = document.querySelector('.delete-complete');
const delete_all = document.querySelector('.delete-all');

let arr = [];

load();

function hideDeleteTable() {
    arr.length==0? delete_block.style.display = 'none':delete_block.style.display = 'flex';
}
hideDeleteTable();

function createObj() {
    const obj = {
        id: new Date().toISOString(),
        text: input.value,
        isDone: false,  
    };
    return obj
    };

function creatArr () {
    arr.push(createObj());
    return arr;
}

//create task
function createTask(obj) {
        const task = document.createElement('li');
        task.classList.add("task-block");
        task.id = obj.id;
        task.innerHTML =
            `<input class="toggle-checkbox" type="checkbox" ${obj.isDone == true? "checked":""}>
            <div class="toggle__wrapper">
            <span class= ${obj.isDone == true? "toggle-text-checked":"toggle-text"}>${obj.text}
            </span>
            <img class="toggle-x" src="./images/trash.svg" alt="x" srcset="">
        </div>`;
    return task;
}

// create  on-input
function createlistTasks () {
    listTask.innerHTML = '';
    creatArr().forEach((obj)=> listTask.appendChild(createTask(obj)));
}

// create  on-check
function createlistTasksChecked () {
    listTask.innerHTML = '';
    arr.forEach((obj)=> listTask.appendChild(createTask(obj)));
}

// 
card.addEventListener('click', (e)=> {

    if (e.target == button) {
        input.value != ''?
            (createlistTasks(),input.value = '')
            : (input.style.backgroundColor = "rgba(255, 0, 0, 0.4)",
            setTimeout(()=>input.style.backgroundColor ='#FFF', 1000))
    }

    if (e.target.className == 'toggle-checkbox') {
        arr.forEach((el)=> {
            if (el.id == e.target.parentElement.id && el.isDone == false){
                el.isDone = true;
                createlistTasksChecked ()
            } else if (el.id == e.target.parentElement.id && el.isDone == true) {
                el.isDone = false;
                createlistTasksChecked ()
            }
        });
    };

    // delete by x
    if (e.target.className == 'toggle-x') {
        let newArr = arr.map((el)=>el.id);
        arr.splice(newArr.indexOf(e.target.parentElement.parentElement.id),1);
        createlistTasksChecked ();
    }
    //delete all
    if (e.target == delete_all) {
        arr.splice(0,arr.length);
        createlistTasksChecked ();
    }
    //delete complete
    if (e.target == delete_complete) {
        arr = arr.filter((el)=>el.isDone == false);
        createlistTasksChecked ();
        console.log(arr);
        }
        // save changes
    localStorage.clear();
    save();

    hideDeleteTable();
});

function save () {
    localStorage.setItem('key', JSON.stringify(arr))
}

function load() {
    console.log(JSON.parse(localStorage.getItem('key')));
    arr = JSON.parse(localStorage.getItem('key'))
    createlistTasksChecked ();
}