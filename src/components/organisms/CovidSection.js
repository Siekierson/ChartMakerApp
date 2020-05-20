import React from 'react'
import Canvas from './Canvas';
import styled from 'styled-components';
const CanvWrapper= styled.div`
margin-top:20px;
font-size:1.8rem;
>h2{
    margin-top:20px;
    margin-bottom:10px;
    font-size:2.2rem;
}
`
class CovidSection extends React.Component{
    state={
        api:[],
        bar:[],
        topten:[]
    }
    fetchExam=async()=>{
        try {
            const response = await fetch(`https://api.covid19api.com/total/country/poland`);
            const exam = await response.json();
            const table=[];
            for(let i=0;i<exam.length;i++) exam[i].Active&&table.push(exam[i])
            this.setState({api:table})
        } catch (error) {
            console.error(error);
        }}
    fetchAll=async()=>{
        try {
            const res = await fetch('https://api.covid19api.com/summary');
            const resjson = await res.json();
            const bar=[];
            for(let i=0;i<resjson.Countries.length;i++){
                 bar.push({
                    name:resjson.Countries[i].Country,
                    confirmed:String(resjson.Countries[i].TotalConfirmed)
            })}
            const responsiveTop=window.innerWidth>750?20:10
            const topValues = bar.sort((a,b) => b.confirmed-a.confirmed).slice(0,responsiveTop).reverse();
            this.setState({topten:topValues})
            this.setState({bar})
        } catch (error) {
            console.error(error);
        }
    }
    componentDidMount(){
        this.fetchExam()
        this.fetchAll()
    }
    render(){
        const {api,topten}= this.state
        const confirmed = api.map(item=>String(item.Confirmed))
        const aconfirmed = topten.map(item=>String(item.confirmed))
        const active = api.map(item=>String(item.Active))
        const deaths = api.map(item=>String(item.Deaths))
        const recovered = api.map(item=>String(item.Recovered))
        const polDataset=[{
            label: 'Confirmed Cases',
            data: confirmed,
            borderColor: `red`,
            fill: false,
        },{
            label: 'Active Cases',
            data: active,
            borderColor: 'blue',
            fill: false,
        },{
            label: "Deaths",
            data: deaths,
            borderColor: 'black',
            fill: false,
        },
        {
            label: "Recovered",
            data: recovered,
            borderColor: `green`,
            fill: false,
        },]
        let tp=[]
            tp.push({
                    label:'',
                    data: aconfirmed,
                    borderColor: `red`,
                    fill: true
        })
    return(
        <>
            <CanvWrapper>
            <h1>Covid api</h1>
                <h2>Poland</h2>
                <Canvas data={confirmed} chartType='line' color='blue'datas={polDataset}/>
            {/* </CanvWrapper>
            <CanvWrapper> */}
                <h2>Global Top{window.innerWidth>750?'20':'10'}</h2>
                <Canvas data={topten.map(item=>item.name)} isName chartType='bar' color='blue'datas={tp}/>
            </CanvWrapper>
        </>
    )}
    }
export default CovidSection;
