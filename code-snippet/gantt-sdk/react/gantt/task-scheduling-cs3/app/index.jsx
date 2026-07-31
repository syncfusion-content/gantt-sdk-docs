import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject } from '@syncfusion/ej2-react-gantt';
import { Edit, Toolbar, Selection } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
    const taskSettings = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
        manual: 'isManual'
    };

    const editSettings = {
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    };

    const toolbar = [
        'Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'Search'
    ];

    return (
        <GanttComponent
            height="450px"
            dataSource={data}
            taskMode="Custom"
            treeColumnIndex={1}
            validateManualTasksOnLinking={true}
            taskFields={taskSettings}
            editSettings={editSettings}
            toolbar={toolbar}
        >
            <ColumnsDirective>
                <ColumnDirective field="TaskID" visible={false} />
                <ColumnDirective field="TaskName" headerText="Task Name" width="250" />
                <ColumnDirective field="isManual" headerText="Manual" width="100" />
            </ColumnsDirective>
            <Inject services={[Edit, Toolbar, Selection]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));