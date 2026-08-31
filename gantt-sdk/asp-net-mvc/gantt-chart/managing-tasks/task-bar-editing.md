---
layout: post
title: Taskbar Editing in ASP.NET MVC Gantt Chart | Syncfusion
description: Learn how to enable and customize taskbar editing in Syncfusion ASP.NET MVC Gantt Chart for inline task modifications and updates.
keywords: asp.net mvc gantt taskbar editing, edit taskbar, inline editing, drag taskbar, edit tasks, syncfusion gantt chart
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-mvc/gantt-chart/managing-tasks/task-bar-editing
platform: gantt-sdk
control: Managing Tasks - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Editing Tasks Using Taskbar Drag and Resize in ASP.NET MVC Gantt Chart

## Taskbar editing

Modify the task details through user interaction such as resizing and dragging the taskbar by enabling the [`AllowTaskbarEditing`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.GanttEditSettings.html#Syncfusion_EJ2_Gantt_GanttEditSettings_AllowTaskbarEditing) property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/editing/enableTaskbarEditing/razor %}
{% endhighlight %}
{% highlight c# tabtitle="EnableTaskbarEditing.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/editing/enableTaskbarEditing/enableTaskbarEditing.cs %}
{% endhighlight %}
{% endtabs %}

## Prevent editing for specific tasks

On taskbar edit action, the [`TaskbarEditing`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_TaskbarEditing) event will be triggered. You can prevent the taskbar from editing by setting the `cancel` property of the [`TaskbarEditing`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_TaskbarEditing) event argument to `true`. Hide the taskbar editing indicators like taskbar resizer, progress resizer, and connector points using the [`QueryTaskbarInfo`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_QueryTaskbarInfo) event. The following code example shows how to achieve this.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/editing/preventTaskbarEditing/razor %}
{% endhighlight %}
{% highlight c# tabtitle="PreventTaskbarEditing.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/editing/preventTaskbarEditing/preventTaskbarEditing.cs %}
{% endhighlight %}
{% endtabs %}
