


import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height:'450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    timelineSettings: {
        timelineUnitSize: 50,
        topTier: {
            unit: "Month",
            format: "MMM dd, y"
        },
        bottomTier: {
            unit: "Day",
            formatter: date => {
                let presentDate = new Date(
                    date.getFullYear(),
                    date.getMonth(),
                    date.getDate()
                );
                var start = new Date(presentDate.getFullYear(), 0, 0);
                var diff = Number(presentDate) - Number(start);
                var oneDay = 1000 * 60 * 60 * 24;
                var day = Math.floor(diff / oneDay);
                return day;
            }
          }
    },
    projectStartDate: new Date("01/01/2019"),
    projectEndDate: new Date("01/01/2020")
    });

    gantt.appendTo('#Gantt');