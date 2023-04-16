<template>
    <!-- フォームの内容を、v-modelでJavaScriptと結びつける -->
    <div><input type="text" v-model="title"></div>
    <div><textarea v-model="content"></textarea></div>
    <div class="center">
        <button @click="save">保存</button>
        <button @click="remove" v-if="memo.id">削除</button>
    </div>
</template>

<script>
export default {
    // この名前に意味はないが、基本的にはファイル名にする
    name: 'MemoForm',
    props: [
        'memo'
    ],
    data() {
        return {
            // フォーム要素の初期値を決める処理
            title: this.memo.title,
            content: this.memo.content
        }
    },
    methods: {
        save() {
            // フォームから送られてきた内容を保存する変数
            let memo = {
                title: this.title,
                content: this.content
            }

            if(this.memo.id){
                memo.id = this.memo.id
            }
            // 'save'は、store/indexファイルのmutationsの中のsaveを呼び出す
            // そして、データをstate内のmemo配列に渡す
            this.$store.commit('save', memo)
            // メモを保存後にHomeページに飛ばす処理
            this.$router.push('/')
        },
        remove() {
            this.$store.commit('delete', this.memo.id)
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
    div {
        margin-bottom: 10px;
    }
    input[type=text] {
        width: 100%;
    }
    textarea{
        width: 100%;
        height: 30em;
    }
    button{
        width: 5em;
        margin: 3px;
    }
    .center{
        text-align: center;
    }
</style>