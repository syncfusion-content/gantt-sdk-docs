import { Gantt, TaskFieldsModel } from '@syncfusion/ej2-gantt';
import { ComboBox, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { GanttData } from './datasource.ts';

const taskFields: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
};

const timelineOptions: object[] = [
    { Id: 'Week', Value: 'Week' },
    { Id: 'Day', Value: 'Day' },
    { Id: 'Month', Value: 'Month' }
];

const gantt: Gantt = new Gantt({
    height: '430px',
    dataSource: GanttData,
    taskFields,
    timelineSettings: { timelineViewMode: 'Week' }
});
gantt.appendTo('#Gantt');

const comboBox: ComboBox = new ComboBox({
    dataSource: timelineOptions,
    width: '200px',
    fields: { text: 'Value', value: 'Id' },
    index: 0,
    change: (args: ChangeEventArgs) => {
        gantt.timelineSettings.timelineViewMode = args.value as any;
        gantt.refresh();
    }
});
comboBox.appendTo('#timeline');