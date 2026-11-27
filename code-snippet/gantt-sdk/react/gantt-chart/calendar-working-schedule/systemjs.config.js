System.config({
    transpiler: 'ts',
    typescriptOptions: {
        target: 'es5',
        module: 'commonjs',
        moduleResolution: 'node',
        jsx: 'react'
    },
    paths: {
        'syncfusion:': 'https://cdn.syncfusion.com/ej2/34.2.6/'
    },
    map: {
        app: 'app',
        ts: 'https://unpkg.com/plugin-typescript@4.0.10/lib/plugin.js',
        typescript: 'https://unpkg.com/typescript@2.2.2/lib/typescript.js',
        react: 'https://unpkg.com/react@16.3.1/umd/react.development.js',
        'react-dom': 'https://unpkg.com/react-dom@16.3.1/umd/react-dom.development.js',
        '@syncfusion/ej2-react-gantt': 'syncfusion:ej2-react-gantt/dist/ej2-react-gantt.umd.min.js',
        '@syncfusion/ej2-react-base': 'syncfusion:ej2-react-base/dist/ej2-react-base.umd.min.js',
        '@syncfusion/ej2-gantt': 'syncfusion:ej2-gantt/dist/ej2-gantt.umd.min.js',
        '@syncfusion/ej2-grids': 'syncfusion:ej2-grids/dist/ej2-grids.umd.min.js',
        '@syncfusion/ej2-treegrid': 'syncfusion:ej2-treegrid/dist/ej2-treegrid.umd.min.js',
        '@syncfusion/ej2-data': 'syncfusion:ej2-data/dist/ej2-data.umd.min.js',
        '@syncfusion/ej2-base': 'syncfusion:ej2-base/dist/ej2-base.umd.min.js',
        '@syncfusion/ej2-inputs': 'syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js',
        '@syncfusion/ej2-calendars': 'syncfusion:ej2-calendars/dist/ej2-calendars.umd.min.js',
        '@syncfusion/ej2-buttons': 'syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js',
        '@syncfusion/ej2-popups': 'syncfusion:ej2-popups/dist/ej2-popups.umd.min.js',
        '@syncfusion/ej2-navigations': 'syncfusion:ej2-navigations/dist/ej2-navigations.umd.min.js',
        '@syncfusion/ej2-lists': 'syncfusion:ej2-lists/dist/ej2-lists.umd.min.js'
    },
    packages: {
        app: { main: 'index', defaultExtension: 'tsx' }
    }
});
System.import('app');
