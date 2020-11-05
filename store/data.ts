import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '~/utils/api'
import { jsonData, listType, cardType } from '~/models/DataType'

// TODO:apiのurl
const url: string = ''
const token: string = ''

// stateFactory: true → Vuex をモジュールモードで扱うために指定
@Module({ stateFactory: true, namespaced: true, name: 'data' })
export default class Data extends VuexModule {
  /**
   * サンプルデータを読み込み
   * TODO:いずれはlaravelから値を取得する
   */
  listData: listType[] = [
    {
      "listId": 1,
      "listTitle": "リスト1",
      "cardData": [
        {
          "cardId": 11,
          "cardTitle": "カードタイトル11"
        }
      ]
    }
  ];

  /**
   * listを追加
   * @param title
   */
  @Mutation
  addList(title: string) {
    const lists
    : listType[] = this.listData;
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
   * listを削除
   * @param list
   */
  @Mutation
  deleteList(list: listType) {
    this.listData.splice(this.listData.indexOf(list), 1)
  }

  /**
   * listを編集
   * MEMO: cardParamはカード内のパラメータ
   * @param list
   */
  @Mutation
  updateList(arg: {list: listType[], listParam?: listType}) {
    if (arg.listParam != undefined) {
      arg.list.forEach(item => {
        if(item.listId === arg.listParam?.listId) {
          item.listTitle = arg.listParam.listTitle
        }
      })
    }
    this.listData = arg.list
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
  deleteCard(arg: {list: listType, card: cardType}) {
    arg.list.cardData.splice(arg.list.cardData.indexOf(arg.card), 1)
  }

  /**
   * cardを編集
   * MEMO: cardParamはカード内のパラメータ
   * @param arg: {list: listType, card: cardType[], cardParam?: any}
   */
  @Mutation
  updateCard(arg: {list: listType, card: cardType[], cardParam?: cardType}) {
    if (arg.cardParam != undefined) {
      arg.card.forEach(item => {
        if(item.cardId === arg.cardParam?.cardId) {
          item.cardTitle = arg.cardParam.cardTitle
        }
      })
    }
    arg.list.cardData = arg.card
  }

  /**
   * APIからjsonデータを取得
   */
  @Action({})
  async getData() {
    let res = await $axios.get(url);
    this.updateList({list: jsonData})
  }

  /**
   * apiにデータを更新
   */
  @Action({})
  updateData(list: listType) {
    let res = $axios.post(url);
  }
}