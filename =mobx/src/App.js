import  {observer} from "mobx-react";
import {autorun} from "mobx";
import store from "./store";

const App = observer(() => {
  const {countStore1, countStore2, countStore3, doubleStore} = store

    autorun(() => {
      if (doubleStore.double) {
        console.log('Double' + doubleStore.double)
      }
      if (doubleStore.double === 8) {
        console.log('만약 value가 4라면 0으로 초기화')
        doubleStore.value = 0
      }
  })

  return (
    <div className="App">
      makeObservable Count: {countStore1.number} {' '}
      <button onClick={()=>countStore1.increase()}>+</button>
      <button onClick={()=>countStore1.decrease()}>-</button>
      <hr/>
      makeAutoObservable Count: {countStore2.number} {' '}
      <button onClick={()=>countStore2.increase()}>+</button>
      <button onClick={()=>countStore2.decrease()}>-</button>
      <hr/>
      observable Count: {countStore3.number} {' '}
      <button onClick={()=>countStore3.increase()}>+</button>
      <button onClick={()=>countStore3.decrease()}>-</button>
      <hr/>
      makeObservable Double: {doubleStore.value}
      <button onClick={()=>doubleStore.increment()}>+</button>
      <hr/>
    </div>
  );
})

export default App;
