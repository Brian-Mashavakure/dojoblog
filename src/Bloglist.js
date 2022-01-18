import {Link} from 'react-router-dom';

const BlogList = ({ blogs, title}) => {
    return (
      <div className="blog-list">
        <h2>{ title }</h2>
        {blogs.map(blog => (
          <div className="blog-preview" key={blog.id} >
            <Link to={`/blogs/${blog.id}`}>
              <h2>{ blog.title }</h2>
              <p>Written by { blog.author }</p>
            </Link>
           
          </div>
        ))}
      </div>
    );
  }
   
  export default BlogList;


//props allow this component to access data that was declared in the home componenet
//functions can also be passed in as  props
        