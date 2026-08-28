---
layout: post
title: Tooltips in ASP.NET Core Kanban | Syncfusion
description: Learn how to implement and customize tooltips in Syncfusion ASP.NET Core Kanban for enhanced user information display.
keywords: asp-net-core kanban tooltip, syncfusion kanban, hover information, help text
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-core/kanban/tooltip
platform: gantt-sdk
control: Tooltip - Kanban
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Tooltip and Hover Information in ASP.NET Core Kanban

The tooltip is used to show the card information when the cursor hover over the card elements using the `enableTooltip` property. Tooltip content is dynamically set based on hovering over the card elements.

N> If you wish to show tooltip on Kanban board custom elements, you need to add `e-tooltip-text` class name of a particular element.

## Tooltip template

You can customize the tooltip content with any HTML or CSS element and styling using the `tooltipTemplate` property. In the following demo, the tooltip is customized with HTML elements.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/kanban/tooltip/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Datasource.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/kanban/tooltip/datasource.cs %}
{% endhighlight %}
{% endtabs %}
Output be like the below.

![kanban](./images/tooltip.PNG)
