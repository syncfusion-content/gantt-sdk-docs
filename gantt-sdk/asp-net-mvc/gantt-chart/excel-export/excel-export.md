---
layout: post
title: Excel Export in ASP.NET MVC Gantt Chart | Syncfusion
description: Learn how to export Gantt chart data to Excel in Syncfusion ASP.NET MVC Gantt Chart with formatting, customization, and advanced options.
keywords: asp.net mvc gantt excel export, export gantt, export to excel, excel formatting, excel customization, syncfusion gantt chart
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-mvc/gantt-chart/excel-export/excel-export
platform: gantt-sdk
control: Excel Export - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Exporting Data to Excel in ASP.NET MVC Gantt Chart

Gantt supports client-side exporting, which allows you to export its data to the Excel and CSV formats. Use the `excelExport` and `csvExport` methods for exporting. To enable Excel export in the Gantt, set the [`AllowExcelExport`](https://help.syncfusion.com/cr/cref_files/aspnetmvc-js2/Syncfusion.EJ2~Syncfusion.EJ2.Gantt.Gantt~AllowExcelExport.html) to true.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/excel-export/excelExport/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="ExcelExport.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/excel-export/excelExport/excelExport.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/excel-export/excelExport/razor %}
{% endhighlight %}
{% highlight c# tabtitle="ExcelExport.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/excel-export/excelExport/excelExport.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}
