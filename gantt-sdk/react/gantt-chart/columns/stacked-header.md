---
layout: post
title: Stacked Header in React Gantt Chart | Syncfusion
description: Learn how to group related columns under a common header using stacked headers in Syncfusion React Gantt Chart.
keywords: react gantt stacked header, gantt column grouping, gantt stacked columns, syncfusion gantt header customization
canonical: https://help.syncfusion.com/gantt-sdk/react/gantt-chart/columns/stacked-header
platform: gantt-sdk
control: Stacked Header - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
appliesto: UI Component Suite, Gantt SDK
---

## Stacked Header in React Gantt Chart

The stacked header feature enables you to group multiple columns under a common parent header. It helps organize related task information into logical sections, making the Gantt TreeGrid easier to read and navigate, especially when displaying a large number of columns. Each stacked header can contain one or more child columns, allowing project data to be presented in a structured and intuitive manner.

### Enabling stacked header

Stacked headers are configured by defining a parent column that contains child columns using the `ColumnsDirective`. The parent column displays the stacked header text, while the child columns appear as individual columns within the group.

The following example demonstrates grouping task-related columns under common stacked headers.

{% tabs %}
{% highlight jsx tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/stackedheader-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight tsx tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/stackedheader-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/stackedheader-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/stackedheader-cs1" %}

### Behavior of stacked header columns

Child columns retain their individual configurations and functionality, including sorting, filtering, resizing, reordering, editing, formatting, and visibility settings. Changes to a child column affect only that column and do not impact other columns within the same stacked header group. Stacked headers can contain multiple levels of nested columns to create complex column hierarchies.

The following example demonstrates nested stacked headers and individual child-column settings.

{% tabs %}
{% highlight jsx tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/stackedheader-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight tsx tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/stackedheader-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/stackedheader-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/stackedheader-cs2" %}

### Touch interaction

On touch-enabled devices, stacked headers are displayed in the same grouped structure as desktop devices. Users can interact with the child columns through supported touch-based actions such as scrolling, resizing, and column menu operations when enabled.

For a comprehensive demonstration of column grouping and header customization, explore the interactive Gantt Chart samples.
