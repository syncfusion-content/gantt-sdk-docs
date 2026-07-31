
var ganttChart = new ej.gantt.Gantt({
        dataSource: GanttData,
		height: "450px",
        taskFields: {
            id: "TaskID",
            name: "TaskName",
            startDate: "StartDate",
            endDate: "EndDate",
            duration: "Duration",
            progress: "Progress",
            child: "subtasks",
            segments: "Segments"
        },
});
ganttChart.appendTo('#Gantt');







