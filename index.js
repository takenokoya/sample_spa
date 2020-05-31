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
            message: 'hello',
            interval_id: null
        }
    },
    beforeCreate() {
        console.log('before init Vue instance')
    },
    created() {
        console.log('after init Vue instance')
        this.message = 'incetance initialized'

        let seconds = 1
        this.interval_id = setInterval(() => {
            console.log(`${seconds++}second`)
        }, 1000) 
    },
    beforeMount() {
        console.log('before mount')
    },
    mounted() {
        console.log('after mount')
    },
    beforeUpdate() {
        console.log('before DOM update')
    },
    updated() {
        console.log('after DOM update')
    },
    beforeDestroy() {
        console.log('before destroy Vue instance')
        clearInterval(this.interval_id)
    },
    destroyed() {
        console.log('after destroy Vue instance')
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