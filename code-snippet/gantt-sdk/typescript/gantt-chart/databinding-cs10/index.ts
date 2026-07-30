import { Gantt } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { virtualData } from './datasource.ts';
import { updateData } from './updateData.ts';

let gantt: Gantt = new Gantt({
    dataSource: virtualData,
    height: '450px',
    enableVirtualization: true,
    projectStartDate: new Date('04/01/2024'),
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'parentID',
        dependency: 'Predecessor'
    },
    splitterSettings: {
        columnIndex: 1
    }
});

gantt.appendTo('#Gantt');

let updateBtn: Button = new Button();
updateBtn.appendTo('#updateDataSource');

document.getElementById('updateDataSource')!.addEventListener('click', () => {
    let otherinfo = {
        projectStartDate: new Date('01/01/2024'),
        projectEndDate: new Date('01/01/2025')
    };
    gantt.updateDataSource(updateData, otherinfo);
});