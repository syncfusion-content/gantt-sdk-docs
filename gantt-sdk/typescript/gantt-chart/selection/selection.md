---
layout: post
title: Selection in TypeScript Gantt Chart | Syncfusion
description: Learn how to enable selection selection in Syncfusion TypeScript Gantt Chart with row and cell selection modes, keyboard navigation, and selection events.
keywords: TypeScript gantt selection, row selection, cell selection, multiple select, keyboard navigation, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/TypeScript/gantt-chart/selection/selection
platform: gantt-sdk
control: Selection - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Enabling and Configuring Selection Behavior in TypeScript Gantt Chart

The Selection feature provides the ability to highlight a row or cell in the Gantt Chart control. Selection can be performed using arrow keys or mouse clicks.

To disable selection, set the [allowSelection](https://ej2.syncfusion.com/documentation/api/gantt#allowselection) property to **false**.

To enable selection functionality, inject the [Selection](https://ej2.syncfusion.com/documentation/api/gantt#selectionmodule) module in the `providers` section of your TypeScript application.

The Gantt Chart control supports two types of selection that can be set by using the [selectionSettings.type](https://ej2.syncfusion.com/documentation/api/gantt/selectionSettings#type) property. They are:

- **Single:** Allows selection of only one row or cell at a time. This is the default behavior.
- **Multiple:** Enables selection of multiple rows or cells. To perform multi-selection, press and hold the **Ctrl** key (on Windows/Linux) or **Cmd** key (on macOS) while clicking the desired rows or cells.

## Selection mode

The Gantt Chart control supports three types of selection modes, which can be set using the [selectionSettings.mode](https://ej2.syncfusion.com/documentation/api/gantt/selectionSettings#mode) property:

- **Row:** Allows selection of rows only. This is the default mode.
- **Cell:** Allows selection of cells only.
- **Both:** Allows selection of both rows and cells at the same time.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/selection-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/selection-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/selection-cs8" %}

## Toggle selection

Toggle selection allows you to select or deselect a specific row or cell with repeated clicks. To enable this feature, set the [enableToggle](https://ej2.syncfusion.com/documentation/api/gantt/selectionSettings#enabletoggle) property of `selectionSettings` to **true**.

When enabled, clicking a selected row or cell will deselect it, and clicking it again will reselect it. By default, the `enableToggle` property is set to **false**.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/toggleselection-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/toggleselection-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/toggleselection-cs1" %}

## Hierarchy checkbox selection

The hierarchy checkbox selection feature allows you to select or deselect parent and child records through checkboxes. To enable this, set the [hierarchyCheckboxMode](https://ej2.syncfusion.com/documentation/api/gantt#hierarchycheckboxmode) property, and define a dedicated column with the field name **CheckBox** in the [columns](https://ej2.syncfusion.com/documentation/api/gantt#columns) configuration.

### Hierarchy Checkbox Mode

The [hierarchyCheckboxMode](https://ej2.syncfusion.com/documentation/api/gantt#hierarchycheckboxmode) property allows you to configure how checkbox selection is propagated across parent and child task records using different hierarchy modes. The following modes are supported:

- **Self:** Selecting a record's checkbox selects only that record. Even if the record is a parent or a child, its selection state does not affect any other records in the hierarchy.
- **Hierarchy:** Selecting a record's checkbox selects all its descendant and parent records. For example, when you select a parent record, all of its child records are selected, and when you select a child record, its parent record reflects the selection state accordingly. This is the default behavior of the [hierarchyCheckboxMode](https://ej2.syncfusion.com/documentation/api/gantt#hierarchycheckboxmode) property.
- **FilteredHierarchy:** The behavior is similar to **Hierarchy** mode, but checkbox propagation is applied only to the records that are currently visible after filtering or searching. Records that are hidden by the filter remain unaffected by the selection.

The following example demonstrates how to enable checkbox-based row selection with the **Hierarchy** mode:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/hierarchy-selection-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/hierarchy-selection-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/hierarchy-selection-cs1" %}

## Persist selection

Persist Selection retains selected tasks even after performing actions such as sorting, filtering, or refreshing the data. To enable this, set `selectionSettings.persistSelection` to **true**.

> Cell selection is not supported by the persistence feature.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/persist-selection-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/persist-selection-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/persist-selection-cs1" %}

## Hover highlighting

The hover highlighting feature in the Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript Gantt Chart enhances usability by visually highlighting **tree grid rows**, **chart task bars**, **header cells**, and **timeline cells** on hover. This makes it easier to follow tasks in complex project timelines.

To enable this feature, set the `enableHover` property to **true** in the control. By default, this property is set to **false**.

The following code example shows how to enable the hover highlighting in Gantt.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/selection-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/selection-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/selection-cs11" %}

## Clear selection

To clear selected rows and cells in the Gantt Chart control, use the [clearSelection](https://ej2.syncfusion.com/documentation/api/gantt#clearselection) method.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/clearselection-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/clearselection-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/clearselection-cs1" %}

## Touch interaction

The touch interaction feature in the Gantt control allows you to easily interact with the Gantt chart on touch screen devices. This feature is particularly useful for enhancing usability on mobile devices and tablets, making it easier to navigate and interact with the Gantt chart's content using touch gestures.

[Single Row Selection](https://help.syncfusion.com/gantt-sdk/typescript/gantt-chart/selection#selection-mode) : When you tap on a row using a touch screen, the tapped row is automatically selected. This offers a straightforward way to select single rows with a touch interface.

[Multiple Row Selection](https://help.syncfusion.com/gantt-sdk/typescript/gantt-chart/selection#multiple-row-selection) : To select multiple rows, you can utilize the multi-row selection feature. When you tap on a row, a popup is displayed, indicating the option for multi-row selection. Tap on the popup, and then proceed to tap on the desired rows you want to select. This allows you to select and interact with multiple rows simultaneously, as shown in the following image:

![Multiple selection](../images/multiple-selection.PNG)
