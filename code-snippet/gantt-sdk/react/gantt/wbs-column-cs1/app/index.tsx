import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Selection, ColumnsDirective, ColumnDirective, Toolbar, DayMarkers, Edit, Filter, Sort, ContextMenu, EventMarkersDirective, EventMarkerDirective } from '@syncfusion/ej2-react-gantt';
import { WBSData } from './datasource';
function App() {
    const taskFields = {
        id: "TaskID",
        name: "TaskName",
        startDate: "StartDate",
        endDate: "EndDate",
        duration: "Duration",
        progress: "Progress",
        dependency: "Predecessor",
        parentID: 'ParentID'
    };

    let ganttInstance;
    const eventMarkerDay1 = new Date('04/02/2024');
    const editSettings = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true,
    };

    const toolbar = ["Add", "Edit", "Update", "Delete", "Cancel", "ExpandAll", "CollapseAll"];

    const timelineSettings = {
        showTooltip: true,
        topTier: {
            unit: "Week",
            format: "dd/MM/yyyy",
        },
        bottomTier: {
            unit: "Day",
            count: 1,
        },
    };

    const labelSettings = {
        taskLabel: '${Progress}%'
    };

    const projectStartDate = new Date("03/31/2024");
    const projectEndDate = new Date("05/30/2024");

    const splitterSettings = {
        columnIndex: 4
    };

    const selectionSettings = {
        mode: "Row",
        type: "Single",
        enableToggle: false,
    };

    const tooltipSettings = {
        showTooltip: true,
    };

    const filterSettings = {
        type: "Menu",
    };

    return <GanttComponent id="EnableWbs" taskFields={taskFields} ref={ganttInstance} toolbar={toolbar} treeColumnIndex={2} dataSource={WBSData} allowSorting={true} enableContextMenu={true} enableWBS={true} enableAutoWbsUpdate={true} editSettings={editSettings} allowSelection={true} allowPdfExport={true} splitterSettings={splitterSettings} selectionSettings={selectionSettings} tooltipSettings={tooltipSettings} filterSettings={filterSettings} timelineSettings={timelineSettings} highlightWeekends={true} allowFiltering={true} gridLines={"Both"} labelSettings={labelSettings} taskbarHeight={20} rowHeight={40} height={"550px"} allowUnscheduledTasks={true} projectStartDate={projectStartDate} projectEndDate={projectEndDate}>
        <ColumnsDirective>
            <ColumnDirective field="TaskID" visible={false} />
            <ColumnDirective field="WBSCode" width='150px' />
            <ColumnDirective field="TaskName" headerText="Task Name" allowReordering={false} width='260px' />
            <ColumnDirective field="StartDate" headerText="Start Date" width='140px' />
            <ColumnDirective field="WBSPredecessor" headerText="WBS Predecessor" width='190px' />
            <ColumnDirective field="Duration" headerText="Duration" allowEditing={false} width='130px' />
            <ColumnDirective field="Progress" headerText="Progress" />
        </ColumnsDirective>
        <EventMarkersDirective>
            <EventMarkerDirective day={eventMarkerDay1} label='Project Initiation'></EventMarkerDirective>
        </EventMarkersDirective>
        <Inject services={[Selection, DayMarkers, Toolbar, Edit, Filter, Sort, ContextMenu]} />
    </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));