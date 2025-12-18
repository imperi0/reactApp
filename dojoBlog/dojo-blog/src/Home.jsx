import { useState, useEffect } from "react";
//Use effect doesnt return anything to us, anytime the data changes it renders smtg
import BlogList from "./BlogList";

const Home = () => {

    //An API endpoint is basically the URL+HTTP method

    const [blogs, setBlog] = useState(null);
    const [isPending, setPending] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();//parses teh json object for us
            })
            .then(data => {
                setBlog(data);
                setPending(false);        
            })
    },[])

    return (
        <div className="home">
            { isPending && <div>Loading....</div> }
            {blogs && <BlogList blogs = {blogs} title ="All Blogs"/>}
        </div>
    );
    //If we use a && b, b is checkled only if a is true
}

export default Home;