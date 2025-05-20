document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('tareas-form');
    const taskInput = document.getElementById('tarea-input');
    const taskList = document.getElementById('listaTareas');

    loadTasks();

    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const taskText = taskInput.value.trim();
        
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
            saveTasks();
        }
    });

    function addTask(taskText) {
    const li = document.createElement('li');
    li.className = 'listaTareas';

    const taskContainer = document.createElement('div'); 
    taskContainer.className = 'task-container';

    const taskSpan = document.createElement('span');
    taskSpan.className = 'task-text';
    taskSpan.textContent = taskText;

    const completeBtn = document.createElement('button');
    completeBtn.className = 'completadoBtn';
    completeBtn.textContent = 'OK';
    completeBtn.addEventListener('click', function() {
        li.remove();
        saveTasks();
    });

    taskContainer.appendChild(taskSpan);
    taskContainer.appendChild(completeBtn);
    li.appendChild(taskContainer);
    taskList.appendChild(li);
}


    function saveTasks() {
        const tasks = [];
        document.querySelectorAll('.listaTareas .task-text').forEach(function(task) {
            tasks.push(task.textContent);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            JSON.parse(savedTasks).forEach(function(task) {
                addTask(task);
            });
        }
    }
});
