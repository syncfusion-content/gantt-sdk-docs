---
layout: post
title: Checkbox Column in ASP.NET MVC Gantt Chart | Syncfusion
description: Learn how to add and use checkbox columns in Syncfusion ASP.NET MVC Gantt Chart for multi-select task selection and bulk operations.
keywords: asp.net mvc gantt checkbox column, checkbox selection, multi select, select tasks, bulk selection, syncfusion gantt chart
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-mvc/gantt-chart/columns/check-box-column
platform: gantt-sdk
control: Columns - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Checkbox Columns in ASP.NET MVC Gantt Chart

To render boolean values as checkbox in columns, you need to set [`displayAsCheckBox`](../api/gantt/column/#displayascheckbox) property as **true**.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/columns/checkbox/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Checkbox.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/columns/checkbox/checkbox.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/columns/checkbox/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Checkbox.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/columns/checkbox/checkbox.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

![Alt text](images/checkbox.png)
