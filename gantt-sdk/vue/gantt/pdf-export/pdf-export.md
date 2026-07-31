---
layout: post
title: PDF export in Vue Gantt Chart component | Syncfusion
description: Learn here all about Pdf export in Syncfusion Vue Gantt Chart component of Syncfusion Essential JS 2 and more.
control: Pdf export 
platform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# PDF Export in Vue Gantt Chart component

PDF export allows exporting Gantt data to a PDF document. You need to use the https://ej2.syncfusion.com/vue/documentation/api/gantt#pdfexport method for exporting. To enable PDF export in the Gantt, set [allowPdfExport](https://ej2.syncfusion.com/vue/documentation/api/gantt#allowpdfexport) to true.

To get a configured Gantt chart for exporting, you can follow the steps outlined in the video linked below:
{% youtube "https://www.youtube.com/watch?v=UOx3TGsL48c" %}

To export data to a PDF document, inject the `PdfExport` module into the Gantt.

> Note: Currently, we do not have support for exporting manually scheduled tasks.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-cs13/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-cs13" %}

## Indicators in PDF exporting 

The PDF export functionality allows users to export Gantt charts enriched with dynamic indicators and accompanying images. These indicators, represented by images, can be defined using the ../api/gantt/iIndicator#base64 encoding value in the data object of the data source. This data object field should be mapped to the indicator property of the [task fields](https://ej2.syncfusion.com/vue/documentation/api/gantt/taskFields#indicators).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-cs14/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-cs14/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-cs13" %}

## Exporting Gantt data as a blob object

In Gantt, you can export the Gantt chart data as a blob object, which allows you to preview or modify the data before exporting it.

To export the Gantt chart data as a blob object, follow these steps:

Step 1: Set the fourth argument of `pdfExport` as `true`.

Step 2: Then, `pdfExpComplete` will return the blob object.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/exporting-gantt-blobdata-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/exporting-gantt-blobdata-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/exporting-gantt-blobdata-cs1" %}

## Single page exporting in Gantt

In Gantt, we provide support for exporting the Gantt Chart component so that each row is auto‑fitted to the PDF document's page width by setting [isFitToWidth](https://ej2.syncfusion.com/vue/documentation/api/gantt/pdfExportProperties/fitToWidthSettings#isFitToWidth) to true in the <code>fitToWidthSettings</code> of <code>PdfExportProperties</code>.

You can also customize the chart width and grid width in the exported file using [chartWidth](https://ej2.syncfusion.com/vue/documentation/api/gantt/pdfExportProperties/fitToWidthSettings/isFitToWidth#chartWidth) and [gridWidth](https://ej2.syncfusion.com/vue/documentation/api/gantt/pdfExportProperties/fitToWidthSettings/isFitToWidth#gridWidth) by defining them as percentage values in string format.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/single-page/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/single-page/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/single-page" %}

## Multiple Gantt exporting in Vue Gantt Chart component

PDF export provides an option to export multiple Gantt Chart components into the same file. In the exported document, each Gantt will be placed on a new page of the same file.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/pdf-multiple-export-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/pdf-multiple-export-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/pdf-multiple-export-cs1" %}

## Applying Themes in PDF Export

PDF export provides an option to apply themes to the exported PDF document. To apply a theme, define the [theme](https://helpej2.syncfusion.com/vue/documentation/api/gantt/pdfExportProperties#theme) in [pdfExportProperties](https://helpej2.syncfusion.com/vue/documentation/api/gantt/pdfExportProperties).  
The available themes are:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-theme-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-theme-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-theme-cs1" %}