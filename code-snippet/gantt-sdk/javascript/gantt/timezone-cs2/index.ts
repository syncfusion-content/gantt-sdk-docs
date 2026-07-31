import { Gantt, Edit, Selection, ActionCompleteArgs } from '@syncfusion/ej2-gantt';
import { data } from './datasource.ts';

Gantt.Inject(Edit, Selection);

let gantt: Gantt = new Gantt({
  height: '450px',
  dataSource: data,
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID'
  },
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  timelineSettings: {
    timelineUnitSize: 65,
    topTier: { unit: 'Day', format: 'MMM dd, yyyy' },
    bottomTier: { unit: 'Hour', format: 'hh:mm a' }
  },
  dayWorkingTime: [{ from: 0, to: 24 }],
  timezone: 'America/New_York',
  durationUnit: 'Hour',
  dateFormat: 'hh:mm a',
  includeWeekend: true,
  actionComplete: (args: ActionCompleteArgs) => {
    if (args.action === 'TaskbarEditing') {
      console.log((args.data as any).ganttProperties.startDate);
    }
  }
});

gantt.appendTo('#Gantt');