/* eslint-disable react/prop-types */


const Users = ({name,email,no}) => {
    
  return (
    <div className='flex items-center justify-between  p-6 border-b border-black'>
        <h1>Name: {name}</h1>
        <p>Email: {email}</p>
        <p>
      Phone No:{no}
        </p>
    </div>
  )
}

export default Users