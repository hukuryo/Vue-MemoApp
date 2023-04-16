<template>
  <div class="home">
    <!-- v-ifでcomputed内のメソッドを実行する -->
    <ul v-if="HasMemos">
      <li v-for="memo in memos" :key="memo.id">
        <router-link :to="{ name: 'edit', params: { id: memo.id } }">
          {{ memo.title }}  
        </router-link>
      </li>
    </ul>
    <p v-else>メモはありません</p>
  </div>
</template>
<style scoped>
  ul{
    margin: 0;
    padding: 0;
  }

  li{
    list-style: none;
    border-bottom: 1px solid#ccc;
    padding-bottom: 10px;
    margin-bottom: 10px;
    text-align: left;
  }

  li a{
    color: #999;
    text-decoration: none;
    width: 100%;
    display: block;
  }
</style>
<script>
export default {
  name: 'HomeView',
  computed: {
    // メモの数が何個あるかを取得する処理
    // gettersはstoreからメソッドを取得している
    HasMemos() {
      return this.$store.getters.getCount
    },
    // 他のファイル(今回はstore/index.jsから)データを引っ張ってきて、渡すことができる記述
    memos() {
      // storeからデータを引っ張ってくる処理
      return this.$store.getters.getAll
    }
  }
}
</script>
