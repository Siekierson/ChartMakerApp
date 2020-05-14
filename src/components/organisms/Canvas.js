import React,{useEffect,useRef} from 'react'
import Chart from "chart.js";

const Canvas=({data,chartType,color})=>{
    const chartRef = useRef(null)
    const createDate={
        type: chartType,
        data: {
            labels: data.map((item,index) => `${index+1}`),
            datasets: [
                {
                    label: "Chart",
                    data: data,
                    borderColor: `${color}`,
                    fill: false,
                },
            ]
        },
        options: {
            
        }
    };
    useEffect(()=>{
    const myChartRef =chartRef.current.getContext("2d");
    myChartRef.canvas.maxheight =600;
        new Chart(myChartRef,createDate) 
})
    return(
        <canvas
            id="myChart"
            ref={chartRef}
        />
    )
}

export default Canvas