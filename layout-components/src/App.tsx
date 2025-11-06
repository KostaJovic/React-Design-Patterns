import { List } from "./components/List/List"
import { Modal } from "./components/Modal/Modal"
import { SplitScreen } from "./components/SplitScreen/SplitScreen"
import { PersonListItem, ProductListItem } from "./components/List/LitItem"
import { people, products } from "./constants/constants"

function App() {
  return (
    <Modal>
      <SplitScreen leftWeight={1} rightWeight={1}>
        <List 
          items={ people } 
          resourceName="person" 
          itemComponent={ PersonListItem } 
        />
        <List 
          items={ products } 
          resourceName="product" 
          itemComponent={ ProductListItem } 
        />
      </SplitScreen>
    </Modal>
  )
}

export default App
