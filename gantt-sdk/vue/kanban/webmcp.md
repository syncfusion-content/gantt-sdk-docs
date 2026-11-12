---
layout: post
title: WebMCP tool integration for Vue Kanban | Syncfusion
description: Learn how to integrate WebMCP with Syncfusion® Vue Kanban to enable AI interaction, configure tools, manage access, and monitor execution.
keywords: vue kanban webmcp, kanban webmcp tools, webmcp vue kanban, ai integration, task board tools
canonical: https://help.syncfusion.com/gantt-sdk/vue/kanban/webmcp
platform: gantt-sdk
control: WebMCP - Kanban
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
appliesto: UI Component Suite, Gantt SDK
---

# WebMCP Tools Integration for Syncfusion® Vue Kanban

WebMCP allows AI assistants running in the browser to interact directly with Syncfusion® Vue Kanban components through natural language prompts.

Instead of relying on DOM inspection or simulating user interactions, AI assistants can interact directly with component APIs through WebMCP tools. This approach provides more reliable and accurate results.

## Prerequisites

- Syncfusion® Vue Kanban component
- Chromium-based Browser (like Chrome, Edge, or Brave)
- [Node.js 24+](https://nodejs.org/en) (LTS recommended)
- WebMCP browser extension installed
- AI API key configured in the extension

## WebMCP setup

Before you can use WebMCP locally, enable the feature flag and install the browser extension:

1. Enable `WebMCP for testing` flag via `chrome://flags/`. Click **"Relaunch"** to restart Chrome.
2. Search for **"WebMCP - Model Context Tool Inspector"** in [Chrome Web Store](https://chromewebstore.google.com/detail/webmcp-model-context-tool/gbpdfapgefenggkahomfgkhfehlcenpd). Click **"Add to Chrome"**.
3. Visit [Google AI Studio](https://aistudio.google.com/app/apikey) to create or copy an API key. Open the WebMCP extension and paste your API key.

The WebMCP extension is now configured and ready to interact with WebMCP-enabled Syncfusion® Vue Kanban component.

## Integrating WebMCP tools

Follow these steps to integrate WebMCP support into Syncfusion® Vue Kanban component.

### Step 1: Create an application

Create a Vue application and integrate the Syncfusion® Vue Kanban component by following the [Getting Started with Vue Kanban](https://help.syncfusion.com/gantt-sdk/vue/kanban/getting-started) guide. After completing the setup, follow the steps below to enable WebMCP integration.

### Step 2: Enable WebMCP support

Import the `WebMcpAdapter` module and inject it into the component to make WebMCP functionality available.

```vue
<template>
  <ejs-kanban
    id="kanban"
    keyField="Status"
    :dataSource="dataSource"
    :cardSettings="cardSettings"
    :enableWebMcp="true"
    height="450px"
  >
    <e-columns>
      <e-column headerText="Open" keyField="Open"></e-column>
      <e-column headerText="In Progress" keyField="In Progress"></e-column>
      <e-column headerText="Review" keyField="Review"></e-column>
      <e-column headerText="Done" keyField="Done"></e-column>
    </e-columns>
  </ejs-kanban>
</template>

<script>
import { defineComponent } from 'vue';
import { KanbanComponent, ColumnsDirective, ColumnDirective, WebMcpAdapter } from '@syncfusion/ej2-vue-kanban';

export default defineComponent({
  components: {
    'ejs-kanban': KanbanComponent,
    'e-columns': ColumnsDirective,
    'e-column': ColumnDirective
  },
  data() {
    return {
      dataSource: [
        { Id: 1, Status: 'Open', Summary: 'Project Planning', Assignee: 'Andrew Fuller' },
        { Id: 2, Status: 'In Progress', Summary: 'Requirement Analysis', Assignee: 'Janet Leverling' },
        { Id: 3, Status: 'Review', Summary: 'Design phase', Assignee: 'Steven White' },
        { Id: 4, Status: 'Done', Summary: 'UI Review', Assignee: 'Nancy Davolio' }
      ],
      cardSettings: {
        contentField: 'Summary',
        headerField: 'Id'
      }
    };
  }
});
</script>
```

### Step 3: Configure WebMCP settings

Set the [enableWebMcp](https://ej2.syncfusion.com/vue/documentation/api/kanban#enablewebmcp) property to `true` and configure the [webMcpSettings](https://ej2.syncfusion.com/vue/documentation/api/kanban#webmcpsettings) property to control how the component tools are registered with the WebMCP runtime.

```vue
<template>
  <ejs-kanban
    id="kanban"
    keyField="Status"
    :dataSource="dataSource"
    :cardSettings="cardSettings"
    :enableWebMcp="true"
    :webMcpSettings="webMcpSettings"
    height="450px"
  >
    <e-columns>
      <e-column headerText="Open" keyField="Open"></e-column>
      <e-column headerText="In Progress" keyField="In Progress"></e-column>
      <e-column headerText="Review" keyField="Review"></e-column>
      <e-column headerText="Done" keyField="Done"></e-column>
    </e-columns>
  </ejs-kanban>
</template>

<script>
import { defineComponent } from 'vue';
import { KanbanComponent, ColumnsDirective, ColumnDirective, WebMcpAdapter } from '@syncfusion/ej2-vue-kanban';

export default defineComponent({
  components: {
    'ejs-kanban': KanbanComponent,
    'e-columns': ColumnsDirective,
    'e-column': ColumnDirective
  },
  data() {
    return {
      dataSource: [
        { Id: 1, Status: 'Open', Summary: 'Project Planning', Assignee: 'Andrew Fuller' },
        { Id: 2, Status: 'In Progress', Summary: 'Requirement Analysis', Assignee: 'Janet Leverling' },
        { Id: 3, Status: 'Review', Summary: 'Design phase', Assignee: 'Steven White' },
        { Id: 4, Status: 'Done', Summary: 'UI Review', Assignee: 'Nancy Davolio' }
      ],
      cardSettings: {
        contentField: 'Summary',
        headerField: 'Id'
      },
      webMcpSettings: {
        tools: []
      }
    };
  }
});
</script>
```

### Step 4: Customize tool registration

Use the [webMcpSettings](https://ej2.syncfusion.com/vue/documentation/api/kanban#webmcpsettings) property to customize how WebMCP tools are exposed to AI agents.

| Property | Description |
|-----------|-------------|
| `name` | Prefix applied to registered tool names. If `name: 'kanban'` is specified, registered tool names use that prefix. |
| `tools` | List of tool names to expose. |
| `exposedTo` | List of trusted domains that are allowed to interact with the component through WebMCP. |

```vue
<template>
  <ejs-kanban
    id="kanban"
    keyField="Status"
    :dataSource="dataSource"
    :cardSettings="cardSettings"
    :enableWebMcp="true"
    :webMcpSettings="webMcpSettings"
    height="450px"
  >
    <e-columns>
      <e-column headerText="Open" keyField="Open"></e-column>
      <e-column headerText="In Progress" keyField="In Progress"></e-column>
      <e-column headerText="Review" keyField="Review"></e-column>
      <e-column headerText="Done" keyField="Done"></e-column>
    </e-columns>
  </ejs-kanban>
</template>

<script>
import { defineComponent } from 'vue';
import { KanbanComponent, ColumnsDirective, ColumnDirective, WebMcpAdapter } from '@syncfusion/ej2-vue-kanban';

export default defineComponent({
  components: {
    'ejs-kanban': KanbanComponent,
    'e-columns': ColumnsDirective,
    'e-column': ColumnDirective
  },
  data() {
    return {
      dataSource: [
        { Id: 1, Status: 'Open', Summary: 'Project Planning', Assignee: 'Andrew Fuller' },
        { Id: 2, Status: 'In Progress', Summary: 'Requirement Analysis', Assignee: 'Janet Leverling' },
        { Id: 3, Status: 'Review', Summary: 'Design phase', Assignee: 'Steven White' },
        { Id: 4, Status: 'Done', Summary: 'UI Review', Assignee: 'Nancy Davolio' }
      ],
      cardSettings: {
        contentField: 'Summary',
        headerField: 'Id'
      },
      webMcpSettings: {
        name: 'kanban',
        tools: ['getCardDetails', 'getColumnData', 'getSelectedCards', 'addCard'],
        exposedTo: ['https://www.syncfusion.com/']
      }
    };
  }
});
</script>
```

## See also

- [WebMCP Tools for Vue Kanban](https://ej2.syncfusion.com/vue/documentation/webmcp/components#kanban)
