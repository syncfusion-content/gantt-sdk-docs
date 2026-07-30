---
layout: post
title: Excel Export Options in React Gantt Chart Component | Syncfusion
description: Learn here all about Excel export in Syncfusion React Gantt Chart component of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Excel export 
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Excel Export Options in React Gantt Chart Component

The [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart) component provides configurable options for Excel or CSV export through the [ExcelExportProperties](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties) object. You can customize column selection, include hidden columns, define a custom data source, apply filters, and format exported data. It also supports setting file names, adding headers and footers, and exporting multiple Gantt Charts.

## Export selected records

You can export selected records to Excel or CSV by using [getSelectedRecords](https://ej2.syncfusion.com/react/documentation/api/treegrid#getselectedrecords) to retrieve the required data and assigning it to [ExportProperties.dataSource](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties#datasource) within the [toolbarClick](https://ej2.syncfusion.com/react/documentation/gantt/events#toolbarclick) event. Once the data source is set, initiate the export using [excelExport](https://ej2.syncfusion.com/react/documentation/api/gantt#excelexport) or [csvExport](https://ej2.syncfusion.com/react/documentation/api/gantt#csvexport) method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs11/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs11" %}

## Show or hide columns during export

To show or hide specific columns during Excel export in Gantt, use the [toolbarClick](https://ej2.syncfusion.com/react/documentation/gantt/events#toolbarclick) event to check `args.item.id` and update the [columns.visible](https://ej2.syncfusion.com/react/documentation/api/grid/column#visible) property to **true** or **false** . After the export is complete, restore the original column visibility using the [excelExportComplete](https://ej2.syncfusion.com/react/documentation/gantt/events#excelexportcomplete) event.

The following example demonstrates how the **StartDate** column is made visible and the **Duration** column is excluded from the exported Excel file.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs6" %}

## Include hidden columns in export

To include hidden columns during Excel export in the Gantt Chart component, set [ExportProperties.includeHiddenColumn](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties#includehiddencolumn) to **true** in the export configuration. This ensures that hidden columns are included in the exported data.

The following example demonstrates that the hidden **StartDate** column is included in the exported file.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs5" %}

## Enable filtering in exported Excel

To enable filtering in exported Excel or CSV files in Gantt Chart component, set the [enableFilter](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties#enablefilter) property to **true** within [ExcelExportProperties](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties). Additionally, ensure that filtering is enabled in the Gantt configuration by setting [allowFiltering](https://ej2.syncfusion.com/react/documentation/api/gantt#allowfiltering) to **true**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs12/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs12" %}

## Set custom file name

To specify a custom name for the exported Excel or CSV file in the Gantt Chart component, set the [fileName](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties#filename) property within the [ExcelExportProperties](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties) configuration. This defines the name assigned to the file when the export is triggered.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs10/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs10" %}

## Customize exported columns

The Gantt Chart component supports customizing column settings during Excel or CSV export by configuring the [ExcelExportProperties.columns](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties#columns) property. You can specify attributes such as `field`, `headerText`, and `textAlign` to define the structure and formatting of each column in the exported file, aligning the exported content with specific layout and styling preferences.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs13/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs13/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs13/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs13" %}

## Add header and footer to export

To add header and footer content to exported Excel or CSV files in the Gantt Chart component, configure the [header](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties#header) and [footer](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties#footer) properties within [ExcelExportProperties](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties) during the [toolbarClick](https://ej2.syncfusion.com/react/documentation/gantt/events#toolbarclick) event. This allows you to define custom content that appears at the top and bottom of the exported document.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs9/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs9" %}

## Apply font and color themes

The Excel or CSV export feature in Gantt supports applying custom themes to the exported document, helping maintain a consistent and visually structured appearance.

To configure a theme, set the [theme](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties#theme)  property within [ExcelExportProperties](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties). This allows customization of styles for the following sections in the exported file

- **caption**: Defines the style for the caption, typically used for titles or descriptions at the top of the sheet.
- **header**: Specifies the styling for column headers.
- **record**: Applies formatting to the data rows exported from the Gantt Chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs8" %}

> By default, tailwind3 theme is applied to the exported Excel document.

## Apply conditional formatting

You can customize Gantt cells in exported Excel or CSV documents using the [excelQueryCellInfo](https://ej2.syncfusion.com/react/documentation/gantt/events#excelquerycellinfo) event. This event is triggered for each cell during export, allowing formatting to be conditionally applied based on the cell's content.

In the example below, the background color is customized for the **Progress** column in the exported Excel or CSV file:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs7" %}