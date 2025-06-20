import { useCookies } from "react-cookie"

function MyForm() {
  const [cookies, setCookie] = useCookies(["player-name"]);

  function onChange(newPlayerName: string): void {
    setCookie("player-name", newPlayerName);
  }

  return (
    <form>
      <label>Player name:
        <input type="text" defaultValue={cookies["player-name"]} onChange={evt => onChange(evt.target.value)}/>
      </label>
    </form>
  )
}

function App() {
  return (
    <div>
      Hello world
      <MyForm />
    </div>
    // <div>
    //   <input name={cookies["player-name"] || ''} defaultValue={"Dams4K"} onChange={evt => onChange(evt.target.value)} />
    //   {cookies["player-name"] && <h1>Hello {cookies["player-name"]}!</h1>}
    // </div>
  )
}

export default App
