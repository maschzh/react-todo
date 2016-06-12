import _ from 'lodash';
import React from 'react';
import TodoListHeader from './todo_list_header';
import TodosListItem from './todo_list_item';

export default class TodoList extends React.Component{
    renderItems(){
        const props = _.omit(this.props, 'todos');
        return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} {...props}/>);
        
    }
    
    render(){
        console.log(this.props.todos)
        return (
             <table>
                <TodoListHeader />
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
            
        );
    }
}