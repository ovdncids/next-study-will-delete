import {User} from "@/types/usersTypes"
import {usersServices} from "@/services/usersServices"
import Create from "./create"
import Update from "./update"

const Users = async () => {
  const users: User[] = await usersServices.usersRead()
  console.log(users)
  return (
    <div>
      <h3>Users {process.env.NEXT_PUBLIC_TEST}</h3>
      <hr className="d-block" />
      <div>
        <h4>Read</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Modify</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <Update key={index} index={index} user={user} />
            ))}
          </tbody>
        </table>
      </div>
      <hr className="d-block" />
      <Create />
    </div>
  )
}

export default Users
