ej.gantt.Gantt.Inject(ej.gantt.Edit);

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '380px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        dependency: 'Predecessor',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    editSettings: {
        allowTaskbarEditing: true,
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true
    },
});
ganttChart.appendTo('#Gantt');


let add = new ej.buttons.Button();
add.appendTo('#add');

let update = new ej.buttons.Button();
update.appendTo('#update');

let remove= new ej.buttons.Button();
remove.appendTo('#remove');

document.getElementById('add').addEventListener('click', () => {
    var ganttObj= document.getElementById('Gantt').ej2_instances[0];
    ganttObj.addPredecessor(2, '3SF,7FS');
});

document.getElementById('remove').addEventListener('click', () => {
    var ganttObj= document.getElementById('Gantt').ej2_instances[0];
    ganttObj.removePredecessor(4);
});

document.getElementById('update').addEventListener('click', () => {
    var ganttObj= document.getElementById('Gantt').ej2_instances[0];
    ganttObj.updatePredecessor(8, '7FS');
});