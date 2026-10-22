---
layout: post
title: Row Spanning in ASP.NET Core Gantt Chart | Merge Cells | Syncfusion
description: Learn how to span rows in Syncfusion ASP.NET Core Gantt Chart with rowSpan attribute to merge cells across rows.
keywords: asp-net-core gantt row spanning, rowspan, querycellinfo, merge cells, shared info, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-core/gantt-chart/rows/row-spanning
platform: gantt-sdk
control: Row Spanning - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
appliesto: UI Component Suite, Gantt SDK
---

# Implementing Row Spanning for Multi-Row Cells in ASP.NET Core Gantt Chart

The [ASP.NET Core Gantt Chart](https://www.syncfusion.com/aspnet-core-ui-controls/gantt-chart) component supports row cell spanning, allowing multiple cells in a row to merge into a single cell. This is useful for displaying shared information across rows without duplication.

To enable row spanning, use the [rowSpan](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.QueryCellInfoEventArgs.html#Syncfusion_EJ2_Gantt_QueryCellInfoEventArgs_RowSpan) attribute inside the [queryCellInfo](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_QueryCellInfo) event. This event is triggered for each grid cell, where you can define the number of rows a cell should span based on its data.

In the example below, the **Soil test approval** cell spans across two rows in the **TaskName** column.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/rows/rowSpanning-cs1/Index.cshtml %}
{% endhighlight %}
{% highlight c# tabtitle="Index.cshtml.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/rows/rowSpanning-cs1/Index.cshtml.cs %}
{% endhighlight %}
{% endtabs %}

![Row Spanning](images/row-spanning-placeholder.png)

> * You can use both [rowSpan](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.QueryCellInfoEventArgs.html#Syncfusion_EJ2_Gantt_QueryCellInfoEventArgs_RowSpan) and [colSpan](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.QueryCellInfoEventArgs.html#Syncfusion_EJ2_Gantt_QueryCellInfoEventArgs_ColSpan) together to merge grid cells vertically and horizontally.
