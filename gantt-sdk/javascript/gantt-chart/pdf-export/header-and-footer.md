---
layout: post
title: PDF Headers and Footers in Gantt Chart | Syncfusion
description: Learn how to customize headers and footers in PDF exports of Syncfusion JavaScript Gantt Chart with text, images, page numbers, and lines.
keywords: javascript gantt pdf header footer, page header, page footer, pdf customization, page numbers, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/javascript/gantt-chart/pdf-export/header-and-footer
platform: gantt-sdk
control: PDF Headers Footers - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Adding Headers and Footers to PDF Exports in JavaScript Gantt Chart

Customizing headers and footers in PDF exports of the [JavaScript Gantt Chart](https://www.syncfusion.com/javascript-ui-controls/js-gantt-chart) component allows adding text, lines, page numbers, and images to enhance document professionalism for projects. Use [PdfExportProperties](https://ej2.syncfusion.com/javascript/documentation/api/gantt/pdfExportProperties) with [header](https://ej2.syncfusion.com/javascript/documentation/api/gantt/pdfHeader) and [footer](https://ej2.syncfusion.com/javascript/documentation/api/gantt/pdfFooter) to define content arrays, specifying `type` (e.g., Text, Line), `value`, `position`, `style`, or `src` for images with `base64` encoding. Disable footers via [enableFooter](https://ej2.syncfusion.com/javascript/documentation/api/gantt/pdfExportProperties#enablefooter) set to **false**, ensuring tailored outputs with the `PdfExport` module injected and [allowPdfExport](https://ej2.syncfusion.com/javascript/documentation/api/gantt#allowpdfexport) enabled.

## Write a text in header and footer

Customize text in headers or footers using the [header](https://ej2.syncfusion.com/javascript/documentation/api/gantt/pdfHeader) or [footer](https://ej2.syncfusion.com/javascript/documentation/api/gantt/pdfFooter) properties in [PdfExportProperties](https://ej2.syncfusion.com/javascript/documentation/api/gantt/pdfExportProperties). Set `type` to **Text**, define `value` for the text, `position` for x/y coordinates, and `style` for color or font size.

```js
let exportProperties = {
  header: {
    fromTop: 0,
    height: 130,
    contents: [
      {
        type: "Text",
        value: "INVOICE",
        position: { x: 380, y: 0 },
        style: { textBrushColor: "#C25050", fontSize: 25 },
      },
    ],
  },
};
```

## Draw a line in header and footer

Customize lines in headers or footers using the [header](https://ej2.syncfusion.com/javascript/documentation/api/gantt/pdfHeader) or [footer](https://ej2.syncfusion.com/javascript/documentation/api/gantt/pdfFooter) properties in [PdfExportProperties](https://ej2.syncfusion.com/javascript/documentation/api/gantt/pdfExportProperties). Set `type` to **Line**, define `points` for start/end coordinates, `pageNumberType` for position, and `style` for color, width, or dash style.

```js
let exportProperties = {
  header: {
    fromTop: 0,
    height: 130,
    contents: [
      {
        type: "Line",
        style: { penColor: "#000080", penSize: 2, dashStyle: "Solid" },
        points: { x1: 0, y1: 4, x2: 685, y2: 4 },
      },
    ],
  },
};
```

## Draw a page number in header and footer

Add page numbers to headers or footers using the [header](https://ej2.syncfusion.com/javascript/documentation/api/gantt/pdfHeader) or [footer](https://ej2.syncfusion.com/javascript/documentation/api/gantt/pdfFooter) properties in [PdfExportProperties](https://ej2.syncfusion.com/javascript/documentation/api/gantt/pdfExportProperties). Set `type` to **PageNumber**, define `format` for display (e.g., 'Page {$current} of {$total}'), `position` for x/y coordinates, and `style` for color or font size.

```js
let exportProperties = {
  footer: {
    fromBottom: 0,
    height: 20,
    contents: [
      {
        type: "PageNumber",
        pageNumberType: "Arabic",
        format: "Page {$current} of {$total}",
        position: { x: 0, y: 0 },
        style: { textBrushColor: "#ffff80", fontSize: 15, hAlign: "Center" },
      },
    ],
  },
};
```

## Insert an image in header and footer

Add images to headers or footers using the [header](https://ej2.syncfusion.com/javascript/documentation/api/gantt/pdfHeader) or [footer](https://ej2.syncfusion.com/javascript/documentation/api/gantt/pdfFooter) properties in [PdfExportProperties](https://ej2.syncfusion.com/javascript/documentation/api/gantt/pdfExportProperties). Set `type` to **Image**, define `src` as a `base64` string, `position` for x/y coordinates, and `size` for height/width.

Note: PDF Export supports base64 string to export the images.

```js
// Replace it with a valid Base64-encoded image.
let image = "/9j/4AAQSkZJRgABAQEAeAB4AAD...";

let exportProperties = {
  header: {
    fromTop: 0,
    height: 130,
    contents: [
      {
        type: "Image",
        src: image,
        position: { x: 40, y: 10 },
        size: { height: 100, width: 250 },
      },
    ],
  },
};
```

The below code illustrates the pdf export customization.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/pdf-export-customization-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/pdf-export-customization-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/pdf-export-customization-cs1" %}

## Disable footer

By default, the exported PDF file includes a footer. The footer can be disabled by setting the [enableFooter](https://ej2.syncfusion.com/javascript/documentation/api/gantt/pdfexportproperties#enablefooter) property to **false**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/pdf-export-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/pdf-export-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/pdf-export-cs5" %}

## Export Gantt Chart with external form elements in PDF

The Gantt Chart allows you to export external form elements, such as custom headers, footers, and user-entered form data, along with the Gantt content in a PDF document. This can be achieved by configuring the `header` and `footer` properties in the `pdfExportProperties` object and passing the required content during PDF export.

The following example demonstrates how to export the Gantt Chart along with external form element values in the PDF document.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/pdf-export-form/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/pdf-export-form/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/pdf-export-form" %}

## See also

- [How to export to PDF?](https://ej2.syncfusion.com/javascript/documentation/gantt/pdf-export/pdf-export)
- [How to customize PDF export?](https://ej2.syncfusion.com/javascript/documentation/gantt/pdf-export/customize-pdf-export)
- [How to manage task dependencies?](https://ej2.syncfusion.com/javascript/documentation/gantt/task-dependency)
