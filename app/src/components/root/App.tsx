
import {AuthProvider} from "../../context/userContext";
import Main from "./Main";

const App = () => {
  return (
    
      <AuthProvider>
        <Main />
      </AuthProvider>
  )
};

export default App;