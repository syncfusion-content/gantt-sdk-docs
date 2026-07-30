---
layout: post
title: How to Span Columns in TypeScript Gantt Chart Control | Syncfusion
description: Learn how to span columns in the Syncfusion TypeScript Gantt Chart control using the queryCellInfo event, customize borders, and understand limitations.
platform: gantt-sdk
control: Column spanning 
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Column Spanning in TypeScript Gantt Chart Control

The Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript Gantt Chart control supports **column spanning**, allowing adjacent cells to merge horizontally for improved layout clarity. This feature is useful for grouping related data or enhancing visual structure.

To enable column spanning, use the [queryCellInfo](../../gantt/events#querycellinfo) event and set the [colSpan](../../api/gantt/queryCellInfoEventArgs#colspan) property to define how many columns a cell should span.

In the following example, **Work** cells are spanned to improve visual clarity:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/column-span-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/column-span-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/column-span-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/column-span-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/column-span-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/column-span-cs1" %}
{% endif %}

## Customize border color of spanned columns

You can customize the border color of spanned cells using the [queryCellInfo](../../gantt/events#querycellinfo) event. This event triggers before the cell is rendered, allowing you to apply custom styles dynamically.

The following example demonstrates how to change the border color of spanned cells:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/column-span-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/column-span-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/column-span-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/column-span-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/column-span-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/column-span-cs2" %}
{% endif %}

## Limitations

Column spanning is not compatible with the following features:

1. Virtual scrolling
2. Infinite scrolling

Ensure these features are disabled when using column spanning to avoid rendering issues.