import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Selection, Filter, Toolbar, TaskFieldsModel, IQueryTaskbarInfoEventArgs } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
    let gantt: GanttComponent | null = null;

    const taskFields: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID'
    };

    const queryTaskbarInfo = (args: IQueryTaskbarInfoEventArgs): void => {
        const record: any = args.data;

        if (record.Progress === 50) {
            args.progressBarBgColor = 'red';
        } else if (record.Progress === 70) {
            args.progressBarBgColor = 'yellow';
        } else if (record.Progress === 80) {
            args.progressBarBgColor = 'lightgreen';
        }
    };

    return (
        <GanttComponent id="ganttDefault" height="430px" dataSource={data} taskFields={taskFields} queryTaskbarInfo={queryTaskbarInfo} ref={(g) => (gantt = g)}>
            <Inject services={[Selection, Filter, Toolbar]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));