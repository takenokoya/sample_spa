const ListTitle = {
    template: `
        <h2>user list</h2>
    `
}

const UserDetail = {
    props: {
        user: {
            type: Object
        }
    },
    template: `
        <div>
            <h2>selected user</h2>
            {{ user.name }}
        </div>
    `
}

// componentはVueインスタンスの作成前に定義しておく
const UserList =  {
    components: {
        'list-title': ListTitle,
        'user-detail': UserDetail
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
            ],
            selected_user: {}
        }
    },
    template: `
        <div>
            <list-title></list-title>
            <ul>
                <li v-for="user in users" :key="user.id" @click='selected_user = user'>
                    {{ user.name }}
                </li>
            </ul>
            <user-detail :user='selected_user'></user-detail>
        </div>

    `
}

const vm = new Vue({
    el: '#app',
    components: {
        'user-list': UserList
    }
})
