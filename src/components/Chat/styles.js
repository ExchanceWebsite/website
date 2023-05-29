import styled, { withTheme } from 'styled-components';
import colors from '../../styles/theme';


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
`

export const ContainerChat = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #c5c5c5;
`

export const NavBarFamilia = styled.nav`
    width: 100%;
    height: 10%;
    background-color: #015d9f;
    display: flex;
    align-items: flex-start;
`

export const Voltar = styled.div`
    width: 7%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ImgVoltar = styled.img`
    height: 25%;
`

export const NomeFamilia = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

export const ImgPerfilFamilia = styled.img`
    width: 24%;
`

export const NomeFamiliaText = styled.p `
    width: 68%;
    color: white;
    font-weight: 500;
    font-size: 1.2em;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BoxChat = styled.div`
    width: 100%;
    height: 90%;
    background-color: white;
    display: flex;
    flex-direction: column;
`

export const BoxMensagem = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`


export const Mensagem = styled.div`
    width: 50%;
    height: auto;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    margin-top: 30px;
    margin-left: 30px;
`

export const BoxInput = styled.div`
    width: 100%;
    height: 10%;
    border-top: 1px solid #c5c5c5;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f1f1f1;
`

export const MensagemInput = styled.input`
    width: 80%;
    height: 40%;
    border-radius: 50px;
    border: 1px solid #c5c5c5;
    appearance: none;
    -webkit-appearance: none;
    background: url(send.png) no-repeat center right;
    background-size: 3%;
    background-position-x: 900px;
    padding: 0px 22px 0px 22px;
    background-color: white;
`

export const Wrapper = styled.span`

    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    input {
        width: 80%;
    height: 40%;
    border-radius: 50px;
    border: 1px solid #c5c5c5;
    appearance: none;
    -webkit-appearance: none;
    background: url(send.png) no-repeat center right;
    background-size: 3%;
    background-position-x: 900px;
    padding: 0px 22px 0px 22px;
    background-color: white;
    }
    input:focus {
    border: 1px solid #c5c5c5;
    outline: none;
}
`

export const ConatinerDetalhes = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const NavBarDetalhes = styled.nav`
    width: 100%;
    height: 10%;
    background-color: #015d9f;
    display: flex;
    align-items: center;
`

export const NavBarDetalhesTexto = styled.p`
    width: 23%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    font-weight: 500;
    color: white;
`

export const Linha = styled.div`
    width: 90%;
    height: 1px;
    background-color: #c5c5c5;
`

export const Boxdetalhes = styled.div`
    width: 100%;
    height: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BoxdetalhesImg = styled.img`
    height: 80%;
`

export const BoxDescricao = styled.div`
    width: 100%;
    height: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const DescricaoTitulo = styled.div`
    width: 100%;
    height: 20%;
`

export const DescricaoTituloTexto = styled.p`
    width: 25.5%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    font-weight: 500;
    color: #C9937A;
`

export const BoxDescricaoTexto = styled.div`
    width: 90%;
    height: 60%;
    text-align: justify;
`