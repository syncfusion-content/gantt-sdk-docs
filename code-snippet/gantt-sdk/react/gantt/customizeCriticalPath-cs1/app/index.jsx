import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, Toolbar, CriticalPath } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
    };
    const editOptions = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    };
    function queryTaskbarInfo(args) {
        if ((args.data.isCritical || args.data.slack === '0 day') && !args.data.hasChildRecords) {
            args.taskbarBgColor = 'rgb(242, 210, 189)';
            args.progressBarBgColor = 'rgb(201, 169, 166)';
        }
    }
    const toolbarOptions = ['CriticalPath'];
    return <GanttComponent dataSource={data} taskFields={taskFields} height='450px' queryTaskbarInfo={queryTaskbarInfo} enableCriticalPath={true}
        editSettings={editOptions} toolbar={toolbarOptions}>
        <Inject services={[Edit, CriticalPath, Toolbar]} />
    </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));