---
layout: post
title: Customize PDF Exporting in Vue Gantt Chart component | Syncfusion
description: Learn here all about Customize PDF exporting in Syncfusion Vue Gantt Chart component of Syncfusion Essential JS 2 and more.
control: Customize PDF exporting
platform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# To Customize PDF Export

PDF export provides an option to customize the mapping of Gantt to exported PDF document.

## File name for exported document

The file name of the exported PDF document can be specified using the [fileName](https://ej2.syncfusion.com/vue/documentation/api/gantt/pdfExportProperties#filename) property in [pdfExportProperties](https://ej2.syncfusion.com/vue/documentation/api/gantt/pdfExportProperties).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-cs1" %}

## How to change page orientation

The page orientation of the exported PDF document can be customized using the [pageOrientation](https://ej2.syncfusion.com/vue/documentation/api/gantt/pdfExportProperties#pageorientation) property in [pdfExportProperties](https://helpej2.syncfusion.com/vue/documentation/api/gantt/pdfExportProperties). By default, the exported PDF document is in Landscape orientation.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-cs2" %}

## How to change page size

Page size can be customized for the exported document using the  [pageSize](https://helpej2.syncfusion.com/vue/documentation/api/gantt/pdfExportProperties#pagesize) property in [pdfExportProperties](https://helpej2.syncfusion.com/vue/documentation/api/gantt/pdfExportProperties).
 The supported page sizes are:

* Letter
* Note
* Legal
* A0
* A1
* A2
* A3
* A5
* A6
* A7
* A8
* A9
* B0
* B1
* B2
* B3
* B4
* B5
* Archa
* Archb
* Archc
* Archd
* Arche
* Flsa
* HalfLetter
* Letter11x17
* Ledger

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-cs3" %}

## Export current view data

PDF export provides an option to export the current view data into PDF. To export current view data alone, define the [exportType](https://helpej2.syncfusion.com/vue/documentation/api/gantt/pdfExportProperties#exporttype) to `CurrentViewData`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-cs4" %}

## Export hidden columns

PDF export provides an option to export hidden columns of Gantt by defining the [includeHiddenColumn](https://helpej2.syncfusion.com/vue/documentation/api/gantt/pdfExportProperties#includehiddencolumn) to `true`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-cs6" %}

## Export predecessor lines

The visibility of predecessor lines in the exported PDF document can be controlled using the [showPredecessorLines](https://helpej2.syncfusion.com/vue/documentation/api/gantt/pdfExportProperties#showpredecessorlines) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-cs7" %}

## Show or hide columns on exported PDF

A hidden column can be shown, or a visible column can be hidden while exporting the Gantt chart by using the [toolbarClick](https://ej2.syncfusion.com/vue/documentation/api/gantt#toolbarclick) and [beforePdfExport](https://ej2.syncfusion.com/vue/documentation/api/gantt#beforepdfexport) events.

Columns can be shown or hidden by setting the `column.visible` property to true or false, respectively.

In the following example, the `Duration` column is initially hidden in the Gantt chart. During export, the `Duration` column is made visible and the StartDate column is hidden.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-cs8" %}

## Conditional cell formatting

TreeGrid cells in the exported PDF can be customized or formatted using the [pdfQueryCellInfo](https://ej2.syncfusion.com/vue/documentation/api/gantt#pdfquerycellinfo) event. This event allows formatting TreeGrid cells in the exported PDF document based on the column cell value.

In the following sample, the background color is set for `Progress` column in the exported document by using the `args.style.backgroundColor` property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-cs9" %}

## Timeline cell formatting

Timeline cells in the exported PDF document can be customized or formatted using the [pdfQueryTimelineCellInfo](https://ej2.syncfusion.com/vue/documentation/api/treegrid#pdfquerytimelinecellinfo) event.

In the following sample, the header background color is set for timeline cells in the exported document by using the `args.headerBackgroundColor` property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-cs10/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-cs10" %}

## Taskbar formatting

Taskbars in the exported PDF document can be customized or formatted using the [pdfQueryTaskbarInfo](https://ej2.syncfusion.com/vue/documentation/api/treegrid#pdfquerytaskbarinfo) event.

In the following sample, the taskbar background color is customized in the chart side of the exported document by using the `args.taskbar` property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-cs11/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-cs11" %}

## Customize Gantt Chart Appearance in PDF Export

PDF export allows to customize the Gantt chart's appearance in the exported PDF documents. To customize the appearance of Gantt charts in exported PDF documents, define [ganttStyle](https://ej2.syncfusion.com/vue/documentation/api/gantt/pdfExportProperties#ganttstyle) within [pdfExportProperties](https://ej2.syncfusion.com/vue/documentation/api/gantt/pdfExportProperties). By using `ganttStyle`, can customize `columnHeader`, `fontFamily`, `cell`, `taskbar`, `label`, `timeline`, `chartGridLineColor`, `connectorLineColor`, `criticalConnectorLineColor`, `footer`, `font`, `eventMarker` and `holiday` regardless of the theme. 

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-cs12/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-cs12" %}

## Customize Split Taskbar Segment Colors in PDF

The PDF export feature in the Gantt Chart allows you to customize the colors of split taskbar segments using the [taskSegmentStyles](https://ej2.syncfusion.com/vue/documentation/api/gantt/iTaskbarStyle#taskSegmentStyles) property inside the [pdfQueryTaskbarInfo](https://ej2.syncfusion.com/vue/documentation/api/gantt#pdfquerytaskbarinfo) event.

The [taskSegmentStyles](https://ej2.syncfusion.com/vue/documentation/api/gantt/iTaskbarStyle#taskSegmentStyles) property contains a collection of style properties for task segments. By specifying the index of corresponding segment index in this collection you can customize that segment taskbar color, progress color, and its border color.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-customize-segment-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-customize-segment-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-customize-segment-cs1" %}

## Exporting with templates

### Exporting with column template

The PDF export functionality allows to export Grid columns that include images, hyperlinks, and custom text to an PDF document using [pdfQueryCellInfo](https://helpej2.syncfusion.com/react/documentation/api/gantt/pdfQueryCellInfoEventArgs) event.

In the following sample, the hyperlinks and images are exported to PDF using [hyperlink](https://helpej2.syncfusion.com/vue/documentation/api/gantt/pdfQueryCellInfoEventArgs#hyperlink) and [image](https://helpej2.syncfusion.com/vue/documentation/api/gantt/pdfQueryCellInfoEventArgs#image) properties in the [pdfQueryCellInfo](https://helpej2.syncfusion.com/vue/documentation/api/gantt/pdfQueryCellInfoEventArgs) event.

>Note: PDF Export supports base64 string to export the images.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-column-template-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-column-template-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-column-template-cs1" %}

### Exporting with taskbar template

The PDF export functionality allows to export taskbar templates that include `images` and `text` to an PDF document using [pdfQueryTaskbarInfo](https://ej2.syncfusion.com/vue/documentation/api/gantt#pdfquerytaskbarinfo) event. Taskbars in the exported PDF document can be customized or formatted using the `pdfQueryTaskbarInfo` event for parent taskbar templates, taskbar templates and milestone templates.

In the following sample, taskbar templates with images and text are exported to PDF using [taskbarTemplate](https://ej2.syncfusion.com/vue/documentation/api/gantt/pdfQueryTaskbarInfoEventArgs#taskbarTemplate) properties in the [pdfQueryTaskbarInfo](https://ej2.syncfusion.com/vue/documentation/api/gantt#pdfquerytaskbarinfo) event.

>Note: PDF Export supports base64 string to export the images.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-taskbar-template-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-taskbar-template-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-taskbar-template-cs1" %}

### Exporting with task label template

The PDF export functionality allows to export task label template that include `images` and `text` to an PDF document using [pdfQueryTaskbarInfo](https://ej2.syncfusion.com/vue/documentation/api/gantt#pdfquerytaskbarinfo) event.

In the following sample, task label template with images and text are exported to PDF using [labelSettings](https://ej2.syncfusion.com/vue/documentation/api/gantt/pdfQueryTaskbarInfoEventArgs#labelSettings) properties in the [pdfQueryTaskbarInfo](https://ej2.syncfusion.com/vue/documentation/api/gantt#pdfquerytaskbarinfo) event.

>Note: PDF Export supports base64 string to export the images.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-tasklabel-template-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-tasklabel-template-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-tasklabel-template-cs1" %}

### Exporting with header template

The PDF export functionality allows to export header template that include `images` and `text` to an PDF document using [pdfColumnHeaderQueryCellInfo](https://ej2.syncfusion.com/vue/documentation/api/gantt/pdfColumnHeaderQueryCellInfoEventArgs) event.

In the following sample, header template with images and text are exported to PDF using [headerTemplate](https://ej2.syncfusion.com/vue/documentation/api/gantt/pdfColumnHeaderQueryCellInfoEventArgs#headerTemplate) properties in the [pdfColumnHeaderQueryCellInfo](https://ej2.syncfusion.com/vue/documentation/api/gantt/pdfColumnHeaderQueryCellInfoEventArgs) event.

>Note: PDF Export supports base64 string to export the images.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-header-template-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-header-template-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/pdf-export-header-template-cs1" %}