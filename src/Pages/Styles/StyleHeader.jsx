import styled from "styled-components";
import fundo from "../assets/fundo.png"




export const Menu = styled.div`
display:flex;
width:100%;
height:52vh;
flex-direction:row-reverse;
justify-content: space-between;
background-image:url(${fundo});


@media (max-width: 768px) {    
    position: relative;
    display:block;
 justify-content:flex-end;
border:solid black;
flex-direction:row;


}
`
export const ListasH = styled.ul`
margin-left:74vw;

`
export const Listas = styled.ul`
display:flex;
justify-content: space-between;
margin-right:2vw;
border:solid;
width:50vw;
@media (max-width: 768px) {
    display:none;
}

`
export const MenuH = styled.button`
display:none;
border-radius:0.5rem;
@media (max-width: 768px) {
    position:relative;
    left:52vh;
    flex-direction: row;
    display:block;
 justify-content:flex-start;

}
`