import PropTypes from 'prop-types'; 
import { IoBookmarksOutline } from "react-icons/io5";

const Blog = ({blog, handleAddToBookmark}) => {
    const { title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
    
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt="" />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-5'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{ posted_date }</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-3 text-2xl'><IoBookmarksOutline></IoBookmarksOutline></button>
                    
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {   //এখানে react key হিসেবে চাচ্ছিলো একটা কিছু আর map তিনটা valu দিতে পারে 2nd value টা হচ্ছে index num তাই সেটাকেই key id হিসেবে দেওয়া হয়েছে আরকি
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{ hash }</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark : PropTypes.func
}
export default Blog;