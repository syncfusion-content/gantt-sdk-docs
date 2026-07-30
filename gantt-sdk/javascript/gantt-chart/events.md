---
layout: post
title: Events in JavaScript Gantt control | Syncfusion
description: Learn here all about Events in Syncfusion JavaScript Gantt control of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Events 
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Events in JavaScript Gantt Component

The [JavaScript Gantt Chart](https://www.syncfusion.com/javascript-ui-controls/js-gantt-chart) component offers comprehensive support for visualizing project schedules, task management, and timeline tracking through interactive charts. This documentation provides insights into leveraging the component's rich event-driven architecture to customize and control Gantt operations effectively. Events in the Gantt Chart enable you to execute custom logic and integrations, offering flexibility for both simple and complex scenarios.

## actionBegin

The [actionBegin](../api/gantt#actionbegin) event triggers before the Gantt component processes actions such as **adding**, **editing(cell, dialog, taskbar)**, **deleting**, **sorting**, **filtering**, **dependency changes**, and **zooming**. It provides detailed contextual information through the [ActionBeginArgs](../api/gantt/actionBeginArgs) argument. The argument type and structure depend on the triggered operation. Each argument type provides specific properties to help you inspect and modify the action.

The event argument structure varies based on the operation type. The following tables describe the supported argument types and their properties.

**1. [ActionBeginArgs](../api/gantt/actionBeginArgs)**

| **Property**             | **Type**       | **Description**                                                                 |
|--------------------------|----------------|---------------------------------------------------------------------------------|
| `action`                 | string       | Defines the type of action being performed.                                     |
| `fromItem`              | IGanttData   | Specifies the predecessor task in a dependency relationship.                    |
| `isValidLink`           | boolean      | Indicates whether the dependency link is valid.                                 |
| `mergeSegmentIndexes`   | Object[]     | Contains indexes of segments to be merged during a context click action.        |
| `newPredecessorString`  | string       | Represents the updated predecessor string.                                      |
| `newTaskData`           | object      | Holds the newly added task data, excluding custom Gantt properties.  |
| `predecessor`           | IPredecessor | Defines the predecessor object involved in the action.                          |
| `recordIndex`           | number      | Specifies the index of the record being acted upon.                             |
| `splitDate`             | Date         | Indicates the date at which a task is split during a context click action.      |
| `target`                | Element      | Refers to the target HTML element involved in the action.                       |
| `toItem`                | IGanttData   | Specifies the successor task in a dependency relationship.                      |
| `type`                  | string       | Defines the type of event triggered.                                            |

**2. [ITimeSpanEventArgs](../api/gantt/iTimeSpanEventArgs) (Taskbar editing)**

| **Property**           | **Type**   | **Description**                                                                 |
|------------------------|------------|---------------------------------------------------------------------------------|
| `cancel`              | boolean  | Set to **true** to cancel the current action before it is processed.             |
| `isTimelineRoundOff`  | boolean  | Indicates whether timeline rounding is applied during taskbar editing.         |
| `projectStartDate`    | Date     | Start date of the overall project. Useful for validating task boundaries.      |
| `projectEndDate`      | Date    | End date of the overall project. Useful for validating task boundaries.        |
| `requestType`         | string   | Describes the type of request. For taskbar editing, values include **taskbarEditing**. |

**3. [ITaskAddedEventArgs](../api/gantt/iTaskAddedEventArgs) (Adding/Editing/Deleting tasks)**

| **Property**        | **Type**     | **Description**                                                                 |
|---------------------|--------------|---------------------------------------------------------------------------------|
| `action`            | string     | Specifies the type of action, such as **beforeAdd** or **beforeDelete**.           |
| `cancel`            | boolean    | Set to **true** to cancel the current action.                                    |
| `data`              | object     | Contains the original task data before modification.                           |
| `modifiedRecords`   | object[]   | Array of records that were modified during the action.                         |
| `modifiedTaskData`  | object[]   | Array of task data after modification.                                         |
| `newTaskData`       | object     | Data of the newly added task, if applicable.                                   |
| `recordIndex`       | number     | Index of the record being modified or added.                                   |
| `requestType`       | string     | Describes the type of request, such as **beforeAdd** or **beforeDelete**.         |
| `rowPosition`       | string     | Indicates the position where the new row is added. Possible values: **Top**, **Bottom**, **Above**, **Below**. |

**4. [FilterEventArgs](../api/grid/filterEventArgs) (Filtering)**

| **Property**             | **Type**     | **Description**                                                                 |
|--------------------------|--------------|---------------------------------------------------------------------------------|
| `cancel`                 | boolean    | Set to **true** to cancel the filtering action.                                |
| `columns`                | object[]   | Array of columns involved in filtering.                                        |
| `currentFilterObject`    | object     | Filter object representing the current filter condition.                       |
| `currentFilteringColumn` | string     | Name of the column currently being filtered.                                   |
| `requestType`            | string     | Describes the type of request, typically **filtering**.                        |
| `type`                   | string     | Event type identifier.                                                         |

**5. [SortEventArgs](../api/grid/sortEventArgs) (Sorting)**

| **Property**     | **Type**   | **Description**                                                                 |
|------------------|------------|---------------------------------------------------------------------------------|
| `cancel`         | boolean  | Set to **true** to cancel the sorting action.                                  |
| `columnName`     | string   | Name of the column being sorted.                                               |
| `direction`      | string   | Sort direction: **Ascending** or **Descending**.                               |
| `requestType`    | string   | Describes the type of request, typically **sorting**.                          |
| `type`           | string   | Event type identifier.                                                         |

**6. [IDependencyEventArgs](../api/gantt/iDependencyEventArgs) (Dependency editing)**

| **Property**              | **Type**   | **Description**                                                                 |
|---------------------------|------------|---------------------------------------------------------------------------------|
| `fromItem`                | object   | Source task object in the dependency link.                                     |
| `isValidLink`             | boolean  | Indicates whether the new dependency link is valid.                            |
| `newPredecessorString`    | string   | New predecessor string after editing.                                          |
| `predecessor`             | string   | Original predecessor string before editing.                                    |
| `requestType`             | string  | Describes the type of request, typically **validateDependency** or **updateDependency**. |
| `toItem`                  | object   | Target task object in the dependency link.                                     |

**7. [ZoomEventArgs](../api/gantt/zoomEventArgs) (Zooming)**

| **Property**     | **Type**   | **Description**                                                                 |
|------------------|------------|---------------------------------------------------------------------------------|
| `cancel`         | boolean  | Set to **true** to cancel the zoom action.                                     |
| `name`           | string   | Name of the event.                                                             |
| `requestType`    | string   | Describes the type of request, typically **zooming**.                          |
| `timeline`       | object   | Timeline settings after zoom is applied.                                       |

{% if page.publishingplatform == "typescript" %}
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt,Edit, Selection, Toolbar, Sort, Filter, ITimeSpanEventArgs, ITaskAddedEventArgs, IDependencyEventArgs, ZoomEventArgs } from '@syncfusion/ej2-gantt';
import { FilterEventArgs, SortEventArgs } from '@syncfusion/ej2-grids';

Gantt.Inject(Edit, Selection, Toolbar, Sort, Filter);

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
    dataSource: data,
    allowFiltering: true,
    allowSorting: true,
    projectStartDate: new Date('03/31/2024'),
    projectEndDate: new Date('05/30/2024'),
    editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
    toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'ZoomIn', 'ZoomOut', 'ZoomToFit'],
    actionBegin: actionBegin,
    height: '450px',
    columns :[
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
    taskFields: {
       id: 'TaskID',
       name: 'TaskName',
       startDate: 'StartDate',
       duration: 'Duration',
       progress: 'Progress',
       dependency: 'Predecessor',
       child: 'subtasks'
    }
});

gantt.appendTo('#Gantt');

function actionBegin(args:ITimeSpanEventArgs | ITaskAddedEventArgs | IDependencyEventArgs | ZoomEventArgs | FilterEventArgs | SortEventArgs) {
     // Executes logic before saving a task or dependency.
    if (args.requestType === 'beforeSave') {
      console.log('Action: Before save');
    } 
    // Executes logic before applying a filter to the Gantt data.
    else if (args.requestType === 'filtering') {
      console.log('Action: Filtering');
    } 
    // Executes logic before sorting the Gantt data.
    else if (args.requestType === 'sorting') {
      console.log('Action: Sorting');
    } 
    // Executes logic before zooming in or out of the Gantt chart.
    else if (args.requestType === 'beforeZoomIn' || args.requestType === 'beforeZoomOut') {
      console.log('Action: Zooming');
    }

}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Selection, ej.gantt.Toolbar, ej.gantt.Sort, ej.gantt.Filter);

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
    dataSource: data,
    allowFiltering: true,
    allowSorting: true,
    projectStartDate: new Date('03/31/2024'),
    projectEndDate: new Date('05/30/2024'),
    editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
    toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'ZoomIn', 'ZoomOut', 'ZoomToFit'],
    actionBegin: actionBegin,
    height: '450px',
    columns :[
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
    taskFields: {
       id: 'TaskID',
       name: 'TaskName',
       startDate: 'StartDate',
       duration: 'Duration',
       progress: 'Progress',
       dependency: 'Predecessor',
       child: 'subtasks'
    }
});

function actionBegin(args) {
     // Executes logic before saving a task or dependency.
    if (args.requestType === 'beforeSave') {
      console.log('Action: Before save');
    } 
    // Executes logic before applying a filter to the Gantt data.
    else if (args.requestType === 'filtering') {
      console.log('Action: Filtering');
    } 
    // Executes logic before sorting the Gantt data.
    else if (args.requestType === 'sorting') {
      console.log('Action: Sorting');
    } 
    // Executes logic before zooming in or out of the Gantt chart.
    else if (args.requestType === 'beforeZoomIn' || args.requestType === 'beforeZoomOut') {
      console.log('Action: Zooming');
    }

}

gantt.appendTo('#Gantt');

{% endraw %}
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

## actionComplete

The [actionComplete](../api/gantt#actioncomplete) event is triggered after the Gantt component successfully completes an operation such as **adding**, **editing(cell, dialog, taskbar)**, **deleting**, **sorting**, **filtering**, **dependency changes**, and **zooming**. It provides detailed contextual information about the completed action through the [ActionCompleteArgs](../api/gantt/actionCompleteArgs) argument. The structure of this argument varies depending on the type of operation performed, and includes specific properties that allow you to inspect the outcome and implement custom logic based on the completed action. 

Below are detailed descriptions of each argument type's properties, and their purposes.

**1. [ActionCompleteArgs](../api/gantt/actionCompleteArgs)**

| **Property**       | **Type**                | **Description**                                                                 |
|--------------------|-------------------------|---------------------------------------------------------------------------------|
| `action`           | string               | Defines the action performed during the event.                                 |
| `keyEvent`         | Event                 | Defines the key event triggered.                                               |
| `newTaskData`      | object                | Specifies the newly added task data without custom Gantt properties.           |
| `recordIndex`      | number                | Defines the index of the record involved in the event.                         |
| `timeline`         | ZoomTimelineSettings  | Defines the settings applied to the Zoom timeline.                             |
| `type`             | string                | Defines the type of the event.                                                 |

**2. [FilterEventArgs](../api/grid/filterEventArgs) (Filtering)**

| **Property**             | **Type**     | **Description** |
|--------------------------|--------------|-----------------|
| `cancel`                 | boolean    | Set to **true** to cancel the filtering action. |
| `columns`                | object[]   | Array of columns involved in filtering. |
| `currentFilterObject`    | object     | Filter object representing the current filter condition. |
| `currentFilteringColumn` | string     | Name of the column currently being filtered. |
| `requestType`            | string     | Describes the type of request like **filtering**, **filterAfterOpen**. |
| `type`                   | string     | Event type identifier. |

**3. [SortEventArgs](../api/grid/sortEventArgs) (Sorting)**

| **Property**     | **Type**   | **Description** |
|------------------|------------|-----------------|
| `cancel`         | boolean  | Set to **true** to cancel the sorting action. |
| `columnName`     | string   | Name of the column being sorted. |
| `direction`      | string   | Sort direction: **Ascending** or **Descending**. |
| `requestType`    | string   | Describes the type of request, typically **sorting**. |
| `type`           | string   | Event type identifier. |

**4. [ITaskAddedEventArgs](../api/gantt/iTaskAddedEventArgs) (Adding/Editing/Deleting tasks)**

| **Property**        | **Type**     | **Description** |
|---------------------|--------------|-----------------|
| `action`            | string     | Specifies the type of action, such as **add** or **delete**. |
| `cancel`            | boolean   | Set to **true** to cancel the current action. |
| `data`              | object    | Contains the original task data before modification. |
| `modifiedRecords`   | object[]   | Array of records that were modified during the action. |
| `modifiedTaskData`  | object[]   | Array of task data after modification. |
| `newTaskData`       | object     | Data of the newly added task (if applicable). |
| `recordIndex`       | number    | Index of the record being modified or added. |
| `requestType`       | string     | Describes the type of request, such as **beforeSave**, **beforeDelete**. |
| `rowPosition`       | string     | Indicates the position where the new row is added. Possible values: **Top**, **Bottom**, **Above**, **Below**. |

**5. [ZoomEventArgs](../api/gantt/zoomEventArgs) (Zooming)**

| **Property**     | **Type**   | **Description** |
|------------------|------------|-----------------|
| `cancel`         | boolean  | Set to **true** to cancel the zoom action. |
| `name`           | string   |  Name of the event |
| `requestType`    | string   | Describes the type of request, typically **zooming**. |
| `timeline`       | object  | Timeline settings after zoom is applied. |

{% if page.publishingplatform == "typescript" %}
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Selection, Toolbar, Sort, Filter, ActionCompleteArgs, ITaskAddedEventArgs, ZoomEventArgs } from '@syncfusion/ej2-gantt';
import { FilterEventArgs, SortEventArgs } from '@syncfusion/ej2-grids';

Gantt.Inject(Edit, Selection, Toolbar, Sort, Filter);

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  allowFiltering: true,
  allowSorting: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ZoomIn', 'ZoomOut', 'ZoomToFit'],
  actionComplete:  actionComplete,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks',
  }
});

gantt.appendTo('#Gantt');

function actionComplete(args: ActionCompleteArgs | FilterEventArgs | SortEventArgs | ZoomEventArgs | ITaskAddedEventArgs) {
  switch (args.requestType) {
    case 'filtering':
      {
        // Cast args to FilterEventArgs to access filtering-specific properties.
        const filterArgs = args as FilterEventArgs;
        console.log('Filtering applied on column:', filterArgs.currentFilteringColumn);
        console.log('Filter condition:', filterArgs.currentFilterObject);
        break;
      }
    case 'sorting':
      {
        // Cast args to SortEventArgs to access sorting-specific properties.
        const sortArgs = args as SortEventArgs;
        console.log(`Sorted column: ${sortArgs.columnName}`);
        console.log(`Sort direction: ${sortArgs.direction}`);
        break;
      }
    case 'save':
      {
        // Cast args to ITaskAddedEventArgs to access task save-specific properties.
        const taskArgs = args as ITaskAddedEventArgs;
        console.log('Task saved:', taskArgs.modifiedTaskData);// Modified task data after save
        console.log('Original data:', taskArgs.data);// Original task data before modification
        break;
      }
    case 'delete':
      {
        // Cast args to ITaskAddedEventArgs to access task delete-specific properties.
        // Records deleted from Gantt.
        console.log('Deleted records:', args.modifiedRecords);
        break;
      }
    case 'AfterZoomIn':
    case 'AfterZoomOut':
    case 'AfterZoomToProject':
      {
        // Cast args to ZoomEventArgs to access zoom-specific properties.
        const zoomArgs = args as ZoomEventArgs;
        console.log('Zoom action:', zoomArgs.requestType);// Type of zoom action performed.
        console.log('Updated timeline settings:', zoomArgs.timeline);// Timeline settings after zoom.
        break;
      }
    default:
      {
        // Handle any other unspecified actions.
        console.log('Other action:', args.requestType);
        break;
      }
  };
};

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
</head>

<body>
       
     <div id='loader'>Loading....</div>
    <div id='container'>
	   <button id="addRow">Add Row</button>  
        <div id='Gantt'></div>        
    </div>
</body>

</html>

{% endhighlight %}
{% endtabs %}
        
{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% raw %}

ej.gantt.Gantt.Inject(Edit, Selection, Toolbar, Sort, Filter);

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  allowFiltering: true,
  allowSorting: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ZoomIn', 'ZoomOut', 'ZoomToFit'],
  actionComplete: actionComplete,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks',
  }
});

function actionComplete(args) {
  switch (args.requestType) {
    case 'filtering':
      {
        // Cast args to FilterEventArgs to access filtering-specific properties.
        const filterArgs = args;
        console.log('Filtering applied on column:', filterArgs.currentFilteringColumn);
        console.log('Filter condition:', filterArgs.currentFilterObject);
        break;
      }
    case 'sorting':
      {
        // Cast args to SortEventArgs to access sorting-specific properties.
        const sortArgs = args;
        console.log(`Sorted column: ${sortArgs.columnName}`);
        console.log(`Sort direction: ${sortArgs.direction}`);
        break;
      }
    case 'save':
      {
        // Cast args to ITaskAddedEventArgs to access task save-specific properties.
        const taskArgs = args;
        console.log('Task saved:', taskArgs.modifiedTaskData);// Modified task data after save
        console.log('Original data:', taskArgs.data);// Original task data before modification
        break;
      }
    case 'delete':
      {
        // Cast args to ITaskAddedEventArgs to access task delete-specific properties.
        // Records deleted from Gantt.
        console.log('Deleted records:', args.modifiedRecords);
        break;
      }
    case 'AfterZoomIn':
    case 'AfterZoomOut':
    case 'AfterZoomToProject':
      {
        // Cast args to ZoomEventArgs to access zoom-specific properties.
        const zoomArgs = args;
        console.log('Zoom action:', zoomArgs.requestType);// Type of zoom action performed.
        console.log('Updated timeline settings:', zoomArgs.timeline);// Timeline settings after zoom.
        break;
      }
    default:
      {
        // Handle any other unspecified actions.
        console.log('Other action:', args.requestType);
        break;
      }
  };
};

gantt.appendTo('#Gantt');

{% endraw %}
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

## actionFailure

The [actionFailure](../api/gantt#actionfailure) event is triggered when an operation in the Gantt encounters an error due to configuration issues, invalid data, or missing modules. It returns a [FailureEventArgs](../api/grid/failureEventArgs#failureeventargs) object containing detailed information about the failure, including the following property:

| **Property**     | **Type**   | **Description** |
|------------------|------------|-----------------|
| `error`         | Error   |Defines the error information. |

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Selection } from '@syncfusion/ej2-gantt';
import { FailureEventArgs } from '@syncfusion/ej2-grids';

Gantt.Inject(Selection);

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  projectStartDate: new Date('2024-03-31'),
  projectEndDate: new Date('2024-05-30'),
  treeColumnIndex: 1,
  splitterSettings: { position: '50%' },
  actionFailure: handleActionFailure,
  height: '450px',
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks',
  }
});

function handleActionFailure(args: FailureEventArgs) {
  const span = document.createElement('span');
  const ganttInstance = gantt;
  if (ganttInstance) {
    ganttInstance.element.parentNode.insertBefore(span, ganttInstance.element);
    span.style.color = "#FF0000";
    span.style.marginLeft = "190px";
    span.innerHTML = args.error[0];
  }
};

gantt.appendTo('#Gantt');

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Selection);

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  projectStartDate: new Date('2024-03-31'),
  projectEndDate: new Date('2024-05-30'),
  treeColumnIndex: 1,
  splitterSettings: { position: '50%' },
  actionFailure: handleActionFailure,
  height: '450px',
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks',
  }
});

function handleActionFailure(args) {
  const span = document.createElement('span');
  const ganttInstance = gantt;
  if (ganttInstance) {
    ganttInstance.element.parentNode.insertBefore(span, ganttInstance.element);
    span.style.color = "#FF0000";
    span.style.marginLeft = "190px";
    span.innerHTML = args.error[0];
  }
};

gantt.appendTo('#Gantt');

{% endraw %}
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

## beforeExcelExport

The [beforeExcelExport](../api/gantt#beforeexcelexport) event is triggered before initiating data export from the Gantt component to Excel or CSV format. This event enables conditional control over the export process, such as canceling the operation or applying format-specific logic.

The event argument is an `object` containing the following properties:

| **Property** | **Type**   | **Description**                                                   |
|--------------|------------|-------------------------------------------------------------------|
| `cancel`     | boolean    | Set to **true** to cancel the export.                             | 
| `isCsv`      | boolean    | Indicates if the export is CSV (**true**) or Excel (**false**).   | 
| `name`       | string     | Event name, typically **beforeExcelExport**.                      | 

{% if page.publishingplatform == "typescript" %}
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection, ExcelExport } from '@syncfusion/ej2-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

Gantt.Inject(Edit, Toolbar, Selection, ExcelExport);

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  allowExcelExport: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'ExcelExport', 'CsvExport'],
  toolbarClick: toolbarClick,
  beforeExcelExport: beforeExcelExport,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function toolbarClick(args: ClickEventArgs): void {
  if (args.item.id === 'Gantt_excelexport') {
    gantt.excelExport();
  } else if (args.item.id === 'Gantt_csvexport') {
    gantt.csvExport();
  }
}

function beforeExcelExport(args: { name: string; isCsv: boolean }) {
  console.log(`[${args.name}] Exporting to ${args.isCsv ? 'CSV' : 'Excel'} at ${new Date().toISOString()}`);
}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Selection, ej.gantt.ExcelExport);

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  allowExcelExport: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'ExcelExport', 'CsvExport'],
  toolbarClick: toolbarClick,
  beforeExcelExport: beforeExcelExport,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function toolbarClick(args) {
  if (args.item.id === 'Gantt_excelexport') {
    gantt.excelExport();
  } else if (args.item.id === 'Gantt_csvexport') {
    gantt.csvExport();
  }
}

function beforeExcelExport(args) {
  console.log(`[${args.name}] Exporting to ${args.isCsv ? 'CSV' : 'Excel'} at ${new Date().toISOString()}`);
}

{% endraw %}
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

## beforePdfExport

The [beforePdfExport](../api/gantt#beforepdfexport) event is triggered before exporting Gantt data to a PDF file. This event provides an opportunity to conditionally cancel the export or modify behavior based on the current Gantt configuration.

The event provides an argument of type `object` with the following properties:

| **Property**   | **Type**   | **Description**                                                  |
|----------------|------------|------------------------------------------------------------------|
| `cancel`       | boolean    | Set **true** to cancel PDF export.                               |
| `ganttObject`  | Object     | Reference to the Gantt Chart instance.                           |
| `name`         | string     | Event name, typically **beforePdfExport**.                       |
| `requestType`  | string     | Type of request, typically **beforePdfExport**.                  |

{% if page.publishingplatform == "typescript" %}
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection, PdfExport } from '@syncfusion/ej2-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

Gantt.Inject(Edit, Toolbar, Selection, PdfExport);

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  allowPdfExport: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'PdfExport'],
  toolbarClick: toolbarClick,
  beforePdfExport: beforePdfExport,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function toolbarClick(args: ClickEventArgs): void {
  if (args.item.id === 'Gantt_pdfexport') {
    gantt.pdfExport();
  }
}

function beforePdfExport(args: { name: string }): void {
  console.log(`[${args.name}] PDF export triggered at ${new Date().toISOString()}`);
}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Selection, ej.gantt.PdfExport);

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  allowPdfExport: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'PdfExport'],
  toolbarClick: toolbarClick,
  beforePdfExport: beforePdfExport,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function toolbarClick(args) {
  if (args.item.id === 'Gantt_pdfexport') {
    gantt.pdfExport();
  }
}

function beforePdfExport(args) {
  console.log(`[${args.name}] PDF export triggered at ${new Date().toISOString()}`);
}

{% endraw %}
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

## beforeTooltipRender

The [beforeTooltipRender](../api/gantt#beforetooltiprender) event is triggered before rendering a tooltip for interactive elements within the Gantt component. This includes taskbars, timeline headers, and connector lines. The event allows dynamic customization or suppression of tooltip content based on contextual data.

The event provides an argument of type [BeforeTooltipRenderEventArgs](../api/gantt/beforeTooltipRenderEventArgs) with the following properties:

| **Property** | **Type**   | **Description**                                                   |
|--------------|------------|-------------------------------------------------------------------|
| `args`       | Object     | Context info like target element and interaction type.            |
| `content`    | string     | Tooltip content before rendering.                                 |
| `cancel`     | boolean    | Set **true** to prevent tooltip display.                          |
| `data`       | Object     | Related Gantt data, such as task or header info.                  |

{% if page.publishingplatform == "typescript" %}
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection, PdfExport, BeforeTooltipRenderEventArgs } from '@syncfusion/ej2-gantt';

Gantt.Inject(Edit, Toolbar, Selection, PdfExport);

interface Task {
  TaskID: number;
  TaskName: string;
  StartDate?: Date;
  EndDate?: Date;
  Duration?: number;
  Progress?: number;
  Predecessor?: string;
  subtasks?: Task[];
}

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  beforeTooltipRender: beforeTooltipRender,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function beforeTooltipRender(args: BeforeTooltipRenderEventArgs) {
    // Log tooltip trigger.
    console.log(`Tooltip for ${args.args.target.className} at ${new Date().toISOString()}`);
    // Customize taskbar tooltip.
    if (args.args.target.classList.contains('e-gantt-child-taskbar')) {
      const task = args.data as Task;
      if (task.Duration === 5) {
        args.cancel = true; // Block tooltip for invalid duration.
        return;
      }
      args.content = `<div><b>${task.TaskName}</b><br>Progress: ${task.Progress}%<br>Duration: ${task.Duration} days</div>`;
    }
};

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Selection);

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new Gantt({
  dataSource: data,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  beforeTooltipRender: beforeTooltipRender,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function beforeTooltipRender(args) {
  // Log tooltip trigger.
  console.log(`Tooltip for ${args.args.target.className} at ${new Date().toISOString()}`);
  // Customize taskbar tooltip.
  if (args.args.target.classList.contains('e-gantt-child-taskbar')) {
    const task = args.data;
    if (task.Duration === 5) {
      args.cancel = true; // Block tooltip for invalid duration.
      return;
    }
    args.content = `<div><b>${task.TaskName}</b><br>Progress: ${task.Progress}%<br>Duration: ${task.Duration} days</div>`;
  }
};

{% endraw %}
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

## cellDeselected

The [cellDeselected](../api/gantt#celldeselected) event is triggered when a selected cell in the Gantt component is deselected. This occurs when the selection is cleared by clicking outside the cell, selecting a different cell or row, or through programmatic control. This event is typically used to validate cell data after deselection, synchronize external state, or trigger updates based on cell-level interactions.

The event provides an argument of type [CellDeselectEventArgs](../api/grid/cellDeselectEventArgs) with the following properties:

| **Property**      | **Type**     | **Description**                             |
|-----------------|----------------|---------------------------------------------|
| `cancel`        | boolean        | Set to **true** to cancel the deselection.  |
| `cellIndexes`   | object[]       | Row and column indices of deselected cells. |                       
| `cells`         | NodeList       | DOM elements of the deselected cells.        |
| `data`          | Object         | Row data associated with the deselected cell.|

{% if page.publishingplatform == "typescript" %}
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection } from '@syncfusion/ej2-gantt';
import { CellDeselectEventArgs } from '@syncfusion/ej2-grids';

Gantt.Inject(Edit, Toolbar, Selection);

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  selectionSettings: {
    mode: 'Cell',
    type: 'Multiple'
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  cellDeselected: cellDeselected,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function cellDeselected(args: CellDeselectEventArgs) {
  // Log deselected cell details.
  args.cellIndexes.forEach(index => {
    index.cellIndexes.forEach(colIndex => {
      console.log(`Cell deselected at row ${index.rowIndex}, column ${colIndex} at ${new Date().toISOString()}`);
    });
  });
};

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Selection);

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  selectionSettings: {
    mode: 'Cell',
    type: 'Multiple'
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  cellDeselected: cellDeselected,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function cellDeselected(args) {
  // Log deselected cell details.
  args.cellIndexes.forEach(index => {
    index.cellIndexes.forEach(colIndex => {
      console.log(`Cell deselected at row ${index.rowIndex}, column ${colIndex} at ${new Date().toISOString()}`);
    });
  });
};

{% endraw %}
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

## cellDeselecting

The [cellDeselecting](../api/gantt#celldeselecting) event is triggered when a previously selected cell in the Gantt component is deselected. This occurs when the selection is cleared either through user interaction or programmatic control. This event is typically used to validate cell data after deselection, synchronize external state, or trigger updates based on cell-level interactions.

The event provides an argument of type [CellDeselectEventArgs](../api/grid/cellDeselectEventArgs) with the following properties:

| **Property**   | **Type**     | **Description**                                                   |
|----------------|--------------|-------------------------------------------------------------------|
| `cancel`       | boolean    | Set to **true** to cancel the deselection action.                 |
| `cellIndexes`  | object[]   | Row and column indices of the cells being deselected.             |
| `cells`        | NodeList   | DOM elements representing the deselecting cells.                  |
| `data`         | Object     | Row data associated with the deselecting cell.                    |

{% if page.publishingplatform == "typescript" %}
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection } from '@syncfusion/ej2-gantt';
import { CellDeselectEventArgs } from '@syncfusion/ej2-grids';

Gantt.Inject(Edit, Toolbar, Selection);

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  selectionSettings: {
    mode: 'Cell',
    type: 'Multiple'
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  cellDeselecting: cellDeselecting,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function cellDeselecting(args: CellDeselectEventArgs) {
  // Log deselecting cell details.
  if (args.cellIndexes) {
    args.cellIndexes.forEach(index => {
      index.cellIndexes.forEach(colIndex => {
        console.log(`Cell deselecting at row ${index.rowIndex}, column ${colIndex} at ${new Date().toISOString()}`);
      });
    });
  }
};

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Selection);

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  selectionSettings: {
    mode: 'Cell',
    type: 'Multiple'
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  cellDeselecting: cellDeselecting,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function cellDeselecting(args) {
  // Log deselecting cell details.
  if (args.cellIndexes) {
    args.cellIndexes.forEach(index => {
      index.cellIndexes.forEach(colIndex => {
        console.log(`Cell deselecting at row ${index.rowIndex}, column ${colIndex} at ${new Date().toISOString()}`);
      });
    });
  }
};

{% endraw %}
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

## cellEdit

The [cellEdit](../api/gantt#celledit) event is triggered when a cell enters edit mode in the Gantt Chart component. This event allows customization of the editing behavior, such as validating input, modifying cell values, or preventing edits based on specific conditions. It helps ensure that data changes meet application requirements before being applied.

The event provides an argument of type [CellEditArgs](../api/gantt/cellEditArgs) with the following properties:

| **Property**       | **Type**         | **Description**                          |
|--------------------|------------------|------------------------------------------|
| `cancel`           | boolean        | Set to **true** to cancel the cell edit action.|
| `cell`             | Element        | Cell element currently being edited.     |
| `columnName`       | string         | Field name of the edited column.         |
| `columnObject`     | Object         | Metadata of the edited column.           |
| `foreignKeyData`   | Object         | Foreign key data, if applicable.         |
| `isForeignKey`     | boolean        | Indicates if column is a foreign key.    |
| `primaryKey`       | string         | Primary key field in the data source.    |
| `row`              | HTMLElement    | Row element containing the edited cell.  |
| `rowData`          | Object         | Data of the row associated with the edited cell.|
| `type`             | string         | Type of edit action (e.g., **edit**).          |
| `validationRules`  | Object         | Validation rules applied to the cell, if any.  |
| `value`            | any            | The current value of the cell before editing starts.|

{% if page.publishingplatform == "typescript" %}
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection, CellEditArgs } from '@syncfusion/ej2-gantt';

Gantt.Inject(Edit, Toolbar, Selection);

interface Task {
  TaskID: number;
  TaskName: string;
  StartDate?: Date;
  EndDate?: Date;
  Duration?: number;
  Progress?: number;
  Predecessor?: string;
  subtasks?: Task[];
}

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  selectionSettings: {
    mode: 'Cell',
    type: 'Multiple'
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  cellEdit: cellEdit,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function cellEdit(args: CellEditArgs) {
  // Log edit action.
    console.log(`Editing cell in column ${args.columnName} for task ${(args.rowData as Task).TaskName} at ${new Date().toISOString()}`);

    // Prevent editing TaskID column.
    if (args.columnName === 'StartDate') {
      args.cancel = true;
      alert('Editing Start date is not allowed.');
      return;
    }
};

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Selection);

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  selectionSettings: {
    mode: 'Cell',
    type: 'Multiple'
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  cellEdit: cellEdit,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function cellEdit(args) {
  // Log edit action.
  console.log(`Editing cell in column ${args.columnName} for task ${(args.rowData).TaskName} at ${new Date().toISOString()}`);

  // Prevent editing TaskID column.
  if (args.columnName === 'StartDate') {
    args.cancel = true;
    alert('Editing Start date is not allowed.');
    return;
  }
};

{% endraw %}
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

## cellSelected

The [cellSelected](../api/gantt#cellselected) event is triggered after a cell in the Gantt component is selected. This event provides access to the selected cell’s context and enables interaction logic based on cell-level selection. This event is commonly used to apply conditional styling, display contextual information, or trigger logic based on the selected task or field.

The event provides an argument of type [CellSelectEventArgs](../api/grid/cellSelectEventArgs) with the following properties:

| **Property**             | **Type**           | **Description**                              |
|----------------------------|------------------|----------------------------------------------|
| `cancel`                   | boolean        | Cancel selection if set to **true**.         |
| `cellIndex`                | object         | Index of the selected cell.                  |
| `cells`                    | Element[]      | DOM elements of selected/deselected cells.   |
| `currentCell`              | Element        | Currently selected cell element.             |
| `data`                     | Object         | Row data for the selected cell.              |
| `previousRowCell`          | Element        | Previously selected cell element.            |
| `previousRowCellIndex`     | number         | Index of previously selected cell.           |
| `selectedRowCellIndex`     | object[]       | Indices of selected row and column.          |

{% if page.publishingplatform == "typescript" %}
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection, CellSelectEventArgs } from '@syncfusion/ej2-gantt';
import { CellSelectEventArgs } from '@syncfusion/ej2-grids';

Gantt.Inject(Edit, Toolbar, Selection);

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  selectionSettings: {
    mode: 'Cell',
    type: 'Multiple'
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  cellSelected: cellSelected,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function cellSelected(args: CellSelectEventArgs) {
  const rowIndex = args.cellIndex.rowIndex;
  const colIndex = args.cellIndex.cellIndex;
  console.log(`Cell selected at row ${rowIndex}, column ${colIndex} at ${new Date().toISOString()}`);
};

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Selection);

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  selectionSettings: {
    mode: 'Cell',
    type: 'Multiple'
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  cellSelected: cellSelected,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function cellSelected(args) {
  const rowIndex = args.cellIndex.rowIndex;
  const colIndex = args.cellIndex.cellIndex;
  console.log(`Cell selected at row ${rowIndex}, column ${colIndex} at ${new Date().toISOString()}`);
};

{% endraw %}
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

## cellSelecting

The [cellSelecting](../api/gantt#cellselecting) event is triggered before a cell is selected in the Gantt Chart component. It enables logic to control selection behavior based on cell context, such as preventing selection under specific conditions or customizing appearance dynamically.

The event provides an argument of type [CellSelectingEventArgs](../api/gantt/cellSelectingEventArgs)  with the following properties:

| **Property**             | **Type**       | **Description**                              |
|--------------------------|------------------|----------------------------------------------|
| `cancel`                 | boolean        | Cancel selection if set to **true**.             |
| `cellIndex`              | object         | Index of the cell being selected.            |
| `cells`                  | Element[]      | DOM elements of selected/deselected cells.   |
| `currentCell`            | Element        | Cell element currently being selected.       |
| `data`                   | Object         | Row data for the selected cell.              |
| `previousRowCell`        | Element        | Previously selected cell element.            |
| `previousRowCellIndex`   | number         | Index of previously selected cell.           |
| `selectedRowCellIndex`   | object[]       | Indices of selected row and column.          |

{% if page.publishingplatform == "typescript" %}
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection, CellSelectEventArgs } from '@syncfusion/ej2-gantt';

Gantt.Inject(Edit, Toolbar, Selection);

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  selectionSettings: {
    mode: 'Cell',
    type: 'Multiple'
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  cellSelecting: cellSelecting,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function cellSelecting(args: CellSelectEventArgs) {
  const rowIndex = args.cellIndex.rowIndex;
  const colIndex = args.cellIndex.cellIndex;
  console.log(`Cell selecting at row ${rowIndex}, column ${colIndex} at ${new Date().toISOString()}`);
  // Example: Cancel selection if the cell is in the first row.
  if (rowIndex === 0) {
    args.cancel = true;
  }
};

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Selection);

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  selectionSettings: {
    mode: 'Cell',
    type: 'Multiple'
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  cellSelecting: cellSelecting,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function cellSelecting(args) {
  const rowIndex = args.cellIndex.rowIndex;
  const colIndex = args.cellIndex.cellIndex;
  console.log(`Cell selecting at row ${rowIndex}, column ${colIndex} at ${new Date().toISOString()}`);
  // Example: Cancel selection if the cell is in the first row.
  if (rowIndex === 0) {
    args.cancel = true;
  }
};

{% endraw %}
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

## columnDrag

The [columnDrag](../api/gantt#columndrag) event is triggered while a column header is being dragged during reordering. It provides contextual details about the drag operation and enables customization of the column's behavior during the process, such as restricting movement, applying visual styles, or preparing layout adjustments based on the interaction.

The event provides an argument of type [ColumnDragEventArgs](../api/grid/columnDragEventArgs) with the following properties:

| **Property**     | **Type**     | **Description**                              |
|--------------------|----------------|----------------------------------------------|
| `column`           | Object       | Column object currently being dragged.       |
| `target`           | Element      | Element where column is dragged over.        |
| `draggableType`    | string       | Type of draggable element (e.g., column).    |

{% if page.publishingplatform == "typescript" %}
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection,Reorder } from '@syncfusion/ej2-gantt';
import { ColumnDragEventArgs } from '@syncfusion/ej2-grids';

Gantt.Inject(Edit, Toolbar, Selection, Reorder);

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  allowReordering: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  columnDrag: columnDrag,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function columnDrag(args: ColumnDragEventArgs): void {
  // Log the field name of the column being dragged.
  console.log(`Column "${args.column.field}" was dragged.`);

  // Log the target DOM element where the column is being dragged over.
  console.log('Target element:', args.target);
}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Selection, ej.gantt.Reorder);

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  allowReordering: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  columnDrag: columnDrag,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function columnDrag(args){
  // Log the field name of the column being dragged.
  console.log(`Column "${args.column.field}" was dragged.`);

  // Log the target DOM element where the column is being dragged over.
  console.log('Target element:', args.target);
}

{% endraw %}
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

## columnDragStart

The [columnDragStart](../api/gantt#columndragstart) event is triggered when a column header drag operation begins in the Gantt component. This event provides access to the initial drag context and enables customization or restriction of the drag behavior.

The event provides an argument of type [ColumnDragEventArgs](../api/grid/columnDragEventArgs) with the following properties:

| **Property**       | **Type**         | **Description**                            |
|--------------------|----------------|----------------------------------------------|
| `column`           |  Object        | Column object where drag started.            |
| `target`           |  Element       | Element where drag operation began.          |
| `draggableType`    |  string        | Type of draggable element (e.g., headercell).|

{% if page.publishingplatform == "typescript" %}
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection, Reorder } from '@syncfusion/ej2-gantt';
import { ColumnDragEventArgs } from '@syncfusion/ej2-grids';

Gantt.Inject(Edit, Toolbar, Selection, Reorder);

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  allowReordering: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  columnDragStart: columnDragStart,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function columnDragStart(args: ColumnDragEventArgs): void {
  // Log the field name of the column where the drag operation started.
  console.log(`Column "${args.column.field}" was dragged.`);

  // Log the target DOM element where the drag was initiated.
  console.log('Target element:', args.target);
}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Selection, ej.gantt.Reorder);

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  allowReordering: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  columnDragStart: columnDragStart,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function columnDragStart(args) {
  // Log the field name of the column where the drag operation started.
  console.log(`Column "${args.column.field}" was dragged.`);

  // Log the target DOM element where the drag was initiated.
  console.log('Target element:', args.target);
}

{% endraw %}
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


## columnDrop

The [columnDrop](../api/gantt#columndrop) is triggered when a column header is dropped after a drag operation in the Gantt component.  It provides drop context and supports post-reorder logic such as validation or UI updates.

The event provides an argument of type [ColumnDragEventArgs](../api/grid/columnDragEventArgs) with the following properties:

| **Property**       | **Type**         | **Description**                             |
|--------------------|----------------|-----------------------------------------------|
| `column`           |  Object       | Column object being dropped.                  |
| `target`           |  Element      | Element where column is dropped.              |
| `draggableType`    |  string       | Type of draggable element (e.g., row, column).|

{% if page.publishingplatform == "typescript" %}
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection, Reorder } from '@syncfusion/ej2-gantt';
import { ColumnDragEventArgs } from '@syncfusion/ej2-grids';

Gantt.Inject(Edit, Toolbar, Selection, Reorder);

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  allowReordering: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  columnDrop: columnDrop,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function columnDrop(args: ColumnDragEventArgs): void {
  // Log the field name of the column that was dropped
  console.log(`Column "${args.column.field}" was dropped.`);

  // Log the target element where the column was dropped
  console.log('Dropped on target element:', args.target);
}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Selection, ej.gantt.Reorder);

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  allowReordering: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  columnDrop: columnDrop,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function columnDrop(args){
  // Log the field name of the column that was dropped.
  console.log(`Column "${args.column.field}" was dropped.`);

  // Log the target element where the column was dropped.
  console.log('Dropped on target element:', args.target);
}

{% endraw %}
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

## columnMenuClick

The [columnMenuClick](../api/gantt#columnmenuclick) event is triggered when a column menu item is selected in the Gantt Chart. It provides access to the clicked item and its associated column, allowing you to customize menu behavior or execute additional logic.

The event provides an argument of type [ColumnMenuClickEventArgs](../api/grid/columnMenuClickEventArgs) with the following properties:

| **Property** | **Type**   | **Description**                          |
|--------------|------------|------------------------------------------|
| `name`       |  string   | Name of the clicked menu item.           |
| `column`     |  Object   | Column object linked to the menu item.   |
| `element`    |  Element  | DOM element of the clicked menu item.    |
| `item`       |  Object   | The menu item object that was clicked.   |

{% if page.publishingplatform == "typescript" %}
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection, Filter, Sort, ColumnMenu } from '@syncfusion/ej2-gantt';
import { ColumnMenuClickEventArgs } from '@syncfusion/ej2-grids';

Gantt.Inject(Edit, Toolbar,Filter, Sort, Selection, ColumnMenu);

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  showColumnMenu: true,
  allowFiltering: true,
  allowSorting: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  columnMenuClick: columnMenuClick,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function columnMenuClick(args: ColumnMenuClickEventArgs): void {
    // Example: Log menu item and column field.
    console.log(`Column menu item "${args.item.text}"`);
    console.log(`Column Field "${args.column.field}"`)
    // You can add custom logic here, such as showing a dialog or updating UI.
}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Selection, ej.gantt.ColumnMenu, ej.gantt.Filter, ej.gantt.Sort,);

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  showColumnMenu: true,
  allowFiltering: true,
  allowSorting: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  columnMenuClick: columnMenuClick,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function columnMenuClick(args){
  // Example: Log menu item and column field.
  console.log(`Column menu item "${args.item.text}"`);
  console.log(`Column Field "${args.column.field}"`)
  // You can add custom logic here, such as showing a dialog or updating UI.
}

{% endraw %}
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

## columnMenuOpen

The [columnMenuOpen](../api/gantt#columnmenuopen) event is triggered when the column menu is opened. This event provides access to the menu context and allows customization of its appearance, behavior, or available options.

The event provides an argument of type [ColumnMenuOpenEventArgs](../api/grid/columnMenuOpenEventArgs) with the following properties:

| **Property**       | **Type**           | **Description**                                 |
|--------------------|--------------------|-------------------------------------------------|
| `cancel`           |  boolean          | Set **true** to cancel menu opening.            |
| `name`             |  string           | Event name: **columnMenuOpen**.                 |
| `column`           |  Object           | Column object linked to the opened menu.        |
| `element`          |  Element          | Header element where menu was opened.           |
| `items`            |  Object[]         | List of available column menu items.            |
| `left`             |  number           | Left position of menu in viewport.              |
| `top`              |  number           | Top position of menu in viewport.               |
| `parentItem`       |  Object           | Parent item in nested menu structure.           |
| `showSubMenuOn`    |  MenuOpenType     | Submenu trigger type: click or hover.           |

{% if page.publishingplatform == "typescript" %}
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection, Filter, Sort, ColumnMenu } from '@syncfusion/ej2-gantt';
import { ColumnMenuOpenEventArgs } from '@syncfusion/ej2-grids';

Gantt.Inject(Edit, Toolbar,Sort,Filter, Selection, ColumnMenu);

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  showColumnMenu: true,
  allowFiltering: true,
  allowSorting: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  columnMenuOpen: columnMenuOpen,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function columnMenuOpen(args: ColumnMenuOpenEventArgs): void {
  console.log(args);
  // cancel the column menu opening for a specific column.
  // Example: Prevent opening the column menu for the "Duration" column.
  if (args.column .field === "Duration") {
    args.cancel = true;
  }
}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Filter, ej.gantt.Sort, ej.gantt.Selection, ej.gantt.ColumnMenu);

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  showColumnMenu: true,
  allowFiltering: true,
  allowSorting: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  columnMenuOpen: columnMenuOpen,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function columnMenuOpen(args) {
  console.log(args);
  // cancel the column menu opening for a specific column.
  // Example: Prevent opening the column menu for the "Duration" column.
  if (args.column.field === "Duration") {
    args.cancel = true;
  }
}

{% endraw %}
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

## contextMenuClick

The [contextMenuClick](../api/gantt#contextmenuclick) event is triggered when a context menu item is clicked within the Gantt component. This event provides access to the clicked item and the associated context, enabling customization of menu behavior or execution of additional logic.

The event provides an argument of type [ContextMenuClickEventArgs](../api/grid/contextMenuClickEventArgs) with the following properties:

| **Property**   | **Type**         | **Description**                              |
|----------------|------------------|----------------------------------------------|
| `name`         |  string         | Event name: **contextMenuClick**.            |
| `element`      |  Element        | DOM element that triggered the menu.         |
| `event`        |  PointerEvent   | Pointer event with interaction details.      |
| `item`         |  Object         | Clicked menu item with properties.           |
| `type`         |  string         | Type of menu item (e.g., **Content**).       |
| `rowData`      |  Object         | Data object of the related row.              |

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Sort, Filter, Toolbar, Selection, ContextMenu, Resize, ContextMenuClickEventArgs } from '@syncfusion/ej2-gantt';

Gantt.Inject(Edit, Toolbar, Selection, ContextMenu, Sort, Filter, Resize);

interface Task {
  TaskID: number;
  TaskName: string;
  StartDate?: Date;
  EndDate?: Date;
  Duration?: number;
  Progress?: number;
  Predecessor?: string;
  ParentID?: number;
}

const data: object[] = [
  { TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
  { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
  { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
  { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
  { TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
  { TaskID: 6, TaskName: 'Develop floor plan', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
  { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
  { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
  { TaskID: 9, TaskName: 'Sign Contract', StartDate: new Date('04/04/2019'), Duration: 1, Predecessor: '8', Progress: 30 },
  { TaskID: 10, TaskName: 'Kickoff', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019'), Duration: 0, Predecessor: '9' },
];

const gantt: Gantt = new Gantt({
  dataSource: data,
  height: '450px',
  enableContextMenu: true,
  allowSorting: true,
  allowResizing: true,
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true
  },
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID'
  },
  contextMenuClick: contextMenuClick,
});

gantt.appendTo('#Gantt');

// Handle context menu click.
function contextMenuClick(args: ContextMenuClickEventArgs) {
  // Example: Show which menu item was clicked and the associated row/task.
  console.log('Menu item:', args.item.text);
  if (args.rowData) {
    console.log('Task:', (args.rowData as Task).TaskName);
  }
  // You can add custom logic here.
}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Sort, ej.gantt.Selection, ej.gantt.ContextMenu, ej.gantt.Resize);

const data = [
  { TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
  { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
  { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
  { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
  { TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
  { TaskID: 6, TaskName: 'Develop floor plan', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
  { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
  { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
  { TaskID: 9, TaskName: 'Sign Contract', StartDate: new Date('04/04/2019'), Duration: 1, Predecessor: '8', Progress: 30 },
  { TaskID: 10, TaskName: 'Kickoff', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019'), Duration: 0, Predecessor: '9' },
];

const gantt = new ej.gantt.Gantt({
  dataSource: data,
  height: '450px',
  enableContextMenu: true,
  allowSorting: true,
  allowResizing: true,
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true
  },
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID'
  },
  contextMenuClick: contextMenuClick,
});

gantt.appendTo('#Gantt');

// Handle context menu click.
function contextMenuClick(args) {
  // Example: Show which menu item was clicked and the associated row/task.
  console.log('Menu item:', args.item.text);
  if (args.rowData) {
    console.log('Task:', args.rowData.TaskName);
  }
  // You can add custom logic here.
}

{% endraw %}
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

## contextMenuOpen

The [contextMenuOpen](../api/gantt#contextmenuopen) event is triggered when the context menu is opened in the Gantt Chart.  This event allows customization of menu behavior or execution of additional logic based on the selected item and context.

The event provides an argument of type [ContextMenuOpenEventArgs](../api/gantt/contextMenuOpenEventArgs) with the following properties:

| **Property**       | **Type**         | **Description**                              |
|--------------------|------------------|----------------------------------------------|
| `name`             |  string         | Event name: **contextMenuOpen**.             |
| `element`          |  Element        | DOM element that triggered the menu.         |
| `event`            |  PointerEvent   | Pointer event with interaction details.      |
| `item`             |  Object         | Menu item object with properties.            |
| `type`             |  string         | Type of menu item (e.g., **Content**).       |
| `rowData`          |  Object         | Data object of the related row.              |
| `items`            |  Object[]       | List of available context menu items.        |
| `left`             |  number         | Left position of menu in viewport.           |
| `top`              |  number         | Top position of menu in viewport.            |
| `parentItem`       |  Object         | Parent item in nested menu structure.        |
| `showSubMenuOn`    |  MenuOpenType   | Submenu trigger type: click or hover.        |

{% if page.publishingplatform == "typescript" %}
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection, ContextMenu, Resize, ContextMenuOpenEventArgs } from '@syncfusion/ej2-gantt';

Gantt.Inject(Edit, Toolbar, Selection, ContextMenu, Resize);

interface Task {
  TaskID: number;
  TaskName: string;
  StartDate?: Date;
  EndDate?: Date;
  Duration?: number;
  Progress?: number;
  Predecessor?: string;
  ParentID?: number;
}

const data: object[] = [
  { TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
  { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
  { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
  { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
  { TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
  { TaskID: 6, TaskName: 'Develop floor plan', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
  { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
  { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
  { TaskID: 9, TaskName: 'Sign Contract', StartDate: new Date('04/04/2019'), Duration: 1, Predecessor: '8', Progress: 30 },
  { TaskID: 10, TaskName: 'Kickoff', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019'), Duration: 0, Predecessor: '9' },
];

const gantt: Gantt = new Gantt({
  dataSource: data,
  height: '450px',
  enableContextMenu: true,
  allowSorting: true,
  allowResizing: true,
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true
  },
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID'
  },
  contextMenuOpen: contextMenuOpen,
});

gantt.appendTo('#Gantt');

function contextMenuOpen(args: ContextMenuOpenEventArgs) {
  const taskName = (args.rowData as Task).TaskName;
  console.log(`Context menu opened for task: ${taskName}`);
  // Disable Delete Task item.
  args.disableItems = ["Delete Task"];
}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Sort, ej.gantt.Selection, ej.gantt.ContextMenu, ej.gantt.Resize);

const data = [
  { TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
  { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
  { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
  { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
  { TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
  { TaskID: 6, TaskName: 'Develop floor plan', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
  { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
  { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
  { TaskID: 9, TaskName: 'Sign Contract', StartDate: new Date('04/04/2019'), Duration: 1, Predecessor: '8', Progress: 30 },
  { TaskID: 10, TaskName: 'Kickoff', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019'), Duration: 0, Predecessor: '9' },
];

const gantt = new ej.gantt.Gantt({
  dataSource: data,
  height: '450px',
  enableContextMenu: true,
  allowSorting: true,
  allowResizing: true,
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID'
  },
  contextMenuOpen: contextMenuOpen,
});

gantt.appendTo('#Gantt');

function contextMenuOpen(args) {
  const taskName = args.rowData.TaskName;
  console.log(`Context menu opened for task: ${taskName}`);
  // Disable Delete Task item.
  args.disableItems = ["Delete Task"];
}

{% endraw %}
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

## created

The [created](../api/gantt#created) event is triggered after the Gantt component has been fully initialized and rendered. This event is useful for executing logic that depends on the component being completely loaded and ready for interaction.

{% if page.publishingplatform == "typescript" %}
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Sort, Selection, ContextMenu, Resize } from '@syncfusion/ej2-gantt';

Gantt.Inject(Edit, Toolbar, Sort, Selection, ContextMenu, Resize);

const data: object[] = [
  { TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
  { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
  { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
  { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
  { TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
  { TaskID: 6, TaskName: 'Develop floor plan', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
  { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
  { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
  { TaskID: 9, TaskName: 'Sign Contract', StartDate: new Date('04/04/2019'), Duration: 1, Predecessor: '8', Progress: 30 },
  { TaskID: 10, TaskName: 'Kickoff', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019'), Duration: 0, Predecessor: '9' },
];

const gantt: Gantt = new Gantt({
  dataSource: data,
  height: '450px',
  allowSorting: true,
  allowResizing: true,
  enableContextMenu: true,
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true
  },
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID'
  },
  created: created
});

gantt.appendTo('#Gantt');

function created() {
  console.log("Gantt component created.");
  if (this.ganttObj) {
    // Select the row at index 6 after component created.
    this.ganttObj.selectedRowIndex = 6;
    console.log("RowIndex 6 is selected on Gantt creation.");
  }
}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
</head>

<body>
       
     <div id='loader'>Loading....</div>
    <div id='container'>
	   <button id="addRow">Add Row</button>  
        <div id='Gantt'></div>        
    </div>
</body>

</html>

{% endhighlight %}
{% endtabs %}
        
{% elsif page.publishingplatform == "javascript" %}
{% tabs %}
{% highlight js tabtitle="index.js" %}
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Sort, ej.gantt.Selection, ej.gantt.ContextMenu, ej.gantt.Resize);

const data = [
  { TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
  { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
  { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
  { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
  { TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
  { TaskID: 6, TaskName: 'Develop floor plan', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
  { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
  { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
  { TaskID: 9, TaskName: 'Sign Contract', StartDate: new Date('04/04/2019'), Duration: 1, Predecessor: '8', Progress: 30 },
  { TaskID: 10, TaskName: 'Kickoff', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019'), Duration: 0, Predecessor: '9' },
];

const gantt = new ej.gantt.Gantt({
  dataSource: data,
  height: '450px',
  allowSorting: true,
  allowResizing: true,
  enableContextMenu: true,
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true
  },
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID'
  },
  created: created
});

gantt.appendTo('#Gantt');

function created() {
  console.log("Gantt component created.");
  if (this.ganttObj) {
    // Select the row at index 6 after component created.
    this.ganttObj.selectedRowIndex = 6;
    console.log("RowIndex 6 is selected on Gantt creation.");
  }
}

{% endraw %}
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

## dataBound

The [dataBound](../api/gantt#databound) event is triggered after the Gantt component has successfully bound its data source and rendered the task data. This event is useful for executing logic that depends on the data being fully loaded and available in the UI.

{% if page.publishingplatform == "typescript" %}
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Sort, Selection, ContextMenu, Resize } from '@syncfusion/ej2-gantt';

Gantt.Inject(Edit, Toolbar, Sort, Selection, ContextMenu, Resize);

const data: object[] = [
  { TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
  { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
  { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
  { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
  { TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
  { TaskID: 6, TaskName: 'Develop floor plan', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
  { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
  { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
  { TaskID: 9, TaskName: 'Sign Contract', StartDate: new Date('04/04/2019'), Duration: 1, Predecessor: '8', Progress: 30 },
  { TaskID: 10, TaskName: 'Kickoff', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019'), Duration: 0, Predecessor: '9' },
];

const gantt: Gantt = new Gantt({
  dataSource: data,
  height: '450px',
  allowSorting: true,
  allowResizing: true,
  enableContextMenu: true,
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true
  },
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID'
  },
  dataBound: () => {
    gantt.collapseAll();
    console.log("All tasks collapsed after data binding.");
  }
});

gantt.appendTo('#Gantt');

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Sort, ej.gantt.Selection, ej.gantt.ContextMenu, ej.gantt.Resize);

const data = [
  { TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
  { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
  { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
  { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
  { TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
  { TaskID: 6, TaskName: 'Develop floor plan', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
  { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
  { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
  { TaskID: 9, TaskName: 'Sign Contract', StartDate: new Date('04/04/2019'), Duration: 1, Predecessor: '8', Progress: 30 },
  { TaskID: 10, TaskName: 'Kickoff', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019'), Duration: 0, Predecessor: '9' },
];

const gantt = new ej.gantt.Gantt({
  dataSource: data,
  height: '450px',
  allowSorting: true,
  allowResizing: true,
  enableContextMenu: true,
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true
  },
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID'
  },
  dataBound: () => {
    gantt.collapseAll();
    console.log("All tasks collapsed after data binding.");
  }
});

gantt.appendTo('#Gantt');

{% endraw %}
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

## destroyed

The [destroyed](../api/gantt#destroyed) event is triggered when the Gantt component is removed from the DOM using the `destroy` method. This event is useful for handling cleanup operations and releasing resources associated with the component instance.

The event provides an argument of type `object` with the following properties:

| **Property**      | **Type**         | **Description**                           |
|-------------------|-----------------|--------------------------------------------|
| `name`            |  string        | Identifies event as **destroyed**.         |
| `cancel`          |  boolean       | Prevents destruction when set to **true**. |

{% if page.publishingplatform == "typescript" %}
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Sort, Selection, Resize } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';

Gantt.Inject(Edit, Toolbar, Sort, Selection, Resize);

const data: object[] = [
  { TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
  { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
  { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
  { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
  { TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
  { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
  { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
  { TaskID: 9, TaskName: 'Sign Contract', StartDate: new Date('04/04/2019'), Duration: 1, Predecessor: '8', Progress: 30 },
  { TaskID: 10, TaskName: 'Kickoff', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019'), Duration: 0, Predecessor: '9' },
];

const gantt: Gantt = new Gantt({
  dataSource: data,
  height: '450px',
  allowSorting: true,
  allowResizing: true,
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true
  },
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID'
  },
  destroyed: destroyed
});

gantt.appendTo('#Gantt');

// Button setup
let button: Button = new Button({
  width: '120px',
  content: 'Destroy Grid',
  cssClass: 'e-primary',
  isPrimary: true
});

button.appendTo('#element');

(document.getElementById('element') as HTMLElement).addEventListener('click', () => {
  gantt.destroy();
});

// Destroy event handler.
function destroyed(args: object): void {
  console.log("Gantt component destroyed.", args);
}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
</head>

<body>
       
     <div id='loader'>Loading....</div>
    <div id='container'>
        <div style="margin-bottom: 20px;" id='element'></div>
        <div id='Gantt'></div>        
    </div>
</body>

</html>

{% endhighlight %}
{% endtabs %}
        
{% elsif page.publishingplatform == "javascript" %}
{% tabs %}
{% highlight js tabtitle="index.js" %}
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Sort, ej.gantt.Resize, ej.gantt.Selection);

const data = [
  { TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
  { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
  { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
  { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
  { TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
  { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
  { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
  { TaskID: 9, TaskName: 'Sign Contract', StartDate: new Date('04/04/2019'), Duration: 1, Predecessor: '8', Progress: 30 },
  { TaskID: 10, TaskName: 'Kickoff', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019'), Duration: 0, Predecessor: '9' },
];

const gantt = new ej.gantt.Gantt({
  dataSource: data,
  height: '450px',
  allowSorting: true,
  allowResizing: true,
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true
  },
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID'
  },
  destroyed: destroyed
});

gantt.appendTo('#Gantt');

// Button setup
let button = new ej.buttons.Button({
  width: '120px',
  content: 'Destroy Grid',
  cssClass: 'e-primary',
  isPrimary: true
});

button.appendTo('#element');

document.getElementById('element').addEventListener('click', () => {
  gantt.destroy();
});

// Destroy event handler.
function destroyed(args) {
  console.log("Gantt component destroyed.", args);
}

{% endraw %}
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
</head>
<body>
    <div id="container">
        <div style="margin-bottom: 20px;" id='element'></div>
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

## endEdit

The [endEdit](../api/gantt#endedit) event is triggered after a task is modified through cell editing. It enables post-edit actions such as validation, logging, or syncing changes with external systems.

The event provides an argument of type [ITaskbarEditedEventArgs](../api/gantt/iTaskbarEditedEventArgs) with the following properties:

| **Property**         | **Type**       | **Description**                                      |
|----------------------|----------------|------------------------------------------------------|
| `action`             |  string       | Specifies type of task edit action.                  |
| `data`               |  IGanttData   | Contains updated data for the task.                  |
| `name`               |  string       | Identifies event as **endEdit**                      |

{% if page.publishingplatform == "typescript" %}
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection, ITaskbarEditedEventArgs } from '@syncfusion/ej2-gantt';

Gantt.Inject(Edit, Toolbar, Selection);

interface Task {
  TaskID: number;
  TaskName: string;
  StartDate?: Date;
  EndDate?: Date;
  Duration?: number;
  Progress?: number;
  Predecessor?: string;
  ParentID?: number;
}

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  allowReordering: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  endEdit: endEditHandler,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function endEditHandler(args: ITaskbarEditedEventArgs): void {
  const task = args.data as Task;

  // Log the edited task details.
  console.log(`Task "${task.TaskName}" edited. New Duration: ${task.Duration} days`);

  // Validate duration.
  if (task.Duration < 1) {
    alert(`Task "${task.TaskName}" has an invalid duration (${task.Duration} days). Minimum duration is 1 day.`);
    // Optionally, revert the change or notify backend.
  }
}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Selection );


const data= [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  allowReordering: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  endEdit: endEditHandler,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function endEditHandler(args) {
  const task = args.data;

  // Log the edited task details.
  console.log(`Task "${task.TaskName}" edited. New Duration: ${task.Duration} days`);

  // Validate duration.
  if (task.Duration < 1) {
    alert(`Task "${task.TaskName}" has an invalid duration (${task.Duration} days). Minimum duration is 1 day.`);
    // Optionally, revert the change or notify backend.
  }
}

{% endraw %}
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

## excelExportComplete

The [excelExportComplete](../api/gantt#excelexportcomplete) event is triggered after the Gantt component has completed exporting data to an Excel file. This event enables post-export actions such as displaying notifications, logging activity, or applying additional formatting to the exported content.

The event provides an argument of type [ExcelExportCompleteArgs](../api/grid/excelExportCompleteArgs) with the following property:

| **Property**         | **Type**       | **Description**                                      |
|----------------------|----------------|------------------------------------------------------|  
| `promise`               |  Promise       | Represents blob data for exported file.          |

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection, ExcelExport } from '@syncfusion/ej2-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ExcelExportCompleteArgs } from '@syncfusion/ej2-grids';

Gantt.Inject(Edit, Toolbar, Selection, ExcelExport);

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  allowExcelExport: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'ExcelExport'],
  excelExportComplete: excelExportComplete,
  toolbarClick: toolbarClick,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function toolbarClick(args: ClickEventArgs): void {
  // Check if the clicked toolbar item is the Excel export button.
  if (args.item.id === 'Gantt_excelexport') {
    // Trigger Excel export from the Gantt component.
    gantt.excelExport();
  }
}

function excelExportComplete(args: ExcelExportCompleteArgs): void {
  // Log a message indicating that the Excel export has completed.
  console.log('Excel export completed');

  // Change the header text of the second column in the exported Excel file.
  (args as any).gridInstance.columns[1].headerText = "New HeaderText";

  // Hide the third column in the exported Excel file.
  (args as any).gridInstance.columns[2].visible = false;
}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Selection, ej.gantt.ExcelExport);

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  allowExcelExport: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  excelExportComplete: excelExportComplete,
  toolbarClick: toolbarClick,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function toolbarClick(args) {
  // Check if the clicked toolbar item is the Excel export button.
  if (args.item.id === 'Gantt_excelexport') {
    // Trigger Excel export from the Gantt component.
    gantt.excelExport();
  }
}

function excelExportComplete(args) {
  // Log a message indicating that the Excel export has completed.
  console.log('Excel export completed');

  // Change the header text of the second column in the exported Excel file.
  args.gridInstance.columns[1].headerText = "New HeaderText";

  // Hide the third column in the exported Excel file.
  args.gridInstance.columns[2].visible = false;
}

{% endraw %}
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

## excelHeaderQueryCellInfo

The [excelHeaderQueryCellInfo](../api/gantt#excelheaderquerycellinfo) event is triggered during the Excel export process when customizing header cells in the exported file. It allows modification of header text, styles, and other properties before they are written to the Excel sheet.

The event provides an argument of type [ExcelHeaderQueryCellInfoEventArgs](../api/grid/excelHeaderQueryCellInfoEventArgs) with the following properties:

| **Property**   | **Type**         | **Description**                                        |
|----------------|------------------|--------------------------------------------------------|
| `name`         |  string         | Identifies event as **excelExportHeaderQueryCellInfo**.|
| `cell`         |  ExcelCell      | Represents current Excel header cell.                  |
| `gridCell`     |  Cell \| ExcelCell | Refers to related Grid header cell.               |
| `hyperLink`    |  Hyperlink      | Contains hyperlink details for header cell.            |
| `image`        |  Image          | Contains image details for header cell.                |
| `style`        |  ExcelStyle     | Defines style settings for header cell.                |


{% if page.publishingplatform == "typescript" %}
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection, Column, ExcelExport, ExcelHeaderQueryCellInfoEventArgs } from '@syncfusion/ej2-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

Gantt.Inject(Edit, Toolbar, Selection, ExcelExport);

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  allowExcelExport: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'ExcelExport'],
  excelHeaderQueryCellInfo: excelHeaderQueryCellInfo,
  toolbarClick: toolbarClick,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function toolbarClick(args: ClickEventArgs): void {
  // Check if the clicked toolbar item is the Excel export button.
  if (args.item.id === 'Gantt_excelexport') {
    (gantt.columns[3] as Column).visible = false;
    gantt.excelExport();
  }
}

function excelHeaderQueryCellInfo(args: ExcelHeaderQueryCellInfoEventArgs): void {
  // Customize header cells during Excel export.
  if (args.cell.value === "Progress") {
    // Modify header appearance.
    args.style = {
      backColor: '#a569bd',
      fontSize: 15
    };
  }
}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Selection, ej.gantt.ExcelExport);

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  allowExcelExport: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  excelHeaderQueryCellInfo: excelHeaderQueryCellInfo,
  toolbarClick: toolbarClick,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function toolbarClick(args) {
  // Check if the clicked toolbar item is the Excel export button.
  if (args.item.id === 'Gantt_excelexport') {
    gantt.columns[3].visible = false;
    gantt.excelExport();
  }
}

function excelHeaderQueryCellInfo(args) {
  // Customize header cells during Excel export.
  if (args.cell.value === "Progress") {
    // Modify header appearance.
    args.style = {
      backColor: '#a569bd',
      fontSize: 15
    };
  }
}

{% endraw %}
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

## excelQueryCellInfo

The [excelQueryCellInfo](../api/gantt#excelquerycellinfo) event is triggered during the Excel export process when customizing individual data cells in the exported file. It allows modification of cell values, styles, and formatting before they are written to the Excel sheet.

The event provides an argument of type [ExcelQueryCellInfoEventArgs](../api/grid/excelQueryCellInfoEventArgs) with the following properties:

| **Property** | **Type**         | **Description**                                        |
|----------------|------------------|------------------------------------------------------|
| `cell`         |  object         | Represents current Excel cell being customized.      |
| `column`       |  object         | Metadata of column linked to cell.                   |
| `data`         |  object         | Row data for the current cell.                       |
| `value`        |  string         | Original value before export.                        |
| `style`        |  object         | Style settings like font and alignment.              |
| `colspan`      |  number         | Specifies number of columns to span.                 |
| `hyperLink`    |  Hyperlink      | Hyperlink details if cell includes a link.           |
| `image`        |  Image          | Image details if cell includes an image.             |

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection, ExcelExport } from '@syncfusion/ej2-gantt';
import { ExcelQueryCellInfoEventArgs } from '@syncfusion/ej2-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

Gantt.Inject(Edit, Toolbar, Selection, ExcelExport);

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  allowExcelExport: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'ExcelExport'],
  excelQueryCellInfo: excelQueryCellInfo,
  toolbarClick: toolbarClick,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function toolbarClick(args: ClickEventArgs): void {
  if (args.item.id === 'Gantt_excelexport') {
    gantt.columns[3].visible = false;
    gantt.excelExport();
  }
}

function excelQueryCellInfo(args: ExcelQueryCellInfoEventArgs): void {
  console.log(args);
  // Customize data cells during Excel export.
  if (args.column.field === "Progress") {
    // Modify data column appearance.
    args.style = {
      backColor: '#a569bd',
      fontSize: 15
    };
  }
}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Selection, ej.gantt.ExcelExport);

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  allowExcelExport: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  excelQueryCellInfo: excelQueryCellInfo,
  toolbarClick: toolbarClick,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function toolbarClick(args) {
  if (args.item.id === 'Gantt_excelexport') {
    gantt.columns[3].visible = false;
    gantt.excelExport();
  }
}

function excelQueryCellInfo(args) {
  console.log(args);
  // Customize data cells during Excel export.
  if (args.column.field === "Progress") {
    // Modify data column appearance.
    args.style = {
      backColor: '#a569bd',
      fontSize: 15
    };
  }
}

{% endraw %}
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

## expanded

The [expanded](../api/gantt#expanded) event is triggered after a row is expanded in the Gantt Chart. It enables actions that respond to row expansion, such as loading additional data, updating UI elements, or tracking user interaction.

The event provides an argument of type [ICollapsingEventArgs](../api/gantt/iCollapsingEventArgs) with the following properties:

| **Property** | **Type**         | **Description**                                      |
|----------------|------------------|------------------------------------------------------|
| `data`         |  object         | Data object of the expanded row                     |
| `row`          |  HTMLElement    | DOM element of the expanded row                     |
| `name`         |  string         | Identifies event as **expanded**                    |
| `cancel`       |  boolean        | Prevents expansion when set to **true**             |

{% if page.publishingplatform == "typescript" %}
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection, ICollapsingEventArgs } from '@syncfusion/ej2-gantt';

Gantt.Inject(Edit, Toolbar, Selection);

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  allowReordering: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  expanded: onRowExpanded,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function onRowExpanded(args: ICollapsingEventArgs): void {
  console.log('Expanded task:', args.data.TaskName);
}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Selection );

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  allowReordering: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  expanded: onRowExpanded,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function onRowExpanded(args) {
  console.log('Expanded task:', args.data.TaskName);
}

{% endraw %}
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


## expanding

The [expanding](../api/gantt#expanding) event is triggered before a row is expanded in the Gantt Chart. It enables interception of the expansion process and allows cancellation based on custom logic or conditions.

The event provides an argument of type [ICollapsingEventArgs](../api/gantt/iCollapsingEventArgs) with the following properties:

| **Property** | **Type**         | **Description**                                      |
|----------------|------------------|----------------------------------------------------|
| `data`         |  object         | Data object of the row being expanded              |
| `gridRow`      |  HTMLElement    | DOM element of the Grid row                        |
| `chartRow`     |  HTMLElement    | DOM element of the Chart row                       |
| `name`         |  string         | Identifies event as **expanding**                  |
| `cancel`       |  boolean        | Prevents expansion when set to **true**            |

{% if page.publishingplatform == "typescript" %}
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection, ICollapsingEventArgs } from '@syncfusion/ej2-gantt';

Gantt.Inject(Edit, Toolbar, Selection);

interface Task {
  TaskID: number;
  TaskName: string;
  StartDate?: Date;
  EndDate?: Date;
  Duration?: number;
  Progress?: number;
  Predecessor?: string;
  ParentID?: number;
  subtasks?: Task[];
}

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  allowReordering: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  expanding: onRowExpanding,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function onRowExpanding(args: ICollapsingEventArgs): void {
  // Prevent expansion of a specific task.
  if ((args.data.taskData as Task).TaskName === 'Project Estimation') {
    args.cancel = true;
    console.log('Expansion cancelled for:', (args.data.taskData as Task).TaskName);
  }
}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
</head>

<body>
       
     <div id='loader'>Loading....</div>
    <div id='container'>
	   <button id="addRow">Add Row</button>  
        <div id='Gantt'></div>        
    </div>
</body>

</html>

{% endhighlight %}
{% endtabs %}
        
{% elsif page.publishingplatform == "javascript" %}
{% tabs %}
{% highlight js tabtitle="index.js" %}
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Selection );

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  allowReordering: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  expanding: onRowExpanding,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function onRowExpanding(args) {
  // Prevent expansion of a specific task.
  if (args.data.taskData.TaskName === 'Project Estimation') {
    args.cancel = true;
    console.log('Expansion cancelled for:', args.data.taskData.TaskName);
  }
}

{% endraw %}
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


## headerCellInfo

The [headerCellInfo](../api/gantt#headercellinfo) event is triggered during the rendering of column header cells in the Gantt Chart. It allows customization of header cell appearance and content before they are displayed in the UI.

The event provides an object of type [HeaderCellInfoEventArgs](../api/grid/headerCellInfoEventArgs) with the following properties:

| **Property**   | **Type**         | **Description**                                      |
|----------------|------------------|------------------------------------------------------|
| `cell`         |  HTMLElement  | Represents the header cell element being rendered.     |
| `node`         |  Element      | Refers to the inner content element of the header cell, used to update text or insert icons. |
| `name`         |  string       | Identifies the event as **headerCellInfo**.             |


{% if page.publishingplatform == "typescript" %}
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection, ICollapsingEventArgs } from '@syncfusion/ej2-gantt';
import { HeaderCellInfoEventArgs } from '@syncfusion/ej2-grids';

Gantt.Inject(Edit, Toolbar, Selection);

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  headerCellInfo: headerCellInfo,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function headerCellInfo(args: HeaderCellInfoEventArgs): void {
  // Here you can customize the header cell for a specific column.
  // In this example, we apply a background color to the 'TaskName' column header.
  if (args.cell.column.field === 'TaskName') {
    if (args.node && (args.node as HTMLElement).style) {
      (args.node as HTMLElement).style.backgroundColor = 'lightblue';
    }
  }
}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Selection);

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  headerCellInfo: headerCellInfo,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function headerCellInfo(args) {
  // Here you can customize the header cell for a specific column.
  // In this example, we apply a background color to the 'TaskName' column header.
  if (args.cell.column.field === 'TaskName') {
    if (args.node && (args.node.style)) {
      args.node.style.backgroundColor = 'lightblue';
    }
  }
}

{% endraw %}
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

## load

The [load](../api/gantt#load) event is triggered before the Gantt Chart component is rendered. It allows execution of pre-rendering logic such as modifying initial settings, injecting dynamic configurations, or preparing data before the component is displayed.

{% if page.publishingplatform == "typescript" %}
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}


import { Gantt, Edit, Toolbar, Selection } from '@syncfusion/ej2-gantt';

Gantt.Inject(Edit, Toolbar, Selection);

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      count: 1
    },
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  load: load,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function load(): void {
  // Here you can customize the Gantt configuration before it renders.
  // Example: Set default timeline tier format.
  gantt.timelineSettings = {
    topTier: {
      format: 'dd MMM',
      unit: 'Day'
    },
    bottomTier: {
      unit: 'Hour',
      count: 12
    }
  };
}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Selection);

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      count: 1
    },
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  load: load,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function load() {
  // Here you can customize the Gantt configuration before it renders.
  // Example: Set default timeline tier format.
  gantt.timelineSettings = {
    topTier: {
      format: 'dd MMM',
      unit: 'Day'
    },
    bottomTier: {
      unit: 'Hour',
      count: 12
    }
  };
}

{% endraw %}
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

## onMouseMove

The [onMouseMove](../api/gantt#onmousemove) event is triggered when the mouse moves within the Gantt Chart area. It enables tracking of cursor movement and interaction with elements under the pointer.

The event provides an argument of type [IMouseMoveEventArgs](../api/gantt/iMouseMoveEventArgs) with the following properties:

| **Property**  | **Type**                 |**Description**                                       |
|-----------------|-----------------------|---------------------------------------------------------|
| `column`        |  Object              | Column metadata at the cursor location.                 |
| `data`          |  IGanttData          | Task or row data under the cursor.                      |
| `date`          |  Date                | Timeline date corresponding to the cursor position.     |
| `eventMarkers`  |  EventMarkerModel    | Event markers present at the current position.          |
| `indicator`     |  IIndicator          | Indicator element such as milestone or status icon under the cursor. |
| `originalEvent` |  Object              | Native mouse event object (**MouseEvent**).              |
| `predecessor`   |  PredecessorTooltip  | Tooltip data for predecessor relationships, if available.|

{% if page.publishingplatform == "typescript" %}
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection, IMouseMoveEventArgs } from '@syncfusion/ej2-gantt';

Gantt.Inject(Edit, Toolbar, Selection);

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  allowReordering: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  onMouseMove: onMouseMove,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function onMouseMove(args: IMouseMoveEventArgs): void {
    // Check if the mouse is hovering over a column and log its field name.
    if (args.column) {
      console.log('Hovered column:', args.column.field);
    }

    // Access the original mouse event to retrieve cursor position.
    // Useful for custom interactions like tooltips or overlays
    if (args.originalEvent) {
      const { clientX, clientY } = args.originalEvent as MouseEvent;
      console.log(`Mouse position: X=${clientX}, Y=${clientY}`);
    }
}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Selection);

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  allowReordering: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  onMouseMove: onMouseMove,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function onMouseMove(args) {
  // Check if the mouse is hovering over a column and log its field name.
  if (args.column) {
    console.log('Hovered column:', args.column.field);
  }

  // Access the original mouse event to retrieve cursor position.
  // Useful for custom interactions like tooltips or overlays
  if (args.originalEvent) {
    const { clientX, clientY } = args.originalEvent;
    console.log(`Mouse position: X=${clientX}, Y=${clientY}`);
  }
}

{% endraw %}
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

## onTaskbarClick

The [onTaskbarClick](../api/gantt#ontaskbarclick) event is triggered when a taskbar element is clicked in the Gantt Chart. It supports custom actions based on the selected task, such as displaying task details, navigating to related views, or tracking interactions.

The event provides an argument of type [ITaskbarClickEventArgs](../api/gantt/iTaskbarClickEventArgs) with the following properties:

| **Property**     | **Type**      | **Description**                                 |
|------------------|---------------|-------------------------------------------------|
| `data`           |  IGanttData  | Task data associated with the clicked taskbar.  |
| `rowIndex`       |  number      | Index of the row where the taskbar was clicked. |
| `target`         |  Element     | DOM element where the click occurred.           |
| `taskbarElement` |  HTMLElement | Taskbar element that was clicked.               |
| `name`           |  string      | Name of the event (**onTaskbarClick**).         |

{% if page.publishingplatform == "typescript" %}
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection, ITaskbarClickEventArgs } from '@syncfusion/ej2-gantt';

Gantt.Inject(Edit, Toolbar, Selection);

interface Task {
  TaskID: number;
  TaskName: string;
  StartDate?: Date;
  EndDate?: Date;
  Duration?: number;
  Progress?: number;
  Predecessor?: string;
  subtasks?: Task[];
}

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  allowReordering: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  onTaskbarClick: onTaskbarClick,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function onTaskbarClick(args: ITaskbarClickEventArgs): void {
  // Access the clicked task's data
  const task = args.data as Task;
  console.log('Clicked Task:', task.TaskName);

  // Get the row index of the clicked task
  console.log('Row Index:', args.rowIndex);

  // Log the clicked taskbar element
  console.log('Taskbar Element:', args.taskbarElement);

  // Log the specific target element (e.g., label, connector)
  console.log('Clicked Element:', args.target);

  // Example: Show a custom tooltip or modal with task details
  alert(`Task "${task['TaskName']}" clicked at row ${args.rowIndex}`);
}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Selection);

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  allowReordering: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  onTaskbarClick: onTaskbarClick,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function onTaskbarClick(args) {
  // Access the clicked task's data
  const task = args.data;
  console.log('Clicked Task:', task.TaskName);

  // Get the row index of the clicked task
  console.log('Row Index:', args.rowIndex);

  // Log the clicked taskbar element
  console.log('Taskbar Element:', args.taskbarElement);

  // Log the specific target element (e.g., label, connector)
  console.log('Clicked Element:', args.target);

  // Example: Show a custom tooltip or modal with task details
  alert(`Task "${task['TaskName']}" clicked at row ${args.rowIndex}`);
}

{% endraw %}
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












## pdfColumnHeaderQueryCellInfo

The [pdfColumnHeaderQueryCellInfo](../api/gantt#pdfcolumnheaderquerycellinfo) event is triggered before each column header cell is exported to a PDF document in the Gantt Chart. It enables customization of header cell content, style, and formatting during the export process.

The event provides an argument of type [PdfColumnHeaderQueryCellInfoEventArgs](../api/gantt/pdfColumnHeaderQueryCellInfoEventArgs)  with the following properties:

| **Property**   | **Type**               | **Description**                                 |
|------------------|------------------------|------------------------------------------------ |
| `cell`           |  PdfTreeGridCell      | Represents the PDF cell being exported. Supports content and style updates. |
| `column`         |  ColumnModel         | Provides column configuration details such as field name and header text.  |
| `headerTemplate` |  ITemplateDetails     | Contains template content including text or image for the header cell. |
| `image`          |  PdfImage             | Specifies an image to be rendered in the header cell.     |
| `style`          |  PdfGanttCellStyle    | Defines visual styles such as font, background color, and borders. |
| `value`          |  string \| Object      | Value to be displayed in the header cell. Can be customized. |
| `name`           |  string               | Identifies the event as **pdfColumnHeaderQueryCellInfo**. |

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection, PdfHeaderQueryCellInfoEventArgs, PdfExport } from '@syncfusion/ej2-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

Gantt.Inject(Edit, Toolbar, Selection, PdfExport);

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  allowPdfExport: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'PdfExport'],
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      format: 'dd'
    }
  },
  pdfColumnHeaderQueryCellInfo: pdfColumnHeaderQueryCellInfo,
  toolbarClick: toolbarClick,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function toolbarClick(args: ClickEventArgs): void {
  if (args.item.id === 'Gantt_pdfexport') {
    gantt.pdfExport();
  }
}

function pdfColumnHeaderQueryCellInfo(args: PdfHeaderQueryCellInfoEventArgs): void {
  // Here you can customize the code.
  if (args.column.field === "TaskName") {
    args.value = "New HeaderText changed";
  }
}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Selection, ej.gantt.PdfExport);

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  allowPdfExport: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'PdfExport'],
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      format: 'dd'
    }
  },
  pdfColumnHeaderQueryCellInfo: pdfColumnHeaderQueryCellInfo,
  toolbarClick: toolbarClick,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function toolbarClick(args){
  if (args.item.id === 'Gantt_pdfexport') {
    gantt.pdfExport();
  }
}

function pdfColumnHeaderQueryCellInfo(args) {
  // Here you can customize the code.
  if (args.column.field === "TaskName") {
    args.value = "New HeaderText changed";
  }
}

{% endraw %}
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


## pdfExportComplete

The [pdfExportComplete](../api/gantt#pdfexportcomplete) event is triggered after the Gantt Chart completes the process of exporting data to a PDF document. It enables post-export operations such as handling the generated file, displaying notifications, or logging export activity.

The event provides an `object` with the following property:

| **Property** | **Type**    | **Description**                                  |
|--------------|-------------|--------------------------------------------------|
| `name`       |  string    | Identifies the event as **pdfExportComplete**    

{% if page.publishingplatform == "typescript" %}
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection, PdfExport } from '@syncfusion/ej2-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

Gantt.Inject(Edit, Toolbar, Selection, PdfExport);

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  allowPdfExport: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'PdfExport'],
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      format: 'dd'
    }
  },
  pdfExportComplete: pdfExportComplete,
  toolbarClick: toolbarClick,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function toolbarClick(args: ClickEventArgs): void {
  if (args.item.id === 'Gantt_pdfexport') {
    gantt.pdfExport();
  }
}

function pdfExportComplete(args: object): void {
  // This method is triggered after the PDF export is completed.
  // You can use it to log export status, show notifications, or handle the exported blob.
  console.log('PDF export completed', args);
}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Selection, ej.gantt.PdfExport);

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  allowPdfExport: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'PdfExport'],
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      format: 'dd'
    }
  },
  pdfColumnHeaderQueryCellInfo: pdfColumnHeaderQueryCellInfo,
  toolbarClick: toolbarClick,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function toolbarClick(args){
  if (args.item.id === 'Gantt_pdfexport') {
    gantt.pdfExport();
  }
}

function pdfColumnHeaderQueryCellInfo(args) {
  // This method is triggered after the PDF export is completed.
  // You can use it to log export status, show notifications, or handle the exported blob.
  console.log('PDF export completed', args);
}

{% endraw %}
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


## pdfQueryCellInfo

The [pdfQueryCellInfo](../api/gantt#pdfquerycellinfo) event is triggered for each cell during the PDF export process in the Gantt Chart. It allows customization of individual cell content, style, and formatting in the exported PDF document.

The event provides an argument of type [PdfExportCompleteArgs](../api/gantt/pdfQueryCellInfoEventArgs) with the following properties:

|  **Property** | **Type**           | **Description**                                     |
|---------------|--------------------|-----------------------------------------------------|
| `data`        |  object          | Task and Gantt data for the current row.            |
| `value`       |  Date \| string \| number \| boolean \| PdfTextWebLink \| PdfImage  | Value displayed in the cell during PDF export. |
| `column`      |  Column           | Column configuration for the current cell.          |
| `style`       |  PdfGanttCellStyle| Style settings like font, color, and padding.       |
| `cell`        |  PdfTreeGridCell  | PDF cell object being rendered and customized.      |
| `hyperLink`   |  Hyperlink         | Hyperlink details if the cell includes a link.      |
| `image`       |  Image            | Image details if the cell includes an image.        |

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection, PdfExport, PdfQueryCellInfoEventArgs } from '@syncfusion/ej2-gantt';
import { PdfColor} from '@syncfusion/ej2-pdf-export';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

Gantt.Inject(Edit, Toolbar, Selection, PdfExport);

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  allowPdfExport: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'PdfExport'],
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      format: 'dd'
    }
  },
  pdfQueryCellInfo: pdfQueryCellInfo,
  toolbarClick: toolbarClick,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function toolbarClick(args: ClickEventArgs): void {
  if (args.item.id === 'Gantt_pdfexport') {
    gantt.pdfExport();
  }
}

function pdfQueryCellInfo(args: PdfQueryCellInfoEventArgs): void {
  // Apply custom styling for the "Progress" column.
  if (args.column.field === 'Progress' && args.style) {
    args.style= { backgroundColor: new PdfColor(234, 234, 234) };
  }
  console.log('PDF Cell Info:', args);
}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Selection, ej.gantt.PdfExport);

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  allowPdfExport: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'PdfExport'],
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      format: 'dd'
    }
  },
  pdfQueryCellInfo: pdfQueryCellInfo,
  toolbarClick: toolbarClick,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function toolbarClick(args) {
  if (args.item.id === 'Gantt_pdfexport') {
    gantt.pdfExport();
  }
}

function pdfQueryCellInfo(args) {
  // Apply custom styling for the "Progress" column.
  if (args.column.field === 'Progress' && args.style) {
    args.style = { backgroundColor: new PdfColor(234, 234, 234) };
  }
  console.log('PDF Cell Info:', args);
}

{% endraw %}
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

## pdfQueryTaskbarInfo

The [pdfQueryTaskbarInfo](../api/gantt#pdfquerytaskbarinfo) event is triggered for each taskbar during the PDF export process in the Gantt Chart. This event allows customization of the taskbar appearance and content in the exported PDF document.

The event provides an argument of type [PdfQueryTaskbarInfoEventArgs](../api/gantt/pdfQueryTaskbarInfoEventArgs) with the following properties:

| **Property**     | **Type**             | **Description**                                            |
|------------------  | ---------------------|----------------------------------------------------------|
| `data `            |  IGanttData        | Task data for the current taskbar being exported.        |
| `indicators`       |  IIndicator[]       | Indicators displayed on the taskbar during PDF export.   |
| `labelSettings`    |  ILabel             | Custom content or image for taskbar labels.              |
| `taskbar`          |  ITaskbarStyle      | Style settings like color, border, and progress bar.     |
| `taskbarTemplate`  |  ITemplateDetails   | Template for taskbar appearance including text or image. |

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection, PdfExport, PdfQueryTaskbarInfoEventArgs } from '@syncfusion/ej2-gantt';
import { PdfColor } from '@syncfusion/ej2-pdf-export';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

Gantt.Inject(Edit, Toolbar, Selection, PdfExport);

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  }
];

const gantt: Gantt = new Gantt({
  dataSource: data,
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  },
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' }
  ],
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'PdfExport'],
  allowPdfExport: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      count: 1
    }
  },
  height: '550px',
  pdfQueryTaskbarInfo: pdfQueryTaskbarInfo,
  toolbarClick: toolbarClick
});

gantt.appendTo('#Gantt');

function pdfQueryTaskbarInfo(args: PdfQueryTaskbarInfoEventArgs) {
  args.taskbar.taskColor = new PdfColor(255, 87, 34);
  args.taskbar.progressColor = new PdfColor(0, 188, 212);
  console.log('PDF Taskbar Info:', args);
}

function toolbarClick(args: ClickEventArgs) {
  if (args.item.id === 'Gantt_pdfexport') {
    gantt.pdfExport();
  }
}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.PdfExport, ej.gantt.Selection);

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  }
];

const gantt = new ej.gantt.Gantt({
  dataSource: data,
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  },
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' }
  ],
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'PdfExport'],
  allowPdfExport: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      count: 1
    }
  },
  height: '550px',
  pdfQueryTaskbarInfo: pdfQueryTaskbarInfo,
  toolbarClick: toolbarClick
});

gantt.appendTo('#Gantt');

function pdfQueryTaskbarInfo(args){
  args.taskbar.taskColor = new ej.pdfexport.PdfColor(255, 87, 34);
  args.taskbar.progressColor = new ej.pdfexport.PdfColor(0, 188, 212);
  console.log('PDF Taskbar Info:', args);
}

function toolbarClick(args) {
  if (args.item.id === 'Gantt_pdfexport') {
    gantt.pdfExport();
  }
}

{% endraw %}
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

## pdfQueryTimelineCellInfo

The [pdfQueryTimelineCellInfo](../api/gantt#pdfquerytimelinecellinfo) event is triggered for each timeline cell during the PDF export process in the Gantt chart. It allows customization of the appearance, content, and style of timeline cells in the exported PDF document.

The event provides an argument of type [pdfQueryTimelineCellInfoEventArgs](../api/gantt/pdfQueryTimelineCellInfoEventArgs) with the following properties:

| **Property**   | **Type**            | **Description**                                      |
|----------------|---------------------|------------------------------------------------------|
| `timelineCell` |  PdfGanttCellStyle | Style settings for the timeline cell being rendered. |
| `value`        |  string            | Text content displayed in the timeline cell.         |

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection, PdfExport, PdfQueryTaskbarInfoEventArgs } from '@syncfusion/ej2-gantt';
import { PdfColor} from '@syncfusion/ej2-pdf-export';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

Gantt.Inject(Edit, Toolbar, Selection, PdfExport);

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  allowPdfExport: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'PdfExport'],
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      format: 'dd'
    }
  },
  pdfQueryTimelineCellInfo: pdfQueryTimelineCellInfo,
  toolbarClick: toolbarClick,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function toolbarClick(args: ClickEventArgs): void {
  if (args.item.id === 'Gantt_pdfexport') {
    gantt.pdfExport();
  }
}

function pdfQueryTimelineCellInfo(args: PdfQueryTaskbarInfoEventArgs): void {
  // Logs the timeline cell information.
  console.log('Timeline Info:', args.timelineCell);
}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Selection, ej.gantt.PdfExport);

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  allowPdfExport: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'PdfExport'],
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      format: 'dd'
    }
  },
  pdfQueryTimelineCellInfo: pdfQueryTimelineCellInfo,
  toolbarClick: toolbarClick,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function toolbarClick(args) {
  if (args.item.id === 'Gantt_pdfexport') {
    gantt.pdfExport();
  }
}

function pdfQueryTimelineCellInfo(args){
  // Logs the timeline cell information.
  console.log('Timeline Info:', args.timelineCell);
}

{% endraw %}
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

## queryCellInfo

The [queryCellInfo](../api/gantt#querytaskbarinfo) event is triggered during the rendering of each cell in the Gantt Chart. It allows customization of cell content, appearance, and style before they are displayed.

The event provides an argument of type  [QueryCellInfoEventArgs](../api/gantt/querycellinfoeventargs) with the following properties:

| **Property**       | **Type**         | **Description**                                   |
|--------------------|------------------|---------------------------------------------------|
| `cell`             |  HTMLElement    | Represents the cell element being rendered.       |
| `column`           |  Column         | Configuration object for the current column.      |
| `data`             |  object         | Data object for the row associated with the cell. |
| `foreignKeyData`   |  object         | Foreign key data for the cell, if applicable.     |
| `rowIndex`         |  number         | Index of the row containing the cell.             |
| `colIndex`         |  number         | Index of the column containing the cell.          |
| `colspan`          |  number         | Number of columns the cell spans across.          |

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection, PdfExport, QueryCellInfoEventArgs } from '@syncfusion/ej2-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

Gantt.Inject(Edit, Toolbar, Selection, PdfExport);

interface Task {
  TaskID: number;
  TaskName: string;
  StartDate?: Date;
  EndDate?: Date;
  Duration?: number;
  Progress?: number;
  Predecessor?: string;
  subtasks?: Task[];
}

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  allowPdfExport: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'PdfExport'],
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      format: 'dd'
    }
  },
  queryCellInfo: queryCellInfo,
  toolbarClick: toolbarClick,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function toolbarClick(args: ClickEventArgs): void {
  if (args.item.id === 'Gantt_pdfexport') {
    gantt.pdfExport();
  }
}

function queryCellInfo(args: QueryCellInfoEventArgs): void {
  // Highlight cells in the "Progress" column with low progress.
  const task = args.data as Task;
  const cell = args.cell as HTMLElement;
  if (args.column.field === 'Progress' && task.Progress !== undefined && task.Progress < 70) {
    cell.style.backgroundColor = '#fff3cd'; // Light yellow
    cell.style.color = '#856404'; // Dark yellow text
    cell.title = 'Progress is below 70%';
  }
  console.log('Query Cell Info:', args);
}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.PdfExport, ej.gantt.Selection);

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  allowPdfExport: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'PdfExport'],
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      format: 'dd'
    }
  },
  queryCellInfo:queryCellInfo,
  toolbarClick: toolbarClick,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function toolbarClick(args) {
  if (args.item.id === 'Gantt_pdfexport') {
    gantt.pdfExport();
  }
}

function queryCellInfo(args) {
  // Highlight cells in the "Progress" column with low progress.
  const task = args.data;
  const cell = args.cell;
  if (args.column.field === 'Progress' && task.Progress !== undefined && task.Progress < 70) {
    cell.style.backgroundColor = '#fff3cd';
    cell.style.color = '#856404';
    cell.title = 'Progress is below 70%';
  }
  console.log('Query Cell Info:', args);
}

{% endraw %}
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

## queryTaskbarInfo

The [queryTaskbarInfo](../api/gantt#querytaskbarinfo) event is triggered while rendering each taskbar in the Gantt Chart. It allows customization of taskbar appearance, content, and behavior before they are displayed in the UI.

The event provides an argument of type [IQueryTaskbarInfoEventArgs](../api/gantt/iquerytaskbarinfoeventargs) with the following properties:

| **Property**            | **Type**        | **Description**                                      |
|-------------------------|-----------------|------------------------------------------------------|
| `baselineColor`         |  string        | Color applied to the baseline indicator.             |
| `data`                  |  IGanttData    | Task data associated with the taskbar.               |
| `leftLabelColor`        |  string        | Color of the left-side label.                        |
| `milestoneColor`        |  string        | Color used for milestone taskbars.                   |
| `progressBarBgColor`    |  string        | Background color of the progress bar.                |
| `rightLabelColor`       |  string        | Color of the right-side label.                       |
| `rowElement`            |  Element       | Row element containing the taskbar.                  |
| `taskLabelColor`        |  string       | Color of the task label text.                        |
| `taskbarBgColor`        |  string        | Background color of the taskbar.                     |
| `taskbarBorderColor`    |  string        | Border color of the taskbar.                         |
| `taskbarElement`        |  Element       | Defines the taskbar element.                         |
| `taskbarType`           |  string        | Defines the taskbar type.                            |

{% if page.publishingplatform == "typescript" %}
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection, PdfExport, IQueryTaskbarInfoEventArgs } from '@syncfusion/ej2-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

Gantt.Inject(Edit, Toolbar, Selection, PdfExport);

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  allowPdfExport: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'PdfExport'],
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      format: 'dd'
    }
  },
  queryTaskbarInfo: queryTaskbarInfo,
  toolbarClick: toolbarClick,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function toolbarClick(args: ClickEventArgs): void {
  if (args.item.id === 'Gantt_pdfexport') {
    gantt.pdfExport();
  }
}

function queryTaskbarInfo(args: IQueryTaskbarInfoEventArgs): void {
  // Log the entire event argument object for debugging
  console.log('Query Cell Info:', args);

  // Set custom background color for the progress bar
  args.progressBarBgColor = "rgba(36, 170, 197, 1)";

  // Set custom colors for the taskbar and its label
  args.taskLabelColor = "rgba(216, 6, 6, 1)";
  args.taskbarBgColor = "rgb(88, 105, 197)";
  args.taskbarBorderColor = "rgba(79, 181, 63, 1)";
}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.PdfExport, ej.gantt.Selection);

const data  = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  allowPdfExport: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'PdfExport'],
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      format: 'dd'
    }
  },
  queryTaskbarInfo: queryTaskbarInfo,
  toolbarClick: toolbarClick,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function toolbarClick(args) {
  if (args.item.id === 'Gantt_pdfexport') {
    gantt.pdfExport();
  }
}

function queryTaskbarInfo(args){
  // Log the entire event argument object for debugging
  console.log('Query Cell Info:', args);

  // Set custom background color for the progress bar
  args.progressBarBgColor = "rgba(36, 170, 197, 1)";

  // Set custom colors for the taskbar and its label
  args.taskLabelColor = "rgba(216, 6, 6, 1)";
  args.taskbarBgColor = "rgb(88, 105, 197)";
  args.taskbarBorderColor = "rgba(79, 181, 63, 1)";
}

{% endraw %}
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


## recordDoubleClick

The [recordDoubleClick](../api/gantt#recorddoubleclick) event is triggered when a row in the Gantt Chart is double-clicked. It enables custom actions based on the selected task, such as opening detailed views, initiating inline editing, or displaying contextual information.

The event provides an argument of type [RecordDoubleClickEventArgs](../api/gantt/recorddoubleclickeventargs) with the following properties:

| **Property**         | **Type**         | **Description**                                       |
|----------------------|------------------|-------------------------------------------------------|
| `cell`               |  Element        | The cell element that was double-clicked.             |
| `cellIndex`          |  number         | Index of the clicked cell within the row.             |
| `column`             |  Column         | Column configuration for the clicked cell.            |
| `foreignKeyData`     |  Object         | Foreign key data linked to the column, if applicable. |
| `name`               |  string         | Name of the event (**recordDoubleClick**).            |
| `row`                |  Element        | The row element that was double-clicked.              |
| `rowData`            |  IGanttData     | Data object representing the selected task.           |
| `rowIndex`           |  number         | Index of the row in the data source.                  |
| `target`             |  Element        | DOM element that initiated the double-click.          |


{% if page.publishingplatform == "typescript" %}
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection, PdfExport, RecordDoubleClickEventArgs } from '@syncfusion/ej2-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

Gantt.Inject(Edit, Toolbar, Selection, PdfExport);

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  allowPdfExport: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'PdfExport'],
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      format: 'dd'
    }
  },
  recordDoubleClick: recordDoubleClick,
  toolbarClick: toolbarClick,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function toolbarClick(args: ClickEventArgs): void {
  if (args.item.id === 'Gantt_pdfexport') {
    gantt.pdfExport();
  }
}

function recordDoubleClick(args: RecordDoubleClickEventArgs): void {
  // Log the data of the row that was double-clicked.
  console.log('Record Data:', args.rowData);

  // Log the index of the row that was double-clicked.
  console.log('Row Index:', args.rowIndex);

  // You can customize this method to perform actions like opening a detail view, editing the record, or showing a popup with more information.
}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.PdfExport, ej.gantt.Selection);

const data  = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  allowPdfExport: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'PdfExport'],
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      format: 'dd'
    }
  },
  recordDoubleClick: recordDoubleClick,
  toolbarClick: toolbarClick,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function toolbarClick(args) {
  if (args.item.id === 'Gantt_pdfexport') {
    gantt.pdfExport();
  }
}

function recordDoubleClick(args) {
  // Log the data of the row that was double-clicked.
  console.log('Record Data:', args.rowData);

  // Log the index of the row that was double-clicked.
  console.log('Row Index:', args.rowIndex);

  // You can customize this method to perform actions like opening a detail view, editing the record, or showing a popup with more information.
}

{% endraw %}
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


## resizeStart

The [resizeStart](../api/gantt#resizestart) event is triggered when a column resize action begins in the Gantt Chart. It allows interception of the resize process to apply validations or restrict resizing for specific columns.

The event provides an argument of type [ResizeArgs](../api/grid/resizeArgs) with the following properties:

| **Property** | **Type**    | **Description**                                  |
|--------------|-------------|--------------------------------------------------|
| `cancel`     |  boolean   | Prevents column resizing when set to **true**.   |
| `column`     |  Column    | Details of the column being resized initially.   |


{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection, Resize } from '@syncfusion/ej2-gantt';
import { ResizeArgs } from '@syncfusion/ej2-grids';

Gantt.Inject(Edit, Toolbar, Selection, Resize);

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  allowResizing: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      format: 'dd'
    }
  },
  resizeStart: resizeStart,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');


function resizeStart(args: ResizeArgs): void {

  // Check if the column being resized is 'TaskID'
  if (args.column.field === "TaskID") {

    // Cancel the resize action for the 'TaskID' column
    args.cancel = true;

    // Show an alert message to inform the user
    alert("Resizing not allowed for TaskID column");
  }

}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Resize, ej.gantt.Selection);

const data  = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  allowResizing: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      format: 'dd'
    }
  },
  resizeStart: resizeStart,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');


function resizeStart(args) {

  // Check if the column being resized is 'TaskID'
  if (args.column.field === "TaskID") {

    // Cancel the resize action for the 'TaskID' column
    args.cancel = true;

    // Show an alert message to inform the user
    alert("Resizing not allowed for TaskID column");
  }

}

{% endraw %}
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

## resizeStop

The [resizeStop](../api/gantt#resizestop) event is triggered when a column resize operation is completed in the Gantt Chart. It enables layout updates, persistence of dimensions, or UI adjustments.

The event provides an argument of type [ResizeArgs](../api/grid/resizeArgs) with the following properties:

| **Property** | **Type**    | **Description**                                  |
|--------------|-------------|--------------------------------------------------|
| `cancel`     |  boolean   | Cancels the resize operation when set to **true**.  |
| `column`     |  Column    | Provides information about the resized column.   |

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection, Resize } from '@syncfusion/ej2-gantt';
import { ResizeArgs } from '@syncfusion/ej2-grids';

Gantt.Inject(Edit, Toolbar, Selection, Resize);

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  allowResizing: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      format: 'dd'
    }
  },
  resizeStop: resizeStop,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');


function resizeStop(args: ResizeArgs): void {
  // Log the column details that was resized
  console.log('Resized Column Info:', args.column);

  // You can customize this method to track column size changes, update layout settings, or store user preferences.
}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Resize, ej.gantt.Selection);

const data  = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  allowResizing: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      format: 'dd'
    }
  },
  resizeStop: resizeStop,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function resizeStop(args){
  // Log the column details that was resized
  console.log('Resized Column Info:', args.column);

  // You can customize this method to track column size changes, update layout settings, or store user preferences.
}

{% endraw %}
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

## resizing

The [resizing](../api/gantt#resizing) event is triggered continuously while a column is being resized in the Gantt Chart. It provides access to the current column width and supports dynamic updates to layout, styling, or constraints while the resize operation is in progress. This event is commonly used to enforce minimum or maximum widths, preview layout changes, or display contextual indicators during interaction.

The event provides an argument of type [ResizeArgs](../api/grid/resizeArgs) with the following properties:

| **Property** | **Type**    | **Description**                                  |
|--------------|-------------|--------------------------------------------------|
| `cancel`     |  boolean   | Stops resizing dynamically during interaction.   |
| `column`     |  Column    | Current column details during resizing process.  |

{% if page.publishingplatform == "typescript" %}
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection, Resize } from '@syncfusion/ej2-gantt';
import { ResizeArgs } from '@syncfusion/ej2-grids';

Gantt.Inject(Edit, Toolbar, Selection, Resize);

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  allowResizing: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      format: 'dd'
    }
  },
  resizing: resizing,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');


function resizing(args: ResizeArgs): void {
  // Log the column details that was resizing
  console.log('Resized Column Info:', args.column);

  // You can customize this method to track column size changes, update layout settings, or store user preferences.
}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Resize, ej.gantt.Selection);

const data  = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  allowResizing: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      format: 'dd'
    }
  },
  resizing: resizing,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function resizing(args) {
  // Log the column details that was resizing
  console.log('Resized Column Info:', args.column);

  // You can customize this method to track column size changes, update layout settings, or store user preferences.
}

{% endraw %}
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

## rowDataBound

The [rowDataBound](../api/gantt#rowdatabound) event is triggered each time a row is bound to data in the Gantt chart. It enables customization of row appearance and content based on the associated task data. This event supports scenarios such as applying conditional formatting, injecting tooltips or icons, and modifying row structure to reflect task-specific context or status.

The event provides an argument of type [RowDataBoundEventArgs](../api/gantt/rowDataBoundEventArgs) with the following properties:

| **Property**     | **Type**         | **Description**                                               |
|------------------|------------------|---------------------------------------------------------------|
| `data`           |  IGanttData     | Task data bound to the current row.                           |
| `isSelectable`   |  boolean        | Indicates if the row is selectable or not.                    |
| `row`            |  Element        | Row element rendered in the Gantt Chart.                      |
| `rowHeight`      |  number         | Height of the row being rendered.                             |

{% if page.publishingplatform == "typescript" %}
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection, Resize, RowDataBoundEventArgs } from '@syncfusion/ej2-gantt';

Gantt.Inject(Edit, Toolbar, Selection, Resize);

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  allowResizing: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      count: 1
    },
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  rowDataBound: rowDataBound,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function rowDataBound(args: RowDataBoundEventArgs): void {
  // Set the row height to 45 pixels
  args.rowHeight = 45;

  // Log the row data for debugging or inspection
  console.log('Row Data Bound Event:', args);
}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
</head>

<body>
       
     <div id='loader'>Loading....</div>
    <div id='container'>
	   <button id="addRow">Add Row</button>  
        <div id='Gantt'></div>        
    </div>
</body>

</html>

{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}
{% tabs %}
{% highlight js tabtitle="index.js" %}
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Resize, ej.gantt.Selection);

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  allowResizing: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      count: 1
    },
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  rowDataBound: rowDataBound,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function rowDataBound(args) {
  // Set the row height to 45 pixels
  args.rowHeight = 45;

  // Log the row data for debugging or inspection
  console.log('Row Data Bound Event:', args);
}

{% endraw %}
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

## rowDeselected

The [rowDeselected](../api/gantt#rowdeselected) event is triggered after a row is deselected in the Gantt Chart. It enables logic execution tied to selection changes, such as removing visual highlights, updating contextual UI elements, or tracking interaction patterns. This event supports scenarios involving both user-driven and programmatic deselection, ensuring consistent behavior across selection workflows.

The event provides an argument of type [RowDeselectEventArgs](../api/gantt/rowDeselectEventArgs) with the following properties:

| **Property**              | **Type**                  | **Description**                              |
|---------------------------|---------------------------|----------------------------------------------|
| `data`                    |  IGanttData[]            | Data for the row(s) that were deselected.    |
| `foreignKeyData`          |  Object \| Object[]    | Foreign key data linked to deselected row(s).|
| `isHeaderCheckboxClicked` |  boolean                 | **True** if header checkbox triggered deselection. |
| `isInteracted`            |  boolean                 | **True** if deselection was triggered by interaction. |
| `row`                     |  Element                 | Row element that was deselected.             |
| `rowIndex`                |  number                  | Index of the deselected row.                 |
| `rowIndexes`              |  number[]                | Indexes of all deselected rows.              |
| `target`                  |  Element                 | Target element that triggered the deselection.|

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection, RowDeselectEventArgs } from '@syncfusion/ej2-gantt';

Gantt.Inject(Edit, Toolbar, Selection);

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      format: 'dd'
    }
  },
  rowDeselected: rowDeselected,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

// Triggered after a row is deselected.
function rowDeselected(args: RowDeselectEventArgs) {
  // Log the entire event object for debugging.
  console.log('RowDeselected event triggered. Details of the deselected row:', args);
};

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Selection);

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      format: 'dd'
    }
  },
  rowDeselected: rowDeselected,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

// Triggered after a row is deselected.
function rowDeselected(args) {
  // Log the entire event object for debugging.
  console.log('RowDeselected event triggered. Details of the deselected row:', args);
};

{% endraw %}
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

## rowDeselecting

The [rowDeselecting](../api/gantt#rowdeselecting) event is triggered before a row is deselected in the Gantt Chart. It enables conditional control over the deselection process, allowing validations, confirmation prompts, or logic to prevent deselection based on task state or application rules. This event supports consistent behavior across both interactive and programmatic selection workflows.

The event provides an argument of type [RowDeselectEventArgs](../api/gantt/rowDeselectEventArgs) with the following properties:

| **Property**               | **Type**                | **Description** |
|----------------------------|-------------------------|------------------------------------------|
| `data`                     |  IGanttData[]          | Data for the row(s) being deselected. |
| `foreignKeyData`           |  Object \| Object[]  | Foreign key data linked to deselected row(s). |
| `isHeaderCheckboxClicked`  |  boolean               | **True** if header checkbox triggered deselection. |
| `isInteracted`             |  boolean                | **True** if deselection was triggered by interaction.|
| `row`                      |  Element                | Row element being deselected.         |
| `rowIndex`                 |  number                 | Index of the row being deselected.    |
| `rowIndexes`               |  number[]               | Indexes of all rows being deselected. |
| `target`                   |  Element                | Target element that triggered the deselection.|

{% if page.publishingplatform == "typescript" %}
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection, RowDeselectEventArgs } from '@syncfusion/ej2-gantt';

Gantt.Inject(Edit, Toolbar, Selection);

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      format: 'dd'
    }
  },
  rowDeselecting: rowDeselecting,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

// Triggered before a row is deselected.
function rowDeselecting(args: RowDeselectEventArgs) {
  // Log the entire event object for debugging.
  console.log('rowDeselecting event triggered. Details of the Deselecting row:', args);
};

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Selection);

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      format: 'dd'
    }
  },
  rowDeselecting: rowDeselecting,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

// Triggered before a row is deselected.
function rowDeselecting(args) {
  // Log the entire event object for debugging.
  console.log('rowDeselecting event triggered. Details of the Deselecting row:', args);
};

{% endraw %}
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

## rowDrag

The [rowDrag](../api/gantt#rowdrag) event is triggered while a row is being dragged in the Gantt Chart. It allows customization during drag operations, such as showing visual indicators, applying drag constraints, or tracking drag operations.

The event provides an argument of type [RowDragEventArgs](../api/gantt/rowDropEventArgs) with the following properties:

| **Property**     | **Type**        | **Description**                                      |
|------------------|-----------------|------------------------------------------------------|
| `data`           |  Object[]      | Data for the selected rows being dragged.            |
| `dropIndex`      |  number        | Index of the target row where the drop is intended.  |
| `fromIndex`      |  number        | Original index of the dragged row.                   |
| `originalEvent`  |  object        | Mouse event associated with the drag action.         |
| `rows`           |  Element[]     | DOM elements of the selected rows.                   |
| `target`         |  Element       | Target element where the drag started.               |


{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection, RowDD } from '@syncfusion/ej2-gantt';
import { RowDragEventArgs } from '@syncfusion/ej2-grids';

Gantt.Inject(Edit, Toolbar, Selection, RowDD);

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  allowRowDragAndDrop: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      format: 'dd'
    }
  },
  rowDrag: rowDrag,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

// Triggered when a row is being dragged.
function rowDrag(args: RowDragEventArgs): void {
  // Log the entire event object for inspection.
  console.log('Row Drag Event:', args);

  // Show the target element where the row is being dragged.
  console.log('Target Element:', args.target);

  // Show the row element being dragged.
  console.log('Row Element:', args.rows);
}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
</head>

<body>
       
     <div id='loader'>Loading....</div>
    <div id='container'>
	   <button id="addRow">Add Row</button>  
        <div id='Gantt'></div>        
    </div>
</body>

</html>

{% endhighlight %}
{% endtabs %}
        
{% elsif page.publishingplatform == "javascript" %}
{% tabs %}
{% highlight js tabtitle="index.js" %}
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Selection, ej.gantt.RowDD);

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  allowRowDragAndDrop: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      format: 'dd'
    }
  },
  columnDrop: columnDrop,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

// Triggered when a row is being dragged.
function rowDrag(args) {
  // Log the entire event object for inspection.
  console.log('Row Drag Event:', args);

  // Show the target element where the row is being dragged.
  console.log('Target Element:', args.target);

  // Show the row element being dragged.
  console.log('Row Element:', args.rows);
}

{% endraw %}
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

## rowDragStart

The [rowDragStart](../api/gantt#rowdragstart) event is triggered when a row drag operation begins in the Gantt Chart. It allows handling of drag initiation, such as applying movement restrictions, customizing visuals, or initiating tracking mechanisms.

The event provides an argument of type [RowDragEventArgs](../api/gantt/rowDropEventArgs) with the following properties:

| **Property**     | **Type**        | **Description**                            |
|------------------|-----------------|--------------------------------------------|
| `data`           |  Object[]      | Selected rows data .                       |
| `dropIndex`      |  number        | Target index for dropping the dragged row. |
| `fromIndex`      |  number        | Original index of the dragged row.         |
| `originalEvent`  |  object        | Native mouse event that started the drag.  |
| `rows`           |  Element[]     | DOM elements of the dragged rows.          |
| `target`         |  Element       |  Element where the drag was initiated.     |

{% if page.publishingplatform == "typescript" %}
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection, RowDD } from '@syncfusion/ej2-gantt';
import { RowDragEventArgs } from '@syncfusion/ej2-grids';

Gantt.Inject(Edit, Toolbar, Selection, RowDD);

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  allowRowDragAndDrop: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      format: 'dd'
    }
  },
  rowDragStart: rowDragStart,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function rowDragStart(args: RowDragEventArgs): void {
  console.log("Dragged row index:", args.fromIndex);
  console.log("Dragged row data:", args.data);
  console.log("Dragged row element:", (args.rows[0] as HTMLElement));
  console.log("Target cell:", args.target);

  // Highlight the dragged row.
  (args.rows[0] as HTMLElement).style.backgroundColor = "#ffeeba";
}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
</head>

<body>
       
     <div id='loader'>Loading....</div>
    <div id='container'>
	   <button id="addRow">Add Row</button>  
        <div id='Gantt'></div>        
    </div>
</body>

</html>

{% endhighlight %}
{% endtabs %}
        
{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Selection, ej.gantt.RowDD);

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  allowRowDragAndDrop: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      format: 'dd'
    }
  },
  rowDragStart: rowDragStart,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function rowDragStart(args) {
  console.log("Dragged row index:", args.fromIndex);
  console.log("Dragged row data:", args.data);
  console.log("Dragged row element:", args.rows[0]);
  console.log("Target cell:", args.target);

  // Highlight the dragged row.
  args.rows[0].style.backgroundColor = "#ffeeba";
}

{% endraw %}
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

## rowDragStartHelper

The [rowDragStartHelper](../api/gantt#rowdragstarthelper) event is triggered before a row drag operation begins in the Gantt Chart. It allows handling of drag eligibility checks, such as validating conditions, modifying behavior, or canceling the drag action.

The event provides an argument of type [RowDragEventArgs](../api/gantt/rowDropEventArgs) with the following properties:

| **Property**       | **Type**    | **Description**                                  |
|------------------|---------------|--------------------------------------------------|
| `data`           |  Object[]    | Selected rows data objects.                      |
| `dropIndex`      |  number      | Target index for potential drop.                 |
| `fromIndex`      |  number      | Original index of the row being dragged.         |
| `originalEvent`  |  object      | Native mouse event that initiated the drag.      |
| `rows`           |  Element[]   | DOM elements of the selected rows.               |
| `target`         |  Element     | Element where the drag was initiated.            |


{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection, RowDD } from '@syncfusion/ej2-gantt';
import { RowDragEventArgs } from '@syncfusion/ej2-grids';

Gantt.Inject(Edit, Toolbar, Selection, RowDD);

interface Task {
  TaskID: number;
  TaskName: string;
  StartDate?: Date;
  EndDate?: Date;
  Duration?: number;
  Progress?: number;
  Predecessor?: string;
  ParentID?: number;
  subtasks?: Task[];
}

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  allowRowDragAndDrop: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      format: 'dd'
    }
  },
  rowDragStartHelper: rowDragStartHelper,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

// Triggered before row drag starts.
function rowDragStartHelper(args: RowDragEventArgs): void {
  const draggedData = args.data[0] as Task;
   // Cancel drag and drop if TaskID is 3.
  if (draggedData.TaskID === 3) {
    args.cancel = true;
    console.log('Drag cancelled for TaskID 3');
  }
}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Selection, ej.gantt.RowDD);

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  allowRowDragAndDrop: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      format: 'dd'
    }
  },
  rowDragStartHelper: rowDragStartHelper,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

// Triggered before row drag starts.
function rowDragStartHelper(args) {
  const draggedData = args.data[0];
   // Cancel drag and drop if TaskID is 3.
  if (draggedData.TaskID === 3) {
    args.cancel = true;
    console.log('Drag cancelled for TaskID 3');
  }
}

{% endraw %}
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

## rowDrop

The [rowDrop](../api/gantt#rowdrop) event is triggered after a row is dropped into a new position in the Gantt Chart. It allows handling of row reordering, such as updating data, validating hierarchy changes, or tracking user actions.

The event provides an argument of type [RowDragEventArgs](../api/gantt/rowDropEventArgs) with the following properties:

| **Property**      | **Type**       | **Description**                                     |
|-------------------|------------------|---------------------------------------------------|
| `data`            |  Object[]       | Selected rows data objects.                       |
| `dropIndex`       |  number         | Target index for the dropped row.                 |
| `dropPosition`    |  string         | Position relative to the target row.              |
| `dropRecord`      |  IGanttData     | Dropped record after reordering.                  |
| `fromIndex`       |  number         | Original index of the dragged row.                |
| `modifiedRecords` |  IGanttData[]   | Records updated after the drop.                   |
| `originalEvent`   |  object         | Native mouse event that completed the drag.       |
| `requestType`     |  string         | Type of request triggered by the drop.            |
| `rows`            |  Element[]      | DOM elements of the dragged rows.                 |
| `target`          |  Element        | Element where the drag was initiated.             |

{% if page.publishingplatform == "typescript" %}
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

interface Task {
    TaskID: number;
    TaskName: string;
    StartDate?: Date;
    EndDate?: Date;
    Duration?: number;
    Progress?: number;
    Predecessor?: string;
    subtasks?: Task[];
}

import { Gantt, Edit, Toolbar, Selection, RowDD, RowDropEventArgs } from '@syncfusion/ej2-gantt';

Gantt.Inject(Edit, Toolbar, Selection, RowDD);

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  allowRowDragAndDrop: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      format: 'dd'
    }
  },
  rowDrop: rowDrop,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

// Triggered when a row is dropped after drag-and-drop.
function rowDrop(args: RowDropEventArgs): void {
  const draggedData = args.data as Task[];
  if (draggedData.some(task => task.TaskID === 2)) {
    args.cancel = true;
    console.log('Drop cancelled for TaskID 2');
  } else {
    console.log('Row dropped:', draggedData);
  }
}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Selection, ej.gantt.RowDD);

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  allowRowDragAndDrop: true,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      format: 'dd'
    }
  },
  rowDrop: rowDrop,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

// Triggered when a row is dropped after drag-and-drop.
function rowDrop(args){
  const draggedData = args.data;
  if (draggedData.some(task => task.TaskID === 2)) {
    args.cancel = true;
    console.log('Drop cancelled for TaskID 2');
  } else {
    console.log('Row dropped:', draggedData);
  }
}

{% endraw %}
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

## rowSelected

The [rowSelected](../api/gantt#rowselected) event is triggered after a row is selected in the Gantt Chart. It enables actions that respond to selection changes, such as styling the row, displaying related details, or tracking user interaction.

The event provides an argument of type [RowSelectEventArgs](../api/gantt/rowselecteventargs) with the following properties:

| **Property**              | **Type**                  |  **Description**                            |
|---------------------------|---------------------------|---------------------------------------------|
| `data`                    |  IGanttData              | Data for the selected row.                  |
| `foreignKeyData`          |  Object \| Object[]    | Foreign key data linked to selected row.    | 
| `isHeaderCheckboxClicked`|  boolean                 | **True** if header checkbox triggered selection.|
| `isInteracted`            |  boolean                 | **True** if selection was triggered by  interaction.|
| `previousRow`             |  Element                 | Previously selected row element.             |
| `previousRowIndex`        |  number                  | Index of the previously selected row.        |
| `row`                     |  Element \| Element[]  | Currently selected row element(s).           | 
| `rowIndex`                |  number                  | Index of the selected row.                   |
| `rowIndexes`              |  number[]                | Indexes of all selected rows.                |
| `target`                  |  Element                 | Target element that triggered the selection. |

{% if page.publishingplatform == "typescript" %}
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection, RowSelectEventArgs } from '@syncfusion/ej2-gantt';

Gantt.Inject(Edit, Toolbar, Selection);

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      format: 'dd'
    }
  },
  rowSelected: rowSelected,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

// Triggered when a row is selected.
function rowSelected(args: RowSelectEventArgs): void {
  console.log(args);
  
  // Reset background color for all rows.
  const rows = document.querySelectorAll('.e-row');
  rows.forEach(row => {
    (row as HTMLElement).style.backgroundColor = '';
  });

  // Highlight the selected row.
  if (args.row) {
    (args.row as HTMLElement).style.backgroundColor = '#1addffff'; // Light blue
  }
}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Selection);

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      format: 'dd'
    }
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  rowSelected: rowSelected,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

// Triggered when a row is selected.
function rowSelected(args){
  console.log(args);
  
  // Reset background color for all rows.
  const rows = document.querySelectorAll('.e-row');
  rows.forEach(row => {
    row.style.backgroundColor = '';
  });

  // Highlight the selected row.
  if (args.row) {
    args.row.style.backgroundColor = '#1addffff'; 
  }
}

{% endraw %}
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

## rowSelecting

The [rowSelecting](../api/gantt#rowselecting) event is triggered before a row is selected in the Gantt Chart. It enables actions that intercept the selection process, such as validating conditions, prompting confirmation, or canceling the selection.

The event provides an argument of type [RowSelectingEventArgs](../api/gantt/rowselecteventargs) with the following properties:

| **Property**              | **Type**                  | **Description**                              |
|---------------------------|---------------------------|----------------------------------------------|
| `cancel`                  |  boolean                 | Prevents row selection when set to **true**. |
| `data`                    |  IGanttData              | Data for the row being selected.             |
| `foreignKeyData`          |  Object \| Object[]    | Foreign key data linked to selected row.     |
| `isCtrlPressed`           |  boolean                 | **True** if CTRL key was pressed during selection. |
| `isHeaderCheckboxClicked` |  boolean                 | **True** if header checkbox triggered selection. |
| `isInteracted`            |  boolean                 | **True** if selection was triggered by interaction.|
| `isShiftPressed`          |  boolean                 | **True** if SHIFT key was pressed during selection.|
| `previousRow`             |  Element                 | Previously selected row element.             |
| `previousRowIndex`        |  number                  | Index of the previously selected row.        |
| `row`                     |  Element \| Element[]  | Row element(s) being selected or deselected. |
| `rowIndex`                |  number                  | Index of the row being selected.             |
| `rowIndexes`              |  number[]                | Indexes of all rows being selected.          |
| `target`                  |  Element                 | Target element that triggered the selection. |

{% if page.publishingplatform == "typescript" %}
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection, RowSelectingEventArgs } from '@syncfusion/ej2-gantt';

Gantt.Inject(Edit, Toolbar, Selection);

interface Task {
  TaskID: number;
  TaskName: string;
  StartDate?: Date;
  EndDate?: Date;
  Duration?: number;
  Progress?: number;
  Predecessor?: string;
  ParentID?: number;
  subtasks?: Task[];
}

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      format: 'dd'
    }
  },
  rowSelecting: rowSelecting,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

// Triggered before a row is selected.
function rowSelecting(args: RowSelectingEventArgs): void {
  console.log(args);
  // Extract the task data from the event arguments.
  const task = args.data as Task;
  // Check if the selected task has TaskID = 3.
  if (task.TaskID == 3) {
    // Cancel the row selection for TaskID 3.
    args.cancel = true;
    console.log("Row selection cancelled for TaskID 3");
  }
}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Selection);

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      format: 'dd'
    }
  },
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  rowSelecting: rowSelecting,
  height: '450px',
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

// Triggered before a row is selected.
function rowSelecting(args) {
  console.log(args);
  // Extract the task data from the event arguments.
  const task = args.data;
  // Check if the selected task has TaskID = 3.
  if (task.TaskID == 3) {
    // Cancel the row selection for TaskID 3.
    args.cancel = true;
    console.log("Row selection cancelled for TaskID 3");
  }
}

{% endraw %}
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

## splitterResizeStart

The [splitterResizeStart](../api/gantt#splitterresizestart) event is triggered when the splitter bar begins resizing in the Gantt Chart layout.It enables actions that respond to resize initiation, such as applying layout constraints, customizing visuals, or tracking user interaction.

The event provides an argument of type [ResizeArgs](../api/grid/resizeArgs) with the following properties:

| **Property**     | **Type**               | **Description**                          |
|------------------|------------------------|------------------------------------------|
| `cancel`         |  boolean              | Defines whether the event is cancelable. |
| `column`         |  Column               | Defines the resizing column details.     |

{% if page.publishingplatform == "typescript" %}
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection } from '@syncfusion/ej2-gantt';
import { ResizeArgs } from '@syncfusion/ej2-grids';

Gantt.Inject(Edit, Toolbar, Selection);

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      count: 1
    },
  },
  splitterResizeStart: splitterResizeStart,
  height: '450px',
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

// Triggered when splitter resizing starts.
function splitterResizeStart(args: ResizeArgs): void {
  console.log('Splitter resize started:', args);

  // Prevent resizing if screen width is less than 768 pixels.
  if (window.innerWidth < 768) {
    args.cancel = true;
    console.log('Resize cancelled due to small screen width');
  }
}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Selection);

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      count: 1
    },
  },
  splitterResizeStart: splitterResizeStart,
  height: '450px',
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

// Triggered when splitter resizing starts.
function splitterResizeStart(args) {
  console.log('Splitter resize started:', args);

  // Prevent resizing if screen width is less than 768 pixels.
  if (window.innerWidth < 768) {
    args.cancel = true;
    console.log('Resize cancelled due to small screen width');
  }
}

{% endraw %}
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

## splitterResized

The [splitterResized](../api/gantt#splitterresized) event is triggered after the splitter bar has been resized in the Gantt Chart layout. It enables actions that respond to final layout changes, such as saving pane dimensions, updating related components, or tracking user interaction.

The event provides an argument of type [ISplitterResizedEventArgs](../api/gantt/isplitterresizedeventargs) with the following properties:

| **Property**   | **Type**               | **Description**                              |
|----------------|------------------------|----------------------------------------------|
| `cancel`       |  boolean              | Indicates if the event is cancelable.        |
| `element`      |  HTMLElement          | Splitter container element.                  |
| `event`        |  Event                | Event that triggered the resize.             |
| `index`        |  number[]             | Indexes of resized panes.                    |
| `pane`         |  HTMLElement[]        | Pane elements involved in resizing.          |
| `paneSize`     |  number[]             | Final sizes of the resized panes.            |
| `separator`    |  HTMLElement          | Splitter bar element that was resized.       |

{% if page.publishingplatform == "typescript" %}
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection, ISplitterResizedEventArgs } from '@syncfusion/ej2-gantt';

Gantt.Inject(Edit, Toolbar, Selection);

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      count: 1
    },
  },
  splitterResized: splitterResized,
  height: '450px',
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');


function splitterResized(args: ISplitterResizedEventArgs): void {
  const leftPaneSize = args.paneSize[0];
  const rightPaneSize = args.paneSize[1];

  // Save pane sizes to local storage.
  localStorage.setItem('ganttLeftPaneWidth', leftPaneSize.toString());
  localStorage.setItem('ganttRightPaneWidth', rightPaneSize.toString());
  console.log('Splitter resized:', leftPaneSize, rightPaneSize);
}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Selection);

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      count: 1
    },
  },
  splitterResized: splitterResized,
  height: '450px',
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function splitterResized(args) {
  const leftPaneSize = args.paneSize[0];
  const rightPaneSize = args.paneSize[1];

  // Save pane sizes to local storage.
  localStorage.setItem('ganttLeftPaneWidth', leftPaneSize.toString());
  localStorage.setItem('ganttRightPaneWidth', rightPaneSize.toString());

  console.log('Splitter resized:', leftPaneSize, rightPaneSize);
}

{% endraw %}
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

## splitterResizing

The [splitterResizing](../api/gantt#splitterresizing) event is triggered continuously while the splitter bar is being dragged in the Gantt Chart layout. It enables responsive actions during resizing, such as enforcing layout constraints, updating visual elements, or tracking user interaction.

The event provides an argument of type `ResizingEventArgs` with the following properties:

| **Property**   | **Type**         | **Description**                              |
|----------------|------------------|----------------------------------------------|
| `name`         |  string         | Event name: **splitterResizing**.            |
| `element`      |  HTMLElement    | Splitter container element.                  |
| `event`        |  MouseEvent     | Mouse event triggering the resize.           |
| `index`        |  number[]       | Indexes of panes being resized.              |
| `pane`         |  HTMLElement[]  | Pane elements involved in resizing.          |
| `paneSize`     |  number[]       | Current sizes of the panes.                  |
| `separator`    |  HTMLElement    | Splitter bar element being dragged.          |

{% if page.publishingplatform == "typescript" %}
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection, ITaskbarEditedEventArgs } from '@syncfusion/ej2-gantt';
import { ResizingEventArgs } from '@syncfusion/ej2-layouts';

Gantt.Inject(Edit, Toolbar, Selection);

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      count: 1
    },
  },
  splitterResizing: splitterResizing,
  height: '450px',
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function splitterResizing(args: ResizingEventArgs): void {
  // Change separator color when splitter resizing.
  const separator = args.separator;
  (separator as HTMLElement).style.backgroundColor = '#4CAF50';
}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Selection);

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      count: 1
    },
  },
  splitterResizing: splitterResizing,
  height: '450px',
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function splitterResizing(args) {
  // Change separator color when splitter resizing.
  const separator = args.separator;
  separator.style.backgroundColor = '#4CAF50';
}

{% endraw %}
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

## taskbarEdited

The [taskbarEdited](../api/gantt#taskbaredited) event is triggered after a taskbar is modified in the Gantt Chart. It enables actions that respond to task updates, such as saving changes, validating edits, or updating related components.

The event provides an argument of type [TaskbarEditedEventArgs](../api/gantt/itaskbareditedeventargs) with the following properties:

| **Property**          | **Type**         | **Description**                              |
|-----------------------|------------------|----------------------------------------------|
| `action`              |  string         | Type of taskbar edit action.                 |
| `cancel`              |  boolean        | Indicates if the event is cancelable.        |
| `data`                |  IGanttData     | Data of the edited task.                     |
| `editingFields`       |  ITaskData      | Fields being edited in the task.             |
| `previousData`        |  ITaskData      | Task data before the edit.                   |
| `recordIndex`         |  number         | Index of the edited task.                    |
| `roundOffDuration`    |  boolean        | Indicates if duration is rounded off.        |
| `segmentIndex`        |  number         | Index of the edited segment.                 |
| `target`              |  Element        | Target element of the edit.                  |
| `taskBarEditAction`   |  string         | Type of taskbar edit performed.              |

{% if page.publishingplatform == "typescript" %}
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection, ITaskbarEditedEventArgs } from '@syncfusion/ej2-gantt';

Gantt.Inject(Edit, Toolbar, Selection);

interface Task {
  TaskID: number;
  TaskName: string;
  StartDate?: Date;
  EndDate?: Date;
  Duration?: number;
  Progress?: number;
  Predecessor?: string;
  ParentID?: number;
  subtasks?: Task[];
}

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      count: 1
    },
  },
  taskbarEdited: taskbarEdited,
  height: '450px',
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');


function taskbarEdited(args: ITaskbarEditedEventArgs): void {
  // Extract the edited task data.
  const editedTask = args.data as Task;

  // Identify the type of taskbar edit action performed.
  const actionType = args.taskBarEditAction;

  // Retrieve the previous state of the task before editing.
  const previous = args.previousData;

  // Log the event to the console for debugging or tracking.
  console.log('Taskbar Edited!');
  console.log('Action Type:', actionType);
  console.log('Edited Task:', editedTask);
  console.log('Previous Task Data:', previous);

  // Show a confirmation alert to the user with task name and action type.
  alert(`Task "${editedTask.TaskName}" was updated via ${actionType}.`);
}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Selection);

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      count: 1
    },
  },
  taskbarEdited: taskbarEdited,
  height: '450px',
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function taskbarEdited(args) {
  // Extract the edited task data.
  const editedTask = args.data;

  // Identify the type of taskbar edit action performed.
  const actionType = args.taskBarEditAction;

  // Retrieve the previous state of the task before editing.
  const previous = args.previousData;

  // Log the event to the console for debugging or tracking.
  console.log('Taskbar Edited!');
  console.log('Action Type:', actionType);
  console.log('Edited Task:', editedTask);
  console.log('Previous Task Data:', previous);

  // Show a confirmation alert to the user with task name and action type.
  alert(`Task "${editedTask.TaskName}" was updated via ${actionType}.`);
}

{% endraw %}
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

## taskbarEditing

The [taskbarEditing](../api/gantt#taskbarediting) event is triggered while a taskbar is being dragged or resized in the Gantt Chart. It enables actions that respond to live taskbar changes, such as enforcing constraints, updating tooltips, or canceling edits based on conditions.

The event provides an argument of type [ITaskbarEditedEventArgs](../api/gantt/iTaskbarEditedEventArgs) with the following properties:

| **Property**          | **Type**         | **Description**                              |
|-----------------------|------------------|----------------------------------------------|
| `action`              |  string         | Type of taskbar edit in progress.            |
| `cancel`              |  boolean        | Set **true** to cancel the edit.             |
| `data`                |  IGanttData     | Data of the task being edited.               |
| `editingFields`       |  ITaskData      | Fields currently being modified.             |
| `previousData`        |  ITaskData      | Task data before the edit.                   |
| `recordIndex`         |  number         | Index of the task being edited.              |
| `roundOffDuration`    |  boolean        | Indicates if duration should be rounded.     |
| `segmentIndex`        |  number         | Index of the segment being edited.           |
| `target`              |  Element        | Target element involved in the edit.         |
| `taskBarEditAction`   |  string         | Specific type of taskbar edit action.        |

{% if page.publishingplatform == "typescript" %}
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection, ITaskbarEditedEventArgs } from '@syncfusion/ej2-gantt';

Gantt.Inject(Edit, Toolbar, Selection);

interface Task {
  TaskID: number;
  TaskName: string;
  StartDate?: Date;
  EndDate?: Date;
  Duration?: number;
  Progress?: number;
  Predecessor?: string;
  subtasks?: Task[];
}

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      count: 1
    },
  },
  taskbarEditing: taskbarEditing,
  height: '450px',
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');


function taskbarEditing(args: ITaskbarEditedEventArgs): void {
  const editedTask = args.data as Task;
  const actionType = args.taskBarEditAction;
  const newDuration = editedTask.Duration;

  console.log('Editing in progress...');
  console.log('Action Type:', actionType);
  console.log('New Duration:', newDuration);

  // Example validation: prevent duration less than 2 or more than 5
  if (newDuration < 2 || newDuration > 5) {
    args.cancel = true;
    console.log(`Editing cancelled. Duration must be between 2 and 5 days.`);
  }
}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Selection);

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'Progress', headerText: 'Progress' },
  ],
  toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
  timelineSettings: {
    topTier: {
      unit: 'Week',
      format: 'MMM dd, yyyy'
    },
    bottomTier: {
      unit: 'Day',
      count: 1
    },
  },
  taskbarEditing: taskbarEditing,
  height: '450px',
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');

function taskbarEditing(args) {
  const editedTask = args.data;
  const actionType = args.taskBarEditAction;
  const newDuration = editedTask.Duration;

  console.log('Editing in progress...');
  console.log('Action Type:', actionType);
  console.log('New Duration:', newDuration);

  // Example validation: prevent duration less than 2 or more than 5
  if (newDuration < 2 || newDuration > 5) {
    args.cancel = true;
    console.log(`Editing cancelled. Duration must be between 2 and 5 days.`);
  }
}

{% endraw %}
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

## toolbarClick

The [toolbarClick](../api/gantt#toolbarclick) event is triggered when any toolbar item is clicked in the Gantt chart. It enables actions that respond to toolbar interactions, such as overriding default behavior, confirming actions, or triggering external workflows.

The event provides an argument of type [ClickEventArgs](../api/toolbar/clickEventArgs) with the following properties:

| **Property**     | **Type**           | **Description**               |
|--------------------|------------------|-------------------------------|
| `name`             |  string         | Specifies name of the event   |
| `item`             |  object         | Clicked toolbar item info     |
| `originalEvent`    |  PointerEvent   | Native DOM event              |
| `cancel`           |  boolean        | Cancel default action         |

{% if page.publishingplatform == "typescript" %}
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}

import { Gantt, Edit, Toolbar, Selection } from '@syncfusion/ej2-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

Gantt.Inject(Edit, Toolbar, Selection);

const data: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt: Gantt = new Gantt({
  dataSource: data,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'ExpandAll', 'CollapseAll', 'PrevTimeSpan', 'NextTimeSpan', 'Indent', 'Outdent'],
  toolbarClick: toolbarClick,
  height: '450px',
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');


function toolbarClick(args: ClickEventArgs): void {
  if (args.item.id === "Gantt_delete") {
    const confirmDelete = confirm('Are you sure you want to delete this task?');
    if (!confirmDelete) {
      args.cancel = true;
    }
  }
  console.log('Toolbar item clicked:', args.item.text);
}

{% endraw %}
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
	<link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
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
{% raw %}

ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Toolbar, ej.gantt.Selection);

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2024'),
    EndDate: new Date('04/21/2024'),
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
    ]
  },
];

let gantt = new ej.gantt.Gantt({
  dataSource: data,
  projectStartDate: new Date('03/31/2024'),
  projectEndDate: new Date('05/30/2024'),
  editSettings: {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  },
  toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'ExpandAll', 'CollapseAll', 'PrevTimeSpan', 'NextTimeSpan', 'Indent', 'Outdent'],
  toolbarClick: toolbarClick,
  height: '450px',
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  }
});

gantt.appendTo('#Gantt');


function toolbarClick(args) {
  if (args.item.id === "Gantt_delete") {
    const confirmDelete = confirm('Are you sure you want to delete this task?');
    if (!confirmDelete) {
      args.cancel = true;
    }
  }
  console.log('Toolbar item clicked:', args.item.text);
}

{% endraw %}
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