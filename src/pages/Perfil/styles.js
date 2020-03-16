import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const ConteudoBody = styled.div`
    flex: 3;
    @media all and(min-width: 1920px){
    }
    background: white;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;


    .linha{
      border-bottom: 2px solid #8c8c8c;
      padding-bottom: 15px;
    }


    .groupCampsLadoaLado{
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 20px;


      .fotoConteudoPerfil{
        width: 100px;
        height: 100px;
        background: #000;
        border-radius: 100%;
        margin-right: 20px;
      }

      label{
        font-weight: bold;
      }

      input{
        padding: 10px;
        border: 1px solid #ccc;
        margin-bottom: 20px;
        margin-right: 20px;
        margin-top: 10px;
      }



    }

    .areaConteudoFormText{
      width: 100%;

      textarea{
        margin-bottom: 20px;
        margin-right: 20px;
        border: 1px solid #ccc;
        width: 93%;
        height: 150px;
        padding: 20px;
        margin-top: 10px;
      }

    }

`;
