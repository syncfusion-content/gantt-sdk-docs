
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    GanttComponent,
    ColumnsDirective,
    ColumnDirective,
    Inject,
    TaskFieldsModel,
    EditSettingsModel,
    Edit,
    Toolbar
} from '@syncfusion/ej2-react-gantt';

import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { ganttData } from './datasource';

function App() {

    let ganttObj: GanttComponent | null = null;
    let elem: HTMLElement | null = null;
    let dropdownlistObj: DropDownList;

    const taskSettings: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID',
        notes: 'info'
    };

    const editSettings: EditSettingsModel = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    };

    const toolbar: string[] = [
        'Add', 'Edit', 'Update', 'Delete',
        'Cancel', 'ExpandAll', 'CollapseAll',
        'Indent', 'Outdent'
    ];

    const projectStartDate: Date = new Date('03/25/2024');
    const projectEndDate: Date = new Date('07/28/2024');

    const editParams: any = {
        create: () => {
            elem = document.createElement('input');
            return elem;
        },
        read: () => {
            return dropdownlistObj.value;
        },
        destroy: () => {
            dropdownlistObj.destroy();
        },
        write: (args: any) => {
            dropdownlistObj = new DropDownList({
                dataSource: (ganttObj as GanttComponent).treeGrid.grid.dataSource,
                fields: { value: 'TaskName' },
                value: args.rowData[args.column.field],
                floatLabelType: 'Auto'
            });
            dropdownlistObj.appendTo(elem as HTMLElement);
        }
    };

    return (
        <GanttComponent
            ref={(gantt: GanttComponent) => (ganttObj = gantt)}
            height="430px"
            dataSource={ganttData}
            taskFields={taskSettings}
            editSettings={editSettings}
            toolbar={toolbar}
            projectStartDate={projectStartDate}
            projectEndDate={projectEndDate}
        >
            <ColumnsDirective>
                <ColumnDirective field="TaskID" headerText="Task ID" width={80} />
                <ColumnDirective field="TaskName" headerText="TaskName" width={250} edit={editParams} />
                <ColumnDirective field="StartDate" headerText="Start Date" width={150} textAlign="Right" format="yMd" type="date" />
            </ColumnsDirective>

            <Inject services={[Edit, Toolbar]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));