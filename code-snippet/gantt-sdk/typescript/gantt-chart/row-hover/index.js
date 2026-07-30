var ganttChart = new ej.gantt.Gantt({ 
    dataSource: GanttData,
    height: '430px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
        { field: 'TaskName', headerText: 'Task Name', textAlign: 'Left', width: 290 },
        { field: 'Progress', headerText: 'Progress', textAlign: 'Right', width: 120 },
        { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', width: 120 },
        { field: 'Duration', headerText: 'Duration', textAlign: 'Right', width: 90 }
    ],
    treeColumnIndex: 1,
    splitterSettings: {
        position: '50%'
    },
    dataBound: () => {
        const ganttElement = document.getElementById('Gantt');
        ganttElement.addEventListener('mouseover', (mouseargs) => {
            let target = null;
            if (
                mouseargs.target &&
                (mouseargs.target.classList.contains('e-rowcell') ||
                mouseargs.target.classList.contains('e-chart-row-cell'))
            ) {
                target = mouseargs.target;
            }
            if (target) {
                const buttonElement = document.createElement('button');
                buttonElement.textContent = 'Row details';
                const tooltip = new ej.popups.Tooltip({
                    content: buttonElement,
                    width: '100px',
                    height: '40px',
                    opensOn: 'Hover'
                }, target);
                buttonElement.addEventListener('click', () => {
                    const rowElement = target.closest('.e-row') || target.closest('.e-chart-row');
                    if (rowElement) {
                        const rowIndex = rowElement.getAttribute('aria-rowindex');
                        if (rowIndex !== null && ganttChart) {
                            const rowInfo = ganttChart.treeGrid.getRowInfo(target);
                            const rowData = rowInfo.rowData;
                            const messageElement = document.getElementById('message');
                            if (rowData) {
                                messageElement.textContent = `Button clicked for Task ID: ${rowInfo.rowData['TaskID']}`;
                            }
                        }
                    }
                });
            }
        });
    }
});
ganttChart.appendTo('#Gantt');