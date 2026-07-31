---
layout: post
title: Cell Selection in Vue Gantt Chart Component | Syncfusion
description: Learn here all about Cell selection in Syncfusion Vue Gantt Chart component of Syncfusion Essential JS 2 and more.
control: Cell selection
platform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Cell Selection in Vue Gantt Chart Component

You can select a cell in the Gantt Chart component by setting the https://ej2.syncfusion.com/vue/documentation/api/gantt/selectionSettings#mode property to `cell`. You can get the selected cell information using the https://ej2.syncfusion.com/vue/documentation/api/gantt/selection#getselectedrowcellindexes method. This method returns the result as an object collection, which contains the `cellIndexes` and `rowIndex` information of the selected cells.

Refer to the following code example to enable cell selection in Gantt.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/selection-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/selection-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt/selection-cs1" %}

## Selecting multiple cells

You can select multiple cells by setting the https://ej2.syncfusion.com/vue/documentation/api/gantt/selectionSettings#type property to `multiple` and the https://ej2.syncfusion.com/vue/documentation/api/gantt/selectionSettings#mode property to `cell`. Multiple cells can be selected by holding the CTRL key and selecting the cells. The following code example demonstrates how to select multiple cells.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/selection-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/selection-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt/selection-cs2" %}

## Selecting a cell dynamically

You can select a cell dynamically using the https://ej2.syncfusion.com/vue/documentation/api/gantt/selection#selectcell method. Refer to the following code example for details.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/selection-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/selection-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt/selection-cs3" %}

## Customize cell selection action

While selecting a cell in Gantt, the https://ej2.syncfusion.com/vue/documentation/api/gantt#cellselecting and https://ej2.syncfusion.com/vue/documentation/api/gantt#cellselected events will be triggered. The `cellSelecting` event will be triggered at the initialization of the cell selection action, and you can get the currently selecting cell information to prevent the selection of a particular cell in a particular row. The `cellSelected` event will be triggered upon completion of the cell selection action, and you can get the currently selected cell’s information. The following code example demonstrates how to prevent the selection of a cell using the `cellSelecting` event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/selection-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/selection-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt/selection-cs4" %}

## Limitations for cell selection

- Cell-based selection is not supported when virtualization is enabled.
