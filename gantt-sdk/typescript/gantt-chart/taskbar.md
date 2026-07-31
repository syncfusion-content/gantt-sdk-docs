---
layout: post
title: Taskbar in TypeScript Gantt Chart Control | Syncfusion
description: Learn how to customize taskbars in the Syncfusion TypeScript Gantt Chart control, including height, templates, and editing interactions.
platform: gantt-sdk
control: Taskbar
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Taskbar in TypeScript Gantt Chart Control

The taskbar in the TypeScript Gantt Chart control visually represents tasks on the timeline, showing duration, progress, and dependencies, enabling intuitive project management. Taskbars support customization through properties like [taskbarHeight](../api/gantt#taskbarheight) for sizing and [queryTaskbarInfo](../api/gantt#querytaskbarinfo) event for conditional formatting based on task data like progress. Multi-taskbar support in resource view, enabled by [enableMultiTaskbar](../api/gantt#enablemultitaskbar), summarizes child task progress in collapsed parent taskbars. Connector lines, styled via [connectorLineWidth](../api/gantt#connectorlinewidth) and [connectorLineBackground](../api/gantt#connectorlinebackground), illustrate dependencies. Tooltips, controlled by [tooltipSettings](../api/gantt/tooltipSettings/), provide hover details for taskbars, baselines, and timelines, with templates for custom content. Editing interactions include dragging for rescheduling (via [allowTaskbarDragAndDrop](../api/gantt#allowtaskbardraganddrop)) and resizing for duration, progress changes, triggering events like [taskbarEditing](../gantt/events#taskbarediting) and [taskbarEdited](../gantt/events#taskbaredited) for validation.

## Customize taskbar height

Taskbar height for child and parent tasks is set using the [taskbarHeight](../api/gantt#taskbarheight) property, which accepts pixel values and must be less than [rowHeight](../api/gantt#rowheight) to avoid overflow.

The following example demonstrates how to set a custom taskbar height of 40 pixels, delivering consistent appearance across tasks while preserving full responsiveness.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/appearanceandstyling-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/appearanceandstyling-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/appearanceandstyling-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/appearanceandstyling-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/appearanceandstyling-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/appearanceandstyling-cs1" %}
{% endif %}

## Apply conditional formatting

Conditional formatting replaces default taskbar appearance using the [queryTaskbarInfo](../api/gantt#querytaskbarinfo) event, accessing task data to modify colors, progress bars, or styles based on criteria like progress.

This example demonstrates formatting taskbars based on progress, where **args.data.progress** in the event handler dynamically sets **args.taskbarBgColor** and **args.progressBarBgColor** to visually highlight critical tasks or milestones.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/appearanceandstyling-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/appearanceandstyling-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/appearanceandstyling-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/appearanceandstyling-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/appearanceandstyling-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/appearanceandstyling-cs2" %}
{% endif %}

## Customize gripper icons

Gripper icons for taskbar editing (start, end, progress) are customized by targeting CSS classes like **.e-gantt-left-resize-gripper** or **.e-gantt-right-resize-gripper** with custom styles, overriding default icons for branded appearances.

In the following example, the progress gripper icon is customized by targeting the .**e-gantt-progress-resize-gripper** class. The custom styles also ensure touch-friendly sizing to support responsive and accessible user interactions.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/change-gripper-icon-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/change-gripper-icon-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/change-gripper-icon-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/change-gripper-icon-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/change-gripper-icon-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/change-gripper-icon-cs1" %}
{% endif %}

## Control taskbar and notes icon visibility

Taskbars and notes icons can be hidden dynamically using the [queryTaskbarInfo](../api/gantt#querytaskbarinfo) and [queryCellInfo](../api/gantt#querycellinfo) events, enabling conditional visibility based on task data (e.g., hiding milestones or empty notes for cleaner timelines). Hiding taskbars affects only the timeline element, not the row or labels, and requires `taskFields.notes` for notes icon rendering.

The following example hides taskbars for specific tasks and notes icons for empty notes:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/taskbar-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/taskbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/taskbar-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/taskbar-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/taskbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/taskbar-cs1" %}
{% endif %}

This code hides taskbars for tasks with IDs 7–10 (e.g., estimation tasks) and notes icons for empty `Info` fields, using `queryTaskbarInfo` and `queryCellInfo`. The **.e-notes-info** class ensures robust icon targeting, and `taskFields.notes` enables notes rendering.

## Prevent taskbar editing for specific tasks

Taskbar editing, including dragging, resizing, or adding dependencies, can be prevented for specific tasks (e.g., locked milestones or completed tasks) using the [actionBegin](../api/gantt#actionbegin) event for validation and [queryTaskbarInfo](../api/gantt#querytaskbarinfo) to hide editing UI elements like grippers and connector points. This ensures visual and functional restrictions, with ARIA attributes updated for accessibility.

The following example disables taskbar editing for Task ID 4 by canceling drag, resize, and dependency actions in the `actionBegin` event and hiding resize grippers and connector points in `queryTaskbarInfo` using CSS classes. Editing remains enabled for other tasks through the `Edit` service injection and the `allowTaskbarEditing` property, while global CSS ensures the styles are applied to the Gantt Chart component’s DOM.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

import { Gantt, Edit, Selection, IActionBeginEventArgs, IQueryTaskbarInfoEventArgs } from '@syncfusion/ej2-gantt';

Gantt.Inject(Edit, Selection);

let gantt: Gantt = new Gantt({
dataSource: [
{ TaskId: 1, TaskName: 'Product Concept', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
{ TaskId: 2, TaskName: 'Defining the product and its usage', StartDate: new Date('04/02/2019'), Duration: 3, Progress: 30, ParentId: 1 },
{ TaskId: 3, TaskName: 'Defining target audience', StartDate: new Date('04/02/2019'), Duration: 3, ParentId: 1 },
{ TaskId: 4, TaskName: 'Prepare product sketch and notes', StartDate: new Date('04/02/2019'), Duration: 2, Progress: 30, Predecessor: '2', ParentId: 1 },
{ TaskId: 5, TaskName: 'Concept Approval', StartDate: new Date('04/02/2019'), Duration: 0, Predecessor: '3,4', Indicators: [{ date: '04/10/2019', name: '#briefing', title: 'Product concept briefing' }] },
{ TaskId: 6, TaskName: 'Market Research', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
{ TaskId: 7, TaskName: 'Demand Analysis', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019'), ParentId: 6 },
{ TaskId: 8, TaskName: 'Customer strength', StartDate: new Date('04/04/2019'), Duration: 4, Progress: 30, Predecessor: '5', ParentId: 7 },
{ TaskId: 9, TaskName: 'Market opportunity analysis', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: '5', ParentId: 7 },
{ TaskId: 10, TaskName: 'Competitor Analysis', StartDate: new Date('04/04/2019'), Duration: 4, Progress: 30, Predecessor: '7,8', ParentId: 6 }
],
height: '430px',
projectStartDate: new Date('03/28/2019'),
projectEndDate: new Date('04/18/2019'),
taskFields: {
id: 'TaskId',
name: 'TaskName',
startDate: 'StartDate',
duration: 'Duration',
progress: 'Progress',
parentID: 'ParentId'
},
labelSettings: {
leftLabel: 'TaskName'
},
editSettings: {
allowTaskbarEditing: true
},
queryTaskbarInfo: (args: IQueryTaskbarInfoEventArgs) => {
if ((args.data as any).TaskId === 4) {
args.taskbarElement.style.cursor = 'default';
args.taskbarElement.classList.add(
'e-prevent-reschedule',
'e-prevent-add-relation-left',
'e-prevent-add-relation-right'
);
}
},
actionBegin: (args: IActionBeginEventArgs) => {
if (
(args.data as any).TaskId === 4 &&
[
'ChildDrag',
'ProgressResizing',
'LeftResizing',
'RightResizing',
'ConnectorPointLeftDrag',
'ConnectorPointRightDrag'
].includes(args.taskBarEditAction as string)
) {
args.cancel = true;
}
}
});

gantt.appendTo('#Gantt');

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 Gantt</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Typescript Gantt Controls" />
    <meta name="author" content="Syncfusion" />
    <link href="index.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
    <style>
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
    <div id='loader'>Loading....</div>
    <div id='container'>
        <div id='Gantt'></div>
    </div>
</body>

</html>

{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}

let GanttData = [
{ TaskId: 1, TaskName: 'Product Concept', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
{ TaskId: 2, TaskName: 'Defining the product and its usage', StartDate: new Date('04/02/2019'), Duration: 3, Progress: 30, ParentId: 1 },
{ TaskId: 3, TaskName: 'Defining target audience', StartDate: new Date('04/02/2019'), Duration: 3, ParentId: 1 },
{ TaskId: 4, TaskName: 'Prepare product sketch and notes', StartDate: new Date('04/02/2019'), Duration: 2, Progress: 30, Predecessor: '2', ParentId: 1 },
{ TaskId: 5, TaskName: 'Concept Approval', StartDate: new Date('04/02/2019'), Duration: 0, Predecessor: '3,4', Indicators: [{ date: '04/10/2019', name: '#briefing', title: 'Product concept briefing' }] },
{ TaskId: 6, TaskName: 'Market Research', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
{ TaskId: 7, TaskName: 'Demand Analysis', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019'), ParentId: 6 },
{ TaskId: 8, TaskName: 'Customer strength', StartDate: new Date('04/04/2019'), Duration: 4, Progress: 30, Predecessor: '5', ParentId: 7 },
{ TaskId: 9, TaskName: 'Market opportunity analysis', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: '5', ParentId: 7 },
{ TaskId: 10, TaskName: 'Competitor Analysis', StartDate: new Date('04/04/2019'), Duration: 4, Progress: 30, Predecessor: '7,8', ParentId: 6 }
];

var ganttChart = new ej.gantt.Gantt({
dataSource: GanttData,
height: '430px',
projectStartDate: new Date('03/28/2019'),
projectEndDate: new Date('04/18/2019'),
taskFields: {
id: 'TaskId',
name: 'TaskName',
startDate: 'StartDate',
duration: 'Duration',
progress: 'Progress',
parentID: 'ParentId'
},
labelSettings: {
leftLabel: 'TaskName'
},
editSettings: {
allowTaskbarEditing: true
},
queryTaskbarInfo: function (args) {
if (args.data.TaskId === 4) {
args.taskbarElement.style.cursor = 'default';
args.taskbarElement.classList.add(
'e-prevent-reschedule',
'e-prevent-add-relation-left',
'e-prevent-add-relation-right'
);
}
},
actionBegin: function (args) {
if (
args.data.TaskId === 4 &&
[
'ChildDrag',
'ProgressResizing',
'LeftResizing',
'RightResizing',
'ConnectorPointLeftDrag',
'ConnectorPointRightDrag'
].indexOf(args.taskBarEditAction) !== -1
) {
args.cancel = true;
}
}
});

ganttChart.appendTo('#Gantt');

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 Gantt</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Typescript Gantt Controls">
    <meta name="author" content="Syncfusion">
    <link href="index.css" rel="stylesheet">
    <link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css">
    <script src="https://cdn.syncfusion.com/ej2/32.1.19/dist/ej2.min.js" type="text/javascript"></script>
    <script src="es5-datasource.js" type="text/javascript"></script>
    <style>
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
    <div id="container">
        <div id="Gantt"></div>
    </div>
    <script>
        var ele = document.getElementById('container');
        if (ele) {
            ele.style.visibility = "visible";
        }
    </script>
    <script src="index.js" type="text/javascript"></script>
</body>

</html>

{% endhighlight %}
{% endtabs %}

{% endif %}

## Customize taskbar templates

Taskbar templates allow full replacement of the default taskbar UI, enabling custom designs such as progress bars, badges, or icons. You can customize task rendering using the [taskbarTemplate](../api/gantt#taskbartemplate) property for child tasks. You can also use [parentTaskbarTemplate](../api/gantt#parenttaskbartemplate) for parent tasks and [milestoneTemplate](../api/gantt#milestonetemplate) for milestones. The **taskbarTemplate** function receives a props object that contains task-specific details and computed `ganttProperties`, such as the taskbar width and progress value. These properties can be used to dynamically calculate dimensions and control the visual presentation of the taskbar. For advanced conditional styling or logic, the [queryTaskbarInfo](../gantt/events#querytaskbarinfo) event can be used.

This example renders a custom taskbar with a progress bar and a badge showing the task's progress percentage. The progress bar width is calculated from the taskbar width and progress value in props.`ganttProperties`, ensuring each taskbar displays accurate progress at runtime.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/customizations-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/customizations-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/customizations-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/customizations-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% endif %}

## Enable multi-taskbar support

In project view, multi-taskbar support, enabled by [enableMultiTaskbar](../api/gantt#enablemultitaskbar), renders parent taskbars summarizing child progress when collapsed, providing aggregated visualization.

The following example enables multi-taskbar:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/projectview-multitaskbar-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/projectview-multitaskbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/projectview-multitaskbar-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/projectview-multitaskbar-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/projectview-multitaskbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/projectview-multitaskbar-cs1" %}
{% endif %}

This feature aggregates child progress in parent taskbars, updating dynamically on child changes.

## Customize connector lines

Connector lines for dependencies are styled using [connectorLineWidth](../api/gantt#connectorlinewidth) for thickness and [connectorLineBackground](../api/gantt#connectorlinebackground) for color, enhancing dependency visibility.

The following example demonstrates connector customization. The specified properties are applied globally to all connectors, while the [queryTaskbarInfo](../api/gantt#querytaskbarinfo) event supports per-dependency customization through the `args.connectorLineBackground` property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/appearanceandstyling-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/appearanceandstyling-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/appearanceandstyling-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/appearanceandstyling-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/appearanceandstyling-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/appearanceandstyling-cs3" %}
{% endif %}

## Configure tooltips

Tooltips for taskbars, connectors, baselines, and event markers are enabled by default via [tooltipSettings.showTooltip](../api/gantt/tooltipSettings#showtooltip), set to **true**. Disable for specific elements or customize content with templates.

The following example enables tooltips:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/gantt-tooltip-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/gantt-tooltip-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/gantt-tooltip-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/gantt-tooltip-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/gantt-tooltip-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/gantt-tooltip-cs1" %}
{% endif %}

Tooltips display on hover, with touch-and-hold support for mobile via the tooltip popup.

### Disable taskbar tooltip

You can disable the taskbar tooltip using the [beforeTooltipRender](../gantt/events#beforetooltiprender) event by setting `args.cancel` to **true**.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/disable-tooltip-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/disable-tooltip-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/disable-tooltip-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/disable-tooltip-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/disable-tooltip-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/disable-tooltip-cs1" %}
{% endif %}

## Customize tooltip templates

You can customize the following tooltip types in the Gantt chart using the [tooltipSettings](../api/gantt/tooltipSettings/) configuration:

### Taskbar tooltip

Taskbar tooltips are customized using [tooltipSettings.taskbar](../api/gantt/tooltipSettings#taskbar) template, accessing task data for formatted content.

The following example customizes taskbar tooltips:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/taskbarTooltip-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/taskbarTooltip-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/taskbarTooltip-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/taskbarTooltip-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/taskbarTooltip-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/taskbarTooltip-cs1" %}
{% endif %}

The template uses `data` to display fields like **TaskName** and **Progress**, ensuring responsive display.

### Connector line tooltip

Connector tooltips, customized via [tooltipSettings.connectorLine](../api/gantt/tooltipSettings#connectorline), show dependency details like type and offset.

The following example customizes connector tooltips:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/connectorLineTooltip-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/connectorLineTooltip-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/connectorLineTooltip-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/connectorLineTooltip-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/connectorLineTooltip-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/connectorLineTooltip-cs1" %}
{% endif %}

### Baseline tooltip

A baseline tooltip can be customized using the [tooltipSettings.baseline](../api/gantt/tooltipSettings#baseline) property.

The following example customizes baseline tooltips:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/baselineTooltip-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/baselineTooltip-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/baselineTooltip-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/baselineTooltip-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/baselineTooltip-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/baselineTooltip-cs1" %}
{% endif %}

### Timeline tooltip

Timeline tooltips, customized with [tooltipSettings.timeline](../api/gantt/tooltipSettings#timeline), display date details.

The following example customizes timeline tooltips:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/timelineTooltip-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/timelineTooltip-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/timelineTooltip-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/timelineTooltip-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/timelineTooltip-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/timelineTooltip-cs1" %}
{% endif %}

## Tooltip Touch interaction

To perform touch and hold action on a element, refer to [tooltip popup](tooltip#tooltip).

## See also

- [How to configure task dependencies?](../gantt/task-dependency)
- [How to enable baseline rendering?](../gantt/baseline)
- [How to customize labels?](../gantt/labels)
