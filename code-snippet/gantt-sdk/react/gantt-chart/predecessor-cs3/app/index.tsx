
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Edit } from '@syncfusion/ej2-react-gantt';
import { TaskFieldsModel, EditSettingsModel, ActionEventArgs } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
    const taskSettings: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID'
    };

    const editSettings: EditSettingsModel = {
        allowTaskbarEditing: true
    };

    const actionBegin = (args: ActionEventArgs) => {
        if (args.requestType === 'validateLinkedTask') {
            (args as any).validateMode.respectLink = true;
        }
    };

    return (
        <GanttComponent
            id="ganttDefault"
            height="430px"
            dataSource={data}
            taskFields={taskSettings}
            editSettings={editSettings}
            actionBegin={actionBegin}
        >
            <ColumnsDirective>
                <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Left" width="100" />
                <ColumnDirective field="TaskName" headerText="Task Name" width="150" />
                <ColumnDirective field="StartDate" headerText="Start Date" width="150" />
                <ColumnDirective field="Duration" headerText="Duration" width="150" />
                <ColumnDirective field="Predecessor" headerText="Dependency" width="150" />
                <ColumnDirective field="Progress" headerText="Progress" width="150" />
            </ColumnsDirective>
            <Inject services={[Edit]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));