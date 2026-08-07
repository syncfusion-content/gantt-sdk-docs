---
layout: post
title: Tooltip in Angular Kanban | Syncfusion
description: Learn how to add informative tooltips to cards and elements in Syncfusion Angular Kanban for clearer context and better user guidance.
keywords: angular kanban tooltip, syncfusion kanban, tooltip display, hover information
canonical: https://help.syncfusion.com/gantt-sdk/angular/kanban/tooltip
platform: gantt-sdk
control: Tooltip - Kanban
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Tooltip and Hover Information in Angular Kanban

The tooltip is used to show the card information when the cursor hover over the card elements using the [enableTooltip](https://ej2.syncfusion.com/angular/documentation/api/kanban/#enabletooltip) property. Tooltip content is dynamically set based on hovering over the card elements.

> If you wish to show tooltip on Kanban board custom elements, you need to add `e-tooltip-text` class name of a particular element.

## Tooltip template

You can customize the tooltip content with any HTML or CSS element and styling using the [tooltipTemplate](https://ej2.syncfusion.com/angular/documentation/api/kanban/#tooltiptemplate) property. In the following demo, the tooltip is customized with HTML elements.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt-sdk/angular/kanban/tooltip-template-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt-sdk/angular/kanban/tooltip-template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/gantt-sdk/angular/kanban/tooltip-template-cs1" %}
