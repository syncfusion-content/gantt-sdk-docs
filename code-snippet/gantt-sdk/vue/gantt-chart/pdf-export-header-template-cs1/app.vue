<template>
  <div>
    <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields="taskFields" :toolbar="toolbar" :toolbarClick="toolbarClick" :allowPdfExport='true' :pdfColumnHeaderQueryCellInfo="pdfColumnHeaderQueryCellInfo" :height="height"
    :rowHeight="rowHeight" :taskbarHeight="taskbarHeight"  :splitterSettings="splitterSettings" :allowResizing='true' :resourceFields="resourceFields"
    :projectStartDate="projectStartDate" :projectEndDate="projectEndDate" :resources="resources">
   
    <template v-slot:nametemplate="{data}">
            <div>
               <img src="../Task name.png" style="height: 20; width: 20;" class="e-image"/> Task Name
            </div>
    </template>

    <template v-slot:datetemplate="{data}">
            <div>
                    <img src="../Start date.png" style="height: 20; width: 20;"  class="e-image"/> Start Date
                </div>
   </template>

      <e-columns>
        <e-column field='TaskID' headerText='Task ID' textAlign='Left' width='100' :headerTemplate="'nametemplate'"></e-column>
        <e-column field='TaskName' headerText='Task Name' width='150' :headerTemplate="'datetemplate'"></e-column>
      </e-columns>
    </ejs-gantt>
  </div>
</template>
<script>
import { GanttComponent, ColumnsDirective, ColumnDirective, Toolbar, PdfExport, Selection ,PdfQueryCellInfoEventArgs } from "@syncfusion/ej2-vue-gantt";
import { editingData , editingResources } from './data-source.js';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
export default {
name: "App",
components: {
"ejs-gantt":GanttComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data: function() {
    let i =0;
      return{
            data: editingData,
            taskFields: {
             id: 'TaskID',
            name: 'TaskName',
            resourceInfo: 'resources',
            startDate: 'StartDate',
            duration: 'Duration',
            child: 'subtasks',
            },
            toolbar: ['PdfExport'],
            toolbarClick: (args) => {
                if (args.item.id === 'GanttContainer_pdfexport') {
                    var exportProperties = {
                      fileName:"new.pdf"
                    };
                    var ganttChart = document.getElementById('GanttContainer').ej2_instances[0];
                    ganttChart.pdfExport(exportProperties);
                }
            },
            
            pdfColumnHeaderQueryCellInfo: (args) => {
              let base64Array = [
                  { 'TaskName': '/9j/4AAQSkZJRgABAQIAHAAcAAD/4QBiRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAMAAAITAAMAAAABAAEAAAAAAAAAAAAcAAAAAQAAABwAAAAB/9sAQwADAgICAgIDAgICAwMDAwQGBAQEBAQIBgYFBgkICgoJCAkJCgwPDAoLDgsJCQ0RDQ4PEBAREAoMEhMSEBMPEBAQ/9sAQwEDAwMEAwQIBAQIEAsJCxAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQ/8AAEQgAIAAgAwERAAIRAQMRAf/EABgAAQEBAQEAAAAAAAAAAAAAAAYIAAcF/8QALBAAAQQCAgEDAwIHAAAAAAAAAQIDBAUGBxESAAgTIRQVQRYxFzhXdpa01f/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwB7gessOlaiw2zpdS4Ld2cqngOyl2rLbHcqjpLiy6IzylL7/gp/J+RxwQQt68w6mewu7XrfEKC+azXGuiqiO2r2ybqKnhD3stLVy2TyOg/cj5A5IXr4G8Cf9+aD0XT6K2Nb1GlsEgz4OJW8mLKjY5DaeYdRDdUhxC0thSVJUAQoEEEAjwNW2XoFprGLb1E/QEGdBeRJiyoztK08w6hQUhxC0kFKkqAIUCCCAR4CDD9sbV2RWSso19r3BrDGza2NfWWEnOH21T2Yst2MJKUs1ryAhwslSeHFfBHyRwSHnW26tv12qpO5Ier8GtMdYoVZI2qJm01L0iCGPfC0IeqEcKLfyErKT+DwfjwFvqO/l62h/Zl3/oveB0TwJTe2FRYxX5RqrLrj065HUuZRdzXIOQ7GRHc6yLV+YlmVDcgPJS6044AQVHhTY/I58Ao3lmJUeibfRWBZH6bKCFbUL1K7PTtRpTrzjsQRlzJCWqxoPyFISkqWepUQOfj48Ctdj4j/ABA15lGB/cPoP1JSzaj6v2vd+n+oYW17nTsnv1789ew5445H7+Ad+x+oX+qGu/8AA53/AGPA5drHb+D4rru/xSy3nrPG86i5hkwnOXDjbTIkG9lrU4qCqY271W0R0BfJSFI5UvqQQKWW5cOT6NMhxTZO+9d5Fl72ByIYjQrmM9LMo1oQll0iXIMuSH+3Z9BSlaiFBCeOSH//2Q=='},
                  { 'StartDate' : '/9j/4AAQSkZJRgABAQIAHAAcAAD/4QBiRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAMAAAITAAMAAAABAAEAAAAAAAAAAAAcAAAAAQAAABwAAAAB/9sAQwADAgICAgIDAgICAwMDAwQGBAQEBAQIBgYFBgkICgoJCAkJCgwPDAoLDgsJCQ0RDQ4PEBAREAoMEhMSEBMPEBAQ/9sAQwEDAwMEAwQIBAQIEAsJCxAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQ/8AAEQgAIAAgAwERAAIRAQMRAf/EABcAAQEBAQAAAAAAAAAAAAAAAAcABgX/xAAzEAAABAQDBwEGBwAAAAAAAAABAgMEBQYHEQgSEwAUFRYYITI0IiQxMzVCN0NRVWaCg//EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAGBEBAQEBAQAAAAAAAAAAAAAAABEBIUH/2gAMAwEAAhEDEQA/AG2t2PafKP4qHFI3sLlRGR4bE4QlEIi4Yu1XqLJdBsq5UAU1spjEKqoJQBIfEoZTD8QCJcxxTdhwp3JlI6RxCQ5yYQmGOVYjEVYbE8oPVoi8VFNMVRanEoInbjcUvIxwAw27BTHjim7EfTuc6R1ciEhyawi0MbKw6IpQ2J5ReoxFmqCagpC6OBRRI4G4JeRSAJgv3B3ojj2nysGKhvSNlC5UWkeJROLpQ+It2LtJ6syQQcqtlBFRbKUxypJiYBSDyMGUo/AOtP7GoFVcRtTZRkWjGHiLcm8F3qKTvLi68Qd72wIoTMslm1MmmcgXAtigmAXsO1lSwYwJKqEwV0mLD8yw54TiTFLMNJFXblWUHAMjpHK2MAJnC5xNZ2n2EgB2N37BdCqOpVQl+uku4fnuHPCceYpmhp4q0cpSg4FkRIhXJhBQ42OBrNFOwEEO5e/cbIUnSAxqBSrEbTKUZ6oxh4hPOXGt1ikkS4uhEGm6MDqHyrK5dPPqEINgNcoqANrhskLWameB0/jWL2uPPWIuYaV6PLO68Jm5CB8SvCy58+qA62nYlreOqN/INmGiCT5cpetjBnmEvcV00w2XUIAio0ndKem6L2Jq5GN2ykQEMixQEygaYBcN3KH5Y7PTxThLlL0cYMjQlliummJS6vAFlHc7qz03WewxXI+s2TiABkRKIlTDTELjvBg/MDZ6eF+WIHT+C4vaHci4i5hqprczb1xabkI5w20LNkyaQBo6lz3v5aQW8R2aYz1VOkrq9rP1Sfx3gX1P9rJvPof8PP8Ar92zDQxLHQ71NzbzJ+EHBkuAfV/X5Gefw968t8+Z7P6fZs4dUz9DvU3KXLf4QcGV4/8AV/X5HmTz968tz+X7P6/fs4dM9K+krq9ox0t/yLjv1P8Aaz7t67/fw/t9uzTH/9k='},
                  ]
              while (i < base64Array.length) {
                  const key = Object.keys(base64Array[i])[0];
                  const value = base64Array[i][key];
                  if (key === args.column.field) {
                      args.headerTemplate.image = [{
                          base64: value, width: 20, height: 20
                      }];
                      args.headerTemplate.value = args.column.field;
                      args.headerTemplate.fontStyle.fontSize = 6;
                      args.headerTemplate.fontStyle.fontColor = new PdfColor(255, 0, 0);
                      break;
                  }
                i++;
            }
          },
      rowHeight:55,
      splitterSettings:{
           columnIndex:3
        },
      height:'450px',
      resourceFields: {
            id: 'resourceId',
            name: 'resourceName',
        },
      resources: editingResources,
      projectStartDate: new Date('03/24/2019'),
      projectEndDate: new Date('04/30/2019'),
      }
  },
  provide: {
      gantt: [Toolbar, PdfExport]
  }
};
</script>