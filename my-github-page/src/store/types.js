export const HOST_NAME = ~window.location.hostname.indexOf("localhost") ?
  "http://localhost:3000/" :
  "https://shonesinglone.leanapp.cn/";

/**
 * Getters
 */
export const IS_MOBILE = "IS_MOBILE"; //是否是小窗口设备
// MAIN_STATE

/**
 * 设置设备视窗宽度
 * @augments width integer
 */
export const SET_DW = "SET_DW";

//遮罩显隐
export const SET_MODAL_SHOW = "SET_MODAL_SHOW";
export const SET_MODAL_HIDDEN = "SET_MODAL_HIDDEN";

//blog
// 切换的时候触发， watchgetter值， 如果有更新， 则替换
export const GET_BLOG_LIST = "GET_BLOG_LIST";
