---
layout: post
title: Copy and Paste Records in ASP.NET MVC Gantt Chart | Syncfusion
description: Learn how to copy and paste records in Syncfusion ASP.NET MVC Gantt Chart for quick task duplication and bulk operations.
keywords: asp.net mvc gantt copy paste, copy records, paste records, duplicate tasks, copy paste operations, syncfusion gantt chart
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-mvc/gantt-chart/how-to/copypasterecords
platform: gantt-sdk
control: How-to - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Copy and Paste Operations for Records in ASP.NET MVC Gantt Chart

You can copy and paste a record in the Gantt chart by using the `addRecord` method and `custom context menu`. It is also possible to copy and paste the parent record with multiple hierarchical child records on the required position.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/how-to/copypasterecords/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Copypasterecords.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/how-to/copypasterecords/copypasterecords.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/how-to/copypasterecords/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Copypasterecords.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/how-to/copypasterecords/copypasterecords.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}
