import styled from 'styled-components';

export const Tiltle = styled.h1`
margin: ${p => p.theme.space[3]}px;
margin-bottom: ${p => p.theme.space[4]}px;
color: ${p => p.theme.colors.title};
font-size: ${p =>p.theme.fontSizes.xl}px;
`;

export const Contacts = styled.h2`
margin: ${p => p.theme.space[3]}px;
color: ${p => p.theme.colors.title};
font-size: ${p =>p.theme.fontSizes.xl}px;
`;