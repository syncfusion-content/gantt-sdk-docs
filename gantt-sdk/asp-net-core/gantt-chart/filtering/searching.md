---
layout: post
title: Search in ASP.NET Core Gantt Chart | Syncfusion
description: Learn how to use search functionality in Syncfusion ASP.NET Core Gantt Chart to find records using toolbar search and search methods.
keywords: asp.net core gantt search, search tasks, find tasks, search functionality, task searching, syncfusion gantt chart
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-core/gantt-chart/filtering/searching
platform: gantt-sdk
control: Filtering - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk/overview
---

# Implementing Quick Search for Task Data in ASP.NET Core Gantt Chart

You can search records in the Gantt control by using the `search` method with search key as a parameter. The Gantt control provides an option to integrate the search text box in the toolbar by adding the search item to the [`Toolbar`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_Toolbar) property.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/searching/Searching/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Searching.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/searching/Searching/Searching.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/searching/Searching/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Searching.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/searching/Searching/Searching.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



The following screenshot shows the output of searching for string in Gantt control.

![Alt text](images/Searching.png)

## Initial search

In the Gantt control, you can load a task with some search criteria and this can be done by using the [`SearchSettings`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_SearchSettings) property. To apply search at initial rendering, set the value for [`Fields`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttSearchSettings.html#Syncfusion_EJ2_Gantt_GanttSearchSettings_Fields), [`Operator`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttSearchSettings.html#Syncfusion_EJ2_Gantt_GanttSearchSettings_Operator), [`Key`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttSearchSettings.html#Syncfusion_EJ2_Gantt_GanttSearchSettings_Key), and [`IgnoreCase`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttSearchSettings.html#Syncfusion_EJ2_Gantt_GanttSearchSettings_IgnoreCase) in the [`SearchSettings`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_SearchSettings) property.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/searching/initialLoadSearch/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="InitialLoadSearch.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/searching/initialLoadSearch/initialLoadSearch.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/searching/initialLoadSearch/razor %}
{% endhighlight %}
{% highlight c# tabtitle="InitialLoadSearch.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/searching/initialLoadSearch/initialLoadSearch.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



![Alt text](images/initialLoadSearch.png)

N> By default, Gantt searches all the bound column values. To customize this behavior, define the [`SearchSettings.Fields`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttSearchSettings.html#Syncfusion_EJ2_Gantt_GanttSearchSettings_Fields) property.

## Search operators

The search operator can be defined in the [`SearchSettings.Operator`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttSearchSettings.html#Syncfusion_EJ2_Gantt_GanttSearchSettings_Operator) property to configure specific searching.

The following operators are supported in searching:

|Operator |Description|
|-----|-----|
|startsWith |Checks whether a value begins with the specified value.|
|endsWith |Checks whether a value ends with the specified value.|
|contains |Checks whether a value contains the specified value.|
|equal |Checks whether a value is equal to the specified value.|
|notEqual |Checks for the values that are not equal to the specified value.|

N> By default, the [`SearchSettings.Operator`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttSearchSettings.html#Syncfusion_EJ2_Gantt_GanttSearchSettings_Operator) value is `contains`.

## Search by external button

To search the Gantt records from an external button, invoke the `search` method.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/searching/externalSearch/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="ExternalSearch.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/searching/externalSearch/externalSearch.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/searching/externalSearch/razor %}
{% endhighlight %}
{% highlight c# tabtitle="ExternalSearch.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/searching/externalSearch/externalSearch.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



## Search specific columns

By default, the Gantt control searches all the columns. You can search specific columns by defining the specific column's field names in the [`SearchSettings.Fields`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttSearchSettings.html#Syncfusion_EJ2_Gantt_GanttSearchSettings_Fields) property.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/searching/specificColumnSearch/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="SpecificColumnSearch.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/searching/specificColumnSearch/specificColumnSearch.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/searching/specificColumnSearch/razor %}
{% endhighlight %}
{% highlight c# tabtitle="SpecificColumnSearch.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/searching/specificColumnSearch/specificColumnSearch.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



N> In above sample, you can search only `TaskName` and `Duration` column values.

## Clear search by external button

You can set [`searchSettings.key`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttSearchSettings.html#Syncfusion_EJ2_Gantt_GanttSearchSettings_Key) property as `empty` string, to clear the searched Gantt records from external button.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/searching/clearSearch/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="ClearSearch.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/searching/clearSearch/clearSearch.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/searching/clearSearch/razor %}
{% endhighlight %}
{% highlight c# tabtitle="ClearSearch.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/searching/clearSearch/clearSearch.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}
