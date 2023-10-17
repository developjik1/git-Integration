import { makeAutoObservable } from 'mobx'

class Count2 {
  number = 0

  constructor() {
    makeAutoObservable(this)
  }

  increase = () => {
    this.number++
  }
  decrease = () => {
    this.number--
  }
}

const countStore2 = new Count2()
export default countStore2