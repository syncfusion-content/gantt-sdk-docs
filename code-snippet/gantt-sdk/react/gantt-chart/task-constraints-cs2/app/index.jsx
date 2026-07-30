import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, ColumnsDirective, ColumnDirective, Selection, Toolbar, DayMarkers, Edit } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
    const getConstraintText = (value) => {
        const map = {
            0: "As Soon As Possible",
            1: "As Late As Possible",
            2: "Must Start On",
            3: "Must Finish On",
            4: "Start No Earlier Than",
            5: "Start No Later Than",
            6: "Finish No Earlier Than",
            7: "Finish No Later Than",
        };
        const numValue = typeof value === "string" ? parseInt(value) : value;
        return map[numValue] || "Unknown";
    };
    const taskFields = {
        id: "TaskID",
        name: "TaskName",
        startDate: "StartDate",
        endDate: "EndDate",
        duration: "Duration",
        progress: "Progress",
        constraintType: "ConstraintType",
        constraintDate: "ConstraintDate",
        dependency: "Predecessor",
        parentID: "parentID",
        notes: "info",
    };
    const editSettings = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true,
    };
    const toolbar = [
        "Add",
        "Edit",
        "Update",
        "Delete",
        "Cancel",
        "ExpandAll",
        "CollapseAll",
        "Indent",
        "Outdent",
    ];
    const RightLabelTemplate = (props) => {
        return <span>{getConstraintText(props.ganttProperties.constraintType)}</span>;
    };
    const templateRight = RightLabelTemplate;
    const labelSettings = {
        leftLabel: "TaskName",
        rightLabel: templateRight.bind(this)
    };
    const splitterSettings = {
        columnIndex: 4,
    };
    const projectStartDate = new Date("03/25/2025");
    const projectEndDate = new Date("09/28/2025");
    const eventMarkers = [
        { day: new Date("03/25/2025"), label: "Project StartDate" },
        { day: new Date("08/31/2025"), label: "Project EndDate" },
    ];
    const actionBegin = (args) => {
        if (args.requestType === 'validateTaskViolation') {
            args.validateMode.respectMustStartOn = true
        }
    };
    return (
        <div className="control-section">
            <GanttComponent
                id="Constraint"
                dataSource={data}
                taskFields={taskFields}
                editSettings={editSettings}
                toolbar={toolbar}
                allowSelection={true}
                actionBegin={actionBegin.bind(this)}
                gridLines="Both"
                highlightWeekends={true}
                height="450px"
                treeColumnIndex={1}
                labelSettings={labelSettings}
                splitterSettings={splitterSettings}
                projectStartDate={projectStartDate}
                projectEndDate={projectEndDate}
                eventMarkers={eventMarkers}
            >
                <ColumnsDirective>
                    <ColumnDirective field="TaskID" visible={false} />
                    <ColumnDirective field="TaskName" headerText="Job Name" width="200" clipMode="EllipsisWithTooltip" />
                    <ColumnDirective field="StartDate" />
                    <ColumnDirective field="Duration" />
                    <ColumnDirective field="ConstraintType" width="180" />
                    <ColumnDirective field="ConstraintDate" />
                    <ColumnDirective field="EndDate" />
                    <ColumnDirective field="Predecessor" />
                    <ColumnDirective field="Progress" />
                </ColumnsDirective>
                <Inject services={[Edit, Selection, Toolbar, DayMarkers]} />
            </GanttComponent>
        </div>
    )
};
ReactDOM.render(<App />, document.getElementById('root'));