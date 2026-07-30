import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, TaskFieldsModel, SelectionSettingsModel } from '@syncfusion/ej2-react-gantt';
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
    const selectionSettings: SelectionSettingsModel = {
        mode: 'Row',
        type: 'Multiple'
    };
    function created(args: object): void {
        const gantt: any = (document.getElementById('ganttDefault') as any).ej2_instances[0];
        if (gantt) {
            gantt.treeGrid.grid.selectionSettings.enableSimpleMultiRowSelection = false;
        }
    }
    return (
        <GanttComponent
            id="ganttDefault"
            height="450px"
            dataSource={data}
            taskFields={taskFields}
            selectionSettings={selectionSettings}
            created={created}>
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));