import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)` 
display: inline-block;
text-decoration: none;
padding: 15px;
font-weight:700;
color: #2a363b;
font-size: 18px;

&.active {

    color: #2196f3;
}`;

export const Header = styled.header`
border-bottom: 1px solid black;
`;