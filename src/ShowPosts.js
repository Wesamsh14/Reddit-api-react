import React from 'react';
import './assets/ShowPosts.css'


//showing the posts
const ShowPosts = ({posts, query}) => {
    const postList = posts.length ? (
        posts.map(post => {
            return (
                <div className="post" key={post.data.id}>
                    <ul className="list-group-item">
                        <li className="title">
                            <a href={post.data.url}  target="_blank">
                                {post.data.title}
                            </a>
                        </li>
                        <div className="">
                            <p className="promotedBy">
                                promoted by {post.data.author}
                            </p>                            
                        </div>
                    </ul>
                </div>
            )
        })
    ) : query == null ? <p></p> : 
    (
        <p className="noResults">Sorry, there were no community results for 
            <span className="boldText"> "{query}"</span></p>
    );
    
    return (
        <div className="list-group">
            {postList}
        </div>
    )
};


export default ShowPosts;