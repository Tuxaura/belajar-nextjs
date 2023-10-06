import { withAuth } from "../with-auth"
import Menu from "../menu"

function Header() {
return (
    <div className='text-3xl font-bold underline'>
      <Menu />
    </div>
  )
}

export default withAuth(Header);