---
layout: post
title: Column template in React Gantt Chart Component | Syncfusion
description: Learn here all about Column template in Syncfusion React Gantt Chart component of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Column template 
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Column Template in React Gantt Chart Component

The [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart) component provides a [template](https://ej2.syncfusion.com/react/documentation/api/gantt/column#template) option that allows you to display custom elements in a column instead of the field value. This can be useful when you need to display images, buttons, or other custom content within a column.

> When using template columns, they are primarily meant for rendering custom content and may not provide built-in support for gantt actions like sorting, filtering, editing unless [field](https://ej2.syncfusion.com/react/documentation/api/gantt/column#field) property of the column is specified.

## Render image in a column

To render an image in a Gantt column, define a template using the [template](https://ej2.syncfusion.com/react/documentation/api/gantt/column#template) property. This property accepts either an HTML element or a function that returns HTML content.

The following example demonstrates how to render an image for the **Resources** field to display an image element.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { data, ProjectResources } from './datasource';

function App() {
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
        resourceInfo: 'resources'
    };
    const splitterSettings = {
        columnIndex: 7
    };
    const resourceFields = {
        id: 'resourceID',
        name: 'resourceName',
    };
    function ganttTemplate(props) {
        var src = props.TaskID + '.png';
        return (<div className='image' >
            <img src={src} style={{ height: '42px' }} />
        </div>);
    };
    const template = ganttTemplate;
    return <GanttComponent dataSource={data} rowHeight={60} taskFields={taskFields}
        splitterSettings={splitterSettings} resourceFields={resourceFields} resources={ProjectResources} height='450px'>
        <ColumnsDirective>
            <ColumnDirective field='TaskID'></ColumnDirective>
            <ColumnDirective field='resources' headerText='Resources' width='250' template={template} textAlign='Center'></ColumnDirective>
            <ColumnDirective field='TaskName'></ColumnDirective>
            <ColumnDirective field='StartDate'></ColumnDirective>
            <ColumnDirective field='Duration'></ColumnDirective>
            <ColumnDirective field='Progress'></ColumnDirective>
        </ColumnsDirective>
    </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, SplitterSettings, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { data, ProjectResources } from './datasource';

function App() {
    const taskFields: any = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
        resourceInfo: 'resources'
    };
    const splitterSettings: SplitterSettings = {
        columnIndex: 7
    };
    const resourceFields: any = {
        id: 'resourceID',
        name: 'resourceName',
    };
    function ganttTemplate(props: any) {
        var src = props.TaskID + '.png';
        return (<div className='image' >
            <img src={src} style={{ height: '42px' }} />
        </div>);
    };
    const template: any = ganttTemplate;
    return <GanttComponent dataSource={data} rowHeight={60} taskFields={taskFields}
        splitterSettings={splitterSettings} resourceFields={resourceFields} resources={ProjectResources} height='450px'>
        <ColumnsDirective>
            <ColumnDirective field='TaskID'></ColumnDirective>
            <ColumnDirective field='resources' headerText='Resources' width='250' template={template} textAlign='Center'></ColumnDirective>
            <ColumnDirective field='TaskName'></ColumnDirective>
            <ColumnDirective field='StartDate'></ColumnDirective>
            <ColumnDirective field='Duration'></ColumnDirective>
            <ColumnDirective field='Progress'></ColumnDirective>
        </ColumnsDirective>
    </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columntemplate-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/columntemplate-cs1" %}

> The [template](https://ej2.syncfusion.com/react/documentation/api/gantt/column#template) option allows to define any HTML content within a column.

## Render hyperlink in a column

The Gantt Chart component supports hyperlink columns and allows routing on click using the `template` property. This is useful for displaying data that links to another page or website.

To configure a hyperlink column, define a [template](https://ej2.syncfusion.com/react/documentation/api/gantt/column#template) for the column and use an `<a>` tag inside it. The `onClick` handler is triggered when the hyperlink is clicked.

The example below demonstrates how to render a hyperlink for the **TaskName** field.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columntemplate-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columntemplate-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columntemplate-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/columntemplate-cs2" %}

>The `window.open()` method is a built-in JavaScript function that opens a new browser window or tab with the specified URL.

## Render other components in a column

The column template has options to render a custom component in a gantt column instead of a field value.

### Render LineChart component in a column

The [LineChart](https://ej2.syncfusion.com/react/documentation/sparkline/getting-started) component from Syncfusion<sup style="font-size:70%">&reg;</sup> offers a clear and effective way to visualize and compare data trends over time using connected data points. It can be integrated into a Gantt column by configuring the [template](https://ej2.syncfusion.com/react/documentation/api/gantt/column#template) property in the column configuration.

The following example demonstrates how to render a `LineChart` for the **customData** field.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columntemplate-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columntemplate-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columntemplate-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/columntemplate-cs3" %}

### Render ColorPicker component in a column

The Syncfusion<sup style="font-size:70%">&reg;</sup> [ColorPicker](https://ej2.syncfusion.com/react/documentation/color-picker/getting-started) component offers a user-friendly interface for selecting colors from a predefined palette or custom options. It is useful in scenarios like theme selection or dynamic element styling.

To render the ColorPicker inside a Gantt column, configure the [template](https://ej2.syncfusion.com/react/documentation/api/gantt/column#template) property in the column definition.

The following example demonstrates how to render a `ColorPicker` for the **Change color** column.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columntemplate-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columntemplate-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columntemplate-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/columntemplate-cs4" %}

### Render DropDownList component in a column

To render a `DropDownList` component in a Gantt column, define a template using the [template](https://ej2.syncfusion.com/react/documentation/api/gantt/column#template) property in the column configuration.

The following example demonstrates how to render the [DropDownList](https://ej2.syncfusion.com/react/documentation/drop-down-list/getting-started) component in the **Task Priority** column.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columntemplate-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columntemplate-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columntemplate-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/columntemplate-cs5" %}

### Render Chip component in a column

The Gantt chart component supports rendering the Syncfusion<sup style="font-size:70%">&reg;</sup> [Chips](https://ej2.syncfusion.com/react/documentation/chips/getting-started) component in a column using the [template](https://ej2.syncfusion.com/react/documentation/api/gantt/column#template) property. This is useful for displaying data that benefits from a chip-style visual representation.

The following example demonstrates how to render the Chips component in the **TaskName** column.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columntemplate-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columntemplate-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columntemplate-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/columntemplate-cs6" %}

### Render RadioButton in a column

The Syncfusion<sup style="font-size:70%">&reg;</sup> [RadioButton](https://ej2.syncfusion.com/react/documentation/radio-button/getting-started) component can be rendered in a grid column to display selection options like order statuses or approval choices.

The following example demonstrates rendering `RadioButton` components in the **Order Status** column.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columntemplate-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columntemplate-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columntemplate-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/columntemplate-cs7" %}

## Using condition template

The conditional column [template](https://ej2.syncfusion.com/react/documentation/api/gantt/column#template) allows rendering elements based on specific conditions.

The following example code demonstrates how to render a checkbox only when the **Discontinued** field is **true**. This is achieved by applying a conditional check inside the template function:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columntemplate-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columntemplate-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columntemplate-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/columntemplate-cs8" %}

>You can use any template element or custom component instead of the checkbox in the conditional template based on your requirement.

## How to get the row object by clicking on the template element

The Gantt chart component allows retrieving the row object of a selected record when a [template](https://ej2.syncfusion.com/react/documentation/api/gantt/column#template) element is clicked. This is useful for performing custom actions based on the selected data.

In the following example, a button is rendered in the **Task Data** column. The `click` event is bound to the `showDetails` method, which receives the data object from the template variable, enabling access to the selected row and displaying it in a dialog popup.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columntemplate-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columntemplate-cs9/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columntemplate-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/columntemplate-cs9" %}

## Use custom helper inside the template

The Gantt chart component supports using custom helper functions within the `template` of a column. This allows you to build advanced templates by incorporating logic beyond the default `template` syntax.

To use a custom helper function, define it in the template context using the `let` keyword. This creates a reference to the function that can be used within the template.

The following example demonstrates how to use a custom helper function inside the `template` property for the **Progress** column.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columntemplate-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columntemplate-cs10/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columntemplate-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/columntemplate-cs10" %}

> Custom helpers can only be used inside the template of the column.

## Render a component in the template property using event

You can render a component inside a Gantt chart cell by setting the `template` property and using the [queryCellInfo](https://helpej2.syncfusion.com/react/documentation/gantt/events#querycellinfo) event to display it before the cell is rendered.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columntemplate-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columntemplate-cs11/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columntemplate-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/columntemplate-cs11" %}