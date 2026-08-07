---
layout: post
title: Resource View in JavaScript Gantt Chart | Syncfusion
description: Learn how to configure resource view in Syncfusion JavaScript Gantt Chart to visualize tasks hierarchically by resource, showing workload in timeline.
keywords: javascript gantt resource view, hierarchical view, resource allocation, task grouping, resource management, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/javascript/gantt-chart/resource-view
platform: gantt-sdk
control: Resource View - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Resource View with Hierarchical Tasks in JavaScript Gantt Chart Chart

The resource view in the JavaScript Gantt Chart control organizes tasks hierarchically by resource, displaying resources as parent nodes and their assigned tasks as child taskbars in a timeline. Enable it by setting [viewType](https://ej2.syncfusion.com/javascript/documentation/api/gantt#viewtype) to **ResourceView**. Resources are declared in the [resources](https://ej2.syncfusion.com/javascript/documentation/api/gantt#resources) collection and mapped through [resourceFields](https://ej2.syncfusion.com/javascript/documentation/api/gantt#resourcefields) to identify the resource ID, name, unit, and group. Each task then references its assigned resources through [taskFields.resourceInfo](https://ej2.syncfusion.com/javascript/documentation/api/gantt/taskFields#resourceinfo) in the task data source so resource-based grouping and workload visualization are applied automatically. Unassigned tasks are grouped under an **Unassigned Task** node, while the [queryTaskbarInfo](../gantt/events#querytaskbarinfo) event can customize taskbar styles and overallocation indicators can highlight scheduling conflicts. Taskbars include ARIA labels for accessibility, and the view adapts to responsive layouts, although narrow screens may truncate resource names. Parent tasks are not supported, and tasks require scheduling details such as a start date and duration.

## Configure resource view

Enable resource view by setting [viewType](https://ej2.syncfusion.com/javascript/documentation/api/gantt/index-default#viewtype) to **ResourceView** and mapping the resource collection with [resources](https://ej2.syncfusion.com/javascript/documentation/api/gantt#resources) and [resourceFields](https://ej2.syncfusion.com/javascript/documentation/api/gantt#resourcefields). In the task data source, assign resources through [taskFields.resourceInfo](https://ej2.syncfusion.com/javascript/documentation/api/gantt/taskFields#resourceinfo) by providing the resource IDs or resource objects that correspond to the mapped resource fields. The following snippet shows the data structure used for resource-based assignment:

```js
var resources = [
  {
    resourceId: 1,
    resourceName: "Martin Tamer",
    resourceGroup: "Planning Team",
    Unit: 50,
  },
  {
    resourceId: 2,
    resourceName: "Rose Fuller",
    resourceGroup: "Testing Team",
    Unit: 70,
  },
];

var data = [
  {
    TaskID: 1,
    TaskName: "Planning",
    StartDate: new Date("03/25/2019"),
    Duration: 3,
    resources: [1],
  },
  {
    TaskID: 2,
    TaskName: "Development",
    StartDate: new Date("03/28/2019"),
    Duration: 5,
    resources: [2],
  },
];
```

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/resource-view-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/resource-view-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/resource-view-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/resource-view-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/resource-view-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/resource-view-cs1" %}
{% endif %}

This configuration groups tasks by resources, displaying them as child nodes.

## Visualize resource overallocation

Overallocation occurs when tasks exceed a resource’s daily capacity, calculated from [dayWorkingTime](https://ej2.syncfusion.com/javascript/documentation/api/gantt#dayworkingtime) and resource unit in [resourceFields.unit](https://ej2.syncfusion.com/javascript/documentation/api/gantt/resourceFields#unit). Enable indicators with [showOverAllocation](https://ej2.syncfusion.com/javascript/documentation/api/gantt#showoverallocation) set to **true** (default: **false**), highlighting affected date ranges with square brackets.

The following example toggles overallocation visibility:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/resource-view-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/resource-view-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/resource-view-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/resource-view-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/resource-view-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/resource-view-cs2" %}
{% endif %}

This configuration highlights scheduling conflicts for workload management.

## Manage unassigned tasks

Tasks not assigned to any resource are termed unassigned tasks. These tasks are automatically grouped under a node labeled **Unassigned Task** and displayed at the bottom of the Gantt data collection. The system validates task assignments during load time based on the [taskFields.resourceInfo](https://ej2.syncfusion.com/javascript/documentation/api/gantt/taskFields#resourceinfo) mapping property in the data source.

When a resource is subsequently assigned to an unassigned task, the task automatically moves to become a child of the respective resource node.

## Enable taskbar drag and drop

Enable taskbar drag-and-drop between resources with [allowTaskbarDragAndDrop](https://ej2.syncfusion.com/javascript/documentation/api/gantt#allowtaskbardraganddrop) set to **true**, requiring the `RowDD` module. This allows vertical taskbar movement for reassignment, triggered by the [rowDragStart](../gantt/events#rowdragstart) and [rowDrop](../gantt/events#rowdrop) events.

The following example enables drag-and-drop:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/resource-view-taskbardragdrop-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/resource-view-taskbardragdrop-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/resource-view-taskbardragdrop-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/resource-view-taskbardragdrop-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/resource-view-taskbardragdrop-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/resource-view-taskbardragdrop-cs1" %}
{% endif %}

## Customize the taskbar based on resource view

You can customize the taskbar appearance based on resource view using the [queryTaskbarInfo](https://ej2.syncfusion.com/javascript/documentation/api/gantt/iQueryTaskbarInfoEventArgs) event.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/resource-view-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/resource-view-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/resource-view-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/resource-view-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/resource-view-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/resource-view-cs4" %}
{% endif %}

## Hide columns in resource tab

To hide a column in the Gantt Chart's resource view, handle the [actionBegin](../gantt/events#actionbegin) event and set the `visible` property of the target column to **false** when the `requestType` is `beforeOpenAddDialog` or `beforeOpenEditDialog`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/resource-view-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/resource-view-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/resource-view-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/resource-view-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/resource-view-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/resource-view-cs5" %}
{% endif %}

## Limitations

- Resource view does not support parent tasks; all tasks must be child tasks under resources or the **Unassigned Task** node.
- Unscheduled tasks (lacking start date or duration) are not supported in resource view.

## See also
- [How to configure resources?](../gantt/resources)
- [How to enable multi taskbar?](../gantt/multi-taskbar)
- [How to customize taskbars?](../gantt/taskbar)
