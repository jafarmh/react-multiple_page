import React ,{ Component } from 'react';
class Counter extends Component {

  state={
    count:0,
    tags: ["tag1","tag2","tag3"]

  };
  ///bind handler for event
  /*constructor () {
    super();
    this.click_item=this.click_item.bind(this);
  }*/
////end

  render ()  {

    return (

     <React.Fragment>
      <span style={ { fontSize: 20 } } className={this.getBadgeClassess()}>{this.formatCount()}</span>
      <button onClick={this.handel_click_item} className="btn btn-info btn-sm">Increment</button>
      <ul>
        {this.state.tags.map(data=><li key={data}>{data}</li>)}
      </ul>
    </React.Fragment>
  );
  }
  ///part 1 with constructor
  /*click_item () {
    console.log("clicked",this);
  }*/

  ////part 2 without constructor
  handel_click_item= () => {
    this.click_item ({id:5,name:'jafar'});
  }
  click_item =(param)=> {
    console.log(param);
    this.setState ({ count:this.state.count+1 })
    console.log("clicked",this);
  }
  getBadgeClassess () {
    let classes = "badge  m-2 badge-";
    classes += this.state.count===0 ? "warning" : "primary";
    return classes;
  }
  formatCount () {
    const { count } =this.state;
    return count===0 ? <span>Zero</span> : count;
  }
}

export default Counter;
