---
layout: post
title: Restrict Collapse Chart Rows in ASP.NET MVC Gantt Chart | Syncfusion
description: Learn how to restrict row collapsing in Syncfusion ASP.NET MVC Gantt Chart by preventing users from collapsing specific rows or all rows.
keywords: asp.net core gantt restrict collapse, collapse restriction, prevent collapse, row collapse, expand collapse, syncfusion gantt chart
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-mvc/gantt-chart/how-to/restrict-collapse-chart-rows
platform: gantt-sdk
control: How-to - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Restrict Collapse Chart Rows in ASP.NET MVC Gantt Chart

Restriction of collapsing the records when clicking on gantt chart rows can be performed by using the [`collapsing`](../../api/gantt/#collapsing) event.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/how-to/restrictcollapsechartrows/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Restrictcollapsechartrows.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/how-to/restrictcollapsechartrows/restrictcollapsechartrows.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/how-to/restrictcollapsechartrows/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Restrictcollapsechartrows.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/how-to/restrictcollapsechartrows/restrictcollapsechartrows.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}
