---
layout: post
title: Custom Data Source in Excel Export | ASP.NET Core Gantt Chart | Syncfusion
description: Learn how to use custom data sources for Excel export in Syncfusion ASP.NET Core Gantt Chart with flexible data transformation options.
keywords: asp.net core gantt custom datasource, excel export data source, export custom data, data export, excel datasource, syncfusion gantt chart
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-core/gantt-chart/excel-export/custom-data-source
platform: gantt-sdk
control: Excel Export - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Configuring Advanced Excel Export Options for ASP.NET Core Gantt Chart

The excel export provides an option to define datasource dynamically before exporting. To export data dynamically, define the `dataSource` in `exportProperties`.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/excel-export/customDataSource/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CustomDataSource.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/excel-export/customDataSource/customDataSource.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/excel-export/customDataSource/razor %}
{% endhighlight %}
{% highlight c# tabtitle="CustomDataSource.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/excel-export/customDataSource/customDataSource.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}