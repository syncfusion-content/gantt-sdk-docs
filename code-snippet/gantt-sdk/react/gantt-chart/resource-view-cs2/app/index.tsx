import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    GanttComponent,
    Inject,
    Edit,
    Selection,
    Toolbar,
    TaskFieldsModel,
    ResourceFieldsModel,
    EditSettingsModel,
    SplitterSettingsModel,
    LabelSettingsModel
} from '@syncfusion/ej2-react-gantt';
import { data, resources } from './datasource';
function App() {
    let ganttObj: any = null;
    const taskSettings: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        resourceInfo: 'resources',
        work: 'work',
        parentID: 'ParentID'
    };
    const resourceFields: ResourceFieldsModel = {
        id: 'resourceId',
        name: 'resourceName',
        unit: 'Unit',
        group: 'resourceGroup'
    };
    const editSettings: EditSettingsModel = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    };
    const columns: Object[] = [
        { field: 'TaskID', visible: false },
        { field: 'TaskName', headerText: 'Name', width: 250 },
        { field: 'work', headerText: 'Work' },
        { field: 'Progress' },
        { field: 'resourceGroup', headerText: 'Group' },
        { field: 'StartDate' },
        { field: 'Duration' }
    ];
    const toolbar: (string | object)[] = [
        'Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll',
        { text: 'Show/Hide Overallocation', tooltipText: 'Show/Hide Overallocation', id: 'showhidebar' }
    ];
    const labelSettings: LabelSettingsModel = {
        rightLabel: 'resources',
        taskLabel: 'Progress'
    };
    const splitterSettings: SplitterSettingsModel = { columnIndex: 3 };
    const projectStartDate = new Date('03/25/2019');
    const projectEndDate = new Date('07/28/2019');

    function toolbarClick(args: any) {
        if (args.item.id === 'showhidebar') {
            ganttObj.showOverAllocation = ganttObj.showOverAllocation ? false : true;
        }
    }

    return (
        <GanttComponent
            id="ganttDefault"
            ref={(g) => (ganttObj = g)}
            height="430px"
            dataSource={data}
            resources={resources}
            taskFields={taskSettings}
            resourceFields={resourceFields}
            editSettings={editSettings}
            columns={columns}
            toolbar={toolbar}
            labelSettings={labelSettings}
            splitterSettings={splitterSettings}
            allowSelection={true}
            allowResizing={true}
            highlightWeekends={true}
            treeColumnIndex={1}
            projectStartDate={projectStartDate}
            projectEndDate={projectEndDate}
            viewType="ResourceView"
            showOverAllocation={true}
            toolbarClick={toolbarClick}
        >
            <Inject services={[Toolbar, Edit, Selection]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));