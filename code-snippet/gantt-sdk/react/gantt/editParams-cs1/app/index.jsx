
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, ColumnsDirective, ColumnDirective, Edit } from '@syncfusion/ej2-react-gantt';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { data } from './datasource';
import { IEditCell } from '@syncfusion/ej2-grids';
function App () {
    let elem;
    let ganttInstance;
    let dropdownlistObj;
    let dropdownlist = {
       create: () => {
            elem = document.createElement('input');
            return elem;
        },
      read: () => {
           return dropdownlistObj.value;
        },
      destroy: () => {
            dropdownlistObj.destroy();
        },
        write: (args) => {
            dropdownlistObj = new DropDownList({
                dataSource: ganttInstance.treeGrid.grid.dataSource,
                fields: { value: 'TaskName' },
                value: args.rowData[args.column.field],
                floatLabelType: 'Auto',
            });
            dropdownlistObj.appendTo(elem);
        }
    };
   const taskFields = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            parentID: 'ParentID'
        };
       const editOptions = {
           allowEditing: true
        };
        return <GanttComponent dataSource={data} taskFields={taskFields} editSettings={editOptions} height='450px' ref={gantt => ganttInstance = gantt}>
         <ColumnsDirective>
                <ColumnDirective field='TaskID'></ColumnDirective>
                <ColumnDirective field='TaskName' edit={dropdownlist}></ColumnDirective>
                <ColumnDirective field='StartDate'></ColumnDirective>
                <ColumnDirective field='Duration'></ColumnDirective>
                <ColumnDirective field='Progress'></ColumnDirective>
          </ColumnsDirective>
          <Inject services={[Edit]}/>
      </GanttComponent>

};
ReactDOM.render(<App />, document.getElementById('root'));