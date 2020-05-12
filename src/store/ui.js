import { observable, action } from "mobx";
class UI {
    @observable loading = false
    @action setLoading = () => { // 调登录接口
    }
}
const ui= new UI() //创建backend实体类
export {
    ui //抛出对象
}