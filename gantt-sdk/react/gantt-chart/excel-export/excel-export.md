---
layout: post
title: Excel Export in React Gantt Chart Component | Syncfusion
description: Learn here all about excel export in Syncfusion React Gantt Chart component of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Excel export 
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Excel Export in React Gantt Chart Component

The [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart) component supports exporting project data to Excel and CSV formats, enabling seamless sharing, reporting, and offline analysis.  
 
To enable Excel or CSV export functionality, set the [allowExcelExport](https://ej2.syncfusion.com/react/documentation/api/gantt#allowexcelexport) property to **true** and inject the `ExcelExport` service into the component's `providers` array. 

You can trigger export operations using the [excelExport](https://ej2.syncfusion.com/react/documentation/api/gantt#excelexport) or [csvExport](https://ej2.syncfusion.com/react/documentation/api/gantt#csvexport) methods, typically within the [toolbarClick](https://ej2.syncfusion.com/react/documentation/gantt/events#toolbarclick) event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs2" %}

## Binding custom data source while exporting

You can bind a custom data source for Excel or CSV export in the React Gantt Chart component by assigning it dynamically before the export begins. To achieve this, set the required data to the [dataSource](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties#datasource) property within the [ExcelExportProperties](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties) configuration.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs1" %}

## Exporting with cell and row spanning

To export merged cells and rows in Excel or CSV files using the React Gantt Chart component, handle the [excelQueryCellInfo](https://ej2.syncfusion.com/react/documentation/gantt/events#excelquerycellinfo) event and apply `rowSpan` and `colSpan` during the export process. The [queryCellInfo](https://ej2.syncfusion.com/react/documentation/gantt/events#querycellinfo) event can be used to customize cell rendering within the Gantt view.
 
{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs14/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs14/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs14/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs14" %}

## Show spinner while exporting

To indicate progress during the export operation in the React Gantt Chart component, use the [showSpinner](https://ej2.syncfusion.com/react/documentation/api/gantt#showspinner) method within the [toolbarClick](https://ej2.syncfusion.com/react/documentation/gantt/events#toolbarclick) event when initiating Excel or CSV export. After the export process completes, hide the spinner by calling the [hideSpinner](https://ej2.syncfusion.com/react/documentation/api/gantt#hidespinner) method inside the [excelExportComplete](https://ej2.syncfusion.com/react/documentation/gantt/events#excelexportcomplete) event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs15/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs15/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs15/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs15" %}

## Exporting with custom date format

To apply a custom date format to columns during Excel or CSV export in the React Gantt Chart component, define the desired format using the [format](https://ej2.syncfusion.com/react/documentation/api/gantt/column#format) property in the column configuration.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs16/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs16/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs16/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs16" %}

## Exporting multiple Gantt charts

The React Gantt Chart component supports exporting multiple Gantt Charts either into a single worksheet or across separate sheets when generating Excel or CSV files.

### Same sheet

To export multiple datasets into a single worksheet, set [multipleExport.type](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties#multipleexport) to **AppendToSheet** within the [ExcelExportProperties](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties) configuration. To add spacing between datasets, define the number of blank rows using the [multipleExport.blankRows](https://ej2.syncfusion.com/react/documentation/api/grid/multipleExport#blankrows) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs3" %}

>By default, `multipleExport.blankRows` value is 5.

### New sheet

To export each Gantt to a separate worksheet, set [multipleExport.type](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties#multipleexport) to **NewSheet** in the [ExcelExportProperties](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties) configuration. This ensures each dataset is placed on its own sheet.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs4" %}

## Export Gantt data as a Blob

To export Gantt data as a Blob object for advanced processing or custom download workflows, set the `isBlob` parameter to **true** in the [excelExport](https://ej2.syncfusion.com/react/documentation/api/gantt#excelexport) or [csvExport](https://ej2.syncfusion.com/react/documentation/api/gantt#csvexport) method. Use the [excelExportComplete](https://ej2.syncfusion.com/react/documentation/gantt/events#excelexportcomplete) event to access the Blob and implement custom logic.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs17/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs17/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs17/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/excel-export-cs17" %}