import { observable } from 'mobx'

const countStore3 = observable({
  number: 0,
  increase() {
    this.number++
  },
  decrease() {
    this.number--
  },
})

export default countStore3