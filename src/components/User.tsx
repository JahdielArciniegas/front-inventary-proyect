import { useSelector } from "react-redux"
import { RootState } from "../store"

const User = () => {
  const user = useSelector((state : RootState) => state.user)
  return (
    <div>
      <h2>User</h2>
      {user.user && <div>{user.user.name}</div>}
    </div>
  )
}

export default User
