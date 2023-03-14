type User = {
  login: string
  pass: string
  todos: Todo[]
}
type Todo = {
  id?: number
  text: string
  checked: boolean
}
export { User, Todo }
