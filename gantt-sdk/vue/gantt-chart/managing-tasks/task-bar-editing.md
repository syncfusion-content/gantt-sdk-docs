---
layout: post
title: Taskbar Editing in Vue Gantt Chart | Syncfusion
description: Learn how to enable taskbar editing in Syncfusion Vue Gantt Chart for resizing and dragging taskbars.
keywords: vue gantt taskbar editing, taskbar resize, drag taskbar, task modification, interactive editing, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/vue/gantt-chart/managing-tasks/task-bar-editing
platform: gantt-sdk
control: Taskbar Editing - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Editing Tasks Using Taskbar Drag and Resize in Vue Gantt Chart

## Taskbar editing

Modify the task details through user interaction such as resizing and dragging the taskbar by enabling the [allowTaskbarEditing](https://ej2.syncfusion.com/vue/documentation/api/gantt/editSettings#allowtaskbarediting) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/managing-tasks-cs15/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/managing-tasks-cs15/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/managing-tasks-cs15" %}

## Prevent editing for specific tasks

On taskbar edit action, the [taskbarEditing](https://ej2.syncfusion.com/vue/documentation/api/gantt#taskbarediting) event will be triggered. You can prevent the taskbar from editing using the [taskbarEditing](https://ej2.syncfusion.com/vue/documentation/api/gantt#taskbarediting) event. This can be done by setting cancel property of [taskbarEditing](https://ej2.syncfusion.com/vue/documentation/api/gantt#taskbarediting) event argument to true. And we can hide the taskbar editing indicators like taskbar resizer, progress resizer and connector points by using [queryTaskbarInfo](https://ej2.syncfusion.com/vue/documentation/api/gantt#querytaskbarinfo) event.  The following code example shows how to achieve this.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/managing-tasks-cs16/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/managing-tasks-cs16/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/managing-tasks-cs16" %}
