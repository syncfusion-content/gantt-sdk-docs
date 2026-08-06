import { Gantt, Selection, Filter, Toolbar, IQueryTaskbarInfoEventArgs } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Selection, Filter, Toolbar);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '430px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID'
    },
    queryTaskbarInfo: (args: IQueryTaskbarInfoEventArgs) => {
        let record: any = args.data;

        if (record.Progress === 50) {
            args.progressBarBgColor = 'red';
        } else if (record.Progress === 70) {
            args.progressBarBgColor = 'yellow';
        } else if (record.Progress === 80) {
            args.progressBarBgColor = 'lightgreen';
        }
    }
});

gantt.appendTo('#Gantt');