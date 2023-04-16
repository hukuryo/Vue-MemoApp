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
    }
  },
  mutations: {
    // メモを保存する
    save (state, newMemo){
      // メモの内容が保存された後に、それぞれの要素にIDを付与する処理
      newMemo.id = ++state.count
      state.memos.unshift(newMemo)
    }
  },
  actions: {
  },
  modules: {
  }
})
