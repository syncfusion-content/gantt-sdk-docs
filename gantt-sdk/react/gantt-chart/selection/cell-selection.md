---
layout: post
title: React Gantt Chart Cell Selection API | Syncfusion
description: Explore cell selection in Syncfusion React Gantt Chart, including single, multiple, external selection, and customization via API methods and events.
platform: gantt-sdk
control: Cell selection 
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Cell Selection in React Gantt Chart Component

Cell selection in the [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart) component enables interactive selection of specific cells or ranges of cells within the grid. You may select cells using mouse clicks or arrow keys (up, down, left, right). This is useful for highlighting, manipulating, or performing operations on particular Gantt cells.

## Single cell selection

Single cell selection in the Gantt Chart is enabled by setting [selectionSettings.mode](https://ej2.syncfusion.com/react/documentation/api/gantt/selectionSettings#mode) to **Cell** and [selectionSettings.type](https://ej2.syncfusion.com/react/documentation/api/gantt/selectionSettings#type) to **Single**. This allows selecting only one cell at a time.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/selection-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/selection-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/selection-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/selection-cs1" %}

## Multiple cell selection

Multiple cell selection in the Gantt Chart is enabled by setting [selectionSettings.mode](https://ej2.syncfusion.com/react/documentation/api/gantt/selectionSettings#mode) to **Cell** and [selectionSettings.type](https://ej2.syncfusion.com/react/documentation/api/gantt/selectionSettings#type) to **Multiple**. This allows selecting multiple cells at a time by holding the **Ctrl** key while clicking on each desired cell.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/selection-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/selection-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/selection-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/selection-cs2" %}

## Cell selection mode

Cell selection mode controls how cells or ranges are selected. Set the desired mode using [selectionSettings.cellSelectionMode](https://ej2.syncfusion.com/react/documentation/api/gantt/selectionsettings#cellselectionmode):

* **Flow** (default): Selects a continuous flow of cells between the start and end indices across rows.
* **Box**: Selects a rectangular range covering specified rows and columns.
* **BoxWithBorder**: Similar to Box mode, but applies a border for better visual distinction of the selected range.

> For cell selection modes, [selectionSettings.mode](https://ej2.syncfusion.com/react/documentation/api/gantt/selectionsettings#mode) must be **Cell** or **Both**, and [type](https://ej2.syncfusion.com/react/documentation/api/gantt/selectionsettings#type) must be **Multiple**.

The following example demonstrates how to change both the selection mode and the cell selection mode using a DropDownList component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/selection-cs17/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/selection-cs17/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/selection-cs17/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/selection-cs17" %}

## Select cells externally

You may programmatically select a single row, multiple cells, or a range of cells in the Gantt Chart using built-in methods.

### Single cell selection

Select a specific cell in the Gantt Chart by calling the [selectCell](https://ej2.syncfusion.com/react/documentation/api/gantt/selection#selectcell) method and providing the desired row and column indexes as arguments.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/selection-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/selection-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/selection-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/selection-cs3" %}

### Multiple cell selection

Select multiple cells in the Gantt Chart by calling the [selectCells](https://ej2.syncfusion.com/react/documentation/api/gantt/selection#selectcells) method and providing an array of the row and column indexes for each target cell.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/selection-cs18/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/selection-cs18/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/selection-cs18/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/selection-cs18" %}

## Get selected cell information

To retrieve information about selected cells in the Gantt Chart, use methods like [getSelectedRowCellIndexes](https://ej2.syncfusion.com/react/documentation/api/gantt/selection#getselectedrowcellindexes) method to get the list of row and column indexes for selected cells, and the [getCellSelectedRecords](https://ej2.syncfusion.com/react/documentation/api/gantt/selection#getcellselectedrecords) method to retrieve the related data objects for each selected cell.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/selection-cs19/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/selection-cs19/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/selection-cs19/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/selection-cs19" %}

## Customize cell selection action

You may customize cell selection behavior in the Gantt Chart using [cellSelecting](https://ej2.syncfusion.com/react/documentation/gantt/events#cellselecting), [cellSelected](https://ej2.syncfusion.com/react/documentation/gantt/events#cellselected), [cellDeselecting](https://ej2.syncfusion.com/react/documentation/gantt/events#celldeselecting), and [cellDeselected](https://ej2.syncfusion.com/react/documentation/gantt/events#celldeselected) events. These events provide dynamic control over selection, allowing conditional logic and visual updates based on specific criteria.

The following sample demonstrates customizing cell selection in the Gantt Chart using Syncfusion events. In the `cellSelected` event, the background color is set to `rgb(96, 158, 101)`, while selection is canceled in the `cellSelecting` event when the `TaskName` is `Perform Soil test`. During `cellDeselecting`, the text color is changed to `rgb(253, 253, 253)`, and in the `cellDeselected` event, the background color is updated to `rgb(245, 69, 69)`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/selection-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/selection-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/selection-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/selection-cs4" %}

## Limitations for cell selection

* Cell-based selection is not supported when virtualization is enabled.