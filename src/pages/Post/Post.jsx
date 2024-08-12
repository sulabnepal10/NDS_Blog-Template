import React from 'react'
import './Post.css'
import { useNavigate } from 'react-router-dom'



const Post = () => {

  const navigate = useNavigate();
 
  return (
    <div className='post'>
   <img className='postImg' src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" onClick={()=>navigate("/singlePost")}  alt="" /> 
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Web</span>
            <span className="postCat">IoT</span>
            <span className="postCat">Embedded</span>
        </div>
      <span className="postTitle">This is about posts</span>
      <hr />
      <span className="postDate">1 hr ago</span>
      </div>
      <p className='postDesc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut sunt, harum atque hic ex vel asperiores minima nobis quisquam sed praesentium facere magni ipsum tenetur aspernatur soluta, quia quidem nostrum?</p>
    </div>
  )
}

export default Post
