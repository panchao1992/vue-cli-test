export default {
    /**
     * @param {param}: method param
     */
    defaultMed(context, param) {
        context.commit('mutation', param)
    },
    addNowCount(context, count) {
        context.commit('addCount', count)
    }
}