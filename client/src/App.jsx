import { useState } from 'react'

import './App.css'

function App() {
    
    const [username, setusername] = useState(undefined);
    const [password, setpassword] = useState(undefined);
    const handleClick = async(e) => {
            e.preventDefault();
            try {
                var result = await fetch(`${process.env.REACT_APP_BASE_URL}/auth/login`, {
                    method: 'post',
                    body: JSON.stringify({
                        username: username,
                        password: password
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                var res = await result.json();
               
            } catch (err) { console.log(err)
           }
        }
    const handleusername = (e) => {
        setusername(e.target.value)
    }
    const handlepassword = (e) => {
        setpassword(e.target.value)
    }

  return (
      <div className="login">
        <div className="lContainer">
          <input
            type="text"
            placeholder="username"
            id="username"
            onChange={handleusername}
            className="lInput"
          />
          <input
            type="password"
            placeholder="password"
            id="password"
            onChange={handlepassword}
            className="lInput"
          />
          <button  onClick={handleClick} className="lButton">
            Login
          </button>
        </div>
      </div>
    )
}

export default App