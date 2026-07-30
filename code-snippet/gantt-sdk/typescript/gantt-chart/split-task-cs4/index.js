
var ganttChart = new ej.gantt.Gantt({
    dataSource: SplitTaskData,
    height: "450px",
    taskFields: {
        id: "TaskID",
        name: "TaskName",
        startDate: "StartDate",
        endDate: "EndDate",
        duration: "Duration",
        progress: "Progress",
        child: "subtasks",
         segmentId: "segmentId"
  },
  segmentData: [
    { segmentId: 2, StartDate: new Date("04/02/2019"), Duration: 2 },
    { segmentId: 2, StartDate: new Date("04/04/2019"), Duration: 2 },
    { segmentId: 4, StartDate: new Date("04/02/2019"), Duration: 2 },
    { segmentId: 4, StartDate: new Date("04/04/2019"), Duration: 2 }
  ],
});
ganttChart.appendTo('#Gantt');







