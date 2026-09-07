import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Sort, Filter, Resize, ColumnMenu, Toolbar, Edit, RowDD, ContextMenu } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };
    const editSettings = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    };
    const toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'Indent', 'Outdent', 'ExpandAll', 'CollapseAll', 'Search'];

    return (
        <GanttComponent
            id="ganttDefault"
            dataSource={data}
            height="450px"
            allowSorting={true}
            allowFiltering={true}
            allowResizing={true}
            enableContextMenu={true}
            showColumnMenu={true}
            enableSerialNumber={true}
            allowRowDragAndDrop={true}
            allowTaskbarDragAndDrop={true}
            treeColumnIndex={2}
            editSettings={editSettings}
            taskFields={taskFields}
            splitterSettings={{ columnIndex: 4 }}
            toolbar={toolbar}
        >
            <ColumnsDirective>
                <ColumnDirective field="TaskID" headerText="Task ID" visible={false} />
                <ColumnDirective field="SerialNumber" headerText="S.No" width="100" allowFiltering={false} />
                <ColumnDirective field="TaskName" headerText="Task Name" allowReordering={false} width="280" />
                <ColumnDirective field="StartDate" headerText="Start Date" width="140" />
                <ColumnDirective field="Duration" headerText="Duration" allowEditing={false} width="130" />
                <ColumnDirective field="Progress" headerText="Progress" />
            </ColumnsDirective>
            <Inject services={[Sort, Filter, Resize, ColumnMenu, Toolbar, Edit, RowDD, ContextMenu]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));