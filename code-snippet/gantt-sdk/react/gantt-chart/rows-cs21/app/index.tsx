import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, RowDataBoundEventArgs } from '@syncfusion/ej2-react-gantt';
import { ganttData } from './datasource';
function App() {
    const taskFields: object = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };
    const splitterSettings: object = {
        position: '75%'
    }
    const onRowDataBound = (args: RowDataBoundEventArgs) => {
        const progress = (args.data as any).Progress as number;
        if (progress < 30) {
            (args.row as HTMLElement).classList.add('below-30');
        } else if (progress >= 30 && progress < 80) {
            (args.row as HTMLElement).classList.add('below-80');
        } else {
            (args.row as HTMLElement).classList.add('above-80');
        }
    }

    return <GanttComponent id='root' dataSource={ganttData} taskFields={taskFields} height='400px' splitterSettings={splitterSettings} rowDataBound={onRowDataBound}>
    </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));