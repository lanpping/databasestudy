// export const CHANGE_CLIENT_WH = 'CHANGE_CLIENT_WH'
// 创建mutation-types.js文件，对mutations统一管理这样做的目的主要是：1）为了减少编码，比如多个地方存在“save_user_info”时，用常量来引用，可维护性更高，减少手抖多一个字母少一个字母的错误。2）大项目多人开发时，对mutations统一管理，找函数很直观。3）可以根据模块来分类来给mutation type命名，名字多长都可以，常量名简短就好了
export const SAVE_USERINFO = 'SAVE_USERINFO'
