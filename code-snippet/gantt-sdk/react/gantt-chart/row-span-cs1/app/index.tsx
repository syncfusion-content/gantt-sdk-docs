import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, QueryCellInfoEventArgs } from '@syncfusion/ej2-react-gantt';
import { ganttData } from './datasource';
function App() {
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };
    const splitterSettings = {
        position: '75%'
    }
    const queryCellInfo = (args: QueryCellInfoEventArgs) => {
        if ((args.data)['TaskID'] === 4 && (args.column).field === 'TaskName') {
            args.rowSpan = 2;
        }
    }

    return <GanttComponent id='root' dataSource={ganttData} taskFields={taskFields} height='400px' splitterSettings={splitterSettings} queryCellInfo={queryCellInfo} gridLines="Both">
    </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));