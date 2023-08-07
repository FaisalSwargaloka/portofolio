import Home from "./Home"
import Footer from "./components/Footer"
import NavigationBar from "./components/NavigationBar"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import NotFoundPage from "./components/NotFoundPage"

function App() {

  return (
    <>
    <NavigationBar />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="*" element={<NotFoundPage />} ></Route>
      </Routes>
    </Router>
        <Footer />
    </>
  )
}

export default App
