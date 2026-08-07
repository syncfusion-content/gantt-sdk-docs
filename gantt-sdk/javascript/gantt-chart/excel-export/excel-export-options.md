---
layout: post
title: Excel Export Options in JavaScript Gantt Chart | Syncfusion
description: Learn how to customize Excel and CSV export in Syncfusion JavaScript Gantt Chart with custom data settings, headers, footers, and formatting options.
keywords: javascript gantt excel export options, excel export properties, csv export, export customization, gantt excel export, excel export settings, syncfusion gantt chart
canonical: https://help.syncfusion.com/gantt-sdk/javascript/gantt-chart/excel-export/excel-export-options
platform: gantt-sdk
control: Excel Export Options - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Configuring Advanced Excel Export Options in JavaScript Gantt Chart

The [JavaScript Gantt Chart](https://www.syncfusion.com/javascript-ui-controls/js-gantt-chart) control provides configurable options for Excel or CSV export through the [ExcelExportProperties](https://ej2.syncfusion.com/javascript/documentation/api/grid/excelExportProperties) object. You can customize column selection, include hidden columns, define a custom data source, apply filters, and format exported data. It also supports setting file names, adding headers and footers, and exporting multiple Gantt Charts.

## Export selected records

You can export selected records to Excel or CSV by using [getSelectedRecords](https://ej2.syncfusion.com/javascript/documentation/api/treegrid#getselectedrecords) to retrieve the required data and assigning it to [ExportProperties.dataSource](https://ej2.syncfusion.com/javascript/documentation/api/grid/excelExportProperties#datasource) within the [toolbarClick](https://ej2.syncfusion.com/javascript/documentation/gantt/events#toolbarclick) event. Once the data source is set, initiate the export using [excelExport](https://ej2.syncfusion.com/javascript/documentation/api/gantt#excelexport) or [csvExport](https://ej2.syncfusion.com/javascript/documentation/api/gantt#csvexport) method.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs14/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs14" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs14/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs14/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs14" %}
{% endif %}

## Show or hide columns during export

To show or hide specific columns during Excel export in Gantt, use the [toolbarClick](https://ej2.syncfusion.com/javascript/documentation/gantt/events#toolbarclick) event to check `args.item.id` and update the [columns.visible](https://ej2.syncfusion.com/javascript/documentation/api/grid/column#visible) property to **true** or **false** . After the export is complete, restore the original column visibility using the [excelExportComplete](https://ej2.syncfusion.com/javascript/documentation/gantt/events#excelexportcomplete) event.

The following example demonstrates how the **StartDate** column is made visible and the **Duration** column is excluded from the exported Excel file.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs4" %}
{% endif %}

## Include hidden columns in export

To include hidden columns during Excel export in the Gantt Chart control, set [ExportProperties.includeHiddenColumn](https://ej2.syncfusion.com/javascript/documentation/api/grid/excelExportProperties#includehiddencolumn) to **true** in the export configuration. This ensures that hidden columns are included in the exported data.

The following example demonstrates that the hidden **StartDate** column is included in the exported file.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs3" %}
{% endif %}

## Enable filtering in exported Excel

To enable filtering in exported Excel or CSV files in Gantt Chart control, set the [enableFilter](https://ej2.syncfusion.com/javascript/documentation/api/grid/excelExportProperties#enablefilter) property to **true** within [ExcelExportProperties](https://ej2.syncfusion.com/javascript/documentation/api/grid/excelExportProperties). Additionally, ensure that filtering is enabled in the Gantt configuration by setting [allowFiltering](https://ej2.syncfusion.com/javascript/documentation/api/gantt#allowfiltering) to **true**.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs15/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs15/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs15" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs15/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs15/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs15" %}
{% endif %}

## Set custom file name

To specify a custom name for the exported Excel or CSV file in the Gantt Chart control, set the [fileName](https://ej2.syncfusion.com/javascript/documentation/api/grid/excelExportProperties#filename) property within the [ExcelExportProperties](https://ej2.syncfusion.com/javascript/documentation/api/grid/excelExportProperties) configuration. This defines the name assigned to the file when the export is triggered.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs8" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs8" %}
{% endif %}

## Customize exported columns

The Gantt Chart control supports customizing column settings during Excel or CSV export by configuring the [ExcelExportProperties.columns](https://ej2.syncfusion.com/javascript/documentation/api/grid/excelExportProperties#columns) property. You can specify attributes such as `field`, `headerText`, and `textAlign` to define the structure and formatting of each column in the exported file, aligning the exported content with specific layout and styling preferences.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs16/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs16/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs16" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs16/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs16/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs16" %}
{% endif %}

## Add header and footer to export

To add header and footer content to exported Excel or CSV files in the Gantt Chart control, configure the [header](https://ej2.syncfusion.com/javascript/documentation/api/grid/excelExportProperties#header) and [footer](https://ej2.syncfusion.com/javascript/documentation/api/grid/excelExportProperties#footer) properties within [ExcelExportProperties](https://ej2.syncfusion.com/javascript/documentation/api/grid/excelExportProperties) during the [toolbarClick](https://ej2.syncfusion.com/javascript/documentation/gantt/events#toolbarclick) event. This allows you to define custom content that appears at the top and bottom of the exported document.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs7" %}
{% endif %}

## Apply font and color themes

The Excel or CSV export feature in Gantt supports applying custom themes to the exported document, helping maintain a consistent and visually structured appearance.

To configure a theme, set the [theme](https://ej2.syncfusion.com/javascript/documentation/api/grid/excelExportProperties#theme) property within [ExcelExportProperties](https://ej2.syncfusion.com/javascript/documentation/api/grid/excelExportProperties). This allows customization of styles for the following sections in the exported file

- **caption**: Defines the style for the caption, typically used for titles or descriptions at the top of the sheet.
- **header**: Specifies the styling for column headers.
- **record**: Applies formatting to the data rows exported from the Gantt Chart.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs6" %}
{% endif %}

> By default, tailwind3 theme is applied to the exported Excel document.

## Apply conditional formatting

You can customize Gantt cells in exported Excel or CSV documents using the [excelQueryCellInfo](https://ej2.syncfusion.com/javascript/documentation/gantt/events#excelquerycellinfo) event. This event is triggered for each cell during export, allowing formatting to be conditionally applied based on the cell's content.

In the example below, the background color is customized for the **Progress** column in the exported Excel or CSV file:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/excel-export-cs5" %}
{% endif %}
