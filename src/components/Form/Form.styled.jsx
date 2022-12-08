import styled from 'styled-components';

export const Form = styled.form`
display: flex;
flex-direction: column;
aline-items: flex-start;
width: 450px;
margin: ${p => p.theme.space[3]}px;
margin-bottom: ${p => p.theme.space[4]}px;
padding: ${p => p.theme.space[4]}px;

border: ${p => p.theme.border.normal};
border-color: ${p => p.theme.colors.border};
border-radius: ${p => p.theme.radii.normal};
   
`;

export const TypeName = styled.label`
margin: ${p => p.theme.space[0]}px;
margin-bottom: ${p => p.theme.space[3]}px;
color: ${p => p.theme.colors.title};
font-size: ${p =>p.theme.fontSizes.l}px;
`;

export const TypePhone = styled.label`
margin: ${p => p.theme.space[0]}px;
margin-bottom: ${p => p.theme.space[3]}px;
color: ${p => p.theme.colors.title};
font-size: ${p =>p.theme.fontSizes.l}px;
`;

export const InputName = styled.input`
width: 50%;
padding: ${p => p.theme.space[2]}px;
margin-bottom: ${p => p.theme.space[4]}px;
font-size: ${p => p.theme.fontSizes.m}px;
color: ${p => p.theme.colors.text};
border: ${p => p.theme.border.normal};
border-color: ${p => p.theme.colors.border};
border-radius: ${p => p.theme.radii.normal};

:hover, 
:focus{ 
    border-color:${p => p.theme.colors.hover}};

`;

export const InputPhone = styled.input`
width: 50%;
padding: ${p => p.theme.space[2]}px;
margin-bottom: ${p => p.theme.space[4]}px;
font-size: ${p => p.theme.fontSizes.m}px;
color: ${p => p.theme.colors.text};
border: ${p => p.theme.border.normal};
border-color: ${p => p.theme.colors.border};
border-radius: ${p => p.theme.radii.normal};
:hover, 
:focus{ 
    border-color:${p => p.theme.colors.hover}};
`;

export const AddButton = styled.button`
width: 40%;
cursor: pointer;
margin: ${p => p.theme.space[0]}px;
    padding: ${p => p.theme.space[2]}px;
    font-size: ${p => p.theme.fontSizes.m}px;
    color: ${p => p.theme.colors.text};
    background-color: ${p => p.theme.colors.background};    
    border: ${p => p.theme.border.normal};
    border-color: ${p => p.theme.colors.border};
    border-radius: ${p => p.theme.radii.normal};
    box-shadow: ${p => p.theme.shadows.profile};

:hover, 
:focus{ 
    background-color: ${p => p.theme.colors.hover}};

            
`;
