import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Selection, VirtualScroll } from '@syncfusion/ej2-react-gantt';
import { virtualData } from './datasource';

function App() {
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };
    const splitterSettings = {
        columnIndex: 2
    };
    const labelSettings = {
        leftLabel: 'TaskName',
        taskLabel: 'Progress'
    };
    return (
        <GanttComponent dataSource={virtualData} treeColumnIndex={1} labelSettings={labelSettings}
            allowSelection={true} highlightWeekends={true} enableVirtualization={true}
            taskFields={taskFields} splitterSettings={splitterSettings} height='450px'>
            <ColumnsDirective>
                <ColumnDirective field='TaskID' />
                <ColumnDirective field='TaskName' headerText='Task Name' />
                <ColumnDirective field='StartDate' />
                <ColumnDirective field='Duration' />
                <ColumnDirective field='Progress' />
            </ColumnsDirective>
            <Inject services={[Selection, VirtualScroll]} />
        </GanttComponent>
    )
};
ReactDOM.render(<App />, document.getElementById('root'));