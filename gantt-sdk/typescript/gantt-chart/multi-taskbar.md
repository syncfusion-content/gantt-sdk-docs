---
layout: post
title: Multi Taskbar in TypeScript Gantt Chart | Syncfusion
description: Learn how to configure multi taskbar in Syncfusion TypeScript Gantt Chart to display multiple tasks per resource and visualize workloads and overallocation.
keywords: typescript gantt multi taskbar, resource view, resource taskbar, task allocation, resource management, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/typescript/gantt-chart/multi-taskbar
platform: gantt-sdk
control: Multi Taskbar - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Multi Taskbar Resource View in TypeScript Gantt Chart

The resource multi taskbar feature in the TypeScript Gantt Chart control visualizes multiple tasks assigned to a single resource in one row when collapsed in resource view, enabled by setting [enableMultiTaskbar](https://ej2.syncfusion.com/documentation/api/gantt#enablemultitaskbar) to **true** and `viewType` to **ResourceView**. This displays workloads, such as concurrent tasks assigned to a resource, like coding activities, in a compact timeline, highlighting overallocation or scheduling conflicts. Taskbars maintain individual properties (e.g., duration, progress) and support editing in collapsed rows, with expand/collapse controlled via grid-side arrows for visual consistency. The feature requires valid [resourceInfo](https://ej2.syncfusion.com/documentation/api/gantt/taskFields#resourceinfo) mappings in `taskFields` to associate tasks with resources. Taskbars include ARIA labels for accessibility and adapt to responsive designs, though narrow screens may clip labels for short tasks. By default, `enableMultiTaskbar` is **false**, requiring explicit activation.

## Configure multi taskbar

Enable the multi taskbar feature by setting [enableMultiTaskbar](https://ej2.syncfusion.com/documentation/api/gantt#enablemultitaskbar) to **true** and `viewType` to **ResourceView**, with `taskFields.resourceInfo` mapping to a resource ID field. Resources are collapsed or expanded using grid-side arrows, and tasks are displayed in a single row when collapsed.

```ts
import { Gantt } from "@syncfusion/ej2-gantt";
import { GanttData } from "./datasource.ts";

let gantt: Gantt = new Gantt({
  dataSource: GanttData,
  height: "450px",
  enableMultiTaskbar: true,
  viewType: "ResourceView",
  taskFields: {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    endDate: "EndDate",
    duration: "Duration",
    progress: "Progress",
    resourceInfo: "Resources",
  },
});

gantt.appendTo("#Gantt");
```

The following example demonstrates multi taskbar configuration:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/resource-view-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/resource-view-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/resource-view-cs3" %}

## Configure taskbar overlap

The [allowTaskbarOverlap](https://ej2.syncfusion.com/documentation/api/gantt#allowtaskbaroverlap) property controls how multiple taskbars are displayed in a resource row:

- **Overlapping mode (true, default)**: Taskbars overlap within standard row height, supporting full dependency connections, including between tasks of the same resource. Suitable for compact views with many tasks.
- **Non-overlapping mode (false)**: Taskbars are vertically arranged in an extended row height, preventing overlap for clearer visibility of overallocation. Dependencies between tasks of the same resource are not supported due to vertical stacking, though inter-resource dependencies work.

The following example disables taskbar overlap:

```ts
import { Gantt } from "@syncfusion/ej2-gantt";
import { GanttData } from "./datasource.ts";

let gantt: Gantt = new Gantt({
  dataSource: GanttData,
  height: "450px",
  viewType: "ResourceView",
  enableMultiTaskbar: true,
  allowTaskbarOverlap: false,
  taskFields: {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    endDate: "EndDate",
    duration: "Duration",
    progress: "Progress",
    resourceInfo: "Resources",
  },
});

gantt.appendTo("#Gantt");
```

The following example demonstrates non-overlapping multi taskbar:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/resource-view-taskbaroverlap-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/resource-view-taskbaroverlap-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/resource-view-taskbaroverlap-cs1" %}
