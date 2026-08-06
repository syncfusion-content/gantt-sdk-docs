import { Gantt } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from './datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '430px',
    enablePersistence: true,
    splitterSettings: { columnIndex: 2 },
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskID', width: 90, textAlign: 'Right' },
        {
            field: 'TaskName',
            width: 290,
            headerTemplate: '<div style="width:20px;height:20px;">Tasks Name</div>'
        },
        { field: 'StartDate', width: 390, format: 'yMd', textAlign: 'Right' },
        { field: 'Duration', width: 120, textAlign: 'Right' },
        { field: 'Progress', width: 120, textAlign: 'Right' }
    ]
});

gantt.appendTo('#Gantt');

let restoreBtn: Button = new Button();
restoreBtn.appendTo('#restore');

document.getElementById('restore')!.addEventListener('click', () => {
    const savedProperties = JSON.parse(gantt.getPersistData());
    const gridColumnsState = [...(gantt as any).ganttColumns];

    savedProperties.columns.forEach((col: any) => {
        const state = gridColumnsState.find((c: any) => c.field === col.field);
        if (state) {
            col.headerText = 'Text Changed';
            col.template = state.template;
            col.headerTemplate = state.headerTemplate;
        }
    });

    (gantt as any).treeGrid.setProperties(savedProperties);
});