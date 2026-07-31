---
layout: post
title: Splitting and Merging Tasks in TypeScript Gantt Chart Control | Syncfusion
description: Learn how to split and merge tasks in the Syncfusion TypeScript Gantt Chart control for flexible task management in project timelines.
platform: gantt-sdk
control: Splitting and merging tasks 
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Splitting and Merging Tasks in TypeScript Gantt Chart Control

Splitting and merging tasks in the TypeScript Gantt Chart control enhances project management by allowing tasks to be divided into segments or recombined, representing breaks or continuous work periods. Split tasks at load time using [taskFields.segments](../../api/gantt/taskFields#segments) for hierarchical data or [taskFields.segmentId](../../api/gantt/taskFields#segmentId) for self-referential data, ensuring segments fit within the task’s start and end dates. Dynamically split tasks via the dialog’s Segments tab or context menu’s Split Task option, requiring `Edit` and valid `taskFields` mappings. Merge tasks using the context menu’s Merge Task option or by dragging segments together in the UI, with [enableContextMenu](../../api/gantt#enablecontextmenu) and `ContextMenu` enabled. Ensure tasks have sufficient width relative to the timeline unit and are not parent or milestone tasks to enable splitting, and avoid using split tasks with multi-taskbar features to maintain compatibility.

## Split tasks at load time

Define task segments at load time using [taskFields.segments](../../api/gantt/taskFields#segments) or [taskFields.segmentId](../../api/gantt/taskFields#segmentId) mapped. This splits tasks into segments within their original start and end dates, ideal for representing interruptions like holidays in a project schedule.

For more details, see [Split task at load time](../../gantt/data-binding#split-task).

## Split tasks dynamically

Split tasks dynamically using the dialog or context menu, requiring [taskFields.segments](../../api/gantt/taskFields#segments) or [taskFields.segmentId](../../api/gantt/taskFields#segmentId) mapped, `Edit` injected, and [editSettings.allowEditing](../../api/gantt/editSettings#allowediting) enabled:

- **Dialog**: The Segments tab in the add/edit dialog allows splitting tasks based on their start and end dates.
- **Context Menu**: Enable [enableContextMenu](../../api/gantt#enablecontextmenu) and inject `ContextMenu` to include the Split Task option in the context menu, enabling task splitting with a right-click.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/split-task-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/split-task-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/split-task-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/split-task-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/split-task-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/split-task-cs5" %}
{% endif %}

## Merge tasks dynamically

Merge split tasks using the context menu’s **Merge Task** option, requiring [enableContextMenu](../../api/gantt#enablecontextmenu) and `ContextMenu`, or by dragging segments together in the UI. This recombines segments into a single task, ensuring continuity in the project timeline, with `Edit` and valid `taskFields` mappings required.

## Get the clicked segment information

You can get the clicked segment information using the [onTaskbarClick](../../gantt/events#ontaskbarclick) event.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/split-task-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/split-task-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/split-task-cs8" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/split-task-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/split-task-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/split-task-cs8" %}
{% endif %}

## Limitations of Split tasks

1. Parent and milestone tasks cannot be split into segments.
2. The task must have a width greater than the timeline unit cell in order to be split.
3. Split task is not supported with `Multi taskbar`.

## See also

- [How to bind data in Gantt?](../../gantt/data-binding)
- [How to configure task editing?](../../gantt/editing)
- [How to manage task dependencies?](../../gantt/task-dependency)