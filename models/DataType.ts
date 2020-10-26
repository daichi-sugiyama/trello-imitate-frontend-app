export type cardType = {
  cardId: number
  cardTitle: string
}

export type listType = {
  listId: number
  listTitle: string
  cardData: cardType[]
}