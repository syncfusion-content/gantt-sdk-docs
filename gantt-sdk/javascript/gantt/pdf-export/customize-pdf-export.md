---
layout: post
title: Customize PDF Exporting in JavaScript Gantt Chart | Syncfusion
description: Learn here all about customize PDF exporting in Syncfusion JavaScript Gantt Chart control of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Customize PDF exporting
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# To customize PDF export

Customizing PDF export in the [JavaScript Gantt Chart](https://www.syncfusion.com/javascript-ui-controls/js-gantt-chart) control allows tailoring exported documents for specific needs, using [PdfExportProperties](../../api/gantt/pdfexportproperties) to adjust file names, page orientation, size, columns, headers, footers, timelines, and templates. Ensuring focused content like selected rows or styled taskbars, with the `PdfExport` module injected and [allowPdfExport](../../api/gantt#allowpdfexport) enabled. Use [beforePdfExport](../../gantt/events#beforepdfexport) and [pdfExportComplete](../../gantt/events#pdfexportcomplete) events for pre-export and post-export modifications, and [pdfQueryTaskbarInfo](../../gantt/events#pdfquerytaskbarinfo) for taskbar styling, supporting RTL layouts via [enableRtl](../../api/gantt#enablertl).

## Customize file name

Set the exported PDF file name using the [fileName](../../api/gantt/pdfexportproperties#filename) property in [PdfExportProperties](../../api/gantt/pdfexportproperties), such as **ProjectPlan.pdf**, for personalized document naming.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs1" %}
{% endif %}

## How to change page orientation

Adjust page orientation to **Portrait** or **Landscape** using the [pageOrientation](../../api/gantt/pdfexportproperties#pageorientation) property in [PdfExportProperties](../../api/gantt/pdfexportproperties). By default, the exported PDF document is in Landscape orientation.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs2" %}
{% endif %}

## Customize page size

Page size can be customized for the exported document using the [pageSize](../../api/gantt/pdfexportproperties#pagesize) property in [pdfExportProperties](../../api/gantt/pdfexportproperties).
The supported page sizes are:

- Letter
- Note
- Legal
- A0 to A9
- B0 to B5
- Archa
- Archb
- Archc
- Archd
- Arche
- Flsa
- HalfLetter
- Letter11x17
- Ledger

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs3" %}
{% endif %}

## Export current view data

PDF export provides an option to export the current view data into PDF. To export current view data alone, define the [exportType](../../api/gantt/pdfexportproperties#exporttype) to **CurrentViewData**.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs4" %}
{% endif %}

## Enable footer

By default, we render the default footer for a PDF file, this can be enabled or disabled by using the [enableFooter](../../api/gantt/pdfexportproperties#enablefooter) property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs5" %}
{% endif %}

## Export hidden columns

PDF export provides an option to export hidden columns of Gantt by defining the [includeHiddenColumn](../../api/gantt/pdfexportproperties#includehiddencolumn) to **true**.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs6" %}
{% endif %}

## Export predecessor lines

The visibility of predecessor lines in the exported PDF document can be controlled using the [showPredecessorLines](../../api/gantt/pdfexportproperties#showpredecessorlines) property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs7" %}
{% endif %}

## Export specific columns

A hidden column can be shown, or a visible column can be hidden while exporting the Gantt chart by using the [toolbarClick](../../gantt/events#toolbarclick) and [beforePdfExport](../../gantt/events#beforepdfexport) events.

Columns can be shown or hidden by setting the `column.visible` property to **true** or **false**, respectively.

In the following example, the **Duration** column is initially hidden in the Gantt chart. During export, the **Duration** column is made visible and the **StartDate** column is hidden.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs8" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs8" %}
{% endif %}

## Conditional cell formatting

TreeGrid cells in the exported PDF can be customized or formatted using the [pdfQueryCellInfo](../../gantt/events#pdfquerycellinfo) event. This event allows formatting TreeGrid cells in the exported PDF document based on the column cell value.

In the following sample, the background color is set for **Progress** column in the exported document by using the `args.style.backgroundColor` property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs9" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs9" %}
{% endif %}

## Timeline cell formatting

Timeline cells in the exported PDF document can be customized or formatted using the [pdfQueryTimelineCellInfo](../../gantt/events#pdfquerytimelinecellinfo) event.

In the following sample, the header background color is set for timeline cells in the exported document by using the `args.timelineCell.backgroundColor` property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs10" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs10" %}
{% endif %}

## Taskbar formatting

Taskbars in the exported PDF document can be customized or formatted using the [pdfQueryTaskbarInfo](../../gantt/events#pdfquerytaskbarinfo) event.

In the following sample, the taskbar background color is customized in the chart side of the exported document by using the `args.taskbar` property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs11" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs11/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs11" %}
{% endif %}

## Customize Gantt chart appearance in PDF export

PDF export allows to customize the Gantt chart's appearance in the exported PDF documents. To customize the appearance of Gantt charts in exported PDF documents, define [ganttStyle](../../api/gantt/pdfexportproperties#ganttstyle) within [pdfExportProperties](../../api/gantt/pdfexportproperties). By using `ganttStyle`, can customize `columnHeader`, `fontFamily`, `cell`, `taskbar`, `label`, `timeline`, `chartGridLineColor`, `connectorLineColor`, `criticalConnectorLineColor`, `footer`, `font`, `eventMarker` and `holiday` regardless of the theme.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs13/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs13/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs13" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs13/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs13/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs13" %}
{% endif %}

## Customize split taskbar segment colors in PDF

The PDF export feature in the Gantt Chart allows you to customize the colors of split taskbar segments using the [taskSegmentStyles](../../api/gantt/itaskbarstyle#tasksegmentstyles) property inside the [pdfQueryTaskbarInfo](../../api/gantt/index-default#pdfquerytaskbarinfo) event.

The [taskSegmentStyles](../../api/gantt/itaskbarstyle#tasksegmentstyles) property contains a collection of style properties for task segments. By specifying the index of corresponding segment index in this collection you can customize that segment taskbar color, progress color, and its border color.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs17/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs17/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs17" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs17/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs17/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/pdf-export-cs17" %}
{% endif %}

## Exporting with templates

### Exporting with column template

The PDF export functionality allows to export Grid columns that include images, hyperlinks, and custom text to an PDF document using [pdfQueryCellInfo](../../api/gantt/pdfquerycellinfoeventargs) event.

In the following sample, the hyperlinks and images are exported to PDF using [hyperlink](../../api/gantt/pdfquerycellinfoeventargs#hyperlink) and [image](../../api/gantt/pdfquerycellinfoeventargs#image) properties in the [pdfQueryCellInfo](../../api/gantt/pdfquerycellinfoeventargs) event.

> Note: PDF Export supports base64 string to export the images.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-column-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-column-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/pdf-export-column-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-column-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-column-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/pdf-export-column-template-cs1" %}
{% endif %}

### Exporting with taskbar template

The PDF export functionality allows to export taskbar templates that include `images` and `text` to an PDF document using [pdfQueryTaskbarInfo](../../api/gantt#pdfquerytaskbarinfo) event. Taskbars in the exported PDF document can be customized or formatted using the `pdfQueryTaskbarInfo` event for parent taskbar templates, taskbar templates and milestone templates.

In the following sample, taskbar templates with images and text are exported to PDF using [taskbarTemplate](../../api/gantt/pdfquerytaskbarinfoeventargs#taskbartemplate) properties in the [pdfQueryTaskbarInfo](../../api/gantt#pdfquerytaskbarinfo) event.

> Note: PDF Export supports base64 string to export the images.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-taskbar-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-taskbar-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/pdf-export-taskbar-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-taskbar-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-taskbar-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/pdf-export-taskbar-template-cs1" %}
{% endif %}

### Exporting with task label template

The PDF export functionality allows to export task label template that include `images` and `text` to an PDF document using [pdfQueryTaskbarInfo](../../api/gantt#pdfquerytaskbarinfo) event.

In the following sample, task label template with images and text are exported to PDF using [labelSettings](../../api/gantt/pdfquerytaskbarinfoeventargs#labelsettings) properties in the [pdfQueryTaskbarInfo](../../api/gantt#pdfquerytaskbarinfo) event.

> Note: PDF Export supports base64 string to export the images.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-tasklabel-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-tasklabel-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/pdf-export-tasklabel-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-tasklabel-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-tasklabel-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/pdf-export-tasklabel-template-cs1" %}
{% endif %}

### Exporting with header template

The PDF export functionality allows to export header template that include `images` and `text` to an PDF document using [pdfColumnHeaderQueryCellInfo](../../api/gantt/pdfColumnHeaderQueryCellInfoEventArgs) event.

In the following sample, header template with images and text are exported to PDF using [headerTemplate](../../api/gantt/pdfcolumnheaderquerycellinfoeventargs#headertemplate) properties in the [pdfColumnHeaderQueryCellInfo](../../api/gantt/pdfcolumnheaderquerycellinfoeventargs) event.

> Note: PDF Export supports base64 string to export the images.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-header-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-header-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/pdf-export-header-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-header-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt/pdf-export-header-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt/pdf-export-header-template-cs1" %}
{% endif %}

## See also

- [How to export Gantt chart to Excel?](../../gantt/excel-export/excel-export)
- [How to manage task dependencies?](../../gantt/task-dependency)
- [How to configure critical path?](../../gantt/critical-path)
