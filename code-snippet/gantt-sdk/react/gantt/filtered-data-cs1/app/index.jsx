import * as React from 'react';
import { useState } from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Filter, Sort, VirtualScroll, Selection, ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-gantt';
import { virtualData } from './datasource';
function App(){
  const [filteredCount, setFilteredCount] = useState(0);
  const [datasetCount, setdatasetCount] = useState(0);
     const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
      };
      const splitterSettings= {
        columnIndex: 2
      };
      let ganttInstance;
      function actionComplete(args) {
        if (args.requestType === 'filtering') {
          if (args.rows != null) {
            setFilteredCount(ganttInstance.treeGrid.filterModule.filteredResult.length);
          }
        }
      };
      function created() {
        setdatasetCount(ganttInstance.flatData.length);
      }   
  return (
  <div>
    <GanttComponent dataSource={virtualData} taskFields={taskFields} splitterSettings={splitterSettings} enableVirtualization={true} allowSorting={true} allowFiltering={true} height='450px'  ref={gantt => ganttInstance = gantt} created={created} actionComplete={actionComplete}>
    <ColumnsDirective>
        <ColumnDirective field='TaskID' width= '120'></ColumnDirective>
        <ColumnDirective field='TaskName'></ColumnDirective>
        <ColumnDirective field='StartDate'></ColumnDirective>
        <ColumnDirective field='Duration'></ColumnDirective>
        <ColumnDirective field='Progress'></ColumnDirective>
    </ColumnsDirective>
        <Inject services={[Filter, Selection, Sort, VirtualScroll]}/>
    </GanttComponent>
    <div>
        <p>
          <b>Dataset Count:</b> {datasetCount}
        </p>
        <p>
          <b>Filtered Count:</b> {filteredCount}
        </p>
    </div>
  </div>);
  };
ReactDOM.render(<App />, document.getElementById('root'));