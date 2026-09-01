---
layout: post
title: Filter Menu in ASP.NET MVC Gantt Chart | Syncfusion
description: Learn how to enable filtering in Syncfusion ASP.NET MVC Gantt Chart using menu filters, search, hierarchy modes, and custom options.
keywords: asp.net mvc gantt filter menu, menu filtering, filter dropdown, filter options, filter interface, syncfusion gantt chart
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-mvc/gantt-chart/filtering/filter-menu
platform: gantt-sdk
control: Filtering - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Using Filter Menu for Data Filtering in ASP.NET MVC Gantt Chart

The Gantt control provides the menu filtering support for each column. You can enable the filter menu by setting the [`AllowFiltering`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_AllowFiltering.html) to `true`. The filter menu UI will be rendered based on its column type, which allows you to filter data. You can filter the records with different operators.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/filtering/enablefilter/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Enablefilter.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/filtering/enablefilter/enablefilter.cs %}
{% endhighlight %}
{% endtabs %}

N> The [`AllowFiltering`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_AllowFiltering.html) property should be set to `true` to enable the filter menu. Setting the [`Columns.AllowFiltering`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_AllowFiltering) property to `false` prevents rendering filter menu for a particular column.

## Custom component in filter menu

The [`column.filter.ui`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.GanttColumn.html#Syncfusion_EJ2_Gantt_GanttColumn_Filter) is used to add custom filter components to a particular column.
To implement a custom filter UI, define the following functions:

- `create`: Creates a custom component.
- `write`: Wire events for a custom component.
- `read`: Read the filter value from the custom component.

In the following sample, the dropdown is used as a custom component in the TaskName column.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/filtering/customComponent/razor %}
{% endhighlight %}
{% highlight c# tabtitle="customComponent.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/filtering/customComponent/customComponent.cs %}
{% endhighlight %}
{% endtabs %}
