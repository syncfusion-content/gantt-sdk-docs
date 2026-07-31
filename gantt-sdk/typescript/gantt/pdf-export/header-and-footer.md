---
layout: post
title: PDF Headers and Footers in TypeScript Gantt Chart | Syncfusion
description: Learn how to customize headers and footers in PDF exports of the Syncfusion TypeScript Gantt Chart control with text, lines, page numbers, and images.
platform: gantt-sdk
control: Header and Footer of PDF export 
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Customizing header and footer of PDF export in TypeScript Gantt control

PDF export provides an option to specify and customize text, page number, line and image in header and footer of exported PDF document by using [pdfExportProperties](../../api/gantt/pdfexportproperties).

## Write a text in header and footer

This functionality helps to customize the text that appears in the header or footer sections of a PDF document. Text can be added to [header](../../api/gantt/pdfHeader) or [footer](../../api/gantt/pdfFooter) of exported PDF document by using [pdfExportProperties](../../api/gantt/pdfexportproperties).

* `type` property in the content array indicates the content type, such as 'Text'.
* `Value` property determines the text. 
* `Position` property determines the horizontal and vertical positions of the text element.
* `style` property define the visual styling properties for the text element

{% if page.publishingplatform == "typescript" %}

let exportProperties: PdfExportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
                type: 'Text',
                value: 'INVOICE',
                position: { x: 380, y: 0 },
                style: { textBrushColor: '#C25050', fontSize: 25 }
            }
        ]
    }
};

{% elsif page.publishingplatform == "javascript" %}

let exportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
                type: 'Text',
                value: 'INVOICE',
                position: { x: 380, y: 0 },
                style: { textBrushColor: '#C25050', fontSize: 25 }
            }
        ]
    }
};

{% endif %}

## Draw a line in header and footer

This functionality helps to customize the line that appears in the header or footer sections of the PDF document. A line can be added to [header](../../api/gantt/pdfHeader) or [footer](../../api/gantt/pdfFooter) of the exported PDF document by using [pdfExportProperties](../../api/gantt/pdfexportproperties).

* `type` determines content type, such as 'Line'.
* `style` is used to set properties like the color (penColor), size (penSize), and style (dashStyle) of the line.
* `points` specifies the coordinates for the start and end points of the line.

Supported line styles:
* dash
* dot
* dashdot
* dashdotdot
* solid

{% if page.publishingplatform == "typescript" %}

let exportProperties: PdfExportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
                type: 'Line',
                style: { penColor: '#000080', penSize: 2, dashStyle: 'Solid' },
                points: { x1: 0, y1: 4, x2: 685, y2: 4 }
            }
        ]
    }
};

{% elsif page.publishingplatform == "javascript" %}

let exportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
                type: 'Line',
                style: { penColor: '#000080', penSize: 2, dashStyle: 'Solid' },
                points: { x1: 0, y1: 4, x2: 685, y2: 4 }
            }
        ]
    }
};

{% endif %}

## Add page number in header and footer

This feature allows to customize the page number that appears in the header or footer sections of the PDF document. Page numbers can be added in [header](../../api/gantt/pdfHeader) or [footer](../../api/gantt/pdfFooter) of the exported PDF document by using [pdfExportProperties](../../api/gantt/pdfexportproperties).

* `type` indicates that the content is a page number.
* `pageNumberType` specifies the type of numbering to be used.
* `format` is an optional attribute that allows you to customize the text format of the page number.
* `position` defines the coordinates (x, y) where the page number will be located.
* `style` sets the styling properties of the page number text, such as color (textBrushColor), font size (fontSize), and horizontal alignment (hAlign).

Supported page number types:
* LowerLatin - a, b, c,
* UpperLatin - A, B, C,
* LowerRoman - i, ii, iii,
* UpperRoman - I, II, III,
* Number - 1,2,3.

{% if page.publishingplatform == "typescript" %}

let exportProperties: PdfExportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
                type: 'PageNumber',
                pageNumberType: 'Arabic',
                format: 'Page {$current} of {$total}',
                position: { x: 0, y: 25 },
                style: { textBrushColor: '#ffff80', fontSize: 15, hAlign: 'Center' }
            }
        ]
    }
};

{% elsif page.publishingplatform == "javascript" %}

let exportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
                type: 'PageNumber',
                pageNumberType: 'Arabic',
                format: 'Page {$current} of {$total}',
                position: { x: 0, y: 25 },
                style: { textBrushColor: '#ffff80', fontSize: 15, hAlign: 'Center' }
            }
        ]
    }
};

{% endif %}

## Insert an image in header and footer

This feature allows to customize the image that appears in the header or footer sections of the PDF document. Image (Base64 string) can be added in the exported document in [header](../../api/gantt/pdfHeader) or [footer](../../api/gantt/pdfFooter) of the exported PDF document by using [pdfExportProperties](../../api/gantt/pdfexportproperties).

* `type` indicates that the content is an image.
* `src` specifies the source of the image, which should be Base64 string. 
* `Position` determines the horizontal and vertical positions of the image will be located.
* `size` sets the dimensions of the image.

>Note: PDF Export supports base64 string to export the images.

{% if page.publishingplatform == "typescript" %}

// Replace it with a valid Base64-encoded image.
let image: string = "/9j/4AAQSkZJRgABAQEAeAB4AAD...";

let exportProperties: PdfExportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
                type: 'Image',
                src: image,
                position: { x: 40, y: 10 },
                size: { height: 100, width: 250 }
            }
        ]
    }
};

{% elsif page.publishingplatform == "javascript" %}

// Replace it with a valid Base64-encoded image.
let image = "/9j/4AAQSkZJRgABAQEAeAB4AAD...";

let exportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
                type: 'Image',
                src: image,
                position: { x: 40, y: 10 },
                size: { height: 100, width: 250 }
            }
        ]
    }
};

{% endif %}

The below code illustrates the pdf export customization.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/pdf-export-customization-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/pdf-export-customization-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/pdf-export-customization-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/pdf-export-customization-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/pdf-export-customization-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/pdf-export-customization-cs1" %}
{% endif %}

## Disable footer

By default, the exported PDF file includes a footer. The footer can be disabled by setting the [enableFooter](../../api/gantt/pdfexportproperties#enablefooter) property to `false`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/pdf-export-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/pdf-export-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/pdf-export-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/pdf-export-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/pdf-export-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/pdf-export-cs5" %}
{% endif %}

## See also
- [How to export to PDF?](../../pdf-export/pdf-export)
- [How to customize PDF export?](../../pdf-export/customize-pdf-export)
- [How to manage task dependencies?](../../task-dependency)