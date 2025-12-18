const BlogList = ({blogs, title}) => {

    //Can also use rops variable and use props.blogs and props.title
    return <div>
        <h2>{title}</h2>
        {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Author of the Blog : <em>{ blog.author }</em></p>
                </div>
        ))}
    </div>
}

export default BlogList;