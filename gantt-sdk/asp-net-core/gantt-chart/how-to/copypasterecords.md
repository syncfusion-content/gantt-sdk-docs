---
layout: post
title: Copy and Paste Records in ASP.NET Core Gantt Chart | Syncfusion
description: Learn how to copy and paste records in Syncfusion ASP.NET Core Gantt Chart for quick task duplication and bulk operations.
keywords: asp.net core gantt copy paste, copy records, paste records, duplicate tasks, copy paste operations, syncfusion gantt chart
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-core/gantt-chart/how-to/copypasterecords
platform: gantt-sdk
control: How-to - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk/overview
---

# Copy and Paste Operations for Records in ASP.NET Core Gantt Chart

You can copy and paste a record in the Gantt chart by using the `addRecord` method and `custom context menu`. It is also possible to copy and paste the parent record with multiple hierarchical child records on the required position.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/how-to/copypasterecords/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Copypasterecords.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/how-to/copypasterecords/copypasterecords.cs %}
{% endhighlight %}
{% endtabs %}
