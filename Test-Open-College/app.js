// variables
const sectionCenter = document.querySelector(".content-wrapper");

//fetch data
const url = "http://leads.beta.openstudycollege.info/getTopLeads";

const fetchData = async url => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return displayStudentData(data);
  } catch (error) {
    console.log(error);
  }
};

//DisPlay Data
displayStudentData(fetchData(url));
function displayStudentData(studentData) {
  let displayStudent = studentData.map(student => {
    return `<header class="header">
             
                <button class="close-btn"><img class="close-btn" src="./images/cross.png"></button>
                
                <div>
                    <img class="main-img" src="./images/main-img.jpg"
                        alt="" class="main-img">
                    <i class="fa fa-check-circle circle"></i>
                </div>
                <hgroup>
                    <h2 class="student-name">${student.name}</h2>
                    <h5 class="sub-title">Student</h5>
                    <h5 class="student-id">ID: ${student.id}</h5>
                </hgroup>
        </header>
        <!-- Course Completed Info -->
        <article>
            <hgroup class="curved-border-box">
                <section>
                    <h4> Complete</h4>
                    <h6>enrolement status</h6>
                </section>
                <section>
                    <h4 class="completed-courses border">3</h4>
                    <h6>completed courses</h6>
                </section>
            </hgroup>

        </article>
        <main class="main-content-wrapper">
            <!-- Contact & About Me Details -->
            <article>
                <section class="personal-details">
                    <h5>contact details</h5>
                    <p class="student-email">Email: ${student.email}</p>
                    <p class="student-tel">Tel: ${student.telephone}</p>
                </section>
                <section class="personal-details">
                    <h5>about me</h5>
                    <p>${student.enquiry}</p>
                </section>
            </article>
            <!-- Current Course Details -->
            <article class="course-flex-container">
            <img class="hat-img" src="./images/hat.png"
                        alt="" class="hat">
                <div class="current-course">
                    <h4>Current Course: </h4>
                    <h5 class="current-course-name">${student.course_title}</h5>
                </div>
                <i class="fa fa-chevron-right chevron course-chevron"></i>
            </article>
            <!-- My Photos Section -->
            <Article>
            <section class="photos-section">
                <div class="photo-chevron-container">
                    <h4 class="photo-title">My Photos</h4>
                    <i class="fa fa-chevron-right chevron-down"></i>
                </div>
                <div class="photos-grid">
                        <img class="grid-1"
                             src="./images/myphoto-1.jpg"
                             alt="">
                        <img class="grid-2"
                             src="./images/myphoto-2.jpg"
                             alt="">
                        <img class="grid-3"
                             src="./images/myphoto-3.jpg"
                             alt="">
                             <img class="grid-4"
                             src=""
                             alt="">
                             <i class="fa fa-arrow-right arrow-overlay grid-4"></i>
                    </div>
            </section>
            </Article>

        </main>`;
  });
  displayStudent = displayStudent;
  sectionCenter.innerHTML = displayStudent;
}

// Event Listeners
window.addEventListener("DOMContentLoaded", displayStudentData);
const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", displayStudentData);
