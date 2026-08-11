---
layout: post
title: Filter Menu in ASP.NET Core Gantt Chart | Syncfusion
description: Learn how to enable filtering in Syncfusion ASP.NET Core Gantt Chart using menu filters, search, hierarchy modes, and custom options.
keywords: asp.net core gantt filter menu, menu filtering, filter dropdown, filter options, filter interface, syncfusion gantt chart
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-core/gantt-chart/filtering/filter-menu
platform: gantt-sdk
control: Filtering - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk/overview
---

# Using Filter Menu for Data Filtering in ASP.NET Core Gantt Chart

The Gantt control provides the menu filtering support for each column. You can enable the filter menu by setting the [`AllowFiltering`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_AllowFiltering) to `true`. The filter menu UI will be rendered based on its column type, which allows you to filter data. You can filter the records with different operators.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/filtering/enablefilter/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Enablefilter.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/filtering/enablefilter/enablefilter.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/filtering/enablefilter/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Enablefilter.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/filtering/enablefilter/enablefilter.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



N> The [`AllowFiltering`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_AllowFiltering) property should be set to `true` to enable the filter menu. Setting the [`Columns.AllowFiltering`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttColumn.html#Syncfusion_EJ2_Gantt_GanttColumn_AllowFiltering) property to `false` prevents rendering filter menu for a particular column.


## Custom component in filter menu

The [`column.filter.ui`](../api/gantt/column/#filter) is used to add custom filter components to a particular column.
To implement a custom filter UI, define the following functions:

* `create`:  Creates a custom component.
* `write`: Wire events for a custom component.
* `read`: Read the filter value from the custom component.

In the following sample, the dropdown is used  as a custom component in the TaskName column.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/filtering/customComponent/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="customComponent.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/filtering/customComponent/customComponent.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/filtering/customComponent/razor %}
{% endhighlight %}
{% highlight c# tabtitle="customComponent.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/filtering/customComponent/customComponent.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}
