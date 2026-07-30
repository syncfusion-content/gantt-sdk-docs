---
layout: post
title: Taskbar in React Gantt Chart Component | Syncfusion
description: Learn how to customize taskbars in the Syncfusion React Gantt Chart component, including height, templates, and editing interactions.
platform: gantt-sdk
control: Taskbar
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Taskbar in React Gantt Chart Component

The taskbar in the [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart) component visually represents tasks on the timeline, showing duration, progress, and dependencies, enabling intuitive project management. Taskbars support customization through properties like [taskbarHeight](https://ej2.syncfusion.com/react/documentation/api/gantt#taskbarheight) for sizing and [queryTaskbarInfo](https://ej2.syncfusion.com/react/documentation/api/gantt#querytaskbarinfo) event for conditional formatting based on task data like progress. Multi-taskbar support in resource view, enabled by [enableMultiTaskbar](https://ej2.syncfusion.com/react/documentation/api/gantt#enablemultitaskbar), summarizes child task progress in collapsed parent taskbars. Connector lines, styled via [connectorLineWidth](https://ej2.syncfusion.com/react/documentation/api/gantt#connectorlinewidth) and [connectorLineBackground](https://ej2.syncfusion.com/react/documentation/api/gantt#connectorlinebackground), illustrate dependencies. Tooltips, controlled by [tooltipSettings](https://ej2.syncfusion.com/react/documentation/api/gantt/tooltipSettings/), provide hover details for taskbars, baselines, and timelines, with templates for custom content. Editing interactions include dragging for rescheduling (via [allowTaskbarDragAndDrop](https://ej2.syncfusion.com/react/documentation/api/gantt#allowtaskbardraganddrop)) and resizing for duration, progress changes, triggering events like [taskbarEditing](https://ej2.syncfusion.com/react/documentation/gantt/events#taskbarediting) and [taskbarEdited](https://ej2.syncfusion.com/react/documentation/gantt/events#taskbaredited) for validation. 

## Customize taskbar height

Taskbar height for child and parent tasks is set using the [taskbarHeight](https://ej2.syncfusion.com/react/documentation/api/gantt#taskbarheight) property, which accepts pixel values and must be less than [rowHeight](https://ej2.syncfusion.com/react/documentation/api/gantt#rowheight) to avoid overflow.

The following example demonstrates how to set a custom taskbar height of 40 pixels, delivering consistent appearance across tasks while preserving full responsiveness.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/appearanceandstyle-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/appearanceandstyle-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/appearanceandstyle-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/appearanceandstyle-cs1" %}

## Apply conditional formatting

Conditional formatting replaces default taskbar appearance using the [queryTaskbarInfo](https://ej2.syncfusion.com/react/documentation/api/gantt#querytaskbarinfo) event, accessing task data to modify colors, progress bars, or styles based on criteria like progress.

This example demonstrates formatting taskbars based on progress, where **args.data.progress** in the event handler dynamically sets **args.taskbarBgColor** and **args.progressBarBgColor** to visually highlight critical tasks or milestones.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/appearanceandstyle-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/appearanceandstyle-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/appearanceandstyle-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/appearanceandstyle-cs2" %}

## Customize gripper icons

Gripper icons for taskbar editing (start, end, progress) are customized by targeting CSS classes like **.e-gantt-left-resize-gripper** or **.e-gantt-right-resize-gripper** with custom styles, overriding default icons for branded appearances.

In the following example, the progress gripper icon is customized by targeting the .**e-gantt-progress-resize-gripper** class. The custom styles also ensure touch-friendly sizing to support responsive and accessible user interactions.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/change-gripper-icon-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/change-gripper-icon-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/change-gripper-icon-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/change-gripper-icon-cs1" %}

## Control taskbar and notes icon visibility

Taskbars and notes icons can be hidden dynamically using the [queryTaskbarInfo](https://ej2.syncfusion.com/react/documentation/api/gantt#querytaskbarinfo) and [queryCellInfo](https://ej2.syncfusion.com/react/documentation/api/gantt#querycellinfo) events, enabling conditional visibility based on task data (e.g., hiding milestones or empty notes for cleaner timelines). Hiding taskbars affects only the timeline element, not the row or labels, and requires `taskFields.notes` for notes icon rendering.

The following example hides taskbars for specific tasks and notes icons for empty notes:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/control-taskbar-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/control-taskbar-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/control-taskbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/control-taskbar-cs1" %}

This code hides taskbars for tasks with IDs 7–10 (e.g., estimation tasks) and notes icons for empty `Info` fields, using `queryTaskbarInfo` and `queryCellInfo`. The **.e-notes-info** class ensures robust icon targeting, and `taskFields.notes` enables notes rendering.

## Prevent taskbar editing for specific tasks

Taskbar editing, including dragging, resizing, or adding dependencies, can be prevented for specific tasks (e.g., locked milestones or completed tasks) using the [actionBegin](https://ej2.syncfusion.com/react/documentation/api/gantt#actionbegin) event for validation and [queryTaskbarInfo](https://ej2.syncfusion.com/react/documentation/api/gantt#querytaskbarinfo) to hide editing UI elements like grippers and connector points. This ensures visual and functional restrictions, with ARIA attributes updated for accessibility.

The following example disables taskbar editing for Task ID 4 by canceling drag, resize, and dependency actions in the `actionBegin` event and hiding resize grippers and connector points in `queryTaskbarInfo` using CSS classes. Editing remains enabled for other tasks through the `Edit` service injection and the `allowTaskbarEditing` property, while global CSS ensures the styles are applied to the Gantt Chart component’s DOM.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, Selection} from '@syncfusion/ej2-react-gantt';

const taskData = [
  { TaskId: 1, TaskName: 'Product Concept', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
  { TaskId: 2, TaskName: 'Defining the product and its usage', StartDate: new Date('04/02/2019'), Duration: 3, Progress: 30, ParentId: 1 },
  { TaskId: 3, TaskName: 'Defining target audience', StartDate: new Date('04/02/2019'), Duration: 3, ParentId: 1 },
  { TaskId: 4, TaskName: 'Prepare product sketch and notes', StartDate: new Date('04/02/2019'), Duration: 2, Predecessor: '2', Progress: 30, ParentId: 1 },
  { TaskId: 5, TaskName: 'Concept Approval', StartDate: new Date('04/02/2019'), Duration: 0, Predecessor: '3,4', Indicators: [{ date: '04/10/2019', name: '#briefing', title: 'Product concept briefing' }] },
  { TaskId: 6, TaskName: 'Market Research', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
  { TaskId: 7, TaskName: 'Demand Analysis', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019'), ParentId: 6 },
  { TaskId: 8, TaskName: 'Customer strength', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: '5', Progress: 30, ParentId: 7 },
  { TaskId: 9, TaskName: 'Market opportunity analysis', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: '5', ParentId: 7 },
  { TaskId: 10, TaskName: 'Competitor Analysis', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: '7, 8', Progress: 30, ParentId: 6 }
];

function App() {
  let gantt = null;

  const taskSettings = { id: 'TaskId', name: 'TaskName', startDate: 'StartDate', duration: 'Duration', progress: 'Progress', parentID: 'ParentId' };
  const labelSettings = { leftLabel: 'TaskName' };
  const editSettings = { allowTaskbarEditing: true };

  const projectStartDate = new Date('03/28/2019');
  const projectEndDate = new Date('04/18/2019');

  const queryTaskbarInfo = (args) => {
    if (args.data.TaskId === 4) {
      args.taskbarElement.style.cursor = 'default';
      args.taskbarElement.classList.add('e-prevent-reschedule', 'e-prevent-add-relation-left', 'e-prevent-add-relation-right');
    }
  };

  const actionBegin = (args) => {
    if (args.data.TaskId === 4 && [
      'ChildDrag', 'ProgressResizing', 'LeftResizing', 'RightResizing',
      'ConnectorPointLeftDrag', 'ConnectorPointRightDrag'
    ].includes(args.taskBarEditAction)) {
      args.cancel = true;
    }
  };

  return (
    <GanttComponent
      id="ganttDefault"
      height="430px"
      dataSource={taskData}
      taskFields={taskSettings}
      labelSettings={labelSettings}
      projectStartDate={projectStartDate}
      projectEndDate={projectEndDate}
      editSettings={editSettings}
      queryTaskbarInfo={queryTaskbarInfo}
      actionBegin={actionBegin}
      ref={(g) => (gantt = g)}
    >
      <Inject services={[Edit, Selection]} />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, Selection, IActionBeginEventArgs, IQueryTaskbarInfoEventArgs, TaskFieldsModel, LabelSettingsModel, EditSettingsModel } from '@syncfusion/ej2-react-gantt';

const taskData: object[] = [
  { TaskId: 1, TaskName: 'Product Concept', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
  { TaskId: 2, TaskName: 'Defining the product and its usage', StartDate: new Date('04/02/2019'), Duration: 3, Progress: 30, ParentId: 1 },
  { TaskId: 3, TaskName: 'Defining target audience', StartDate: new Date('04/02/2019'), Duration: 3, ParentId: 1 },
  { TaskId: 4, TaskName: 'Prepare product sketch and notes', StartDate: new Date('04/02/2019'), Duration: 2, Predecessor: '2', Progress: 30, ParentId: 1 },
  { TaskId: 5, TaskName: 'Concept Approval', StartDate: new Date('04/02/2019'), Duration: 0, Predecessor: '3,4', Indicators: [{ date: '04/10/2019', name: '#briefing', title: 'Product concept briefing' }] },
  { TaskId: 6, TaskName: 'Market Research', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
  { TaskId: 7, TaskName: 'Demand Analysis', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019'), ParentId: 6 },
  { TaskId: 8, TaskName: 'Customer strength', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: '5', Progress: 30, ParentId: 7 },
  { TaskId: 9, TaskName: 'Market opportunity analysis', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: '5', ParentId: 7 },
  { TaskId: 10, TaskName: 'Competitor Analysis', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: '7, 8', Progress: 30, ParentId: 6 }
];

function App() {
  let gantt: GanttComponent | null = null;

  const taskSettings: TaskFieldsModel = { id: 'TaskId', name: 'TaskName', startDate: 'StartDate', duration: 'Duration', progress: 'Progress', parentID: 'ParentId' };
  const labelSettings: LabelSettingsModel = { leftLabel: 'TaskName' };
  const editSettings: EditSettingsModel = { allowTaskbarEditing: true };

  const projectStartDate: Date = new Date('03/28/2019');
  const projectEndDate: Date = new Date('04/18/2019');

  const queryTaskbarInfo = (args: IQueryTaskbarInfoEventArgs): void => {
    if ((args.data as any).TaskId === 4) {
      args.taskbarElement.style.cursor = 'default';
      args.taskbarElement.classList.add('e-prevent-reschedule', 'e-prevent-add-relation-left', 'e-prevent-add-relation-right');
    }
  };

  const actionBegin = (args: IActionBeginEventArgs): void => {
    if (args.data.TaskId === 4 && [
      'ChildDrag', 'ProgressResizing', 'LeftResizing', 'RightResizing',
      'ConnectorPointLeftDrag', 'ConnectorPointRightDrag'
    ].includes(args.taskBarEditAction)) {
      args.cancel = true;
    }
  };

  return (
    <GanttComponent
      id="ganttDefault"
      height="430px"
      dataSource={taskData}
      taskFields={taskSettings}
      labelSettings={labelSettings}
      projectStartDate={projectStartDate}
      projectEndDate={projectEndDate}
      editSettings={editSettings}
      queryTaskbarInfo={queryTaskbarInfo}
      actionBegin={actionBegin}
      ref={(g) => (gantt = g)}
    >
      <Inject services={[Edit, Selection]} />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% raw %}
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Syncfusion React Gantt</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Essential JS 2 for React Components" />
    <meta name="author" content="Syncfusion" />
    <link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
    <style>
        #loader {
            color: #008cff;
            height: 40px;
            left: 45%;
            position: absolute;
            top: 45%;
            width: 30%;
        }

        .e-gantt-chart .e-prevent-reschedule .e-right-resize-gripper,
        .e-gantt-chart .e-prevent-reschedule .e-left-resize-gripper,
        .e-gantt-chart .e-prevent-reschedule .e-progress-resize-gripper {
            display: none !important;
        }

        .e-gantt-chart .e-prevent-add-relation-left .e-left-connectorpoint-outer-div {
            display: none !important;
        }

        .e-gantt-chart .e-prevent-add-relation-right .e-right-connectorpoint-outer-div {
            display: none !important;
        }
    </style>
</head>

<body>
    <div id='root'>
        <div id='loader'>Loading....</div>
    </div>
</body>

</html>
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Customize taskbar templates

Taskbar templates allow full replacement of the default taskbar UI, enabling custom designs such as progress bars, badges, or icons. You can customize task rendering using the [taskbarTemplate](https://ej2.syncfusion.com/react/documentation/api/gantt#taskbartemplate) property for child tasks. You can also use [parentTaskbarTemplate](https://ej2.syncfusion.com/react/documentation/api/gantt#parenttaskbartemplate) for parent tasks and [milestoneTemplate](https://ej2.syncfusion.com/react/documentation/api/gantt#milestonetemplate) for milestones. The **taskbarTemplate** function receives a props object that contains task-specific details and computed `ganttProperties`, such as the taskbar width and progress value. These properties can be used to dynamically calculate dimensions and control the visual presentation of the taskbar. For advanced conditional styling or logic, the [queryTaskbarInfo](https://ej2.syncfusion.com/react/documentation/gantt/events#querytaskbarinfo) event can be used.

This example renders a custom taskbar with a progress bar and a badge showing the task's progress percentage. The progress bar width is calculated from the taskbar width and progress value in props.`ganttProperties`, ensuring each taskbar displays accurate progress at runtime.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';

function App() {
    const taskData = [
        { TaskID: 1, TaskName: 'Product Concept', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
        { TaskID: 2, TaskName: 'Defining the product and its usage', StartDate: new Date('04/02/2019'), Duration: 3, Progress: 30, ParentID: 1 },
        { TaskID: 3, TaskName: 'Defining target audience', StartDate: new Date('04/02/2019'), Duration: 3, ParentID: 1 },
        { TaskID: 4, TaskName: 'Prepare product sketch and notes', StartDate: new Date('04/02/2019'), Duration: 2, Predecessor: '2', Progress: 30, ParentID: 1 },
        { TaskID: 5, TaskName: 'Concept Approval', StartDate: new Date('04/10/2019'), Duration: 0, Predecessor: '3,4', Indicators: [{ date: '04/10/2019', name: '#briefing', title: 'Product concept briefing' }] }
    ];

    const taskFields = {
        id: 'TaskID',
        name: 'TaskName', 
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID'
    };

    const labelSettings = { leftLabel: 'TaskName' };

    const taskbarTemplate = (props) => {
        const width = props.ganttProperties.width;
        const progress = props.ganttProperties.progress || 0;
        const progressWidth = (progress * width) / 100;

        return (
            <div className="e-gantt-child-taskbar-inner-div e-gantt-child-taskbar">
                <div className="e-gantt-child-progressbar-inner-div e-gantt-child-progressbar" style={{ width: `${progressWidth}px`, height: '100%' }}></div>
                <span className="e-badge e-badge-primary" style={{ marginLeft: '6px' }}>{progress}%</span>
            </div>
        );
    };

    const projectStartDate = new Date('03/28/2019');
    const projectEndDate= new Date('04/18/2019');

    return (
        <GanttComponent
            id="Gantt"
            height="450px"
            dataSource={taskData}
            taskFields={taskFields}
            labelSettings={labelSettings}
            projectStartDate={projectStartDate}
            projectEndDate={projectEndDate}
            taskbarTemplate={taskbarTemplate}
        />
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';

function App() {
    const taskData = [
        { TaskID: 1, TaskName: 'Product Concept', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
        { TaskID: 2, TaskName: 'Defining the product and its usage', StartDate: new Date('04/02/2019'), Duration: 3, Progress: 30, ParentID: 1 },
        { TaskID: 3, TaskName: 'Defining target audience', StartDate: new Date('04/02/2019'), Duration: 3, ParentID: 1 },
        { TaskID: 4, TaskName: 'Prepare product sketch and notes', StartDate: new Date('04/02/2019'), Duration: 2, Predecessor: '2', Progress: 30, ParentID: 1 },
        { TaskID: 5, TaskName: 'Concept Approval', StartDate: new Date('04/10/2019'), Duration: 0, Predecessor: '3,4', Indicators: [{ date: '04/10/2019', name: '#briefing', title: 'Product concept briefing' }] }
    ];

    const taskFields = {
        id: 'TaskID',
        name: 'TaskName', 
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID'
    };

    const labelSettings = { leftLabel: 'TaskName' };

    const taskbarTemplate = (props) => {
        const width = props.ganttProperties.width;
        const progress = props.ganttProperties.progress || 0;
        const progressWidth = (progress * width) / 100;

        return (
            <div className="e-gantt-child-taskbar-inner-div e-gantt-child-taskbar">
                <div className="e-gantt-child-progressbar-inner-div e-gantt-child-progressbar" style={{ width: `${progressWidth}px`, height: '100%' }}></div>
                <span className="e-badge e-badge-primary" style={{ marginLeft: '6px' }}>{progress}%</span>
            </div>
        );
    };

    const projectStartDate = new Date('03/28/2019');
    const projectEndDate= new Date('04/18/2019');

    return (
        <GanttComponent
            id="Gantt"
            height="450px"
            dataSource={taskData}
            taskFields={taskFields}
            labelSettings={labelSettings}
            projectStartDate={projectStartDate}
            projectEndDate={projectEndDate}
            taskbarTemplate={taskbarTemplate}
        />
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Enable multi-taskbar support

In project view, multi-taskbar support, enabled by [enableMultiTaskbar](https://ej2.syncfusion.com/react/documentation/api/gantt#enablemultitaskbar), renders parent taskbars summarizing child progress when collapsed, providing aggregated visualization.

The following example enables multi-taskbar:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/projectview-multitaskbar-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/projectview-multitaskbar-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/projectview-multitaskbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/projectview-multitaskbar-cs1" %}

This feature aggregates child progress in parent taskbars, updating dynamically on child changes.

## Customize connector lines

Connector lines for dependencies are styled using [connectorLineWidth](https://ej2.syncfusion.com/react/documentation/api/gantt#connectorlinewidth) for thickness and [connectorLineBackground](https://ej2.syncfusion.com/react/documentation/api/gantt#connectorlinebackground) for color, enhancing dependency visibility.

The following example demonstrates connector customization. The specified properties are applied globally to all connectors, while the [queryTaskbarInfo](https://ej2.syncfusion.com/react/documentation/api/gantt#querytaskbarinfo) event supports per-dependency customization through the `args.connectorLineBackground` property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/appearanceandstyle-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/appearanceandstyle-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/appearanceandstyle-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/appearanceandstyle-cs3" %}

## Configure tooltips

Tooltips for taskbars, connectors, baselines, and event markers are enabled by default via [tooltipSettings.showTooltip](https://ej2.syncfusion.com/react/documentation/api/gantt/tooltipSettings#showtooltip), set to **true**. Disable for specific elements or customize content with templates.

The following example enables tooltips:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/tooltip-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/tooltip-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/tooltip-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/tooltip-cs1" %}

Tooltips display on hover, with touch-and-hold support for mobile via the tooltip popup.

### Disable taskbar tooltip 

You can disable the taskbar tooltip using the [beforeTooltipRender](https://helpej2.syncfusion.com/react/documentation/gantt/events#beforetooltiprender) event by setting `args.cancel` to **true**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/disable-tooltip-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/disable-tooltip-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/disable-tooltip-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/disable-tooltip-cs1" %}

## Customize tooltip templates

You can customize the following tooltip types in the Gantt chart using the [tooltipSettings](https://ej2.syncfusion.com/react/documentation/api/gantt/tooltipSettings/) configuration:

### Taskbar tooltip
Taskbar tooltips are customized using [tooltipSettings.taskbar](https://ej2.syncfusion.com/react/documentation/api/gantt/tooltipSettings#taskbar) template, accessing task data for formatted content.

The following example customizes taskbar tooltips:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/tooltip-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/tooltip-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/tooltip-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/tooltip-cs4" %}

The template uses `data` to display fields like **TaskName** and **Progress**, ensuring responsive display.

### Connector line tooltip

Connector tooltips, customized via [tooltipSettings.connectorLine](https://ej2.syncfusion.com/react/documentation/api/gantt/tooltipSettings#connectorline), show dependency details like type and offset.

The following example customizes connector tooltips:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/tooltip-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/tooltip-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/tooltip-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/tooltip-cs5" %}

### Baseline tooltip

A baseline tooltip can be customized using the [tooltipSettings.baseline](https://ej2.syncfusion.com/react/documentation/api/gantt/tooltipSettings#baseline) property.

The following example customizes baseline tooltips:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/tooltip-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/tooltip-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/tooltip-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/tooltip-cs7" %}

### Timeline tooltip

Timeline tooltips, customized with [tooltipSettings.timeline](https://ej2.syncfusion.com/react/documentation/api/gantt/tooltipSettings#timeline), display date details.

The following example customizes timeline tooltips:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/timeline-tooltip-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/timeline-tooltip-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/timeline-tooltip-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/timeline-tooltip-cs1" %}

## Tooltip Touch interaction

To perform touch and hold action on a element, refer to [tooltip popup](tooltip#tooltip).

## See also
- [How to configure task dependencies?](https://ej2.syncfusion.com/react/documentation/gantt/task-dependency)
- [How to enable baseline rendering?](https://ej2.syncfusion.com/react/documentation/gantt/baseline)
- [How to customize labels?](https://ej2.syncfusion.com/react/documentation/gantt/labels)