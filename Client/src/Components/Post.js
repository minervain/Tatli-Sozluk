import React, {useState, useEffect} from "react";
import Card from "./Card";

function Post() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [postList, setPostList] = useState([]);
    const [userList, setUserList] = useState([]);


    useEffect(() => {
        fetch("/posts")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setPostList(result)
            },
            (error) => {
                console.log(error)
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])
    useEffect(() => {
        fetch("/users")
        .then(res => res.json())
        .then(
            (result) => {
            setUserList(result)
            },)
          
        
    }, [])

    if(error) {
        return <div> Error !!!</div>;
    } else if(!isLoaded) {
        return <div> Loading... </div>;
    } else {
        return(
            <ul>
                {postList.map(post => (
                    <li>
                        <Card post={post} userList={userList}/>
                    </li>
                ))}
            </ul>
        );
    }
}

export default Post;