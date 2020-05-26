const vm = new Vue({
    el: '#app',
    data() {
        return {
            button_disabled: false
        }
    },
    computed: {
        button_label() {
            console.log('button_disabled called')
            return this.button_disabled ? 'disable' : 'enable'
        },
        now() {
            return new Date().toTimeString()
        }
    },
    methods: {
        log() {
            console.log(this.now)
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