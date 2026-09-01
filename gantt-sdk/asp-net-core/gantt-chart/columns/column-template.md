---
layout: post
title: Column Template in ASP.NET Core Gantt Chart | Syncfusion
description: Learn how to customize columns using column templates in Syncfusion ASP.NET Core Gantt Chart for enhanced data display and formatting.
keywords: asp.net core gantt column template, template columns, custom column template, column customization, data formatting, syncfusion gantt chart
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-core/gantt-chart/columns/column-template
platform: gantt-sdk
control: Columns - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk/overview
---

# Column Templates with Custom Cell Content in ASP.NET Core Gantt Chart

A column template is used to customize the column’s look. The following code example explains how to define the custom template in Gantt using the [`Template`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.GanttColumn.html#Syncfusion_EJ2_Gantt_GanttColumn_Template) property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/columnTemplate/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="ColumnTemplate.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/columns/columnTemplate/columnTemplate.cs %}
{% endhighlight %}
{% endtabs %}

![Alt text](../images/columnTemplate.png)
