---
layout: post
title: Syncfusion Gantt SDK Overview
description: Learn about the Syncfusion Gantt Chart, a project management component to visualize and manage tasks, task relationships, and resources with support for editing, dependencies, timeline, critical path, and more across multiple web platforms.
platform: gantt-sdk
control: Gantt Chart
documentation: ug
domainurl: https://helpstaging.syncfusion.com/gantt-sdk
---

# Welcome to Syncfusion® Gantt SDK

The Syncfusion Gantt SDK combines the Gantt Chart and Kanban components to help teams plan, track, and manage work with clarity. Whether you need timeline-based project scheduling or board-based task management, you can choose the component that best fits your workflow and deliver an efficient, intuitive, and productive project management experience.

---

## Included Components

### 1. Gantt Chart

The Gantt chart is a project management tool which provides a Microsoft Project-like interface for scheduling and managing projects. Its intuitive user interface allows you visually manage tasks, task relationships, and resources in a project.

**Key Features:**

* **Data sources** - Bind the Grid component with an array of JSON objects or DataManager.
* **Large data binding** - To render a large number of tasks in the Gantt Chart with an effective performance. It allows users to load parent records alone on load time. Child records render on demand during expansion action.
* **Editing**: A task’s fields, such as duration, start date, end date, predecessors, and more, can be edited directly in their respective cells using the Edit dialog or interactively using taskbars.
* **Undo/Redo**: It enables users to revert the most recent action performed in the Gantt Chart. Redo feature can reapply an action that was previously undone using the Undo feature. This allows users to revert their decision to undo an action.
* **Task dependencies**: Defines task relationships using finish-to-start, start-to-finish, start-to-start, and finish-to-finish task dependency types.
* **Customizable timeline**: Displays timescale from minutes to decades easily and also displays the custom texts in timescale. Timeline can be displayed in either one-tier or two-tier layout.
* **Taskbars**: Supports unscheduled tasks, and it can be customized. Baselines can also be displayed for the tasks.
* **Critical path**:  It is a series of tasks (or sometimes only a single task) that controls the calculated finish date of the project. If a task in a critical path is delayed, then the entire project will be delayed.
* **Timezone**: It explains the Gantt Chart schedules project in their respective timezones.
* **Columns**: Customizes the columns and adds the custom columns to the Gantt chart at initialization.
* **Resources**: Resources are represented by staff, equipment, materials, and more. You can show and allocate the resources for each task.
* **Filtering**: Filters individual column using the menu filtering along with toolbar search box.
* **Toolbar**: Managing the Gantt data using toolbars.
* **Rows**: Customizes the rows and adds the custom rows to the Gantt chart at initialization and dynamically.
* **Selection**: Customizes the row and cell selection to the Gantt chart at initialization and dynamically.
* **Data markers or indicators**: Displays indicators and flags along with taskbars and task labels.
* **Event markers**: Highlights important days or events in a project using the event markers.
* **Holidays**: Defines non-working days in a project using holidays.

**Available Platforms:**

{% doccards %}

{% doccard text="React" link="/gantt-sdk/react/gantt/getting-started" icon="/gantt-sdk/images/React.svg" %}

{% doccard text="Angular" link="/gantt-sdk/angular/gantt/getting-started" icon="/gantt-sdk/images/Angular.svg" %}

{% doccard text="Blazor" link="/gantt-sdk/blazor/gantt/getting-started-webapp" icon="/gantt-sdk/images/Blazor.svg" %}

{% doccard text="JavaScript" link="/gantt-sdk/javascript/gantt/getting-started"  icon="/gantt-sdk/images/JavaScript.svg" %}

{% doccard text="TypeScript" link="/gantt-sdk/typescript/gantt/getting-started"  icon="/gantt-sdk/images/Typescript.svg" %}

{% doccard text="Vue" link="/gantt-sdk/vue/gantt/getting-started-vue-3" icon="/gantt-sdk/images/Vue.svg" %}

{% doccard text="ASP.NET Core" link="/gantt-sdk/asp-net-core/gantt/getting-started" icon="/gantt-sdk/images/ASP.NET Core.png" %}

{% doccard text="ASP.NET MVC" link="/gantt-sdk/asp-net-mvc/gantt/getting-started" icon="/gantt-sdk/images/ASP.NET MVC.png" %}

{% doccard text="WPF" link="/gantt-sdk/wpf/gantt/getting-started" icon="/gantt-sdk/images/WPF.svg" %}

{% doccard text="UWP" link="/gantt-sdk/uwp/gantt/getting-started" icon="/gantt-sdk/images/UWP.svg" %}

{% enddoccards %}

### 2. Kanban

The Syncfusion Kanban Board is a task management component used to plan, track, and organize work items in a board format. It allows teams to move cards across columns to reflect progress, while maintaining work statuses and priorities.

**Key Features:**

* **Data binding** - Bind the Kanban board to local or remote data sources so cards stay in sync with your application data.
* **Customizable columns** - Define and configure columns to match workflow stages, status values, and board structure.
* **Sorting** - Arrange cards in ascending or descending order based on fields such as priority, due date, or status.
* **Virtual scrolling** - Load and render only the visible cards while scrolling to improve performance with large data sets.
* **Card editing/CRUD operations** - Add, update, and remove cards directly from the board to keep task information current.
* **Card templates** - Customize the appearance of cards with templates to display the exact content and layout needed for each work item.
* **Swimlane layouts** - Group cards into swimlanes to organize work by category, assignee, priority, or any other relevant field.


**Available Platforms:**

{% doccards %}

{% doccard text="React" link="/gantt-sdk/react/kanban/getting-started" icon="/gantt-sdk/images/React.svg" %}

{% doccard text="Angular" link="/gantt-sdk/angular/kanban/getting-started" icon="/gantt-sdk/images/Angular.svg" %}

{% doccard text="Blazor" link="/gantt-sdk/blazor/kanban/getting-started-webapp" icon="/gantt-sdk/images/Blazor.svg" %}

{% doccard text="JavaScript" link="/gantt-sdk/javascript/kanban/getting-started"  icon="/gantt-sdk/images/JavaScript.svg" %}

{% doccard text="TypeScript" link="/gantt-sdk/typescript/kanban/getting-started"  icon="/gantt-sdk/images/Typescript.svg" %}

{% doccard text="Vue" link="/gantt-sdk/vue/kanban/getting-started-vue-3" icon="/gantt-sdk/images/Vue.svg" %}

{% doccard text="ASP.NET Core" link="/gantt-sdk/asp-net-core/kanban/getting-started" icon="/gantt-sdk/images/ASP.NET Core.png" %}

{% doccard text="ASP.NET MVC" link="/gantt-sdk/asp-net-mvc/kanban/getting-started" icon="/gantt-sdk/images/ASP.NET MVC.png" %}

{% doccard text="WPF" link="/gantt-sdk/wpf/kanban/getting-started" icon="/gantt-sdk/images/WPF.svg" %}

{% doccard text="UWP" link="/gantt-sdk/uwp/kanban/getting-started" icon="/gantt-sdk/images/UWP.svg" %}

{% doccard text="WinUI" link="/gantt-sdk/winui/kanban/getting-started" icon="/gantt-sdk/images/WinUI.svg" %}

{% doccard text=".NET MAUI" link="/gantt-sdk/maui/kanban/getting-started" icon="/gantt-sdk/images/dotnet_maui.svg" %}

{% enddoccards %}
