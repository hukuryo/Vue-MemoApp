<template>
  <div class="home">
    <!-- v-ifでcomputed内のメソッドを実行する -->
    <ul v-if="HasMemos">
      <li v-for="memo in memos" :key="memo.id">
        {{ memo.title }}
      </li>
    </ul>
    <p v-else>メモはありません</p>
  </div>
</template>
<script>
export default {
  name: 'HomeView',
  computed: {
    // メモの数が何個あるかを取得する処理
    HasMemos() {
      return this.$store.state.memos.length
    },
    // 他のファイル(今回はstore/index.jsから)データを引っ張ってきて、渡すことができる記述
    memos() {
      // storeからデータを引っ張ってくる処理
      return this.$store.state.memos
    }
  }
}
</script>
