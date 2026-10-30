---
layout: post
title: Modules in ASP.NET Core Gantt Chart | Syncfusion
description: Learn how to configure Gantt Chart features in Syncfusion ASP.NET Core applications and register the required Tag Helpers and script resources.
keywords: asp.net core gantt modules, feature configuration, tag helpers, script resources, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-core/gantt-chart/module
platform: gantt-sdk
control: Feature Modules - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk/overview
---

# Feature Configuration in ASP.NET Core Gantt Chart

The [ASP.NET Core Gantt Chart](https://www.syncfusion.com/aspnet-core-ui-controls/gantt-chart) does not use Angular's service-module injection or a component-level `providers` array. The ASP.NET Core wrapper uses Tag Helpers to configure Gantt features, while the EJ2 client-side script supplies the corresponding functionality. Enable a feature by setting its Gantt property, such as `AllowSorting`, `AllowFiltering`, or `EditSettings`.

This approach lets you configure the features required by the page without adding Angular-specific service providers.

## Inject modules

ASP.NET Core applications register the Gantt Tag Helpers and script resources instead of injecting individual feature modules. Add the Tag Helpers in **\ViewImports.cshtml**:

```cshtml
@addTagHelper *, Syncfusion.AspNetCore.Gantt
@addTagHelper *, Syncfusion.AspNetCore.Base
```

Reference the Gantt client script and register the script manager in **\Layout.cshtml**:

```cshtml
<head>
    <script src="_content/Syncfusion.AspNetCore.Gantt/scripts/sf-gantt.min.js"></script>
</head>
<body>
    <ejs-scripts></ejs-scripts>
</body>
```

For package installation, theme setup, and the complete application configuration, see [Getting Started with ASP.NET Core Gantt Chart](https://help.syncfusion.com/gantt-sdk/asp-net-core/gantt-chart/getting-started).

## Available modules

ASP.NET Core exposes Gantt functionality through component properties rather than separately injected services. The following list maps common feature areas to their configuration properties:

**Core data operations:**

- Sorting - `AllowSorting`
- Filtering - `AllowFiltering`
- Row selection - `AllowSelection`
- Task editing - `EditSettings`

**UI enhancements:**

- Toolbar controls - `Toolbar`
- Context menu - `EnableContextMenu`
- Column menu - `ShowColumnMenu`
- Column reordering - `AllowReordering`
- Column resizing - `AllowResizing`

**Advanced features:**

- Row drag-and-drop - `AllowRowDragAndDrop`
- Event markers and holidays - `EventMarkers` and `Holidays`
- Virtual scrolling - `EnableVirtualization`
- Critical path visualization - `EnableCriticalPath`
- Undo and redo - `EnableUndoRedo`

**Export:**

- Excel export - `AllowExcelExport`
- PDF export - `AllowPdfExport`

Set the required properties on the Gantt Tag Helper. For example, sorting and filtering can be enabled as follows:

```cshtml
<ejs-gantt id="Gantt" dataSource="ViewBag.DataSource" allowSorting="true" allowFiltering="true">
</ejs-gantt>
```

## Bundle optimization

ASP.NET Core applications reference the Gantt client script through the package's static web assets. The Angular tree-shaking and per-service injection steps do not apply to this wrapper. Use the minified Gantt script supplied by the package and avoid adding duplicate script references. See [Adding Script References](https://ej2.syncfusion.com/aspnetcore/documentation/common/adding-script-references) for resource configuration.

### Bundle size impact

Angular service-injection bundle-size measurements do not apply to ASP.NET Core. The Gantt script is loaded as a package asset, and individual feature services are not added to the application through a providers array.

## See also

- [Event Markers](https://help.syncfusion.com/gantt-sdk/asp-net-core/gantt-chart/event-markers)
- [Virtual Scrolling](https://help.syncfusion.com/gantt-sdk/asp-net-core/gantt-chart/virtual-scrolling)
- [Editing Tasks](https://help.syncfusion.com/gantt-sdk/asp-net-core/gantt-chart/managing-tasks/editing-tasks)
- [Overview](https://help.syncfusion.com/gantt-sdk/asp-net-core/gantt-chart/overview)
