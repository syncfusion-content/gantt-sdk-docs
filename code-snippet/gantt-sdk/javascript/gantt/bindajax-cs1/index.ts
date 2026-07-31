import { Gantt, Toolbar, ExcelExport, Selection } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';

Gantt.Inject(Toolbar, ExcelExport, Selection);

let gantt: Gantt = new Gantt({
    dataSource: [],
    height: '430px',
    projectStartDate: new Date('02/24/2021'),
    projectEndDate: new Date('07/20/2021'),
    taskFields: {
        id: 'TaskId',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'SubTasks'
    },
    columns: [
        { field: 'TaskId', headerText: 'Task ID', width: 100 },
        { field: 'TaskName', headerText: 'Task Name', width: 150 },
        { field: 'StartDate', headerText: 'Start Date', width: 150 },
        { field: 'Duration', headerText: 'Duration', width: 150 },
        { field: 'Progress', headerText: 'Progress', width: 150 }
    ],
    toolbar: ['ExcelExport'],
    allowSelection: true
});

gantt.appendTo('#Gantt');

let bindBtn: Button = new Button();
bindBtn.appendTo('#bindData');

document.getElementById('bindData')!.addEventListener('click', () => {
    gantt.showSpinner();

    fetch('https://services.syncfusion.com/angular/production/api/GanttData')
        .then(res => res.json())
        .then((data: any) => {
            gantt.hideSpinner();
            gantt.dataSource = data.Items;
            gantt.refresh();
        });
});