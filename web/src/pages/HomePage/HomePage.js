import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'


const HomePage = () => {
  const { logIn, logOut, isAuthenticated, currentUser } = useAuth()
  return (

    <>
      <header>
        <h1>Redwood Blog</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.profile()}>Profile</Link>
            </li>
            <li>
                <a href="#" onClick={isAuthenticated ? logOut : logIn}>
                {isAuthenticated ? 'Log Out - ' : 'Log In'}
                { isAuthenticated && <span>{currentUser.email}</span> }
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>Home</main>
    </>
  )
}

export default HomePage
