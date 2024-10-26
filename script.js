const localStorageKey = 'to-do-list';

function newTask() {  
    let input = document.getElementById('input-new-task');

    if(!input.value) {
        input.style.border = '1px solid red'
        alert('O campo não pode estar vazio')
    } else {
        let task = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        task.push({ name: input.value })
        localStorage.setItem(localStorageKey,JSON.stringify(task))
        showTask()
    }

    input.value = ''
}

function showTask() {  
    let task = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    let list = document.getElementById('list-task-items');
    list.innerHTML = '';
    for (let i = 0; i < task.length; i++) {
        list.innerHTML += `<li>
                            <p class="task-name">${task[i]['name']}</p>
                            <button class="btn-done" onclick='removeItem("${task[i]['name']}")'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                                </svg>
                            </button>
                        </li>`
    }
}

function removeItem(data) {
    let task = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let index = task.findIndex(x => x.name == data)
    console.log(data)
    console.log(index);
    task.splice(index,1)
    localStorage.setItem(localStorageKey,JSON.stringify(task))
    showTask()
}

function clearAllTasks() {
    localStorage.removeItem(localStorageKey);
    showTask();  
}

showTask()
