const listTitle = {
    template: `
        <h2>user list</h2>
    `
}

// componentはVueインスタンスの作成前に定義しておく
Vue.component('user-list', {
    components: {
        'list-title': listTitle
    },
    // componentの値は関数の戻り値になるようにする
    data() {
        return {
            users: [
                { id: 1, name: 'ユーザー1' },
                { id: 2, name: 'ユーザー2' },
                { id: 3, name: 'ユーザー3' },
                { id: 4, name: 'ユーザー4' },
                { id: 5, name: 'ユーザー5' }
            ]
        }
    },
    template: `
        <div>
            <list-title></list-title>
            <ul>
                <li v-for="user in users" :key="user.id">
                    {{ user.name }}
                </li>
            </ul>
        </div>

    `
})

const vm = new Vue({
    el: '#app',
})
