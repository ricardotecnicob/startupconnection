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

img{
  position: sticky;
  top: 100%;
  display: inherit;
  border-radius: 100%;
}
  .cardStatups{
    width: 320px;
    height: 400px;
    background: #fff;
    text-align: center;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    margin-right: 10px;

      .logoStatupCard{
         width: 130px;
         height: 130px;
         background: white;
         border-radius: 100%;
         display: inline-block;
         justify-content: center;
         align-items: center;
         color: white;
         font-size: 20px;
         font-weight: bold;
         text-align: center;
         margin-bottom: 12px;
      }

      <cardShadow {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        }


      .nomeStatupCard{
        font-weight: bold;
        font-size: 30px;
        display: inline-block;
        position: relative;
      }

      .bioStatupCard{
        margin-bottom: 20px;
      }

      .areaPontos{
        margin-bottom: 20px;
        font-size: 1.3em;
        font-weight: bold;
        text-shadow: 2px 2px 4px #2e74eb;
        color: white;
        background: #82acf3;
        border: none;
        border-radius: 40px 10px;
        width: 100%;

          .valorPontos{
            font-size: 1.7em;
          }

      }

      .areaButtons{
        
        button{
          padding: 10px;
          cursor: pointer;
          color: white;
          font-weight: bold;
          border: none;
          border-radius: 40px 10px;
        }

        button:nth-child(1){
          background: #0000FF;
          border: 1px solid #0000FF;
          margin-right: 10px;
        }

        button:nth-child(1):hover{
          background: #00008B;
          border: 1px solid #00008B;
          margin-right: 10px;
        }

        button:nth-child(2){
          background: #4876FF;
          border: 1px solid #4876FF;
        }

        button:nth-child(2):hover{
          background: #3A5FCD;
          border: 1px solid #3A5FCD;
        }

      }

  }

`;
