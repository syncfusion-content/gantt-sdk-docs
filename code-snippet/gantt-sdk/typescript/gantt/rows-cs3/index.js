var ganttChart = new ej.gantt.Gantt({ 
    dataSource: GanttData,
    height: '380px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    treeColumnIndex:1,
    splitterSettings: {
        position: '75%'
    },
    rowHeight: 42
});
ganttChart.appendTo('#Gantt');

var small = new ej.buttons.Button();
small.appendTo('#small');

document.getElementById('small').addEventListener('click', () => {
    ganttChart.rowHeight = 20;
});

var medium = new ej.buttons.Button();
medium.appendTo('#medium');

document.getElementById('medium').addEventListener('click', () => {
    ganttChart.rowHeight = 42;
});

var big = new ej.buttons.Button();
big.appendTo('#big');

document.getElementById('big').addEventListener('click', () => {
    ganttChart.rowHeight = 60;
});