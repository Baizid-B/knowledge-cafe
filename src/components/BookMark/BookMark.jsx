import BookMarks from '../BookMarks/BookMarks';

const BookMark = ({bookmarks,readingTime}) => {

    return (
        <div className="my-5 mx-auto space-y-4">
            <h1 className='font-bold text-xl
                  text-[#6047EC] bg-[#6047EC1A] 
                    py-4 px-4 border rounded-lg'>
                Spent time on read : {readingTime} min
            </h1>

            
            <div className='p-6 border rounded-lg bg-[#f3f3f3]'>
                <h1 className='font-bold text-xl mb-5'>Bookmarked Blogs: {bookmarks.length}</h1>

                <div>
                    {
                        bookmarks.map((book,idx) => <BookMarks key={idx} book={book}></BookMarks>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default BookMark;