import {Routes,Route} from "react-router-dom";
import Home from "../home/index"
import Form from "../form/index"

export default () => {
    return(
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
        </Routes>
    )
}