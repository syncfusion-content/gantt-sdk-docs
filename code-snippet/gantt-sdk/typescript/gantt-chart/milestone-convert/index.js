ej.gantt.Gantt.Inject(ej.gantt.Edit);

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '380px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    editSettings: {
        allowEditing: true,
    },
    allowUnscheduledTasks: true
});
ganttChart.appendTo('#Gantt');

var button= new ej.buttons.Button();
button.appendTo('#milestone');

document.getElementById('milestone').addEventListener('click', () => {
    var ganttObj= document.getElementById('Gantt').ej2_instances[0];
    ganttObj.convertToMilestone('6');
});