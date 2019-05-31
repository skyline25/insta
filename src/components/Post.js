import React from 'react'
import User from './User'

const Post = (props) => {
  let {alt, src} = props

  return (
    <div className="post">
        <User
          src="https://peopledotcom.files.wordpress.com/2018/11/prince-harry.jpg?crop=0px%2C0px%2C1200px%2C630px&resize=1200%2C630"
          alt="user"
          name="User"
          min
        />
        <img 
          src={src}
          alt={alt}  
        />
        <div className="post__name">
          some account
        </div>
        <div className="post__descr">
          lorem ipsum
        </div>
      </div>
  )
}

// class Post extends Component {
//   render () {
//     return (
//       <div className="post">
//         <User
//           src="https://peopledotcom.files.wordpress.com/2018/11/prince-harry.jpg?crop=0px%2C0px%2C1200px%2C630px&resize=1200%2C630"
//           alt="user"
//           name="User"
//           min
//         />
//         <img 
//           src={this.props.src}
//           alt={this.props.alt}  
//         />
//         <div className="post__name">
//           some account
//         </div>
//         <div className="post__descr">
//           lorem ipsum
//         </div>
//       </div>
//     )
//   }
// }

export default Post