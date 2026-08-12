---
layout: post
title: Dynamically Change Columns in ASP.NET Core Kanban | Syncfusion
description: Learn how to dynamically change columns in Syncfusion ASP.NET Core Kanban with practical examples and configuration guidance.
keywords: ASP.NET Core kanban dynamically change columns, syncfusion kanban, update columns at runtime, column toggle
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-core/kanban/how-to/dynamically-change-columns
platform: gantt-sdk
control: Dynamically Change Columns - Kanban
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Modify Columns Programmatically in ASP.NET Core Kanban

You can dynamically change the Kanban columns by using the [`columns`](../../api/kanban#columns) property.

In the below sample, you can dynamically change the [`allowToggle`](../../api/kanban/columnsModel#allowtoggle) property at the particular column when you click on the button. You can also change the initially created columns to the new Kanban columns by using the [`columns`](../../api/kanban#columns) property when you click on the button.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/kanban/how-to/dynamic-columns/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Datasource.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/kanban/how-to/dynamic-columns/datasource.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/kanban/how-to/dynamic-columns/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Datasource.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/kanban/how-to/dynamic-columns/datasource.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

Output be like the below.

![kanban](../images/dynamic-columns.PNG)
