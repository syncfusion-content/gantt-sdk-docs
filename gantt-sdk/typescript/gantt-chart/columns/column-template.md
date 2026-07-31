---
layout: post
title: Column template in TypeScript Gantt Chart Control | Syncfusion
description: Learn here all about Column template in Syncfusion TypeScript Gantt Chart control of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Column template
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Column Template in TypeScript Gantt Chart Control

The Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript Gantt Chart control provides a [template](../../api/gantt/column#template) option that allows you to display custom elements in a column instead of the field value. This can be useful when you need to display images, buttons, or other custom content within a column.

> When using template columns, they are primarily meant for rendering custom content and may not provide built-in support for gantt actions like sorting, filtering, editing unless [field](../../api/gantt/column#field) property of the column is specified.

## Render image in a column

To render an image in a Gantt column, define a template using the [template](../../api/gantt/column#template) property. This property accepts either an HTML element or a function that returns HTML content.

The following example demonstrates how to render an image for the **Resources** field to display an image element.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs1" %}
{% endif %}

> The [template](../../api/gantt/column#template) option allows to define any HTML content within a column.

## Render hyperlink in a column

The Gantt Chart control supports hyperlink columns and allows routing on click using the `template` property. This is useful for displaying data that links to another page or website.

To configure a hyperlink column, define a [template](../../api/gantt/column#template) for the column and use an `<a>` tag inside it. The `onClick` handler is triggered when the hyperlink is clicked.

The example below demonstrates how to render a hyperlink for the **TaskName** field.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs2" %}
{% endif %}

> The `window.open()` method is a built-in JavaScript function that opens a new browser window or tab with the specified URL.

## Render other controls in a column

The column template has options to render a custom control in a gantt column instead of a field value.

### Render LineChart control in a column

The [LineChart](../../sparkline/getting-started) control from Syncfusion<sup style="font-size:70%">&reg;</sup> offers a clear and effective way to visualize and compare data trends over time using connected data points. It can be integrated into a Gantt column by configuring the [template](../../api/gantt/column#template) property in the column configuration.

The following example demonstrates how to render a `LineChart` for the **customData** field.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs3" %}
{% endif %}

### Render ColorPicker control in a column

The Syncfusion<sup style="font-size:70%">&reg;</sup> [ColorPicker](../../color-picker/getting-started) control offers a user-friendly interface for selecting colors from a predefined palette or custom options. It is useful in scenarios like theme selection or dynamic element styling.

To render the ColorPicker inside a Gantt column, configure the [template](../../api/gantt/column#template) property in the column definition.

The following example demonstrates how to render a `ColorPicker` for the **Change color** column.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs4" %}
{% endif %}

### Render DropDownList control in a column

To render a `DropDownList` control in a Gantt column, define a template using the [template](../../api/gantt/column#template) property in the column configuration.

The following example demonstrates how to render the [DropDownList](../../drop-down-list/getting-started) control in the **Task Priority** column.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs5" %}
{% endif %}

### Render Chip control in a column

The Gantt chart control supports rendering the Syncfusion<sup style="font-size:70%">&reg;</sup> [Chips](../../chips/getting-started) control in a column using the [template](../../api/gantt/column#template) property. This is useful for displaying data that benefits from a chip-style visual representation.

The following example demonstrates how to render the Chips control in the **TaskName** column.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs6" %}
{% endif %}

### Render RadioButton in a column

The Syncfusion<sup style="font-size:70%">&reg;</sup> [RadioButton](../../radio-button/getting-started) control can be rendered in a grid column to display selection options like order statuses or approval choices.

The following example demonstrates rendering `RadioButton` controls in the **Order Status** column.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs7" %}
{% endif %}

## Using condition template

The conditional column [template](../../api/gantt/column#template) allows rendering elements based on specific conditions.

The following example code demonstrates how to render a checkbox only when the **Discontinued** field is **true**. This is achieved by applying a conditional check inside the template function:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs8" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs8" %}
{% endif %}

> You can use any template element or custom control instead of the checkbox in the conditional template based on your requirement.

## How to get the row object by clicking on the template element

The Gantt chart control allows retrieving the row object of a selected record when a [template](../../api/gantt/column#template) element is clicked. This is useful for performing custom actions based on the selected data.

In the following example, a button is rendered in the **Task Data** column. The `click` event is bound to the `showDetails` method, which receives the data object from the template variable, enabling access to the selected row and displaying it in a dialog popup.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs9" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs9" %}
{% endif %}

## Use custom helper inside the template

The Syncfusion<sup style="font-size:70%">&reg;</sup> Gantt chart control supports using custom helper functions within the `template` of a column. This allows you to build advanced templates by incorporating logic beyond the default `template` syntax.

To use a custom helper function, define it in the template context using the `let` keyword. This creates a reference to the function that can be used within the template.

The following example demonstrates how to use a custom helper function inside the `template` property for the **Progress** column.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs10" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs10" %}
{% endif %}

> Custom helpers can only be used inside the template of the column.

## Render a control in the template property using event

You can render a control inside a Gantt chart cell by setting the `template` property and using the [queryCellInfo](../../gantt/events#querycellinfo) event to display it before the cell is rendered.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs11" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs11/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/columnTemplate-cs11" %}
{% endif %}
