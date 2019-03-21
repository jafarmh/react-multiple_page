import React ,{ Component } from 'react';
import Counter from './counter';
import Title from './Title';
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
  mines=(data)=>{
      const counter=[...this.state.counter];

      const index = counter.indexOf(data);
       counter[index]={...data};
       if(counter[index].value>0)
      counter[index].value--;
      this.setState({ counter });



//  this.setState({ counter:new_counter });
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
    let styles={
      margin:'20px'
    };
    return (

     
      <div>
        <Title title="Counter" />
        <div>
          <button onClick={this.reset} className="btn btn-info btn-sm m-2">Reset</button>
      </div>
      <div className="row ">
        {this.state.counter.map(data=>
        
        <div style={styles} className="col-md-4  card">
          <Counter key={data.id}
            onDelete={this.delete}
            onReset={this.reset}
            onAdd={this.add}
            onmines={this.mines}
            counter={data}  >
          
          </Counter>
          </div>
          
        )
          }
         </div>
      </div>
    );
  }





}

export default Counters;
