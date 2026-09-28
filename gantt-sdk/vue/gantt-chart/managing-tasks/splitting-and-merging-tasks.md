---
layout: post
title: Splitting and Merging Tasks in Vue Gantt Chart | Syncfusion
description: Learn how to split and merge tasks in Syncfusion Vue Gantt Chart for handling task segments and interruptions.
keywords: vue gantt split merge tasks, task segments, interrupted tasks, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/vue/gantt-chart/managing-tasks/splitting-and-merging-tasks
platform: gantt-sdk
control: Splitting and Merging Tasks - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Splitting and Merging Tasks in Vue Gantt Chart

## Splitting task at load time

Define segment details at load time in both hierarchical and self-referential ways.

* [Split task at load time](https://help.syncfusion.com/gantt-sdk/vue/gantt-chart/data-binding#split-task)

## Split task dynamically

Split tasks using the context menu or dialog.

* `Dialog`: `Segments` tab is rendered in add/edit dialog, when the [taskFields.segments](https://ej2.syncfusion.com/vue/documentation/api/gantt/taskFields#segments) or [taskFields.segmentId](https://ej2.syncfusion.com/vue/documentation/api/gantt/taskFields#segmentid) property is mapped. Using this tab, we can split the task based on the original start and end date of a particular task.

* `Context menu`: When the [taskFields.segments](https://ej2.syncfusion.com/vue/documentation/api/gantt/taskFields#segments) or [taskFields.segmentId](https://ej2.syncfusion.com/vue/documentation/api/gantt/taskFields#segmentid) property is mapped and the [enableContextMenu](https://ej2.syncfusion.com/vue/documentation/api/gantt#enablecontextmenu) property is enabled, **Split Task** item will be included in the context menu.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/managing-tasks-cs14/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/managing-tasks-cs14/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/managing-tasks-cs14" %}

## Merge tasks

Merge split tasks using the `Merge Task` item of the context menu, the dialog, or by dragging the segments together in the UI.

## Limitations of Split tasks

1. Parent and milestone tasks cannot be split into segments.  
2. The task must be wider than a single timeline unit cell to enable splitting.  
3. Split task is not supported with `Multi taskbar`.
