const input = document.getElementById('input');
const submitBtn = document.getElementById('submit');
const students = document.getElementById('students');
const filterStudent = document.getElementById('filter');
const totalStudents = document.getElementById('total');
const reloadBtn = document.getElementById('reload');

let studentList = [];

reloadBtn.addEventListener('click', () => {
    studentList = [];
    renderStudents();
});

submitBtn.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        if (!studentList.includes(input.value)) {
            studentList.push({ id: input.value, name: input.value });
            input.value = '';
        }
    } else {
        alert('student must be unique');
    }

    renderStudents();
});

filterStudent.addEventListener('input', () => {
    const query = filterStudent.value.trim();
    renderStudents(query);
});

totalStudents.innerText = `Total Students: ${studentList.length}`;

const renderStudents = (filter = '') => {
    let html = '';

    const filteredStudent = studentList.filter((val) => val.name.toLowerCase().includes(filter.toLowerCase()));

    filteredStudent.forEach((val) => {
        html += `
        <li
        class="list"
        data-id="${val.id}"
        draggable="true"
        >
            <div>${val.name}</div>
            <div class="icon-container">
                <div class="icon edit" data-index="${val.id}">
                    <img src="./img/edit.png" alt="edit"  />
                </div>
                <div class="icon delete" data-index="${val.id}">
                    <img src="./img/trash.png" alt="trash" />
                </div>
            </div>
        </li>
        `;
    });

    students.innerHTML = html;

    totalStudents.innerText = `Total Students: ${studentList.length}`;
};

let draggedId = null;

students.addEventListener('dragstart', (e) => {
    const li = e.target.closest('li');
    if (!li) return;
    draggedId = li.dataset.id;
});

students.addEventListener('dragover', (e) => {
    e.preventDefault();
});

students.addEventListener('drop', (e) => {
    e.preventDefault();
    const li = e.target.closest('li');
    if (!li) return;
    const targetId = li.dataset.id;

    if (draggedId === null || targetId === null || draggedId === targetId) return;

    const fromIndex = studentList.findIndex((val) => val.id === draggedId);
    const toIndex = studentList.findIndex((val) => val.id === targetId);

    const [movedstudent] = studentList.splice(fromIndex, 1);
    studentList.splice(toIndex, 0, movedstudent);

    renderStudents();
});

students.onclick = (e) => {
    const editBtn = e.target.closest('.edit');
    const deleteBtn = e.target.closest('.delete');

    if (editBtn) {
        const id = editBtn.getAttribute('data-index');
        const student = studentList.find((val) => val.id === id);
        if (!student) return;

        const newValue = prompt('Edit Student Name:', student.name);
        if (newValue === null) return;

        const trimmed = newValue.trim();
        if (trimmed === '') return alert('Name cannot be empty');

        const isDuplicate = studentList.some((val) => val.name === trimmed && val.id !== id);
        if (isDuplicate) return alert('student must be unique');

        student.name = trimmed;
        renderStudents();
    }

    if (deleteBtn) {
        const id = deleteBtn.getAttribute('data-index');
        studentList = studentList.filter((val) => val.id !== id);
        renderStudents();
    }
};
