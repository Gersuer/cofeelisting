import BgHeaderContent from "./components/bgheadercontent/BgHeaderContent"
import ListContainer from "./components/listContainer/ListContainer"
import Data from "./data/apiData"

const App = () => {
  const data = Data();
  return (
    <div className="w-full relative flex flex-col items-center font-DmSans">
      <div className="w-full">
        <BgHeaderContent />
      </div>
      <div className="w-full flex justify-center absolute py-20">
      <ListContainer data={data} />
      </div>
    </div>
  )
}

export default App