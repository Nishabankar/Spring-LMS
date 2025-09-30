
import './App.css'
import Button from './component/atoms/Button'

function App() {


  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">Hello</h1>
        <Button text="sign up" variation="link" size='small' />
        <Button text="login" variation="primary" size='small' />
        <Button text="text" variation="secondary" size="small" />
        <Button variation="icon" size="small" />
      </div>

    </>
  )
}

export default App
