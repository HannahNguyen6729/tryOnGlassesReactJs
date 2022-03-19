import React, { Component } from "react";

export default class RenderCalculator extends Component {
  state = {
    question:'', 
    answer:'',
  }
  handleClick = (e) => {
   this.setState({...this.state, question: this.state.question.concat(e.target.getAttribute('name')),
  })
  }
  calculate = ()=>{
    let val = eval(this.state.question);
    this.setState({...this.state, answer: val})
  }
  clearItem=()=>{
    this.setState({question:'', answer:''})
  }
  backspace =()=>{
    this.setState({...this.state, question: this.state.question.slice(0,-1)})
  }
  render() {
    const pointer = {cursor:'pointer'}
    return (
      <div className="d-flex justify-content-center">
        
        <div
          className="container-fluid mt-5 bg-dark"
          style={{
            height: 400,
            width: 300,
          
          }}
        >
          <div className="my-5">
            <div className="text-right text-white" style={{width: '100%', height: '30px'}}>{this.state.question}</div>
            <input className=' w-100 text-right' readOnly value ={this.state.answer}></input>
          </div>

          <table className="table table-bordered  table-dark text-center">
            <tbody>
              <tr>
                <td name='7' onClick={(e)=>this.handleClick(e)} style={pointer}>7</td>
                <td name='8' onClick={(e)=>this.handleClick(e)} style={pointer}>8</td>
                <td name='9' onClick={(e)=>this.handleClick(e)} style={pointer}>9</td>
                <td name='/' onClick={(e)=>this.handleClick(e)} style={pointer}>/</td>
                <td  onClick={()=>this.backspace()} style={pointer}>CE</td>
              </tr>
              <tr>
                <td name='4' onClick={(e)=>this.handleClick(e)} style={pointer}>4</td>
                <td name='5' onClick={(e)=>this.handleClick(e)} style={pointer}>5</td>
                <td name='6' onClick={(e)=>this.handleClick(e)} style={pointer}>6</td>
                <td name='*' onClick={(e)=>this.handleClick(e)} style={pointer}>*</td>
                <td onClick={()=>this.clearItem()} style={pointer}>C</td>
              </tr>
              <tr>
                <td name='1' onClick={(e)=>this.handleClick(e)} style={pointer}>1</td>
                <td name='2' onClick={(e)=>this.handleClick(e)} style={pointer}>2</td>
                <td name='3' onClick={(e)=>this.handleClick(e)} style={pointer}>3</td>
                <td name='-' onClick={(e)=>this.handleClick(e)} style={pointer}>-</td>
                <td  onClick={()=>this.calculate()} rowSpan={2} style={pointer}> = </td>
              </tr>
              <tr>
                <td name='0' onClick={(e)=>this.handleClick(e)} colSpan={2} style={pointer}>0</td>
                <td name='.' onClick={(e)=>this.handleClick(e)} style={pointer}>.</td>
                <td name='+' onClick={(e)=>this.handleClick(e)} style={pointer}>+</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
