---
layout: post
title: Resource View in React Gantt Chart Component | Syncfusion
description: Learn how to configure resource view in the Syncfusion React Gantt Chart component for hierarchical task visualization and resource allocation.
platform: gantt-sdk
control: Resource view
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Resource View in React Gantt Chart Component

The resource view in the [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart) component organizes tasks hierarchically by resource, displaying resources as parent nodes and their assigned tasks as child taskbars in a timeline. Enabled by setting [viewType](https://ej2.syncfusion.com/react/documentation/api/gantt#viewtype) to **ResourceView**, this view visualizes workloads, such as multiple tasks per resource, with taskbars showing duration, progress, and dependencies. Unassigned tasks group under an **Unassigned Task** node. The [queryTaskbarInfo](https://ej2.syncfusion.com/react/documentation/gantt/events#querytaskbarinfo) event customizes taskbar styles, and overallocation indicators highlight scheduling conflicts. Taskbars include ARIA labels for accessibility, ensuring screen reader compatibility, and adapt to responsive designs, though narrow screens may truncate resource names. Parent tasks are not supported, and tasks require scheduling (start date and duration).

## Configure resource view

Enable resource view by setting [viewType](https://ej2.syncfusion.com/react/documentation/api/gantt#viewtype) to **ResourceView** and mapping resources via [resources](https://ej2.syncfusion.com/react/documentation/api/gantt#resources) and [resourceFields](https://ej2.syncfusion.com/react/documentation/api/gantt#resourcefields). Tasks are assigned using [taskFields.resourceInfo](https://ej2.syncfusion.com/react/documentation/api/gantt/taskFields#resourceinfo).

The following example configures resource view:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/resource-view-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/resource-view-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/resource-view-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/resource-view-cs1" %}

This configuration groups tasks by resources, displaying them as child nodes.

## Visualize resource overallocation

Overallocation occurs when tasks exceed a resource’s daily capacity, calculated from [dayWorkingTime](https://ej2.syncfusion.com/react/documentation/api/gantt#dayworkingtime) and resource unit in [resourceFields.unit](https://ej2.syncfusion.com/react/documentation/api/gantt/resourceFields#unit). Enable indicators with [showOverAllocation](https://ej2.syncfusion.com/react/documentation/api/gantt#showoverallocation) set to **true** (default: **false**), highlighting affected date ranges with square brackets.

The following example toggles overallocation visibility:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/resource-view-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/resource-view-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/resource-view-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/resource-view-cs2" %}

This configuration highlights scheduling conflicts for workload management.

## Manage unassigned tasks

Tasks not assigned to any resource are termed unassigned tasks. These tasks are automatically grouped under a node labeled **Unassigned Task** and displayed at the bottom of the Gantt data collection. The system validates task assignments during load time based on the [taskFields.resourceInfo](https://ej2.syncfusion.com/react/documentation/api/gantt/taskFields#resourceinfo) mapping property in the data source.

When a resource is subsequently assigned to an unassigned task, the task automatically moves to become a child of the respective resource node.

## Enable taskbar drag and drop

Enable taskbar drag-and-drop between resources with [allowTaskbarDragAndDrop](https://ej2.syncfusion.com/react/documentation/api/gantt#allowtaskbardraganddrop) set to **true**, requiring the `RowDD` module. This allows vertical taskbar movement for reassignment, triggered by the [rowDragStart](https://ej2.syncfusion.com/react/documentation/gantt/events#rowdragstart) and [rowDrop](https://ej2.syncfusion.com/react/documentation/gantt/events#rowdrop) events.

The following example enables drag-and-drop:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/resource-view-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/resource-view-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/resource-view-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/resource-view-cs4" %}

This configuration supports dynamic task reassignment.

## Customize the taskbar based on resource view

You can customize the taskbar appearance based on resource view using the [queryTaskbarInfo](https://ej2.syncfusion.com/react/documentation/api/gantt/iQueryTaskbarInfoEventArgs) event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/resource-view-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/resource-view-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/resource-view-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/resource-view-cs6" %}

## Hide columns in resource tab

To hide a column in the Gantt Chart's resource view, handle the [actionBegin](https://ej2.syncfusion.com/react/documentation/gantt/events#actionbegin) event and set the `visible` property of the target column to **false** when the `requestType` is `beforeOpenAddDialog` or `beforeOpenEditDialog`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/resource-view-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/resource-view-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/resource-view-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/resource-view-cs7" %}

## Limitations

- Resource view does not support parent tasks; all tasks must be child tasks under resources or the **Unassigned Task** node.
- Unscheduled tasks (lacking start date or duration) are not supported in resource view.

## See also

- [How to configure resources?](https://ej2.syncfusion.com/react/documentation/gantt/resources)
- [How to enable multi taskbar?](https://ej2.syncfusion.com/react/documentation/gantt/multi-taskbar)
- [How to customize taskbars?](https://ej2.syncfusion.com/react/documentation/gantt/taskbar)
