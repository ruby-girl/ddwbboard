import { getAction,postAction,getddwbAction} from '@/api/manage'

/**
 * (params)=>postAction("",params);
 * (params)=>getAction("",params);
 * @param params
 * @returns {*}
 */


// 获取主体信息
const getSubjectInfo = (params)=>getAction("/api/billboardIndexs/getSubjectInfo",params);

// 获取年度有机肥用量
const getAnnualFertilizer = (params)=>getAction("/api/billboardIndexs/getAnnualFertilizer",params);
// 获取实时工单信息
const getWorkOrderByRealTime = (params)=>getAction("/api/billboardIndexs/getWorkOrderByRealTime",params);
export {
    getSubjectInfo,
    getAnnualFertilizer,
    getWorkOrderByRealTime
}
