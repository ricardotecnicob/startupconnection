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
          PERFIL ATUALIZADO A CADA 30 DIAS GANHA PONTUAÇÃO <label>NOTA 1000</label>
          <br/><br/>
          <Link to="/dashboard" className="btnVoltar">VOLTAR</Link>
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
            <form >
                  <div className="groupCampsLadoaLado linha">
                      <div className="areaConteudoForm">
                         <div className="fotoConteudoPerfil">

                         </div>
                      </div>
                      <div className="areaConteudoForm">
                          <label>Profile Imagem</label><br/>
                          <input type="file" name="profile_image" />
                      </div>
                  </div>

                  <div className="groupCampsLadoaLado linha">
                      <div className="areaConteudoForm">
                          <label>ID</label><br/>
                          <input type="text" name="founded_at" value="000c3b32-afa7-4950-a7e7-80969f29a869" />
                      </div>
                      <div className="areaConteudoForm">
                          <label>Data da Fundação</label><br/>
                          <input type="text" name="founded_at" value="18/11/2014" />
                      </div>
                      <div className="areaConteudoForm">
                          <label>Name</label><br/>
                          <input type="text" name="name" value="Pocketstore" />
                      </div>
                      <div className="areaConteudoForm">
                          <label>Company Name</label><br/>
                          <input type="text" name="company_name" value="Milch" />
                      </div>

                  </div>
                  
                  <div className="groupCampsLadoaLado linha">

                      <div className="areaConteudoForm areaConteudoFormText">
                          <label>Pequena descrição</label><br/>
                          <textarea name="short_description" >Loja virtual totalmente completa.\r\n\r\nControle de Vendas\r\nProdutos\r\nModalidades de Frete\r\nModalidades de Pagamento\r\nMuitas Outras Funções</textarea>
                      </div>

                      <div className="areaConteudoForm areaConteudoFormText">
                          <label>Descrição</label><br/>
                          <textarea name="short_description" >A Pocketstore</textarea>
                      </div>

                  </div>

                  <div className="groupCampsLadoaLado linha">

                      <div className="areaConteudoForm">
                          <label>Tags</label><br/>
                          <div className="groupCampsLadoaLado">
                              <div>
                                  <input type="text" value="agro" />
                              </div>
                              <div>
                                  <input type="text" value="portal" />
                              </div>
                              <div>
                                  <input type="text" value="marketplace" />
                              </div>
                              <div>
                                  <input type="text" value="plataforma" />
                              </div>
                              <div>
                                  <input type="text" value="conteúdo" />
                              </div>
                              <div>
                                  <input type="text" value="comercialização" />
                              </div>
                              <div>
                                  <input type="text" value="dados" />
                              </div>
                              <div>
                                  <input type="text" value="agricultura" />
                              </div>
                              <div>
                                  <input type="text" value="agtech" />
                              </div>
                          </div>
                      </div>


                  </div>
                  
                  <div className="groupCampsLadoaLado linha">

                      <div className="areaConteudoForm">
                          <label>Slug</label><br/>
                          <input type="text" name="slug" value="A pocketstore" />
                      </div>
                      <div className="areaConteudoForm">
                          <label>Fechada em:</label><br/>
                          <input type="text" name="closed_at" value="2015-08-17T00:00:00.000Z" />
                      </div>
                      <div className="areaConteudoForm">
                          <label>É Verificada:</label><br/>
                          <input type="text" name="is_verified" value="0" />
                      </div>
                      <div className="areaConteudoForm">
                          <label>Criado Em:</label><br/>
                          <input type="text" name="created_at" value="18/06/2013" />
                      </div>
                      <div className="areaConteudoForm">
                          <label>Atualizado Em:</label><br/>
                          <input type="text" name="updated_at" value="05/11/2019" />
                      </div>
                      <div className="areaConteudoForm">
                          <label>Empregados:</label><br/>
                          <input type="text" name="employees" value="1-5" />
                      </div>
                      <div className="areaConteudoForm">
                          <label>Alvo do Negócio:</label><br/>
                          <input type="text" name="business_target" value="B2B2C" />
                      </div>
                      <div className="areaConteudoForm">
                          <label>Fase de Negócio:</label><br/>
                          <input type="text" name="business_phase" value="Fora de Operação" />
                      </div>
                      <div className="areaConteudoForm">
                          <label>Modelo de Negócio:</label><br/>
                          <input type="text" name="business_model" value="Marketplace" />
                      </div>
                      <div className="areaConteudoForm">
                          <label>UF:</label><br/>
                          <input type="text" name="uf" value="PE" />
                      </div>
                      <div className="areaConteudoForm">
                          <label>Estado:</label><br/>
                          <input type="text" name="state" value="PERNAMBUCO" />
                      </div>
                      <div className="areaConteudoForm">
                          <label>Cidade:</label><br/>
                          <input type="text" name="city" value="Recife" />
                      </div>
                      <div className="areaConteudoForm">
                          <label>Estado - UF:</label><br/>
                          <input type="text" name="place" value="Recife - PE" />
                      </div>
                      <div className="areaConteudoForm">
                          <label>Status Startp:</label><br/>
                          <input type="text" name="is_active" value="0" />
                      </div>
                      <div className="areaConteudoForm">
                          <label>Distintivos Name:</label><br/>
                          <input type="text" name="badges_name" value="Troposlab" />
                      </div>
                      <div className="areaConteudoForm">
                          <label>Distintivos Profile:</label><br/>
                          <input type="text" name="badges_profile_image" value="Troposlab" />
                      </div>
                      <div className="areaConteudoForm">
                          <label>Seguimentos Primario:</label><br/>
                          <input type="text" name="segments_primary" value="TIC e Telecom" />
                      </div>
                      <div className="areaConteudoForm">
                          <label>Seguimentos Secundario:</label><br/>
                          <input type="text" name="segments_secondary" value="Serviços Profissionais" />
                      </div>
                  </div>
            </form>
        </ConteudoBody>
        
      </ContainerRede>
      <Footer>

      </Footer>
    </Container>
  );
}
