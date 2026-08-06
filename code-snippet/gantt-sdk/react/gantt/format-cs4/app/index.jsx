import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Selection } from '@syncfusion/ej2-react-gantt';
import { loadCldr, setCulture, setCurrencyCode } from '@syncfusion/ej2-base';
import { data } from './datasource';
import * as cagregorian from './ca-gregorian.json';
import * as currencies from './currencies.json';
import * as numbers from './numbers.json';
import * as timeZoneNames from './timeZoneNames.json';

function App() {
  const formatOptions = { type: 'date', format: 'yyyy-MMM-dd' };
  const locale = 'es-AR';
  setCulture('es-AR');
  setCurrencyCode('ARS');
  loadCldr(
    cagregorian,
    currencies,
    numbers,
    timeZoneNames
  );

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
    position: '75%'
  };
  const formatOptionstwo = { type: 'dateTime', format: 'dd/MM/yyyy hh:mm a' };

  return (
    <GanttComponent
      dataSource={data}
      taskFields={taskFields}
      splitterSettings={splitterSettings}
      locale={locale}
      treeColumnIndex={1}
      height='430px'
    >
      <ColumnsDirective>
        <ColumnDirective field='TaskID' headerText='Task ID' textAlign='Right' width='90' />
        <ColumnDirective field='TaskName' headerText='Task Name' textAlign='Left' width='270' />
        <ColumnDirective field='StartDate' headerText='Start Date' textAlign='Right' width='150' format={formatOptions} />
        <ColumnDirective field='EndDate' headerText='End Date' textAlign='Right' width='210' format={formatOptionstwo} />
        <ColumnDirective field='Duration' headerText='Duration' textAlign='Right' width='90' />
        <ColumnDirective field='Progress' headerText='Progress' textAlign='Right' width='120' format='c2' type='number' />
      </ColumnsDirective>
      <Inject services={[Selection]} />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));