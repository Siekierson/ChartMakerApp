import React from 'react'
import styled from 'styled-components'
const Option = styled.option`
padding:10px;
`
const DefaultOption=({inner})=> <Option>{inner}</Option>
export default DefaultOption