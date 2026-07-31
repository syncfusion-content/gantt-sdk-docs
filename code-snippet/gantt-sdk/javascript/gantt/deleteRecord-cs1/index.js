ej.gantt.Gantt.Inject(ej.gantt.Edit);

var ganttChart = new ej.gantt.Gantt({
        dataSource: GanttData,
		height:'450px',
		taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
			duration: 'Duration',
            progress: 'Progress',
			parentID: 'ParentID'
        },
		editSettings: {
		   allowDeleting:true
         }
});
ganttChart.appendTo('#Gantt');

var delBtn= new ej.buttons.Button();
delBtn.appendTo('#deleteRecord');

document.getElementById('deleteRecord').addEventListener('click', () => {
    ganttChart.editModule.deleteRow();
});