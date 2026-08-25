---
layout: post
title: Custom Data Source in Excel Export | ASP.NET MVC Gantt | Syncfusion
description: Learn how to use custom data sources for Excel export in Syncfusion ASP.NET MVC Gantt Chart with flexible data transformation options.
keywords: asp.net mvc gantt custom datasource, excel export data source, export custom data, data export, excel datasource, syncfusion gantt chart
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-mvc/gantt-chart/excel-export/custom-data-source
platform: gantt-sdk
control: Excel Export - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Configuring Advanced Excel Export Options for ASP.NET MVC Gantt Chart

The excel export provides an option to define datasource dynamically before exporting. To export data dynamically, define the `dataSource` in `exportProperties`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/excel-export/customDataSource/razor %}
{% endhighlight %}
{% highlight c# tabtitle="CustomDataSource.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/excel-export/customDataSource/customDataSource.cs %}
{% endhighlight %}
{% endtabs %}
