---
layout: post
title: PDF Export in React Gantt Chart Component | Syncfusion
description: Learn how to export Gantt to PDF in Syncfusion React Gantt Chart component with indicators, blob objects, single-page, and theme options.
platform: gantt-sdk
control: PDF export
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# PDF Export in React Gantt Chart Component

PDF export in the [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart) component enables exporting project data to PDF documents for sharing or archiving, using the [pdfExport](https://ej2.syncfusion.com/react/documentation/api/gantt#pdfexport) method with [allowPdfExport](https://ej2.syncfusion.com/react/documentation/api/gantt#allowpdfexport) set to **true** and `PdfExport` module injected. This feature supports exporting timelines, tasks, and dependencies, with options for indicators via `base64` images, blob objects for previews, single-page layouts, multiple Gantt instances in one file, and themes like Tailwind3 or Bootstrap. Focus on auto-scheduled tasks for accurate export, as manual scheduling is not currently supported.

## Export basic Gantt data

Export Gantt data to PDF by setting [allowPdfExport](https://ej2.syncfusion.com/react/documentation/api/gantt#allowpdfexport) to **true** and calling [pdfExport](https://ej2.syncfusion.com/react/documentation/api/gantt#pdfexport), which generates a document with the chart and tree-grid data.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/pdf-export-cs14/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/pdf-export-cs14/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/pdf-export-cs14/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/pdf-export-cs14" %}

## Include indicators in PDF export

Include dynamic indicators and images in PDF export by defining them with `base64` encoding in the data source, mapped to the [taskFields.indicators](https://ej2.syncfusion.com/react/documentation/api/gantt/taskFields#indicators) property, enhancing visual representation of task status.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/pdf-export-cs16/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/pdf-export-cs16/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/pdf-export-cs16/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/pdf-export-cs16" %}

## Export Gantt data as blob object

Export Gantt data as a blob object for previews or modifications by setting the fourth argument of [pdfExport](https://ej2.syncfusion.com/react/documentation/api/gantt#pdfexport) to **true**, with the blob returned in the [pdfExportComplete](https://ej2.syncfusion.com/react/documentation/gantt/events#pdfexportcomplete) event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/how-to-blobdata-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/how-to-blobdata-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/how-to-blobdata-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/how-to-blobdata-cs1" %}

## Single page exporting in Gantt

Export Gantt rows to a single PDF page by setting [fitToWidthSettings.isFitToWidth](https://ej2.syncfusion.com/react/documentation/api/gantt/fittowidthsettings#isfittowidth) to **true** in `PdfExportProperties`. Customize chart and grid widths using [chartWidth](https://ej2.syncfusion.com/react/documentation/api/gantt/fittowidthsettings#chartwidth) and [gridWidth](https://ej2.syncfusion.com/react/documentation/api/gantt/fittowidthsettings#gridwidth) as percentages.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/single-page/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/single-page/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/single-page/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/single-page" %}

## Multiple Gantt exporting

Export multiple Gantt instances to a single PDF file by calling [pdfExport](https://ej2.syncfusion.com/react/documentation/api/gantt#pdfexport) on each, with each Gantt exported to a new page in the same document.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/pdf-multiple-export-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/pdf-multiple-export-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/pdf-multiple-export-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/pdf-multiple-export-cs1" %}

## Apply themes in PDF export

Apply themes to exported PDF documents by setting the [theme](https://ej2.syncfusion.com/react/documentation/api/gantt/pdfExportProperties#theme) property in `PdfExportProperties` to values like Tailwind3, Fabric, Bootstrap, or Bootstrap4, customizing the appearance.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/pdf-export-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/pdf-export-cs12/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/pdf-export-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/pdf-export-cs12" %}

## See also
- [How to export to Excel?](https://ej2.syncfusion.com/react/documentation/gantt/excel-export)
- [How to customize PDF export?](https://ej2.syncfusion.com/react/documentation/gantt/pdf-export/customize-pdf-export)
- [How to manage task dependencies?](https://ej2.syncfusion.com/react/documentation/gantt/task-dependency)