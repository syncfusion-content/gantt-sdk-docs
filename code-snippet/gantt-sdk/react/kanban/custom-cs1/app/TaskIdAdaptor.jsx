import { setValue } from '@syncfusion/ej2-base';
import { ODataAdaptor } from '@syncfusion/ej2-data';
export class TaskIdAdaptor extends ODataAdaptor {
    processResponse() {
        let i = 0;
        /* calling base class processResponse function */
        const original = super.processResponse.apply(this, arguments);
        /* adding Task Id */
        original.forEach((item) => setValue('Id', 'Task - ' + ++i, item));
        return original;
    }
}
