import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    GanttComponent, Inject, EditSettingsModel, Selection, Edit,
    Toolbar, ContextMenu as GanttContextMenu, TaskFieldsModel
} from '@syncfusion/ej2-react-gantt';

import { ContextMenuComponent, MenuItemModel } from '@syncfusion/ej2-react-navigations';
import { data } from './datasource';

function App() {

    const taskFields: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    const editSettings: EditSettingsModel = {
        allowAdding: true
    };

    const toolbar: string[] = ['Add'];

    const menuItems: MenuItemModel[] = [
        { text: 'Bottom' },
        { text: 'Above' },
        { text: 'Below' },
        { text: 'Child' },
        { text: 'Top' }
    ];

    let ganttInstance: any = null;
    let contextMenuObj: any = null;

    function select(args: any) {
        if (args.item.text === "Bottom") {
            ganttInstance.editSettings.newRowPosition = "Bottom";
            ganttInstance.openAddDialog();
        } else if (args.item.text === "Above") {
            if (ganttInstance.selectedRowIndex == -1) {
                alert("Please select any row");
            } else {
                ganttInstance.editSettings.newRowPosition = "Above";
                ganttInstance.openAddDialog();
            }
        } else if (args.item.text === "Below") {
            if (ganttInstance.selectedRowIndex == -1) {
                alert("Please select any row");
            } else {
                ganttInstance.editSettings.newRowPosition = "Below";
                ganttInstance.openAddDialog();
            }
        } else if (args.item.text === "Child") {
            if (ganttInstance.selectedRowIndex == -1) {
                alert("Please select any row");
            } else {
                ganttInstance.editSettings.newRowPosition = "Child";
                ganttInstance.openAddDialog();
            }
        } else if (args.item.text === "Top") {
            ganttInstance.editSettings.newRowPosition = "Top";
            ganttInstance.openAddDialog();
        }
    }

    function toolbarClick(args: any) {
        if (args.item.id === 'ganttDefault_add') {
            contextMenuObj.open(40, 20);
        }
    }

    return (
        <div>
            <ContextMenuComponent
                id="contextmenu"
                items={menuItems}
                select={select}
                ref={(scope) => { contextMenuObj = scope; }}
            />

            <GanttComponent
                id="ganttDefault"
                height="430px"
                dataSource={data}
                taskFields={taskFields}
                editSettings={editSettings}
                toolbar={toolbar}
                toolbarClick={toolbarClick}
                ref={(g) => { ganttInstance = g; }}>
                <Inject services={[Selection, Edit, Toolbar, GanttContextMenu]} />
            </GanttComponent>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));