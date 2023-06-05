import react from 'react'
import { HelloWorld } from '@monorepo/shared/components/HelloWorld';
import { Counter } from '@monorepo/shared/components/Counter';

function App() {
  return (
    <>
      <h1>Hello from web!</h1>

      <HelloWorld />

      <Counter />
    </>
  )
}

export default App
