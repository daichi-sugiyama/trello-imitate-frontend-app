import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import { listData, listType, cardType } from '~/models/DataType'

// stateFactory: true → Vuex をモジュールモードで扱うために指定
@Module({ stateFactory: true, namespaced: true, name: 'data' })
export default class Data extends VuexModule {
  // サンプルデータを読み込み
  listData: listType[] = listData;

  /**
   * listを追加
   * @param title
   */
  @Mutation
  addList(title: string) {
    const lists: listType[] = this.listData;
    const list: listType = {
      // リストがない場合、cardId = 0
      // リストがある場合、cardId = リストの最終要素の id + 1
      listId: this.listData.length === 0 ? 0 : this.listData[lists.length - 1].listId + 1,
      listTitle: title,
      cardData: []
    }
    lists.push(list)
  }

  /**
   * listを編集
   * @param list
   */
  @Mutation
  updateList(list: listType[]) {
    this.listData = list
  }

  /**
   * listを削除
   * @param list
   */
  @Mutation
  removeList(list: listType) {
    this.listData.splice(this.listData.indexOf(list), 1)
  }


  /**
   * cardを追加
   * @param arg: {title: string, list: listType}
   */
  @Mutation
  addCard(arg: {title: string, list: listType}) {
    const cards: cardType[] = arg.list.cardData;
    const card: cardType = {
      // カードがない場合、cardId = 0
      // カードがある場合、cardId = カードの最終要素の id + 1
      cardId: cards.length === 0 ? 0 : cards[cards.length - 1].cardId + 1,
      cardTitle: arg.title
    }
    cards.push(card)
  }

  /**
   * cardを削除
   * @param arg: {list: listType, card: cardType}
   */
  @Mutation
  removeCard(arg: {list: listType, card: cardType}) {
    arg.list.cardData.splice(arg.list.cardData.indexOf(arg.card), 1)
  }

  /**
   * cardを編集
   * @param arg: {list: listType, card: cardType[]}
   */
  @Mutation
  updateCard(arg: {list: listType, card: cardType[]}) {
    arg.list.cardData = arg.card
  }
}