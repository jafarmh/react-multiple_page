import React ,{ Component } from 'react';
const Title=(props) =>{
    console.log(props.title);
    if(props.title===undefined)
    return '';
    return <title>{props.title}</title>
}
  export default Title;