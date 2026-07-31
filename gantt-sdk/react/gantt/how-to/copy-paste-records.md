---
layout: post
title: Copy and Paste Records in React Gantt Chart Component | Syncfusion
description: Learn how to programmatically copy and paste records in the Syncfusion React Gantt Chart component using context menus for efficient task duplication.
platform: gantt-sdk
control: Copy paste records
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Copy and Paste Records in React Gantt Chart Component

The copy and paste functionality in the [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart) component enables efficient task duplication, allowing you to replicate tasks or entire task hierarchies using the [addRecord](https://ej2.syncfusion.com/react/documentation/api/gantt#addrecord) method and a custom context menu configured via [contextMenuItems](https://ej2.syncfusion.com/react/documentation/api/gantt#contextmenuitems). For example, right-clicking a parent task to copy and paste it with its child tasks at a specified position streamlines project management workflows. Inject `Edit` service and enable `editSettings.allowAdding` to support adding copied records. Define valid [taskFields](https://ej2.syncfusion.com/react/documentation/api/gantt#taskfields) mappings (e.g., id, name, startDate) to ensure task data is correctly replicated, including hierarchical structures with child tasks. Use the [contextMenuClick](https://ej2.syncfusion.com/react/documentation/api/gantt#contextmenuclick) event to handle custom copy-paste actions, specifying the paste position (e.g., child, above, below) via `addRecord` parameters. This feature integrates with dependencies, critical path, and virtual scrolling, ensuring duplicated tasks align with the project structure for seamless schedule management.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/how-to-copypaste-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/how-to-copypaste-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/how-to-copypaste-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/how-to-copypaste-cs1" %}

## See also

- [How to configure context menu?](https://ej2.syncfusion.com/react/documentation/gantt/context-menu)
- [How to manage task dependencies?](https://ej2.syncfusion.com/react/documentation/gantt/task-dependency)
- [How to configure critical path?](https://ej2.syncfusion.com/react/documentation/gantt/critical-path)
