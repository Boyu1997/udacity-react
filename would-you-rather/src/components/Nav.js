import { Link } from 'react-router-dom'

export default function Nav(props) {
  return (
    <div className='nav-bar-container'>
      <div className='nav-bar'>
        <Link to='/' className='nav-bar-option'>Questions</Link>
        <Link to='/add' className='nav-bar-option'>New Question</Link>
        <Link to='/leaderboard' className='nav-bar-option'>Leader Board</Link>
        <div
          className='nav-bar-option nav-bar-login'
        >Logout</div>
      </div>
    </div>
  )
}