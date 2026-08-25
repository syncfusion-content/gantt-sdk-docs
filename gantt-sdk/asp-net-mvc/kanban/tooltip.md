---
layout: post
title: Tooltips in ASP.NET MVC Kanban | Syncfusion
description: Learn how to implement and customize tooltips in Syncfusion ASP.NET MVC Kanban for enhanced user information display.
keywords: asp-net-mvc kanban tooltip, syncfusion kanban, hover information, help text
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-mvc/kanban/tooltip
platform: gantt-sdk
control: Tooltip - Kanban
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Tooltip and Hover Information in ASP.NET MVC Kanban

The tooltip is used to show the card information when the cursor hover over the card elements using the `EnableTooltip` property. Tooltip content is dynamically set based on hovering over the card elements.

N> If you wish to show tooltip on Kanban board custom elements, you need to add `e-tooltip-text` class name of a particular element.

## Tooltip template

You can customize the tooltip content with any HTML or CSS element and styling using the `TooltipTemplate` property. In the following demo, the tooltip is customized with HTML elements.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/tooltip/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Datasource.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/tooltip/datasource.cs %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/tooltip/controller.cs %}
{% endhighlight %}
{% endtabs %}

Output be like the below.

![kanban](./images/tooltip.PNG)
