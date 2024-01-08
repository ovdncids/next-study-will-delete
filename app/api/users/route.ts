import {NextRequest, NextResponse} from "next/server"
import {User} from "@/types/usersTypes"
import mysql2Pool from "@/libraries/mysql2Pool"

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
  await mysql2Pool()
  return NextResponse.json(global.users)
}

export const POST = async (request: NextRequest) => {
  global.users.push(await request.json())
  return NextResponse.json({
    result: "Created"
  })
}
