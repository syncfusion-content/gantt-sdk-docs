var ganttData = [
  { TaskID: 1, TaskName: 'Plan project', StartDate: new Date('04/03/2025'), Duration: 5, isManual: false },
  { TaskID: 2, TaskName: 'Develop feature', StartDate: new Date('04/03/2025'), Duration: 7, isManual: false },
  { TaskID: 3, TaskName: 'Test module', StartDate: new Date('03/31/2025'), Duration: 3, isManual: false }
];

var projectStartDate = new Date('04/01/2025');

var ganttChart = new ej.gantt.Gantt({
    dataSource: ganttData,
    height: '250px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        manual: 'isManual'
    },
    taskMode: 'Custom',
    dataBound:dataBound,
});
ganttChart.appendTo('#Gantt');

function dataBound() {
    const data = Array.isArray(ganttChart.dataSource) ? ganttChart.dataSource : [];
    data.forEach((task) => {
        if (!task.isManual && task.StartDate && new Date(task.StartDate) < projectStartDate) {
            task.isManual = true; // Switch to manual mode.
            const messageElement = document.getElementById('message');
            if (messageElement) {
                messageElement.textContent = `Task "${task.TaskName}" switched to manual mode as its start date is before project start date.`;
            }
       }
     });
}