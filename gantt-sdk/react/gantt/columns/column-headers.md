---
layout: post
title: Headers in React Gantt Chart Component | Syncfusion
description: Learn here all about Headers in Syncfusion React Gantt Chart component of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Headers
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Column Headers in React Gantt Chart Component

The [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart) component provides flexible options to manage and customize column headers. You can define static header text, apply custom templates, align header content, and even update header titles dynamically through events or methods. These features help tailor the Gantt chart to match specific UI requirements and improve readability.

## Set custom header text

By default, column headers in the Gantt chart display the value defined in the [field](https://ej2.syncfusion.com/react/documentation/api/gantt/column#field) property. To customize the header title, use the [headerText](https://ej2.syncfusion.com/react/documentation/api/gantt/column#headertext) property within the column configuration. This allows you to define meaningful labels for each column as needed.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs1" %}

> * The `headerText` property is optional. If not defined, the column's field value will be used as the header text by default.
> * To apply custom HTML content to the header cell, use the [headerTemplate](https://ej2.syncfusion.com/react/documentation/api/gantt/column#headertemplate) property.

## Customize header using template

You can customize the column header in the Gantt chart using the [headerTemplate](https://ej2.syncfusion.com/react/documentation/api/gantt/column#headertemplate) property. This allows rendering custom HTML or React components within the header.

In this example, custom elements are applied to both the **TaskName** and **Duration** column headers.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs2" %}

>* The `headerTemplate` property is only applicable to Gantt columns that have a header element.

## Align header text

You can align the column header text in the React Gantt Chart component using the [headerTextAlign](https://ej2.syncfusion.com/react/documentation/api/gantt/column#headertextalign) property. By default, the text is aligned to the **left**. The available alignment options are:

- **Left:** Aligns text to the left (default).  
- **Center:** Aligns text to the center.  
- **Right:** Aligns text to the right.  
- **Justify:** Distributes text evenly across the header.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs3" %}

>* The `headerTextAlign` property only changes the alignment of the text in the column header, and not the content of the column. If you want to align both the column header and content, you can use the [textAlign](https://ej2.syncfusion.com/documentation/api/gantt/column#textalign) property.

## Enable header text wrapping

You can enable autowrap in the React Gantt Chart component to allow cell content to wrap onto the next line when it exceeds the defined column width. This wrapping behavior is based on the whitespace between words. To activate this feature, set the `allowTextWrap` property to **true** and specify an appropriate column [width](https://ej2.syncfusion.com/react/documentation/api/gantt/column#width).

The wrapping behavior is defined using the `textWrapSettings.wrapMode` property of the `treeGrid` object. Available options include:

- **Header:** Wraps only the header text.
- **Content:** Wraps only the cell content.
- **Both:** Wraps both header and content (default).

> * If column width is not defined, autowrap adjusts based on the overall Gantt chart width.
> * Header text without white space may not wrap.
> * If cell content includes HTML tags, autowrap may not function as expected. In such cases, use [headerTemplate](https://ej2.syncfusion.com/react/documentation/api/gantt/column#headertemplate) and [template](https://ej2.syncfusion.com/react/documentation/api/gantt/column#template) properties to customize the header and cell layout.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs4" %}

## Update header text dynamically

The React Gantt Chart component allows dynamic updates to column header text, either through events or method calls. This is useful for customizing headers based on user input or application logic.

**Using Event**

To modify header text during rendering, use the [headerCellInfo](https://ej2.syncfusion.com/react/documentation/gantt/events#headercellinfo) event. After updating the text, call the `refreshHeader` method of the `treeGrid` object to apply changes.

**Using method**

You can also change header text programmatically using the following methods:

- `getColumnByField`: Returns the column object by field name.  
- `getColumnHeaderByField`: Returns the header element by field name.  
- `getColumnIndexByField`: Returns the column index by field name.  
- `getColumnByUid`: Returns the column object by UID.  
- `getColumnHeaderByIndex`: Returns the header element by index.  
- `getColumnIndexByUid`: Returns the column index by UID.  
- `getColumnHeaderByUid`: Returns the header element by UID.  

These methods allow access to the column or header element, where you can update the `headerText` or `textContent` as needed.

> * After modifying header text, call `refreshHeader` to reflect the changes.  
> * Column UID's are auto-generated and may change when the chart is refreshed

Here is an example of how to change the header text of a column using the `getColumnByField` method:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs6" %}

**Changing the header text of all columns:**

To modify the header text of all columns in the Gantt Chart component, iterate through the columns collection and set the [headerText](https://ej2.syncfusion.com/react/documentation/api/gantt/column#headertext) property for each column. This approach ensures consistent customization across all headers.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs7" %}

## Rotate header text

By default, header text in the Gantt Chart component is displayed horizontally. To rotate it vertically, diagonally, or at a custom angle, follow the steps below using the [customAttributes](https://ej2.syncfusion.com/react/documentation/api/gantt/column#customattributes) property of the column.

**Step 1**: Create a CSS class with rotation styles.

```css
.e-gantt .e-headercell.orientationcss  {
  transform: rotate(90deg);
  text-align: center;
} 
```

**Step 2:** Apply the CSS class to the desired column using `customAttributes`.

```typescript
 <ColumnDirective field="Duration" headerText="Duration" customAttributes={customAttributes} textAlign="Center" />
```

**Step 3:** Adjust the header cell height to fit the rotated text.

```typescript
  const customAttributes = { class: "orientationcss" };
  const setHeaderHeight = () => {
    const headerDiv = document.querySelector(".orientationcss > div") as HTMLElement | null;
    if (!headerDiv) return;

    const textWidth: number = headerDiv.scrollWidth;
    const headerCells: NodeListOf<HTMLElement> = document.querySelectorAll(".e-headercell");

    headerCells.forEach(cell => {
      cell.style.height = textWidth + "px";
    });
  };
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs8" %}

## Add custom tooltip to header

You can display additional information in the React Gantt Chart component by adding custom tooltips to column headers. This is especially helpful when space is limited or when extra context is needed. To implement this, use the [beforeRender](https://ej2.syncfusion.com/react/documentation/api/gantt#beforeRender) event of the `Tooltip` component. This event triggers before each header cell is rendered, allowing you to assign a custom tooltip dynamically.

The following example demonstrates how to use the `beforeRender` event to add a tooltip to a header cell:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs9/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs9" %}

> * The [headerCellInfo](https://ej2.syncfusion.com/react/documentation/api/gantt#headercellinfo) event can also be used to customize the header tooltip. This event is triggered for each header cell after it is rendered.

## Style header text 

To modify the appearance of column headers in the Gantt, follow the steps below. You can use CSS, properties, methods, or events provided by the React Gantt Chart component.

### Using CSS

You can apply styles to Gantt Chart component header cells using the **.e-headercell** class. This allows you to customize font, background color, and other visual properties.

```css
  .e-gantt .e-headercell {
    background-color: #a2d6f4;
    color:rgb(3, 2, 2);
  }
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs10/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs10" %}

### Using property

To customize the appearance of column headers in the Gantt Chart component, use the [customAttributes](https://ej2.syncfusion.com/react/documentation/api/gantt/column#customattributes) property. It accepts an object containing CSS class names that apply styles directly to header cells.

**Step 1:** Define a CSS class with the desired styles.

```css
.e-gantt .e-headercell.customcss {
  background-color: rgb(43, 205, 226);
  color: black;
}
```

**Step 2:** Assign the class using `customAttributes` in the column definition.

```js
{% raw %}
<ColumnDirective field="Duration" headerText="Duration" customAttributes={{ class: 'customcss' }} />
{% endraw %}
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject } from "@syncfusion/ej2-react-gantt";
import { data } from "./datasource";

function App() {
  const taskFields = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    duration: "Duration",
    progress: "Progress",
    parentID: "ParentID",
  };
  let gantt;
  const splitterSettings = {
    position: "75%"
  }
  return (
    <div>
      <GanttComponent ref={g => gantt = g} dataSource={data} taskFields={taskFields} height="450px" splitterSettings={splitterSettings}>
        <ColumnsDirective>
          <ColumnDirective field="TaskID" headerText="Task ID" />
          <ColumnDirective field="TaskName" headerText="Task Name" customAttributes={{ class: 'customcss' }} />
          <ColumnDirective field="StartDate" headerText="Start Date" />
          <ColumnDirective field="Duration" headerText="Duration" customAttributes={{ class: 'customcss' }} />
          <ColumnDirective field="Progress" headerText="Progress" />
        </ColumnsDirective>
        <Inject />
      </GanttComponent>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject } from "@syncfusion/ej2-react-gantt";
import { data } from "./datasource";

function App() {
  const taskFields = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    duration: "Duration",
    progress: "Progress",
    parentID: "ParentID",
  };
  let gantt: GanttComponent;
  const splitterSettings: object = {
    position: "75%"
  }
  return (
    <div>
      <GanttComponent ref={g => gantt = g} dataSource={data} taskFields={taskFields} height="450px" splitterSettings={splitterSettings}>
        <ColumnsDirective>
          <ColumnDirective field="TaskID" headerText="Task ID" />
          <ColumnDirective field="TaskName" headerText="Task Name" customAttributes={{ class: 'customcss' }} />
          <ColumnDirective field="StartDate" headerText="Start Date" />
          <ColumnDirective field="Duration" headerText="Duration" customAttributes={{ class: 'customcss' }} />
          <ColumnDirective field="Progress" headerText="Progress" />
        </ColumnsDirective>
        <Inject />
      </GanttComponent>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs11" %}

### Using method 

The Gantt Chart component provides methods in the `treeGrid` object to customize column header appearance:

- `getColumnHeaderByIndex(index)` – Gets the header element by column index.
- `getColumnHeaderByField(field)` – Retrieves the header element using the field name.
- `getColumnHeaderByUid(uid)` – Accesses the header element by unique ID.
- `getColumnIndexByField(field)` – Returns the index of a column using its field name.
- `getColumnIndexByUid(uid)` – Returns the index of a column using its unique ID.

The following example demonstrates how to apply custom styles to specific column headers in the Gantt chart using the `dataBound` event:

- Set font color to black for the header at index 0 of the **TaskID** column.
- Apply pink background and black font color to the **TaskName** header.
- Apply the same styles to the **Duration** header using both UID (`grid-column11`) and index 3.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs12/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs12" %}

>* The UID is automatically generated by the Gantt chart component and may change whenever the gantt chart is refreshed or updated.

### Using event

To customize the Gantt Chart component header appearance, use the [headerCellInfo](https://ej2.syncfusion.com/react/documentation/gantt/events#headercellinfo) event. This event triggers when each header cell is rendered and provides access to its details, allowing you to apply custom styles.

The following example demonstrates how to check if the current header column is the **TaskID** field and apply a CSS class conditionally:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs13/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs13/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs13/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs13" %}

## Refresh header programmatically 

To refresh the header in Gantt Chart component after updating column properties (such as text, width, or alignment), use the `refreshHeader` method from the `treeGrid` object. This method re-renders the header to reflect the latest column changes.

The following example demonstrates how to update the header text of the column at index 1 for the **TaskName** column using a button click.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs14/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs14/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs14/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt-chart/columnheader-cs14" %}

## Access header element 

To retrieve the header element in a Gantt chart component, you can use one of the following methods available in the `treeGrid` object of the Gantt instance:

1. `getHeaderContent`: This method returns the header <div> element of the Gantt chart. You can use it to access the entire header content.

    ```ts
    const headerElement = gantt.treeGrid.getHeaderContent();    
    ```
2. `getHeaderTable`: This method returns the header <table> element of the Gantt chart. You can use it to access only the header table.

   ```ts
    const headerTableElement = gantt.treeGrid.getHeaderTable();
   ```

3. `getColumnHeaderByUid`: This method returns the column header element by its unique identifier (UID).


   ```ts
    const columnHeaderElement = gantt.treeGrid.getColumnHeaderByUid("e-grid2");
   ```

4. `getColumnHeaderByIndex`: This method returns the column header element by its index.

   ```ts
    const columnHeaderElement = gantt.treeGrid.getColumnHeaderByIndex(0);
   ```
5. `getColumnHeaderByField`: This method returns the column header element by its field name.

   ```ts
    const columnHeaderElement = gantt.treeGrid.getColumnHeaderByField("TaskID"); 
   ```

>* The UID is automatically generated by the Gantt chart component and may change whenever the Gantt is refreshed or updated.