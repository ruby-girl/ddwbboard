import { getAction,postAction,getddwbAction} from '@/api/manage'

/**
 *  公共模块
 */
const getCrops = (params)=>getAction("/common/input/crops",params);

/**
 * (params)=>postAction("",params);
 * (params)=>getAction("",params);
 * @param params
 * @returns {*}
 */
const addMenu = (params)=>postAction("/resource/add",params);
const updateMenu = (params)=>postAction("/resource/update",params);
const deleteMenu = (params)=>getAction("/resource/delete",params);

const queryEnv = (params)=>getAction("/envmonitor/listBySiteId",params);
const deleteEnv = (params)=>getAction("/envmonitor/delete",params);
const saveEnv = (params)=>postAction("/envmonitor/save",params);
const updateEnv = (params)=>postAction("/envmonitor/update",params);

const queryWalker = (params)=>getAction("/walker/list",params);
const deleteWalker = (params)=>getAction("/walker/delete",params);
const saveWalker = (params)=>postAction("/walker/add",params);
const updateWalker = (params)=>postAction("/walker/update",params);

const addItem = (params)=>postAction("/testitem/add",params);
const updateItem = (params)=>postAction("/testitem/update",params);
const deleteItem = (params)=>getAction("/testitem/delete",params);

const queryBase = (params)=>getAction("/baseInfo/list",params);
const queryAllBase = (params)=>getAction("/baseInfo/all",params);
const updateBase = (params)=>postAction("/baseInfo/updateData",params);
const insertBase = (params)=>postAction("/baseInfo/add",params);
const deleteBase = (params)=>getAction("/baseInfo/deleteData",params);

const queryFarmer = (params)=>getAction("/farmer/list",params);

const queryBaseById = (params)=>getAction("/baseInfo/queryBaseInfoById",params);
const deleteBlock = (params)=>getAction("/block/delete",params);
const getBlockByBaseId = (params)=>getAction("/block/getBlockByBaseId",params);
const blockAdd = (params)=>postAction("/block/add",params);
const blockUpdate = (params)=>postAction("/block/update",params);

const queryBatch = (params)=>getAction("/batch/list",params);
const batchAdd = (params)=>postAction("/batch/insert",params);
const batchUpdate = (params)=>postAction("/batch/update",params);
const batchDelete = (params)=>getAction("/batch/delete",params);
const getBatchCount = (params)=>getAction("/batch/getBatchCount",params);
const selectByBaseId = (params)=>getAction("/batch/selectByBaseId",params);

const workerOrderDelete = (params)=>getAction("/workOrder/delete",params);
const selectWorkOrderByBatchId = (params)=>getAction("/workOrder/selectWorkOrderByBatchId",params);

const farmingRecordAll = (params)=>getAction("/farmingRecord/all",params);
const farmingRecordDelete = (params)=>getAction("/farmingRecord/delete",params);
const farmingRecordList = (params)=>getAction("/farmingRecord/list",params);
const farmingRecordInsert = (params)=>postAction("/farmingRecord/insert",params);
const farmingRecordUpdate = (params)=>postAction("/farmingRecord/update",params);

const picDelete = (params)=>getAction("/pictureInfo/delete",params);

export {
  getCrops,

  addMenu,
  updateMenu,
  deleteMenu,

  queryEnv,
  deleteEnv,
  saveEnv,
  updateEnv,

  queryWalker,
  deleteWalker,
  saveWalker,
  updateWalker,

  addItem,
  updateItem,
  deleteItem,

  queryBase,
  queryAllBase,
  updateBase,
  insertBase,
  deleteBase,

  queryFarmer,

  queryBaseById,
  getBlockByBaseId,
  blockAdd,
  blockUpdate,
  deleteBlock,

  queryBatch,
  batchAdd,
  batchUpdate,
  batchDelete,
  getBatchCount,
  selectByBaseId,

  workerOrderDelete,
  selectWorkOrderByBatchId,

  farmingRecordAll,
  farmingRecordDelete,
  farmingRecordList,
  farmingRecordInsert,
  farmingRecordUpdate,

  picDelete,


}
