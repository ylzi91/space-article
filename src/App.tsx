
import 'bootstrap/dist/css/bootstrap.css'
import MyHeader from './components/MyHeader'
import AllMainArticle from './components/AllMainArticle'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DetailArticle from './components/DetailArticle'

function App() {

  return (
    <BrowserRouter>
    <>
        <MyHeader/>

        <main>
          <Routes>
          <Route path='/' element ={<AllMainArticle />} /> 
          <Route path='/detail/:id' element ={<DetailArticle />} /> 
          </Routes>
        </main>
    </>
    </BrowserRouter>
  )
}

export default App
