import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '430px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    labelSettings: {
        leftLabel: 'TaskName'
    },
    projectStartDate: new Date('03/28/2019'),
    projectEndDate: new Date('04/18/2019'),
    taskbarTemplate: (props: any) => {
        let width: number = props.ganttProperties.width;
        let progress: number = props.ganttProperties.progress || 0;
        let progressWidth: number = (progress * width) / 100;

        return `
            <div class="e-gantt-child-taskbar-inner-div e-gantt-child-taskbar"
                style="height:22px;margin-top:-1px;width:${width}px">
                <div class="e-gantt-child-progressbar-inner-div e-gantt-child-progressbar"
                    style="height:100%;width:${progressWidth}px"></div>
                <span class="e-badge e-badge-secondary e-badge-notification e-badge-overlap">%</span>
            </div>`;
    }
});

gantt.appendTo('#Gantt');