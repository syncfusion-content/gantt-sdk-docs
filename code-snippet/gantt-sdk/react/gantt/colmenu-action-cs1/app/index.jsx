import { createElement } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnMenu, ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-gantt';
import { Inject, Sort, Filter } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App(){
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };
    function columnMenuOpen (args) {
        for (const item of args.items) {
            if (item.text === 'Filter' && (args.column ).field === 'TaskName') {
                (item ).hide = true;
            } else {
                (item ).hide = false;
            }
        }
    }

    const splitterSettings = {
        columnIndex : 5
    };
        return (<div>
        <GanttComponent dataSource={data} taskFields={taskFields} showColumnMenu={true}
        columnMenuOpen={columnMenuOpen} allowFiltering={true} allowSorting={true}
        splitterSettings={splitterSettings} height = '450px'>
        <ColumnsDirective>
            <ColumnDirective field='TaskID' width='100' ></ColumnDirective>
            <ColumnDirective field='TaskName' headerText='Task Name'></ColumnDirective>
            <ColumnDirective field='StartDate'></ColumnDirective>
            <ColumnDirective field='Duration'></ColumnDirective>
            <ColumnDirective field='Progress'></ColumnDirective>
        </ColumnsDirective>
        <Inject services={[ColumnMenu, Sort, Filter]} />
        </GanttComponent></div>)
};
ReactDOM.render(<App />, document.getElementById('root'));