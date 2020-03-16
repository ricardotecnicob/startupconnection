import styled from 'styled-components';

import Background from '../../assets/images/background.jpg';

export const Container = styled.div`
    background-image: url(${Background});
    position: absolute;
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
`;

export const ContainerConteudo = styled.div`
    background: rgba(0,0,0,0.7);
    height: 100%;
    width: 100%;    
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerConteudoInterno = styled.div`
  background: rgba(0,206,209,0.5); 
  padding: 20px;
  width: 768px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  .areaConteudo01{
    flex: 1;
      .optionsForm{
        margin-bottom: 10px; 

        .opt01{
          background:  ${props => props.activoaba === 'login' ? '#1E90FF' : '#00B2EE' };
          border: none ${props => props.activoaba === 'login' ? '#fff' : '#00B2EE' };
          border-radius: 5px;
          margin-right: 10px;
          padding: 7px;
          cursor: pointer;
          color: white;
          font-weight: bold;
        }

        .opt01:hover{
          background: #1E90FF;
        }

        .opt02{
          background: ${props => props.activoaba === 'cadastro' ? '#1E90FF' : '#00B2EE' };;
          border: none ${props => props.activoaba === 'cadastro' ? '#fff' : '#00B2EE' };;
          border-radius: 5px;
          margin-right: 10px;
          padding: 7px;
          cursor: pointer;
          color: white;
          font-weight: bold;
        }

        .opt02:hover{
          background: #1E90FF;
          border: 1px solid #1E90FF;
        }

      }

  }

  .areaConteudo02{
    flex: 1;
     img{
        height: 60%;
        width:60%;
        }
  } 

`;

export const FormInputs = styled.div`
`;


export const GroupInfo = styled.div`
    input{
      padding: 10px;
      margin-bottom: 5px;
      border-radius: 5px;
      border: 1px solid #ccc;
      width: 80%;
    }

    input[type=buttom]{
      text-align: center;
      background: #00BFFF;
      border: 1px solid #00BFFF;
      color: white;
      font-weight: bold;
      cursor: pointer;
    }

    input[type=buttom]:hover{
      background: #1E90FF;
      border: 1px solid #1E90FF;
    }

`;
