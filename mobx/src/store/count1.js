import { action, makeObservable, observable } from 'mobx'

class Count1 {
  number = 0

  constructor() {
    makeObservable(this, {
      number: observable,
      increase: action,
      decrease: action,
    })
  }

  increase = () => {
    this.number++
  }
  decrease = () => {
    this.number--
  }
}

const countStore1 = new Count1()
export default countStore1