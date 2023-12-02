import {NextRequest, NextResponse} from "next/server"
import {User} from "@/types/usersTypes"

declare global {
  var users: User[]
}

if (!global.users) {
  global.users = [{
    name: "홍길동",
    age: 20
  }, {
    name: "춘향이",
    age: 16
  }]
}

export const GET = async () => {
  return NextResponse.json(global.users)
}

export const POST = async (request: NextRequest) => {
  global.users.push(await request.json())
  return NextResponse.json({
    result: "Created"
  })
}
