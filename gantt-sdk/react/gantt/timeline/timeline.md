---
layout: post
title: Timeline in React Gantt Chart component | Syncfusion
description: Learn how to configure timelines in the Syncfusion React Gantt Chart component with view modes, zooming, weekend highlighting, and templates.
platform: gantt-sdk
control: Timeline
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Timeline in React Gantt Chart Component

The timeline in the [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart) component represents project durations as cells with defined units and formats, supporting in-built view modes like Hour-Minute, Day-Hour, Week-Day, Month-Week, Year-Month, and Minutes for flexible visualization. Configure modes using the [timelineViewMode](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineViewMode/) property, with top and bottom tiers customized via [topTier.unit](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineTierSettings#unit) and [bottomTier.unit](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineTierSettings#unit) in [timelineSettings](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineSettings/). This enables detailed views, such as weekly overviews with daily breakdowns for projects, ensuring accurate timeline representation.

## Configure timeline view modes

Set the timeline view mode using the [timelineViewMode](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineviewmode) property. This property allows you to switch the timeline between different units such as **Day**, **Week**, **Month**, and **Year**, where the top tier displays a broader unit and the bottom tier displays a finer one.

When both the `topTier` and `bottomTier` settings are defined, they take precedence over the `timelineViewMode` property. In this case, the `timelineViewMode` value will be ignored. To apply the `timelineViewMode` setting, ensure that `topTier` and `bottomTier` are assigned a null value or not configured.

### Week timeline mode

In Week mode, the top tier shows weeks and the bottom tier days, suitable for short-term project tracking.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/weektimeline-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/weektimeline-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/weektimeline-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/weektimeline-cs1" %}

### Month timeline mode

In Month mode, the top tier shows months and the bottom tier weeks, ideal for medium-term planning.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/monthtimeline-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/monthtimeline-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/monthtimeline-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/monthtimeline-cs1" %}

### Year timeline mode

In Year mode, the top tier shows years and the bottom tier months, suitable for long-term projects.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/yeartimeline-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/yeartimeline-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/yeartimeline-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/yeartimeline-cs1" %}

### Day timeline mode

In Day mode, the top tier shows days and the bottom tier hours, ideal for detailed daily scheduling.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/daytimeline-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/daytimeline-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/daytimeline-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/daytimeline-cs1" %}

### Hour timeline mode

In Hour mode, the top tier shows hours and the bottom tier minutes, perfect for minute-level task tracking.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/hourtimeline-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/hourtimeline-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/hourtimeline-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/hourtimeline-cs1" %}

### Minutes timeline mode

In Minutes timeline mode, the tier displays minute-level intervals, ideal for tracking short-duration tasks with high precision.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/minutetimeline-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/minutetimeline-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/minutetimeline-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/minutetimeline-cs1" %}

## Timeline view dates

The Gantt Chart control supports rendering a fixed timeline range using the [viewStartDate](https://ej2.syncfusion.com/react/documentation/api/gantt/timelinesettings#viewstartdate) and [viewEndDate](https://ej2.syncfusion.com/react/documentation/api/gantt/timelinesettings#viewenddate) properties. These properties allow the visible portion of the timeline to be explicitly defined and locked within the Gantt chart UI, independent of the project's overall scheduling boundaries defined by [projectStartDate](https://ej2.syncfusion.com/react/documentation/api/gantt/index-default#projectstartdate) and [projectEndDate](https://ej2.syncfusion.com/react/documentation/api/gantt/index-default#projectenddate). The `projectStartDate` and `projectEndDate` values represent the full scheduling window for the project and are used for baseline processing, critical-path calculations, and project-level reporting. By default, both `viewStartDate` and `viewEndDate` are set to **auto**. The following example demonstrates how to configure a custom timeline view range.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/view-dates-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/view-dates-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/view-dates-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/view-dates-cs1" %}

**Key behaviors**

When `viewStartDate` and `viewEndDate` are set to concrete Date values, the timeline rendering is restricted to the inclusive range [viewStartDate, viewEndDate].

* When `viewStartDate` is set to **auto**:
  * If `projectStartDate` is defined, the timeline begins at `projectStartDate`.
  * If `projectStartDate` is not defined, the earliest task start date is used as the beginning of the visible range.

* When `viewEndDate` is set to **auto**: 
  * If `projectEndDate` is defined, the timeline ends at `projectEndDate`.
  * If `projectEndDate` is not defined, the maximum task end date is used. If this end date leaves visible white‑space in the timeline area, the end date is automatically extended to fill the chart width.

> Note: The `ZoomToFit` feature uses `projectStartDate` and `projectEndDate` to fit the entire project within the available timeline viewport.

## Customize week start day

In the Gantt Chart component, you can customize the starting day of the week using the [weekStartDay](https://ej2.syncfusion.com/react/documentation/api/gantt/timelinesettings#weekstartday) property. By default, the `weekStartDay` value is set to **0**, which specifies **Sunday** as the first day of the week. You can change this value to any number from **0 to 6** to set a different start day.

The `weekStartDay` property will take effect only when the timeline displays weeks. To enable this, set the [timelineViewMode](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineviewmode) to **Week**, or configure `topTier.unit` as **Week** and `bottomTier.unit` as **Day**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/weekstartdaytimeline-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/weekstartdaytimeline-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/weekstartdaytimeline-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/weekstartdaytimeline-cs1" %}

## Customize automatic timescale update action

In the Gantt Chart component, the schedule timeline will be automatically updated when the tasks date values are updated beyond the project start date and end date ranges. This can be enabled or disabled using the [updateTimescaleView](https://ej2.syncfusion.com/react/documentation/api/gantt/timelinesettings#updatetimescaleview) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/updatetimescale-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/updatetimescale-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/updatetimescale-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/updatetimescale-cs1" %}

## Dynamically change timeline mode

You can dynamically change the timeline mode in the Gantt Chart by updating the [timelineSettings.timelineViewMode](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineviewmode) property using the [change](https://ej2.syncfusion.com/react/documentation/api/combo-box/index-default#change) event of the [ComboBox](https://ej2.syncfusion.com/react/documentation/combo-box/getting-started) component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/timeline-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/timeline-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/timeline-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/timeline-cs2" %}

## Timeline cells tooltip

In the Gantt Chart component, you can enable or disable the mouse hover tooltip of timeline cells using the [timelineSettings.showTooltip](https://ej2.syncfusion.com/react/documentation/api/gantt/timelinesettings#showtooltip) property. The default value of this property is **true**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/tooltip-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/tooltip-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/tooltip-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/tooltip-cs2" %}

## Highlight weekends

Highlight weekends by setting [showWeekend](https://ej2.syncfusion.com/react/documentation/api/gantt/timelinesettings#showweekend) to **true** and [workWeek](https://ej2.syncfusion.com/react/documentation/api/gantt#workweek) to define weekdays, aiding in identifying non-working days in a project schedule.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/showweekend-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/showweekend-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/showweekend-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/showweekend-cs1" %}

**Limitations:**
* The `showWeekend` feature does not support baselines and not compatible with the manual task mode.
* Non-working hours cannot be excluded when `showWeekend` is set to **false**.
* Holidays are not excluded from the timeline if `showWeekend` is set to **false**.

## Navigating Gantt Chart Timeline

You can adjust the Gantt Chart view by shifting the timeline forward or backward by one unit using the following methods:

- [previousTimeSpan](https://ej2.syncfusion.com/react/documentation/api/gantt/index-default#previoustimespan): Moves the timeline backward by one unit from the current start point.

- [nextTimeSpan](https://ej2.syncfusion.com/react/documentation/api/gantt/index-default#nexttimespan): Moves the timeline forward by one unit from the current end point.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/timeline-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/timeline-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/timeline-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/timeline-cs3" %}

## Timeline template

In the Gantt Chart component, you can customize timeline cells using the [timelineTemplate](https://ej2.syncfusion.com/react/documentation/api/gantt#timelineTemplate) property, allowing for the customization of HTML content within timeline cells. This feature enhances the visual appeal and enables personalized functionality.

When designing the timeline cells, you can utilize the following context properties within the template:

* `date`: Defines the date of the timeline cells.
* `value`: Defines the formatted date value that will be displayed in the timeline cells.
* `tier`: Defines whether the cell is part of the top or bottom tier.

The following code example how to customize the top tier to display the week's weather details and the bottom tier to highlight working and non-working days, with formatted text for holidays.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Selection, DayMarkers, ColumnsDirective, ColumnDirective, HolidaysDirective, HolidayDirective } from '@syncfusion/ej2-react-gantt'
import {timelineTemplateData} from './datasource'
function App() {
  let ganttInstance ;
  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID'
  };
  const bgColor = (value, date) => {
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
    return  getImage + ".svg";

  }
  const holidayValue = (value, date) => {
    const parsedDate = new Date(date);
    for (let i = 0; i < ganttInstance.holidays.length; i++) {
      const holiday = ganttInstance.holidays[i];
      const fromDate = new Date(holiday.from);
      const toDate = new Date(holiday.to)
      if (parsedDate >= fromDate && parsedDate <= toDate) {
        const options = { weekday: 'short' };
        return parsedDate.toLocaleDateString('en-US', options).toLocaleUpperCase();
      }
    }
    return value
  }
  const timelineTemplate = (props) => {
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
  const splitterSettings = {
    columnIndex: 1
  };
  const timelineSettings = {
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
  const labelSettings = {
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
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% raw %}
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
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/tooltip-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/tooltip-cs8" %}

## Infinite timeline scrolling

The [enableInfiniteTimelineScroll](https://ej2.syncfusion.com/react/documentation/api/gantt#enableinfinitetimelinescroll) property enables infinite horizontal scrolling by dynamically extending the visible timeline range as the user navigates. Set `enableInfiniteTimelineScroll` to **true** to enable this behavior.

**Key behaviors**

- When `enableInfiniteTimelineScroll` is enabled, the timeline automatically extends in the forward direction as the user scrolls using the horizontal scrollbar or clicks the forward scroll arrow.
- In the backward direction, the timeline extends only when the user clicks the backward scroll arrow. Scrolling or dragging the scrollbar backward does not trigger timeline extension.
- Infinite scrolling extends only the visible timeline range and does not modify the project dates.

This feature enables exploration of long project schedules without manually updating the timeline range.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/timeline-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/timeline-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/timeline-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/timeline-cs4" %}

## See also
- [How to configure taskbars?](https://ej2.syncfusion.com/react/documentation/gantt/taskbar)
- [How to zoom the timeline?](https://ej2.syncfusion.com/react/documentation/gantt/timeline/zooming)
- [How to configure non-working days?](https://ej2.syncfusion.com/react/documentation/gantt/scheduling-tasks#weekendnon-working-days)