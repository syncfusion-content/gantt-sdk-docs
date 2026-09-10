---
layout: post
title: Adding New Tasks in ASP.NET Core Gantt Chart | Syncfusion
description: Learn how to add new tasks in Syncfusion ASP.NET Core Gantt Chart using add dialog, inline editing, and programmatic methods.
keywords: asp.net core gantt add tasks, new tasks, add task dialog, insert tasks, create tasks, syncfusion gantt chart
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-core/gantt-chart/managing-tasks/adding-new-tasks
platform: gantt-sdk
control: Managing Tasks - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk/overview
---

# Adding New Tasks in ASP.NET Core Gantt Chart

Tasks can be dynamically added to the Gantt project by enabling the [`EditSettings.AllowAdding`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttEditSettings.html#Syncfusion_EJ2_Gantt_GanttEditSettings_AllowAdding) property.

## Toolbar

A row can be added to the Gantt component from the toolbar while the [`EditSettings.AllowAdding`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttEditSettings.html#Syncfusion_EJ2_Gantt_GanttEditSettings_AllowAdding) property is set to true. On clicking the toolbar add icon, you should provide the task information in the add dialog.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/rows/addingRow/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="AddingRow.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/rows/addingRow/addingRow.cs %}
{% endhighlight %}
{% endtabs %}

![Alt text](../images/addingRow.png)

N> By default, the new row will be added to the top most row in the Gantt control.

## Context menu

A row can also be added above, below or child of the selected row by using context menu support. For this, we need to enable the property [`enableContextMenu`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_EnableContextMenu) and inject the `ContextMenu` module into the Gantt control.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/rows/contextMenu/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="ContextMenu.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/rows/contextMenu/contextMenu.cs %}
{% endhighlight %}
{% endtabs %}

![Alt text](../images/contextMenuAdd.png)

## Using method

You can add rows to the Gantt control dynamically using the `addRecord` method and you can define the add position of the default new record by using the [`RowPosition`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.RowPosition.html) property. You can also pass the `RowIndex` as an additional parameter.

* Top of all the rows.
* Bottom to all the existing rows.
* Above the selected row.
* Below the selected row.
* As child to the selected row.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/rows/addRow/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="AddRow.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/rows/addRow/addRow.cs %}
{% endhighlight %}
{% endtabs %}

![Alt text](../images/addRow.png)
