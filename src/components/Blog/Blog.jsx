import { CiBookmark } from "react-icons/ci";

const Blog = ({singleBlogs,handleBookMarks,handleTime}) => {

    const {id,cover,title,author_img,author,posted_date,reading_time,hashtags} = singleBlogs;

    return (
        <div className="my-5 space-y-4">
            <img className="w-[100%]" src={cover} alt="" />

            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <img className="w-12" src={author_img} alt="" />
                    <div>
                        <h1>{author}</h1>
                        <p>{posted_date}</p>
                        <a href=""></a>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <div>{reading_time} Min read</div> 
                    <div className="text-xl cursor-pointer" onClick={() => handleBookMarks(singleBlogs)}><CiBookmark /></div>
                </div>
            </div>

            <h1 className=" text-4xl">{title}</h1>

            <p>
                {
                    hashtags.map((hash,idx) => <span key={idx}><a href="#">#{hash} </a></span>)
                }
            </p>

            <p className="text-[#6047EC] font-semibold underline cursor-pointer" onClick={() => handleTime(id,reading_time)}>Mark as read</p>
        </div>
    );
};

export default Blog;