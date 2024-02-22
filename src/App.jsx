import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./components/DefaultLayout"

import TheMain from "./pages/TheMain"
import Experience from "./pages/Experience"

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>

          <Route index element={<TheMain></TheMain>}></Route>
          <Route path="/experience" element={<Experience></Experience>}></Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
