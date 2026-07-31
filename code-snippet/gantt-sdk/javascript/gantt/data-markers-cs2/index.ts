import { Gantt, Toolbar, Edit } from '@syncfusion/ej2-gantt';
import { data } from './datasource.ts';

Gantt.Inject(Toolbar, Edit);

let gantt: Gantt = new Gantt({
    dataSource: data,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
        indicators: 'Indicators'
    },
    editSettings: {
        allowEditing: true
    },
    toolbar: ['Edit'],
    dataBound: () => {
        const elements = document.querySelectorAll('.e-indicator-span');
        elements.forEach((el) => {
            el.addEventListener('click', (event: Event) => {
                const indicator = event.target as HTMLElement;
                const taskbar = indicator.closest('.e-chart-row') as HTMLElement;

                if (taskbar) {
                    const rowIndex = Number(taskbar.getAttribute('data-rowindex'));
                    const record = gantt.flatData[rowIndex];
                    if (record.ganttProperties.taskId) {
                        gantt.openEditDialog(record.ganttProperties.taskId);
                    }
                }
            });
        });
    }
});

gantt.appendTo('#Gantt');