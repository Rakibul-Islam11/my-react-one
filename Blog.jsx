import PropTypes from 'prop-types'; 

const Blog = ({blog}) => {
    const { title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
    
    return (
        <div>
            <img src={cover} alt="" />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-5'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{ posted_date }</p>
                    </div>
                </div>
                <div>
                    <span>{ reading_time } min read</span>
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
    blog: PropTypes.object.isRequired
}
export default Blog;