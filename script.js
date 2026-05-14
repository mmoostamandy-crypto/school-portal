function updateStatus() {
  let input = document.getElementById("statusInput");
  let status = document.getElementById("status");

  if (!input || !status) {
    alert("Missing HTML elements!");
    return;
  }

  if (input.value.trim() === "") {
    alert("Please write something!");
    return;
  }

  status.textContent = input.value;
}
let courses = [
  {
    name: "Math",
    instructor: "Mr. Ali",
    grade: "10",
    description: "Basic Algebra and Geometry"
  },
  {
    name: "Science",
    instructor: "Ms. Sara",
    grade: "11",
    description: "Physics and Chemistry basics"
  }
];
function renderCourses() {
  let container = document.getElementById("coursesContainer");

  container.innerHTML = "";

  for (let course of courses) {
    container.innerHTML += `
      <div class="card">
        <h3>${course.name}</h3>
        <p>${course.instructor}</p>
        <p>Grade: ${course.grade}</p>

        <button onclick="showDetails('${course.name}')">
          View Details
        </button>
      </div>
    `;
  }
}
function showDetails(name) {
  let course = courses.find(c => c.name === name);

  document.getElementById("details").innerHTML = `
    <div class="card">
      <h2>${course.name}</h2>
      <p>${course.description}</p>
    </div>
  `;
}
filterCourses('all');
function addCourse() {
  let name = document.getElementById("cname").value;
  let instructor = document.getElementById("cinstructor").value;
  let grade = document.getElementById("cgrade").value;
  let desc = document.getElementById("cdesc").value;

  if (name === "" || instructor === "" || grade === "" || desc === "") {
    alert("Please fill all fields!");
    return;
  }

  courses.push({
    name: name,
    instructor: instructor,
    grade: grade,
    description: desc
  });

  renderCourses();

  // پاک کردن input ها
  document.getElementById("cname").value = "";
  document.getElementById("cinstructor").value = "";
  document.getElementById("cgrade").value = "";
  document.getElementById("cdesc").value = "";
}
function filterCourses(grade) {
  let container = document.getElementById("coursesContainer");
  container.innerHTML = "";

  let filtered = courses;

  if (grade !== "all") {
    filtered = courses.filter(course => course.grade === grade);
  }

  for (let course of filtered) {
    container.innerHTML += `
      <div class="card">
        <h3>${course.name}</h3>
        <p>${course.instructor}</p>
        <p>Grade: ${course.grade}</p>

        <button onclick="showDetails('${course.name}')">
          View Details
        </button>
      </div>
    `;
  }
}
function searchCourse() {
  let value = document.getElementById("searchInput").value.toLowerCase();

  let container = document.getElementById("coursesContainer");
  container.innerHTML = "";

  let result = courses.filter(course =>
    course.name.toLowerCase().includes(value)
  );

  if (result.length === 0) {
    container.innerHTML = "<p>No course found!</p>";
    return;
  }

  for (let course of result) {
    container.innerHTML += `
      <div class="card">
        <h3>${course.name}</h3>
        <p>${course.instructor}</p>
        <p>Grade: ${course.grade}</p>

        <button onclick="showDetails('${course.name}')">
          View Details
        </button>
      </div>
    `;
  }
}
function sendMessage() {
  let name = document.getElementById("cname").value;
  let email = document.getElementById("cemail").value;
  let message = document.getElementById("cmessage").value;

  let result = document.getElementById("result");

  if (name === "" || email === "" || message === "") {
    result.textContent = "⚠ Please fill all fields!";
    result.style.color = "red";
    return;
  }

  result.textContent = "✅ Message sent successfully!";
  result.style.color = "lightgreen";

  // پاک کردن فرم
  document.getElementById("cname").value = "";
  document.getElementById("cemail").value = "";
  document.getElementById("cmessage").value = "";
}