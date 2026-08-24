---
layout: post
title: Copy and Paste Records in Gantt Chart | Syncfusion
description: Learn to copy and paste task records in Syncfusion JavaScript Gantt Chart using context menus and programmatic methods for efficient task duplication.
keywords: javascript gantt copy paste, duplicate records, task duplication, context menu, copy tasks, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/javascript/gantt-chart/how-to/copy-paste-records
platform: gantt-sdk
control: Copy and Paste - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Copy and Paste Operations for Records in JavaScript Gantt Chart

The copy and paste functionality in the [JavaScript Gantt Chart](https://www.syncfusion.com/javascript-ui-controls/js-gantt-chart) control enables efficient task duplication, allowing you to replicate tasks or entire task hierarchies using the [addRecord](https://ej2.syncfusion.com/javascript/documentation/api/gantt#addrecord) method and a custom context menu configured via [contextMenuItems](https://ej2.syncfusion.com/javascript/documentation/api/gantt#contextmenuitems). For example, right-clicking a parent task to copy and paste it with its child tasks at a specified position streamlines project management workflows. Inject `Edit` and enable `editSettings.allowAdding` to support adding copied records. Define valid [taskFields](https://ej2.syncfusion.com/javascript/documentation/api/gantt#taskfields) mappings (e.g., id, name, startDate) to ensure task data is correctly replicated, including hierarchical structures with child tasks. Use the [contextMenuClick](https://ej2.syncfusion.com/javascript/documentation/api/gantt#contextmenuclick) event to handle custom copy-paste actions, specifying the paste position (e.g., child, above, below) via `addRecord` parameters. This feature integrates with dependencies, critical path, and virtual scrolling, ensuring duplicated tasks align with the project structure for seamless schedule management.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/copypasterecords-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/copypasterecords-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/copypasterecords-cs1" %}

