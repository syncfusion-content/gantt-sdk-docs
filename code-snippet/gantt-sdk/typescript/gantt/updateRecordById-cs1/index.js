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
		   allowEditing: true
          }
     });
ganttChart.appendTo('#Gantt');

var updateBtn= new ej.buttons.Button();
updateBtn.appendTo('#updateRecord');

document.getElementById('updateRecord').addEventListener('click', () => {
    var data={ 
	   TaskID: 3,
	   TaskName: 'Updated by index value',
	   StartDate: new Date('04/02/2019'), 
	   Duration: 4,
	   Progress: 50
      };
	ganttChart.updateRecordByID(data);
	  
});