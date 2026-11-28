System.config({
    transpiler: 'ts',
    typescriptOptions: {
        target: 'es5',
        module: 'commonjs',
        moduleResolution: 'node',
        jsx: 'react'
    },
    paths: {
        'syncfusion:': 'https://cdn.syncfusion.com/ej2/35.1.37/'
    },
    map: {
        app: 'app',
        ts: 'https://unpkg.com/plugin-typescript@4.0.10/lib/plugin.js',
        typescript: 'https://unpkg.com/typescript@2.2.2/lib/typescript.js',
        '@syncfusion/ej2-base': 'syncfusion:ej2-base/dist/ej2-base.umd.min.js',
        '@syncfusion/ej2-buttons': 'syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js',
        '@syncfusion/ej2-calendars': 'syncfusion:ej2-calendars/dist/ej2-calendars.umd.min.js',
        '@syncfusion/ej2-data': 'syncfusion:ej2-data/dist/ej2-data.umd.min.js',
        '@syncfusion/ej2-dropdowns': 'syncfusion:ej2-dropdowns/dist/ej2-dropdowns.umd.min.js',
        '@syncfusion/ej2-gantt': 'syncfusion:ej2-gantt/dist/ej2-gantt.umd.min.js',
        '@syncfusion/ej2-grids': 'syncfusion:ej2-grids/dist/ej2-grids.umd.min.js',
        '@syncfusion/ej2-inputs': 'syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js',
        '@syncfusion/ej2-lists': 'syncfusion:ej2-lists/dist/ej2-lists.umd.min.js',
        '@syncfusion/ej2-navigations': 'syncfusion:ej2-navigations/dist/ej2-navigations.umd.min.js',
        '@syncfusion/ej2-popups': 'syncfusion:ej2-popups/dist/ej2-popups.umd.min.js',
        '@syncfusion/ej2-splitbuttons': 'syncfusion:ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js',
        '@syncfusion/ej2-treegrid': 'syncfusion:ej2-treegrid/dist/ej2-treegrid.umd.min.js',
        '@syncfusion/ej2-react-base': 'syncfusion:ej2-react-base/dist/ej2-react-base.umd.min.js',
        '@syncfusion/ej2-react-buttons': 'syncfusion:ej2-react-buttons/dist/ej2-react-buttons.umd.min.js',
        '@syncfusion/ej2-react-dropdowns': 'syncfusion:ej2-react-dropdowns/dist/ej2-react-dropdowns.umd.min.js',
        '@syncfusion/ej2-react-gantt': 'syncfusion:ej2-react-gantt/dist/ej2-react-gantt.umd.min.js',
        '@syncfusion/ej2-react-grids': 'syncfusion:ej2-react-grids/dist/ej2-react-grids.umd.min.js',
        '@syncfusion/ej2-react-treegrid': 'syncfusion:ej2-react-treegrid/dist/ej2-react-treegrid.umd.min.js',
        '@syncfusion/ej2-svg-base': 'syncfusion:ej2-svg-base/dist/ej2-svg-base.umd.min.js',
        '@syncfusion/ej2-react-svg-base': 'syncfusion:ej2-react-svg-base/dist/ej2-react-svg-base.umd.min.js',
        react: 'https://unpkg.com/react@16.3.1/umd/react.development.js',
        'react-dom': 'https://unpkg.com/react-dom@16.3.1/umd/react-dom.development.js'
    },
    packages: {
        app: { main: 'index', defaultExtension: 'tsx' }
    }
});

System.import('app');
