import React from "react";

const Post = ({
  authorName,
  authorHandle,
  authorBio,
  authorImage,
  postTitle,
  postCategory,
  postImage,
  postDescription,
  readMoreLink,
  likeCount,
  dislikeCount,
  commentCount,
  postDate,
}) => {
  return (
    <div className="post mb-1" style={{ maxWidth: "800px", minWidth: "300px" }}>
      <div className="post-card p-2">
        <div className="post-content">
          <div className="container">
            <div className="author-box">
              <div className="author-profile">
                <img
                  src={authorImage}
                  alt="Author Profile Picture"
                  className="author-image"
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                />
              </div>
              <div className="author-details">
                <h3 className="author-name">{authorName}</h3>
                <span>@{authorHandle}</span>
                <p className="author-bio">{authorBio}</p>
              </div>
            </div>
            <div className="post-header d-flex align-items-center">
              <h2 className="post-title mb-0">{postTitle}</h2>
              <div className="post-category ">
                <span className="badge bg-secondary">{postCategory}</span>
              </div>
            </div>
            <div className="row flex-col d-flex my-1" >
              <img
                src={postImage}
                alt="Post Image"
                className="col-12"
              />
              <div className="post-content col-12 text-center" style={{ overflowWrap: "anywhere" }}>
                <p className="post-description" style={{ textAlign: "left" }}>
                  {postDescription} 
                  <button
                    className="toggle-button"
                    style={{ width: "auto" }}
                    onClick={() => window.location.href = readMoreLink}
                  >
                    Read more...
                  </button>
                </p>
              </div>
            </div>
            <div
              className="post-actions d-flex border-top pt-3"
              style={{ marginTop: 0, gap: "5px", justifyContent: "center" }}
            >
              <button className="like oper btn btn-dark d-flex align-items-center justify-content-center" style={{ gap: "5px" }}>
                <i className="bi-hand-thumbs-up"></i> <span>{likeCount}</span>
              </button>
              <button className="dislike oper btn btn-dark d-flex align-items-center justify-content-center" style={{ gap: "5px" }}>
                <i className="bi-hand-thumbs-down"></i> <span>{dislikeCount}</span>
              </button>
              <button className="commentBox btn btn-dark d-flex align-items-center justify-content-center" style={{ gap: "5px", position: "static" }}>
                <i className="bi bi-chat"></i><span>{commentCount}</span>
              </button>
              <button className="btn btn-dark d-flex align-items-center justify-content-center" style={{ gap: "5px" }}>
                <i className="bi bi-reply"></i>
              </button>
              <button className="btn btn-dark d-flex align-items-center justify-content-center" style={{ gap: "5px" }}>
                <i className="bi bi-share"></i>
              </button>
            </div>
            <div className="post-metadata">
              <div className="author-info">
                <span className="author-bio">@{authorHandle}</span>
              </div>
              <div className="post-date">
                {/* <i className="bi bi-calendar-fill" style={{ marginRight: "5px" }}></i> */}
                <span className="date-text">Published on {postDate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;