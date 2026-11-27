import { Gantt, ProgressLine } from '@syncfusion/ej2-gantt';

Gantt.Inject(ProgressLine);

let gantt: Gantt = new Gantt({
    dataSource: [
        {
            TaskID: 1,
            TaskName: 'Planning',
            StartDate: new Date('04/01/2025'),
            Duration: 10,
            Progress: 50
        },
        {
            TaskID: 2,
            TaskName: 'Design',
            StartDate: new Date('04/02/2025'),
            Duration: 8,
            Progress: 25
        },
        {
            TaskID: 3,
            TaskName: 'Development',
            StartDate: new Date('04/04/2025'),
            Duration: 10,
            Progress: 10
        }
    ],
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress'
    },
    progressLine: {
        statusDate: new Date('04/08/2025'),
        lineColor: '#e3165b',
        lineWidth: 2
    }
});

gantt.appendTo('#Gantt');