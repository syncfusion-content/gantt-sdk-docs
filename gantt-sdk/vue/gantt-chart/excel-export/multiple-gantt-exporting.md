---
layout: post
title: Multiple Gantt Exporting in Vue Gantt Chart Component | Syncfusion
description: Learn how to export multiple Vue Gantt Chart instances to Excel in a single or multiple sheets with flexible customization options.
control: Multiple gantt exporting
platform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Multiple Gantt exporting in Vue Gantt Chart Component

The Gantt Chart component provides support for exporting multiple Gantt Chart instances into Excel. You can export them either into a single sheet or multiple sheets based on your requirements.

## Same sheet

The Excel export feature allows exporting multiple Gantt Chart data sets into the same sheet. To export them in the same sheet, set `multipleExport.type` to `AppendToSheet` in the `ExcelExportProperties`.  
You can also add blank rows between exported Gantt Chart data by defining the `multipleExport.blankRows` property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/excel-export-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/excel-export-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/excel-export-cs3" %}

> By default, the value of `multipleExport.blankRows` is **5**.

## New sheet

The Excel export feature also allows exporting multiple Gantt Chart instances into separate sheets. To export each Gantt Chart in a new sheet, set `multipleExport.type` to `NewSheet` in the `ExcelExportProperties`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/excel-export-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/excel-export-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/excel-export-cs4" %}

## Customize the Excel export

The Gantt Chart Excel export supports several customization options to tailor the exported document to your needs.

### Export hidden columns

You can export hidden columns by setting the `includeHiddenColumn` property to `true`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/excel-export-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/excel-export-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/excel-export-cs5" %}

### Show or hide columns during export

During Excel export, you can dynamically show or hide columns using the https://ej2.syncfusion.com/vue/documentation/api/gantt#toolbarclick and https://ej2.syncfusion.com/vue/documentation/api/gantt#excelexportcomplete events.

- In the `toolbarClick` event, use the `args.item.id` property to modify `column.visible` to show or hide columns.
- In the `excelExportComplete` event, you can revert the columns to their original visibility.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/excel-export-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/excel-export-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/excel-export-cs6" %}

### Cell formatting during export

You can customize the TreeGrid cells in the exported document using the https://ej2.syncfusion.com/vue/documentation/api/gantt#excelquerycellinfo event.  
In this event, you can apply conditional formatting to Excel and CSV exports.

In the example below, the background color is customized for the `TaskID` column using the `args.style.backColor` property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/excel-export-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/excel-export-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/excel-export-cs7" %}

### Theme

You can apply custom themes to the exported Excel document by defining the `theme` property in `ExcelExportProperties`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/excel-export-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/excel-export-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/excel-export-cs8" %}

> By default, the **Tailwind CSS v3** theme is applied to exported Excel files.

### Add header and footer

You can include custom header and footer content in the exported Excel document.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/excel-export-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/excel-export-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/excel-export-cs9" %}

### File name for exported document

You can define a custom file name for the exported Excel document using the `fileName` property of the `ExcelExportProperties`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/excel-export-cs10/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/excel-export-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/excel-export-cs10" %}