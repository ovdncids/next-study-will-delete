import {NextRequest, NextResponse} from "next/server"

export const DELETE = async (_: Request, context: {params: {index: number}}) => {
  global.users.splice(context.params.index, 1)
  return NextResponse.json({
    result: "Deleted"
  })
}

export const PATCH = async (request: NextRequest, context: {params: {index: number}}) => {
  global.users[context.params.index] = await request.json()
  return NextResponse.json({
    result: "Updated"
  })
}
