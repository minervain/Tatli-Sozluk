import React from "react";
import Card from "./Card";
import '../Styles/Components/card.scss'
import useDataFetch from "../hooks/useDataFetch";

function Post() {
   
        
    const { data: postData } = useDataFetch('/posts');
  const { data: userData } = useDataFetch('/users');



    
        return(
            <div className="postContain">
            <ul className="postContain">
                {postData.map(post => (
                    <li key={post.id}> 
                        <Card post={post} user={userData}  />
                    </li>
                ))}
            </ul>
            </div>
        );
    }


export default Post;