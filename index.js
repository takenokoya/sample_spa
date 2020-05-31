const vm = new Vue({
    el: '#app',
    data() {
        return {
            message: null
        }
    }
})

//$mount
// vm.$mount('#app')

window.vm = vm

// vm.$watch(function () {
//     return this.message
// }, function (message) {
//     console.log('変更後の値:', + message)
// })