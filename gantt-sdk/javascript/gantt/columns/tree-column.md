---
layout: post
title: Tree Column in JavaScript Gantt Chart Control | Syncfusion
description: Learn here all about Tree Column in Syncfusion JavaScript Gantt Chart control of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Tree column
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Tree Column in JavaScript Gantt Chart Control

The Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Gantt Chart control provides a structured way to display parent-child relationships using expand/collapse icons.  

To configure this, set the [treeColumnIndex](../../api/gantt#treecolumnindex) property to the index of the column where these icons should appear. This enables clear visualization and navigation of hierarchical tasks within the Gantt chart.

```html
let gantt = new Gantt({
    dataSource: GanttData,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
     treeColumnIndex:1
});
gantt.appendTo('#Gantt');
```

## Customize expand and collapse icons

The Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Gantt Chart control provides support for customizing default expand/collapse icons through CSS. 

To apply custom icons, override the default styles with the following CSS:

```css
.e-gantt .e-grid .e-treegridexpand::before {
  content: "\2795";
} 
.e-gantt .e-grid .e-treegridcollapse::before {
  content: "\2796";
}
```

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs1" %}
{% endif %}

## Customize indentation of tree column text 

The Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Gantt Chart control allows customization of the indent space in tree column cells using the [queryCellInfo](../../gantt/events#querycellinfo) event.  

In the following demonstration, indentation is applied by dynamically adding a CSS class to the tree column cell of **TaskName** using the `queryCellInfo` event.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs2" %}
{% endif %}

## Render parent rows in collapsed state

You can collapse all parent rows during initial rendering by setting the [collapseAllParentTasks](../../api/gantt#collapseallparenttasks) property in the Gantt Chart control.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs3" %}
{% endif %}

## Retain expand/collapse state on initial load

You can retain the expanded or collapsed state of parent rows during initial rendering by using the [expandState](../../api/gantt/taskFields#expandstate) property in the data source. This property indicates whether a parent row should be expanded or collapsed when the Gantt Chart control loads.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs4" %}
{% endif %}

## Persist expand/collapse state across page refresh using localStorage
 
To retain the expanded and collapsed state of rows after a page refresh in the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Gantt Chart control:

1. Use the [collapsed](../../api/gantt#collapsed) event to store the collapsed row's primary key in `localStorage` via [setItem](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem).
2. On page reload, retrieve the stored keys in the [dataBound](../../api/gantt/index-default#databound) event using [getItem](https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem).
3. Collapse the corresponding rows using `CollapseByKey` or `collapseRow` methods by passing the saved key or row details.

This approach ensures that row states are preserved across browser sessions, enhancing user experience and continuity.

In the following demo, the steps mentioned above are used to persist the expanded and collapsed state of rows during a browser page refresh.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs5" %}
{% endif %}

## Programmatically expand or collapse rows   

The Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Gantt Chart control provides built-in methods to programmatically control row expansion and collapse:

* **[expandAll()](../../api/gantt#expandall)**: Expands all rows. 

```ts
gantt.expandAll();
```

* **[collapseAll()](../../api/gantt#collapseall)**: Collapses all rows.

```ts
gantt.collapseAll();
```

* `expandAtLevel(level)`: Expands rows at a specific level. 

```ts
gantt.treegrid.expandAtLevel(0);
```

* `collapseAtLevel(level)`: Collapses rows at a specific level. 

```ts
gantt.treegrid.collapseAtLevel(0);
```

* `expandByKey(key)`: Expands a row by primary key. 

```ts
gantt.treegrid.expandByKey(1); //Here pass the primary key value.
```

* `collapseByKey(key)`: Collapses a row by primary key. 

```ts
gantt.treegrid.collapseByKey(1); //Here pass the primary key value.
```

* `expandRow(rowElement)`: Expands a row using its DOM element.  

```ts
gantt.treegrid.expandRow(tr); //Here pass the row element as parameter.
```

* `collapseRow(rowElement)`: Collapses a row using its DOM element.

```ts
gantt.treegrid.collapseRow(tr); //Here pass the row element as parameter.
```

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs6" %}
{% endif %}

## Retrieve expanded records

To retrieve the currently expanded rows in the Gantt Chart control, use the [getExpandedRecords](../../api/gantt#getexpandedrecords) method. 

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs7" %}
{% endif %}

## Customize expand/collapse behavior using events

You can customize expand and collapse behavior in the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Gantt Chart control using the [expanding](../../gantt/events#expanding), [expanded](../../gantt/events#expanded), [collapsing](../../api/gantt#collapsing), and [collapsed](../../api/gantt#collapsed) events.  These events allow you to control and respond to row state changes programmatically based on your application logic.

The following sample demonstrates how to customize expand and collapse actions in the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Gantt Chart control:

- Expanding is canceled for the row where **TaskID** is 1.  
- Collapsing is canceled for the row where **TaskID** is 5.  
- When a row is expanded and its **Progress** is greater than 50, a green background is applied.  
- When a row is collapsed and its **Progress** is less than 50, a red background is applied.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs8" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/tree-column-cs8" %}
{% endif %}