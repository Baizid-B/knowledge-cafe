import { useState } from "react"
import Blogs from "./components/Blogs/Blogs"
import BookMark from "./components/BookMark/BookMark"
import Header from "./components/Header/Header"

function App() {

  const [bookmarks,setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0);

  const handleBookMarks = blog => {
    const newBookMarks = [...bookmarks, blog]
    setBookmarks(newBookMarks)
  }

  const handleTime = (id,time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)
    const removeBookMarks = bookmarks.filter(bookmar =>  bookmar.id !== id)
    setBookmarks(removeBookMarks)
  }

  return (
    <>
     <div className="max-w-screen-xl mx-auto">
        <Header></Header>

        <div className="md:flex gap-4">
            <Blogs handleTime={handleTime} handleBookMarks={handleBookMarks}></Blogs>
            <div className="md:w-1/3">
              <BookMark bookmarks={bookmarks} readingTime={readingTime}></BookMark>
            </div>
        </div>
     </div>
    </>
  )
}

export default App
