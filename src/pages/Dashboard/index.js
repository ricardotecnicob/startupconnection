import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AnyChart from 'anychart-react';
import anychart from 'anychart';

import { FaTrophy } from "react-icons/fa";

import { Header,ContainerRede,AreaProvider,NotificationConteudo,Footer } from '../../assets/js/global';
import { Container,ConteudoBody } from './styles';




export default function Dashboard() {

  var msftDataTable = anychart.data.table();
  msftDataTable.addData(window.get_msft_daily_short_data());
  var orclDataTable = anychart.data.table();
  orclDataTable.addData(window.get_orcl_daily_short_data());
  var cscoDataTable = anychart.data.table();
  cscoDataTable.addData(window.get_csco_daily_short_data());
  var ibmDataTable = anychart.data.table();
  ibmDataTable.addData(window.get_ibm_daily_short_data());
  var chart = anychart.stock();
  var firstPlot = chart.plot(0);
  firstPlot.area(msftDataTable.mapAs({'value': 4})).name('MSFT');
  var secondPlot = chart.plot(1);
  secondPlot.splineArea(orclDataTable.mapAs({'value': 4})).fill('#1976d2 0.65').stroke('1.5 #1976d2').name('ORCL');
  var thirdPlot = chart.plot(2);
  thirdPlot.stepArea(cscoDataTable.mapAs({'value': 4})).fill('#ef6c00 0.65').stroke('1.5 #ef6c00').name('CSCO');
  var forthPlot = chart.plot(3);
  forthPlot.line(msftDataTable.mapAs({'value': 4})).name('MSFT').tooltip(null);
  forthPlot.spline(orclDataTable.mapAs({'value': 4})).name('ORCL').tooltip(null);
  forthPlot.stepLine(cscoDataTable.mapAs({'value': 4})).name('CSCO').tooltip(null);
  chart.scroller().area(msftDataTable.mapAs({'value': 4}));
  chart.selectRange('2005-01-03', '2005-11-20');


  const handleCrescimento = () => {
    window.location.href = '/vercrescimento';
  }

  const handleNegociacoes = () => {
    window.location.href = '/negociacoes';
  }


  
  return (
    <Container >
      <Header>
          As atulizações Feitas na Plataforma de <span>PERFIL</span>, <span>METAS</span>, <span>EQUIPE</span>, <span>POSTS</span>, <span>NEGOCIAÇÕES</span>, gerar <label>PONTOS</label> que poderão ser trocados em <label>PRÊMIOS</label> <br/>
          PERFIL ATUALIZADO A CADA 30 DIAS GANHA PONTUAÇÃO <label>NOTA 1000</label>;
      </Header>
      <ContainerRede>
        <AreaProvider>
            <div className="areaImagemName">
                <div className="imgPerfil" >
                    <a href="https://placeholder.com"><img src="https://via.placeholder.com/150" /></a>
                </div>
                <div className="textPerfil" >
                    <strong>Nome da Startup</strong>
                </div>
                <p>BIO: <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum officia placeat voluptates, quos quis nostrum incidunt odio eius perspiciatis temporibus reprehenderit excepturi autem, dicta nobis iusto harum quas iure dignissimos.</p>
            </div>
            <div className="areaMenuPerfil">
              <ul>
                <Link to="/perfil" ><li>Meus Dados <span>80% Concluido</span></li></Link>
                <Link to="/minhasnegociacoes" ><li>Minha Negocições  <span>30</span></li></Link>
                <Link to="/posts" ><li>Meus Posts  <span>30</span></li></Link>
                <Link to="/metas" ><li>Metas  <span>30</span></li></Link>
                <Link to="/team" ><li>Equipes  <span>30</span></li></Link>
                <Link to="/negociacoes" ><li>Negociações  <span>30</span></li></Link>
                <Link to="/" ><li>Sair </li></Link>
              </ul>
            </div>
            <div className="areadecrescimento">
                <AnyChart
                      width="100%"
                      height={500}
                      instance={chart}
                      title="MEU CRESCIMENTO  "
                  />
            </div>
        </AreaProvider>
        <ConteudoBody>

            <div className="cardStatups cardShadow" >
                <div className="logoStatupCard">
                  <a href="https://placeholder.com"><img src="https://via.placeholder.com/150" /></a>
                </div>
            <br />

                <div className="nomeStatupCard" >Nome Startup</div>
                <div className="bioStatupCard" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum officia placeat voluptates, quos quis nostrum incidunt odio eius perspiciatis temporibus reprehenderit excepturi autem, dicta nobis iusto harum quas iure dignissimos.</div>
           
                
                <div className="areaPontos"><span className="valorPontos" >600</span> pts </div> 
              
                <div className="areaButtons" >
                  <button type="button" onClick={() => handleCrescimento()} >VER CRESCIMENTO</button>
                  <button type="button" onClick={() => handleNegociacoes()} >QUERO FAZER NEGÓCIO</button> 
                </div>
            </div> 

            <div className="cardStatups" >
                <div className="logoStatupCard"><a href="https://placeholder.com"><img src="https://via.placeholder.com/150" /></a></div><br />

                <div className="nomeStatupCard" >Nome Startup</div>
                <div className="bioStatupCard" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum officia placeat voluptates, quos quis nostrum incidunt odio eius perspiciatis temporibus reprehenderit excepturi autem, dicta nobis iusto harum quas iure dignissimos.</div>
           
                
                <div className="areaPontos"><span className="valorPontos" >600</span> pts </div> 
              
                <div className="areaButtons" >
                  <button type="button" onClick={() => handleCrescimento()} >VER CRESCIMENTO</button>
                  <button type="button" onClick={() => handleNegociacoes()} >QUERO FAZER NEGÓCIO</button> 
                </div>
            </div> 
            <div className="cardStatups" >
                <div className="logoStatupCard"><a href="https://placeholder.com"><img src="https://via.placeholder.com/150" /></a></div><br />

                <div className="nomeStatupCard" >Nome Startup</div>
                <div className="bioStatupCard" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum officia placeat voluptates, quos quis nostrum incidunt odio eius perspiciatis temporibus reprehenderit excepturi autem, dicta nobis iusto harum quas iure dignissimos.</div>
           
                
                <div className="areaPontos"><span className="valorPontos" >600</span> pts </div> 
              
                <div className="areaButtons" >
                  <button type="button" onClick={() => handleCrescimento()} >VER CRESCIMENTO</button>
                  <button type="button" onClick={() => handleNegociacoes()} >QUERO FAZER NEGÓCIO</button> 
                </div>
            </div> 
            <div className="cardStatups" >
                <div className="logoStatupCard"><a href="https://placeholder.com"><img src="https://via.placeholder.com/150" /></a></div><br />

                <div className="nomeStatupCard" >Nome Startup</div>
                <div className="bioStatupCard" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum officia placeat voluptates, quos quis nostrum incidunt odio eius perspiciatis temporibus reprehenderit excepturi autem, dicta nobis iusto harum quas iure dignissimos.</div>
           
                
                <div className="areaPontos"><span className="valorPontos" >600</span> pts </div> 
              
                <div className="areaButtons" >
                  <button type="button" onClick={() => handleCrescimento()} >VER CRESCIMENTO</button>
                  <button type="button" onClick={() => handleNegociacoes()} >QUERO FAZER NEGÓCIO</button> 
                </div>
            </div> 
            <div className="cardStatups" >
                <div className="logoStatupCard"><a href="https://placeholder.com"><img src="https://via.placeholder.com/150" /></a></div><br />

                <div className="nomeStatupCard" >Nome Startup</div>
                <div className="bioStatupCard" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum officia placeat voluptates, quos quis nostrum incidunt odio eius perspiciatis temporibus reprehenderit excepturi autem, dicta nobis iusto harum quas iure dignissimos.</div>
           
                
                <div className="areaPontos"><span className="valorPontos" >600</span> pts </div> 
              
                <div className="areaButtons" >
                  <button type="button" onClick={() => handleCrescimento()} >VER CRESCIMENTO</button>
                  <button type="button" onClick={() => handleNegociacoes()} >QUERO FAZER NEGÓCIO</button> 
                </div>
            </div> 
            <div className="cardStatups" >
                <div className="logoStatupCard"><a href="https://placeholder.com"><img src="https://via.placeholder.com/150" /></a></div><br />

                <div className="nomeStatupCard" >Nome Startup</div>
                <div className="bioStatupCard" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum officia placeat voluptates, quos quis nostrum incidunt odio eius perspiciatis temporibus reprehenderit excepturi autem, dicta nobis iusto harum quas iure dignissimos.</div>
           
                
                <div className="areaPontos"><span className="valorPontos" >600</span> pts </div> 
              
                <div className="areaButtons" >
                  <button type="button" onClick={() => handleCrescimento()} >VER CRESCIMENTO</button>
                  <button type="button" onClick={() => handleNegociacoes()} >QUERO FAZER NEGÓCIO</button> 
                </div>
            </div> 
            <div className="cardStatups" >
                <div className="logoStatupCard"><a href="https://placeholder.com"><img src="https://via.placeholder.com/150" /></a></div><br />

                <div className="nomeStatupCard" >Nome Startup</div>
                <div className="bioStatupCard" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum officia placeat voluptates, quos quis nostrum incidunt odio eius perspiciatis temporibus reprehenderit excepturi autem, dicta nobis iusto harum quas iure dignissimos.</div>
           
                
                <div className="areaPontos"><span className="valorPontos" >600</span> pts </div> 
              
                <div className="areaButtons" >
                  <button type="button" onClick={() => handleCrescimento()} >VER CRESCIMENTO</button>
                  <button type="button" onClick={() => handleNegociacoes()} >QUERO FAZER NEGÓCIO</button> 
                </div>
            </div> 
            <div className="cardStatups" >
                <div className="logoStatupCard"><a href="https://placeholder.com"><img src="https://via.placeholder.com/150" /></a></div><br />

                <div className="nomeStatupCard" >Nome Startup</div>
                <div className="bioStatupCard" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum officia placeat voluptates, quos quis nostrum incidunt odio eius perspiciatis temporibus reprehenderit excepturi autem, dicta nobis iusto harum quas iure dignissimos.</div>
           
                
                <div className="areaPontos"><span className="valorPontos" >600</span> pts </div> 
              
                <div className="areaButtons" >
                  <button type="button" onClick={() => handleCrescimento()} >VER CRESCIMENTO</button>
                  <button type="button" onClick={() => handleNegociacoes()} >QUERO FAZER NEGÓCIO</button> 
                </div>
            </div> 
            <div className="cardStatups" >
                <div className="logoStatupCard"><a href="https://placeholder.com"><img src="https://via.placeholder.com/150" /></a></div><br />

                <div className="nomeStatupCard" >Nome Startup</div>
                <div className="bioStatupCard" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum officia placeat voluptates, quos quis nostrum incidunt odio eius perspiciatis temporibus reprehenderit excepturi autem, dicta nobis iusto harum quas iure dignissimos.</div>
           
                
                <div className="areaPontos"><span className="valorPontos" >600</span> pts </div> 
              
                <div className="areaButtons" >
                  <button type="button" onClick={() => handleCrescimento()} >VER CRESCIMENTO</button>
                  <button type="button" onClick={() => handleNegociacoes()} >QUERO FAZER NEGÓCIO</button> 
                </div>
            </div> 
        </ConteudoBody>
        <NotificationConteudo>
            <div className="areaDePontos">
                  <strong><FaTrophy /></strong>
                  <label htmlFor="">1250</label> 
                  <small>pts</small>
            </div>
            <div className="verpremios">
                <Link to="/premios" >VER LISTA DE PRÊMIOS</Link>
            </div>
            <div className="ultimaAtualizacao">
                <label> Última Atualização <br /> foi há 20 dias atrás</label>
            </div>
            <div className="areadenegiociacoes">
                <div className="areaNotNegocioPassado">
                    
                    <div>
                        <label>1000pts</label>
                    </div>
                    <div>
                        <label>Ver Negociações <br /> em Destaques</label>
                    </div>

                </div>
                <div className="areaNotNegocioPassado">
                     
                    <div>
                        <label>1000pts</label>
                    </div>
                    <div>
                        <label>Ver Negociações <br /> em Destaques</label>
                    </div>

                </div>
                <div className="areaNotNegocioPassado">
                     
                    <div>
                        <label>1000pts</label>
                    </div>
                    <div>
                        <label>Ver Negociações <br /> em Destaques</label>
                    </div>

                </div>
                <div className="areaNotNegocioPassado">
                     
                     <div>
                         <label>1000pts</label>
                     </div>
                     <div>
                         <label>Ver Negociações <br /> em Destaques</label>
                     </div>
                     
                 </div>
                 <div className="areaNotNegocioPassado">
                     
                     <div>
                         <label>1000pts</label>
                     </div>
                     <div>
                         <label>Ver Negociações <br /> em Destaques</label>
                     </div>
                     
                 </div>
                 <div className="areaNotNegocioPassado">
                     
                     <div>
                         <label>1000pts</label>
                     </div>
                     <div>
                         <label>Ver Negociações <br /> em Destaques</label>
                     </div>
                     
                 </div>
                 <div className="areaNotNegocioPassado">
                     
                     <div>
                         <label>1000pts</label>
                     </div>
                     <div>
                         <label>Ver Negociações <br /> em Destaques</label>
                     </div>
                     
                 </div>
            </div>
        </NotificationConteudo>
      </ContainerRede>
      <Footer>

      </Footer>
    </Container>
  );
}
