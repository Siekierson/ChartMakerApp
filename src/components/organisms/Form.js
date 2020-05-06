import React from 'react';
import styled from 'styled-components';
import SelectWrapper from '../molecues/SelectWrapper';

const FormWrapper = styled.form`
display:flex;
text-align:center;
padding:10px;
width:20vw;
margin: 30px 40vw;
`
const Input= styled.input`
padding:10px;
`
const Form=({atributes,handleSelect,handleInput,handleSubmit})=>(
    <FormWrapper onSubmit={handleSubmit}>
        <Input onChange={handleInput} type='number'/>
        <SelectWrapper atributes={atributes} Switch={handleSelect}/>
        <Input type='submit'/>
    </FormWrapper>
)
export default Form;