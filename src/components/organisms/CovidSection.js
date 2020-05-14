import React from 'react'
import Canvas from './Canvas'
class CovidSection extends React.Component{
    state={
        api:[]
    }
    fetchExam=async()=>{
        try {
            const response = await fetch('https://api.covid19api.com/dayone/country/poland');
            const exam = await response.json();
            const table=[];
            for(let i=0;i<exam.length;i++) table.push(String(exam[i].Confirmed))
            this.setState({api:table})
        } catch (error) {
            console.error(error);
        }}
    componentDidMount(){
        this.fetchExam()
    }
    render(){
        const {api}= this.state
    return(
        <>
        <h1>Covid api</h1>
        <h2>Poland</h2>
        <div>
        <Canvas data={api} chartType='line' color='blue'/>
        </div>
        </>
    )}
}
export default CovidSection;