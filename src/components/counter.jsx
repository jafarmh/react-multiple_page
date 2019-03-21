import React ,{ Component } from 'react';
import FontAwesome from 'react-fontawesome';
class Counter extends Component {



  render ()  {
    return (

     <div className="card-body">
       <h5 className="card-title">{this.props.children}</h5>
       
      <span  style={ { fontSize: 20,display: 'grid' } } 
      className={this.getBadgeClassess()}>{this.formatCount()}
      </span><br></br>

      <div style={{'text-align': 'center'}}>
       
      <button onClick={()=>{this.props.onAdd(this.props.counter)}}
       className="btn btn-info btn-sm">
      <i className="fa fa-plus"></i>
      </button>

      <button onClick={()=>{this.props.onmines(this.props.counter)}}
       className="btn btn-warning btn-sm m-2">
      <i className="fa fa-minus"></i>
      </button>

      <button onClick={()=>{this.props.onDelete(this.props.counter.id)}} 
      className="btn btn-danger btn-sm m-2">
      <i className="fa fa-trash"></i>
      </button>
      
      </div>
    </div>
  );
  }



  getBadgeClassess () {
    let classes = "card-title badge  m-2 badge-";
    classes += this.props.counter===0 ? "warning" : "primary";
    return classes;
  }
  formatCount () {
    const { value } =this.props.counter;
    return value===0 ? <span>Zero</span> : value;
  }
}

export default Counter;
