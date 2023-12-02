import {User} from "@/types/usersTypes"

export const usersServices = {
  usersRead: async () => {
    try {
      const res = await fetch("http://localhost:3000/api/users", {cache: "no-store"})
      return res.json()
    } catch (error) {
      return []
    }
  },
  usersCreate: async (user: User) => {
    const res = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify(user)
    })
    return res.json()
  }
}
