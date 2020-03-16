import styled from 'styled-components';


export const Header = styled.div`
    padding: 30px;
    background: #bee1ef;
    text-align: center;
    color: black;
    font-size: 20px;

      span{
        color: red;
        font-weight: bold;
      }

      label{
        text-decoration: underline;
      }

      .btnVoltar{
        background: red;
        border: none;
        border-radius: 40px 10px;
        padding: 10px;
        color: white;
        font-weight: bold;
        text-decoration: none;
      }

      .btnVoltar:hover{
        background: #f10300;
      }

`;

export const ContainerRede = styled.div`
  display: flex;
`;


export const AreaProvider = styled.div`
  flex: 1;

  @media only screen and (min-width: 1920px){
  }

  
  background: white;
  
  .areaMenuPerfil{
      width: 90%;
      margin:auto;
      margin-left: -0px;
      ul{
        list-style: none;
        a{
          color: white;
          font-weight: bold;
          text-decoration: none;

          li{
            padding: 5px; 
            background: #1f75fe;
            border: none;
            border-radius: 10px 10px 10px 10px;
            border: none;
            border radius: 40px 10px;
            margin-bottom: 5px; 
            
              span{
                background: green;
                margin-left: 10px;
              }

          }
        }
      }
  }

  .areaImagemName{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    border-bottom: 2px solid #ccc;
    width: 80%;
    margin:auto;

    .imgPerfil{
      background: pink;
      width: 150px;
      height: 170px;
      
    }

    .imgPerfil img{
      height: 100%;
    }

    .textPerfil{
      margin-bottom: 10px;
    }


  }


  .areadecrescimento{
    
    width: 100%;
  }

`;



export const NotificationConteudo = styled.div`
  flex: 1;

  @media only screen and (min-width: 1920px){
  }

  background: white;
  padding-top: 20px;


  .areaDePontos{
    width: 200px;
    height: 200px;
    border-radius: 100%;
    border-bottom: 2px solid #ccc;
    background: #ccc;
    margin:auto;
    display: flex;
    justify-content: center;
    align-items: center;  


      strong{
        font-size: 3em;
        margin-top: 10px;
      }

      label{
        font-size: 3em;
      }

      small{
        margin-top: 20px;
      }

  } 

  .ultimaAtualizacao{
    background: #ef2c2a;
    border: none;
    border-radius: 10px 10px 10px 10px;
    width: 100%;
    min-height: 50px;
    text-align: center;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;

      label{
        font-size: 1.2em;
        color: white;
        font-weight: bold;
      }

  }
  
  .areaNotNegocioPassado{
    width: 90%;
    margin:auto;
    padding: 10px;
    background: #f59f59;
    border: none;
    border-radius: 10px 10px 10px 10px;
    margin-top: 20px;
    display:flex;
    justify-content:center;
    align-items: center
    color: #fff;
    text-align: center;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    align-items: center;

      label{
        color: #fff;
        font-weight: bold;
      }

  }


  .verpremios{
    margin-top: 30px;
    text-align: center;
    margin-bottom: 30px;

    a{
      background: #000;
      text-decoration: none;
      padding: 10px;
      color:white; 
    }

    a:hover{
      background: #292929;
    }

  }

`;



export const Footer = styled.div`
  
`;
