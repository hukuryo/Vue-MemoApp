<template>
    <!-- URLからパラメータ(ID)を受け取る -->
    <!-- パラメータから受け取ったIDと一致しない時は、pタグの中の表示をする -->
    <MemoForm v-if="memo" :memo="memo" />
    <p v-else>指定されたメモはありません</p>
    
</template>
<script>
import MemoForm from '@/components/MemoForm.vue'

export default {
    name: 'EditView',
    components: {
        MemoForm,
    },
    computed: {
        memo() {
            // idにURLのパラメータを保存する
            const id = parseInt(this.$route.params.id)
            // 保存したIDをstoreで定義したメソッドに渡す
            return this.$store.getters.getMemoById(id)
        }
    }
}
</script>
