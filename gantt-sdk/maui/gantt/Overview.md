---
layout: post
title: About Syncfusion .NET MAUI Gantt control | Syncfusion
description: Learn about introduction of Syncfusion® Essential Studio .NET MAUI Gantt control and more details.
platform: gantt-sdk
control: Gantt
documentation: ug
appliesto: UI Component Suite, Gantt SDK
---

# About Syncfusion .NET MAUI Gantt control

The Syncfusion® .NET MAUI Gantt control (`SfGantt`) visualizes project schedules by combining a hierarchical task grid with a timeline chart. Each task is drawn as a task bar on the timeline, so you can see when work starts and ends, how much of it is complete, and how tasks depend on each other. It helps teams plan work, track progress, and identify scheduling relationships.

<!-- TODO: Add the overview screenshot captured from the Sample Browser Gantt > Getting Started > Overview sample. -->
![.NET MAUI Gantt overview](images/overview/gantt-overview.png)

## Business use cases

- **Project planning** - applications that plan work as a hierarchy of phases, tasks, and milestones.
- **Construction and manufacturing schedules** - tools that sequence activities that depend on one another.
- **Product roadmaps** - applications that present release plans and delivery milestones over time.
- **Progress tracking** - systems that show how much of each task, or group of tasks, is complete.

## Key features

- **Data binding** allows binding a collection of business objects to the [DataSource](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Gantt.SfGantt.html#Syncfusion_Maui_Gantt_SfGantt_DataSource) property and mapping its properties to Gantt task fields using `GanttTaskFields`.
- **Hierarchical tasks** allows organizing tasks as parent and child tasks, with expand and collapse support.
- **Task bars with progress** allows displaying the schedule of each task along with its completion percentage.
- **Parent (summary) tasks** allows rolling up the schedule of child tasks into their parent task.
- **Milestones** allows marking key events in the schedule.
- **Task dependencies** allows linking tasks using Finish-to-Start (FS), Start-to-Start (SS), Finish-to-Finish (FF), and Start-to-Finish (SF) relationships with optional lag.
- **Timeline** allows displaying the schedule in different view modes such as hour, day, week, month, and year.
- **Selection** allows selecting tasks in the grid and the chart, in single or multiple modes.
- **Editing** allows changing tasks by dragging and resizing task bars or by editing grid cells.
- **Scheduling** allows task dates to be calculated automatically or supplied manually, with support for working hours, work week, weekends, and holidays.
- **Event markers** allows highlighting important dates on the timeline.
- **Appearance customization** allows customizing the timeline, task bars, grid lines, and row height, and follows the application theme.

## Supported platforms

The .NET MAUI Gantt control is supported on the following platforms:

- Android
- iOS
- macOS (Mac Catalyst)
- Windows

## Related controls

- [DataGrid](https://help.syncfusion.com/maui/datagrid/overview) for managing structured task data in tabular format.
- [TreeGrid](https://help.syncfusion.com/maui/treegrid/overview) for displaying hierarchical data.
- [Scheduler](https://help.syncfusion.com/maui/scheduler/overview) for managing timelines and scheduling tasks.
- [Kanban](https://help.syncfusion.com/maui/kanban-board/overview) for visualizing task status across workflow stages.

## See Also

- [Getting Started](https://help.syncfusion.com/gantt-sdk/maui/gantt/getting-started) shows a step-by-step guide to begin using the Gantt control.
