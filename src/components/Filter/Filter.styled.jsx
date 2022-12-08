
import styled from 'styled-components';

export const FilterBox = styled.div`
display: flex;
flex-direction: column;
aline-items: flex-start;
width: 450px;
margin: ${p => p.theme.space[0]}px;
padding: ${p => p.theme.space[3]}px;
`;

export const TypeName = styled.label`
margin: ${p => p.theme.space[0]}px;
margin-bottom: ${p => p.theme.space[3]}px;
color: ${p => p.theme.colors.title};
font-size: ${p =>p.theme.fontSizes.l}px;
`;

export const InputName = styled.input`
width: 50%;
padding: ${p => p.theme.space[2]}px;
font-size: ${p => p.theme.fontSizes.m}px;
color: ${p => p.theme.colors.text};
border: ${p => p.theme.border.normal};
border-color: ${p => p.theme.colors.border};
border-radius: ${p => p.theme.radii.normal};

:hover, 
:focus{ 
    border-color:${p => p.theme.colors.hover}};

`;