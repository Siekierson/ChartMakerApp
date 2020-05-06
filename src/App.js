import React from 'react';
import Canvas from './components/organisms/Canvas'
import ReactDOM,{ unmountComponentAtNode } from 'react-dom';
import Form from './components/organisms/Form';
import styles from './App.scss'
import styled from 'styled-components';
import { SwatchesPicker } from 'react-color'
const Header= styled.header`
text-align:center;
font-size:6rem;
font-weight:bold;
`
const MainWrapper = styled.div`
padding:10px 150px;
text-align:center;
`
class App extends React.Component {
    state={
      data:[],
      chartType:'line',
      mess:'',
      color:'blue'
    }
    rChart = React.createRef();
    handleSubmit=(e,prevState)=>{
      e.preventDefault()
      this.setState({data:[...this.state.data,this.state.mess]})
    }
    handleInput=(e)=>{
      this.setState({mess:e.target.value})
    }
    handleSelect=(e)=>{
      this.setState({chartType:e.target.value})
    }
    removeData=()=>{
      this.setState({data:[]})
      unmountComponentAtNode(document.getElementById('app'))
      while(this.rChart.firstChild){document.body.removeChild(this.rChart.firstChild);}
    }
    newChart=(e)=>{
      e.preventDefault()
      unmountComponentAtNode(document.getElementById('app'))
      while(this.rChart.firstChild){document.body.removeChild(this.rChart.firstChild);}
      ReactDOM.render(<Canvas data={this.state.data} chartType={this.state.chartType} color={this.state.color}/>,document.getElementById('app'));
      
    }
  
    render() {
      const switchAtributes=['line','bar','radar','pie']
      const {data,chartType,color}= this.state
        return (
            <MainWrapper>
              <Header>ChartMaker</Header>
              <Form 
                  atributes={switchAtributes}
                  handleSubmit={this.handleSubmit}
                  handleInput={this.handleInput}
                  handleSelect={this.handleSelect}
              />
              <SwatchesPicker onChange={(e)=>this.setState({color:e.hex})}/>
              <button onClick={this.newChart}>Make chart</button>
              <button onClick={this.removeData}>Remove data</button>
              <div id='app' ref={this.rChart}>
              </div>
            </MainWrapper>
        )
    } 
}

export default App;
