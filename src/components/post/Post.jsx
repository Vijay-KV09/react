import "./post.css";

function Post() {
  return (
    <div className="post">
      <img className="postImg"
      src="https://wallpapers.com/images/high/green-anime-aesthetic-2c3ji8mcz16yfcq9.webp" alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
           Lorem, ipsum dolor sit amet consectetur adipisicing.  
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi alias cupiditate nesciunt dolorum iure impedit ullam suscipit iste animi facere reprehenderit possimus consectetur, ad ab, beatae iusto sed consequuntur voluptates!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum accusamus consectetur nesciunt alias. Amet hic saepe nesciunt, expedita obcaecati alias?
      </p>
    </div>
  )
}

export default Post
