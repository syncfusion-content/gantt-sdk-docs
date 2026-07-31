import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App() {
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID:'ParentId',
    };
    const splitterSettings = {
        columnIndex: 2
    };
    const onActionFailure = (e) => {
        const span = document.createElement('span');
        const gantt = (document.getElementsByClassName("e-gantt")[0]).ej2_instances[0];
        if (gantt) {
            (gantt).element.parentNode.insertBefore(span, gantt.element);
            span.style.color = "#FF0000";
            span.innerHTML = e.error[0];
        }
    }
    return <GanttComponent dataSource={data} taskFields={taskFields}
        actionFailure={onActionFailure} splitterSettings={splitterSettings} height='450px'>
        <ColumnsDirective>
            <ColumnDirective field='TaskName' headerText='Task Name'></ColumnDirective>
            <ColumnDirective field='StartDate'></ColumnDirective>
            <ColumnDirective field='Duration'></ColumnDirective>
            <ColumnDirective field='Predecessor'></ColumnDirective>
            <ColumnDirective field='Progress'></ColumnDirective>
        </ColumnsDirective>
    </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));