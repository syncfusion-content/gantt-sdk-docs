---
layout: post
title: Custom data source in Syncfusion ASP.NET Core Gantt Component
description: Learn here all about Custom data source in Syncfusion ASP.NET Core Gantt component of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Excel Export
publishingplatform: gantt-sdk
documentation: ug
---

# Custom data source in gantt control

The excel export provides an option to define datasource dynamically before exporting. To export data dynamically, define the `dataSource` in `exportProperties`.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt/excel-export/customDataSource/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CustomDataSource.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt/excel-export/customDataSource/customDataSource.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt/excel-export/customDataSource/razor %}
{% endhighlight %}
{% highlight c# tabtitle="CustomDataSource.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt/excel-export/customDataSource/customDataSource.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}
