---
layout: post
title: Tree Column in React Gantt Chart Component | Syncfusion
description: Learn here all about Tree Column in Syncfusion React Gantt Chart component of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Tree Column
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Tree Column in React Gantt Chart Component

The [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart) component provides a structured way to display parent-child relationships using expand/collapse icons.

To configure this, set the [treeColumnIndex](https://ej2.syncfusion.com/react/documentation/api/gantt#treecolumnindex) property to the index of the column where these icons should appear. This enables clear visualization and navigation of hierarchical tasks within the Gantt chart.

```html
<GanttComponent
  dataSource="{data}"
  taskFields="{taskSettings}"
  treeColumnIndex="{1}"
>
  <!-- Other gantt configurations -->
</GanttComponent>
```

## Customize expand and collapse icons

The React Gantt Chart component provides support for customizing default expand/collapse icons through CSS.

To apply custom icons, override the default styles with the following CSS:

```css
.e-gantt .e-grid .e-treegridexpand::before {
  content: "\2795";
}
.e-gantt .e-grid .e-treegridcollapse::before {
  content: "\2796";
}
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/tree-column-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/tree-column-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/tree-column-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/tree-column-cs1" %}

## Customize indentation of tree column text

The React Gantt Chart component allows customization of the indent space in tree column cells using the [queryCellInfo](https://ej2.syncfusion.com/react/documentation/gantt/events#querycellinfo) event.

In the following demonstration, indentation is applied by dynamically adding a CSS class to the tree column cell of **TaskName** using the `queryCellInfo` event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/tree-column-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/tree-column-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/tree-column-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/tree-column-cs2" %}

## Render parent rows in collapsed state

You can collapse all parent rows during initial rendering by setting the [collapseAllParentTasks](https://ej2.syncfusion.com/react/documentation/api/gantt#collapseallparenttasks) property in the Gantt Chart component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/tree-column-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/tree-column-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/tree-column-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/tree-column-cs3" %}

## Retain expand/collapse state on initial load

You can retain the expanded or collapsed state of parent rows during initial rendering by using the [expandState](https://ej2.syncfusion.com/react/documentation/api/gantt/taskFields#expandstate) property in the data source. This property indicates whether a parent row should be expanded or collapsed when the Gantt Chart component loads.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/tree-column-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/tree-column-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/tree-column-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/tree-column-cs4" %}

## Persist expand/collapse state across page refresh using localStorage

To retain the expanded and collapsed state of rows after a page refresh in the React Gantt Chart component:

1. Use the [collapsed](https://ej2.syncfusion.com/react/documentation/api/gantt#collapsed) event to store the collapsed row's primary key in `localStorage` via [setItem](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem).
2. On page reload, retrieve the stored keys in the [dataBound](https://ej2.syncfusion.com/react/documentation/api/gantt/index-default#databound) event using [getItem](https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem).
3. Collapse the corresponding rows using `CollapseByKey` or `collapseRow` methods by passing the saved key or row details.

This approach ensures that row states are preserved across browser sessions, enhancing user experience and continuity.

In the following demo, the steps mentioned above are used to persist the expanded and collapsed state of rows during a browser page refresh.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/tree-column-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/tree-column-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/tree-column-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/tree-column-cs5" %}

## Programmatically expand or collapse rows

The React Gantt Chart component provides built-in methods to programmatically control row expansion and collapse:

- **[expandAll()](https://ej2.syncfusion.com/react/documentation/api/gantt#expandall)**: Expands all rows.

```ts
gantt.expandAll();
```

- **[collapseAll()](https://ej2.syncfusion.com/react/documentation/api/gantt#collapseall)**: Collapses all rows.

```ts
gantt.collapseAll();
```

- `expandAtLevel(level)`: Expands rows at a specific level.

```ts
gantt.treegrid.expandAtLevel(0);
```

- `collapseAtLevel(level)`: Collapses rows at a specific level.

```ts
gantt.treegrid.collapseAtLevel(0);
```

- `expandByKey(key)`: Expands a row by primary key.

```ts
gantt.treegrid.expandByKey(1); //Here pass the primary key value.
```

- `collapseByKey(key)`: Collapses a row by primary key.

```ts
gantt.treegrid.collapseByKey(1); //Here pass the primary key value.
```

- `expandRow(rowElement)`: Expands a row using its DOM element.

```ts
gantt.treegrid.expandRow(tr); //Here pass the row element as parameter.
```

- `collapseRow(rowElement)`: Collapses a row using its DOM element.

```ts
gantt.treegrid.collapseRow(tr); //Here pass the row element as parameter.
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/tree-column-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/tree-column-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/tree-column-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/tree-column-cs6" %}

## Retrieve expanded records

To retrieve the currently expanded rows in the Gantt Chart component, use the [getExpandedRecords](https://ej2.syncfusion.com/react/documentation/api/gantt#getexpandedrecords) method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/tree-column-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/tree-column-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/tree-column-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/tree-column-cs7" %}

## Customize expand/collapse behavior using events

You can customize expand and collapse behavior in the React Gantt Chart component using the [expanding](https://ej2.syncfusion.com/react/documentation/gantt/events#expanding), [expanded](https://ej2.syncfusion.com/react/documentation/gantt/events#expanded), [collapsing](https://ej2.syncfusion.com/react/documentation/api/gantt#collapsing), and [collapsed](https://ej2.syncfusion.com/react/documentation/api/gantt#collapsed) events. These events allow you to control and respond to row state changes programmatically based on your application logic.

The following sample demonstrates how to customize expand and collapse actions in the React Gantt Chart component:

- Expanding is canceled for the row where **TaskID** is 1.
- Collapsing is canceled for the row where **TaskID** is 5.
- When a row is expanded and its **Progress** is greater than 50, a green background is applied.
- When a row is collapsed and its **Progress** is less than 50, a red background is applied.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/tree-column-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/tree-column-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/tree-column-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/tree-column-cs8" %}
