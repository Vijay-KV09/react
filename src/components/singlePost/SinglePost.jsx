import "../singlePost/singlePost.css";

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" 
        src="https://wallpapers.com/images/high/1920x1080-full-hd-nature-trees-sunrise-1xkx12vjidwnm91k.webp" alt="" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor, sit amet consectetur adipisicing.
          <div className="singlePostEdit">
          <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
          <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: <bold>Safak</bold></span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, reiciendis ducimus repellat enim quae illum magnam porro autem molestiae nisi.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis perferendis culpa sunt debitis maxime possimus nobis. Distinctio nulla illo nobis?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus fugit aliquid eveniet dicta, asperiores praesentium sed est dolor a laboriosam?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ea eaque recusandae! Ipsa incidunt fugit nulla culpa alias omnis voluptatem at, id fuga! Ipsum id suscipit blanditiis quas, eveniet doloremque cupiditate fuga, enim consequatur sunt, tempore animi est qui commodi!
        </p>
      </div>
    </div>
  )
}

export default SinglePost
