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

// 获取地图信息（基地模式）
const getBaseMapInfo = (params)=>getAction("/api/billboardIndexs/getBaseMapInfo",params);
// 获取地图信息（农户模式）
const getFarmerMapInfo = (params)=>getAction("/api/billboardIndexs/getFarmerMapInfo",params);

// 获取基地信息
const getBaseInfo = (params)=>getAction("/api/billboardBaseInfos/getBaseInfo",params);
// 获取农户信息
const getOrganUsers = (params)=>getAction("/api/billboardOrganUsers/getSubjectInfo",params);


// 看板第一页核心企业下的气象监测
const getOrgMonitorTj = (params)=>getAction("/api/billboard/getOrgMonitorTj",params);
// 看板第一页核心企业下采购订单
const getOrgOrderTj = (params)=>getAction("/api/billboard/getOrgOrderTj",params);

// 看板第一页核心企业下的保险服务
const getOrgInsuranceTj = (params)=>getAction("/api/billboard/getOrgInsuranceTj",params);
// 看板第一页核心企业下的贷款服务
const getOrgLoanTj = (params)=>getAction("/api/billboard/getOrgLoanTj",params);

// 看板第二页基地下的空气环境-CO2浓度24小时内数据
const co2value = (params)=>getAction("/api/billboard/base/air/co2value",params);
// 看板第二页基地下的空气环境-湿度24小时内数据
const humidity = (params)=>getAction("/api/billboard/base/air/humidity",params);

// 看板第二页基地下的空气环境-光照强度24小时内数据
const illIntensity = (params)=>getAction("/api/billboard/base/air/illIntensity",params);

// 看板第二页基地下的空气环境-PM2.5浓度24小时内数据
const pm25value = (params)=>getAction("/api/billboard/base/air/pm25value",params);
// 看板第二页基地下的空气环境-压力24小时内数据

const pressure = (params)=>getAction("/api/billboard/base/air/pressure",params);

// 看板第二页基地下的空气环境-降水量24小时内数据
const rainfall = (params)=>getAction("/api/billboard/base/air/rainfall",params);
// 看板第二页基地下的空气环境-温度24小时内数据
const temperature = (params)=>getAction("/api/billboard/base/air/temperature",params);



// 看板第三页基地下的空气环境-CO2浓度24小时内数据
const userco2value = (params)=>getAction("/api/billboard/user/air/co2value",params);
// 看板第三页基地下的空气环境-湿度24小时内数据
const userhumidity = (params)=>getAction("/api/billboard/user/air/humidity",params);

// 看板第三页基地下的空气环境-光照强度24小时内数据
const userillIntensity = (params)=>getAction("/api/billboard/user/air/illIntensity",params);

// 看板第三页基地下的空气环境-PM2.5浓度24小时内数据
const userpm25value = (params)=>getAction("/api/billboard/user/air/pm25value",params);
// 看板第三页基地下的空气环境-压力24小时内数据

const userpressure = (params)=>getAction("/api/billboard/user/air/pressure",params);

// 看板第三页基地下的空气环境-降水量24小时内数据
const userrainfall = (params)=>getAction("/api/billboard/user/air/rainfall",params);
// 看板第三页基地下的空气环境-温度24小时内数据
const usertemperature = (params)=>getAction("/api/billboard/user/air/temperature",params);


// 看板第二页基地下的土壤环境-电导率24小时内数据
const soilEc = (params)=>getAction("/api/billboard/base/soil/ec",params);
// 看板第二页基地下的土壤环境-湿度24小时内数据
const soilHumidity = (params)=>getAction("/api/billboard/base/soil/humidity",params);
//看板第二页基地下的土壤环境-PH24小时内数据
const soilPH = (params)=>getAction("/api/billboard/base/soil/ph",params);
//看板第二页基地下的土壤环境-温度24小时内数据
const soilTemperature = (params)=>getAction("/api/billboard/base/soil/temperature",params);
// 大气温度
const getLastRecord = (params)=>getAction("/api/kanban/base/getLastRecord",params);
//

const getLandLastRecord = (params)=>getAction("/api/kanban/landparcel/getLastRecord",params);
// 看板第三页基地下的土壤环境-电导率24小时内数据
const usersoilEc = (params)=>getAction("/api/billboard/user/soil/ec",params);
// 看板第三页基地下的土壤环境-湿度24小时内数据
const usersoilHumidity = (params)=>getAction("/api/billboard/user/soil/humidity",params);
//看板第三页基地下的土壤环境-PH24小时内数据
const usersoilPH = (params)=>getAction("/api/billboard/user/soil/ph",params);
//看板第三页基地下的土壤环境-温度24小时内数据
const usersoilTemperature = (params)=>getAction("/api/billboard/user/soil/temperature",params);
//农户种植费用
const plantingCost = (params)=>getAction("/api/billboardOrganUsers/plantingCost",params);

// /api/billboard/base/getBaseInsuranceTj看板第二页基地的保险
const getBaseInsuranceTj = (params)=>getAction("/api/billboard/base/getBaseInsuranceTj",params);
// /api/billboard/base/getBaseLoanTj看板第二页基地的贷款
const getBaseLoanTj = (params)=>getAction("/api/billboard/base/getBaseLoanTj",params);
// /api/billboard/base/getBaseOrderTj看板第二页基地的订单合同
const getBaseOrderTj = (params)=>getAction("/api/billboard/base/getBaseOrderTj",params);

// /api/billboard/base/getBaseMonitorTj看板第二页基地最新气象数据
const getBaseMonitorTj = (params)=>getAction("/api/billboard/base/getBaseMonitorTj",params);
// 获取基地面积/作物产量/作物产值
const totalTj = (params)=>getAction("/api/billboardBaseInfos/totalTj",params);


// /api/billboard/user/finance/bx 看板第三页右上角金融数据-保险
const financeBx = (params)=>getAction("/api/billboard/user/finance/bx",params);
// /api/billboard/user/finance/dk 看板第三页右上角金融数据-贷款
const financeDk = (params)=>getAction("/api/billboard/user/finance/dk",params);
// /api/billboard/user/finance/orders 看板第三页右上角金融数据-订单
const financeOrder = (params)=>getAction("/api/billboard/user/finance/orders",params);

// 看板第三页金融占比
const financeProportion = (params)=>getAction("/api/billboard/user/financeProportion",params);

// 农事执行进度
const getFarmWorkProgress = (params)=>getAction("/api/billboardBaseInfos/getFarmWorkProgress",params);

// 获取荧石云的摄像头列表
const getAllMonitors = (params)=>getAction("/api/billboardIndexs/getAllMonitors",params);
// 获取通道/api/billboardIndexs/getMonitorVideosByBaseId 获取基地的摄像头列表
const getMonitorVideosByBaseId = (params)=>getAction("/api/billboardIndexs/getMonitorVideosByBaseId",params);
// 获取首页工单条数
const getWorkOrderByRealTimeCount = (params)=>getAction("/api/billboardIndexs/getWorkOrderByRealTimeCount",params);

// 获取农户信息
const getOrganUserInfo = (params)=>getAction("/api/billboardOrganUsers/getOrganUserInfo",params);
// 获取麦冬价格
const getSite = (params)=>getAction("/api/billboard/getSite",params);
// 根据地区查价格走势
const getPriceBySite = (params)=>getAction("/api/billboard/getPriceBySite",params);


// 获取农户农事操作信息
const getOrganUserFarmWorkRecordInfo = (params)=>getAction("/api/billboardOrganUsers/getOrganUserFarmWorkRecordInfo",params);

// 获取农户地图信息（面积/作物产量/作物产值）
const getOrganuserMapInfo = (params)=>getAction("/api/billboardOrganUsers/getOrganuserMapInfo",params);

// 获取基地面积/作物产量/作物产值
const getBaseMapInfoTotalTj = (params)=>getAction("/api/billboardBaseInfos/totalTj",params);


// 获取看板首页总数据
const getBillboardIndexTotal = (params)=>getAction("/api/billboardIndexs/getBillboardIndexTotal",params);

//基地获取24小时监测--------------最新接口
const getLast24HMonitorRecords = (params)=>getAction("/api/kanban/base/getLast24HMonitorRecords",params);
//农户地块获取24小时监测--------------最新接口
const landparcelGetLast24HMonitorRecords = (params)=>getAction("/api/kanban/landparcel/getLast24HMonitorRecords",params);
// 获取基地列表(包含其摄像头信息)
const getBaseWithMonitorVideos = (params)=>getAction("/api/billboardIndexs/getBaseWithMonitorVideos",params);
//萤石云图片抓取
const capture = (params)=>getAction("/api/billboardIndexs/capture",params);

// 条件查询工单处理数量（按基地分组）
const doneCount = (params)=>getAction("/api/billboardWorkOrder/doneCount",params);
export {
    doneCount,
    getSubjectInfo,
    getAnnualFertilizer,
    getLast24HMonitorRecords,
    getBaseWithMonitorVideos,
    capture,
    landparcelGetLast24HMonitorRecords,
    getWorkOrderByRealTime,
    getBaseMapInfo,
    getFarmerMapInfo,
    getBaseInfo,
    getOrganUsers,
    getOrgMonitorTj,
    getOrgOrderTj,
    getOrgInsuranceTj,
    getOrgLoanTj,
    co2value,
    humidity,
    illIntensity,
    pressure,
    pm25value,
    rainfall,
    temperature,
    getLastRecord,
    userco2value,
    userhumidity,
    userillIntensity,
    userpressure,
    plantingCost,
    userpm25value,
    userrainfall,
    usertemperature,
    getLandLastRecord,
    soilEc,
    soilHumidity,
    soilPH,
    soilTemperature,
    usersoilEc,
    usersoilHumidity,
    usersoilPH,
    usersoilTemperature,
    getBaseInsuranceTj,
    getBaseLoanTj,
    getBaseOrderTj,
    getBaseMonitorTj,
    totalTj,
    financeBx,
    financeDk,
    financeOrder,
    financeProportion,
    getFarmWorkProgress,
    getAllMonitors,
    getMonitorVideosByBaseId,
    getWorkOrderByRealTimeCount,
    getOrganUserInfo,
    getSite,
    getPriceBySite,
    getOrganUserFarmWorkRecordInfo,
    getOrganuserMapInfo,
    getBaseMapInfoTotalTj,
    getBillboardIndexTotal
}
