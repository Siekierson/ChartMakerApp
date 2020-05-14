import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
display:flex;
align-items: center;
justify-content:space-between;
flex-direction:column;
padding:10px;
width:50%;
margin: 30px 40vw;
`
const Input= styled.input`
height: 30%;
width:100%;
text-align:center;
font-size:2rem;
padding:6px 20px;
`
const DataInfo=styled.span`
font-size:2.5rem;
width:200%;
`
const Form=({handleInput,handleSubmit, data})=>(
    <FormWrapper onSubmit={handleSubmit}>
        <Input onChange={handleInput} type='number' placeholder='point'/>
        <Input type='submit' value='Add'/>
        <DataInfo>Data in chart:{data.map(item=>`${item} , `)}</DataInfo>
    </FormWrapper>
)
export default Form;