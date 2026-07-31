<template>
    <div>
        <ejs-gantt ref='gantt' id="GanttContainer" 
            :dataSource="data" 
            :taskFields="taskFields" 
            :baselineTemplate="baselineTemplateFunc"
            :splitterSettings="splitterSettings"
            :tooltipSettings="tooltipSettings"
            :allowSelection="true"
            :renderBaseline="true"
            :rowHeight="60"
            :taskbarHeight="20"
            gridLines="Both"
            :highlightWeekends="true"
            :columns="columns"
            :labelSettings="labelSettings"
            :height="height"
            baselineColor='red'
        ></ejs-gantt>
    </div>
</template>
<script>
import { GanttComponent, Selection, DayMarkers } from "@syncfusion/ej2-vue-gantt";
import { baselineTemplateData } from './data-source.js';

export default {
    name: "App",
    components: {
        "ejs-gantt": GanttComponent
    },
    data: function() {
        return {
            data: baselineTemplateData,
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                baselineStartDate: 'BaselineStartDate',
                baselineEndDate: 'BaselineEndDate',
                parentID: 'ParentID'
            },
            splitterSettings: {
                columnIndex: 3,
            },
            tooltipSettings: {
                showTooltip: false,
            },
            columns: [
                { field: 'TaskID', headerText: 'ID', textAlign: 'Left' },
                { field: 'TaskName', width: '270px', headerText: 'Name' },
                { field: 'BaselineStartDate', headerText: 'Baseline Start Date', width: '180px' },
                { field: 'BaselineDuration', headerText: 'Baseline Duration', width: '180px' },
                { field: 'BaselineStartDate1', format: { skeleton: 'yMd', type: 'date' }, headerText: 'Baseline1 Start Date', width: '180px' },
                { field: 'BaselineDuration1', headerText: 'Baseline1 Duration', width: '180px' },
                { field: 'BaselineStartDate2', format: { skeleton: 'yMd', type: 'date' }, headerText: 'Baseline2 Start Date', width: '180px' },
                { field: 'BaselineDuration2', headerText: 'Baseline2 Duration', width: '180px' }
            ],
            labelSettings: {
                taskLabel: 'TaskName'
            },
            height: '450px',
        };
    },
    provide: {
        gantt: [Selection, DayMarkers]
    },
    methods: {
        baselineTemplateFunc: function() {
            return {
                template: {
                    template: function(props) {
                        if (props.hasChildRecords || (props.data && props.data.hasChildRecords)) {
                            return '';
                        }

                        const gantt = this.$refs.gantt.ej2Instances;
                        const taskRecord = props.taskData;
                        const ganttProperties = taskRecord.ganttProperties;
                        const chartRowsModule = gantt.chartRowsModule;

                        const baselineTop = chartRowsModule.baselineTop;
                        const baselineHeight = chartRowsModule.baselineHeight;
                        const taskBarHeight = chartRowsModule.taskBarHeight;
                        const milestoneHeight = chartRowsModule.milestoneHeight;
                        const milestoneMarginTop = chartRowsModule.milestoneMarginTop;

                        const rowHeight = gantt.rowHeight;
                        const renderBaseline = gantt.renderBaseline;
                        const enableRtl = gantt.enableRtl;

                        const taskSpacing = 9;
                        const baselineSpacing = 4;

                        const getLeft = (date) => {
                            return gantt.dataOperation.getTaskLeft(
                                new Date(date),
                                false,
                                ganttProperties.calendarContext
                            );
                        };

                        const getWidth = (start, duration) => {
                            if (!start || duration == null || duration === 0) return 0;

                            const end = new Date(start);
                            end.setDate(end.getDate() + duration);

                            const leftStart = gantt.dataOperation.getTaskLeft(
                                new Date(start),
                                false,
                                ganttProperties.calendarContext
                            );

                            const leftEnd = gantt.dataOperation.getTaskLeft(
                                end,
                                false,
                                ganttProperties.calendarContext
                            );

                            return leftEnd - leftStart;
                        };

                        const render = (start, duration, index) => {
                            if (!start) return '';

                            const leftPosition = getLeft(start);
                            const width = getWidth(start, duration);

                            if (duration === 0) {
                                const milestoneSize = renderBaseline ? taskBarHeight : (taskBarHeight - 10);
                                const baselineMilestoneHeight = renderBaseline ? 5 : 2;

                                const leftPosition_ms = enableRtl
                                    ? (leftPosition - (milestoneHeight / 2) + 3)
                                    : (leftPosition - (milestoneHeight / 2) + 1);

                                const marginTop =
                                    (-Math.floor(rowHeight - milestoneMarginTop) + baselineMilestoneHeight) +
                                    2 +
                                    (index * baselineSpacing);

                                return '<div class="e-baseline-gantt-milestone-container" style="position:absolute;' +
                                    'width:' + milestoneSize + 'px;' +
                                    'height:' + milestoneSize + 'px;' +
                                    'transform:rotate(45deg);' +
                                    (enableRtl ? 'right:' : 'left:') + leftPosition_ms + 'px;' +
                                    'margin-top:' + marginTop + 'px;">' +
                                    '</div>';
                            }

                            return '<div class="e-baseline-bar" role="term" style="position:absolute;' +
                                (enableRtl ? 'right:' : 'left:') + leftPosition + 'px;' +
                                'margin-top:' + (baselineTop + (index * taskSpacing)) + 'px;' +
                                'width:' + width + 'px;' +
                                'height:' + baselineHeight + 'px;"></div>';
                        };

                        return (
                            '<div class="custom-multi-baseline">' +
                            render(taskRecord.taskData.BaselineStartDate, taskRecord.taskData.BaselineDuration, 0) +
                            render(taskRecord.taskData.BaselineStartDate1, taskRecord.taskData.BaselineDuration1, 1) +
                            render(taskRecord.taskData.BaselineStartDate2, taskRecord.taskData.BaselineDuration2, 2) +
                            '</div>'
                        );
                    }
                }
            };
        }
    }
};
</script>