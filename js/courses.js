"use strict";
////////////////////////////////////////////////////////////////
/// Elements
const containerCourse = document.querySelector(".course-content");
const containerCourseCode = document.querySelector(".course-code");
const containerCourseLevel = document.querySelector(".course-level");
const containerCourseDescription = document.querySelector(".course-description");
const selectCourseLevel = document.querySelector(".course-select");
const selectSortCourses = document.querySelector(".course-sort-select");
const btnSearch = document.querySelector(".search-course-btn");
const inputCourseSearch = document.querySelector(".course-input");

//////////////////////////////////////////////////////////////////
/// Courses
const course1 = {
  title: "Computer Essentials",
  code: "CST8101",
  level: "Level 1",
  description:
    "The essentials of computer software, hardware, and laptop management form the foundation for building further technical programming skills. Learn to configure your laptop environment, basic PC and troubleshoot problems. Students create backups, install virus protection, and manage files through a basic understanding of the Windows Operating System.",
  image: "img/courses/computer-essentials.jpg",
};

const course2 = {
  title: "Introduction to Computer Programming",
  code: "CST8116",
  level: "Level 1",
  description:
    "Possessing the fundamentals of logic, problem-solving and programming language structure provides a solid foundation for further study in the field. Students develop introductory knowledge of computer programming with emphasis on problem analysis and design, using algorithms, pseudocode, flowcharts, UML Class Diagrams and testing, with the Java programming language used as a means to implement problem solution designs. ",
  image: "img/courses/intro-programming.jpg",
};

const course3 = {
  title: "Introduction to Database",
  code: "CST8215",
  level: "Level 1",
  description:
    "Databases are used to store data and are a core component of many information technology systems. Students learn the fundamentals of relational databases design using Entity Relation Diagrams (ERDs), and use Structured Query Language (SQL) to create, modify and query a database. Students design and create databases that are maintainable, secure and adaptable to change in business requirements, using normalization.",
  image: "img/courses/intro-database.jpg",
};

const course4 = {
  title: "Achieving Success",
  code: "CST8300",
  level: "Level 1",
  description:
    "Life in the 21st century presents significant opportunities, but it also creates potential hazards and ethical problems that demand responsible solutions. Students explore the possibilities ahead, assess their own aptitudes and strengths, and apply critical thinking and decision-making tools to help resolve some of the important issues in our complex society with its competing interests.",
  image: "img/courses/achieving-success.jpg",
};

const course5 = {
  title: "Communications I",
  code: "ENL1813T",
  level: "Level 1",
  description:
    "Communication remains an essential skill sought by employers, regardless of discipline or field of study. Through a combination of lectures, exercises, and independent learning, students practise writing, speaking, reading, listening, locating and documenting information and using technology to communicate professionally. Students develop and strengthen communication skills that contribute to success in both educational and workplace environments.",
  image: "img/courses/communication.jpg",
};

const course6 = {
  title: "Technical Maths for Comp Sc.",
  code: "MAT8001C",
  level: "Level 1",
  description:
    "The study of algebraic and transcendental functions is an essential prerequisite to Calculus. Students manipulate algebraic expressions, solve algebraic equations and linear systems and learn the properties of and graph algebraic and transcendental functions. Students investigate computer number systems in addition to Boolean algebra and logic to help solve problems involving computer systems.",
  image: "img/courses/maths.jpg",
};

const course7 = {
  title: "Database Systems",
  code: "CST2355",
  level: "Level 2",
  description:
    "Database systems can automate data processing tasks as well as tie into the security of information technology systems. Students acquire practical experience using market-leading object-relational database management systems like Oracle and MySQL. Students obtain hands-on experience with advanced engineering modeling tools along with SQL, SQL scripts and programming with Oracle's PL/SQL blocks. ",
  image: "img/courses/database-systems.jpg",
};

const course8 = {
  title: "OS Fundamentals (GNU/Linux)",
  code: "CST8102",
  level: "Level 2",
  description:
    "Operating systems form the backbone of information technology systems coordinating the interaction between hardware and software. Students examine the details of operating system structures, process management, storage management, installation, configuration, and administration both in theory and through practical assignments based on the GNU/Linux operating system.",
  image: "img/courses/linux.jpg",
};

const course9 = {
  title: "Object Oriented Programming (Java)",
  code: "CST8284",
  level: "Level 2",
  description:
    "Working in the field of information technology as a programmer requires a firm understanding of Object-Oriented Programming (OOP) concepts. Students explore object-oriented programming methodology using the Java programming language. Object oriented concepts, such as encapsulation, inheritance, abstraction and polymorphism are covered and reinforced with practical applications.",
  image: "img/courses/oop-with-java.jpg",
};

const course10 = {
  title: "Web Programming",
  code: "CST8285",
  level: "Level 2",
  description:
    "The World Wide Web (WWW) has become an integrated part of everyday life. Students develop basic skills of web programming, website design and implementation. JavaScript, HTML5, and PHP are used to explore web-based solutions to problems of increasing interactivity and complexity. Lectures are reinforced by practical assignments that encourage students to construct and maintain their own websites.",
  image: "img/courses/web-programming.jpg",
};

const course11 = {
  title: "Technical Communication",
  code: "ENL2019T",
  level: "Level 2",
  description:
    "The ability to communicate effectively in a technically-oriented interdisciplinary workplace is a foundational skill in an innovation-driven economy. Students are exposed to exercises and assignments designed to foster independent and collaborative critical thinking, research, writing, visual communication and presentation skills related to technical topics.",
  image: "img/courses/technical-communication.jpg",
};

const course12 = {
  title: "Cooperative Education Readiness",
  code: "GEP1001",
  level: "Level 2",
  description:
    "Through a detailed orientation students learn the cooperative education program policies and procedures related to searching and securing a work term opportunity. Students identify their strengths and transferable skills and participate in workshop-style sessions that focus on cover letter and resume development, interview techniques and job search strategies.",
  image: "img/courses/cooperative-readiness.jpg",
};

const course13 = {
  title: "General Education Elective 1",
  code: "GED0336",
  level: "Level 2",
  description:
    "Students choose one course, from a group of general education electives, which meets one of the following four requirements: Arts in Society, Civic Life, Social and Cultural Understanding, and Science and Technology.",
  image: "img/courses/general-elective-1.jpg",
};

const course14 = {
  title: "Systems Analysis and Design",
  code: "CST2234",
  level: "Level 3",
  description:
    "C Guided by industry standard software engineering methodologies, students gain hands-on experience with case studies used to develop systems from inception through elaboration, construction and transition phases. Object-oriented design, modeling tools and techniques are used to produce system specifications.  Software methodologies discussed include the Systems Development Life Cycle (SDLC), agile approach, Rational Unified Process (RUP)and Rapid Application Development (RAD).",
  image: "img/courses/system-analysis.jpg",
};

const course15 = {
  title: "Mobile Graphical Interface Programming",
  code: "CST2335",
  level: "Level 3",
  description:
    "Mobile devices play an instrumental part of everyday life, thus requiring knowledge of mobile graphical user interface development. Students explore graphical user interface programming in a mobile Android environment. Students learn how to program applications using the latest Android development tools. Topics include application architecture, interface design, network communication, and database integration.",
  image: "img/courses/mobile-programming.jpg",
};

const course16 = {
  title: "Network Programming",
  code: "CST8109",
  level: "Level 3",
  description:
    "Software programming in today's environment requires detailed knowledge of the underlying network topology, its implementation and programming support functions. Gaining an appreciation and perspective of this technology is imperative to developing good network programming applications. Students explore topics including the basic structure, design and layered communications models, with an emphasis on data communications, TCP/IP protocol suite, socket programming and multi-threading concepts.",
  image: "img/courses/network-programming.jpg",
};

const course17 = {
  title: "Object Oriented Programming with Design Patterns",
  code: "CST2335",
  level: "Level 3",
  description:
    "Design patterns are programming architecture solutions to common challenges faced in software implementation. Students implement best practices of object-oriented program development with software design patterns. SQL through JDBC technology is used embedded for developing and using 'data access objects'. Course topics include refactoring, domain modelling, JDBC and multithreaded servlet programming. ",
  image: "img/courses/design-patterns.jpg",
};

const course18 = {
  title: "Business Programming",
  code: "CST8283",
  level: "Level 3",
  description:
    "Information systems built using the COBOL programming language support important institutions such as government services and the banking sectors. Students create COBOL programs in a business environment using structured methodology in the latest visual programming environment. Topics include output design, logic design tools, structured, top-down and modular coding, testing and debugging, and documentation. ",
  image: "img/courses/business-programming.jpg",
};

const course19 = {
  title: "Business Intelligence and Data Analytics",
  code: "CST8390",
  level: "Level 3",
  description:
    "Business Intelligence (BI) can be broadly defined as a set of applications, infrastructure, and best practices that integrate and transform raw data into actionable information used for planning, monitoring and analyzing processes. The foundation underlying this process is the Data Analytics that explore the data, identify the relationships and patterns in a meaningful way.",
  image: "img/courses/data-analytics.jpg",
};

const course20 = {
  title: "Advanced Database Topics",
  code: "CST8276",
  level: "Level 4",
  description:
    "Database administration is an important role, in particular for deployed information technology systems. Teams and individuals explore advanced database topics including database administration (using Oracle), data governance, globalization, security and advances in database technology. Topic coverage includes business intelligence, data warehouses, data visualization, big data, NoSQL and graph databases.",
  image: "img/courses/advanced-database.jpg",
};

const course21 = {
  title: "Enterprise Application Programming",
  code: "CST8277",
  level: "Level 4",
  description:
    "Enterprise applications connect clients to services that are based on data stored in database management systems. With a focus on the IT Enterprise, students examine the application enterprise environment using and extending the technologies learned in previous courses. Students examine the commonly used enterprise systems development technologies such as Java/Jakarta Enterprise Edition, cloud computing, security and the corporate database repository.",
  image: "img/courses/enterprise-application.jpg",
};

const course22 = {
  title: "Programming Language Research Project",
  code: "CST8333",
  level: "Level 4",
  description:
    "Learning a new programming language or framework on your own is a challenge faced by programmers on the job as part of their career. Students explore this process of self-study by applying project planning, applied research, testing, and implementation of basic and advanced concepts appropriate to the language or framework under study.",
  image: "img/courses/programming-language-research.jpg",
};

const course23 = {
  title: "Software Development Project",
  code: "CST8334",
  level: "Level 4",
  description:
    "Industry recognizes the value of graduates possessing real-world software development experience. Following the agile software engineering methodology, teams work with clients to analyze business needs, determine computer system requirements, model system designs, build prototypes, test code and deliver final products. Project management techniques are used to monitor progress and organize tasks.",
  image: "img/courses/software-development.jpg",
};

const course24 = {
  title: "General Education Elective 2",
  code: "GED0336",
  level: "Level 4",
  description:
    "Students choose one course, from a group of general education electives, which meets one of the following four requirements: Arts in Society, Civic Life, Social and Cultural Understanding, and Science and Technology.",
  image: "img/courses/general-elective-2.jpg",
};

const courses = [
  course1,
  course2,
  course3,
  course4,
  course5,
  course6,
  course7,
  course8,
  course9,
  course10,
  course11,
  course12,
  course13,
  course14,
  course15,
  course16,
  course17,
  course18,
  course19,
  course20,
  course21,
  course22,
  course23,
  course24,
];

// Create a new copy of courses and Reverse the order
const reverseCourses = courses.slice().reverse();

/////////////////////////////////////////////////////////////////
/// Functions

// Function to display courses
const displayAllCourses = function (courses) {
  containerCourse.innerHTML = "";
  courses.forEach((course) => {
    const html = `<div class="course">
    <img src=${course.image} class="course-img"/>
    <div class="course-info-container">
      <h3 class="course-title">
        ${course.title}
      </h3>
      <p class="course-level">${course.level}</p>
      <p class="course-code">${course.code}</p>
      <p class="course-description">
        ${course.description}
      </p>
    </div>
  </div>`;
    containerCourse.insertAdjacentHTML("beforeend", html);
  });
};

// Function to display course as per level
const displayCoursePerLevel = function (courses, e) {
  containerCourse.innerHTML = "";
  courses.forEach((course) => {
    if (course.level === e.target.value) {
      const html = `<div class="course">
        <img src=${course.image} class="course-img"/>
        <div class="course-info-container">
          <h3 class="course-title">
            ${course.title}
          </h3>
          <p class="course-level">${course.level}</p>
          <p class="course-code">${course.code}</p>
          <p class="course-description">
            ${course.description}
          </p>
        </div>
      </div>`;

      containerCourse.insertAdjacentHTML("beforeend", html);
    }
    if (e.target.value === "All Courses") {
      displayAllCourses(courses);
    }
  });
};

// Function to sort courses from lowest to highest or from from highest to lowest
const sortCourses = function (courses, e) {
  if (e.target.value === "lowest-to-highest") {
    displayAllCourses(courses);
  } else {
    displayAllCourses(reverseCourses);
  }
};

//Function to search courses by keywords
const searchCourses = function (courses) {
  const filterCourses = courses.filter((course) => {
    return course.title.toLowerCase().includes(inputCourseSearch.value.toLowerCase());
  });
  displayAllCourses(filterCourses);
};

// Displays all courses
displayAllCourses(courses);
//////////////////////////////////////////////////////////////
// Event Listeners

selectCourseLevel.addEventListener("change", (e) => {
  displayCoursePerLevel(courses, e);
});

selectSortCourses.addEventListener("change", (e) => {
  sortCourses(courses, e);
});

btnSearch.addEventListener("click", (e) => {
  e.preventDefault();
  searchCourses(courses);
});
