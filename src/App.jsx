import Blogs from "./components/Blogs/Blogs"
import BookMark from "./components/BookMark/BookMark"
import Header from "./components/Header/Header"

function App() {

  return (
    <>
     <div className="max-w-screen-xl mx-auto">
        <Header></Header>

        <div className="md:flex">
            <Blogs></Blogs>
            <BookMark></BookMark>
        </div>
     </div>
    </>
  )
}

export default App
