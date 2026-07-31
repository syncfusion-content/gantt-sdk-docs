import { Gantt } from '@syncfusion/ej2-gantt';
import { Tooltip, TooltipEventArgs } from '@syncfusion/ej2-popups';
import { GanttData } from './datasource.ts';

let columnDescriptions: { [key: string]: string } = {
  'Task ID': 'Unique identifier for the task.',
  'Task Name': 'Name of the task.',
  'Start Date': 'The date when the task starts.',
  'Duration': 'Number of days the task will take.',
  'Progress': 'Completion percentage of the task.'
};

let tooltipObj: Tooltip = new Tooltip({
  target: '.e-headertext',
  beforeRender: (args: TooltipEventArgs) => {
    let headerText: string = (args.target as HTMLElement).innerText;
    let description: string = columnDescriptions[headerText];
    if (description) {
      tooltipObj.content = headerText + ': ' + description;
    }
  }
});
tooltipObj.appendTo('#Tooltip');

let gantt: Gantt = new Gantt({
  dataSource: GanttData,
  height: '450px',
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  },
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' }
  ]
});

gantt.appendTo('#Gantt');