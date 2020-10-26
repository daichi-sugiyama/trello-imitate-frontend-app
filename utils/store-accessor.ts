import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Data from '~/store/data'

// eslint-disable-next-line import/no-mutable-exports
let dataStore: Data;

/**
 * ストアを初期化する（型推論できるモジュールとして取得する）
 * @param store Vuex.Store
 */
function initializeStores(store: Store<any>): void {
  // Dataを型推論できるストアモジュール化
  dataStore = getModule(Data, store)
}

export { initializeStores, dataStore }