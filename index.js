const vm = new Vue({
    el: '#app',
    template: `
        <div v-if='message'>
            {{ message }}
        </div>
        <div v-else-if='message === ""'>
            メッセージが空文字です
        </div>
        <div v-else>
            メッセージがありません
        </div>
    `,
    data() {
        return {
            message: 'hello'
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