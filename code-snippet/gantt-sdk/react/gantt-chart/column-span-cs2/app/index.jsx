import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { GanttData } from './datasource';

function App() {
    const queryCellInfoEvent = (args) => {
        const field = args.column.field;
        switch (args.data.TaskID) {
            case 1:
                if (field === 'work3' || field === 'work4') {
                    args.colSpan = 1;
                } else if (field === 'work1') {
                    args.colSpan = 2;
                }
                break;
            case 2:
                if (field === 'work1' || field === 'work4') {
                    args.colSpan = 1;
                } else if (field === 'work2') {
                    args.colSpan = 2;
                }
                break;
            case 3:
                if (field === 'work4') {
                    args.colSpan = 1;
                } else if (field === 'work1') {
                    args.colSpan = 3;
                }
                break;
            case 4:
                if (field === 'work4' || field === 'work1') {
                    args.colSpan = 1;
                }
                break;
            case 5:
                if (field === 'work3') {
                    args.colSpan = 2;
                } else if (field === 'work1') {
                    args.colSpan = 2;
                }
                break;
            case 6:
                if (field === 'work4') {
                    args.colSpan = 1;
                } else if (field === 'work1') {
                    args.colSpan = 3;
                }
                break;
            case 7:
                if (field === 'work4' || field === 'work1') {
                    args.colSpan = 1;
                }
                break;
            case 8:
                if (field === 'work1' || field === 'work4') {
                    args.colSpan = 1;
                } else if (field === 'work2') {
                    args.colSpan = 2;
                }
                break;
        }
        if (args.colSpan > 1) {
            args.cell.style.border = '1px solid red';
        }
    }
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
        work1: 'work1',
        work2: 'work2',
    };
    const splitterSettings = {
        position: '75%'
    };
    return (<div> <GanttComponent
        dataSource={GanttData}
        taskFields={taskFields}
        splitterSettings={splitterSettings}
        gridLines="Both"
        height="430px"
        queryCellInfo={queryCellInfoEvent}
    >
        <ColumnsDirective>
            <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Right" width="90" />
            <ColumnDirective field="TaskName" headerText="Task Name" textAlign="Left" width="290" />
            <ColumnDirective field="work1" headerText="Work 1" textAlign="Center" width="150" />
            <ColumnDirective field="work2" headerText="Work 2" textAlign="Center" width="150" />
            <ColumnDirective field="work3" headerText="Work 3" textAlign="Center" width="150" />
            <ColumnDirective field="work4" headerText="Work 4" textAlign="Center" width="150" />
            <ColumnDirective field="StartDate" headerText="Start Date" textAlign="Right" width="120" />
            <ColumnDirective field="Duration" headerText="Duration" textAlign="Right" width="90" />
            <ColumnDirective field="Progress" headerText="Progress" textAlign="Right" width="120" />
        </ColumnsDirective>
    </GanttComponent></div>)
};
ReactDOM.render(<App />, document.getElementById('root'));