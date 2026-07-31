import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

let gantt: Gantt = new Gantt({
  dataSource: GanttData,
  height: "450px",
  taskFields: {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    endDate: "EndDate",
    duration: "Duration",
    progress: "Progress",
    parentID: 'ParentID',
    segmentId: "segmentId"
  },
  segmentData: [
    { segmentId: 2, StartDate: new Date("04/02/2019"), Duration: 2 },
    { segmentId: 2, StartDate: new Date("04/04/2019"), Duration: 2 },
    { segmentId: 4, StartDate: new Date("04/02/2019"), Duration: 2 },
    { segmentId: 4, StartDate: new Date("04/04/2019"), Duration: 2 }
  ],
});

gantt.appendTo('#Gantt');