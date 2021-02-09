import { Link, routes } from '@redwoodjs/router'

import { value } from 'src/../../sharing/shared_js'
import { value2 } from 'src/../../sharing/shared_export'

const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <p>sharing value: {value}</p>
      <p>sharing value2: {value2}</p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
    </>
  )
}

export default HomePage
