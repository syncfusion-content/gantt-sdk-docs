import { Gantt } from '@syncfusion/ej2-gantt';

const ganttData: object[] = [
  { TaskID: 1, TaskName: 'Plan project', StartDate: new Date('04/03/2025'), Duration: 5, isManual: false },
  { TaskID: 2, TaskName: 'Develop feature', StartDate: new Date('04/03/2025'), Duration: 7, isManual: false },
  { TaskID: 3, TaskName: 'Test module', StartDate: new Date('03/31/2025'), Duration: 3, isManual: false }
];

const projectStartDate = new Date('04/01/2025');

let gantt: Gantt = new Gantt({
    dataSource: ganttData,
    height: '250px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        manual: 'isManual'
    },
    taskMode: 'Custom',
    dataBound:dataBound,
});

gantt.appendTo('#Gantt');

function dataBound() {
    const data = Array.isArray(gantt.dataSource) ? (gantt.dataSource as any[]) : [];
    data.forEach((task) => {
        if (!task.isManual && task.StartDate && new Date(task.StartDate) < projectStartDate) {
            task.isManual = true; // Switch to manual mode.
            const messageElement = document.getElementById('message');
            if (messageElement) {
                messageElement.textContent = `Task "${task.TaskName}" switched to manual mode as its start date is before project start date.`;
            }
       }
     });
}