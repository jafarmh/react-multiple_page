import React ,{ Component } from 'react';
class Counter extends Component {



  render ()  {
    return (

     <div>

       {this.props.children}
      <span style={ { fontSize: 20 } } className={this.getBadgeClassess()}>{this.formatCount()}</span>

      <button onClick={()=>{this.props.onAdd(this.props.counter)}} className="btn btn-info btn-sm">Increment</button>
      <button onClick={()=>{this.props.onDelete(this.props.counter.id)}} className="btn btn-danger btn-sm m-2">Delete</button>
    </div>
  );
  }



  getBadgeClassess () {
    let classes = "badge  m-2 badge-";
    classes += this.props.counter===0 ? "warning" : "primary";
    return classes;
  }
  formatCount () {
    const { value } =this.props.counter;
    return value===0 ? <span>Zero</span> : value;
  }
}

export default Counter;
