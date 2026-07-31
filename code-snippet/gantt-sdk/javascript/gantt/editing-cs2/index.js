ej.gantt.Gantt.Inject(ej.gantt.Edit,ej.gantt.Toolbar);

var ganttChart = new ej.gantt.Gantt({
        dataSource: GanttData,
		height:'450px',
		taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
			resourceInfo: 'resources',
            duration: 'Duration',
            progress: 'Progress',
			notes: 'info',
			dependency: 'Predecessor',
            parentID: 'ParentID'
        },
		toolbar: ['Add','Edit','Delete','Cancel'],
		editDialogFields: [
                { type: 'General', headerText: 'General'},
                { type: 'Dependency' },
                { type: 'Resources' },
				{ type: 'Notes' }
               ],
	    addDialogFields: [
                { type: 'General', headerText: 'General'},
                { type: 'Dependency' }
			  ],
		columns: [
            { field: 'TaskID', headerText: 'Task ID', width: '100' },
            { field: 'TaskName', headerText: 'Task Name', width: '250' },
			{ field: 'isParent', headerText: 'Custom Column', width: '200' },
            { field: 'resources', headerText: 'Resources', width: '200' },
			{ field: 'StartDate', headerText: 'Start Date', width: '150' },
            { field: 'Duration', headerText: 'Duration', width: '150' },
            { field: 'Progress', headerText: 'Progress', width: '150' },
        ],
		resourceFields: {
            id: 'resourceId',
            name: 'resourceName',
        },
        resources: ProjectResources,
		editSettings: {
		   allowAdding:true,
		   allowEditing:true,
		   mode:'Dialog',
           allowTaskbarEditing:true
         }
});
ganttChart.appendTo('#Gantt');