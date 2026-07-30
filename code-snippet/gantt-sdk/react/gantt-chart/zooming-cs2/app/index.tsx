import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject } from '@syncfusion/ej2-react-gantt';
import { Toolbar, Selection, Filter } from '@syncfusion/ej2-react-gantt';
import { TaskFieldsModel, ZoomTimelineSettings } from '@syncfusion/ej2-gantt';
import { data } from './datasource';

function App() {
    let ganttRef: GanttComponent | null = null;

    const taskSettings: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    const toolbar: string[] = ['ZoomIn', 'ZoomOut', 'ZoomToFit'];

    const customZoomingLevels: ZoomTimelineSettings[] = [
        {
            topTier: { unit: 'Month', format: 'MMM, yy', count: 1 },
            bottomTier: { unit: 'Week', format: 'dd', count: 1 },
            timelineUnitSize: 33, level: 0, timelineViewMode: 'Month', weekStartDay: 0,
            updateTimescaleView: true, showTooltip: true
        },
        {
            topTier: { unit: 'Month', format: 'MMM, yyyy', count: 1 },
            bottomTier: { unit: 'Week', format: 'dd MMM', count: 1 },
            timelineUnitSize: 66, level: 1, timelineViewMode: 'Month', weekStartDay: 0,
            updateTimescaleView: true, showTooltip: true
        },
        {
            topTier: { unit: 'Month', format: 'MMM, yyyy', count: 1 },
            bottomTier: { unit: 'Week', format: 'dd MMM', count: 1 },
            timelineUnitSize: 99, level: 2, timelineViewMode: 'Month', weekStartDay: 0,
            updateTimescaleView: true, showTooltip: true
        },
        {
            topTier: { unit: 'Week', format: 'MMM dd, yyyy', count: 1 },
            bottomTier: { unit: 'Day', format: 'd', count: 1 },
            timelineUnitSize: 33, level: 3, timelineViewMode: 'Week', weekStartDay: 0,
            updateTimescaleView: true, showTooltip: true
        },
        {
            topTier: { unit: 'Week', format: 'MMM dd, yyyy', count: 1 },
            bottomTier: { unit: 'Day', format: 'd', count: 1 },
            timelineUnitSize: 66, level: 4, timelineViewMode: 'Week', weekStartDay: 0,
            updateTimescaleView: true, showTooltip: true
        },
        {
            topTier: { unit: 'Day', format: 'E dd yyyy', count: 1 },
            bottomTier: { unit: 'Hour', format: 'hh a', count: 12 },
            timelineUnitSize: 66, level: 5, timelineViewMode: 'Day', weekStartDay: 0,
            updateTimescaleView: true, showTooltip: true
        },
        {
            topTier: { unit: 'Day', format: 'E dd yyyy', count: 1 },
            bottomTier: { unit: 'Hour', format: 'hh a', count: 6 },
            timelineUnitSize: 99, level: 6, timelineViewMode: 'Day', weekStartDay: 0,
            updateTimescaleView: true, showTooltip: true
        }
    ];

    const onDataBound = () => {
        if (ganttRef) {
            ganttRef.zoomingLevels = customZoomingLevels;
        }
    };

    return (
        <GanttComponent
            id="ganttDefault"
            height="430px"
            dataSource={data}
            taskFields={taskSettings}
            toolbar={toolbar}
            ref={gantt => ganttRef = gantt}
            dataBound={onDataBound}
        >
            <ColumnsDirective>
                <ColumnDirective field="TaskID" headerText="Task ID" width="100" />
                <ColumnDirective field="TaskName" headerText="Task Name" width="150" />
                <ColumnDirective field="StartDate" headerText="Start Date" width="150" />
                <ColumnDirective field="Duration" headerText="Duration" width="150" />
                <ColumnDirective field="Progress" headerText="Progress" width="150" />
            </ColumnsDirective>
            <Inject services={[Toolbar, Selection, Filter]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));