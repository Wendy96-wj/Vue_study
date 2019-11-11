 // 相当于state的计算属性
export default {
    // counter的两倍
    powerCounter(state) {
        return state.counter * state.counter
    },

    // 判断年龄大于20的学生
    more20stu(state) {
        return state.students.filter(s => s.age > 20)
    },

    // 判断年龄大于20的学生数量
    more20stuLength(state, getters) {
        return getters.more20stu.length
    },

    // 动态传入age进行判断年龄大于传入的age的学生
    moreAgeStu (state){
        return  (age) => {
            return state.students.filter(s => s.age > age)
        }
    }
}