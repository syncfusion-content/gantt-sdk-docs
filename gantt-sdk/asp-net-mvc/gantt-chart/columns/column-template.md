---
layout: post
title: Column Template in ASP.NET MVC Gantt Chart | Syncfusion
description: Learn how to customize columns using column templates in Syncfusion ASP.NET MVC Gantt Chart for enhanced data display and formatting.
keywords: asp.net mvc gantt column template, template columns, custom column template, column customization, data formatting, syncfusion gantt chart
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-mvc/gantt-chart/columns/column-template
platform: gantt-sdk
control: Columns - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Column Templates with Custom Cell Content in ASP.NET MVC Gantt Chart

A column template is used to customize the column’s look. The following code example explains how to define the custom template in Gantt using the [`Template`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.GanttColumn.html#Syncfusion_EJ2_Gantt_GanttColumn_Template) property.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/columns/columnTemplate/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="ColumnTemplate.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/columns/columnTemplate/columnTemplate.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/columns/columnTemplate/razor %}
{% endhighlight %}
{% highlight c# tabtitle="ColumnTemplate.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/columns/columnTemplate/columnTemplate.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

![Alt text](images/columnTemplate.png)
