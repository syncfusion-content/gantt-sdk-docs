ej.gantt.Gantt.Inject(ej.gantt.Toolbar,ej.gantt.Edit);

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
		editSettings:{
			allowAdding:true
		}
});
ganttChart.appendTo('#Gantt');

var addBtn= new ej.buttons.Button();
addBtn.appendTo('#addRow');

document.getElementById('addRow').addEventListener('click', function() {
   var record={ TaskID: 10, 
               TaskName: 'New Added Record',
 			   StartDate: new Date('04/02/2019'), 
			   Duration: 3,
			   Progress: 50
	    };
    ganttChart.editModule.addRecord(record,'Below',2);
});