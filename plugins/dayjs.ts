import 'dayjs/locale/ja'
import dayjs from 'dayjs'
import Vue from 'vue'

dayjs.locale('ja')

declare module 'vue/types/vue' {
  interface Vue {
    $dayjs(date: string): any
  }
}

Vue.prototype.$dayjs = (date: string) => {return dayjs(date);}