import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Filter } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
import { ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { createElement } from '@syncfusion/ej2-base';
import { DataManager } from '@syncfusion/ej2-data';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
function App () {
   
      const taskFields = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            parentID: 'ParentID'
        };
        let dropInstance;
       const Filters = {
            ui: {
                create: (args) => {
                    const flValInput = createElement('input', { className: 'flm-input' });
                    args.target.appendChild(flValInput);
                    dropInstance = new DropDownList({
                        dataSource: new DataManager(data),
                        fields: { text: 'TaskName', value: 'TaskName' },
                        placeholder: 'Select a value',
                        popupHeight: '200px'
                    });
                   dropInstance.appendTo(flValInput);
                },
                read: (args) => {
                    args.fltrObj.filterByColumn(args.column.field, args.operator, dropInstance.value);
                },
                write: (args) => {
                    dropInstance.value = args.filteredValue;
                }
            }
        };
 
 
        return <GanttComponent dataSource={data} taskFields={taskFields} allowFiltering={true} height='450px'>
<ColumnsDirective>
          <ColumnDirective field="TaskID"></ColumnDirective>
          <ColumnDirective field="TaskName" headerText="Job Name" filter={Filters}></ColumnDirective>
          <ColumnDirective field="StartDate"></ColumnDirective>
          <ColumnDirective field="Duration"></ColumnDirective>
          <ColumnDirective field="Progress"></ColumnDirective>
          <ColumnDirective field="Predecessor"></ColumnDirective>
</ColumnsDirective>
<Inject services={[Filter]}/>
    </GanttComponent>;
    
};
ReactDOM.render(<App />, document.getElementById('root'));