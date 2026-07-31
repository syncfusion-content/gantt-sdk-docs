---
layout: post
title: How to Span Columns in React Gantt Chart Component | Syncfusion
description: Learn how to span columns in the Syncfusion React Gantt Chart component using the queryCellInfo event, customize borders, and understand limitations.
platform: gantt-sdk
control: Column Spanning
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Column Spanning in React Gantt Chart Component

The [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart) component supports **column spanning**, allowing adjacent cells to merge horizontally for improved layout clarity. This feature is useful for grouping related data or enhancing visual structure.

To enable column spanning, use the [queryCellInfo](https://ej2.syncfusion.com/react/documentation/gantt/events#querycellinfo) event and set the [colSpan](https://ej2.syncfusion.com/react/documentation/api/gantt/queryCellInfoEventArgs#colspan) property to define how many columns a cell should span.

In the following example, **Work** cells are spanned to improve visual clarity:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/column-span-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/column-span-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/column-span-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/column-span-cs1" %}

## Customize border color of spanned columns

You can customize the border color of spanned cells using the [queryCellInfo](https://ej2.syncfusion.com/react/documentation/gantt/events#querycellinfo) event. This event triggers before the cell is rendered, allowing you to apply custom styles dynamically.

The following example demonstrates how to change the border color of spanned cells:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/column-span-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/column-span-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/column-span-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/column-span-cs2" %}

## Limitations

Column spanning is not compatible with the following features:

1. Virtual scrolling
2. Infinite scrolling

Ensure these features are disabled when using column spanning to avoid rendering issues.
