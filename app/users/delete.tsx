"use client"
import {useRouter} from "next/navigation"
import {usersServices} from "@/services/usersServices"

const Delete = ({index}: {index: number}) => {
  const router = useRouter()
  return (
    <button onClick={async () => {
      await usersServices.usersDelete(index)
      router.refresh()
    }}>Delete</button>
  )
}

export default Delete
