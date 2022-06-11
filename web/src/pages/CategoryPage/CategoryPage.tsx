import { Button } from '@mui/material'
import { useAuth } from '@redwoodjs/auth'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const CategoryPage = () => {
  const {logOut} = useAuth()
  const logOutHandler = async () => {
    await logOut()
    navigate('/')
  } 
  return (
    <>
      <MetaTags title="Category" description="Category page" />
      <Button variant='contained' onClick={logOutHandler}>Log Out</Button>
      <h1>CategoryPage</h1>
      <p>
        Find me in <code>./web/src/pages/CategoryPage/CategoryPage.tsx</code>
      </p>
      <p>
        My default route is named <code>category</code>, link to me with `
        <Link to={routes.home()}>Category</Link>`
      </p>
    </>
  )
}

export default CategoryPage
