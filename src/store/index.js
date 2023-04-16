import { createStore } from 'vuex'
import { VuexPersistence } from 'vuex-persist'

// vuex-persistを使用する時の決まり文句
const vuexPersist = new VuexPersistence({
  storage: localStorage
})

export default createStore({
  state: {
    // メモにIDを振るためのcount要素を準備する
    count: 0,
    // メモを格納する配列を準備
    memos: []
  },
  getters: {
    //  HomeView.vueで使うメソッドを追加
    getCount: (state) => {
      return state.memos.length
    },
    getAll: (state) => {
      return state.memos
    },
    getMemoById: (state) => (id) => {
      // IDと一致したメモを取り出す処理
      return state.memos.find(memo => memo.id === id)
    }
  },
  // mutationはstoreのデータを変更する処理を書く
  mutations: {
    // vuex-persistを使用する時の決まり文句
    RESTORE_MUTATION: vuexPersist.RESTORE_MUTATION,
    // メモを保存する
    // mutations内のメソッドの引数のstateは決まり文句みたいなもので、必ず記述する
    save (state, newMemo){
      if(newMemo.id){
        let x = state.memos.find(memo => memo.id === newMemo.id)
        x.title = newMemo.title
        x.content = newMemo.content
      } else {
        // メモの内容が保存された後に、それぞれの要素にIDを付与する処理
        newMemo.id = ++state.count
        state.memos.unshift(newMemo)
      }
    },
    // メモを削除する処理
    delete(state, id){
      // 削除したいもの以外のメモを取り出して、別の配列に移して表示する
      // filterはある条件のものを取り出す関数
      // メモIDが、今指定されているもの以外のものを取り出す処理
      state.memos = state.memos.filter(memo => memo.id !== id)
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexPersist.plugin]
})
