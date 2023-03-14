import { DateTime } from './luxon.js';

function getDateDiff(dateFrom, dateTo) {
   // console.log(dateFrom);
    const dataFromObj = DateTime.fromISO(dateFrom);
   // console.log(dataFromObj);
    const dataToObj = DateTime.fromISO(dateTo);
    return dataToObj.diff(dataFromObj, ['years', 'months', 'days']).toObject();
}

export default getDateDiff