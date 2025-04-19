import { useSelector } from "react-redux"
import { RootState } from "../store"

const User = () => {
  const user = useSelector((state : RootState) => state.user)
  return (
    <div>
      <h2>Usuario</h2>
      {user.user && <div>{user.user.name}</div>}
    </div>
  )
}

export default User
