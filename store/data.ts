import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import { listType, cardType } from '~/models/Data'

// stateFactory: true → Vuex をモジュールモードで扱うために指定
@Module({ stateFactory: true, namespaced: true, name: 'todos' })
export default class Data extends VuexModule {
  cards: cardType[] = [];
  lists: listType[] = [];

  /**
   * cardを追加する
   * @param title card
   */
  @Mutation
  addCard(title: string) {
    const cards: cardType[] = this.cards;
    const card: cardType = {
      // カードがない場合、cardId = 0
      // カードがある場合、cardId = カードの最終要素の id + 1
      cardId: cards.length === 0 ? 0 : cards[cards.length - 1].cardId + 1,
      cardTitle: title
    }
    this.cards.push(card)
  }

  /**
   * cardを削除する
   * @param title card
   */
  @Mutation
  removeCard(card: cardType) {
    this.cards.splice(this.cards.indexOf(card), 1)
  }
}