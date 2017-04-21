var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function() {
    var {todos} = this.props;
    var renderTodos = () => {
      return todos.map((todo) => {
        return (
          //spread out attributes as individual props and passed down to Todo component as own props
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
        );
      });

    };
    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

module.exports = TodoList;
