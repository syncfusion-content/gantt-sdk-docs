
import * as React from 'react';
import { useRef } from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Selection, DayMarkers, ColumnsDirective, ColumnDirective, HolidaysDirective, HolidayDirective } from '@syncfusion/ej2-react-gantt';
import {timelineTemplateData} from './datasource'
function App() {
  let ganttInstance :any ;
  const taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID'
  };
  const bgColor = (value: string, date: string): string => {
    if (value === "S") {
      return "#7BD3EA"
    }
    const parsedDate = new Date(date);
    for (let i = 0; i < ganttInstance.holidays.length; i++) {
      const holiday = ganttInstance.holidays[i];
      const fromDate = new Date(holiday.from);
      const toDate = new Date(holiday.to)
      if (parsedDate >= fromDate && parsedDate <= toDate) {
        return "#97E7E1";
      }
    }
    return "#E0FBE2"
  };
  const imagedate = () => {
    const getImage = Math.floor(Math.random() * 5) + 1;
    return getImage + ".svg";

  }
  const holidayValue = (value: string, date: string): string => {

    const parsedDate = new Date(date);
    for (let i = 0; i < ganttInstance.holidays.length; i++) {
      const holiday = ganttInstance.holidays[i];
      const fromDate = new Date(holiday.from);
      const toDate = new Date(holiday.to)
      if (parsedDate >= fromDate && parsedDate <= toDate) {
        const options: any = { weekday: 'short' };
        return parsedDate.toLocaleDateString('en-US', options).toLocaleUpperCase();
      }
    }
    return value
  }
  const timelineTemplate = (props): any => {
    if (props.tier == 'topTier') {
      return (<div
        className="e-header-cell-label e-gantt-top-cell-text"
        style={{
          width: '100%',
          backgroundColor: '#FBF9F1',
          fontWeight: 'bold',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        title={props.date}
      >
        <div>{props.value}</div>
        <div
          style={{
            width: '30px',
            height: '30px',
            lineHeight: 'normal',
            paddingLeft: '10px',
          }}
        >
          <img style={{ width: '100%', height: '100%' }} src={imagedate()} alt="Image" />
        </div>
      </div>)
    }
    if (props.tier == 'bottomTier') {
      return (<div
        className="e-header-cell-label e-gantt-top-cell-text"
        style={{
          width: '100%',
          backgroundColor: bgColor(props.value, props.date),
          textAlign: 'center',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          fontWeight: 'bold',
          justifyContent: 'center',
        }}
        title={props.date}
      >
        {holidayValue(props.value, props.date)}
      </div>)
    }


  }
  const splitterSettings: any = {
    columnIndex: 1
  };
  const timelineSettings: any = {
    topTier: {
      unit: 'Week',
      format: 'dd/MM/yyyy'
    },
    bottomTier: {
      unit: 'Day',
      count: 1
    },
    timelineUnitSize: 100
  };
  const labelSettings: any = {
    leftLabel: 'TaskName',
  };
  const projectStartDate = new Date('03/31/2019');
  const projectEndDate = new Date('04/23/2019');
  return <GanttComponent id='Timeline' ref={g => ganttInstance = g} dataSource={timelineTemplateData} timelineTemplate={timelineTemplate}
    splitterSettings={splitterSettings}
    taskFields={taskFields} height='550px'
    projectStartDate={projectStartDate} projectEndDate={projectEndDate} timelineSettings={timelineSettings}
     labelSettings={labelSettings} treeColumnIndex={1}>
    <ColumnsDirective>
      <ColumnDirective field='TaskID' visible={false}></ColumnDirective>
      <ColumnDirective field='TaskName' width={300} ></ColumnDirective>
      <ColumnDirective field='StartDate'></ColumnDirective>
      <ColumnDirective field='EndDate' ></ColumnDirective>
      <ColumnDirective field='Duration' ></ColumnDirective>
      <ColumnDirective field='Progress' ></ColumnDirective>
    </ColumnsDirective>
    <HolidaysDirective>
      <HolidayDirective from='04/04/2019' to='04/05/2019' label='Public Holiday'></HolidayDirective>
      <HolidayDirective from='04/12/2019' to='04/12/2019' label='Good Friday'></HolidayDirective>
    </HolidaysDirective>
    <Inject services={[Selection, DayMarkers]} />
  </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));