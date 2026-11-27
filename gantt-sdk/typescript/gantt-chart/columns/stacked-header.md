---
### layout: post
title: Stacked Header in TypeScript Gantt Chart | Syncfusion
description: Learn how to group related columns under a common header using stacked headers in Syncfusion TypeScript Gantt Chart.
keywords: typescript gantt stacked header, gantt column grouping, gantt stacked columns, syncfusion gantt header customization
canonical: https://help.syncfusion.com/gantt-sdk/typescript/gantt-chart/stacked-header
platform: gantt-sdk
control: Stacked Header - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
appliesto: UI Component Suite, Gantt SDK
---

## Stacked Header in TypeScript Gantt Chart

The Stacked Header feature in the Syncfusion TypeScript Gantt Chart enables users to organize multiple related columns under a common header. This improves readability and provides a structured layout when displaying large numbers of columns.

A stacked header acts as a parent header and groups one or more child columns beneath it. This is particularly useful for categorizing task information, scheduling details, resource data, or custom project fields.

### Enabling stacked header

To create stacked headers, define columns with the `columns` property and configure the `columns` collection within a column definition to group multiple child columns under a single header.

The following example demonstrates grouping task-related columns under a common stacked header.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/stackedheader-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/stackedheader-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/stackedheader-cs1" %}

### Column behavior with stacked headers

Child columns keep their own column settings, such as `allowSorting`, `allowFiltering`, `allowResizing`, `allowReordering` and `visible`, and they stay visually grouped under the stacked header. The stacked header cell itself is not bound to a data field.

### Export

Stacked headers are included when the Gantt chart is exported. The grouped header levels are written to the exported file.

### Keyboard interaction

Header cells, including stacked header cells, can be reached with the standard keyboard navigation.

**Tab** moves focus to the next focusable element.
**Shift + Tab** moves focus to the previous focusable element.

### Touch interaction

On touch-enabled devices, stacked headers are displayed in the same grouped structure as desktop devices. Users can interact with the child columns through supported touch-based actions such as scrolling, resizing, and column menu operations when enabled.

For a comprehensive demonstration of column grouping and header customization, explore the interactive Gantt Chart samples.