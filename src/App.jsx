
import Home from "./Home.jsx"
import Header from "./Header.jsx"
import Resume from "./Resume.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export default function App()
{
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Header type="home" />
              <Home />
            </>
          } />

          <Route path="/resume" element={
            <>
              <Header type="resume" />
              <Resume />
            </>
          } />
        </Routes>

      </BrowserRouter>
    </>
  )
}

