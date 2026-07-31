import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Selection, SelectionSettingsModel } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function  App(){
    const taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };
 const settings: SelectionSettingsModel = {
        mode: 'Row',
        type: 'Multiple'
  };
  let ganttInstance :any;
 function rowSelected(args:any) {
    let selectedrowindex: number[] = ganttInstance.selectionModule.getSelectedRowIndexes();  // get the selected row indexes.
    alert(selectedrowindex); // to alert the selected row indexes.
    let selectedrecords: Object[] = ganttInstance.selectionModule.getSelectedRecords();  // get the selected records.
    console.log(selectedrecords); // to print the selected records in console window.
}
      return <GanttComponent dataSource={data} allowSelection={true} taskFields={taskFields}
        selectionSettings={settings} rowSelected={rowSelected} height = '450px' ref={gantt => ganttInstance = gantt}>
        <Inject services={[Selection]} />
        </GanttComponent>
   };
ReactDOM.render(<App />, document.getElementById('root'));