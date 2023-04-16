import { createStore } from 'vuex'

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
  mutations: {
    // メモを保存する
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
    }
  },
  actions: {
  },
  modules: {
  }
})
