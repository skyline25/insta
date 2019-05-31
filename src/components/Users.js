import React from 'react'
import User from './User'

const Users = () => {
  return (
    <div className="right">
      <User
          src="https://peopledotcom.files.wordpress.com/2018/11/prince-harry.jpg?crop=0px%2C0px%2C1200px%2C630px&resize=1200%2C630"
          alt="user"
          name="User"
        />
      <div className="users__block">
        <User
          src="https://peopledotcom.files.wordpress.com/2018/11/prince-harry.jpg?crop=0px%2C0px%2C1200px%2C630px&resize=1200%2C630"
          alt="user"
          name="User"
          min
        />
      </div>
    </div>
  )
}

export default Users