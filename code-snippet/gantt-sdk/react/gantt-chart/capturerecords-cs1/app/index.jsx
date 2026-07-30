import { GanttComponent, Inject, Edit, Selection, Toolbar } from '@syncfusion/ej2-react-gantt';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
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
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true,
        mode: 'Auto',
    };
    const toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'Search',
    'PrevTimeSpan', 'NextTimeSpan'];

    function actionComplete(args) {
        if (args.requestType == 'add') {
            console.log("Added new record values available in the 'args' variable as 'newTaskData'", args);
        }
        if (args.requestType == 'save') {
            console.log("Edited record values available in the 'args' variable as 'modifiedTaskData'", args);
        }
        if (args.requestType == 'delete') {
            console.log("Modified Records after Delete action", args);
        }
    }
    return <GanttComponent dataSource = {data} taskFields = {taskFields} allowSelection = {true} editSettings = {editSettings} height = '400px' actionComplete = {actionComplete} toolbar = {toolbar}>
           <Inject services = {[Edit, Selection, Toolbar]}/>
        </GanttComponent>;
};
ReactDOM.render(<App />, document.getElementById('root'));
