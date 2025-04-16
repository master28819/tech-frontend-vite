// src/Posts.jsx
import React from "react";
import Post from "./Post";

const Posts = () => {
    return (
        <div class="page-content">
            <h1 class="recent-posts-title text-center">Trending News</h1>
            <div class="posts-list" id="post-container">


                <Post
                    authorName="Will Knight"
                    authorHandle="tech2xplore"
                    authorBio="Tech2Xplore Trending News"
                    authorImage="https://tech-yj96.onrender.com/images/logo.jpg"
                    postTitle="Under Trump, AI Scientists Are Told to Remove ‘Ideological Bias’ From Powerful Models"
                    postCategory="News"
                    postImage="https://media.wired.com/photos/67c77508ad19f713de02a563/191:100/w_1280,c_limit/trump-pointing-2202608030.jpg"
                    postDescription="The National Institute of Standards and Technology (NIST) has issued new instructions to scientists that partner with the US Artificial Intelligence Safety Institute (AISI) that eliminate mention of."
                    readMoreLink="https://www.wired.com/story/ai-safety-institute-new-directive-america-first/"
                    likeCount={0}
                    dislikeCount={0}
                    commentCount={0}
                    postDate="23:29:46 14-03-2025"
                />

                <Post
                    authorName="AJ Dellinger"
                    authorHandle="tech2xplore"
                    authorBio="Tech2Xplore Trending News"
                    authorImage="https://tech-yj96.onrender.com/images/logo.jpg"
                    postTitle="Google Is Developing Technology to Deliver Internet Via Light Bridges"
                    postCategory="News"
                    postImage="https://gizmodo.com/app/uploads/2024/09/Google.jpg"
                    postDescription="Google just had a lightbulb moment, and it might move internet access out of the (literal) dark ages. Over at the company's moonshot factory X, researchers have developed a chip that they believe sho"
                    readMoreLink="https://gizmodo.com/google-is-developing-technology-to-deliver-internet-via-light-bridges-2000570215"
                    likeCount={0}
                    dislikeCount={0}
                    commentCount={0}
                    postDate="21:40:09 28-02-2025"
                />

                <Post
                    authorName="Andrew Liszewski"
                    authorHandle="tech2xplore"
                    authorBio="Tech2Xplore Trending News"
                    authorImage="https://tech-yj96.onrender.com/images/logo.jpg"
                    postTitle="LG's new air conditioner directs cool air towards people it detects"
                    postCategory="News"
                    postImage="https://platform.theverge.com/wp-content/uploads/sites/2/2025/03/lg_artcool_1.jpg?quality=90&amp;strip=all&amp;crop=0%2C10.723150329831%2C100%2C78.553699340338&amp;w=1200"
                    postDescription="The Artcool AI Air doesn't look as artsy as LG's previous Artcool air conditioners, but it does offer improved energy efficiency by detecting the room's layout and the position of its occupants so it"
                    readMoreLink="https://www.theverge.com/news/626065/lg-artcool-ai-air-conditioner-room-occupant-sensing"
                    likeCount={0}
                    dislikeCount={0}
                    commentCount={0}
                    postDate="18:50:13 07-03-2025"
                />


            </div>
            <div style={{ width: "62%", marginLeft: "19%", display: "none" }} className="alert alert-info text-center" role="alert" id="alertMessage">
                <span id="content">Enough Trending News for Today! You are redirected at Home Page In 3 Seconds
                    ...</span>
            </div>
        </div>
    );
}

export default Posts;