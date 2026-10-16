---
layout: post
title: Customize PDF Export in ASP.NET Core Gantt Chart | Syncfusion
description: Learn how to customize PDF export in Syncfusion ASP.NET Core Gantt Chart with file names, orientation, headers and footers.
keywords: asp.net core gantt customize pdf export, pdfexportproperties, beforepdfexport, pdfquerytaskbarinfo, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-core/gantt-chart/pdf-export/customize-pdf-export
platform: gantt-sdk
control: PDF Export - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
appliesto: UI Component Suite, Gantt SDK/overview
---

# Customizing PDF Export Layout and Content in ASP.NET Core Gantt Chart

Customizing PDF export in the [ASP.NET Core Gantt Chart](https://www.syncfusion.com/gantt-sdk/aspnet-core-gantt-chart) control allows tailoring exported documents for specific needs, using `pdfExportProperties` to adjust file names, page orientation, size, columns, headers, footers, timelines, and templates. Ensuring focused content like selected rows or styled taskbars, with `AllowPdfExport` enabled. Use the [`BeforePdfExport`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_BeforePdfExport) and [`PdfExportComplete`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_PdfExportComplete) events for pre-export and post-export modifications, and the [`PdfQueryTaskbarInfo`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_PdfQueryTaskbarInfo) event for taskbar styling, supporting RTL layouts via `EnableRtl`.

## Customize file name

Set the exported PDF file name using the `fileName` property in `pdfExportProperties`, such as **ProjectPlan.pdf**, for personalized document naming.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/pdf-export/filename/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="File-name.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/pdf-export/filename/file-name.cs %}
{% endhighlight %}
{% endtabs %}

## How to change page orientation

Adjust page orientation to **Portrait** or **Landscape** using the `pageOrientation` property in `pdfExportProperties`. By default, the exported PDF document is in Landscape orientation.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/pdf-export/pageorientation/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Page-orientation.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/pdf-export/pageorientation/page-orientation.cs %}
{% endhighlight %}
{% endtabs %}

## Customize page size

Page size can be customized for the exported document using the `pageSize` property in `pdfExportProperties`.
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

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/pdf-export/page-size/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Page-size.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/pdf-export/page-size/page-size.cs %}
{% endhighlight %}
{% endtabs %}

## Export current view data

PDF export provides an option to export the current view data into PDF. To export current view data alone, define the `exportType` to **CurrentViewData**.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/pdf-export/currentviewdata/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Current-view-data.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/pdf-export/currentviewdata/current-view-data.cs %}
{% endhighlight %}
{% endtabs %}

## Enable footer

By default, we render the default footer for a PDF file, this can be enabled or disabled by using the `enableFooter` property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/pdf-export/enablefooter/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Enable-footer.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/pdf-export/enablefooter/enable-footer.cs %}
{% endhighlight %}
{% endtabs %}

## Export hidden columns

PDF export provides an option to export hidden columns of Gantt by defining the `includeHiddenColumn` to **true**.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/pdf-export/hiddencolumns/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Hidden-columns.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/pdf-export/hiddencolumns/hidden-columns.cs %}
{% endhighlight %}
{% endtabs %}

## Export predecessor lines

The visibility of predecessor lines in the exported PDF document can be controlled using the `showPredecessorLines` property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/pdf-export/connectorlines/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Connector-lines.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/pdf-export/connectorlines/connector-lines.cs %}
{% endhighlight %}
{% endtabs %}

## Export specific columns

A hidden column can be shown, or a visible column can be hidden while exporting the Gantt chart by using the [`ToolbarClick`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_ToolbarClick) and [`BeforePdfExport`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_BeforePdfExport) events.

Columns can be shown or hidden by setting the `column.visible` property to **true** or **false**, respectively.

In the following example, the **Duration** column is initially hidden in the Gantt chart. During export, the **Duration** column is made visible and the StartDate column is hidden.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/pdf-export/showhidecolumns/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Showhide-columns.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/pdf-export/showhidecolumns/showhide-columns.cs %}
{% endhighlight %}
{% endtabs %}

## Conditional cell formatting

TreeGrid cells in the exported PDF can be customized or formatted using the [`PdfQueryCellInfo`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_PdfQueryCellInfo) event. This event allows formatting TreeGrid cells in the exported PDF document based on the column cell value.

In the following sample, the background color is set for **Progress** column in the exported document by using the `args.style.backgroundColor` property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/pdf-export/cellcustomization/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Cell-customization.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/pdf-export/cellcustomization/cell-customization.cs %}
{% endhighlight %}
{% endtabs %}

## Timeline cell formatting

Timeline cells in the exported PDF document can be customized or formatted using the [`PdfQueryTimelineCellInfo`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_PdfQueryTimelineCellInfo) event.

In the following sample, the header background color is set for timeline cells in the exported document by using the `args.headerBackgroundColor` property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/pdf-export/timelinecustomization/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Timeline-customization.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/pdf-export/timelinecustomization/timeline-customization.cs %}
{% endhighlight %}
{% endtabs %}

## Taskbar formatting

Taskbars in the exported PDF document can be customized or formatted using the [`PdfQueryTaskbarInfo`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_PdfQueryTaskbarInfo) event.

In the following sample, the taskbar background color is customized in the chart side of the exported document by using the `args.taskbar` property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/pdf-export/taskbarcustomization/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Taskbar-customization.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/pdf-export/taskbarcustomization/taskbar-customization.cs %}
{% endhighlight %}
{% endtabs %}

## Customize Gantt chart appearance in PDF export

PDF export allows to customize the Gantt chart's appearance in the exported PDF documents. To customize the appearance of Gantt charts in exported PDF documents, define `ganttStyle` within `pdfExportProperties`. By using `ganttStyle`, can customize `columnHeader`, `fontFamily`, `cell`, `taskbar`, `label`, `timeline`, `chartGridLineColor`, `connectorLineColor`, `criticalConnectorLineColor`, `footer`, `font`, `eventMarker` and `holiday` regardless of the theme.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/pdf-export/customtheme/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Custom-theme.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/pdf-export/customtheme/custom-theme.cs %}
{% endhighlight %}
{% endtabs %}

## Customize split taskbar segment colors in PDF

The PDF export feature in the Gantt Chart allows you to customize the colors of split taskbar segments using the `taskSegmentStyles` property inside the [`PdfQueryTaskbarInfo`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_PdfQueryTaskbarInfo) event.

The `taskSegmentStyles` property contains a collection of style properties for task segments. By specifying the index of corresponding segment index in this collection you can customize that segment taskbar color, progress color, and its border color.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/pdf-export/pdf-customize-segment/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="pdf-customize-segment.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/pdf-export/pdf-customize-segment/pdf-customize-segment.cs %}
{% endhighlight %}
{% endtabs %}

## Exporting with templates

### Exporting with column template

The PDF export functionality allows to export Grid columns that include images, hyperlinks, and custom text to an PDF document using the [`PdfQueryCellInfo`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_PdfQueryCellInfo) event.

In the following sample, the hyperlinks and images are exported to PDF using the `hyperlink` and `image` properties in the `PdfQueryCellInfo` event.

> Note: PDF Export supports base64 string to export the images.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/pdf-export/pdf-columnTemplate/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="PDF-columnTemplate.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/pdf-export/pdf-columnTemplate/pdf-columnTemplate.cs %}
{% endhighlight %}
{% endtabs %}

### Exporting with taskbar template

The PDF export functionality allows to export taskbar templates that include `images` and `text` to an PDF document using the [`PdfQueryTaskbarInfo`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_PdfQueryTaskbarInfo) event. Taskbars in the exported PDF document can be customized or formatted using the `PdfQueryTaskbarInfo` event for parent taskbar templates, taskbar templates and milestone templates.

In the following sample, taskbar templates with images and text are exported to PDF using the `taskbarTemplate` property in the `PdfQueryTaskbarInfo` event.

> Note: PDF Export supports base64 string to export the images.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/pdf-export/pdfexport-taskbar-Template/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="pdfexport-taskbar-Template.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/pdf-export/pdfexport-taskbar-Template/pdfexport-taskbar-Template.cs %}
{% endhighlight %}
{% endtabs %}

### Exporting with task label template

The PDF export functionality allows to export task label template that include `images` and `text` to an PDF document using the [`PdfQueryTaskbarInfo`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_PdfQueryTaskbarInfo) event.

In the following sample, task label template with images and text are exported to PDF using the `labelSettings` property in the `PdfQueryTaskbarInfo` event.

> Note: PDF Export supports base64 string to export the images.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/pdf-export/pdfexport-tasklabel-Template/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="pdfexport-tasklabel-Template.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/pdf-export/pdfexport-tasklabel-Template/pdfexport-tasklabel-Template.cs %}
{% endhighlight %}
{% endtabs %}

### Exporting with header template

The PDF export functionality allows to export header template that include `images` and `text` to an PDF document using the [`PdfColumnHeaderQueryCellInfo`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Gantt.Gantt.html#Syncfusion_EJ2_Gantt_Gantt_PdfColumnHeaderQueryCellInfo) event.

In the following sample, header template with images and text are exported to PDF using the `headerTemplate` property in the `PdfColumnHeaderQueryCellInfo` event.

> Note: PDF Export supports base64 string to export the images.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/pdf-export/pdfexport-header-Template/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="pdfexport-header-Template.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/gantt-chart/pdf-export/pdfexport-header-Template/pdfexport-header-Template.cs %}
{% endhighlight %}
{% endtabs %}

## See also

- [How to export Gantt chart to Excel?](https://help.syncfusion.com/gantt-sdk/asp-net-core/gantt-chart/excel-export/excel-export)
- [How to manage task dependencies?](https://help.syncfusion.com/gantt-sdk/asp-net-core/gantt-chart/task-dependency)
- [How to configure critical path?](https://help.syncfusion.com/gantt-sdk/asp-net-core/gantt-chart/criticalpath)