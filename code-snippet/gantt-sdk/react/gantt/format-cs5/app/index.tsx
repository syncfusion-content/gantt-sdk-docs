import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, SplitterSettings } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
    const taskFields: object = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    const splitterSettings: SplitterSettings = { position: '75%' };

    // Custom date template
    const dateTemplate = (props: { StartDate: string }) => {
        const date: Date = new Date(props.StartDate);
        return (
            <span>
                {date.getFullYear()}/{date.toLocaleString('default', { month: 'short' })}/{date.getDate()}
            </span>
        );
    };

    return (
        <GanttComponent
            id="ganttDefault"
            dataSource={data}
            taskFields={taskFields}
            height="430px"
            treeColumnIndex={1}
            splitterSettings={splitterSettings}
        >
            <ColumnsDirective>
                <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Left" width="90" />
                <ColumnDirective field="TaskName" headerText="Task Name" textAlign="Left" width="270" />
                <ColumnDirective field="StartDate" headerText="Start Date" textAlign="Left" width="120" template={dateTemplate} />
                <ColumnDirective field="Duration" headerText="Duration" textAlign="Left" width="150" />
                <ColumnDirective field="Progress" headerText="Progress" textAlign="Left" width="120" />
            </ColumnsDirective>
        </GanttComponent>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));