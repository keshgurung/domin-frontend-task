import logo from '../assets/domin_logo.png'

const Login = () => {
  return (
    <div className='login'>
      <img className='logo' src={logo} alt='logo' />
      <h1>DOMIN</h1>
      <h2>ASCEND</h2>

      <div className='para'>
        <p>Connect to all your Domin products</p>
        <p>
          Configure and access data from your devices remotely, in a secure
          manner
        </p>
      </div>
      <div className='click-button'>
        <button>Get Started</button>
        <button>Log In</button>
      </div>
    </div>
  )
}

export default Login
