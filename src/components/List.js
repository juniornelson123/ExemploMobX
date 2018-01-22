import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer class List extends Component {
    renderList(){
        const list = this.props.store.allTasks || []
        return (
            list.map(task => {
                return (
                    <li key={task.title}>{task.title}</li>
                )
            })
        )
    }

    render(){
        return(
            <ul>
                {this.renderList()}
            </ul>
        )
    }
}

export default List