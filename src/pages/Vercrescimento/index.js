import React from 'react';
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

  return (
    <Container >
      <Header>
          As atulizações Feitas na Plataforma de <span>PERFIL</span>, <span>METAS</span>, <span>EQUIPE</span>, <span>POSTS</span>, <span>NEGOCIAÇÕES</span>, gerar <label>PONTOS</label> que poderam ser trocados em <label>PRÊMIOS</label> <br/>
          PERFIL ATUALIZADO A CADA 30 DIAS GANHA <label>1000 PONTOS</label> <br/><br/>
          <Link to="/dashboard" className="btnVoltar">VOLTAR</Link>
      </Header>
      <ContainerRede>
        <AreaProvider>
            <div className="areaImagemName">
                <div className="imgPerfil" >
                    
                </div>
                <div className="textPerfil" >
                    <strong>Nome da Startup</strong>
                </div>
                <p>BIO: <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum officia placeat voluptates, quos quis nostrum incidunt odio eius perspiciatis temporibus reprehenderit excepturi autem, dicta nobis iusto harum quas iure dignissimos.</p>
            </div>
            <div className="areaMenuPerfil">
              <ul>
                <Link to="/perfil" ><li>Dados da Startup <span>80% Preenchidos</span></li></Link>
                <Link to="/minhasnegociacoes" ><li>Negociações  <span>30</span></li></Link>
                <Link to="/posts" ><li>Posts  <span>30</span></li></Link>
                <Link to="/metas" ><li>Metas  <span>30</span></li></Link>
                <Link to="/team" ><li>Equipes  <span>30</span></li></Link>
                <Link to="/negociacoes" ><li>Negociações  <span>30</span></li></Link>
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
            {/* //conteudo */}
        </ConteudoBody>
      </ContainerRede>
      <Footer>

      </Footer>
    </Container>
  );
}
