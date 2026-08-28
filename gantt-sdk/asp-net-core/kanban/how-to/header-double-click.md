---
layout: post
title: Header Double-Click in ASP.NET Core Kanban | Syncfusion
description: Learn how to handle column header double-click events in Syncfusion ASP.NET Core Kanban with practical examples and configuration guidance.
keywords: asp-net-core kanban header double click, syncfusion kanban, header event, column header
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-core/kanban/how-to/header-double-click
platform: gantt-sdk
control: Header Double Click - Kanban
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Handle Header Double-Click in ASP.NET Core Kanban

You can bind the header double click event by using the `dataBound` event at the initial rendering. You can get the column header text when you double click on the headers.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/kanban/how-to/header-double-click/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Datasource.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/kanban/how-to/header-double-click/datasource.cs %}
{% endhighlight %}
{% endtabs %}

Output be like the below.

![kanban](../images/header-double-click.PNG)
