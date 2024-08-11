'use strict'

const inputTask = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

function addTask(taskText) {
    if (taskText.trim() === '') {
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
    inputTask.value = '';
}

addBtn.addEventListener('click', function() {
    addTask(inputTask.value);
});

taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        const li = event.target.parentElement;
        taskList.removeChild(li);
    }
});

