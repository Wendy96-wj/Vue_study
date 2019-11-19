export default {
    // 方法
    increment(state) {
        state.counter++;
    },
    decrement(state) {
        state.counter--;
    },
    // 携带参数count
    // 1.普通接收方式
    incrementCount(state,count){
        state.counter += count
    },

    // 2.特殊接收方式
    // incrementCount(state,payload){
    //     state.counter += payload.count
    // },


    addStudent(state,stu){
        state.students.push(stu)
    },

    updateInfo(state){
        state.info.name = "lemon"
    }
}
