import { Gantt } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from './datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '430px',
    enablePersistence: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 120 },
        { field: 'TaskName', headerText: 'Task Name', width: 150 },
        { field: 'StartDate', headerText: 'Start Date', width: 150 },
        { field: 'Duration', headerText: 'Duration', width: 150 },
        { field: 'Progress', headerText: 'Progress', width: 150 }
    ],
    dataBound: function () {
        const originalPersist = (this as any).addOnPersist;
        (this as any).addOnPersist = (keys: string[]) => {
            const filteredKeys = keys.filter(key => key !== 'columns');
            return originalPersist.call(this, filteredKeys);
        };
    }
});

gantt.appendTo('#Gantt');

let addBtn: Button = new Button();
addBtn.appendTo('#add');

let removeBtn: Button = new Button();
removeBtn.appendTo('#remove');

document.getElementById('add')!.addEventListener('click', () => {
    (gantt.columns as any).push({
        field: 'Progress',
        headerText: 'Progress',
        width: 100
    });
    gantt.refresh();
});

document.getElementById('remove')!.addEventListener('click', () => {
    (gantt.columns as any).pop();
    gantt.refresh();
});