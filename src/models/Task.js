import { observable, action, computed, useStrict } from 'mobx'
import axios from 'axios'

useStrict(true)

class TaskStore {
    @observable tasks = [];

    @computed get allTasks(){
        return this.tasks
    }

    @action getTasks(){
        axios.get("http://localhost:3001/tasks.json").then(tasks => {
            console.log(tasks)
            this.setTasks(tasks.data)
        })
    }

    @action setTasks(tasks){
        console.log(tasks)
        this.tasks = [...tasks]
    }
}

const store = new TaskStore()

export default store
export {TaskStore}