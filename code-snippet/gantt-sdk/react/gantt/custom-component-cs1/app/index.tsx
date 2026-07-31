import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Filter, IFilter } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
import { ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { createElement } from '@syncfusion/ej2-base';
import { DataManager } from '@syncfusion/ej2-data';
import { DropDownList } from '@syncfusion/ej2-dropdowns';

function  App (){
    const taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };
  let dropInstance:any;
const Filters : IFilter = {
  ui: {
  create: (args: { target: Element, column: object }) => {
      const flValInput: HTMLElement = createElement('input', { className: 'flm-input' });
      args.target.appendChild(flValInput);
       dropInstance = new DropDownList({
          dataSource: new DataManager(data),
          fields: { text: 'TaskName', value: 'TaskName' },
          placeholder: 'Select a value',
          popupHeight: '200px'
      });
      dropInstance.appendTo(flValInput);
  },
  read: (args: { target: Element, column: any, operator: string, fltrObj: Filter }) => {
      args.fltrObj.filterByColumn(args.column.field, args.operator, dropInstance.value);
      },
  write: (args: {
      column: object, target: Element, parent: any,
      filteredValue: number | string }) => {
          dropInstance.value = args.filteredValue;
      }
  }
  };
    return <GanttComponent dataSource={data} taskFields={taskFields}
         allowFiltering={true} height = '450px'>
    <ColumnsDirective>
              <ColumnDirective field="TaskID" ></ColumnDirective>
              <ColumnDirective
                field="TaskName"
                headerText="Job Name"
                filter={Filters}
              ></ColumnDirective>
              <ColumnDirective field="StartDate"></ColumnDirective>
              <ColumnDirective field="Duration"></ColumnDirective>
              <ColumnDirective field="Progress"></ColumnDirective>
              <ColumnDirective field="Predecessor"></ColumnDirective>
    </ColumnsDirective>
    <Inject services={[Filter]} />
        </GanttComponent>
    };
ReactDOM.render(<App />, document.getElementById('root'));