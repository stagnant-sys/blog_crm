import { Link } from "react-router-dom"

export const ErrorPage = () => {
  return (
    <>
      <main>
        <div>
          Error: Page not found.
        </div>
        <div>
          <Link to='/'>Go back to homepage.</Link>
        </div>
      </main>
    </>
  )
}