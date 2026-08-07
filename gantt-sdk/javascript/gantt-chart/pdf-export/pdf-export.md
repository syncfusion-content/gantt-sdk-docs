---
layout: post
title: PDF Export in JavaScript Gantt Chart | Syncfusion
description: Learn how to export Syncfusion JavaScript Gantt Chart to PDF with customization options, themes, page settings, and multiple layout configurations.
keywords: javascript gantt pdf export, export to pdf, pdf generation, custom export, page settings, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/javascript/gantt-chart/pdf-export/pdf-export
platform: gantt-sdk
control: PDF Export - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Exporting Data to PDF Format in JavaScript Gantt Chart

PDF export in the [JavaScript Gantt Chart](https://www.syncfusion.com/javascript-ui-controls/js-gantt-chart) control enables exporting project data to PDF documents for sharing or archiving, using the [pdfExport](https://ej2.syncfusion.com/javascript/documentation/api/gantt#pdfexport) method with [allowPdfExport](https://ej2.syncfusion.com/javascript/documentation/api/gantt#allowpdfexport) set to **true** and `PdfExport` module injected. This feature supports exporting timelines, tasks, and dependencies, with options for indicators via `base64` images, blob objects for previews, single-page layouts, multiple Gantt instances in one file, and themes like Tailwind3 or Bootstrap. Focus on auto-scheduled tasks for accurate export, as manual scheduling is not currently supported.

## Export basic Gantt data

Export Gantt data to PDF by setting [allowPdfExport](https://ej2.syncfusion.com/javascript/documentation/api/gantt#allowpdfexport) to **true** and calling [pdfExport](https://ej2.syncfusion.com/javascript/documentation/api/gantt#pdfexport), which generates a document with the chart and tree-grid data.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/pdf-export-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/pdf-export-cs14/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/pdf-export-cs14" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/pdf-export-cs14/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/pdf-export-cs14/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/pdf-export-cs14" %}
{% endif %}

## Include indicators in PDF export

Include dynamic indicators and images in PDF export by defining them with `base64` encoding in the data source, mapped to the [taskFields.indicators](https://ej2.syncfusion.com/javascript/documentation/api/gantt/taskFields#indicators) property, enhancing visual representation of task status.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/pdf-export-cs16/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/pdf-export-cs16/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/pdf-export-cs16" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/pdf-export-cs16/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/pdf-export-cs16/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/pdf-export-cs16" %}
{% endif %}

## Export Gantt data as blob object

Export Gantt data as a blob object for previews or modifications by setting the fourth argument of [pdfExport](https://ej2.syncfusion.com/javascript/documentation/api/gantt#pdfexport) to **true**, with the blob returned in the [pdfExportComplete](https://ej2.syncfusion.com/javascript/documentation/gantt/events#pdfexportcomplete) event.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/exporting-blob-data-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/exporting-blob-data-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/exporting-blob-data-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/exporting-blob-data-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/exporting-blob-data-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/exporting-blob-data-cs1" %}
{% endif %}

## Single page exporting in Gantt

Export Gantt rows to a single PDF page by setting [fitToWidthSettings.isFitToWidth](https://ej2.syncfusion.com/javascript/documentation/api/gantt/fittowidthsettings#isfittowidth) to **true** in `PdfExportProperties`. Customize chart and grid widths using [chartWidth](https://ej2.syncfusion.com/javascript/documentation/api/gantt/fittowidthsettings#chartwidth) and [gridWidth](https://ej2.syncfusion.com/javascript/documentation/api/gantt/fittowidthsettings#gridwidth) as percentages.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/single-page/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/single-page/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/single-page" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/single-page/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/single-page/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/single-page" %}
{% endif %}

## Multiple Gantt exporting

Export multiple Gantt instances to a single PDF file by calling [pdfExport](https://ej2.syncfusion.com/javascript/documentation/api/gantt#pdfexport) on each, with each Gantt exported to a new page in the same document.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/pdf-multiple-export-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/pdf-multiple-export-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/pdf-multiple-export-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/pdf-multiple-export-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/pdf-multiple-export-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/pdf-multiple-export-cs1" %}
{% endif %}

## Apply themes in PDF export

Apply themes to exported PDF documents by setting the [theme](https://ej2.syncfusion.com/javascript/documentation/api/gantt/pdfexportproperties#theme) property in `PdfExportProperties` to values like Tailwind3, Fabric, Bootstrap, or Bootstrap4, customizing the appearance.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/pdf-export-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/pdf-export-cs12/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/pdf-export-cs12" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/pdf-export-cs12/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/pdf-export-cs12/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/pdf-export-cs12" %}
{% endif %}

## See also

- [How to export to Excel?](https://ej2.syncfusion.com/javascript/documentation/gantt/excel-export)
- [How to customize PDF export?](https://ej2.syncfusion.com/javascript/documentation/gantt/pdf-export/customize-pdf-export)
- [How to manage task dependencies?](https://ej2.syncfusion.com/javascript/documentation/gantt/task-dependency)
