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

Once connected, an AI assistant can perform tasks such as:

- View card details and selected cards.
- Retrieve column data and swimlane data.
- Open and close the dialog used for adding or editing cards.
- Add, update, and delete cards.
- Add, delete, show, and hide columns.

The Vue Kanban component provides WebMCP tools that enable AI agents to view card and column information, manage cards, control dialogs, and update column visibility.

> WebMCP is currently an experimental browser capability and requires a Chromium-based browser with WebMCP support enabled. Availability and required browser flags may change as the specification evolves.

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
    :columns="columns"
    :enableWebMcp="true"
    height="450px"
  />
</template>

<script setup>
import { KanbanComponent as EjsKanban, WebMcpAdapter } from '@syncfusion/ej2-vue-kanban';
import { provide } from 'vue';

const dataSource = [
  { Id: 1, Status: 'Open', Summary: 'Project Planning', Assignee: 'Andrew Fuller' },
  { Id: 2, Status: 'In Progress', Summary: 'Requirement Analysis', Assignee: 'Janet Leverling' },
  { Id: 3, Status: 'Review', Summary: 'Design phase', Assignee: 'Steven White' },
  { Id: 4, Status: 'Done', Summary: 'UI Review', Assignee: 'Nancy Davolio' }
];

const cardSettings = {
  contentField: 'Summary',
  headerField: 'Id'
};

const columns = [
  { headerText: 'Open', keyField: 'Open' },
  { headerText: 'In Progress', keyField: 'In Progress' },
  { headerText: 'Review', keyField: 'Review' },
  { headerText: 'Done', keyField: 'Done' }
];

provide('kanban', [WebMcpAdapter]);
</script>
```

### Step 3: Register component tools

Set the [enableWebMcp](https://ej2.syncfusion.com/vue/documentation/api/kanban#enablewebmcp) property to `true` and configure the [webMcpSettings](https://ej2.syncfusion.com/vue/documentation/api/kanban#webmcpsettings) property to register the component's available tools with the WebMCP runtime.

When `enableWebMcp` is enabled, supported component tools are automatically registered with the WebMCP runtime and become discoverable by authorized WebMCP clients.

For example, a component may expose tools such as:

- `getCardDetails` – Returns the card details based on card ID from the board.
- `getColumnData` – Returns the column data based on column key input.
- `getSelectedCards` – Gets the list of selected cards from the board.

An AI assistant can discover these tools and invoke them based on user prompts.

```vue
<template>
  <ejs-kanban
    id="kanban"
    keyField="Status"
    :dataSource="dataSource"
    :cardSettings="cardSettings"
    :columns="columns"
    :enableWebMcp="true"
    :webMcpSettings="webMcpSettings"
    height="450px"
  />
</template>

<script setup>
import { KanbanComponent as EjsKanban, WebMcpAdapter } from '@syncfusion/ej2-vue-kanban';
import { provide } from 'vue';

const dataSource = [
  { Id: 1, Status: 'Open', Summary: 'Project Planning', Assignee: 'Andrew Fuller' },
  { Id: 2, Status: 'In Progress', Summary: 'Requirement Analysis', Assignee: 'Janet Leverling' },
  { Id: 3, Status: 'Review', Summary: 'Design phase', Assignee: 'Steven White' },
  { Id: 4, Status: 'Done', Summary: 'UI Review', Assignee: 'Nancy Davolio' }
];

const cardSettings = {
  contentField: 'Summary',
  headerField: 'Id'
};

const columns = [
  { headerText: 'Open', keyField: 'Open' },
  { headerText: 'In Progress', keyField: 'In Progress' },
  { headerText: 'Review', keyField: 'Review' },
  { headerText: 'Done', keyField: 'Done' }
];

const webMcpSettings = {
  tools: []
};

provide('kanban', [WebMcpAdapter]);
</script>
```

### Step 4: Customize tool registration

Use the [webMcpSettings](https://ej2.syncfusion.com/vue/documentation/api/kanban#webmcpsettings) property to customize how WebMCP tools are exposed to AI agents. The available settings are listed below.

| Property | Description |
|-----------|-------------|
| `name` | Prefix applied to registered tool names. If name: `kanban` is specified, a tool such as `getCardDetails` may be registered as `kanban_getCardDetails`, allowing multiple component instances to coexist without tool name conflicts. |
| `tools` | List of tool names to expose. Any supported tools not included in this list will not be registered. |
| `exposedTo` | List of trusted domains that are allowed to interact with the component through WebMCP. |

```vue
<template>
  <ejs-kanban
    id="kanban"
    keyField="Status"
    :dataSource="dataSource"
    :cardSettings="cardSettings"
    :columns="columns"
    :enableWebMcp="true"
    :webMcpSettings="webMcpSettings"
    :beforeWebMcpToolExecute="beforeWebMcpToolExecute"
    height="450px"
  />
</template>

<script setup>
import { KanbanComponent as EjsKanban, WebMcpAdapter } from '@syncfusion/ej2-vue-kanban';
import { provide } from 'vue';

const dataSource = [
  { Id: 1, Status: 'Open', Summary: 'Project Planning', Assignee: 'Andrew Fuller' },
  { Id: 2, Status: 'In Progress', Summary: 'Requirement Analysis', Assignee: 'Janet Leverling' },
  { Id: 3, Status: 'Review', Summary: 'Design phase', Assignee: 'Steven White' },
  { Id: 4, Status: 'Done', Summary: 'UI Review', Assignee: 'Nancy Davolio' }
];

const cardSettings = {
  contentField: 'Summary',
  headerField: 'Id'
};

const columns = [
  { headerText: 'Open', keyField: 'Open' },
  { headerText: 'In Progress', keyField: 'In Progress' },
  { headerText: 'Review', keyField: 'Review' },
  { headerText: 'Done', keyField: 'Done' }
];

const webMcpSettings = {
  name: 'kanban',
  tools: ['getCardDetails', 'getColumnData', 'getSelectedCards', 'updateCard'],
  exposedTo: ['https://www.syncfusion.com/']
};

const beforeWebMcpToolExecute = (args) => {
  if (args.toolName === 'kanban_updateCard') {
    const hour = new Date().getHours();

    if (hour < 9 || hour > 17) {
      args.cancel = true;
      console.log('Card updates are allowed only between 9:00 AM and 5:00 PM.');
    }
  }
};

provide('kanban', [WebMcpAdapter]);
</script>
```

> Use the `exposedTo` property to restrict WebMCP access to trusted domains. This helps prevent unauthorized WebMCP clients from interacting with your component tools.

### Step 5: Monitor and control tool execution

The [beforeWebMcpToolExecute](https://ej2.syncfusion.com/vue/documentation/api/kanban#beforewebmcptoolexecute) event is triggered before a tool is executed. This event allows you to:

- Audit tool usage.
- Validate incoming requests.
- Cancel tool execution when necessary.
- Apply custom business rules and security policies.

> AI-generated requests should always be validated before executing write operations. Restrict access using `exposedTo` and perform additional authorization checks within `beforeWebMcpToolExecute` when modifying application data.

```vue
<template>
  <ejs-kanban
    id="kanban"
    keyField="Status"
    :dataSource="dataSource"
    :cardSettings="cardSettings"
    :columns="columns"
    :enableWebMcp="true"
    :webMcpSettings="webMcpSettings"
    :beforeWebMcpToolExecute="beforeWebMcpToolExecute"
    height="450px"
  />
</template>

<script setup>
import { KanbanComponent as EjsKanban, WebMcpAdapter } from '@syncfusion/ej2-vue-kanban';
import { provide } from 'vue';

const dataSource = [
  { Id: 1, Status: 'Open', Summary: 'Project Planning', Assignee: 'Andrew Fuller' },
  { Id: 2, Status: 'In Progress', Summary: 'Requirement Analysis', Assignee: 'Janet Leverling' },
  { Id: 3, Status: 'Review', Summary: 'Design phase', Assignee: 'Steven White' },
  { Id: 4, Status: 'Done', Summary: 'UI Review', Assignee: 'Nancy Davolio' }
];

const cardSettings = {
  contentField: 'Summary',
  headerField: 'Id'
};

const columns = [
  { headerText: 'Open', keyField: 'Open' },
  { headerText: 'In Progress', keyField: 'In Progress' },
  { headerText: 'Review', keyField: 'Review' },
  { headerText: 'Done', keyField: 'Done' }
];

const webMcpSettings = {
  name: 'kanban',
  tools: ['getCardDetails', 'getColumnData', 'getSelectedCards', 'updateCard'],
  exposedTo: ['https://www.syncfusion.com/']
};

const beforeWebMcpToolExecute = (args) => {
  if (args.toolName === 'kanban_updateCard') {
    const hour = new Date().getHours();

    if (hour < 9 || hour > 17) {
      args.cancel = true;
      console.log('Card updates are allowed only between 9:00 AM and 5:00 PM.');
    }
  }
};

provide('kanban', [WebMcpAdapter]);
</script>
```

## Best practices

- Expose only the tools required by your application.
- Use the `name` property when multiple component instances exist on the same page.
- Configure `exposedTo` to limit access to trusted domains.
- Monitor tool activity through the `beforeWebMcpToolExecute` event.
- Apply application-specific validation before executing tool operations.

## Explore the demo

Explore the Syncfusion® Vue Kanban component with WebMCP integration through this [demo](https://demos.syncfusion.com/gantt-sdk/gantt-chart/webmcp/index.html).

## See also

- [WebMCP Tools for Vue Kanban](https://ej2.syncfusion.com/vue/documentation/webmcp/components#kanban)
