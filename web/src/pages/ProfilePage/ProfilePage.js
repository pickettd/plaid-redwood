import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const ProfilePage = () => {
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
              { isAuthenticated ? 'Log Out' : 'Log In' }
            </a>
          </li>
          </ul>
        </nav>
      </header>
      <main>
        <p>
          You are logged in, your email is:
          { isAuthenticated && <span>{currentUser.email}</span> }
        </p>
        <Link to={routes.home()}>Return home</Link>
      </main>
    </>
  )
}

export default ProfilePage
