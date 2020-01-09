export default {
    /**
     * @param {param}: method param
     */
    defaultMed(context, param) {
        context.commit('mutation', param)
    },
    addNowCount(context, count) {
        console.log(context)
        context.commit('addCount', count)
    }
}