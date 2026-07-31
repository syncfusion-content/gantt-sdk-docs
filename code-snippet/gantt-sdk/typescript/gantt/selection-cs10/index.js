ej.gantt.Gantt.Inject(ej.gantt.Selection);

var ganttChart = new ej.gantt.Gantt({
       dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    selectionSettings: {
        mode: 'Row',
        type: 'Multiple'
    },
    dataBound: function(args) {
        var rowIndexes =[];          
        ganttChart.treeGrid.grid.dataSource.forEach((data,index)=>{
		if (data.TaskID === 3 || data.TaskID === 4){
               rowIndexes.push(index);
           }
		});
        ganttChart.selectRows(rowIndexes);
    }
    });
ganttChart.appendTo('#Gantt');