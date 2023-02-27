import fs from "fs"
const pathDB = "./src/database/db.json"
const pathID = "./src/database/id.json"

export interface Todo {
  id?: number
  text: string
  checked: boolean
}
export interface ID {
  id: number
}
export interface Todos {
  items: Todo[]
}

export function readData(): Todos {
  try {
    const data: string = fs.readFileSync(pathDB, "utf-8")
    const todos: Todos = JSON.parse(data)
    return todos
  } catch (error) {
    throw error
  }
}

export function writeData(data: Todos) {
  try {
    const todos: string = JSON.stringify(data)
    fs.writeFileSync(pathDB, todos, "utf-8")
  } catch (error) {
    throw error
  }
}

export function createID(): ID {
  const data = fs.readFileSync(pathID, "utf-8")
  const ID = JSON.parse(data)
  ID.id++
  fs.writeFileSync(pathID, JSON.stringify(ID), "utf-8")
  return ID
}
