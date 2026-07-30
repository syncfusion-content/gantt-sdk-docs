import * as React from "react";
import * as ReactDOM from "react-dom";
import { GanttComponent, Inject, Selection, ContextMenu, Edit, Sort, Resize } from "@syncfusion/ej2-react-gantt";

import { data } from "./datasource";

function App() {

    let ganttInstance = null;

    const taskSettings = {
        id: "TaskID",
        name: "TaskName",
        startDate: "StartDate",
        duration: "Duration",
        progress: "Progress",
        dependency: "Predecessor",
        parentID: "ParentID"
    };

    const editSettings = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true
    };

    const contextMenuItems = [
        'AutoFitAll', 'AutoFit', 'TaskInformation', 'DeleteTask', 'Save', 'Cancel', 'SortAscending', 'SortDescending', 'Add', 'DeleteDependency', 'Convert', { text: 'Collapse the Row', target: '.e-content', id: 'collapserow' }, { text: 'Expand the Row', target: '.e-content', id: 'expandrow' }, { text: 'Hide Column', target: '.e-gridheader', id: 'hidecols' }
    ];

    function contextMenuClick(args) {
        const record = args.rowData;

        if (args.item.id === 'collapserow') {
            ganttInstance.collapseByID(Number(record.ganttProperties.taskId));
        }
        if (args.item.id === 'expandrow') {
            ganttInstance.expandByID(Number(record.ganttProperties.taskId));
        }
        if (args.item.id === 'hidecols') {
            ganttInstance.hideColumn(args.column.headerText);
        }
    }

    function contextMenuOpen(args) {
        const record = args.rowData;

        if (args.type !== 'Header') {
            if (!record.hasChildRecords) {
                args.hideItems.push("Collapse the Row");
                args.hideItems.push("Expand the Row");
            } else {
                if (record.expanded) {
                    args.hideItems.push("Expand the Row");
                } else {
                    args.hideItems.push("Collapse the Row");
                }
            }
        }
    }

    return (
        <GanttComponent
            height="430px"
            dataSource={data}
            taskFields={taskSettings}
            enableContextMenu={true}
            contextMenuItems={contextMenuItems}
            allowSorting={true}
            allowResizing={true}
            editSettings={editSettings}
            contextMenuClick={contextMenuClick}
            contextMenuOpen={contextMenuOpen}
            ref={(g) => (ganttInstance = g)}
        >
            <Inject services={[Selection, ContextMenu, Edit, Sort, Resize]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));