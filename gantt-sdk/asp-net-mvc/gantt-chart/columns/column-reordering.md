---
layout: post
title: Column Reordering in ASP.NET MVC Gantt Chart | Syncfusion
description: Learn how to enable column reordering in Syncfusion ASP.NET MVC Gantt Chart allowing users to rearrange columns via drag and drop.
keywords: asp.net mvc gantt column reordering, reorder columns, drag columns, column arrangement, column order, syncfusion gantt chart
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-mvc/gantt-chart/columns/column-reordering
platform: gantt-sdk
control: Columns - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Column Reordering in ASP.NET MVC Gantt Chart

The column reordering can be done by dragging a column header from one index to another index within the TreeGrid. To enable reordering, set the [`AllowReordering`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_AllowReordering) property to true.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/columns/reOrdering/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="ReOrdering.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/columns/reOrdering/reOrdering.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/columns/reOrdering/razor %}
{% endhighlight %}
{% highlight c# tabtitle="ReOrdering.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/columns/reOrdering/reOrdering.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

N> You can disable the reordering of a particular column by setting the [`Columns.AllowReordering`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.GanttColumn.html#Syncfusion_EJ2_Gantt_GanttColumn_AllowReordering) property to `false`.

## Reorder Events

During the reorder action, the gantt component triggers the below three events.

1. The [`columnDragStart`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_ColumnDragStart) event triggers when column header element drag (move) starts.
2. The [`columnDrag`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_ColumnDrag) event triggers when column header element is dragged (moved) continuously.
3. The [`columnDrop`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_ColumnDrop) event triggers when a column header element is dropped on the target column.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/columns/reorderEvents/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="ReorderEvents.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/columns/reorderEvents/reorderEvents.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/columns/reorderEvents/razor %}
{% endhighlight %}
{% highlight c# tabtitle="ReorderEvents.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/columns/reorderEvents/reorderEvents.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

## Reorder multiple columns

Multiple columns can be reordered at a time by using the `reorderColumns` method.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/columns/reOrderMultiple/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="ReOrderMultiple.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/columns/reOrderMultiple/reOrderMultiple.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/columns/reOrderMultiple/razor %}
{% endhighlight %}
{% highlight c# tabtitle="ReOrderMultiple.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/columns/reOrderMultiple/reOrderMultiple.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}
