---
layout: post
title: Excel Export in TypeScript Gantt Chart | Syncfusion
description: Learn how to export Gantt Chart data to Excel and CSV formats in TypeScript using built-in export functionality and customization options.
keywords: TypeScript gantt excel export, gantt csv export, export gantt data, excel export, csv export, gantt reporting, syncfusion gantt chart
canonical: https://help.syncfusion.com/gantt-sdk/typescript/gantt-chart/excel-export/excel-export
platform: gantt-sdk
control: Excel Export - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Exporting Data to Excel in TypeScript Gantt Chart

The [TypeScript Gantt Chart](https://www.syncfusion.com/javascript-ui-controls/js-gantt-chart) control supports exporting project data to Excel and CSV formats, enabling seamless sharing, reporting, and offline analysis.

To enable Excel or CSV export functionality, set the [allowExcelExport](https://ej2.syncfusion.com/documentation/api/gantt#allowexcelexport) property to **true** and inject the `ExcelExport` service into the control's `providers` array.

You can trigger export operations using the [excelExport](https://ej2.syncfusion.com/documentation/api/gantt#excelexport) or [csvExport](https://ej2.syncfusion.com/documentation/api/gantt#csvexport) methods, typically within the [toolbarClick](https://ej2.syncfusion.com/documentation/gantt/events#toolbarclick) event.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/excel-export-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/excel-export-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/excel-export-cs2" %}

## Binding custom data source while exporting

You can bind a custom data source for Excel or CSV export in the TypeScript Gantt Chart control by assigning it dynamically before the export begins. To achieve this, set the required data to the [dataSource](https://ej2.syncfusion.com/documentation/api/grid/excelExportProperties#datasource) property within the [ExcelExportProperties](https://ej2.syncfusion.com/documentation/api/grid/excelExportProperties) configuration.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/excel-export-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/excel-export-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/excel-export-cs1" %}

## Exporting with cell and row spanning

To export merged cells and rows in Excel or CSV files using the TypeScript Gantt Chart control, handle the [excelQueryCellInfo](https://ej2.syncfusion.com/documentation/gantt/events#excelquerycellinfo) event and apply `rowSpan` and `colSpan` during the export process. The [queryCellInfo](https://ej2.syncfusion.com/documentation/gantt/events#querycellinfo) event can be used to customize cell rendering within the Gantt view.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/excel-export-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/excel-export-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/excel-export-cs9" %}

## Show spinner while exporting

To indicate progress during the export operation in the TypeScript Gantt Chart control, use the [showSpinner](https://ej2.syncfusion.com/documentation/api/gantt#showspinner) method within the [toolbarClick](https://ej2.syncfusion.com/documentation/gantt/events#toolbarclick) event when initiating Excel or CSV export. After the export process completes, hide the spinner by calling the [hideSpinner](https://ej2.syncfusion.com/documentation/api/gantt#hidespinner) method inside the [excelExportComplete](https://ej2.syncfusion.com/documentation/gantt/events#excelexportcomplete) event.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/excel-export-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/excel-export-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/excel-export-cs10" %}

## Exporting with custom date format

To apply a custom date format to columns during Excel or CSV export in the TypeScript Gantt Chart control, define the desired format using the [format](https://ej2.syncfusion.com/documentation/api/gantt/column#format) property in the column configuration.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/excel-export-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/excel-export-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/excel-export-cs11" %}

## Exporting multiple Gantt charts

The TypeScript Gantt Chart control supports exporting multiple Gantt Charts either into a single worksheet or across separate sheets when generating Excel or CSV files.

### Same sheet

To export multiple datasets into a single worksheet, set [multipleExport.type](https://ej2.syncfusion.com/documentation/api/grid/excelExportProperties#multipleexport) to **AppendToSheet** within the [ExcelExportProperties](https://ej2.syncfusion.com/documentation/api/grid/excelExportProperties) configuration. To add spacing between datasets, define the number of blank rows using the [multipleExport.blankRows](https://ej2.syncfusion.com/documentation/api/grid/multipleExport#blankrows) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/excel-multiple-export-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/excel-multiple-export-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/excel-multiple-export-cs1" %}

> By default, `multipleExport.blankRows` value is 5.

### New sheet

To export each Gantt to a separate worksheet, set [multipleExport.type](https://ej2.syncfusion.com/documentation/api/grid/excelExportProperties#multipleexport) to **NewSheet** in the [ExcelExportProperties](https://ej2.syncfusion.com/documentation/api/grid/excelExportProperties) configuration. This ensures each dataset is placed on its own sheet.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/excel-multiple-export-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/excel-multiple-export-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/excel-multiple-export-cs2" %}

## Export Gantt data as a blob

To export Gantt data as a Blob object for advanced processing or custom download workflows, set the `isBlob` parameter to **true** in the [excelExport](https://ej2.syncfusion.com/documentation/api/gantt#excelexport) or [csvExport](https://ej2.syncfusion.com/documentation/api/gantt#csvexport) method. Use the [excelExportComplete](https://ej2.syncfusion.com/documentation/gantt/events#excelexportcomplete) event to access the Blob and implement custom logic.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/excel-export-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/excel-export-cs12/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/excel-export-cs12" %}
