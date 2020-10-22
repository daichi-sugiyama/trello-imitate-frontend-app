import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import { Data } from '~/models/Data'

// stateFactory: true → Vuex をモジュールモードで扱うために指定
@Module({ stateFactory: true, namespaced: true, name: 'todos' })
export default class Todos extends VuexModule {
  todos: Data[] = []

  /**
   * Todo を追加する
   * @param text Todo テキスト
   */
  @Mutation
  add(text: string) {
    const todos: Data[] = this.todos
    // Todo を作成
    const todo: Data = {
      // リストがない場合、id = 0
      // リストがある場合、id = リストの最終要素の id + 1
      id: Datas.length === 0 ? 0 : Datas[todos.length - 1].id + 1,
      text,
      done: false
    }
    // リストに Todo を追加
    this.todos.push(todo)
  }

  /**
   * Todo を削除する
   * @param todo 削除する Todo インスタンス
   */
  @Mutation
  remove(todo: Data) {
    this.todos.splice(this.todos.indexOf(todo), 1)
  }

  /**
   * Todo の done（完了状態）を切り替える
   * @param todo 完了状態を切り替える対象の Todo インスタンス
   */
  @Mutation
  toggle(todo: Data) {
    todo.done = !todo.done
  }
}