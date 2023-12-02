"use client"
import {useState} from "react"
import {useRouter} from "next/navigation"
import {User} from "@/types/usersTypes"
import {usersServices} from "@/services/usersServices"
import Delete from "./delete"

const Update = (props: {index: number, user: User}) => {
  const {index} = props
  const router = useRouter()
  const [user, setUser] = useState(props.user)
  const usersUpdate = async () => {
    await usersServices.usersUpdate(index, user)
    router.refresh()
  }
  return (
    <tr key={index}>
      <td>
        <input
          type="text" placeholder="Name" value={user.name}
          onChange={(event) => {
            setUser({
              ...user,
              name: event.target.value
            })
          }}
        />
      </td>
      <td>
        <input
          type="text" placeholder="Age" value={user.age}
          onChange={(event) => {
            setUser({
              ...user,
              age: event.target.value
            })
          }}
        />
      </td>
      <td>
        <button onClick={usersUpdate}>Update</button>
        <Delete index={index} />
      </td>
    </tr>
  )
}

export default Update