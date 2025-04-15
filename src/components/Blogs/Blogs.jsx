import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = () => {
    const [blog, setBlog] = useState([]) // useState allows emty array result is zero (0)

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlog(data))
    },[])

    return (
        <div className="md:w-2/3">
            {
                blog.map(singleBlogs => <Blog key={singleBlogs.id} singleBlogs={singleBlogs}></Blog>)
            }
        </div>
    );
};

export default Blogs;