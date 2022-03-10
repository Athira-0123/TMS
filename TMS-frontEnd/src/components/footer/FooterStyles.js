import styled from 'styled-components';

export const Box = styled.div`

background-color:whitesmoke;
position: absolute;
margin-top:50px;
width: 100%;


@media (max-width: 1000px) {
	
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1200px;
	margin: auto ;
	margin-top:50px
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: center;
margin-bottom:30px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(310px, 1fr));
grid-gap: 10px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(400px, 1fr)) ;
	
}
`;

export const FooterLink = styled.a`
color: black;
margin-bottom: 2px;
font-size: 16px;
text-decoration: none;


`;

export const Heading = styled.p`
font-size: 20px;
color: #black;
margin-bottom: 20px;
font-weight: bold;
`;

