---
layout: post
title: Row Selection in Vue Gantt Chart Component | Syncfusion
description: Learn here all about Row selection in Syncfusion Vue Gantt Chart component of Syncfusion Essential JS 2 and more.
control: Row selection 
platform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Row Selection in Vue Gantt Chart Component

The row selection in the Gantt Chart component can be enabled or disabled using the [allowSelection](https://ej2.syncfusion.com/vue/documentation/api/gantt#allowselection) property. You can get the selected row object using the [getSelectedRecords](https://ej2.syncfusion.com/vue/documentation/api/gantt/selection#getSelectedRecords) method. The following code example shows how to disable row selection in Gantt.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/selection-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/selection-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/selection-cs5" %}

> `Row` selection is the default type of Gantt selection mode.

## Selecting a row on initial load

You can select a row at the time of loading by setting the index of the row to the [selectedRowIndex](https://ej2.syncfusion.com/vue/documentation/api/gantt#selectedrowindex) property. The following code example shows the details.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/selection-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/selection-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/selection-cs6" %}

## Selecting a row dynamically

You can select a single row dynamically using the [selectRow](https://ej2.syncfusion.com/vue/documentation/api/gantt/selection#selectrow) method. Similarly, you can use the [selectRows](https://ej2.syncfusion.com/vue/documentation/api/gantt/selection#selectrows) method to dynamically select multiple rows. The following code demonstrates how to select a single or multiple rows dynamically by clicking a custom button.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/selection-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/selection-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/selection-cs7" %}

## Multiple row selection

You can select multiple rows by setting the [selectionSettings.type](https://ej2.syncfusion.com/vue/documentation/api/gantt/selectionSettings#type) property to `multiple`. You can select more than one row by holding down the CTRL key while selecting rows. The following code example explains how to enable multiple row selection in Gantt.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/selection-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/selection-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/selection-cs8" %}

## Customize row selection action

While selecting a row in Gantt, the [rowSelecting](https://ej2.syncfusion.com/vue/documentation/api/gantt#rowselecting) and [rowSelected](https://ej2.syncfusion.com/vue/documentation/api/gantt#rowselected) events will be triggered. The `rowSelecting` event is triggered when row selection begins, and you can get the previously selected row and the currently selecting row information, which can be used to prevent the selection of a specific row. The `rowSelected` event is triggered after the row selection is completed, and you can get the currently selected row information through this event. The following code example demonstrates how to prevent the selection of a row using the `rowSelecting` event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/selection-cs10/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/selection-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/selection-cs10" %}

In the Gantt Chart component, when you click an already selected row, the selection will be cleared. While deselecting a row in Gantt, the [rowDeselecting](https://ej2.syncfusion.com/vue/documentation/api/gantt#rowdeselecting) and [rowDeselected](https://ej2.syncfusion.com/vue/documentation/api/gantt#rowdeselected) events will be triggered. The `rowDeselecting` event occurs when row deselection begins, and you can get the currently deselecting row’s information to prevent the deselection of a particular row. The `rowDeselected` event occurs when the row deselection action is completed, and you can get the currently deselected row’s information.