---
layout: post
title: Task bar editing in Vue Gantt Chart component | Syncfusion
description: Learn here all about Task bar editing in Syncfusion Vue Gantt Chart component of Syncfusion Essential JS 2 and more.
control: Task bar editing 
platform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Task bar editing in Vue Gantt Chart component

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