---
layout: post
title: Tooltips in JavaScript Kanban | Syncfusion
description: Learn how to implement and customize tooltips in Syncfusion JavaScript Kanban for enhanced user information display.
keywords: javascript kanban tooltip, syncfusion kanban, hover information, help text
canonical: https://help.syncfusion.com/gantt-sdk/javascript/kanban/tooltip
platform: gantt-sdk
control: Tooltip - Kanban
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Tooltip and Hover Information in JavaScript Kanban

The tooltip is used to show the card information when the cursor hover over the card elements using the `enableTooltip` property. Tooltip content is dynamically set based on hovering over the card elements.

> If you wish to show tooltip on Kanban board custom elements, you need to add `e-tooltip-text` class name of a particular element.

## Tooltip template

You can customize the tooltip content with any HTML or CSS element and styling using the `tooltipTemplate` property. In the following demo, the tooltip is customized with HTML elements.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/kanban/tooltip-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/kanban/tooltip-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/kanban/tooltip-template-cs1" %}
