import {User} from "@/types/usersTypes"

export const usersServices = {
  usersRead: async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PRIVATE_BACKEND_API_URL}/api/users`, {cache: "no-store"})
      return res.json()
    } catch (error) {
      return []
    }
  },
  usersCreate: async (user: User) => {
    const res = await fetch("/proxy/api/users", {
      method: "POST",
      body: JSON.stringify(user)
    })
    return res.json()
  },
  usersDelete: async (index: number) => {
    const res = await fetch(`/proxy/api/users/${index}`, {
      method: "DELETE"
    })
    return res.json()
  },
  usersUpdate: async (index: number, user: User) => {
    const res = await fetch(`/proxy/api/users/${index}`, {
      method: "PATCH",
      body: JSON.stringify(user)
    })
    return res.json()
  }
}
