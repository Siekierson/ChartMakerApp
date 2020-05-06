import React from 'react'
import styled from 'styled-components'
import DefaultOption from '../atoms/DefaultOption'
const InnerSelect = styled.select`
padding:10px;
`
const SelectWrapper=({atributes,Switch})=>(
    <>
    <InnerSelect onChange={Switch}>
        {atributes.map(item=>(
            <DefaultOption key={item} value={item} inner={item}/>
        ))}
    </InnerSelect>
    </>
)
export default SelectWrapper;