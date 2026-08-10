---
layout: post
title: Row Selection in TypeScript Gantt Chart | Syncfusion
description: Configure row selection in Syncfusion TypeScript Gantt Chart with single and multiple selection modes, API methods, and events.
keywords: TypeScript gantt row selection, select rows, multiple rows, selection mode, row select event, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/TypeScript/gantt-chart/selection/row-selection
platform: gantt-sdk
control: Row Selection - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Selecting Multiple Rows and Rows in TypeScript Gantt Chart

The TypeScript Gantt Chart control supports row selection using mouse clicks or keyboard navigation (arrow keys). This enables users to highlight, manipulate, or trigger actions on selected task rows.

## Single row selection

You can enable single row selection in the Gantt Chart control by setting [selectionSettings.mode](https://ej2.syncfusion.com/documentation/api/gantt/selectionSettings#mode) to **Row** and [selectionSettings.type](https://ej2.syncfusion.com/documentation/api/gantt/selectionSettings#type) to **Single**. This allows you to select only one task row at a time.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/selection-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/selection-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/selection-cs4" %}

## Multiple row selection

You can enable multiple row selection in the Gantt Chart control by setting [selectionSettings.mode](https://ej2.syncfusion.com/documentation/api/gantt/selectionSettings#mode) to **Row** and [selectionSettings.type](https://ej2.syncfusion.com/documentation/api/gantt/selectionSettings#type) to **Multiple**. This allows selection of more than one task row at a time by holding down the **Ctrl** key while clicking on multiple rows.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/selection-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/selection-cs14/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/selection-cs14" %}

## Row selection event sequence

- On initial row selection: `rowSelecting` triggers first, followed by `rowSelected`.

- When selecting a different row:
  - [rowSelecting](https://ej2.syncfusion.com/documentation/api/gantt#rowselecting) is followed by [rowDeselecting](https://ej2.syncfusion.com/documentation/api/gantt#rowdeselecting) and [rowDeselected](https://ej2.syncfusion.com/documentation/api/gantt#rowdeselected) to deselect the previously selected row.

  - Then, [rowSelected](https://ej2.syncfusion.com/documentation/api/gantt#rowselected) triggers for the newly selected row.

This sequence ensures proper handling of row transitions during selection and deselection.

## Select row at initial rendering

You can highlight or pre-select a specific row during the initial rendering of the Gantt Chart control by setting the [selectedRowIndex](https://ej2.syncfusion.com/documentation/api/gantt#selectedrowindex) property. This selects the row at the specified index when the Gantt loads.

The following example selects the row at index 5 during initial load:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/selection-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/selection-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/selection-cs5" %}

## Select rows externally

You can programmatically or dynamically select single rows, multiple rows, or a range of rows in the TypeScript Gantt Chart control.

### Single row selection

Select a single row in the Gantt Chart control by calling the [selectRow](https://ej2.syncfusion.com/documentation/api/gantt/selection#selectrow) method with the desired row index.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/selectRow-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/selectRow-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/selectRow-cs1" %}

### Multiple rows selection

Select multiple rows in the Gantt Chart control by using the [selectRows](https://ej2.syncfusion.com/documentation/api/gantt/selection#selectrows) method with an array of row indexes.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/selection-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/selection-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/selection-cs6" %}

### Range of rows selection

Select a range of rows in the Gantt Chart control by using the [selectRowsByRange](https://ej2.syncfusion.com/documentation/api/gantt/selection#selectrowsbyrange) method with the start and end row indexes.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/selection-cs15/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/selection-cs15/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/selection-cs15" %}

## Enable multi row selection without Ctrl key

You can enable simple multi-row selection by setting the `enableSimpleMultiRowSelection` property to **true** in the Grid configuration during the [created](https://ej2.syncfusion.com/documentation/gantt/events#created) event. This allows multiple rows to be selected individually through clicks without holding the Ctrl key.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/selection-cs16/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/selection-cs16/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/selection-cs16" %}

## Get selected row information

To access selected row details in the TypeScript Gantt Chart control:

- [getSelectedRowIndexes](https://ej2.syncfusion.com/documentation/api/gantt/selection#getselectedrowindexes) – Returns the index positions of selected rows.
- [getSelectedRecords](https://ej2.syncfusion.com/documentation/api/gantt/selection#getselectedrecords) – Provides the corresponding data objects.
- [getSelectedRows](https://ej2.syncfusion.com/documentation/api/gantt/selection#getselectedrows) – Retrieves the actual row elements from the DOM.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/selection-cs17/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/selection-cs17/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/selection-cs17" %}

> **Note:** The Gantt Chart control supports keyboard navigation for row selection. Use arrow keys to move focus and `Enter` or `Space` to select rows. Ensure accessibility compliance by providing appropriate ARIA attributes.

## Customize row selection action

You can customize row selection in the Gantt Chart using [rowSelecting](https://ej2.syncfusion.com/documentation/gantt/events#rowselecting), [rowSelected](https://ej2.syncfusion.com/documentation/gantt/events#rowselected), [rowDeselecting](https://ej2.syncfusion.com/documentation/gantt/events#rowdeselecting), and [rowDeselected](https://ej2.syncfusion.com/documentation/gantt/events#rowdeselected) events, which allow dynamic control over selection behavior based on specific conditions.

The following demonstrates how row selection and background color updates are handled in the TypeScript Gantt Chart control:

- In `rowSelecting`, selection is prevented when `TaskID` is 2.
- In `rowSelected`, rows with **Progress** > 40 are highlighted with a green background.
- In `rowDeselected`, rows with **Progress** ≤ 40 are styled with mauve background color.
- In `rowDeselecting`, if **Progress** > 80, the background color changes to yellow.

The following sample demonstrates

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/selection-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/selection-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/selection-cs7" %}
