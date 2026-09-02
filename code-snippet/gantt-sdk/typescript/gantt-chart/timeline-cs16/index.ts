import { Gantt, TimelineSettingsModel, TaskFieldsModel } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

const taskFields: TaskFieldsModel = {
    id: 'TaskID',
    parentID: 'ParentID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress'
};

const getWeekNumber = (date: Date): number => {
    const currentDate: Date = new Date(date);
    const firstDay: Date = new Date(currentDate.getFullYear(), 0, 1);
    const days: number = Math.floor((currentDate.getTime() - firstDay.getTime()) / 86400000);
    return Math.ceil((days + firstDay.getDay() + 1) / 7);
};

const timelineSettings: TimelineSettingsModel = {
    topTier: {
        unit: 'Week',
        formatter: (date: Date): string => `Week ${getWeekNumber(date)}`
    },
    bottomTier: {
        unit: 'Day',
        count: 1
    }
};

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: taskFields,
    timelineSettings: timelineSettings,
    projectStartDate: new Date('2019-04-01'),
    projectEndDate: new Date('2019-10-01')
});

gantt.appendTo('#Gantt');