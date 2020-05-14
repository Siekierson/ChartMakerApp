import React from 'react';
import Canvas from './components/organisms/Canvas'
import ReactDOM,{ unmountComponentAtNode } from 'react-dom';
import Form from './components/organisms/Form';
import SelectWrapper from './components/molecues/SelectWrapper'
import './App.css'
import styled from 'styled-components';
import { SwatchesPicker } from 'react-color'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/molecues/Navbar';
import CovidSection from './components/organisms/CovidSection'
const Header= styled.header`
text-align:center;
font-size:9rem;
font-weight:bold;
`
const MainWrapper = styled.div`
padding:10px 150px;
text-align:center;
`
const ChartEditSection = styled.div`
width:40%;
display:flex;
flex-direction:column;
justify-content:space-between;
`
const FlexWrapper= styled.div`
height: 100%;
width:100vw;
display:flex;
flex-direction:row;
justify-content: space-between;
`

class App extends React.Component {
    state={
      data:[],
      chartType:'line',
      mess:'',
      color:'blue',
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
      const {data}= this.state
        return (
          <BrowserRouter>
            <Navbar/>
              <MainWrapper>
                <Header>ChartMaker</Header>
                <Switch>
                  <Route exact path='/'>
                      <FlexWrapper>
                      <ChartEditSection>
                        <SelectWrapper atributes={switchAtributes} handleSelect={this.handleSelect}/>
                        <SwatchesPicker onChange={(e)=>this.setState({color:e.hex})}/>
                        <button onClick={this.newChart}>Make chart</button>
                        <button onClick={this.removeData}>Remove data</button>
                      </ChartEditSection>
                      <Form 
                          handleSubmit={this.handleSubmit}
                          handleInput={this.handleInput}
                          data={data}
                      />
                      </FlexWrapper>
                      <div id='app' ref={this.rChart}>
                        </div>
                  </Route>
                <Route path='/covid'>
                    <CovidSection/>
                </Route>
              </Switch>
              </MainWrapper>
            </BrowserRouter>
        )
    } 
}

export default App;
