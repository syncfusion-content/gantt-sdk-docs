import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

function getTooltipData(startDate: Date, endDate: Date, tier: string) {
    const gantt: any = (document.getElementsByClassName('e-gantt')[0] as any).ej2_instances[0];
    let activeTasks: any;
    if (tier === 'topTier') {
        activeTasks = gantt.currentViewData.filter(function (task: any) {
            const taskStart = new Date(task.StartDate);
            const taskEnd = new Date(task.EndDate);
            taskStart.setHours(0, 0, 0, 0);
            taskEnd.setHours(0, 0, 0, 0);
            return taskStart >= startDate && taskEnd <= endDate;
        });
    }
    else {
        activeTasks = gantt.currentViewData.filter(function (task: any) {
            const taskStart = new Date(task.StartDate);
            const taskEnd = new Date(task.EndDate);
            taskStart.setHours(0, 0, 0, 0);
            taskEnd.setHours(0, 0, 0, 0);
            return taskStart.getTime() === startDate.getTime() && taskEnd.getTime() === endDate.getTime();
        });
    }
    const milestones = activeTasks.filter(function (task: any) {
        return task.Duration === 0;
    });
    const totalProgress = activeTasks.reduce(function (acc: number, task: any) {
        return acc + (task.Progress ? task.Progress : 0);
    }, 0);
    const overallProgress = (activeTasks.length > 0) ? (totalProgress / activeTasks.length).toFixed(2) : 0;
    return {
        activeTasks: activeTasks.length,
        milestones: milestones.length,
        overallProgress: overallProgress
    };
}
(<{ topTierTooltip?: Function }>window).topTierTooltip = (value: string, date: string, tier: string) => {
    const gantt: any = (document.getElementsByClassName('e-gantt')[0] as any).ej2_instances[0];
    let endDate: Date;
    const startdate: Date = new Date(date);
        endDate = new Date(startdate.getTime());
        endDate.setDate(startdate.getDate() + 6);
    
    const data = getTooltipData(startdate, endDate, tier);
    return generateTooltipMarkup(value, data);
}
function generateTooltipMarkup(label: string, tooltipData: any) {
    const themeIsDark : boolean = document.body.classList.contains('tailwind3-dark') ||
    document.body.classList.contains('fluent2-dark') ||
    document.body.classList.contains('material3-dark') ||
    document.body.classList.contains('bootstrap5.3-dark') ||
    document.body.classList.contains('fluent2-highcontrast') ||
    document.body.classList.contains('highcontrast') ||
    document.body.classList.contains('fluent2-dark');

    var borderColor : string = themeIsDark ?  'black' : 'white';
    return (
        '<div style="padding: 5px;">' +
        '<div style="padding-bottom: 9px; text-align: center;border-bottom: 2px solid ' + borderColor + ';">' +
        '<span style="font-weight: bold; font-size: 14px;">' + label + '</span>' +
        '</div>' +
        '<div style="display: flex; padding-bottom: 5px;padding-top: 9px"">' +
        '<span style="font-weight: bold;">Active Tasks:</span>' +
        '<span style="padding-left: 2px;">' + tooltipData.activeTasks + '</span>' +
        '</div>' +
        '<div style="display: flex; padding-bottom: 5px;">' +
        '<span style="font-weight: bold;">Milestones:</span>' +
        '<span style="padding-left: 2px;">' + tooltipData.milestones + '</span>' +
        '</div>' +
        '<div style="display: flex; padding-bottom: 5px;">' +
        '<span style="font-weight: bold;">Overall Progress:</span>' +
        '<span style="padding-left: 2px;">' + tooltipData.overallProgress + '</span>' +
        '</div>' +
        '</div>'
    );
}
(<{ bottomTierTooltip?: Function }>window).bottomTierTooltip = (date: string, tier: string) => {
    const gantt: any = (document.getElementsByClassName('e-gantt')[0] as any).ej2_instances[0];
    const startdate: Date = new Date(date);
    let endDate: Date;
        endDate = new Date(startdate.getTime());
    
    const data = getTooltipData(startdate, endDate, tier);
    return generateTooltipMarkup(date, data);
}


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
    tooltipSettings: {
        showTooltip: true,
        timeline: '#timelinetemplateTooltip'
    }
});
gantt.appendTo('#Gantt');