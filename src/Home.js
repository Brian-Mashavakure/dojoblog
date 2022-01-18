import BlogList from "./Bloglist";
import useFetch from "./useFetch";
//useEffect hook runs a function everytime the component is rendered(run code on every render)

const Home = () => {
    const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs");
     return (
      <div className="home">
        {error && <div> {error} </div> }
        {isPending && <div>Loading....</div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}       
      </div>
    );
  }
   
  export default Home;
