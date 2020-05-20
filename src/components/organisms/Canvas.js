import React,{useEffect,useRef} from 'react'
import Chart from "chart.js";

const Canvas=({data,chartType,color,datas,isName})=>{
    const chartRef = useRef(null)
    useEffect(()=>{
    const myChartRef =chartRef.current.getContext("2d");
    // myChartRef.canvas.maxheight =600;
        new Chart(myChartRef,{
            type: chartType,
            data: {
                labels:isName?data:(data.map((item,index) =>`${index+1}`)),
                datasets: datas.map(item=>item),
                backgroundColor:'rgba(255, 99, 132, 0.2)',
           
            },
            
            options: {
                responsive:true,
            }
        }) 
})
    return(
        <canvas
            id="myChart"
            ref={chartRef}
        />
    )
}

export default Canvas