import React from 'react'

const adminuser = {
    user: 'admin',
    password: 'admin'   
}

const Login = () => {

    const [user, setUser] = React.useState({
        user: '',
        password: ''
    })

  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={(e) => {
            e.preventDefault()
            if(user.user === adminuser.user && user.password === adminuser.password){
                localStorage.setItem('user', user)
                window.location.href = '/backoffice'
            }
        }
        }>
            <input type="text" placeholder="User" onChange={(e) => setUser({...user, user: e.target.value})}/>
            <input type="password" placeholder="Password" onChange={(e) => setUser({...user, password: e.target.value})}/>
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login