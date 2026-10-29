---
layout: post
title: WebMCP tool integration for Vue Gantt Chart | Syncfusion
description: Learn how to integrate WebMCP with Syncfusion Vue Gantt Chart to enable AI interaction, configure tools, manage access, and monitor execution.
keywords: vue gantt webmcp, gantt webmcp tools, webmcp vue gantt chart, ai integration, project management tools
canonical: https://help.syncfusion.com/gantt-sdk/vue/gantt-chart/webmcp
platform: gantt-sdk
control: WebMCP - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
appliesto: UI Component Suite, Gantt SDK
---

# WebMCP Tools Integration for Syncfusion® Vue Gantt Chart

WebMCP enables the Syncfusion® Vue Gantt Chart component to expose its functionality through a standardized tool interface, allowing AI agents and assistants to securely interact with project data and scheduling features. By enabling WebMCP, developers can make supported Gantt Chart operations available to AI-powered applications for task management, project planning, timeline navigation, and workflow automation.

This section demonstrates how to enable and configure WebMCP in the Syncfusion® Vue Gantt Chart component and expose its supported tools for AI-driven interactions.

## WebMCP Overview

WebMCP allows AI assistants running in the browser to interact directly with Syncfusion® Vue Gantt Chart component through natural language prompts.

Instead of relying on DOM inspection or simulating user interactions, AI assistants can interact directly with component APIs through WebMCP tools. This approach provides more reliable and accurate results.

Once connected, an AI assistant can perform tasks such as:

- Manage project tasks and task updates.
- Schedule and reschedule work across the project timeline.
- Manage task dependencies and hierarchy.
- Search, filter, sort, and navigate the project timeline.
- Expanding and collapsing records.
- Export project data and review undo and redo history.

The Vue Gantt Chart component exposes 38 WebMCP tools that enable AI agents to perform task management, project scheduling, dependency management, hierarchy operations, timeline navigation, searching, filtering, sorting, export operations, and undo and redo actions.

> WebMCP is currently an experimental browser capability and requires a Chromium-based browser with WebMCP support enabled. Availability and required browser flags may change as the specification evolves.

## Prerequisites

- Syncfusion® Vue Gantt Chart component
- Chromium-based Browser (like Chrome, Edge, or Brave)
- [Node.js 24+](https://nodejs.org/en) (LTS recommended)
- WebMCP browser extension installed
- AI API key configured in the extension

## WebMCP setup

Before you can use WebMCP locally, enable the feature flag and install the browser extension:

1. Enable `WebMCP for testing` flag via `chrome://flags/`. Click **"Relaunch"** to restart Chrome.
2. Search for **"WebMCP - Model Context Tool Inspector"** in [Chrome Web Store](https://chromewebstore.google.com/detail/webmcp-model-context-tool/gbpdfapgefenggkahomfgkhfehlcenpd). Click **"Add to Chrome"**.
3. Visit [Google AI Studio](https://aistudio.google.com/app/apikey) to create or copy an API key. Open the WebMCP extension → paste your API key.

The WebMCP extension is now configured and ready to interact with WebMCP-enabled Syncfusion® Vue Gantt Chart component.

## Integrating WebMCP tools

Follow these steps to integrate WebMCP support into Syncfusion® Vue Gantt Chart component.

### Step 1: Create an application

Create an Vue application and integrate the Syncfusion® Vue Gantt Chart component by following the [Getting Started with Vue Gantt Chart](https://help.syncfusion.com/gantt-sdk/vue/gantt-chart/getting-started) guide. After completing the setup, follow the steps below to enable WebMCP integration.

### Step 2: Enable WebMCP support

Import the WebMcpGantt module and inject it into the component to make WebMCP functionality available.

```ts
<template>
  <ejs-gantt
    id="gantt"
    :dataSource="data"
    :taskFields="taskFields"
    :editSettings="editSettings"
    :allowSorting='true' :allowFiltering='true'
    :toolbar="toolbar"
    height="450px">
  </ejs-gantt>
</template>

<script setup>
import { provide } from 'vue';
import { GanttComponent as EjsGantt, Edit, Toolbar, Selection, Filter, Sort, WebMcpGantt } from '@syncfusion/ej2-vue-gantt';

provide('gantt', [Edit,Toolbar,Selection,Filter,Sort,WebMcpGantt]);

const editSettings = {
  allowAdding: true,
  allowEditing: true,
  allowDeleting: true,
  allowTaskbarEditing: true,
  showDeleteConfirmDialog: true
};

const toolbar = ['Add','Edit','Delete','Update','Cancel'];

const data = [
  { TaskID: 1, TaskName: 'Project Planning', StartDate: new Date('2025-01-06'), Duration: 5, Progress: 70, ChildTasks: [
        { TaskID: 2, TaskName: 'Requirement Analysis', StartDate: new Date('2025-01-06'), Duration: 3, Progress: 100 },
        { TaskID: 3, TaskName: 'Design phase', StartDate: new Date('2025-01-09'), Duration: 4, Progress: 60, Dependency: '2', ChildTasks: [
            { TaskID: 4, TaskName: 'UI Review', StartDate: new Date('2025-01-10'), Duration: 3, Progress: 20, Dependency: '3' }
        ]}
    ]}
];

const taskFields = {
  id: 'TaskID',
  name: 'TaskName',
  startDate: 'StartDate',
  duration: 'Duration',
  progress: 'Progress',
  dependency: 'Dependency',
  child: 'ChildTasks'
};
</script>
```

### Step 3: Register component tools

Set the `enableWebMcp` property to `true` and configure the `webMcpSettings` property to register the component's available tools with the WebMCP runtime.

When `enableWebMcp` is enabled, supported component tools are automatically registered with the WebMCP runtime and become discoverable by authorized WebMCP clients.

For example, a component may expose tools such as:

- `createTask` – Creates one or more project tasks.
- `updateTask` – Updates task information such as dates, duration, or progress.
- `getProjectTasks` – Retrieves the current project task collection.

An AI assistant can discover these tools and invoke them based on user prompts.

```ts
<template>
  <ejs-gantt
    id="gantt"
    :dataSource="data"
    :taskFields="taskFields"
    :editSettings="editSettings"
    :toolbar="toolbar"
    :allowSorting='true' :allowFiltering='true'
    :enableWebMcp="true"
    :webMcpSettings="webMcpSettings"
    height="450px">
  </ejs-gantt>
</template>

<script setup>
import { provide } from 'vue';
import { GanttComponent as EjsGantt, Edit, Toolbar, Selection, Filter, Sort, WebMcpGantt } from '@syncfusion/ej2-vue-gantt';

provide('gantt', [Edit,Toolbar,Selection,Filter,Sort,WebMcpGantt]);

const webMcpSettings = {
  tools: []
};

const editSettings = {
  allowAdding: true,
  allowEditing: true,
  allowDeleting: true,
  allowTaskbarEditing: true,
  showDeleteConfirmDialog: true
};

const toolbar = ['Add','Edit','Delete','Update','Cancel'];

const data = [
  { TaskID: 1, TaskName: 'Project Planning', StartDate: new Date('2025-01-06'), Duration: 5, Progress: 70, ChildTasks: [
        { TaskID: 2, TaskName: 'Requirement Analysis', StartDate: new Date('2025-01-06'), Duration: 3, Progress: 100 },
        { TaskID: 3, TaskName: 'Design phase', StartDate: new Date('2025-01-09'), Duration: 4, Progress: 60, Dependency: '2', ChildTasks: [
            { TaskID: 4, TaskName: 'UI Review', StartDate: new Date('2025-01-10'), Duration: 3, Progress: 20, Dependency: '3' }
        ]}
    ]}
];

const taskFields = {
  id: 'TaskID',
  name: 'TaskName',
  startDate: 'StartDate',
  duration: 'Duration',
  progress: 'Progress',
  dependency: 'Dependency',
  child: 'ChildTasks'
};
</script>
```

### Step 4: Customize tool registration

Use the `webMcpSettings` property to customize how WebMCP tools are exposed to AI agents. The available settings are listed below.

| Property | Description |

|-----------|-------------|
| `name` | Prefix applied to registered tool names. If name: `gantt` is specified, a tool such as `createTask` may be registered as `gantt_createTask`, allowing multiple component instances to coexist without tool name conflicts. |
| `tools` | List of tool names to expose. Any supported tools not included in this list will not be registered. |
| `exposedTo` | List of trusted domains that are allowed to interact with the component through WebMCP. |

```ts
<template>
  <ejs-gantt
    id="gantt"
    :dataSource="data"
    :taskFields="taskFields"
    :editSettings="editSettings"
    :toolbar="toolbar"
    :allowSorting='true' :allowFiltering='true'
    :enableWebMcp="true"
    :webMcpSettings="webMcpSettings"
    :beforeWebMcpToolExecute="beforeWebMcpToolExecute"
    height="450px">
  </ejs-gantt>
</template>

<script setup>
import { provide } from 'vue';
import { GanttComponent as EjsGantt, Edit, Toolbar, Selection, Filter, Sort, WebMcpGantt } from '@syncfusion/ej2-vue-gantt';

provide('gantt', [Edit,Toolbar,Selection,Filter,Sort,WebMcpGantt]);

const editSettings = {
  allowAdding: true,
  allowEditing: true,
  allowDeleting: true,
  allowTaskbarEditing: true,
  showDeleteConfirmDialog: true
};

const toolbar = ['Add','Edit','Delete','Update','Cancel'];

const webMcpSettings = {
  name: 'gantt',
  tools: ['createTask','deleteTask','updateTask','getProjectTasks'],
  exposedTo: ['https://www.syncfusion.com/']
};

const data = [
  { TaskID: 1, TaskName: 'Project Planning', StartDate: new Date('2025-01-06'), Duration: 5, Progress: 70, ChildTasks: [
        { TaskID: 2, TaskName: 'Requirement Analysis', StartDate: new Date('2025-01-06'), Duration: 3, Progress: 100 },
        { TaskID: 3, TaskName: 'Design phase', StartDate: new Date('2025-01-09'), Duration: 4, Progress: 60, Dependency: '2', ChildTasks: [
            { TaskID: 4, TaskName: 'UI Review', StartDate: new Date('2025-01-10'), Duration: 3, Progress: 20, Dependency: '3' }
        ]}
    ]}
];

const taskFields = {
  id: 'TaskID',
  name: 'TaskName',
  startDate: 'StartDate',
  duration: 'Duration',
  progress: 'Progress',
  dependency: 'Dependency',
  child: 'ChildTasks'
};

const beforeWebMcpToolExecute = (args: any): void => {
  if (args.toolName === 'gantt_deleteTask') {
    args.cancel = true;
    console.log('Root-level tasks cannot be deleted.');
  }

  if (args.toolName === 'gantt_updateTask') {
    const approved = false;
    if (!approved) {
      args.cancel = true;
      console.log('Approval is required before updating tasks.');
    }
  }
};
</script>
```

> Use the `exposedTo` property to restrict WebMCP access to trusted domains. This helps prevent unauthorized WebMCP clients from interacting with your component tools.

### Step 5: Monitor and control tool execution

The `beforeWebMcpToolExecute` event is triggered before a tool is executed. This event allows you to:

- Audit tool usage.
- Validate incoming requests.
- Cancel tool execution when necessary.
- Apply custom business rules and security policies.

> AI-generated requests should always be validated before executing write operations. Restrict access using `exposedTo` and perform additional authorization checks within `beforeWebMcpToolExecute` when modifying application data.

```ts
<template>
  <ejs-gantt
    id="gantt"
    :dataSource="data"
    :taskFields="taskFields"
    :editSettings="editSettings"
    :toolbar="toolbar"
    :allowSorting='true' :allowFiltering='true'
    :enableWebMcp="true"
    :webMcpSettings="webMcpSettings"
    :beforeWebMcpToolExecute="beforeWebMcpToolExecute"
    height="450px">
  </ejs-gantt>
</template>

<script setup>
import { provide } from 'vue';
import { GanttComponent as EjsGantt, Edit, Toolbar, Selection, Filter, Sort, WebMcpGantt } from '@syncfusion/ej2-vue-gantt';

provide('gantt', [Edit,Toolbar,Selection,Filter,Sort,WebMcpGantt]);

const data = [
  { TaskID: 1, TaskName: 'Project Planning', StartDate: new Date('2025-01-06'), Duration: 5, Progress: 70, ChildTasks: [
        { TaskID: 2, TaskName: 'Requirement Analysis', StartDate: new Date('2025-01-06'), Duration: 3, Progress: 100 },
        { TaskID: 3, TaskName: 'Design phase', StartDate: new Date('2025-01-09'), Duration: 4, Progress: 60, Dependency: '2', ChildTasks: [
            { TaskID: 4, TaskName: 'UI Review', StartDate: new Date('2025-01-10'), Duration: 3, Progress: 20, Dependency: '3' }
        ]}
    ]}
];

const taskFields = {
  id: 'TaskID',
  name: 'TaskName',
  startDate: 'StartDate',
  duration: 'Duration',
  progress: 'Progress',
  dependency: 'Dependency',
  child: 'ChildTasks'
};

const editSettings = {
  allowAdding: true,
  allowEditing: true,
  allowDeleting: true,
  allowTaskbarEditing: true,
  showDeleteConfirmDialog: true
};

const webMcpSettings = {
  name: 'gantt',
  tools: ['createTask', 'deleteTask', 'updateTask', 'getProjectTasks'],
  exposedTo: ['https://www.syncfusion.com/']
};

const toolbar = ['Add','Edit','Delete','Update','Cancel'];

const beforeWebMcpToolExecute = (args: any): void => {
  if (args.toolName === 'gantt_deleteTask') {
    args.cancel = true;
    console.log('Root-level tasks cannot be deleted.');
  }

  if (args.toolName === 'gantt_updateTask') {
    const approved = false;
    if (!approved) {
      args.cancel = true;
      console.log('Approval is required before updating tasks.');
    }
  }
};
</script>
```

## Best practices

- Expose only the tools required by your application.
- Use the `name` property when multiple component instances exist on the same page.
- Configure `exposedTo` to limit access to trusted domains.
- Monitor tool activity through the `beforeWebMcpToolExecute` event.
- Apply application-specific validation before executing tool operations.

## Explore the demo

Explore the Syncfusion® Vue Gantt Chart component with WebMCP integration through this [demo](https://demos.syncfusion.com/gantt-sdk/gantt-chart/webmcp/index.html).

## See also

- [WebMCP Tools for Vue Gantt Chart](https://ej2.syncfusion.com/vue/documentation/webmcp/components#gantt-chart)
