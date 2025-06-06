const input = document.getElementById('input');
const submitBtn = document.getElementById('submit');
const tasks = document.getElementById('tasks');

let taskList = [];

submitBtn.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        if (!taskList.includes(input.value)) {
            taskList.push({ id: input.value, name: input.value });
            input.value = '';
        }
    } else {
        alert('task must be unique');
    }

    renderTasks();
});

const renderTasks = () => {
    let html = '';

    taskList.forEach((val) => {
        html += `
        <li
        class="p-4 w-full text-xl border border-[#5A5A5A] font-medium hover:scale-105 transition duration-300 flex justify-between items-center rounded-md mb-4"
        >
            <div>${val.name}</div>
            <div class="flex items-center gap-5">
                <div class="w-6 h-6 hover:scale-110 transition duration-300 edit" data-index="${val.id}">
                    <img src="./img/edit.png" alt="edit" class="w-full h-full" />
                </div>
                <div class="w-6 h-6 hover:scale-110 transition duration-300 delete" data-index="${val.id}">
                    <img src="./img/trash.png" alt="trash" class="w-full h-full" />
                </div>
            </div>
        </li>
        `;
    });

    tasks.innerHTML = html;
};

tasks.onclick = (e) => {
    const editBtn = e.target.closest('.edit');
    const deleteBtn = e.target.closest('.delete');

    if (editBtn) {
        const id = editBtn.getAttribute('data-index');
        const task = taskList.find((val) => val.id === id);
        if (!task) return;

        const newValue = prompt('Edit Student Name:', task.name);
        if (newValue === null) return;

        const trimmed = newValue.trim();
        if (trimmed === '') return alert('Name cannot be empty');

        const isDuplicate = taskList.some((val) => val.name === trimmed && val.id !== id);
        if (isDuplicate) return alert('Task must be unique');

        task.name = trimmed;
        renderTasks();
    }

    if (deleteBtn) {
        const id = deleteBtn.getAttribute('data-index');
        taskList = taskList.filter((val) => val.id !== id);
        renderTasks();
    }
};
