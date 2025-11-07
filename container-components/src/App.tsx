import axios from 'axios';
import { Person, Product } from "./types/types"
import { DataLoader } from "./components/data/DataLoader"
import { UserInfo } from "./components/user/UserInfo"

const getUserData = async (userId:string):Promise<Person> => {
  return (await axios.get(`/api/users/${userId}`)).data;
}

const getProducts =  async (resourceUrl:string):Promise<Product> => {
  return (await axios.get(resourceUrl)).data;
}

function App() {
  return (
    <DataLoader
      getDataFn={() => getUserData('1')}
      resourceName="invald"
    >
      <UserInfo />
    </DataLoader>

  )
}

export default App
