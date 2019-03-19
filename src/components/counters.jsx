import React ,{ Component } from 'react';
import Counter from './counter';
class Counters extends Component {

  state={
    counter:[
      {id:1,value:4},
      {id:2,value:0},
      {id:3,value:0},
      {id:4,value:10},

    ]
  };
  delete = (id) =>{

    const new_counter=this.state.counter.filter (c=>c.id !==id)
  this.setState({ counter:new_counter });
  };
  add=(data)=>{
      const counter=[...this.state.counter];

      const index = counter.indexOf(data);
       counter[index]={...data};
      counter[index].value++;
      this.setState({ counter });



//  this.setState({ counter:new_counter });
  };
  reset=()=>{
    let reset_counter= [
        {id:1,value:0},
        {id:2,value:0},
        {id:3,value:0},
        {id:4,value:0},

      ];
          this.setState({ counter:reset_counter });
          console.log(this.state.counter);
  };

  render ()  {

    return (

      <div>
        <div>
          <button onClick={this.reset} className="btn btn-info btn-sm m-2">Reset</button>
      </div>
        {this.state.counter.map(data=>
          <Counter key={data.id}
            onDelete={this.delete}
            onReset={this.reset}
            onAdd={this.add}
            counter={data}  >
          <h4 key={data.id}>{data.value}</h4>
          </Counter>

        )
          }

      </div>
    );
  }





}

export default Counters;
