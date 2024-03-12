/* eslint-disable @typescript-eslint/no-explicit-any */
import { ToDoList } from './ToDoList'

const anyTask = {
  title: 'any_title',
  description: 'any_description',
  targetDate: '01/01/2025',
  type: 'any_type',
  priority: '1',
  subTasks: []
}

describe('ToDoList', () => {
  describe('Testing add', () => {
    test('should add a new task to the list', () => {
      const todoInstance = new ToDoList()
      todoInstance.add(anyTask)
      const tasks = todoInstance.getTasks()
      expect(tasks).toEqual([anyTask])
    })

    test('should add a valid tasks', () => {
      const todoInstance = new ToDoList()
      const invalidValue: any = {
        invalidField: 'invalidValue'
      }
      todoInstance.add(invalidValue)
      const tasks = todoInstance.getTasks()
      expect(tasks).toEqual([])
    })
  })

  describe('Testing updateTask', () => {
    test('should correctly update an existing task', () => {
      const todoInstance = new ToDoList()

      todoInstance.add(anyTask)

      const updatedTask = {
        title: 'Updated Title',
        description: 'Updated Description'
      }
      todoInstance.updateTask(0, updatedTask)

      const tasks = todoInstance.getTasks()
      expect(tasks[0]).toMatchObject({
        ...anyTask,
        ...updatedTask
      })
    })
  })

  describe('Testing removeTask', () => {
    test('should remove a task by index', () => {
      const todoInstance = new ToDoList()
      todoInstance.add(anyTask)
      todoInstance.add(anyTask)

      todoInstance.removeTask(0)

      const tasks = todoInstance.getTasks()
      expect(tasks.length).toBe(1)
    })
  })
})
