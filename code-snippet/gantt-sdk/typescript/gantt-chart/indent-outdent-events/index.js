ej.gantt.Gantt.Inject(ej.gantt.Edit,ej.gantt.Toolbar,ej.gantt.Selection);

var ganttChart = new ej.gantt.Gantt({
    dataSource: ganttData,
    height: '420px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    toolbar: ['Indent', 'Outdent'],
    editSettings: {
        allowEditing: true
    },
    splitterSettings: {
      position: '75%'
    },    
    actionComplete: (args) => {
        const taskData = args.data;
        const messageEl = document.getElementById('message')
        if (args.requestType === 'outdented') {
            const id = taskData[0].TaskID;
        if (messageEl) messageEl.textContent = `Task ID ${id} has been outdented`;
        } else if (args.requestType === 'indented') {
            const id = taskData[0].TaskID;
        if (messageEl) messageEl.textContent = `Task ID ${id} has been indented`;
        }
    }
});
ganttChart.appendTo('#Gantt');