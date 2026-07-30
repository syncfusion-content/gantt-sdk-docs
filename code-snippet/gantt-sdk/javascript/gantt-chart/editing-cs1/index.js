ej.gantt.Gantt.Inject(ej.gantt.Edit,ej.gantt.Toolbar);

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
		toolbar: ['Delete'],
	    editSettings: {
          allowDeleting:true,
		  showDeleteConfirmDialog:true
         }
     });
ganttChart.appendTo('#Gantt');