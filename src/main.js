import "./style.css";


// ========================================
// DATA
// ========================================

const tasks = [
    {
        title: "Build landing page",
        description: "Create responsive landing page for the project.",
        category: "Development",
        status: "Completed",
        priority: "High",
        date: "Today"
    },
    {
        title: "JavaScript project",
        description: "Add localStorage functionality.",
        category: "Development",
        status: "Pending",
        priority: "Medium",
        date: "Today"
    },
    {
        title: "GitHub README",
        description: "Write documentation for the project.",
        category: "Documentation",
        status: "Pending",
        priority: "Low",
        date: "Tomorrow"
    },
    {
        title: "Deploy application",
        description: "Publish the project online.",
        category: "Deployment",
        status: "Completed",
        priority: "High",
        date: "Yesterday"
    }
];


// ========================================
// SIDEBAR
// ========================================

function Sidebar() {

    return `
        <aside id="sidebar">

            <div class="sidebar-inner">

                <!-- LOGO -->

                <div class="logo-area">

                    <div class="logo-icon">
                        ✓
                    </div>

                    <span class="logo-text">
                        Task<span>Flow</span>
                    </span>

                </div>


                <!-- NAVIGATION -->

                <div class="nav-section">

                    <p class="nav-label">
                        MENU
                    </p>


                    <a href="#" class="nav-item active">

                        <span class="nav-icon">▦</span>

                        <span>
                            Dashboard
                        </span>

                    </a>


                    <a href="#" class="nav-item">

                        <span class="nav-icon">✓</span>

                        <span>
                            Tasks
                        </span>

                        <span class="nav-count">
                            6
                        </span>

                    </a>


                    <a href="#" class="nav-item">

                        <span class="nav-icon">▣</span>

                        <span>
                            Projects
                        </span>

                    </a>


                    <a href="#" class="nav-item">

                        <span class="nav-icon">□</span>

                        <span>
                            Calendar
                        </span>

                    </a>


                    <p class="nav-label second">
                        WORKSPACE
                    </p>


                    <a href="#" class="nav-item">

                        <span class="nav-icon">⚙</span>

                        <span>
                            Settings
                        </span>

                    </a>


                </div>


                <!-- PROJECT -->

                <div class="sidebar-project">

                    <div class="project-header">

                        <span>
                            My Workspace
                        </span>

                        <span>
                            ⋮
                        </span>

                    </div>


                    <div class="project-progress">

                        <div class="project-info">

                            <span>
                                Website Project
                            </span>

                            <span>
                                75%
                            </span>

                        </div>


                        <div class="progress-track">

                            <div
                                class="progress-bar"
                                style="width: 75%"
                            ></div>

                        </div>

                    </div>

                </div>


                <!-- USER -->

                <div class="sidebar-user">

                    <div class="user-avatar">
                        A
                    </div>

                    <div class="user-info">

                        <strong>
                            Aidan
                        </strong>

                        <span>
                            Developer
                        </span>

                    </div>

                    <button class="user-menu">
                        ⋮
                    </button>

                </div>

            </div>

        </aside>
    `;
}


// ========================================
// NAVBAR
// ========================================

function Navbar() {

    return `
        <header class="topbar">

            <div class="mobile-brand">

                <div class="logo-icon small">
                    ✓
                </div>

                <span>
                    Task<span>Flow</span>
                </span>

            </div>


            <div class="breadcrumb">

                <span>
                    Workspace
                </span>

                <span class="breadcrumb-arrow">
                    /
                </span>

                <strong>
                    Dashboard
                </strong>

            </div>


            <div class="topbar-right">

                <!-- SEARCH -->

                <div class="search-box">

                    <span>
                        ⌕
                    </span>

                    <input
                        type="text"
                        placeholder="Search tasks..."
                        id="searchInput"
                    />

                    <kbd>
                        /
                    </kbd>

                </div>


                <!-- NOTIFICATION -->

                <button class="icon-button">

                    🔔

                    <span class="notification-dot"></span>

                </button>


                <!-- USER -->

                <div class="top-user">

                    <div class="top-avatar">
                        A
                    </div>

                    <div class="top-user-info">

                        <strong>
                            Aidan
                        </strong>

                        <span>
                            Developer
                        </span>

                    </div>

                </div>


                <!-- MOBILE MENU -->

                <button
                    id="menuButton"
                    class="mobile-menu"
                >
                    ☰
                </button>

            </div>

        </header>
    `;
}


// ========================================
// STAT CARD
// ========================================

function StatCard(
    title,
    value,
    description,
    icon,
    type
) {

    return `
        <div class="stat-card">

            <div class="stat-top">

                <div class="stat-icon ${type}">
                    ${icon}
                </div>

                <span class="stat-more">
                    ⋮
                </span>

            </div>


            <div class="stat-value">
                ${value}
            </div>


            <div class="stat-title">
                ${title}
            </div>


            <div class="stat-description">
                ${description}
            </div>

        </div>
    `;
}


// ========================================
// TASK CARD
// ========================================

function TaskCard(task) {

    const completed =
        task.status === "Completed";


    return `
        <div
            class="task-card"
            data-title="${task.title.toLowerCase()}"
        >

            <div class="task-check ${completed ? "checked" : ""}">

                ${completed ? "✓" : ""}

            </div>


            <div class="task-main">

                <div class="task-title-row">

                    <h3>
                        ${task.title}
                    </h3>

                    <span class="priority ${task.priority.toLowerCase()}">
                        ${task.priority}
                    </span>

                </div>


                <p>
                    ${task.description}
                </p>


                <div class="task-meta">

                    <span>
                        ◷ ${task.date}
                    </span>

                    <span>
                        •
                    </span>

                    <span>
                        ${task.category}
                    </span>

                </div>

            </div>


            <div class="task-status">

                <span
                    class="status ${
                        completed
                            ? "completed"
                            : "pending"
                    }"
                >
                    <span class="status-dot"></span>

                    ${task.status}

                </span>

            </div>


            <button class="task-menu">
                ⋮
            </button>

        </div>
    `;
}


// ========================================
// APP
// ========================================

function App() {

    return `

        <div class="app-layout">


            <!-- SIDEBAR -->

            ${Sidebar()}


            <!-- MAIN -->

            <div class="main-area">


                <!-- TOPBAR -->

                ${Navbar()}


                <!-- CONTENT -->

                <main class="dashboard">


                    <!-- MOBILE OVERLAY -->

                    <div
                        id="overlay"
                        class="overlay"
                    ></div>


                    <!-- HEADER -->

                    <section class="welcome-section">

                        <div>

                            <span class="welcome-label">
                                OVERVIEW
                            </span>

                            <h1>
                                Good morning, Aidan
                                <span>👋</span>
                            </h1>

                            <p>
                                Here's what's happening with your tasks today.
                            </p>

                        </div>


                        <button class="add-task-button">

                            <span>
                                +
                            </span>

                            Add Task

                        </button>

                    </section>


                    <!-- STATS -->

                    <section class="stats-grid">

                        ${StatCard(
                            "Total Tasks",
                            "24",
                            "+12% from last week",
                            "▦",
                            "purple"
                        )}


                        ${StatCard(
                            "Completed",
                            "18",
                            "75% completion rate",
                            "✓",
                            "green"
                        )}


                        ${StatCard(
                            "Pending",
                            "6",
                            "2 due today",
                            "◷",
                            "orange"
                        )}


                        <div class="progress-card">

                            <div class="progress-card-header">

                                <div>

                                    <span class="progress-label">
                                        WEEKLY GOAL
                                    </span>

                                    <h3>
                                        18 / 24 tasks
                                    </h3>

                                </div>

                                <div class="goal-icon">
                                    🎯
                                </div>

                            </div>


                            <div class="big-progress">

                                <div
                                    class="big-progress-fill"
                                    style="width: 75%"
                                ></div>

                            </div>


                            <p>
                                Keep going! You're 75% there.
                            </p>

                        </div>

                    </section>


                    <!-- TASKS -->

                    <section class="tasks-section">


                        <div class="section-header">

                            <div>

                                <span class="section-label">
                                    WORKSPACE
                                </span>

                                <h2>
                                    My Tasks
                                </h2>

                            </div>


                            <div class="task-actions">

                                <button
                                    class="filter-button active"
                                >
                                    All
                                </button>

                                <button class="filter-button">
                                    Active
                                </button>

                                <button class="filter-button">
                                    Completed
                                </button>

                                <button class="view-all">
                                    View all →
                                </button>

                            </div>

                        </div>


                        <!-- TASK LIST -->

                        <div
                            class="task-list"
                            id="taskList"
                        >

                            ${tasks
                                .map(TaskCard)
                                .join("")}

                        </div>


                        <!-- EMPTY -->

                        <div
                            id="emptyState"
                            class="empty-state"
                            style="display:none"
                        >
                            No tasks found.
                        </div>


                    </section>


                </main>

            </div>

        </div>

    `;
}


// ========================================
// RENDER
// ========================================

document.querySelector("#app").innerHTML = App();


// ========================================
// MOBILE MENU
// ========================================

const menuButton =
    document.querySelector("#menuButton");

const sidebar =
    document.querySelector("#sidebar");

const overlay =
    document.querySelector("#overlay");


menuButton.addEventListener(
    "click",
    () => {

        sidebar.classList.toggle("mobile-open");

        overlay.classList.toggle("show");

    }
);


overlay.addEventListener(
    "click",
    () => {

        sidebar.classList.remove("mobile-open");

        overlay.classList.remove("show");

    }
);


// ========================================
// SEARCH
// ========================================

const searchInput =
    document.querySelector("#searchInput");

const taskList =
    document.querySelector("#taskList");

const emptyState =
    document.querySelector("#emptyState");


searchInput.addEventListener(
    "input",
    (event) => {

        const value =
            event.target.value
                .toLowerCase()
                .trim();


        const cards =
            document.querySelectorAll(
                ".task-card"
            );


        let visible = 0;


        cards.forEach(card => {

            const title =
                card.dataset.title;


            if (title.includes(value)) {

                card.style.display = "";

                visible++;

            } else {

                card.style.display = "none";

            }

        });


        emptyState.style.display =
            visible === 0
                ? "block"
                : "none";

    }
);