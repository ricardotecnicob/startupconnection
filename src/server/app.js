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

  const [list, setList] = useState(
    [
    
      {
          "id": "000c3b32-afa7-4950-a7e7-80969f29a869",
          "name": "Pocketstore",
          "description": "A Pocketstore, projeto premiado na Campus Party Recife, é uma plataforma de mobile commerce que permite que comerciantes, lojistas e varejistas vendam seus produtos e serviços através de tablets e smartphones em poucos minutos através de uma ferramenta online fácil de configurar e gerenciar.",
          "tags": [ ],
          "slug": "pocketstore",
          "is_verified": 0,
          "created_at": "18/06/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "PE",
          "state": "Pernambuco",
          "city": "Recife",
          "place": "Recife - PE",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/kr85azux2pcubvuw9kyv.opt.png",
          "founded_at": "18/11/2014",
          "id": "000e1ebb-f03e-49ec-8e2c-9e28f62a272a",
          "name": "EasyBox",
          "description": "O EasyBox é a primeira rede de aluguel de garagens do Brasil! Conectamos quem tem vagas livres com quem não tem onde deixar seu carro, como um AirBnB para vagas de garagem!",
          "tags": [ ],
          "slug": "easybox",
          "is_verified": 0,
          "created_at": "19/11/2014",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_phase": "Fora de Operação",
          "business_model": "Marketplace",
          "uf": "RS",
          "state": "Rio Grande do Sul",
          "city": "Porto Alegre",
          "place": "Porto Alegre - RS",
          "is_active": 0,
          "badges": [
              {
                  "name": "Troposlab",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_troposlab.png"
              },
              {
                  "name": "Sebrae Capital Empreendedor",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_sebrae_capital.png"
              }
          ],
          "segments": {
              "primary": "Outros"
          }
      },
      {
          "id": "003e2871-5f86-4d3b-b1c3-420cbda15a4f",
          "name": "MinhaConsulta.com",
          "description": "MinhaConsulta.com é uma plataforma onde pacientes podem encontrar profissionais de saúde, ver seus currículos, visualizar recomendações de outros pacientes e agendar uma consulta instantaneamente 24/7.",
          "tags": [ ],
          "slug": "minhaconsultacom",
          "is_verified": 0,
          "created_at": "16/06/2011",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/knm1pwwdfggptmfrr4nw.opt.png",
          "id": "0043acbf-c88d-4d34-bc56-3cdfe88144cb",
          "name": "Mednow",
          "description": "A Mednow é uma plataforma de serviços web para telemedicina onde médicos laudadores podem elaborar laudos para clínicas de exames e hospitais, a qualquer hora e em qualquer lugar.",
          "tags": [ ],
          "slug": "mednow",
          "is_verified": 0,
          "created_at": "18/06/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "SC",
          "state": "Santa Catarina",
          "city": "Florianópolis",
          "place": "Florianópolis - SC",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "004705db-ae87-41a3-af50-bb9b3656cc46",
          "name": "Focando",
          "description": "Portal de notícias do mercado imobiliário. Fornece serviços em web para corretores e Imobiliárias. Soluções e serviços para mercado imobiliário",
          "tags": [ ],
          "slug": "focando",
          "is_verified": 0,
          "created_at": "18/06/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/oferta-farma.png",
          "founded_at": "31/05/2017",
          "id": "0052c793-4c6f-4eff-861a-c2fee31fbf58",
          "name": "Oferta Farma",
          "company_name": "Oferta Farma",
          "short_description": "Comparador de preços de medicamentos e perfumaria.",
          "tags": [
              "Internet"
          ],
          "slug": "oferta-farma",
          "is_verified": 0,
          "created_at": "05/11/2017",
          "updated_at": "07/11/2019",
          "employees": "6-10",
          "business_target": "B2B2C",
          "business_phase": "Fora de Operação",
          "business_model": "Outros",
          "uf": "SP",
          "state": "São Paulo",
          "city": "Santo André",
          "place": "Santo André - SP",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Saúde e Bem-estar"
          }
      },
      {
          "id": "005aef9d-b2c6-4c0c-962d-99abf523e8c1",
          "name": "iVarekai IT Solutions",
          "tags": [ ],
          "slug": "ivarekai-it-solutions",
          "is_verified": 0,
          "created_at": "18/06/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "SP",
          "state": "São Paulo",
          "city": "Mogi das Cruzes",
          "place": "Mogi das Cruzes - SP",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/helena-dias-de-oliveira.png",
          "id": "007be66e-8a5d-4fb6-b24c-f23b48dea9d5",
          "name": "Helena Dias de Oliveira",
          "description": "A Companhia Helena realiza palestras e atividades físicas com o objetivo de sanar as dores da falta de amigos, de ter diálogos e momentos divertidos em grupos. Iniciei com um projeto coma terceira idade.  Percebendo as dificuldades dos professores da rede de Educação, criei também o Métodos de Apoio ao Professor, para levar conhecimento sobre as novas tecnologias em sala de aula, de forma descontraída entre eles, buscando suas dúvidas, pesquisando sobre as melhores respostas e aplicação,  dando espaço para terapias de atividades físicas e laborais, que serão as ferramentas para aproximação durante as palestras e, interagir com a  expansão de alegria de viver, aprender coisas novas e desempenhar com satisfação e importância todo e qualquer trabalho desenvolvidos por suas mãos, seja pelo contato com o pequeno, seja em contato com o grande, pois tudo é uma conexão e tudo circula entre ambos os pontos pela ligação do servir, investir, estimular, alavancar, dar as mãos construir caminhos e viver pelas novas descobertas,. Bloquear qualquer um desses caminhos é matar a razão de existir. A resistência com as novidades  dá muito trabalho. Todos caem no tráfego das velhas tradições, das raízes, do padrão formatado, em suas regiões.. A modernidade das tecnologias é um abalo que naõ pode ser indiferente à ele, as crianças e jovens são muito rápidos e isto gera um stress a mais a ser desmistificado junto com os professores e trabalhado passo a passo, projeto que darei início neste segundo semestre de 2018.\n Também iniciei  um pequeno e-comerce misto, como fonte de renda.",
          "tags": [ ],
          "slug": "helena-dias-de-oliveira",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_phase": "Fora de Operação",
          "business_model": "E-commerce",
          "uf": "SP",
          "state": "São Paulo",
          "city": "Capão Bonito",
          "place": "Capão Bonito - SP",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Educação"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/relljtqymxckfejponcq.opt.png",
          "id": "0086bac6-ac99-461d-920e-0bda2134ecbc",
          "name": "Wonlogos",
          "description": "Um site de e-commerce de Design e Web digital, que fará projetos de design de qualidade para pequenas e médias empreas. Tudo que o pequeno empresário precisa ao alcance de apenas um clique. Site conta com mais de 60 produtos diferentes para que o cliente possa escolher o que mais se adequa ele. Tem sua empresa com Design diferenciado e profissional para atingir o seu consumidor.\nNosso modelo de negócio é diferente dos sites de concorrência criativa. Nosso foco é ser uma agencia de publicidade com uma equipe especialidade e possa atingir o resultado que cada cliente precisa para sua empresa.",
          "tags": [ ],
          "slug": "wonlogos",
          "is_verified": 0,
          "created_at": "07/01/2012",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Bernardo do Campo",
          "place": "São Bernardo do Campo - SP",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/meu-escolar.png",
          "id": "00a1ee72-7ee3-43d2-9317-c18c00659773",
          "name": "Meu Escolar",
          "company_name": "Meu Escolar",
          "tags": [
              "Advertising"
          ],
          "slug": "meu-escolar",
          "is_verified": 0,
          "created_at": "01/02/2017",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_target": "B2B",
          "business_phase": "Fora de Operação",
          "uf": "CE",
          "state": "Ceará",
          "city": "Fortaleza",
          "place": "Fortaleza - CE",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "00c1b94a-584a-4a51-8455-2e995173ae46",
          "name": "Web Commerce",
          "short_description": "Loja virtual totalmente completa.\r\n\r\nControle de Vendas\r\nProdutos\r\nModalidades de Frete\r\nModalidades de Pagamento\r\nMuitas Outras Funções",
          "description": "Loja virtual totalmente completa.\r\n\r\nControle de Vendas\r\nProdutos\r\nModalidades de Frete\r\nModalidades de Pagamento\r\nMuitas Outras Funções",
          "tags": [ ],
          "slug": "web-commerce",
          "is_verified": 0,
          "created_at": "10/05/2014",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "ES",
          "state": "Espírito Santo",
          "city": "Vila Velha",
          "place": "Vila Velha - ES",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/qhgt7iceobxkgn4ivq2q.opt.png",
          "id": "00f9ee0a-5656-4791-86ba-094b17bc2e43",
          "name": "Remote Park",
          "description": "Chega de gastar tempo e combustível procurando vagas para estacionar. \r\n\r\nRemote Park ajuda você a encontrar os estacionamentos a partir da sua localização ou endereço desejado. \r\n\r\nCompare preços, disponibilidade de vagas, convênios e muito mais. Tudo isso grátis ! \r\n\r\nE para os estacionamentos um gerenciador para a suas unidades em tempo real. \r\n\r\n* Startup vencedora do Startup Farm Edição Belo Horizonte *",
          "tags": [ ],
          "slug": "remote-park",
          "is_verified": 0,
          "created_at": "02/02/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Belo Horizonte",
          "place": "Belo Horizonte - MG",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/c148cb5a5fa819e246fab9ef0bb18d6a0202ade5.opt.png",
          "founded_at": "31/12/2014",
          "id": "0149139e-286e-4b82-b356-67708a82a900",
          "name": "Atentoz",
          "short_description": "Atentoz is providing CRM solution.",
          "tags": [ ],
          "slug": "atentoz",
          "is_verified": 0,
          "created_at": "11/04/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Gestão"
          }
      },
      {
          "id": "0159e65c-c081-4f6a-ae1d-a93853610ecc",
          "name": "Vitrine Inversa",
          "description": "O comércio mudou: o mercado de massa está se fragmentando em diversos nichos. Nesse cenário, como encontrar o encaixe perfeito entre desejo e realização?\n\nNós assumimos o desafio de dar acesso a maior variedade de produtos possível, de uma forma cômoda e a preços justos. Assim surgiu o Vitrine Inversa.\n\nUm marketplace diferente, onde os desejos dos clientes é que estão na vitrine. E a boa surpresa? É melhor também para o vendedor. \n\nDescubra como em nosso site. \n\n<-- Aqui do lado ó!\n",
          "tags": [ ],
          "slug": "vitrine-inversa",
          "is_verified": 0,
          "created_at": "29/02/2012",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "BA",
          "state": "Bahia",
          "city": "Salvador",
          "place": "Salvador - BA",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "016061c4-c37b-45e9-bfd4-6bd69e7a7fa1",
          "name": "Amigos de Bolso",
          "description": "Amigos de Bolso é um Sistema de Captação de Recursos para ONG's e Inst. beneficentes. Criada em 2012, a Amigos de Bolso Intermediação de Negócios LTDA, procura incentivar o ato da doação voluntária para ONG's e Instituições Benef., através de Bonificações, oferecidas aos doadores. Um sistema absolutamente legal e transparente, no qual o ato da doação voluntária acaba convertendo-se em Ajuda mútua.\r\n\r\nIntermediar o contato entre ONG's e Doadores, promovendo a solidariedade, convertendo-a em ajuda mútua é o nosso foco!\r\n\r\nA Amigos de Bolso, aposta e Acredita no 3º Setor.",
          "tags": [ ],
          "slug": "amigos-de-bolso",
          "is_verified": 0,
          "created_at": "23/09/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "01961fce-865e-4bbc-9c12-16b2629bdce1",
          "name": "Mystery Guest",
          "description": "Somos uma empresa especializada em Clientes Ocultos mas com uma proposta diferente da concorrência, nosso objetivo é avaliar o estabelecimento buscando traduzir a como foi experiência sensorial do cliente durante o momento de consumo. Devido nosso know how em hotéis de luxo e muitos estudos em neurobranding e marketing sensorial, oferecemos uma consultoria  de excelência, acessível e de extrema valia para que o gestor possa saber exatamente o que precisa melhorar para aperfeiçoar seu negócio. ",
          "tags": [ ],
          "slug": "mystery-guest",
          "is_verified": 0,
          "created_at": "18/06/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "RJ",
          "state": "Rio de Janeiro",
          "city": "Rio de Janeiro",
          "place": "Rio de Janeiro - RJ",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/oscar105.png",
          "id": "01a995d0-be3f-4b84-b985-59972b8d3c2c",
          "name": "Oscar105",
          "short_description": "Escritório virtual pra profissionais de arquitetura.",
          "description": "Escritório virtual pra profissionais de arquitetura.",
          "tags": [ ],
          "slug": "oscar105",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Fora de Operação",
          "business_model": "SaaS",
          "uf": "PR",
          "state": "Paraná",
          "city": "Curitiba",
          "place": "Curitiba - PR",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Construção Civil"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/eht7r3mwywjfvob0vxd2.opt.png",
          "id": "01bc039e-edf3-4286-8048-a5cd69e10a96",
          "name": "Heatmaper",
          "short_description": "Heatmaper is a cloud service which analyzes the recorded videos from existing cameras to reveal customer behavior insights.",
          "description": "Heatmaper is a cloud service which analyzes the recorded videos from existing cameras to reveal customer behavior insights.",
          "tags": [ ],
          "slug": "heatmaper",
          "is_verified": 0,
          "created_at": "17/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Cloud Computing"
          }
      },
      {
          "founded_at": "31/12/2016",
          "id": "01dd7106-46a0-487d-b9a4-9cd2bfab198c",
          "name": "Renda Extra",
          "description": "Somos um marketplace de serviços especializados em contratos de trabalho intermitente, nosso objetivo é gerar oportunidades de trabalho para todas pessoas dispostas a completar sua renda no seu tempo livre disponível, gerando renda para todos.",
          "tags": [ ],
          "slug": "renda-extra",
          "is_verified": 0,
          "created_at": "10/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "RS",
          "state": "Rio Grande do Sul",
          "city": "Porto Alegre",
          "place": "Porto Alegre - RS",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Serviços Profissionais"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/qckew50mnd7icswipqo5.opt.png",
          "founded_at": "04/03/2012",
          "id": "01f5d881-0f6f-4eec-b3de-997afcfba076",
          "name": "Faro Web Design Studio",
          "description": "FARO - Agência de Web Design & Consultoria\r\n \r\nSomos uma agência de Web Design e Design Gráfico, com sede na cidade de Belém. Atuamos em diversas regiões e atendemos todo tipo de empresa.\r\n \r\nCriamos logos modernas e sites personalizados para você e seu negócio. Soluções de sistemas web, mídia digital, conteúdo publiciário e jornalístico...",
          "tags": [ ],
          "slug": "faro-web-design-studio",
          "is_verified": 0,
          "created_at": "05/03/2015",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Fora de Operação",
          "business_model": "SaaS",
          "uf": "PA",
          "state": "Pará",
          "city": "Belém",
          "place": "Belém - PA",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Internet"
          }
      },
      {
          "founded_at": "01/02/2012",
          "id": "01fcb5c3-1ec4-4cff-98c0-defa6d625b9c",
          "name": "Guia de Profissional",
          "description": "Somos um site de busca de profissionais voltados a serviços da casa que conta com 16 mil profissionais cadastrados, seguidores no facebook bem como em nosso instagram.\r\nO Guia de Profissional identifica a localização do usuário através do CEP indicado ou GPS (mobile) e mostramos, em uma lista dos profissionais mais próximos a ele.",
          "tags": [ ],
          "slug": "guia-de-profissional",
          "is_verified": 0,
          "created_at": "13/02/2015",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_phase": "Fora de Operação",
          "business_model": "E-commerce",
          "uf": "PR",
          "state": "Paraná",
          "city": "Curitiba",
          "place": "Curitiba - PR",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Internet"
          }
      },
      {
          "id": "0207446a-7368-478f-955d-a9c9c7da57d0",
          "name": "Pralvin Brazil Players",
          "short_description": "A Pralvin Brazil Players é uma agenciadora de jogadores de futebol. Um banco de dados de jogadores disponível para clubes de futebol.",
          "description": "A Pralvin Brazil Players é uma agenciadora de jogadores de futebol. Um banco de dados de jogadores disponível para clubes de futebol.",
          "tags": [ ],
          "slug": "pralvin-brazil-players",
          "is_verified": 0,
          "created_at": "09/06/2014",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "SP",
          "state": "São Paulo",
          "city": "Guarujá",
          "place": "Guarujá - SP",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "0240b100-d50d-48c6-9f4e-6a61c277b888",
          "name": "Milch",
          "company_name": "Milch",
          "short_description": "O objetivo é resolver o problema da baixa produtividade leiteira das propriedades brasileiras por meio do ajuste da nutrição.",
          "tags": [
              "Big Data"
          ],
          "slug": "milch",
          "is_verified": 0,
          "created_at": "16/03/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_target": "B2B",
          "business_phase": "Fora de Operação",
          "business_model": "SaaS",
          "uf": "PR",
          "state": "Paraná",
          "city": "Londrina",
          "place": "Londrina - PR",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Agronegócio"
          }
      },
      {
          "founded_at": "31/03/2015",
          "id": "02984743-0398-411f-8d22-aba8e69c1e23",
          "name": "Gestão Easy - Sistema de gestão inteligente",
          "description": "O Gestão Easy auxilia empreendedores no gerenciamento financeiro do seu negócio de uma maneira fácil, rápida e totalmente inteligente. \r\n\r\n\r\n\r\nQual problema estamos resolvendo?\r\n\r\nSegundo o IBGE quase metade das empresas que abrem no Brasil fecham as suas portas em menos de três anos. pela má gestão do negócio. (O grande problema hoje no Brasil, é a má gestão nas empresas).\r\n\r\n\r\nComo vamos resolver esse problema?\r\n\r\nCriando um sistema online que não só ajude o gestor a administrar o seu negócio, mas que mostra e sugere dicas para uma melhor gestão usando a inteligencia artificial.\r\n",
          "tags": [ ],
          "slug": "gestao-easy-sistema-de-gestao-inteligente",
          "is_verified": 0,
          "created_at": "14/06/2015",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Fora de Operação",
          "business_model": "SaaS",
          "uf": "SC",
          "state": "Santa Catarina",
          "city": "Itajaí",
          "place": "Itajaí - SC",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Outros"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/imobily.png",
          "id": "02a87bbd-310d-4c0c-a731-080b0c9e229f",
          "name": "Imobily",
          "short_description": "Plataforma que encontra o imóvel que você consegue comprar de acordo com o seu bolso.",
          "description": "Plataforma que encontra o imóvel que você consegue comprar de acordo com o seu bolso.",
          "tags": [ ],
          "slug": "imobily",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "ES",
          "state": "Espírito Santo",
          "city": "Vitória",
          "place": "Vitória - ES",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "02d027ff-908c-44c8-a1a7-5bebe24ab2f1",
          "name": "Indica e Cia.",
          "description": "O Indica e Cia é uma plataforma de indicação de prestadores de serviços, especializados na instalação de ar condicionado e equipamentos para telecomunicações e segurança (inicialmente). Nosso objetivo é oferecer o diretório mais completo e segmentado de prestadores de serviços do mercado nacional, e ainda assim ser extremamente fácil de usar.",
          "tags": [ ],
          "slug": "indica-e-cia",
          "is_verified": 0,
          "created_at": "15/05/2012",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "founded_at": "28/02/2017",
          "id": "02df3889-db25-4c43-90fc-346f7cd39c8c",
          "name": "Empreenda Projetos",
          "company_name": "Empreenda Projetos",
          "short_description": "Apoiar empreendedores a transformarem suas ideias em negócios viáveis.",
          "description": "Plano de Negócio\nEstudo de Mercado\nCoaching para o Empreendedor\nDesenvolvimento organizacional",
          "tags": [
              "Educação"
          ],
          "slug": "empreenda-projetos",
          "is_verified": 0,
          "created_at": "12/12/2017",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2S",
          "business_phase": "Fora de Operação",
          "business_model": "Licenciamento",
          "uf": "BA",
          "state": "Bahia",
          "city": "Camaçari",
          "place": "Camaçari - BA",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Serviços Profissionais"
          }
      },
      {
          "id": "02e17ac8-36f2-4c13-b3a6-cad4a055d973",
          "name": "Onpiggy",
          "description": "O Onpiggy é uma startup de social commerce.\r\n\r\nAtravés do Onpiggy é possível ter uma Compra Coletiva completa dentro do Facebook, permitindo ao usuário curtir, compartilhar, comentar e comprar direto da rede social.\r\n\r\nResumindo...\r\nCompra Coletiva na era do Social Commerce.\r\n\r\nSaiba mais:\r\nhttp://onpiggy.com",
          "tags": [ ],
          "slug": "onpiggy",
          "is_verified": 0,
          "created_at": "22/04/2012",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "BA",
          "state": "Bahia",
          "city": "Salvador",
          "place": "Salvador - BA",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "founded_at": "01/03/2013",
          "id": "02f107ff-24aa-48d2-9bf4-1019a5241389",
          "name": "GRUPO KATSU",
          "description": "Estamos voltados a desenvolver soluções para educação em forma de aplicativos e aplicações desktop. Já estamos usando o aplicativo KATSU EDUCACIONAL  em colégio de ensino médio e no momento desenvolvendo aplicações para ensino fundamental I e II.",
          "tags": [ ],
          "slug": "grupo-katsu",
          "is_verified": 0,
          "created_at": "04/06/2015",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Fora de Operação",
          "business_model": "SaaS",
          "uf": "AC",
          "state": "Acre",
          "city": "Rio Branco",
          "place": "Rio Branco - AC",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Educação"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/boobonus.png",
          "founded_at": "08/10/2012",
          "id": "030136f5-a9a2-40e7-b05b-e7317c027c9c",
          "name": "Boobonus",
          "company_name": "Boobonus",
          "short_description": "Testado e aprovado, o aplicativo Boobonus é um sistema gratuito de recompensas e compartilhamento de lucros que realmente funciona",
          "description": "Para os parceiros, o Boobonus é uma poderosa e exclusiva ferramenta de fidelização e captação de clientes. Para os usuários, um sistema de cashback (dinheiro de volta) que compartilha o faturamento não apenas com próprio usuário, mas também com aqueles que indicam, sejam eles pessoas físicas ou jurídicas. Para as ONGs, o Boobonus é uma solução eficiente e ilimitada de captação de recurso.\r\n\r\n",
          "tags": [ ],
          "slug": "boobonus",
          "is_verified": 0,
          "created_at": "14/05/2017",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_target": "B2B2C",
          "business_phase": "Fora de Operação",
          "uf": "CE",
          "state": "Ceará",
          "city": "Fortaleza",
          "place": "Fortaleza - CE",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "founded_at": "30/09/2017",
          "id": "0304164b-395f-451b-badf-293315b659db",
          "name": "E-commerce e Varejo",
          "company_name": "E-commerce e Varejo",
          "tags": [
              "Educação"
          ],
          "slug": "e-commerce-e-varejo",
          "is_verified": 0,
          "created_at": "25/04/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B2C",
          "business_phase": "Fora de Operação",
          "business_model": "E-commerce",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Educação"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/fzoy9amx073hhhlixz5x.opt.png",
          "id": "0320630d-3010-4f5b-aa79-70261bf96aa4",
          "name": "iPark Brasil",
          "short_description": "The iPark is the country's first application that enables besides seeking jobs, pay them right from your smartphone.",
          "description": "The iPark is the country's first application that enables besides seeking jobs, pay them right from your smartphone.",
          "tags": [ ],
          "slug": "ipark-brasil",
          "is_verified": 0,
          "created_at": "17/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "0320813b-1a64-441f-bbf4-56f4150d7855",
          "name": "Batuque TV Digital",
          "short_description": "A Batuque TV Digital é uma startup de base tecnológica que faz pesquisa, criação de aplicações interativas e treinamentos em TV Digital.",
          "description": "A Batuque TV Digital é uma startup de base tecnológica que faz pesquisa, criação de aplicações interativas e treinamentos em TV Digital.",
          "tags": [ ],
          "slug": "batuque-tv-digital",
          "is_verified": 0,
          "created_at": "19/05/2011",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "RJ",
          "state": "Rio de Janeiro",
          "city": "Rio de Janeiro",
          "place": "Rio de Janeiro - RJ",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "founded_at": "02/08/2011",
          "id": "04005aed-d158-4926-9e24-db2b1c97de8f",
          "name": "MaxiTransfer",
          "description": "A Maxi Transfer – Tecnologia e Desenvolvimento Ltda. \u000bsurge a partir da busca pelo desenvolvimento de tecnologias \u000bcom desenho universal e que sirvam como suporte fundamental ao público com deficiência.",
          "tags": [ ],
          "slug": "maxitransfer",
          "is_verified": 0,
          "created_at": "21/09/2015",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2C",
          "business_phase": "Fora de Operação",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Outros"
          }
      },
      {
          "id": "0406dfde-6691-45f8-a2d6-07813ddb492c",
          "name": "DealMatch",
          "description": "Plataforma de Relacionamento Fechada e Privada de um Grupo Seleto de CO-Investidores Qualificados. Reunimos os principais players do mercado através da criação dos Investment Partners. E são justamente através destes parceiros conceituados e reconhecidos no mercado nacional e internacional que temos acesso às melhores startups e empreendedores do mercado.",
          "tags": [ ],
          "slug": "dealmatch",
          "is_verified": 0,
          "created_at": "17/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Finanças"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/wg37hi8yemauryz1g5bs.opt.png",
          "founded_at": "24/07/2012",
          "id": "04983abd-f9bd-41b6-8de0-34a8fff42c77",
          "name": "CasalShow",
          "description": "Startup voltada para o mercado de casamento. Os serviços incluem a criação de site de casamento com opções para gerenciamento e divulgação do casamento. Também inclui lista de presentes virtuais para recebimento em dinheiro.",
          "tags": [ ],
          "slug": "casalshow",
          "is_verified": 0,
          "created_at": "14/01/2015",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2C",
          "business_phase": "Fora de Operação",
          "business_model": "Marketplace",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Outros"
          }
      },
      {
          "founded_at": "31/08/2014",
          "id": "04a19bd4-ea6e-431b-98c2-cbb331f280d5",
          "name": "Contrataê",
          "short_description": "O Google para serviços. ",
          "description": "O Google para serviços. ",
          "tags": [ ],
          "slug": "contratae",
          "is_verified": 0,
          "created_at": "19/01/2015",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_phase": "Fora de Operação",
          "business_model": "Marketplace",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Uberlândia",
          "place": "Uberlândia - MG",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Outros"
          }
      },
      {
          "id": "04a60a1c-5f7e-47b3-abce-0850d1507aaf",
          "name": "MNIX Mobile Development",
          "description": "Startup fundada em 2012, nascida do Joint Venture das empresas m.Gaia studio e Lecom. A MNIX tem como foco agregar valor ao negócio do cliente, simplificando processos e melhorando resultados por meio de soluções de mobilidade que sejam flexíveis e inovadoras. Nosso foco é traduzir a inovação em resultados, proporcionando vantagem competitiva para aqueles que utilizam nossos serviços.",
          "tags": [ ],
          "slug": "mnix-mobile-development",
          "is_verified": 0,
          "created_at": "24/09/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "SP",
          "state": "São Paulo",
          "city": "Bauru",
          "place": "Bauru - SP",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "founded_at": "16/07/2015",
          "id": "04b46903-0199-4c16-92e3-1f62d9b687a8",
          "name": "workntime",
          "short_description": "Startup voltada para qualificação de serviços terceirizados ou profissionais liberais.",
          "description": "Startup voltada para qualificação de serviços terceirizados ou profissionais liberais.",
          "tags": [ ],
          "slug": "workntime",
          "is_verified": 0,
          "created_at": "08/10/2015",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_target": "B2C",
          "business_phase": "Fora de Operação",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Patos de Minas",
          "place": "Patos de Minas - MG",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Outros"
          }
      },
      {
          "id": "04f2d2f2-eede-4d9f-965f-731b53b03023",
          "name": "Tour Control",
          "description": "O tourcontrol é uma ferramenta de gestão de viagens que auxilia as duas pontas.\r\nDe um lado o usuário que precisa ou sonha em viajar para algum lugar e precisa se planejar.\r\nDo outro as agencias e operadoras que precisam de um sistema de gestão ágil e conectado aos seus clientes, o tourcontrol vem com esta proposta.\r\nAuxiliar as pessoas a alcançar seus sonhos e na outra ponta auxiliar as empresas a alavancar suas vendas   ",
          "tags": [ ],
          "slug": "tour-control",
          "is_verified": 0,
          "created_at": "26/04/2012",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "0513bdcb-5ea4-4b83-8c0b-9828dde1c248",
          "name": "CooperGames",
          "tags": [ ],
          "slug": "coopergames",
          "is_verified": 0,
          "created_at": "18/06/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "SP",
          "state": "São Paulo",
          "city": "Campinas",
          "place": "Campinas - SP",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "founded_at": "05/08/2014",
          "id": "053028fd-db3d-4992-9b9e-6900fb544462",
          "name": "Mybookin™",
          "description": "Mybookin™ — Marca e patentes já registradas.\r\n\r\nDescrição: \r\nO Mybookin é um aplicativo social que tem como objetivo conectar, mapear e manter a relação entre os usuários de forma que não se limita a apenas isso, mas também oferece recursos adicionais de entretenimento, colaboração e comunicação.\r\n\r\nMissão: \r\nO Mybookin mapeia conexões e também dá suporte ao uso de aplicativos integrados, tais como a nuvem inCloud e o Playtune para divulgação de músicas e artistas individuais.\r\n\r\nQual o problema podemos solucionar?\r\nNos serviços de redes sociais atuais os usuários não tem um bom atrativo para que permaneçam muito tempo no site, pois se limitam apenas em um único elemento, que queiramos ou não isso com o tempo fica chato e repetitivo. Porém, o Mybookin tem meios de chamar a atenção dos usuários com novas funções nunca vistas antes em uma única rede social, visando como inovação central a integração de 8 aplicativos dentro da rede para um maior engajamento do usuário na rede.  \r\n\r\nQuem são nossos clientes?\r\nJovens à procura de diversidade e mais entretenimento em apps sociais & empresas de pequeno e grande porte á procura de atingir um público maior por meio da publicidade e facilidade no contato com o consumidor.\r\n\r\nSetor.\r\nInternet/Serviços da web.\r\n\r\nQual a inovação ou o diferencial em relação aos concorrentes?\r\nA nossa vantagem se dá pelo fato de introduzirmos em um só site uma mescla de aplicativos antes vistos apenas separadamente, o que a longo prazo nos garante uma unicidade de serviço, pois nenhum de nossos concorrentes oferecem todos os nossos recursos.\r\n\r\nEm que estágio está o produto?\r\nEm desenvolvimento.\r\n\r\nQual o maior desafio da empresa neste momento?\r\nDesenvolver/aprimorar o produto\r\n\r\nQual o segundo maior desafio da empresa neste momento?\r\nInvestimento\r\n\r\nQual o terceiro maior desafio da empresa neste momento?\r\nAumentar as vendas\r\n\r\nPor que decidi criar uma rede social, se já tem várias no mercado completamente estabilizadas?\r\nA idéia do Mybookin na real surgiu há muito tempo atrás, desde de muito pequeno eu tinha um desejo de criar algo na qual eu pudesse ser reconhecido por aquilo, mas como na época eu não tinha conhecimentos, ficou só no papel mesmo. Foi quando no fim de 2012 comecei a estudar programação web e dar vida ao aplicativo. Resumindo, o Mybookin surgiu pra ser um tipo de rede social diferente, porque eu via em todas as concorrentes apenas um tipo de segmento: status, fotos e só! Isso queira ou não fica chato e repetitivo com o tempo, foi quando eu decidi criar algo que não se limitava a apenas isso, e sim oferecia muito mais recursos do que os outros sites, ou seja, eu fui construindo a idéia do Mybookin em cima das falhas das outras redes sociais.\r\n\r\n\r\n",
          "tags": [ ],
          "slug": "mybookintm",
          "is_verified": 0,
          "created_at": "23/01/2015",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2C",
          "business_phase": "Fora de Operação",
          "uf": "PI",
          "state": "Piauí",
          "city": "Picos",
          "place": "Picos - PI",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Outros"
          }
      },
      {
          "id": "056b3c4c-ccec-4289-84d1-44aa4aa9a574",
          "name": "TESS - Trustful Easy Ship Supplier",
          "short_description": "-",
          "description": "-",
          "tags": [ ],
          "slug": "tess-trustful-easy-ship-supplier",
          "is_verified": 0,
          "created_at": "22/05/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_target": "B2B",
          "business_phase": "Fora de Operação",
          "business_model": "SaaS",
          "uf": "ES",
          "state": "Espírito Santo",
          "city": "Vitória",
          "place": "Vitória - ES",
          "is_active": 0,
          "badges": [
              {
                  "name": "Sebrae Capital Empreendedor",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_sebrae_capital.png"
              },
              {
                  "name": "Troposlab",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_troposlab.png"
              }
          ],
          "segments": {
              "primary": "Outros"
          }
      },
      {
          "founded_at": "17/01/2015",
          "id": "0575742a-1f8c-46b9-967d-4e01304a57c4",
          "name": "Meu Plano Be",
          "description": "Startup voltada ao desenvolvimento do empreendedorismo, na prestação de serviços de consultoria de marketing, criação de design e ferramentas diversas para web, alem de treinamentos exclusivos para ajudar novos empreendedores com menores custos para abrir seus negócios online.\r\n\r\nAinda em finalização de idealização o nome da startup ainda não será o definitivo já que estamos buscando um nome que diz melhor a respeito do que somos e fazemos.",
          "tags": [ ],
          "slug": "meu-plano-be",
          "is_verified": 0,
          "created_at": "30/04/2015",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "PR",
          "state": "Paraná",
          "city": "Umuarama",
          "place": "Umuarama - PR",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Outros"
          }
      },
      {
          "founded_at": "30/08/2015",
          "id": "05b59685-6b60-4273-bf42-be76f62df45e",
          "name": "Kamisaria.net",
          "short_description": "Primeiro Clube de Assinaturas de Camisas Sociais do Brasil",
          "description": "Primeiro Clube de Assinaturas de Camisas Sociais do Brasil",
          "tags": [ ],
          "slug": "kamisarianet",
          "is_verified": 0,
          "created_at": "04/11/2015",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "business_model": "SaaS",
          "uf": "SC",
          "state": "Santa Catarina",
          "city": "Camboriú",
          "place": "Camboriú - SC",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Moda e Beleza"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/312781519eb97db4e6ea5fe8fbe8e81e4bf20bf2.opt.png",
          "founded_at": "30/11/2011",
          "id": "05bac858-01f5-410a-90bb-e6cfd05c03b8",
          "name": "N-PIX",
          "short_description": "N-PIX is a company that offers online courses for motion graphics , visual effects, and digital painting.",
          "tags": [ ],
          "slug": "n-pix",
          "is_verified": 0,
          "created_at": "11/04/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Educação"
          }
      },
      {
          "id": "05ef4af2-8a61-4e33-931b-15ddde9d0415",
          "name": "Qquanto",
          "description": "Através de uma ferramenta, oferecemos uma oportunidade das pessoas encontrarem pacotes de viagens, compatível com a renda delas ou (quanto elas estão dispostas a pagar ).",
          "tags": [ ],
          "slug": "qquanto",
          "is_verified": 0,
          "created_at": "20/10/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "SP",
          "state": "São Paulo",
          "city": "Limeira",
          "place": "Limeira - SP",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "060458fc-b24b-44f0-b095-b0975db11114",
          "name": "Anttonieta Store",
          "description": "Anttonieta Store apresenta uma nova proposta em e-commerce de moda, visando antecipar tendências e se tornar referência em todo o país, buscar como principal público consumidor: fashionistas, blogueiras e influenciadoras do mundo da moda.\r\n\r\n",
          "tags": [ ],
          "slug": "anttonieta-store",
          "is_verified": 0,
          "created_at": "18/06/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Araguari",
          "place": "Araguari - MG",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/vkk11wmkaeppgcmdzqup.opt.png",
          "founded_at": "31/12/2015",
          "id": "060c44bb-cfe6-4407-bd0c-5d382dee5164",
          "name": "We Closet",
          "short_description": "Somos um guarda-roupas coletivo criado por várias mulheres.",
          "description": "Somos um guarda-roupas coletivo criado por várias mulheres.",
          "tags": [ ],
          "slug": "we-closet",
          "is_verified": 0,
          "created_at": "10/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "RS",
          "state": "Rio Grande do Sul",
          "city": "Porto Alegre",
          "place": "Porto Alegre - RS",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Moda e Beleza"
          }
      },
      {
          "id": "0625c0e6-9ae9-456a-b48f-3608a24bf43a",
          "name": "SolisCorporate TI",
          "description": "A SolisCorporate é especializada em gestão de projetos de tecnologia da informação e conectividade. A anos no mercado é pioneira em gestão estratégica e consultoria para médias e grandes empresas.",
          "tags": [ ],
          "slug": "soliscorporate-ti",
          "is_verified": 0,
          "created_at": "01/12/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "DF",
          "state": "Distrito Federal",
          "city": "Brasília",
          "place": "Brasília - DF",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "founded_at": "30/09/2016",
          "id": "063bc379-fd01-4e97-b9da-07f96cf207c4",
          "name": "GuideFly",
          "short_description": "GuideFly is a business manuals and guides creator and management tool.",
          "description": "GuideFly is a business manuals and guides creator and management tool.",
          "tags": [ ],
          "slug": "guidefly",
          "is_verified": 0,
          "created_at": "11/04/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "066059e6-950e-423d-be4e-687ae32260af",
          "name": "Abrir Empresa Online",
          "short_description": "Serviços de contabilidade e abertura de empresas com disponibilização digital de documentos",
          "description": "Serviços de contabilidade e abertura de empresas com disponibilização digital de documentos",
          "tags": [ ],
          "slug": "abrir-empresa-online",
          "is_verified": 0,
          "created_at": "18/06/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/scllmv96mwoosdaodscg.opt.png",
          "id": "0673958e-a989-4e0c-a6a1-807606eab866",
          "name": "CookWeCan",
          "description": "Uma ferramenta interativa e de interface agradável que irá ajudar você a preparar receitas deliciosas, praticas e rápidas evitando desperdício de alimentos que já possui em sua casa.",
          "tags": [ ],
          "slug": "cookwecan",
          "is_verified": 0,
          "created_at": "05/02/2014",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "PR",
          "state": "Paraná",
          "city": "Curitiba",
          "place": "Curitiba - PR",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/j0atsomgsad3amcb2sqg.opt.png",
          "id": "06bcd941-c588-4fcb-9c5a-72bf0955caea",
          "name": "Joyfu",
          "short_description": "Joyfu is based in Sao Paulo, Brazil.",
          "description": "Joyfu is based in Sao Paulo, Brazil.",
          "tags": [ ],
          "slug": "joyfu",
          "is_verified": 0,
          "created_at": "17/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "06bef91d-db4c-4b11-91a9-fc29f80caf7f",
          "name": "Capcio",
          "description": "Quando o aluno puder interagir com a matéria a partir de um local protegido contra a interferência de outros seres humanos (sua intimidade) e ao seu tempo, certamente serão estimuladas as etapas de captação, armazenamento e recuperação do conhecimento. Haverá a APREENSÃO do conhecimento.",
          "tags": [ ],
          "slug": "capcio",
          "is_verified": 0,
          "created_at": "21/03/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "SC",
          "state": "Santa Catarina",
          "city": "Xaxim",
          "place": "Xaxim - SC",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "founded_at": "20/02/2015",
          "id": "06d20628-1863-4d5d-9329-581852066803",
          "name": "Ibyware",
          "short_description": "Rede Social para Programadores em geral, para discutir sobre ideias e diversas linguagens de programação. ",
          "description": "Rede Social para Programadores em geral, para discutir sobre ideias e diversas linguagens de programação. ",
          "tags": [ ],
          "slug": "ibyware",
          "is_verified": 0,
          "created_at": "21/02/2015",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_phase": "Fora de Operação",
          "uf": "BA",
          "state": "Bahia",
          "city": "Marcionílio Souza",
          "place": "Marcionílio Souza - BA",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Internet"
          }
      },
      {
          "id": "06df5bbd-bb3f-41d9-9602-a672e293b0af",
          "name": "Mercado do Bebê",
          "description": "Um site de comércio eletrônico coletivo, totalmente democrático que traz uma grande variedade de produtos infantis. Atualmente com centena de vendedores ativos, outra centena de visitantes e muitas idéias pela frente.",
          "tags": [ ],
          "slug": "mercado-do-bebe",
          "is_verified": 0,
          "created_at": "18/01/2011",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "founded_at": "13/08/2013",
          "id": "07457027-bb03-4b23-b7c7-e8b8cb32195e",
          "name": "Smart Entrega",
          "description": "A Smart Entrega é um serviço online de entregas rápidas via app pra motoboys, que pode ser contratado em alguns cliques. Nossa tecnologia agiliza seu dia-a-dia oferecendo preços transparentes, pagamento automático e rastreamento da sua entrega em tempo real, usando aplicativo para celular para que nossos smartboys de confiança e rigorosamente selecionados.",
          "tags": [ ],
          "slug": "smart-entrega",
          "is_verified": 0,
          "created_at": "09/07/2015",
          "updated_at": "05/11/2019",
          "employees": "11-20",
          "business_target": "B2C",
          "business_phase": "Fora de Operação",
          "business_model": "Outros",
          "uf": "RS",
          "state": "Rio Grande do Sul",
          "city": "Porto Alegre",
          "place": "Porto Alegre - RS",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Logística e Mobilidade Urbana"
          }
      },
      {
          "profile_image": "https://cdn.cubo.network/img/logos/bistro-box.jpg",
          "id": "0749a7ed-512b-4f3d-926d-e109c6097e48",
          "name": "BistroBox",
          "short_description": "Serviço de assinatura que entrega produtos culinários selecionados e receitas, conduzindo seus assinantes a uma jornada culinária.",
          "description": "A BistroBox é um serviço de assinatura que entrega a descoberta de novos sabores: lançamentos, produtos importados ou de pequenos produtores. Itens que vc já viu, mas hesitou em adquirir ou que vc nunca viu. Selecionamos os produtos, fazemos receitas, acompanhamos os assinantes nessa jornada culinária e precisamos fazer com que clientes interessados nos encontrem na internet.",
          "tags": [ ],
          "slug": "bistrobox",
          "is_verified": 0,
          "created_at": "25/06/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Casa e Família"
          }
      },
      {
          "id": "0762d752-f4c6-43ca-8b60-c2ea3fc5c2b1",
          "name": "Vende-se Arte",
          "description": "O Vende-se Arte se mostra uma ideia inovadora a partir do nosso diferencial que é criar uma revolução no campo das artes, com a divulgação e venda online de obras exclusivas produzidas por jovens artistas contemporâneos. E tornar o consumo de arte algo mais natural e acessível ao novo mercado brasileiro que está se formando é o nosso principal objetivo.\nAgora, com o Vende-se Arte, qualquer pessoa poderá consumir e ter acesso a belas peças que de outro modo não poderiam ter com a mesma facilidade.",
          "tags": [ ],
          "slug": "vende-se-arte",
          "is_verified": 0,
          "created_at": "06/07/2012",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "RJ",
          "state": "Rio de Janeiro",
          "city": "Rio de Janeiro",
          "place": "Rio de Janeiro - RJ",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/8cbac5cd445b5f94ac075f2eff0c47c37f71f227.opt.png",
          "founded_at": "31/12/2011",
          "id": "0767d5c8-e26d-418b-abac-43dc0fc74668",
          "name": "Brastax",
          "short_description": "The Brastax - Biotechnology with Microalgae is a sustainable company.",
          "description": "The Brastax - Biotechnology with Microalgae is a sustainable company, reference in innovation in Brazil, winning by large renowned organizations in the country and abroad. In a pioneering and exclusive offers development solutions for industrial wastewater treatment applying microalgae, generating in the process water for industrial reuse and biomass value. The Brastax parallel develops bioproducts from microalgae, focused on astaxanthin production, the strongest antioxidant in nature, for applications in animal and human health.",
          "tags": [ ],
          "slug": "brastax",
          "is_verified": 0,
          "created_at": "11/04/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "SC",
          "state": "Santa Catarina",
          "city": "Itajaí",
          "place": "Itajaí - SC",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Biotecnologia"
          }
      },
      {
          "id": "076fd6aa-1fc7-4b47-92c3-32abfd10d4a4",
          "name": "Peixereca",
          "description": "Site de compras coletivas voltado para o público adulto com promoções em motéis, sex shops, casas noturnas, cursos eróticos, sites eróticos, estética íntima. Abrange todos os públicos: heterossexuais e homossexuais.",
          "tags": [ ],
          "slug": "peixereca",
          "is_verified": 0,
          "created_at": "21/03/2011",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/aulas-app.png",
          "id": "07b05939-d83c-4f34-8e57-23903866e2f1",
          "name": "Aulas App",
          "short_description": "Aplicativo de aulas particulares, facilitar e intermediar as aulas e o contato entre o aluno e o professor.",
          "description": "Aplicativo de aulas particulares, facilitar e intermediar as aulas e o contato entre o aluno e o professor.",
          "tags": [ ],
          "slug": "aulas-app",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "founded_at": "29/03/2016",
          "id": "07b91ef6-dcd3-4c59-8607-96a304ae0bfa",
          "name": "FooDivine",
          "company_name": "FooDivine",
          "tags": [
              "Produtos de Consumo"
          ],
          "slug": "foodivine",
          "is_verified": 0,
          "created_at": "27/09/2017",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2C",
          "business_phase": "Fora de Operação",
          "business_model": "Marketplace",
          "uf": "RJ",
          "state": "Rio de Janeiro",
          "city": "Rio de Janeiro",
          "place": "Rio de Janeiro - RJ",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "E-commerce"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/py5mqwto4dfyhju7sy7w.opt.png",
          "id": "0811a985-38fc-4d5e-b3eb-8403e4b6d1ac",
          "name": "Achadoz - Agência Web",
          "description": "A Achadoz é focada na criação de sites. Para clientes que buscam um espaço na internet, que desejam apresentar serviços ou produtos, obtendo assim melhores resultados para seu negócio.\r\n\r\nEspecialistas em:\r\nMarketing & Desenvolvimento Digital: Desenvolvimento de Site, Otimização, Email marketing, Identidade visual.\r\n\r\nWeb Analitics e mídias sociais.",
          "tags": [ ],
          "slug": "achadoz-agencia-web",
          "is_verified": 0,
          "created_at": "08/04/2012",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/12/9609-613eb534fffd28257cefa3fced2b87217e089d9e.opt.png",
          "founded_at": "31/12/2012",
          "id": "001b7a08-8bfe-4cdf-8964-eed1d16ff79f",
          "name": "Smart NX",
          "company_name": "Smart NX Eirelli EPP",
          "short_description": "Soluções para aumento de Gestão e ampliação de Produtividade: Telefonia IP, Vendas, Atendimento SAC, Cobrança e Pesquisa.",
          "description": "Reiventando nossas Tecnologias para a gestão de Clientes, Atendentes e Relacionamentos.\nFundada em 2013, a Smart NX é uma empresa que oferece soluções em tecnologia e que tem como meta inovar o processo de relacionamento dos clientes de forma ativa ou receptiva, utilizando canais de voz ou texto.\nSoluções para aumento de Gestão e ampliação de Produtividade: Telefonia IP, Vendas, Atendimento SAC, Cobrança e Pesquisa.\n\nSoftwares que conectam os Clientes e Negócios para Inovação e Sucesso no Relacionamento!\nCALL CENTER • AUTOMAÇÃO • CAMPANHA • MULTICANAL • PBX IP • CALL CENTER e CRM integrados\n\n",
          "tags": [
              "chatbot",
              "automação",
              "Robô",
              "voicebot",
              "discador automático",
              "telefonia ip",
              "campanha",
              "pbx ip",
              "agente virtual",
              "mensagerias",
              "ativo",
              "receptivo",
              "sac",
              "televendas",
              "teleatendimento",
              "multicanalidade",
              "gestão de relacionamento",
              "campanha ativa",
              "monitorar atendimento",
              "autoatendimento"
          ],
          "slug": "smart-nx",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "101-200",
          "business_target": "B2B",
          "business_phase": "Tração",
          "business_model": "Licenciamento",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Juiz de Fora",
          "place": "Juiz de Fora - MG",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Serviços Profissionais"
          }
      },
      {
          "founded_at": "31/10/2015",
          "id": "002ac136-9cfd-4b91-bdb9-201c0cc7c71a",
          "name": "ConfereCard",
          "company_name": "conferecard solucoes em informatica ltda",
          "short_description": "Conciliacao de vendas realizadas com cartões",
          "description": "gerenciamento, auditoria, conferencia de todo o processo de vendas realizadas com cartões. Destinado ao varejo que aceita cartões como forma de pagamento.",
          "tags": [ ],
          "slug": "conferecard",
          "is_verified": 0,
          "created_at": "16/05/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Tração",
          "business_model": "Licenciamento",
          "uf": "PR",
          "state": "Paraná",
          "city": "Curitiba",
          "place": "Curitiba - PR",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Varejo / Atacado"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/ef5b4a0f95ff60420419822f0503665cd382a571.opt.png",
          "founded_at": "31/12/2012",
          "id": "00404661-4324-4c07-be5d-25c203889202",
          "name": "Arpac",
          "description": "A Arpac trabalha com Pesquisa e Desenvolvimento de aeronaves remotamente pilotadas, também conhecidas como drones, de alta capacidade de carga. A primeira aeronave, desenvolvida desde 2014 e construída no Rio Grande do Sul, é destinada às lavouras, tanto para pulverização de defensivos quanto para semeadura.",
          "tags": [ ],
          "slug": "arpac",
          "is_verified": 0,
          "created_at": "10/11/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Tração",
          "business_model": "Hardware",
          "uf": "RS",
          "state": "Rio Grande do Sul",
          "city": "São Leopoldo",
          "place": "São Leopoldo - RS",
          "is_active": 1,
          "badges": [
              {
                  "name": "ACE",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_ace.png"
              }
          ],
          "segments": {
              "primary": "Hardware"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/05/clickspace.png",
          "founded_at": "29/10/2017",
          "id": "0044d856-78ed-4ca8-b6c2-0b64ffd0e8c8",
          "name": "Clickspace",
          "company_name": "Clickspace",
          "short_description": "A Clickspace é uma solução SaaS para construção e gestão de marketplaces. Automatiza processos e permite integração com qualquer plataforma.",
          "description": "A Clickspace é uma solução SaaS para construção e gestão de marketplaces. Automatiza processos e permite integração com qualquer plataforma.",
          "tags": [
              "Internet"
          ],
          "slug": "clickspace",
          "is_verified": 0,
          "created_at": "31/10/2017",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Tração",
          "business_model": "SaaS",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [
              {
                  "name": "WOW",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_wow.png"
              }
          ],
          "segments": {
              "primary": "E-commerce"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/06/3-logo-alstra-png-1-_3d290c55-7548-4c6b-9c0c-287e9941fbae.png",
          "founded_at": "02/05/2018",
          "id": "00a5e4e0-2165-46ad-9127-bee0068d938b",
          "name": "Alstra Technologies",
          "company_name": "Alstra Tecnologia e Consultoria Ltda.",
          "short_description": "Empresa de tecnologia que conecta empresas e consultorias a executivos e consultores qualificados, no modelo de contratação PJ",
          "description": "A Alstra, empresa de tecnologia fundada em 2018 por executivos sêniores de consultoria e gestão, tem como objetivo conectar empresas e consultorias a executivos e consultores qualificados, no modelo de contratação PJ, sob demanda. Estamos viabilizando o trabalho flexível em um formato ágil e desburocratizado, no qual nossos Clientes acessam milhares de profissionais independentes com alto nível de qualificação, e recebem propostas em até 72hs.",
          "tags": [
              "Gig Economy",
              "Futuro do Trabalho",
              "Agile Workforce",
              "Talent as a Service"
          ],
          "slug": "alstra-technologies",
          "is_verified": 1,
          "created_at": "04/06/2019",
          "updated_at": "05/11/2019",
          "employees": "21-50",
          "business_target": "B2B",
          "business_phase": "Tração",
          "business_model": "Marketplace",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Recrutamento"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/12067-c63c3d0f16425de280ec2a2d814a02d229b89491.opt.png",
          "founded_at": "30/10/2017",
          "id": "00a7c01b-2646-4cfa-b933-5fbee43de871",
          "name": "TurboMKT - Plataforma de Negócios Online",
          "company_name": "TURBO MKT INTERMEDIAÇÃO DE NEGÓCIOS LTDA ME",
          "short_description": "Plataforma de Pagamentos Online com foco no mercado de infoprodutos, temos área de membros própria e integração com e-mail marketing.",
          "description": "A TurboMKT oferece todas as ferramentas necessárias para pessoas comuns transformarem seu conhecimento em um negócio online lucrativo. A nossa área de membros perfeitamente integrada com a nossa plataforma de pagamentos é o ambiente ideal para comercializar um infoproduto, seja um simples e-book, um podcast, um minicursos, um curso online, etc. Nosso Programa de Aceleração Digital orienta passo a passo como criar um negócio digital do zero usando apenas o seu conhecimento e as suas habilidades em determinado assunto.",
          "tags": [
              "cursosonline",
              "meiodepagamento",
              "EAD",
              "MarketingdeAfiliados",
              "Infoprodutos"
          ],
          "slug": "turbomkt-plataforma-de-negocios-online",
          "is_verified": 1,
          "created_at": "08/04/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B2C",
          "business_phase": "Tração",
          "business_model": "SaaS",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Bernardo do Campo",
          "place": "São Bernardo do Campo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Vendas e Marketing"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/f98660ed687e5ca3f58ad74a18fb7fd398921372.opt.png",
          "id": "00c16c2e-bc01-4b65-a581-11b166070575",
          "name": "Packid",
          "short_description": "Monitoramento em tempo real da temperatura e umidade",
          "description": "A PackID é um sistema confiável de monitoramento de temperatura e umidade em tempo real que permite a tomada de ação preventiva para evitar perdas de cargas.\r\n\r\nSaiba o que realmente está acontecendo com seu produto em toda a cadeia de distribuição.",
          "tags": [ ],
          "slug": "packid",
          "is_verified": 0,
          "created_at": "21/06/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Tração",
          "business_model": "SaaS",
          "uf": "SC",
          "state": "Santa Catarina",
          "city": "Chapecó",
          "place": "Chapecó - SC",
          "is_active": 1,
          "badges": [
              {
                  "name": "ACE",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_ace.png"
              }
          ],
          "segments": {
              "primary": "Logística e Mobilidade Urbana"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/educapoint.png",
          "id": "01958a7a-77ad-4f87-9f6e-f78d99c4efcc",
          "name": "EducaPoint",
          "description": "Startup do agronegócio que visa levar conhecimento técnico e gerencial de forma prática a produtores rurais, colaboradores de indústrias, técnicos de campo, empresários ligados ao setor e estudantes de ciências agrárias, através de treinamentos online com conteúdo aplicado.",
          "tags": [ ],
          "slug": "educapoint",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_phase": "Tração",
          "business_model": "SaaS",
          "uf": "SP",
          "state": "São Paulo",
          "city": "Piracicaba",
          "place": "Piracicaba - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Agronegócio"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/hgz0jmtpxiafexu7p25d.opt.png",
          "founded_at": "31/12/2012",
          "id": "01a9d876-92c1-47c5-8541-d5c954210d4c",
          "name": "Packdocs",
          "short_description": "Rede social para gestão de conhecimento",
          "description": "O Packdocs é uma rede social voltada para construção de conhecimento por meio do compartilhamento de conteúdo entre seus membros. Ela permite que, por exemplo, professores e alunos descubram, sigam e peguem os melhores conteúdos sobre temas que lhe interessem.\r\nO Packdocs unifica o ambiente de descoberta, compartilhamento e armazenamento de conteúdos na nuvem. Seus usuários poderão utilizá-lo em redes corporativas, acadêmicas ou particular. Dessa forma, a construção de conhecimento por meio do compartilhamento de conteúdo se torna mais simples e prática.",
          "tags": [ ],
          "slug": "packdocs",
          "is_verified": 0,
          "created_at": "04/11/2013",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Tração",
          "business_model": "SaaS",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Belo Horizonte",
          "place": "Belo Horizonte - MG",
          "is_active": 1,
          "badges": [
              {
                  "name": "SEED",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_seed.png"
              },
              {
                  "name": "Troposlab",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_troposlab.png"
              }
          ],
          "segments": {
              "primary": "Educação"
          }
      },
      {
          "founded_at": "31/12/2016",
          "id": "01b769aa-d857-4065-948f-e003326231f5",
          "name": "Space Hunters",
          "description": "A Space analisa qualquer região do planeta de forma remota e indica os melhores e piores pontos comerciais para se colocar um negócio. Através de um sistema de cálculos único no mundo, entrega resultados assertivos de forma prática e em um prazo de semanas ou, até mesmo, dias, um tempo recorde para a análise e definição locacional. Com apenas 3 anos de existência, a Space Hunters vem se destacando como a melhor ferramenta do mercado e já realizou trabalhos em mais de 110 cidades espalhadas por países como Brasil, Uruguai, México, Estados Unidos e Alemanha.",
          "tags": [ ],
          "slug": "space-hunters",
          "is_verified": 0,
          "created_at": "10/11/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Tração",
          "uf": "RS",
          "state": "Rio Grande do Sul",
          "city": "Porto Alegre",
          "place": "Porto Alegre - RS",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Varejo / Atacado"
          }
      },
      {
          "founded_at": "07/03/2017",
          "id": "01cbb943-f9d1-4b71-9321-5dd753fb1167",
          "name": "Mentes Valiosas - Marketing Digital",
          "description": "Blog dedicado a educação de pessoas sobre o Marketing Digital. Divulgação de conteúdos e ferramentas úteis no dia a dia de qualquer pequena, média ou grande empresa.",
          "tags": [ ],
          "slug": "mentes-valiosas-marketing-digital",
          "is_verified": 0,
          "created_at": "09/03/2017",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2C",
          "business_phase": "Tração",
          "uf": "SP",
          "state": "São Paulo",
          "city": "Indaiatuba",
          "place": "Indaiatuba - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Comunicação e Mídia"
          }
      },
      {
          "id": "01f8cea1-1bb8-4c7d-aa01-61f0a2023fd9",
          "name": "VIP Home Viagens",
          "tags": [ ],
          "slug": "vip-home-viagens",
          "is_verified": 0,
          "created_at": "15/03/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_phase": "Tração",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Outros"
          }
      },
      {
          "founded_at": "31/10/2012",
          "id": "029b04a2-69d8-4757-a022-55d2961a4f52",
          "name": "ÁgilSocial - Gestão de demandas, tarefas e de mensagem para empresas",
          "description": "ÁgilSocial , uma plataforma completa de produtividade empresarial nas nuvens, a solução para aperfeiçoar os ganhos e aumentar a competitividade de sua empresa através de uma ferramenta integrada com as principais áreas do seu negócio.  A plataforma terá os principais aplicativos integrados em um único ambiente: intranet social, CRM, gerenciador de projetos e o sistema financeiro.\r\nhttp://www.agilsocial.com/beta",
          "tags": [ ],
          "slug": "agilsocial-gestao-de-demandas,-tarefas-e-de-mensagem-para-empresas",
          "is_verified": 0,
          "created_at": "18/06/2013",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_phase": "Tração",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Belo Horizonte",
          "place": "Belo Horizonte - MG",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Outros"
          }
      },
      {
          "founded_at": "06/11/2009",
          "id": "02c747e0-1db0-4bfa-a943-22dbff3f1f5c",
          "name": "Granatum",
          "description": "O Granatum é um controle financeiro empresarial criado especialmente para micro e pequenas empresas. Sua abordagem simplificada e direta dos principais conceitos financeiros, ensina e ajuda os empreendedores a fazerem a gestão financeira eficiente de uma empresa a partir do ciclo de controle, verificação, ação e planejamento do seu fluxo de caixa.",
          "tags": [ ],
          "slug": "granatum",
          "is_verified": 0,
          "created_at": "21/01/2011",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Tração",
          "business_model": "SaaS",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Outros"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/10/planest.png",
          "founded_at": "31/05/2017",
          "id": "02fbe13b-9291-4cba-9f52-17777bfec83d",
          "name": "Planest",
          "company_name": "Baah S. de Inf. e Marketing Ltda",
          "short_description": "SaaS de planejamento estratégico para consultores e empresários",
          "tags": [
              "Saas",
              "planejamento",
              "KPI",
              "Planejamento estratégico",
              "Canvas",
              "SWOT",
              "PESTAL",
              "BSC",
              "Indicadores",
              "Fca",
              "5W2H",
              "Plano de ação"
          ],
          "slug": "planest",
          "is_verified": 0,
          "created_at": "01/10/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Tração",
          "business_model": "SaaS",
          "uf": "RS",
          "state": "Rio Grande do Sul",
          "city": "Flores da Cunha",
          "place": "Flores da Cunha - RS",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Outros"
          }
      },
      {
          "founded_at": "09/03/2018",
          "id": "031ed965-bfba-47e1-b8ce-6751d2f389bb",
          "name": "CATAVENTO ",
          "company_name": "Catavento - Brinquedos, presentes e Pesca Eireli",
          "short_description": "A Catavento é uma empresa do setor infantil que atua no mercado com brinquedos, presentes, papelaria e oficinas interativas.",
          "description": "Dentro do Setor Infantil, trabalhamos com brinquedos, presentes e papelaria, mas  a Catavento é muito mais que uma loja, apostamos nessa interatividade com o nosso cliente, tornando a comercialização uma parceria e não apenas uma venda. Levamos a loja para as escolas, para as festas infantis e ocupamos vários espaços da cidade através de oficinas divertidas que encantam, divulgam e fidelizam o nosso público. O nosso objetivo é ter essa interação tão forte que ao pensar em qualquer produto do nosso setor, a primeira coisa a se lembrar é da nossa empresa. Nós queremos criar um vínculo saudável com o nosso público, que mesmo de longe ele se sinta parte da empresa, se sinta acolhido e valorizado e não com um tratamento mecânico ao qual é acostumado.\n",
          "tags": [
              "Infantil",
              "oficinas",
              "papelaria",
              "recreação",
              "brinquedos"
          ],
          "slug": "catavento",
          "is_verified": 0,
          "created_at": "23/04/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Tração",
          "business_model": "Consumer",
          "uf": "GO",
          "state": "Goiás",
          "city": "Piranhas",
          "place": "Piranhas - GO",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Infantil"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/zeropay.png",
          "founded_at": "11/07/2017",
          "id": "03b27bdc-851c-4e4b-8e00-93052466965f",
          "name": "Zeropay",
          "company_name": "Lab Technology LTDA",
          "short_description": "Plataforma de venda de seguros, onde o cliente compra o seguro de uma forma totalmente online, prática e rápida. E ainda recebe cashback.",
          "description": "Primeira plataforma de seguros no Brasil com cashback. Além da venda do seguro totalmente online, o cliente ainda recebe cashback. Parte da comissão nós compartilhamos com o cliente. E ainda ele pode receber uma grana extra por compartilhar a Zeropay com os seus amigos.  Ofertamos as melhores seguradoras do país. Como, Bradesco, Mafpre, BB, Itaú, Porto Seguro, Allianz, entre outras.\nSeguro descomplicado. Mais barato, sem burocracia e digital. Como deve ser.",
          "tags": [
              "Finanças",
              "Seguros",
              "IA",
              "chatbot",
              "cashback",
              "Insurtech"
          ],
          "slug": "zeropay",
          "is_verified": 0,
          "created_at": "27/05/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2C",
          "business_phase": "Tração",
          "business_model": "Marketplace",
          "uf": "PE",
          "state": "Pernambuco",
          "city": "Recife",
          "place": "Recife - PE",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Seguros"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/05/donamaid.png",
          "founded_at": "31/12/2015",
          "id": "03df645e-9b9b-4022-822c-b14e0bb6fd5d",
          "name": "Donamaid",
          "short_description": "Donamaid é um marketplace online para agendamento de limpezas residenciais e comerciais com a duração exata que você precisa.",
          "description": "Donamaid é um marketplace online para agendamento de limpezas residenciais e comerciais com a duração exata que você precisa, realizada por profissionais verificados que levam todos os produtos de limpeza.",
          "tags": [ ],
          "slug": "donamaid",
          "is_verified": 1,
          "created_at": "10/11/2018",
          "updated_at": "05/11/2019",
          "employees": "21-50",
          "business_target": "B2B2C",
          "business_phase": "Tração",
          "business_model": "Marketplace",
          "uf": "RS",
          "state": "Rio Grande do Sul",
          "city": "Pelotas",
          "place": "Pelotas - RS",
          "is_active": 1,
          "badges": [
              {
                  "name": "WOW",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_wow.png"
              }
          ],
          "segments": {
              "primary": "Serviços Profissionais"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/okup-rede-ocupacional.png",
          "founded_at": "28/02/2014",
          "id": "040b9cee-db78-4e45-ae85-d6c060115f5f",
          "name": "OKUP  Rede Ocupacional",
          "company_name": "OKUP  Rede Ocupacional",
          "description": "No Brasil toda empresa que tenha registro de CNPJ e pelo menos um funcionário deve cumprir a legislação de Saúde e Segurança do Trabalho. São normas que existem desde 1994 e serão efetivamente fiscalizadas pela malha eletrônica a ser implantada pelo eSocial. O OKUP monitora e ajuda as empresas nestas obrigações. Colocando no controle dos processos de Saúde e Segurança do Trabalho a empresa e todos os profissionais envolvidos (médicos, engenheiros, técnicos de segurança). Levamos melhoria ao ambiente de trabalho, monitorando a saúde dos colaboradores e da empresa. Agregamos as melhores tecnologias de Telemedicina, prontuário médico eletrônico com certificação eletrônica ICP Brasil, SaaS em segurança do trabalho",
          "tags": [ ],
          "slug": "okup-rede-ocupacional",
          "is_verified": 0,
          "created_at": "20/09/2017",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Tração",
          "business_model": "Marketplace",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Belo Horizonte",
          "place": "Belo Horizonte - MG",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Saúde e Bem-estar"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/dfmmiekfoufmvykkf7yj.opt.png",
          "founded_at": "31/12/2013",
          "id": "04183e98-aeea-4ea6-a516-d16940063bf1",
          "name": "Mercode",
          "description": "Pelo nosso site e pelo nosso app, nossos usuários podem comprar produtos de supermercado e receber no mesmo dia (para compras feitas até 12h).\r\nPelo app, damos a liberdade do usuário escolher produtos escaneando o próprio código de barras do item, por QR Codes (divulgados pelo Mercode), ou buscando no nosso aplicativo.",
          "tags": [ ],
          "slug": "mercode",
          "is_verified": 0,
          "created_at": "08/04/2014",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2C",
          "business_phase": "Tração",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [
              {
                  "name": "Kria",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_kria.png"
              }
          ],
          "segments": {
              "primary": "Logística e Mobilidade Urbana"
          }
      },
      {
          "id": "043a172e-9af1-40c9-b1ab-8975935b9030",
          "name": "jmm tech",
          "tags": [ ],
          "slug": "jmm-tech",
          "is_verified": 0,
          "created_at": "15/03/2019",
          "updated_at": "05/11/2019",
          "employees": "21-50",
          "business_phase": "Tração",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Outros"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/fusion-tecnologia.png",
          "founded_at": "31/12/2017",
          "id": "0444110b-9da8-4959-a735-da242691e15a",
          "name": "FUSION Tecnologia",
          "description": "A FUSION Tecnologia tem como missão conectar nossos clientes ao mundo digital, levando à indústria rumo à revolução tecnológica.",
          "tags": [ ],
          "slug": "fusion-tecnologia",
          "is_verified": 1,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Tração",
          "business_model": "Hardware",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Divinópolis",
          "place": "Divinópolis - MG",
          "is_active": 1,
          "badges": [
              {
                  "name": "FIEMG Lab",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_fiemglab.png"
              },
              {
                  "name": "Troposlab",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_troposlab.png"
              }
          ],
          "segments": {
              "primary": "Indústria"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/08/venuxx.png",
          "founded_at": "31/12/2015",
          "id": "045771ad-6e98-4004-b80b-9972258f6f11",
          "name": "Venuxx",
          "company_name": "Venuxx ",
          "short_description": "Conectando mulheres\r\ne gerando impactos",
          "description": "É uma empresa que conecta motoristas e passageiras exclusivamente mulheres, pensado para trazer igualdade de gênero ao segmento e atender as necessidades do universo feminino.",
          "tags": [
              "Mobile",
              "Transportes"
          ],
          "slug": "venuxx",
          "is_verified": 1,
          "created_at": "22/05/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B2C",
          "business_phase": "Tração",
          "business_model": "Marketplace",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [
              {
                  "name": "BMG Uptech",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_bmg_uptech.png"
              },
              {
                  "name": "Troposlab",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_troposlab.png"
              },
              {
                  "name": "Conecta",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_conecta.png"
              }
          ],
          "segments": {
              "primary": "Logística e Mobilidade Urbana"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/greenant.png",
          "id": "0459721a-4420-4b77-92ab-9f505118de5a",
          "name": "GreenAnt",
          "company_name": "GreenAnt",
          "short_description": "GreenAnt oferece gestão de energia elétrica focado em trazer a informação necessária para a tomada de decisão racional sobre seus processos",
          "tags": [
              "Big Data"
          ],
          "slug": "greenant",
          "is_verified": 0,
          "created_at": "26/10/2017",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Tração",
          "business_model": "Hardware",
          "uf": "RJ",
          "state": "Rio de Janeiro",
          "city": "Rio de Janeiro",
          "place": "Rio de Janeiro - RJ",
          "is_active": 1,
          "badges": [
              {
                  "name": "Artemisia",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_artemisia.png"
              }
          ],
          "segments": {
              "primary": "Energia"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/entropia-coletiva.png",
          "founded_at": "29/10/2015",
          "id": "0471f151-e844-4b9f-aaab-bda93670e76a",
          "name": "Entropia Coletiva",
          "company_name": "Entropia Coletiva",
          "short_description": "Plataforma de crowdfunding de projetos científicos. Unindo cientistas e população.",
          "description": "Única plataforma no mercado brasileiro que proporciona um ambiente propício de interação entre cientistas, população e empresas. Equipe com experiência em pesquisa, divulgação científica e tecnologia. Parcerias com pesquisadores e comunicadores de ciência renomados, Fundação FEMPTEC para gerenciar os projetos científicos e as parcerias com as empresas privadas.",
          "tags": [
              "Biotecnologia"
          ],
          "slug": "entropia-coletiva",
          "is_verified": 0,
          "created_at": "30/10/2017",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Tração",
          "business_model": "Marketplace",
          "uf": "RJ",
          "state": "Rio de Janeiro",
          "city": "Rio de Janeiro",
          "place": "Rio de Janeiro - RJ",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Indústria"
          }
      },
      {
          "founded_at": "30/04/2015",
          "id": "0475b6a2-8b60-4d14-b3eb-f742094d52c4",
          "name": "Kidint",
          "description": "O Kidint é uma plataforma de livros infantis multimedia disponível em dispositivos IOS e Android. \r\n \r\nDurante a leitura das histórias, são apresentados pequenos e divertidos desafios intelectuais que ajudarão a criança a compreender o contexto da história e adaptar os aprendizados no seu dia a dia. Estes desafios são classificados de acordo com a teoria das inteligencias múltiplas do Dr. Howard Gardner, renomado psicólogo cognitivo e educacional da Universidade de Harvard.\r\n \r\nA plataforma entende como a criança esta se desenvolvendo e, baseada nos dados obtidos, traz sempre novos desafios para que ela possa continuar entretida e sempre aprendendo.\r\n \r\nPara que os pais se envolvam no aprendizado de seus filhos, oferecemos em nosso portal um dashboard de controle. Nele, os pais podem saber quanto tempo suas crianças gastaram no app, quais histórias foram lidas, e como foi o dempenho nos desafios apresentados.\r\n \r\nAlém disso, enviamos dicas e sugestões de atividades para incentivar os pais a participarem de maneira ativa do desenvolvimento de seus maiores tesouros.\r\n\r\nDessa maneira, pais e filhos se divertem juntos, afinal de contas, contar histórias é um ato de amor.",
          "tags": [ ],
          "slug": "kidint",
          "is_verified": 0,
          "created_at": "14/10/2015",
          "updated_at": "05/11/2019",
          "employees": "21-50",
          "business_target": "B2C",
          "business_phase": "Tração",
          "business_model": "SaaS",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [
              {
                  "name": "Artemisia",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_artemisia.png"
              }
          ],
          "segments": {
              "primary": "Educação"
          }
      },
      {
          "founded_at": "01/03/2015",
          "id": "047b3e0e-05f8-448d-b28a-c0525774a460",
          "name": "Sousa Araújo Contabilidade",
          "description": "Na Sousa Araujo Contabilidade oferecemos serviços e soluções contábeis e tributárias a pessoas físicas e jurídicas em toda São Paulo. \r\nContamos com a capacidade de oferecer aos nossos clientes uma assessoria de alto nível, competente, eficiente e personalizada para todos os assuntos fiscais que o seu negócio requeira, com o fim maior de ajudá-lo a atingir seus objetivos e obrigações. ",
          "tags": [ ],
          "slug": "sousa-araujo-contabilidade",
          "is_verified": 0,
          "created_at": "02/03/2015",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_phase": "Tração",
          "business_model": "Outros",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Finanças"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/08/netlex.png",
          "founded_at": "31/12/2013",
          "id": "04957e69-5220-46a7-9cfa-d742af227adb",
          "name": "NetLex",
          "short_description": "Qualidade e agilidade na elaboração de documentos",
          "description": "O NetLex simplifica e otimiza a criação e gestão de documentos, dos mais simples aos mais complexos. Nossa tecnologia torna possível automatizá-los, de forma a serem criados através de um questionário inteligente",
          "tags": [ ],
          "slug": "netlex",
          "is_verified": 1,
          "created_at": "17/11/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Tração",
          "business_model": "SaaS",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Belo Horizonte",
          "place": "Belo Horizonte - MG",
          "is_active": 1,
          "badges": [
              {
                  "name": "Troposlab",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_troposlab.png"
              },
              {
                  "name": "SindSeg Insurtech Connection",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_sindseg.png"
              }
          ],
          "segments": {
              "primary": "Direito"
          }
      },
      {
          "founded_at": "31/12/2013",
          "id": "04af0a99-c04c-46cf-b6f2-55f7915d3ec8",
          "name": "Licitweb",
          "description": "A Licitweb foi fundada com a finalidade de oferecer soluções na área de contratações públicas, que vão desde ferramentas de gestão até a capacitação de agentes públicos e colaboradores de empresas privadas.",
          "tags": [ ],
          "slug": "licitweb",
          "is_verified": 0,
          "created_at": "10/11/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_phase": "Tração",
          "uf": "RS",
          "state": "Rio Grande do Sul",
          "city": "Porto Alegre",
          "place": "Porto Alegre - RS",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Gestão"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/6821976576d2e78c37e31023b808e9eb5cf4689f.opt.png",
          "id": "04bfc76d-7481-4313-8a2d-05c3e9d7daac",
          "name": "SocialWave",
          "short_description": "Transformamos o marketing boca a boca, no melhor canal de vendas para festivais, shows e casas noturnas.",
          "description": "Criamos o seu exército de Defensores e ajudamos a aumentar as recomendações e vendas da sua marca.\r\n\r\nSolução com software e equipe para levar o marketing da sua empresa e interação com seus melhores clientes às alturas.",
          "tags": [ ],
          "slug": "socialwave",
          "is_verified": 0,
          "created_at": "17/11/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Tração",
          "business_model": "SaaS",
          "uf": "PR",
          "state": "Paraná",
          "city": "Curitiba",
          "place": "Curitiba - PR",
          "is_active": 1,
          "badges": [
              {
                  "name": "ACE",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_ace.png"
              }
          ],
          "segments": {
              "primary": "Vendas e Marketing"
          }
      },
      {
          "founded_at": "31/01/2016",
          "id": "04c031b7-fb57-433a-b7f3-d7f5d8ad0dbf",
          "name": "Sales2U",
          "company_name": "Sales2U",
          "tags": [ ],
          "slug": "sales2u",
          "is_verified": 0,
          "created_at": "26/10/2017",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Tração",
          "business_model": "Venda de dados",
          "uf": "PR",
          "state": "Paraná",
          "city": "Curitiba",
          "place": "Curitiba - PR",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Vendas e Marketing"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/kmaleon-hub-de-solucoes-digitais-e-inteligencia-de-mercado-ltda.png",
          "id": "04c26761-58bb-48a6-b73d-4567bf028eee",
          "name": "Kmaleon Hub de soluções digitais e inteligencia de mercado LTDA",
          "description": "Kmaleon é um HUB de soluções digitais, analise, compare e avalie os softwares qualificando sua tomada de decisão para a contração.",
          "tags": [ ],
          "slug": "kmaleon-hub-de-solucoes-digitais-e-inteligencia-de-mercado-ltda",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Tração",
          "business_model": "SaaS",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São José dos Campos",
          "place": "São José dos Campos - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Advertising"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/construconnect.png",
          "id": "04e11e1b-79ea-405d-9ab5-cf827512ed13",
          "name": "ConstruConnect",
          "description": "O ConstruConnect tem como objetivo principal conectar construtoras a prestadores de serviço para contratação de serviços específicos para obras de médio e grande porte.",
          "tags": [ ],
          "slug": "construconnect",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Tração",
          "business_model": "SaaS",
          "uf": "SP",
          "state": "São Paulo",
          "city": "Ribeirão Preto",
          "place": "Ribeirão Preto - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Construção Civil"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/peopleminin.png",
          "founded_at": "15/12/2015",
          "id": "04f2fe3c-572e-4c08-b0a3-319d0f8a35fb",
          "name": "Peopleminin",
          "company_name": "Peopleminin",
          "description": "Nosso algoritmo calcula em questão de segundos, a aderência do candidato a posição do cliente, apresentando os melhores perfis em um ranking. Além disso a ferramenta é capaz de desmembrar cada pilar (técnico, comportamental e valores) do perfil do candidato em porcentagem de aderência.",
          "tags": [
              "Big Data",
              "Recursos Humanos"
          ],
          "slug": "peopleminin",
          "is_verified": 0,
          "created_at": "17/01/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Tração",
          "business_model": "SaaS",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Recrutamento"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/08/oxiot.png",
          "founded_at": "31/12/2014",
          "id": "04fbd72c-04c7-4a9e-be10-f8fbb6ed4f54",
          "name": "Oxiot",
          "description": "Monitoramos o consumo de oxigênio medicinal por paciente em Home Care via Internet das Coisas.\nNossa solução combina hardware e software para coletar e digitalizar as informação, que são enviadas a plataforma.\nBuscamos melhorar a cadeia de oxigenoterapia, para os pacientes e empresas desse ecossistema.",
          "tags": [ ],
          "slug": "oxiot",
          "is_verified": 1,
          "created_at": "22/05/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Tração",
          "business_model": "SaaS",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [
              {
                  "name": "Troposlab",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_troposlab.png"
              },
              {
                  "name": "AHK",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_ahk.png"
              }
          ],
          "segments": {
              "primary": "Saúde e Bem-estar"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/buscacargas.png",
          "founded_at": "13/11/2014",
          "id": "050a0fce-b5b5-4933-98c4-888822771643",
          "name": "BuscaCargas",
          "company_name": "BuscaCargas",
          "tags": [
              "Logística e Mobilidade Urbana"
          ],
          "slug": "buscacargas",
          "is_verified": 0,
          "created_at": "26/10/2017",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B2C",
          "business_phase": "Tração",
          "business_model": "SaaS",
          "uf": "SP",
          "state": "São Paulo",
          "city": "Barueri",
          "place": "Barueri - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Logística e Mobilidade Urbana"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/35fbf7afe338e9b39621cee97b0f01fce5bddc18.opt.png",
          "id": "0555e9b4-c0b8-46fa-a726-91abfe611e24",
          "name": "Decorati",
          "short_description": "O Decorati é um Marketplace com curadoria, que reúne tudo o que proprietários de apartamentos novos precisam para montar seu apartamento.",
          "tags": [ ],
          "slug": "decorati",
          "is_verified": 0,
          "created_at": "04/04/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B2C",
          "business_phase": "Tração",
          "business_model": "Marketplace",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [
              {
                  "name": "ACE",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_ace.png"
              }
          ],
          "segments": {
              "primary": "Construção Civil"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/13397-40942e195eba6512435ad66524e400f42bfa078a.opt.png",
          "founded_at": "02/06/2015",
          "id": "05845666-336f-48df-97ac-6af2c64287bc",
          "name": "Dr. Benefício",
          "company_name": "Dr. Benefício Ltda.",
          "tags": [
              "plataforma",
              "Healthtech"
          ],
          "slug": "dr-beneficio-2",
          "is_verified": 0,
          "created_at": "28/04/2019",
          "updated_at": "05/11/2019",
          "employees": "21-50",
          "business_target": "B2C",
          "business_phase": "Tração",
          "business_model": "Consumer",
          "uf": "SP",
          "state": "São Paulo",
          "city": "Santos",
          "place": "Santos - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Saúde e Bem-estar"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/396c6c5c457850cd15fa9c3c3409c4ed8c391f47.opt.png",
          "founded_at": "31/12/2012",
          "id": "05bfbf1b-e7a9-4f6b-9df7-1de9fdd5e3bf",
          "name": "Xmile Learning",
          "short_description": "Xmile Learning is an education company that uses technology to foster the quality of education.",
          "description": "Xmile Learning is an education company that uses technology to foster the quality of education.  Our mission is to create fun, effective and stimulating learning experiences, consolidating concepts and developing imagination, creation, critical thinking and collaboration.",
          "tags": [ ],
          "slug": "xmile-learning",
          "is_verified": 1,
          "created_at": "11/04/2019",
          "updated_at": "05/11/2019",
          "employees": "21-50",
          "business_target": "B2B",
          "business_phase": "Tração",
          "business_model": "SaaS",
          "uf": "SC",
          "state": "Santa Catarina",
          "city": "Florianópolis",
          "place": "Florianópolis - SC",
          "is_active": 1,
          "badges": [
              {
                  "name": "Artemisia",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_artemisia.png"
              }
          ],
          "segments": {
              "primary": "Educação"
          }
      },
      {
          "id": "05dec360-6e6e-4442-9039-7d995a523227",
          "name": "Think About",
          "tags": [ ],
          "slug": "think-about",
          "is_verified": 0,
          "created_at": "15/03/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_phase": "Tração",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Outros"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/jvtntxn6pj5lwyao7ft4.opt.png",
          "founded_at": "29/06/2014",
          "id": "05fc1ce8-4bcc-46d7-ab39-8134526aab77",
          "name": "MyTower",
          "description": "MyTower é o primeiro portal de Locação, Venda e Compartilhamento de imóveis para Operadoras de Telecom.\r\n\r\nNossa missão é aproximar proprietários, administradores e síndicos de imóveis às Operadoras. Você precisa de uma renda adicional e as operadoras precisam de espaços para ampliar suas redes.",
          "tags": [ ],
          "slug": "mytower",
          "is_verified": 0,
          "created_at": "04/09/2014",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2C",
          "business_phase": "Tração",
          "business_model": "E-commerce",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "TIC e Telecom"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/comproeajudo.png",
          "founded_at": "28/02/2017",
          "id": "0624e458-8383-470d-8e10-e56c91159a3b",
          "name": "ComproeAjudo",
          "company_name": "ComproeAjudo",
          "description": "Receba de volta parte do valor gasto em todas as suas compras nos maiores sites do Brasil e do mundo, fácil e sem nenhum custo extra para você. Depois decida se quer ajudar a mudar o mundo, doando o dinheiro para uma ONG de sua confiança ou resgatando para sua própria conta bancária.",
          "tags": [ ],
          "slug": "comproeajudo",
          "is_verified": 0,
          "created_at": "13/11/2017",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B2C",
          "business_phase": "Tração",
          "business_model": "Marketplace",
          "uf": "RJ",
          "state": "Rio de Janeiro",
          "city": "Niterói",
          "place": "Niterói - RJ",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Vendas e Marketing"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/qqyiccacne0uuptrzxcv.opt.png",
          "founded_at": "05/02/2015",
          "id": "0644ad50-93be-47bd-9a4c-e7d47310b30f",
          "name": "Inbox Monitor 360",
          "description": "Identifica se a campanha de e-mail marketing entrou na Caixa de Entrada, se foi avaliada como Spam ou se foi Rejeitada pelos ISPs (Gmail, Hotmail, Yahoo, Terra e UOL). Oferece diversos planos de assinatura, sendo um deles grátis. \r\n\r\nO Inbox Monitor 360 funciona de forma independente a qualquer ferramenta de disparo de e-mail marketing.  É compatível com todas elas, como Virtual Target, Allin, Pmweb, E-goi, MailChimp, Dinamize, Akna, MailSender etc. \r\n\r\nA tecnologia é 100% nacional, desenvolvida em Python. Todo o processo está registrado no Bitbucket. Hospedamos o serviço na Amazon e utilizamos como apoio para a tecnologia, os serviços Sentry (monitora estabilidade), Mandrill (smtp para alertas) e Paypal (pagamento).\r\n\r\nO Inbox Monitor 360 foi uma das 200 startups selecionadas pela Campus Party 2015, entre as mais de 700 inscritas. Terminou em 38º entre as startups Early Stage mais votadas.\r\n\r\nO Inbox Monitor 360 iniciou suas atividades no Brasil. Mas a ferramenta está preparada para atuar em qualquer país do mundo.",
          "tags": [ ],
          "slug": "inbox-monitor-360",
          "is_verified": 0,
          "created_at": "08/03/2015",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Tração",
          "business_model": "SaaS",
          "uf": "RJ",
          "state": "Rio de Janeiro",
          "city": "Rio de Janeiro",
          "place": "Rio de Janeiro - RJ",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Outros"
          }
      },
      {
          "founded_at": "25/03/2007",
          "id": "06972a6f-a695-44ce-aeb8-0f293fb9edc9",
          "name": "idea-crowdfunding",
          "company_name": "idea-crowdfunding",
          "tags": [
              "Construção Civil"
          ],
          "slug": "idea-crowdfunding",
          "is_verified": 0,
          "created_at": "11/12/2017",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B2C",
          "business_phase": "Tração",
          "business_model": "Outros",
          "uf": "SP",
          "state": "São Paulo",
          "city": "Guarulhos",
          "place": "Guarulhos - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Finanças"
          }
      },
      {
          "id": "06bfcc99-a95c-41d6-9608-89f0590c28fb",
          "name": "FL Sistemas",
          "tags": [ ],
          "slug": "fl-sistemas",
          "is_verified": 0,
          "created_at": "15/03/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_phase": "Tração",
          "uf": "SP",
          "state": "São Paulo",
          "city": "Indaiatuba",
          "place": "Indaiatuba - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Outros"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/12074-895db37a631f643f88ba07bf040ed8f1c4263fdc.opt.png",
          "founded_at": "28/01/2019",
          "id": "06c21f8a-cfab-47fa-8e24-d1b882823a57",
          "name": "T10 Lab",
          "company_name": "T10 LAB TECNOLOGIA DA INFORMACAO LTDA",
          "short_description": "T10 Lab is a full-service agency focused on solving customer problems using cutting-edge technologies.",
          "description": "T10 Lab is a full-service agency focused on solving customer problems, whether it is developing an application or website, analyzing data, prototyping, creating identities and brands, automation/iot, ideation or engineering problems. Our job is to help clients to solve their problems using cutting-edge technologies. As we are also a startup, we have a special program to help people and teams with early-stage projects, contributing in the construction of the idea, business model, legal support, search for investments and everything that our knowledge and experience can help. ",
          "tags": [
              "Big Data",
              "Cloud Computing",
              "chatbot",
              "startups",
              "Angular",
              "AI",
              "design thinking",
              "ux",
              "ui",
              "scrum",
              "design",
              "React",
              "JavaScript",
              "Amazon Web Services",
              "Node.js"
          ],
          "slug": "t10-lab",
          "is_verified": 0,
          "created_at": "09/04/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2S",
          "business_phase": "Tração",
          "business_model": "Outros",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Uberlândia",
          "place": "Uberlândia - MG",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Desenvolvimento de Software"
          }
      },
      {
          "id": "06d39237-57aa-47de-b6fc-7911138f29f6",
          "name": "Fuel",
          "tags": [ ],
          "slug": "fuel",
          "is_verified": 0,
          "created_at": "15/03/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_phase": "Tração",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Eventos e Turismo"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2020/01/nova-logomarca-deet-letra-azul-fundo-transparente_6f7bc807-8d1a-4292-be28-f087da2b03a6.png",
          "founded_at": "30/04/2012",
          "id": "06f22a33-fed0-4955-ac6f-e1b8b8e128a0",
          "name": "Deet",
          "company_name": "K A DA SILVA TECNOLOGIA",
          "short_description": "...",
          "tags": [
              "GestãodeTelecom",
              "LGPD",
              "Projetos",
              "Telefonia",
              "LeiGeraldeProteçãodeDados"
          ],
          "slug": "deet",
          "is_verified": 0,
          "created_at": "11/01/2020",
          "updated_at": "11/01/2020",
          "employees": "1-5",
          "business_target": "B2B2C",
          "business_phase": "Tração",
          "business_model": "Outros",
          "uf": "PE",
          "state": "Pernambuco",
          "city": "Recife",
          "place": "Recife - PE",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "TIC e Telecom",
              "secondary": "Serviços Profissionais"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/troyes-plataforma-de-negociacao.png",
          "id": "070ade8a-5646-41e7-a7f2-817276325d54",
          "name": "Troyes Plataforma de Negociação",
          "description": "A Plataforma de Negociação Troyes é uma solução para a área de Compras. A Troyes se propõe a auxiliar o processo de negociação das empresas, através de uma solução web que visa aumentar a produtividade de Supply Chain.",
          "tags": [ ],
          "slug": "troyes-plataforma-de-negociacao",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Tração",
          "business_model": "E-commerce",
          "uf": "RS",
          "state": "Rio Grande do Sul",
          "city": "Porto Alegre",
          "place": "Porto Alegre - RS",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Serviços Profissionais"
          }
      },
      {
          "id": "07249c5a-6bcf-4a90-8a1f-895140b90b14",
          "name": "zagapp",
          "tags": [ ],
          "slug": "zagapp",
          "is_verified": 0,
          "created_at": "15/03/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_phase": "Tração",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Belo Horizonte",
          "place": "Belo Horizonte - MG",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Finanças"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/ldn-sistemas-de-informacao-ltda.png",
          "id": "075bd69a-13d2-42fb-a104-798ed4807927",
          "name": "Ldn sistemas de informação ltda",
          "description": "Buscamos o sucesso e o desenvolvimento de todos os envolvidos na cadeia de produtividade agrícola, de forma TRANSPARENTE E CONFIÁVEL aliando tecnologia e inovação para uma alimentação segura da origem ate o consumo.",
          "tags": [ ],
          "slug": "ldn-sistemas-de-informacao-ltda",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B2C",
          "business_phase": "Tração",
          "business_model": "Outros",
          "uf": "RS",
          "state": "Rio Grande do Sul",
          "city": "Caxias do Sul",
          "place": "Caxias do Sul - RS",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Agronegócio"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/portal-telemedicina.png",
          "founded_at": "31/12/2012",
          "id": "0815234a-7711-495c-a504-f59fbc92bb6c",
          "name": "Portal Telemedicina",
          "short_description": "A forma mais eficiente, confiável, prática e econômica da emissão de laudos pela internet.",
          "description": "Portal Telemedicina é a forma mais eficiente, confiável, prática e econômica da emissão de laudos pela internet. Laudamos exames de todo o Brasil.",
          "tags": [ ],
          "slug": "portal-telemedicina",
          "is_verified": 1,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Tração",
          "business_model": "SaaS",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [
              {
                  "name": "Troposlab",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_troposlab.png"
              },
              {
                  "name": "STARTOUT",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_startout.png"
              }
          ],
          "segments": {
              "primary": "Saúde e Bem-estar"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/xplendid!place.png",
          "id": "000141c6-5231-4ba9-88c6-4abc5aef148a",
          "name": "Xplendid!place",
          "description": "Xplendid!place é uma plataforma online, de pesquisas de experiência, indispensável para os estabelecimentos comerciais que querem oferecer a melhor experiência possível e transformar seu negócio em um Lugar Esplêndido para seus clientes.",
          "tags": [ ],
          "slug": "xplendidplace",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B2C",
          "business_phase": "Operação",
          "business_model": "SaaS",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Construção Civil"
          }
      },
      {
          "founded_at": "09/05/2008",
          "id": "00a72312-b50d-4c82-90b0-a9e9969d9caa",
          "name": "Me Protege EPI",
          "tags": [ ],
          "slug": "me-protege-epi",
          "is_verified": 0,
          "created_at": "13/11/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Operação",
          "business_model": "API",
          "uf": "PR",
          "state": "Paraná",
          "city": "Cambé",
          "place": "Cambé - PR",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Agronegócio"
          }
      },
      {
          "founded_at": "10/01/2012",
          "id": "00aaa7a7-deee-4fbe-ab2b-a5a4cb979b23",
          "name": "Optionline Serviços de Informação",
          "description": "A Optionline Serviços de Informação foi fundada com o objetivo de desenvolver aplicativos e soluções de informação que otimizem as plataformas móveis na área de educação continuada para profissionais da Educação e da Saúde. ",
          "tags": [ ],
          "slug": "optionline-servicos-de-informacao",
          "is_verified": 0,
          "created_at": "13/10/2015",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Operação",
          "business_model": "SaaS",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Educação"
          }
      },
      {
          "id": "00bbd0cc-a461-4621-94b9-20f254c65dcc",
          "name": "Nobre Colega",
          "tags": [ ],
          "slug": "nobre-colega",
          "is_verified": 0,
          "created_at": "15/03/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_phase": "Operação",
          "uf": "BA",
          "state": "Bahia",
          "city": "Salvador",
          "place": "Salvador - BA",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Direito"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/ehloreport.png",
          "id": "010ab792-3b4a-467d-9660-e79b49ff79e3",
          "name": "EhloReport",
          "description": "A ehloReport disponibiliza uma ferramenta de análise e proteção na utilização online do ativo mais valioso de uma empresa, sua marca.",
          "tags": [ ],
          "slug": "ehloreport",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Operação",
          "business_model": "Consumer",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "TIC e Telecom"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/03/kuak.png",
          "id": "0133efb3-4ed0-4154-8157-9944ceb7638a",
          "name": "Kuak",
          "short_description": "Plataforma multicanal de publicidade em mídias sociais que une redes de influência com a necessidade das marcas em atingir seu público.",
          "tags": [ ],
          "slug": "kuak",
          "is_verified": 0,
          "created_at": "20/03/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Operação",
          "business_model": "Consumer",
          "uf": "SC",
          "state": "Santa Catarina",
          "city": "Florianópolis",
          "place": "Florianópolis - SC",
          "is_active": 1,
          "badges": [
              {
                  "name": "Darwin Startups",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_darwin.png"
              }
          ],
          "segments": {
              "primary": "Entretenimento"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/05/appletouchicon_1eef2782-e931-41fc-ae2e-311245e57349.png",
          "founded_at": "31/05/2018",
          "id": "01593e5b-d456-4aa2-8ef6-bd00776e3f0a",
          "name": "Exatum",
          "short_description": "Encontre seu próximo cliente e acelere as suas vendas",
          "tags": [
              "Big Data",
              "Sales",
              "Machine Learning",
              "Outbound Sales",
              "Data Lake"
          ],
          "slug": "exatum",
          "is_verified": 0,
          "created_at": "29/05/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Operação",
          "business_model": "SaaS",
          "uf": "SC",
          "state": "Santa Catarina",
          "city": "Tubarão",
          "place": "Tubarão - SC",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Big Data"
          }
      },
      {
          "founded_at": "28/02/2013",
          "id": "018719ac-9c52-452f-8a29-ec4ecf0e3c1b",
          "name": "Atestados.med.br",
          "description": "The trustful Global Health Network, we like to call GlobalSafeMed.  \r\nWe are gathering the world’s best healthcare insurances and organizations into one network people can really rely. \r\nBy keeping health records safe, we are able to accomplish great things.\r\nThe world wants a global reference of what is good and what is not on healthcare. \r\nWe are the ones with the technology that can prevent fake documents and make people's life healthier. While we are doing our job which is keep the information safe.\r\n\r\nSolução web e mobile. Ideal para emissão, gestão e validação de atestados médicos e absentismo para empresas públicas e privadas.\r\nNossa missão é fortalecer o processo de transparência entre o paciente, os serviços de saúde, as instituições públicas e privadas e empresas como forma de garantir documentos válidos e éticos que possam ajudar a promover a gestão efetiva da saúde dos trabalhadores.\r\nMais informações em: http://www.atestados.med.br",
          "tags": [ ],
          "slug": "atestadosmedbr",
          "is_verified": 0,
          "created_at": "22/02/2013",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2C",
          "business_phase": "Operação",
          "business_model": "SaaS",
          "uf": "PE",
          "state": "Pernambuco",
          "city": "Recife",
          "place": "Recife - PE",
          "is_active": 1,
          "badges": [
              {
                  "name": "Ventiur",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_ventiur.png"
              }
          ],
          "segments": {
              "primary": "Saúde e Bem-estar"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/csnjqn31qh6wwm9zusxi.opt.png",
          "founded_at": "31/12/2015",
          "id": "01dcb44d-ef3c-428d-938c-bab2f3355a31",
          "name": "Zeeng",
          "short_description": "Somos a Primeira Plataforma de Big Data Analytics, 100% voltada para as áreas de Marketing e Comunicação, do mercado brasileiro.",
          "description": "Somos a Primeira Plataforma de Big Data Analytics, 100% voltada para as áreas de Marketing e Comunicação, do mercado brasileiro.",
          "tags": [ ],
          "slug": "zeeng",
          "is_verified": 1,
          "created_at": "10/11/2018",
          "updated_at": "05/11/2019",
          "employees": "11-20",
          "business_target": "B2B",
          "business_phase": "Operação",
          "business_model": "SaaS",
          "uf": "RS",
          "state": "Rio Grande do Sul",
          "city": "Porto Alegre",
          "place": "Porto Alegre - RS",
          "is_active": 1,
          "badges": [
              {
                  "name": "WOW",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_wow.png"
              }
          ],
          "segments": {
              "primary": "Big Data"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/12/11155-02a57046f69fc58ee227c4c57649b15d39ce3d6c.opt.png",
          "founded_at": "31/12/2017",
          "id": "01f68e9f-41e5-4d8c-a35e-ab54b86ad05a",
          "name": "LOGIUN",
          "company_name": "LOGIUN SOLUCOES TECNOLOGICAS PARA LOGISTICA REVERSA LTDA",
          "short_description": "Somos uma plataforma de Logística Reversa de embalagens retornáveis e ajudamos empresas a melhorar sustentabilidade, reduzir perdas e custos",
          "description": "O LOGIUN faz a gestão completa de embalagens retornáveis em toda cadeia e assim conseguimos reduzir as perdas com controle operacional, financeiro e gerencial. A LOGIUN trouxe para o mercado novos conceitos como e-Palete, que digitaliza todo fluxo de vale paletes (e outros tipos de embalagens) e evita desvios, perdas de prazos e melhora a gestão. Outra inovação é o Logiun Change, onde ajudamos empresas que não se conhecem a negociar seus paletes que não tem viabilidade financeira para retorno ou ainda a realizar troca entre elas de paletes que estão mais perto da sua unidade, usando a localização do estoque de cada uma. Acreditamos e trabalhamos para a utilização racional dos recursos renováveis, promovendo a gestão dos processos, apuração e checagem dos custos, a maximização do uso das embalagens e a mensuração e monitoramento das economias e do impacto ambiental gerados com a gestão da logística reversa das embalagens retornáveis.",
          "tags": [
              "Logística Reversa",
              "Controle Embalagens Retornáveis",
              "e-Palete",
              "Gestão Custos Embalagens",
              "Controle Ambiental Embalagens",
              "Controle Fluxo Embalagens"
          ],
          "slug": "logiun",
          "is_verified": 0,
          "created_at": "18/12/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Operação",
          "business_model": "SaaS",
          "uf": "SC",
          "state": "Santa Catarina",
          "city": "Navegantes",
          "place": "Navegantes - SC",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Transportes"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/firenzze-media.png",
          "id": "02694703-babc-4078-aef9-82225e9f816c",
          "name": "FIRENZZE Media",
          "company_name": "FIRENZZE Media",
          "short_description": "O zOOngo permite que você gerencie todas as etapas de produção de conteúdo digital ou impresso e publique em sites e redes sociais.",
          "tags": [
              "Vendas e Marketing"
          ],
          "slug": "firenzze-media",
          "is_verified": 0,
          "created_at": "01/03/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Operação",
          "business_model": "SaaS",
          "uf": "RN",
          "state": "Rio Grande do Norte",
          "city": "Natal",
          "place": "Natal - RN",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Comunicação e Mídia"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/12/captura-de-tela-20191013-as-10-4954_8d873394-801f-4199-9ed3-f3c03cc9c12c.png",
          "founded_at": "30/10/2019",
          "id": "02a4bc2e-7257-4ee8-84ae-ce4d9db838b8",
          "name": "SeuTanaka.app",
          "company_name": "VQV Brasil Tecnologia",
          "short_description": "Marketplace de hortifrutigranjeiros ",
          "description": "SeuTanaka é o “IFOOD” do FLV   (Frutas, Verduras, Legumes in natura)\nou seja,  um marketplace que conecta  feirantes, quitandeiros, cesteiros,   distribuidoras diretamente com o público consumidor.",
          "tags": [
              "Marketplace",
              "agrobusiness"
          ],
          "slug": "seutanaka-app",
          "is_verified": 0,
          "created_at": "05/12/2019",
          "updated_at": "05/12/2019",
          "employees": "1-5",
          "business_target": "B2C",
          "business_phase": "Operação",
          "business_model": "Marketplace",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São José dos Campos",
          "place": "São José dos Campos - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Saúde e Bem-estar",
              "secondary": "Varejo / Atacado"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/startonapp-agencia-de-tecnologia.png",
          "founded_at": "10/12/2015",
          "id": "02bcf6f3-ced3-44e4-89e5-59136ceef062",
          "name": "StartOnApp - Agencia de Tecnologia",
          "company_name": "StartOnApp - Agencia de Tecnologia",
          "tags": [
              "TIC e Telecom"
          ],
          "slug": "startonapp-agencia-de-tecnologia",
          "is_verified": 0,
          "created_at": "12/04/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Operação",
          "business_model": "SaaS",
          "uf": "BA",
          "state": "Bahia",
          "city": "Salvador",
          "place": "Salvador - BA",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Serviços Profissionais"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/05/11303-6b0bd3341edb538149fab370e87fc5d647e6cef9.opt.png",
          "founded_at": "10/09/2018",
          "id": "02ea3a79-ecfe-4b60-a22b-8294195b5421",
          "name": "EuDireto",
          "company_name": "EUDIRETO SERVICOS DIGITAIS LTDA",
          "short_description": "Marketplace B2B que facilita as compras dos supermercados/restaurantes junto a diversas distribuidoras/industrias disponiveis 24h7D",
          "description": "Somos um Marketplace B2B que une as distribuidoras/industrias com os mercadinhos/restaurantes numa plataforma ágil trazendo comodidade e economia.",
          "tags": [
              "Indústria",
              "Supermercado",
              "Mercado",
              "Distribuidor",
              "Restaurante"
          ],
          "slug": "eudireto",
          "is_verified": 0,
          "created_at": "12/02/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Operação",
          "business_model": "Marketplace",
          "uf": "AM",
          "state": "Amazonas",
          "city": "Manaus",
          "place": "Manaus - AM",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Varejo / Atacado"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/13336-5cdfb3e55be6aee568ca5503c9660b92c040f24a.opt.png",
          "founded_at": "09/11/2018",
          "id": "02ef266d-ce99-49ce-bbe2-ab6b25a9e912",
          "name": "Agross",
          "short_description": "Cashback para agronegócio. ",
          "description": "Quando o agricultor compra e paga em dia, ele recebe parte do seu dinheiro de volta, sobre os investimentos feitos no custeio da sua produção.\nCom o Agross, as empresas deixam de perder bilhões em programas de fidelidade, e passam a ter a ter uma nova forma de fidelizar seus clientes: recompensando no bolso.",
          "tags": [
              "fintech",
              "cashback"
          ],
          "slug": "agross",
          "is_verified": 0,
          "created_at": "15/04/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B2C",
          "business_phase": "Operação",
          "business_model": "SaaS",
          "uf": "PR",
          "state": "Paraná",
          "city": "Pato Branco",
          "place": "Pato Branco - PR",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Agronegócio"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/kyte.png",
          "id": "03106db9-1ce6-4d94-bf24-efbfc6094f6f",
          "name": "Kyte",
          "short_description": "Kyte é um app para pequenos comércios que ajuda a vender mais, gerenciar melhor e fidelizar o cliente!",
          "description": "Kyte é um app para pequenos comércios que ajuda a vender mais, gerenciar melhor e fidelizar o cliente!",
          "tags": [ ],
          "slug": "kyte",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B2C",
          "business_phase": "Operação",
          "business_model": "SaaS",
          "uf": "SC",
          "state": "Santa Catarina",
          "city": "Florianópolis",
          "place": "Florianópolis - SC",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Varejo / Atacado"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/mutual.life.png",
          "founded_at": "30/11/2016",
          "id": "0319228f-73c8-4fca-9fe2-224983002f47",
          "name": "Mutual.Life",
          "company_name": "Mutual.Life",
          "short_description": "Proteção que cabe no bolso, flexível e muito fácil de usar. Somos a evolução dos seguros.",
          "description": "A economia compartilhada tem trazido disruptura a diversos mercados, como os de hotelaria e de transporte privado, principalmente pelo fato de viabilizarem operações mais enxutas, possibilitando arranjos mais flexíveis e modelos de negócios mais inteligentes.\n\nA Mutual.Life, por meio de sua plataforma, propõe uma evolução aos seguros tradicionais, pois, utilizando-se da economia compartilhada, da Inteligência Artificial e do Blockchain, une o mutualismo dos pequenos grupos de confiança à gestão de riscos moderna, automatizada e transparente, rodando em plataforma Blockchain aberta como a rede Ethereum. \n\nNeste sentido, a Mutual.Life é a alternativa insurtech que permite ao usuário ratear indenizações com pessoas de perfil de risco similar, com transparência, flexibilidade e sem assimetria da informação.",
          "tags": [
              "Finanças"
          ],
          "slug": "mutuallife",
          "is_verified": 0,
          "created_at": "27/02/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "P2P",
          "business_phase": "Operação",
          "business_model": "SaaS",
          "uf": "ES",
          "state": "Espírito Santo",
          "city": "Vila Velha",
          "place": "Vila Velha - ES",
          "is_active": 1,
          "badges": [
              {
                  "name": "InovAtiva",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_inovativa.png"
              }
          ],
          "segments": {
              "primary": "Seguros"
          }
      },
      {
          "founded_at": "17/04/1987",
          "id": "03450e35-fa1b-465c-a2b1-e089ede53775",
          "name": "CliniQ",
          "company_name": "CliniQ",
          "short_description": "Trata-se de portal de anúncios de consultórios prontos para atender no segmento saúde, reduzindo a ociosidade de um consultório.",
          "description": "Marketplace de consultórios prontos para atendimento: quem é proprietário de um consultório e apresenta horários ociosos durante a semana pode aumentar a rentabilidade mensal ao anunciar no site e compartilhar seu consultório com um outro profissional de saúde.",
          "tags": [
              "Saúde e Bem-estar",
              "Imobiliário"
          ],
          "slug": "cliniq",
          "is_verified": 0,
          "created_at": "14/08/2017",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B2C",
          "business_phase": "Operação",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Belo Horizonte",
          "place": "Belo Horizonte - MG",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/01/11266-ebc2d1a7d9f8645df1f89310ab6f7e384413ca10.opt.png",
          "founded_at": "30/06/2017",
          "id": "03467ced-d3b6-499e-b40c-90c023957843",
          "name": "Startups to Watch",
          "tags": [
              "platform",
              "startups"
          ],
          "slug": "startups-to-watch",
          "is_verified": 0,
          "created_at": "29/01/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Operação",
          "business_model": "Outros",
          "uf": "RJ",
          "state": "Rio de Janeiro",
          "city": "Rio de Janeiro",
          "place": "Rio de Janeiro - RJ",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "TIC e Telecom"
          }
      },
      {
          "founded_at": "31/03/2016",
          "id": "0347892d-37fc-4a16-8f21-50d943436370",
          "name": "MineXplore Gestão de Processos Minerários",
          "tags": [
              "mineração"
          ],
          "slug": "minexplore-gestao-de-processos-minerarios",
          "is_verified": 0,
          "created_at": "11/01/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B2C",
          "business_phase": "Operação",
          "business_model": "E-commerce",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Belo Horizonte",
          "place": "Belo Horizonte - MG",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Indústria"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/10/6826-c8e4cb38d16a471501293a6d26707526eb7dbae2.opt.png",
          "founded_at": "28/02/2018",
          "id": "037225cf-01e4-4e07-bea2-17e8cd59155e",
          "name": "Innovecare",
          "short_description": "A InnoveCare oferece um modelo de cuidado integral e monitoramento de pacientes oncológicos para clínicas especializadas e hospitais",
          "description": "A INNOVECARE oferece um modelo de cuidado integral e monitoramento de pacientes oncológicos para clínicas especializadas, hospitais, seguradoras e operadoras de saúde. \n\nA INNOVECARE investe em qualidade no cuidado, otimizando a utilização de recursos, adotando protocolos e melhores práticas com o paciente no centro de todo processo criando valor em toda a sua jornada de cuidado \n\n​​Temos como missão melhorar a qualidade de vida do paciente oncológico",
          "tags": [
              "Sistema de navegação",
              "cancer",
              "oncologia",
              "hospital",
              "clínica",
              "cuidado",
              "plataforma medica",
              "medico",
              "enfermeiro",
              "plano terapêutico",
              "centralização do cuidado",
              "experiência"
          ],
          "slug": "innovecare",
          "is_verified": 0,
          "created_at": "25/09/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Operação",
          "business_model": "SaaS",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São José dos Campos",
          "place": "São José dos Campos - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Saúde e Bem-estar"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/deliveryon.png",
          "founded_at": "05/10/2017",
          "id": "0374b388-0f8f-44d5-a91b-a5ead2cee74c",
          "name": "DeliveryOn",
          "company_name": "DeliveryOn",
          "short_description": "Os melhores deliveries de sua cidade em um único lugar. Nosso aplicativo oferece comodidade e praticidade na realização de pedidos de comida.",
          "description": "O DeliveryOn é uma plataforma online para realização de pedidos que pretende alavancar e otimizar a gestão de estabelecimentos com delivery de comida, bem como oferecer praticidade e comodidade para usuários realizarem seus pedidos através do nosso aplicativo.\n\nMissão: Alavancar vendas para estabelecimentos de Delivery promovendo-os e provendo comodidade e praticidade na realização de pedidos e otimizar a gestão do negócio.\n\nVisão: Promover os estabelecimentos de Delivery, através da nossa base de usuários crescente, impulsionando suas vendas e centralizando todos os pedidos em uma única plataforma de gestão, sejam eles realizados pelo celular, tablet, computador, telefone ou em seu próprio estabelecimento.",
          "tags": [
              "Internet",
              "Mobile"
          ],
          "slug": "deliveryon",
          "is_verified": 0,
          "created_at": "27/10/2017",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B2C",
          "business_phase": "Operação",
          "business_model": "Marketplace",
          "uf": "RJ",
          "state": "Rio de Janeiro",
          "city": "Barra do Piraí",
          "place": "Barra do Piraí - RJ",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Produtos de Consumo"
          }
      },
      {
          "id": "03cf52aa-5632-4ad2-9cf6-c6b32b57fe2b",
          "name": "CINERGYTECH",
          "tags": [ ],
          "slug": "cinergytech",
          "is_verified": 0,
          "created_at": "15/03/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_phase": "Operação",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Indústria"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/cartao-umclub.png",
          "founded_at": "28/11/2016",
          "id": "04286c31-3b1c-4ca7-b9c6-818dcca5e1dc",
          "name": "Cartão Umclub",
          "company_name": "Cartão Umclub",
          "short_description": "Somos um clube de descontos personalizado, que une uma plataforma de ofertas e divulgação integrado a um cartão de crédito pré pago.",
          "description": "Somos um clube de descontos personalizado, que une uma plataforma de ofertas e divulgação segmentada.\n\nComo fazemos?\nIntegrando um cartão pré-pago visa com um programa de fidelidade exclusivo, que gera economia, status e experiências de consumo imediatas.",
          "tags": [
              "Big Data",
              "E-commerce",
              "Vendas e Marketing"
          ],
          "slug": "cartao-umclub",
          "is_verified": 0,
          "created_at": "28/10/2017",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B2C",
          "business_phase": "Operação",
          "business_model": "Consumer",
          "uf": "RJ",
          "state": "Rio de Janeiro",
          "city": "Rio de Janeiro",
          "place": "Rio de Janeiro - RJ",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Finanças"
          }
      },
      {
          "id": "044b81c1-4278-4051-8b94-7758612f6ff0",
          "name": "Dr. Cannabis",
          "tags": [ ],
          "slug": "dr-cannabis",
          "is_verified": 0,
          "created_at": "15/03/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_phase": "Operação",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Saúde e Bem-estar"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/9598-f24ed00dfdf9d5f78f94b267eed7b78aad3ac556.opt.png",
          "founded_at": "31/12/2014",
          "id": "0452981a-2117-45f9-a933-8ce8ae6b7bdd",
          "name": "Olho do Dono",
          "short_description": "Solução que usa câmera 3D para pesar boi em qualquer lugar",
          "description": "Software que usa câmera 3D para pesar boi em qualquer lugar, sem estresse para o animal, permitindo o aumento da produtividade e lucratividade dos pecuaristas. Vencedora do 1º TechCrunch Battlefield Startup Latin America.",
          "tags": [
              "IA",
              "visão computacional",
              "Data Science",
              "pesagem",
              "pecuária"
          ],
          "slug": "olho-do-dono",
          "is_verified": 0,
          "created_at": "23/11/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Operação",
          "business_model": "SaaS",
          "uf": "ES",
          "state": "Espírito Santo",
          "city": "Vitória",
          "place": "Vitória - ES",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Agronegócio"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/mobez.png",
          "founded_at": "31/01/2017",
          "id": "04967c69-95d8-4e4d-91b1-72c0bd7d054e",
          "name": "Mobez",
          "company_name": "Mobez",
          "tags": [
              "TIC e Telecom"
          ],
          "slug": "mobez",
          "is_verified": 0,
          "created_at": "24/09/2017",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Operação",
          "business_model": "SaaS",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Uberlândia",
          "place": "Uberlândia - MG",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Logística e Mobilidade Urbana"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/pnw027emct3ozxccszh2.opt.png",
          "founded_at": "31/12/2015",
          "id": "04c27ecf-0af1-4b49-b68f-b368713f992a",
          "name": "Suaposta",
          "short_description": "No Suaposta, você acompanha e faz apostas online em corridas de cavalos em hipódromos do mundo todo. Acesse já, faça apostas esportivas e divirta-se!",
          "description": "No Suaposta, você acompanha e faz apostas online em corridas de cavalos em hipódromos do mundo todo. Acesse já, faça apostas esportivas e divirta-se!",
          "tags": [ ],
          "slug": "suaposta",
          "is_verified": 0,
          "created_at": "10/11/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2C",
          "business_phase": "Operação",
          "uf": "RS",
          "state": "Rio Grande do Sul",
          "city": "Porto Alegre",
          "place": "Porto Alegre - RS",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Entretenimento"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/01/11223-baaf035a14a2f780c7e16cd7b777e3ac115637f4.opt.png",
          "founded_at": "08/02/2017",
          "id": "050e6df7-269c-4781-ae3d-c1f0f13b5bd3",
          "name": "Fox IoT",
          "company_name": "Fox IoT Soluções em Equipamentos e Engenharia LTDA",
          "tags": [
              "Hardware",
              "IA",
              "iot",
              "Saas",
              "Cloud"
          ],
          "slug": "fox-iot",
          "is_verified": 0,
          "created_at": "16/01/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Operação",
          "business_model": "SaaS",
          "uf": "RS",
          "state": "Rio Grande do Sul",
          "city": "Santa Maria",
          "place": "Santa Maria - RS",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Energia"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/11/logoindustrycare_13bb6652-a91c-4039-b97e-ad8a252791f3.png",
          "founded_at": "06/06/2019",
          "id": "05135734-eb89-4760-b69e-7c97f6ebc7ea",
          "name": "IndustryCare",
          "short_description": "Ajudamos indústrias na geração e gestão dos dados do seu chão de fábrica",
          "description": "Ajudamos indústrias na geração e gestão dos dados do seu chão de fábrica, monitorando em tempo real seus equipamentos e processos, ajudando-a a se tornar mais eficiente através de visibilidade (entender o que está acontecendo), transparência (entender o porquê está acontecendo) e preditividade (entender o que irá acontecer) - que são os pilares da Indústria 4.0.\n\nInstalamos, sem CAPEX para os clientes, quantos sensores e medidores IoT forem necessários, criando um Big Data Industrial e possibilitando uma gestão orientada a dados, permitindo que a indústria se torne digital, inteligente e mais eficiente.",
          "tags": [
              "Industria4.0",
              "BigData",
              "AI",
              "IoT"
          ],
          "slug": "industrycare",
          "is_verified": 0,
          "created_at": "07/11/2019",
          "updated_at": "28/01/2020",
          "employees": "1-5",
          "business_target": "B2B",
          "business_phase": "Operação",
          "business_model": "SaaS",
          "uf": "GO",
          "state": "Goiás",
          "city": "Goiânia",
          "place": "Goiânia - GO",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Indústria",
              "secondary": "Big Data"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/10/pp_2186fd1b-0b8b-4552-a4a3-b8ff596afa12.jpeg",
          "founded_at": "14/08/2016",
          "id": "05344bad-caa2-4546-bd64-ecb7718d3a6a",
          "name": "Vou de Trip",
          "short_description": "O Vou de Trip é um marketplace de viagens de excursão. ",
          "description": "Acreditamos que o brasileiro aproveita pouco o Brasil e que quando pensamos em viagens, pensamos em planejar, guardar dinheiro e que é um momento em que temos custo alto. No Vou de trip pensamos diferente, pois temos certeza que é possível ter experiências incríveis com baixo custo e que estas experiências estão em cantinhos do nosso Brasil que muitos brasileiros nunca visitaram.",
          "tags": [
              "Marketplace",
              "Viagem",
              "turismo"
          ],
          "slug": "vou-de-trip-1571370057604",
          "is_verified": 0,
          "created_at": "18/10/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2C",
          "business_phase": "Operação",
          "business_model": "Marketplace",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Eventos e Turismo"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/08/licentia.png",
          "founded_at": "31/12/2016",
          "id": "05900110-366a-41cf-9168-40b10b97c960",
          "name": "Licentia",
          "short_description": "Plataforma web para tornar o processo de licenciamento ambiental mais eficiente, com uso de inteligência artificial e troca de informações online.",
          "description": "Plataforma web para tornar o processo de licenciamento ambiental mais eficiente, com uso de inteligência artificial e troca de informações online.",
          "tags": [ ],
          "slug": "licentia",
          "is_verified": 1,
          "created_at": "22/05/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Operação",
          "business_model": "SaaS",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Belo Horizonte",
          "place": "Belo Horizonte - MG",
          "is_active": 1,
          "badges": [
              {
                  "name": "Troposlab",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_troposlab.png"
              },
              {
                  "name": "FIEMG Lab",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_fiemglab.png"
              },
              {
                  "name": "BMG Uptech",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_bmg_uptech.png"
              }
          ],
          "segments": {
              "primary": "Meio Ambiente"
          }
      },
      {
          "founded_at": "19/08/2013",
          "id": "05aa0ba3-eb3d-4954-a8d3-8ed904119a16",
          "name": "Livemarketing",
          "company_name": "Livemarketing",
          "tags": [ ],
          "slug": "livemarketing",
          "is_verified": 0,
          "created_at": "25/10/2017",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Operação",
          "business_model": "Consumer",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Advertising"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/tecexpert-brasil.png",
          "founded_at": "14/02/2016",
          "id": "05c6ac08-fbf4-47b6-a06c-b52fa2ffc125",
          "name": "Tecexpert Brasil",
          "company_name": "Tecexpert Brasil",
          "short_description": "Oferecemos Serviços Profissionais Especializados em Conectividade sem Fio, como oferecemos Soluções em Internet das Coisas para o mercado B2B. ",
          "description": "A equipe profissional da Tecexpert Brasil possui mais de 20 anos de experiência em negócios de TIC e Telecom, tendo atuado em grandes projetos pela América Latina. Atualmente oferecemos Serviços Profissionais para Soluções de Redes sem Fio (Wi-Fi para Indústria, Varejo e Operadores Logísticos).Nosso modelo de negócio é direcionado a Empresas e Representantes Comerciais, onde oferecemos os projetos em modelo de Locação+Serviços.A Tecexpert também oferece Soluções em Internet das Coisas (IoT), dedicada exclusivamente a projetos de Rastreabilidade, Identificação e Ativos e Objetos, como soluções para redução de custos operacionais e ganho de eficiência. Oferecemos também uma solução inovadora para a contagem e monitoramento de fluxo, com Mapa de Calor, dedicada para o Varejo, Mobilidade Urbana e eventos.",
          "tags": [
              "TIC e Telecom"
          ],
          "slug": "tecexpert-brasil",
          "is_verified": 0,
          "created_at": "11/05/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Operação",
          "business_model": "Hardware",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Serviços Profissionais"
          }
      },
      {
          "id": "05cab381-456e-4a8b-8f76-4f7f53c07316",
          "name": "Conecte.ai",
          "tags": [ ],
          "slug": "conecteai",
          "is_verified": 0,
          "created_at": "15/03/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_phase": "Operação",
          "uf": "PR",
          "state": "Paraná",
          "city": "Curitiba",
          "place": "Curitiba - PR",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Outros"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/yv53qexjvwc0c0vja727.opt.png",
          "id": "05ce2455-a4d4-4e09-9d9b-dd3a2a2bdd9d",
          "name": "YupiPlay",
          "short_description": "Primeira rede de entretenimento educativo infantil para dispositivos móveis do brasil. ",
          "description": "Primeira rede de entretenimento educativo infantil para dispositivos móveis do brasil. ",
          "tags": [ ],
          "slug": "yupiplay",
          "is_verified": 0,
          "created_at": "17/11/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2C",
          "business_phase": "Operação",
          "business_model": "Outros",
          "uf": "PB",
          "state": "Paraíba",
          "city": "João Pessoa",
          "place": "João Pessoa - PB",
          "is_active": 1,
          "badges": [
              {
                  "name": "WOW",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_wow.png"
              }
          ],
          "segments": {
              "primary": "Educação"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/08/foto-perfil-pr-couti-redes-sociais-quadrado-fundo-prata_852c7296-589f-495e-860d-f4e811f0b56d.png",
          "founded_at": "08/09/2019",
          "id": "05dd46eb-b2ae-450a-bce2-1f0880a6eea4",
          "name": "PR Couti Comunicação",
          "company_name": "RODRIGO OLIVEIRA DE SENA COUTINHO",
          "short_description": "A PR Couti Comunicação é a primeira agência de relações públicas de Guarulhos",
          "description": "Somos uma agência de comunicação nova no mercado, mas com expertise em gerar resultados de ativação de marcas na mídia.  Nossa proposta é apresentar uma nova forma de fazer PR (Public Relations), onde a praticidade e a inovação são o foco. Aqui desenvolvemos um plano de comunicação específico para cada tipo de negócio.\n\nSua marca precisa de audiência e visibilidade? \n\nApresentamos uma nova forma de fazer PR, que se resume em: \n\n- DIVULGAÇÃO NA IMPRENSA PARA ATRAIR CREDIBILIDADE;\n- MARKETING DE CONTEÚDO E ATENDIMENTO NAS REDES SOCIAIS PARA GERAR LEADS;\n- COMUNICAÇÃO COM COLABORADORES E SEUS FAMILIARES, REFORÇANDO O MARKETING INTERNO DO NEGÓCIO.",
          "tags": [
              "assessoria de imprensa",
              "comunicação",
              "redes sociais",
              "relações públicas",
              "marketing de conteúdo",
              "guarulhos",
              "agência",
              "comunicação para startups"
          ],
          "slug": "pr-couti-comunicacao",
          "is_verified": 1,
          "created_at": "14/08/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B2C",
          "business_phase": "Operação",
          "business_model": "Outros",
          "uf": "SP",
          "state": "São Paulo",
          "city": "Guarulhos",
          "place": "Guarulhos - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Comunicação e Mídia"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/05/livedtgbrandpreferencial_99bc45c9-e1ec-49ad-b51f-40b517251849.png",
          "founded_at": "12/10/2016",
          "id": "0614588c-b93b-4282-a5c3-ccc14e063e00",
          "name": "LIVE DTG",
          "company_name": "Live DTG Franchising Eireli",
          "short_description": "Ajudamos equipes a terem o melhor proveito de seu tempo ao mesmo tempo que aprendem a resolver problemas de gestão de forma fácil e simples.",
          "description": "Sabemos que no Brasil, 58% das PMEs morrem antes de 5 anos por não conseguirem planejar e executar com efetividade suas ações e por falta de maturidade de gestão, fatores que acabam levando a injustiças no ambiente de trabalho, como: falhas de comunicação, falta de reconhecimento e valorização do colaborador e monitoramento pouco efetivo. O Live DTG ajuda a resolver esse problema sendo um sistema simples, prático e intuitivo, com sua metodologia própria, o Método DTG de Gestão e Liderança, que permite que equipes tirem o maior e melhor proveito de seu tempo de trabalho ao mesmo tempo que se desenvolvem profissionalmente. Possibilitando: aumentar o comprometimento da equipe em cumprir os prazos das ações; visualizar quem está entregando ou não resultado e visualizar os indicadores chave de desempenho e seus responsáveis (setor e colaborador).",
          "tags": [
              "Consultoria Estratégica",
              "Sistema de Gerenciamento",
              "Formação de Liderança",
              "Desenvolvimento de Pessoas",
              "Gestão de Metas",
              "Gestão de Indicadores"
          ],
          "slug": "live-dtg",
          "is_verified": 0,
          "created_at": "29/05/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Operação",
          "business_model": "SaaS",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Educação"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/10/6936-36b0fc8cebf88a457b0a50110495bb841f936558.opt.png",
          "founded_at": "08/12/2018",
          "id": "06152743-e717-423c-adf4-fd3a618b3342",
          "name": "NOC",
          "company_name": "NOC TECNOLOGIAS LTDA",
          "short_description": "Somos uma plataforma de produção de conteúdo para uso estratégico nas redes sociais.\n",
          "description": "Você concorda que nada vende melhor o seu negócio do que um cliente satisfeito? E que as redes sociais amplificam tudo? Que tal usar isso ao seu favor? \n\nA NOC tem uma metodologia que ajuda você vender só para quem quer te comprar; além de entender o comportamento do seu consumidor para potencializar as experiências. Identificamos os rastros digitais de interesse dos seus possíveis clientes; veiculamos as campanhas no entorno para quem tem intenção de compra orientando através de dados para a criação de conteúdo que influencia. Com a NOC você não fica  dependente só dos meios tradicionais para ter resultado.\n",
          "tags": [
              "Marketing",
              "publicidade",
              "Redes sociais"
          ],
          "slug": "noc",
          "is_verified": 1,
          "created_at": "23/10/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Operação",
          "business_model": "SaaS",
          "uf": "RS",
          "state": "Rio Grande do Sul",
          "city": "Porto Alegre",
          "place": "Porto Alegre - RS",
          "is_active": 1,
          "badges": [
              {
                  "name": "WOW",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_wow.png"
              }
          ],
          "segments": {
              "primary": "Varejo / Atacado"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/smashpoints.png",
          "id": "0629a9f8-a59d-429a-a200-05ed76c01115",
          "name": "SmashPoints",
          "short_description": "Use your points!",
          "description": "Use your points!",
          "tags": [ ],
          "slug": "smashpoints",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2C",
          "business_phase": "Operação",
          "business_model": "E-commerce",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Finanças"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/08/logoprivio500px-2x_dcb46516-8d23-49b3-9753-9d9c6b719c51.png",
          "id": "06484f3c-88f7-4c70-b634-c7a9c97a650e",
          "name": "Privio",
          "short_description": "Comunicação inteligente entre profissionais de saúde e pacientes",
          "tags": [ ],
          "slug": "privio",
          "is_verified": 0,
          "created_at": "01/08/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Operação",
          "business_model": "SaaS",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Saúde e Bem-estar"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/08/cozinha_vritine.png",
          "founded_at": "31/12/2014",
          "id": "064fdca6-63cf-4919-a4cb-a6e6de4be6f9",
          "name": "Cozinha Vitrine",
          "description": "A cozinha vitrine é uma escola de cozinha ensinado para as pessoas experiências. Quer focar na dieta personalizada.Possuem uma estrutura de cozinha. Viu que existia um nicho a ser explorado. Perceberam que a grande dificuldade das pessoas que precisam de um controle dietético mas não conseguem seguir a dieta. Possuem a escola em promover a dieta. Cozinham em um forno combinado a uma temperatura e colocam em um equipamento de resfriamento e ultra congelamento. No processo uma refeição pode ficar 21 semanas em freezer. Acreditam que possam oferecer dietas em caixinhas. Começou como uma entrega para restaurantes. Começou com a Dieta de performance.",
          "tags": [ ],
          "slug": "cozinha-vitrine",
          "is_verified": 1,
          "created_at": "22/05/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2C",
          "business_phase": "Operação",
          "business_model": "Consumer",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Belo Horizonte",
          "place": "Belo Horizonte - MG",
          "is_active": 1,
          "badges": [
              {
                  "name": "GO Minas",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_go_minas.png"
              },
              {
                  "name": "Troposlab",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_troposlab.png"
              }
          ],
          "segments": {
              "primary": "Produtos de Consumo"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/mao-na-roda.png",
          "id": "069a79da-63b5-455e-8e08-4e44997c67a9",
          "name": "Mão na Roda",
          "company_name": "Mão na Roda",
          "short_description": "Marketplace para contratação de pintores que oferece mão de obra qualificada, serviço com garantia e material entregue direto para o cliente.",
          "tags": [ ],
          "slug": "mao-na-roda",
          "is_verified": 0,
          "created_at": "17/04/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B2C",
          "business_phase": "Operação",
          "business_model": "Marketplace",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Construção Civil"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/mercadolead.png",
          "founded_at": "31/12/2015",
          "id": "06bc2e9c-1b3c-4f38-9c6e-4ed4fc83914c",
          "name": "MercadoLead",
          "company_name": "MercadoLead",
          "short_description": "Plataforma de indicação de clientes para corretores de seguros.",
          "description": "Plataforma de indicação de clientes para pequenas e médias corretoras e corretores de seguros. ",
          "tags": [
              "Advertising",
              "Comunicação e Mídia",
              "Finanças"
          ],
          "slug": "mercadolead",
          "is_verified": 0,
          "created_at": "25/12/2017",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Operação",
          "business_model": "Marketplace",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Juiz de Fora",
          "place": "Juiz de Fora - MG",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Seguros"
          }
      },
      {
          "id": "06d5c9e4-11a8-4e68-bdcc-4b192fdd9918",
          "name": "Lyon Soluções",
          "tags": [ ],
          "slug": "lyon-solucoes",
          "is_verified": 0,
          "created_at": "15/03/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_phase": "Operação",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Outros"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/01/11226-64c812ad413222dbe2f5d291d7ba10f1060aa692.opt.png",
          "founded_at": "23/05/2018",
          "id": "07020620-b878-453a-9a1d-7ee5a9f12800",
          "name": "DoctorCondo",
          "company_name": "DOCTOR CONDO SERVIÇOS EM TECNOLOGIA DA INFORMAÇÃO LTDA",
          "tags": [ ],
          "slug": "doctorcondo",
          "is_verified": 0,
          "created_at": "16/01/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Operação",
          "business_model": "SaaS",
          "uf": "RS",
          "state": "Rio Grande do Sul",
          "city": "Canoas",
          "place": "Canoas - RS",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Imobiliário"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/10/logo-fundo-transparente_3a7a065c-2cf2-41aa-a396-c9d984a114da.png",
          "founded_at": "07/07/2019",
          "id": "0702a866-7a27-427f-98f1-c2cf2d5c3613",
          "name": "Carona - Delas para Elas",
          "company_name": "Mayara Soldati",
          "short_description": "Aplicativo de transporte urbano privado se uso exclusivo para as mulheres",
          "description": "O aplicativo surgiu devido a uma necessidade de segurança que a maioria das mulheres buscam. As fundadoras, Mayara Soldati e Lana Maini Miranda, passaram por um assédio ao utilizarem outro aplicativo de mobilidade urbana e decidiram dar um fim nisso além de ajudar outras mulheres que estavam na mesma situação.\nA partir daí, criaram um aplicativo pensado nas mulheres e nas dificuldades que elas enfrentam todos os dias, desde levar o filho na escola até ter que enfrentar o medo de pegar um carro com um motorista homem.",
          "tags": [
              "transporte",
              "urbano",
              "exclusivo",
              "mulheres"
          ],
          "slug": "carona-delas-para-elas",
          "is_verified": 1,
          "created_at": "03/10/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "P2P",
          "business_phase": "Operação",
          "business_model": "Marketplace",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Juiz de Fora",
          "place": "Juiz de Fora - MG",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Transportes"
          }
      },
      {
          "founded_at": "20/04/2016",
          "id": "07706dd7-7ab5-4529-a575-3910df6760c4",
          "name": "GetYuppy",
          "company_name": "GetYuppy",
          "tags": [
              "Comunicação e Mídia"
          ],
          "slug": "getyuppy",
          "is_verified": 0,
          "created_at": "26/10/2017",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B2C",
          "business_phase": "Operação",
          "business_model": "Marketplace",
          "uf": "RJ",
          "state": "Rio de Janeiro",
          "city": "Rio de Janeiro",
          "place": "Rio de Janeiro - RJ",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Comunicação e Mídia"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/sol-lar-o-sol-nasce-para-todos!.png",
          "founded_at": "06/03/2016",
          "id": "077ad3e5-9540-4f1e-aec6-86f57be7db22",
          "name": "Sol Lar - O Sol nasce para todos!",
          "company_name": "Sol Lar - O Sol nasce para todos!",
          "short_description": "A Sol Lar é um marketplace no qual consumidores de energia podem reduzir as suas contas de luz com energia solar compartilhada",
          "description": "A Sol Lar quer democratizar a energia solar com usinas solares compartilhadas.\nA Sol Lar é um marketplace de usinas compartilhadas no qual consumidores de energia podem comprar cotas de energia solar. As novas regras da ANEEL permitem a geração remota e compartilhada de energia renovável. \nA atividades da Sol Lar estão vinculadas principalmente ao Objetivo de Desenvolvimento Sustentável 7: Assegurar o acesso confiável, sustentável, moderno e a preço acessível à energia para todos.\n",
          "tags": [
              "energia solar fotovoltaica",
              "energia solar compartilhada",
              "energia renovável",
              "sustentabilidade"
          ],
          "slug": "sol-lar-o-sol-nasce-para-todos",
          "is_verified": 0,
          "created_at": "18/09/2017",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2C",
          "business_phase": "Operação",
          "business_model": "Marketplace",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Nova Lima",
          "place": "Nova Lima - MG",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Energia"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/05/1525313861480-logo menor - cópia.png",
          "founded_at": "25/06/2017",
          "id": "07a239a1-11b6-4343-ba4c-d5fe8c3acaa8",
          "name": "INTELICS TECNOLOGIA DA INFORMACAO",
          "company_name": "INTELICS TECNOLOGIA DA INFORMACAO",
          "short_description": "Somos uma empresa que fornece soluções que possibilitam aos nossos clientes construir e manter sua infraestrutura de TI com melhor custo benefício.",
          "description": "A Intelics é uma empresa que fornece soluções que possibilitam aos nossos clientes construir e manter sua infraestrutura de TI com melhor custo benefício e disponibilidade do mercado. Para isso, focamos em três áreas: produtos open source de qualidade comprovada, automação da configuração, e monitoramento detalhado do ambiente, fornecido por profissionais altamente qualificados em suas respectivas especialidades. Nossos clientes vivenciam na prática o resultado, com ambientes de alto desempenho, estáveis e com baixo custo de manutenção.\n\nHoje atuamos muito com startups elaborando projetos para construir e suportar sua infraestrutura de TI (Servidores, Banco de Dados, etc) em Cloud de forma automatizada e escalável. ",
          "tags": [
              "Cloud Computing"
          ],
          "slug": "intelics-tecnologia-da-informacao",
          "is_verified": 0,
          "created_at": "30/04/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Operação",
          "business_model": "Hardware",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "TIC e Telecom"
          }
      },
      {
          "id": "07f02441-b0ff-4f5e-b668-2b8137c75fd6",
          "name": "Digibar",
          "tags": [ ],
          "slug": "digibar",
          "is_verified": 0,
          "created_at": "15/03/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_phase": "Operação",
          "uf": "BA",
          "state": "Bahia",
          "city": "Salvador",
          "place": "Salvador - BA",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Outros"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/09/6883d508a602404a89a80fb0b0f390f7_1af7de3c-8cb2-4e45-bfb8-1611300c13a9.jpeg",
          "founded_at": "14/04/2019",
          "id": "082a5bc2-b078-4973-a310-ac417baf2b81",
          "name": "Manfing",
          "company_name": "Manfing LTDA",
          "short_description": "Sugerimos o melhor produto, na hora certa, quantidade e valor, para seu cliente fazer uma nova compra, com base em inteligência artificial.",
          "description": "Nosso produto ajuda a saber o mais próximo possível o que o seu cliente vai comprar e quando, antes dele ir à loja física ou online. Esse resultado tem dependência de inúmeros dados e variáveis, se bem aproveitados podem gerar informações relevantes e refinadas, que de posse das empresas dão a elas condições de oferecer o produto certo na hora mais apropriada e a cada cliente específico ou no mínimo de um perfil similar.",
          "tags": [
              "AI",
              "ML",
              "varejo",
              "artificial",
              "machine"
          ],
          "slug": "manfing",
          "is_verified": 1,
          "created_at": "24/09/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Operação",
          "business_model": "SaaS",
          "uf": "PR",
          "state": "Paraná",
          "city": "Toledo",
          "place": "Toledo - PR",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Varejo / Atacado"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/aiqfome.png",
          "founded_at": "31/10/2007",
          "id": "00340e02-21a3-436a-b37f-783e28f2a222",
          "name": "aiqfome",
          "company_name": "aiqfome",
          "short_description": "Terceira maior plataforma de delivery online do Brasil, com mais de 50 cidades em operação e 1.600 restaurantes parceiros.",
          "description": "Apesar de sermos o terceiro maior aplicativo do segmento no Brasil, somos a maior plataforma independente do país. Com um modelo inovador de licenciamento online, há quase 10 anos unimos clientes famintos com os melhores restaurantes. Operamos mais de 50 cidades, 150 mil usuários e 1.700 restaurantes parceiros.",
          "tags": [
              "Advertising"
          ],
          "slug": "aiqfome",
          "is_verified": 0,
          "created_at": "12/04/2017",
          "updated_at": "05/11/2019",
          "employees": "21-50",
          "business_target": "B2B2C",
          "business_phase": "Scaleup",
          "business_model": "Marketplace",
          "uf": "PR",
          "state": "Paraná",
          "city": "Maringá",
          "place": "Maringá - PR",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "E-commerce"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/01/616-39929d8d68ed04f9074830c0b4268542632051a6.opt.png",
          "founded_at": "11/05/2013",
          "id": "01eec336-dab3-4ca8-9ba9-2e2bc89d6393",
          "name": "Vindi",
          "company_name": "Vindi",
          "short_description": "A Vindi é uma plataforma de pagamento líder no setor de serviços, SaaS e assinaturas!",
          "description": "A Vindi é uma plataforma de pagamento on-line com foco no segmento de serviços (SaaS, assinaturas, serviços financeiros, educação, academias e mais de 10 outros segmentos). Fundada em 2013, a empresa já atende mais de 4.000 empresas de todos lugares do Brasil.\n\nSomos uma das fintechs que mais cresce no país. Parte disso é fruto de 3 aquisições que fizemos: Smartbill, Aceita Fácil e Fast Notas.",
          "tags": [
              "Internet"
          ],
          "slug": "vindi",
          "is_verified": 0,
          "created_at": "17/08/2017",
          "updated_at": "05/11/2019",
          "employees": "101-200",
          "business_target": "B2B",
          "business_phase": "Scaleup",
          "business_model": "SaaS",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Finanças"
          }
      },
      {
          "profile_image": "https://cdn.cubo.network/img/logos/takenet.jpg",
          "founded_at": "28/07/1999",
          "id": "02dc2995-f720-471c-bfe9-2bb9985945c8",
          "name": "Take",
          "short_description": "A Take facilita a comunicação entre empresas e pessoas a nível global com o BLiP, plataforma completa de construção, gestão e evolução de chatbots.",
          "description": "A Take nasceu para facilitar a comunicação entre empresas e pessoas. Com o BLiP, nossa plataforma de construção, gestão e evolução de chatbots e contatos inteligentes, já ajudamos grandes empresas a inserirem suas marcas nos principais canais de mensagem, como WhatsApp, Facebook Messenger, Telegram, SMS e sites, a nível global.",
          "tags": [
              "Mobile",
              "Vendas",
              "IA",
              "Engajamento",
              "chatbots",
              "atendimento",
              "whatsapp",
              "contatos inteligentes",
              "smart contacts",
              "comunicação corporativa",
              "blip",
              "plataforma de chatbot",
              "messaging"
          ],
          "slug": "take",
          "is_verified": 1,
          "created_at": "25/06/2018",
          "updated_at": "05/11/2019",
          "employees": "101-200",
          "business_target": "B2B",
          "business_phase": "Scaleup",
          "business_model": "Outros",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Belo Horizonte",
          "place": "Belo Horizonte - MG",
          "is_active": 1,
          "badges": [
              {
                  "name": "Cubo",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_cubo.png"
              }
          ],
          "segments": {
              "primary": "TIC e Telecom"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/press-works.png",
          "founded_at": "11/01/2012",
          "id": "0361fbde-5a1f-4b7c-828e-3099b91f4612",
          "name": "Press Works",
          "company_name": "Press Works",
          "short_description": "Assessoria on-line de imprensa que oferece combos convergentes com link building para Startups, PMEs e Franquias",
          "description": "A Press Works foi criada para atender a pequenas empresas, startups e profissionais liberais. Gente que busca uma nova forma de se posicionar no mercado e atrair clientes. Para isso, encontramos uma maneira inovadora de fazer assessoria de imprensa: nosso serviço é sob demanda e descomplicado, trazendo resultados incríveis em termos de visibilidade.",
          "tags": [
              "Internet"
          ],
          "slug": "press-works",
          "is_verified": 0,
          "created_at": "04/03/2018",
          "updated_at": "05/11/2019",
          "employees": "21-50",
          "business_target": "B2B",
          "business_phase": "Scaleup",
          "business_model": "Outros",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Advertising"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/ustart.png",
          "id": "036f57ac-8973-42b5-aa97-2f03d3f32ccb",
          "name": "UStart",
          "description": "O uStart é um novo aplicativo onde você divulga ou encontra oportunidades de negócios, empregos e serviços.\nDisponível na Apple Store e Google Play",
          "tags": [ ],
          "slug": "ustart",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B2C",
          "business_phase": "Scaleup",
          "business_model": "Outros",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Varejo / Atacado"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/07/blue-logotypefull_19c00f6f-93e2-4d31-ade2-c0f56e9508f1.png",
          "founded_at": "08/06/2017",
          "id": "05c7e5c3-6c71-4f2d-99d7-783c29307d09",
          "name": "Studos",
          "company_name": "Studos Software",
          "short_description": "Aplicativo que ajuda os alunos a melhorar seu desempenho para exames de admissão e ENEM, aproximando a escola dos estudantes, pais e professores",
          "description": "O usuário resolve provas dos principais vestibulares do Brasil e ENEM e ao final de cada atividade é gerado um relatório detalhado do desempenho, mensurando seus pontos fortes e fracos e direcionando o usuário para um banco com mais de 60 mil questões separadas por temas de todas as disciplinas e nível de dificuldade;O aluno cria metas para todas as disciplinas e o sistema informa semanalmente o desempenho por período, proporcionando uma análise de sua evolução;O sistema gera simulados automáticos em função das dificuldades do usuário e pelo grau de dificuldade das questões;Para os professores, a plataforma possui ferramentas para elaboração de provas, tarefas e simulados online, a partir de um aplicativo próprio;A coordenação, consegue mensurar o desempenho dos alunos através de relatórios que destacam as dificuldades individuais e por turmas.",
          "tags": [
              "Educação",
              "Inteligencia Artificial"
          ],
          "slug": "studos",
          "is_verified": 0,
          "created_at": "10/08/2017",
          "updated_at": "05/11/2019",
          "employees": "21-50",
          "business_target": "B2B",
          "business_phase": "Scaleup",
          "business_model": "SaaS",
          "uf": "SC",
          "state": "Santa Catarina",
          "city": "Florianópolis",
          "place": "Florianópolis - SC",
          "is_active": 1,
          "badges": [
              {
                  "name": "InovAtiva",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_inovativa.png"
              }
          ],
          "segments": {
              "primary": "Educação"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/tbrs8lyoxenuspi9cv72.opt.png",
          "founded_at": "01/08/2012",
          "id": "060e1438-fc04-4666-98a3-dee72dc0d350",
          "name": "TecSUS",
          "company_name": "TecSUS Tecnologias para a Sustentabilidade S.A.",
          "short_description": "A TecSUS atua na área de medição inteligente e internet das coisas",
          "description": "A TecSUS é uma startup de tecnologia da informação, que atua no desenvolvimento de dispositivos, aplicativos e sistemas para transmissão/recepção de dados, controle de equipamentos remotos e gestão da informação, aplicados predominantemente nos setores de abastecimento de água, saneamento, geração e distribuição de eletricidade, distribuição de gás natural e serviços municipais.\nA empresa surgiu a partir de projetos de engenharia para uso eficiente da água e para otimização de monitoramento ambiental, do Instituto Tecnológico de Aeronáutica (ITA) e atua no Parque Tecnológico de São José dos Campos - SP. ",
          "tags": [
              "SmartMeters",
              "IoT",
              "CidadesInteligentes",
              "SmartCities",
              "MedidoresInteligentes",
              "RededeSensores",
              "MeshNetwork",
              "RedesemMalha"
          ],
          "slug": "tecsus",
          "is_verified": 0,
          "created_at": "17/11/2018",
          "updated_at": "06/12/2019",
          "employees": "11-20",
          "business_target": "B2B2C",
          "business_phase": "Scaleup",
          "business_model": "SaaS",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São José dos Campos",
          "place": "São José dos Campos - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "TIC e Telecom",
              "secondary": "Indústria"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/big-belt-cinta-reutilizavel-para-pallet.png",
          "id": "07c93792-2474-406e-8b8a-aaef0d35aac4",
          "name": "BIG BELT - Cinta reutilizavel para pallet",
          "short_description": "Temos uma inovação para logística. Cinta reutilizável para pallet. O produto já está no mercado.",
          "description": "Temos uma inovação para logística. Cinta reutilizável para pallet. O produto já está no mercado.",
          "tags": [ ],
          "slug": "big-belt-cinta-reutilizavel-para-pallet",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B2C",
          "business_phase": "Scaleup",
          "business_model": "Marketplace",
          "uf": "SP",
          "state": "São Paulo",
          "city": "Moji Mirim",
          "place": "Moji Mirim - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Automobilismo"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2020/02/logo-h-1-_a7d8cc99-5d34-416e-8db3-a27bece61204.png",
          "founded_at": "16/02/2018",
          "id": "0840fc2a-8704-46b5-98a3-7b6ee5552a79",
          "name": "Workalove",
          "company_name": "DNA DA EDUCAÇÃO S/A",
          "short_description": "Plataforma de Captação, Retenção de Alunos e Egressos com foco em aumentar a Trabalhabilidade de seus estudantes. ",
          "description": "Funcionamos como orientador de carreiras online que ajuda o estudante a escolher o curso mais adequado de acordo com o seu perfil. É também um mentor de carreira online que gera o currículo do aluno, a partir do mapeamento do seu perfil profissional, encontra as oportunidades de trabalho mais aderentes  e prepara o estudante nas soft skills aumentando a sua atratividade para o mercado de trabalho. E tudo isso ajuda as instituições de ensino a qualificar os alunos ideais para as suas ofertas, personalizar suas propostas pedagógicas de acordo com o mercado de trabalho, reduz a evasão e inadimplência e ainda aumenta a receita. Somos a conexão das universidades, estudantes e setor produtivo (empresas). \n",
          "tags": [
              "InovaçãonaEducação;IntegraçãoMercadoeAcademia;SucessodoEstudante;Empregabilidade;Trabalhabilidade",
              "AI."
          ],
          "slug": "workalove",
          "is_verified": 0,
          "created_at": "25/02/2020",
          "updated_at": "25/02/2020",
          "employees": "21-50",
          "business_target": "B2B",
          "business_phase": "Scaleup",
          "business_model": "SaaS",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Sete Lagoas",
          "place": "Sete Lagoas - MG",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Educação",
              "secondary": "Desenvolvimento de Software"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/10/azpay-smart-payment-solutions.png",
          "founded_at": "30/09/2016",
          "id": "084267c3-af23-491a-8d55-de6a9a2e2f95",
          "name": "AZPay - Smart Payment Solutions",
          "company_name": "AZPay Gateway de Pagamento Inteligente",
          "short_description": "A azpay tem como principal objetivo garantir que todos os clientes tenham acesso aos serviços de pagamento mais avançados, confiáveis e transparentes ",
          "description": "A azpay tem como principal objetivo garantir que todos os clientes tenham acesso aos serviços de pagamento mais avançados, confiáveis e transparentes do mercado em um único lugar e sem custo. Nós cuidamos dos fluxos de pagamentos multidirecionais e dos recursos de faturamento, assim permitimos que nossos clientes foquem no que é importante para seus negócios. O que nos diferencia é que acreditamos em criar nossa própria tecnologia. Essa independência nos permitiu oferecer aos clientes soluções flexíveis que possibilitam conectar vários parceiros financeiros e de métodos de pagamentos.",
          "tags": [
              "fintech",
              "pagamento",
              "gateway de pagamento"
          ],
          "slug": "azpay-smart-payment-solutions",
          "is_verified": 0,
          "created_at": "02/10/2018",
          "updated_at": "05/11/2019",
          "employees": "101-200",
          "business_target": "B2B",
          "business_phase": "Scaleup",
          "business_model": "SaaS",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "E-commerce"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2020/01/logo512_7ae492aa-5d8f-47ec-8eb7-ba9cd3441a87.png",
          "founded_at": "01/06/2011",
          "id": "00062cf3-bcd1-4b04-8c7c-f8f69544b870",
          "name": "Sepbit",
          "short_description": "Tecnologia pra você!",
          "description": "Assistência técnica em informática e consultoria em TI para profissionais liberais, pequenas e médias empresas",
          "tags": [
              "Iot",
              "host",
              "site",
              "e-mail",
              "app",
              "android",
              "windows"
          ],
          "slug": "sepbit",
          "is_verified": 0,
          "created_at": "23/01/2020",
          "updated_at": "23/01/2020",
          "employees": "1-5",
          "business_target": "B2B",
          "business_phase": "Ideação",
          "business_model": "Marketplace",
          "uf": "PE",
          "state": "Pernambuco",
          "city": "Carpina",
          "place": "Carpina - PE",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Desenvolvimento de Software",
              "secondary": "TIC e Telecom"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/singol-games-educacionais-kiduca.png",
          "id": "0043134c-54a8-486c-962e-6522ece582a8",
          "name": "Singol Games Educacionais - Kiduca",
          "company_name": "Singol Games Educacionais - Kiduca",
          "description": "Plataforma Educacional baseada em games e fundamentada nas diretrizes curriculares nacionais que envolve professores e motiva alunos a estudar muito mais.",
          "tags": [ ],
          "slug": "singol-games-educacionais-kiduca",
          "is_verified": 0,
          "created_at": "22/05/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_target": "B2B",
          "business_phase": "Ideação",
          "business_model": "Marketplace",
          "uf": "SP",
          "state": "São Paulo",
          "city": "Sorocaba",
          "place": "Sorocaba - SP",
          "is_active": 1,
          "badges": [
              {
                  "name": "Artemisia",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_artemisia.png"
              }
          ],
          "segments": {
              "primary": "Advertising"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/olusamerica-energia-solar.png",
          "founded_at": "30/11/1998",
          "id": "00d3f826-ded5-49e9-bfa2-05c5de074e7a",
          "name": "OlusAmerica Energia Solar",
          "company_name": "OlusAmerica Energia Solar",
          "short_description": "Desenvolvemos e construímos sistema de geração solar fotovoltaica",
          "description": "Somos uma empresa brasileira dedicada ao segmento de geração solar fotovoltaica.\r\nNós da OlusAmerica trabalhamos com uma certeza, estamos agregando valor para a sociedade de maneira simples e inteligente, criamos mudança na forma como as pessoas geram e usam energia elétrica. Transformamos vidas, levamos eletricidade solar para lugares inimagináveis, este é o nosso compromisso, construir um futuro melhor e sustentável para todos.",
          "tags": [ ],
          "slug": "olusamerica-energia-solar",
          "is_verified": 0,
          "created_at": "09/01/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_target": "B2B2C",
          "business_phase": "Ideação",
          "business_model": "Outros",
          "uf": "SP",
          "state": "São Paulo",
          "city": "Barueri",
          "place": "Barueri - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Energia"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/09/logo-beauty-car_518d6951-dee3-4ec2-85a6-3f50a3b946c5.jpg",
          "founded_at": "27/09/2019",
          "id": "00e62279-e8e2-4c10-819a-4980889349ef",
          "name": "Beauty Car",
          "short_description": "Mecãnica Para Mulheres",
          "description": "Modelo de Negócio de Mecânica de Automóveis voltados exclusivamente para Atendimento à Mulher",
          "tags": [
              "MecânicapraMulheres"
          ],
          "slug": "beauty-car",
          "is_verified": 0,
          "created_at": "28/09/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_target": "B2C",
          "business_phase": "Ideação",
          "business_model": "Outros",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Serviços Profissionais"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/converte-dsp.png",
          "id": "01258b1b-f19d-4f0f-8405-8807ac33f600",
          "name": "CONVERTE DSP",
          "company_name": "CONVERTE DSP",
          "tags": [ ],
          "slug": "converte-dsp",
          "is_verified": 0,
          "created_at": "22/05/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_target": "B2B",
          "business_phase": "Ideação",
          "business_model": "Marketplace",
          "uf": "PR",
          "state": "Paraná",
          "city": "Mandirituba",
          "place": "Mandirituba - PR",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Advertising"
          }
      },
      {
          "founded_at": "09/10/2014",
          "id": "01328c4a-1614-4b54-a6a1-b19666b8e713",
          "name": "PrintGreen 3D",
          "description": "A PrintGreen 3D é um startup que está situada no Centro de Inovação, Empreendedorismo e Tecnologia – Cietec/USP, na Cidade Universitária, em São Paulo.\r\nA empresa surgiu ao identificarmos que, na área de impressão 3D, não há produtores nacionais de filamento (matéria-prima dos objetos fabricados pelas impressoras 3D) e que esse mesmo filamento pode ser obtido por meio do plástico reciclado.\r\nPara viabilizar o negócio, nós estabelecemos parceria com o Serviço Nacional de Aprendizagem Industrial, o SENAI,  para o desenvolvimento de dois produtos:\r\n• Filamento para impressoras 3D, um produto sustentável que utiliza como matéria-prima o plástico reciclado.\r\n• Extrusora de pequeno porte que estará disponível para\r\naqueles que quiserem fabricar seu próprio filamento utilizando nossa matéria-prima.\r\nVamos trabalhar no segmento de manufatura aditiva, ou seja, impressão 3D personalizada, modelagem 3D, treinamentos e consultoria. Nessa parte, explicaremos com mais detalhes o funcionamento da empresa e das máquinas, e as possibilidades práticas e inovadoras que a impressão 3D oferece. O campo de atuação das impressoras 3D é muito vasto. Do design\r\nà área médica, da engenharia e arquitetura até a sala de aula ",
          "tags": [ ],
          "slug": "printgreen-3d",
          "is_verified": 0,
          "created_at": "22/04/2015",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_target": "B2B",
          "business_phase": "Ideação",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Hardware"
          }
      },
      {
          "founded_at": "31/12/2014",
          "id": "0228794f-5f8e-45fe-947e-23e0ae3f2d00",
          "name": "Vitrine de Talentos",
          "description": "O Vitrine de Talentos é uma plataforma gratuita de divulgação de videos. Os videos devem necessariamente estar relacionados a pessoas, equipes ou grupos demonstrando seus talentos em atividades como esportes, moda, música, invenções, artes, etc. Serve como ferramenta de publicidade e promoção tanto dos usuários, como de empresas que podem anunciar através de vídeos e banners seus produtos e serviços. Além disso, é uma ferramenta para que  \"caça-talentos\" ou organizações encontrem o que procuram com maior agilidade. \r\nQual é o seu talento?",
          "tags": [ ],
          "slug": "vitrine-de-talentos",
          "is_verified": 0,
          "created_at": "01/07/2015",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Ideação",
          "uf": "SP",
          "state": "São Paulo",
          "city": "Rio Claro",
          "place": "Rio Claro - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Entretenimento"
          }
      },
      {
          "id": "022ca6a2-2d8a-467f-ba3a-8b445bd618ce",
          "name": "Anonymous Behaviors",
          "short_description": "Identificação biométrica anônima de hábitos de consumo.",
          "description": "Identificação biométrica anônima de hábitos de consumo.",
          "tags": [ ],
          "slug": "anonymous-behaviors",
          "is_verified": 0,
          "created_at": "28/08/2014",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_target": "B2B",
          "business_phase": "Ideação",
          "business_model": "Outros",
          "uf": "RJ",
          "state": "Rio de Janeiro",
          "city": "Niterói",
          "place": "Niterói - RJ",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Outros"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/bandf-sociedade-de-advogados.png",
          "founded_at": "08/06/2017",
          "id": "027cf163-17b2-4ee6-bbb9-f8585efb2369",
          "name": "B&F Sociedade de Advogados",
          "company_name": "B&F Sociedade de Advogados",
          "tags": [
              "Direito",
              "Serviços Profissionais",
              "científicos ou técnicos"
          ],
          "slug": "bandf-sociedade-de-advogados",
          "is_verified": 0,
          "created_at": "26/01/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_target": "B2S",
          "business_phase": "Ideação",
          "business_model": "Outros",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Direito"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/12/11109-2fae36bb16fefe34d96fb8b094edff42eb338a90.opt.png",
          "founded_at": "31/07/2018",
          "id": "029c680f-f505-4341-9fe3-cd62c0d28069",
          "name": "Botanic Me",
          "company_name": "Botanic Me",
          "short_description": "Desenvolvimento de produtos probióticos para a saúde da mulher e estudos referentes à ciência do microbioma.",
          "description": "Nos próximos anos as bactérias afetarão quase todos os aspectos de nossas vidas. O microbioma está redefinindo o relacionamento que temos com a saúde e transformando radicalmente a abordagem em medicina, higiene e dieta.\nO uso de probióticos na alimentação proporciona um microbioma equilibrado - chave para uma digestão saudável, imunidade, controle de peso, pele, equilíbrio hormonal e resposta ao estresse. \nApesar do número cada vez maior de suplementos probióticos, as pessoas estão confusas sobre o que são, como funcionam e por que devem utilizá-los. Com isso, além de levarmos conhecimento acerca do funcionamento e da importância do microbioma, a Botanic Me fornecerá produtos probióticos para a saúde feminina, com instruções de como devem ser utilizados. \n",
          "tags": [
              "Saúde",
              "P&D",
              "bem estar"
          ],
          "slug": "botanic-me",
          "is_verified": 0,
          "created_at": "02/12/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_target": "B2B2C",
          "business_phase": "Ideação",
          "business_model": "E-commerce",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Biotecnologia"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2020/03/2_f71b7e7f-7a54-4a5e-974d-61f9a204c3ba.png",
          "founded_at": "01/01/2019",
          "id": "02b9840c-ca61-4c75-a511-1b526f3b868c",
          "name": "INSPEÇÃO.PRO",
          "short_description": "Aplicativo para Inspeção",
          "description": "Aplicativo Para Inspeção, Manutenção e Instalação, com checklists, formulários, fotos e geração de laudos!\nDiga adeus à prancheta e à câmera fotográfica! Com o INSPEÇÃO.PRO, sua empresa ganha agilidade e produtividade.|",
          "tags": [
              "Aplicativo",
              "Inspeção",
              "Checklist",
              "Laudo"
          ],
          "slug": "inspecao-pro",
          "is_verified": 0,
          "created_at": "04/03/2020",
          "updated_at": "04/03/2020",
          "employees": "1-5",
          "business_target": "B2B",
          "business_phase": "Ideação",
          "business_model": "SaaS",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Internet"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/5688-2aeb71c94085a4595082f3ca30d1283ea801f82e.opt.png",
          "founded_at": "07/08/2012",
          "id": "02f09dfb-bab6-4866-a7c7-cb2f41cdd9b1",
          "name": "iSocial 3D",
          "description": "Olá,\r\n\r\nMeu nome é Marcelo Victor\r\n\r\n       Sou fundador do Aplicativo de Rede Social em 3D \"SmartSocial\". Há mais ou menos 8 anos venho trabalhando neste projeto pessoal. e a cada ano que se passou, após ouvir de varias pessoas, como o Aplicativo ficaria melhor no design e desempenho. Por isso refiz alguns tópicos. \r\nforam feitas algumas mudanças após todo esse tempo. e hoje no ano de 2015 digo que o App está pronto para ser desenvolvido e publicado.\r\n\r\nAgora estou em busca de parceria com empresas do setor para desenvolver e comercializar vendas internas no App.\r\n\r\n\"Sou Pioneiro na Criação de uma Rede Social em 3D,Por isso Acredito que é um negócio Lucrativo\"... \r\n",
          "tags": [ ],
          "slug": "isocial-3d",
          "is_verified": 0,
          "created_at": "09/04/2015",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_target": "B2C",
          "business_phase": "Ideação",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Poços de Caldas",
          "place": "Poços de Caldas - MG",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "E-commerce"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/il3plar539ssz28w1krg.opt.png",
          "id": "030d07ab-4dab-43d6-badc-4d28f46ca621",
          "name": "Capital Empreendedora",
          "company_name": "Capital Empreendedora",
          "tags": [ ],
          "slug": "capital-empreendedora",
          "is_verified": 0,
          "created_at": "22/05/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_target": "B2B",
          "business_phase": "Ideação",
          "business_model": "Marketplace",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Advertising"
          }
      },
      {
          "founded_at": "29/11/2014",
          "id": "03158de6-9aba-435c-a8d9-06606fb3532f",
          "name": "lab123",
          "company_name": "lab123",
          "tags": [ ],
          "slug": "lab123",
          "is_verified": 0,
          "created_at": "23/04/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_target": "B2B",
          "business_phase": "Ideação",
          "business_model": "Marketplace",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Serviços Profissionais"
          }
      },
      {
          "founded_at": "05/11/2015",
          "id": "032b91d0-955d-4106-9de3-db2719fc10f8",
          "name": "Patricia Giuriatti",
          "short_description": "Mundo marketing",
          "description": "Mundo marketing",
          "tags": [ ],
          "slug": "patricia-giuriatti",
          "is_verified": 0,
          "created_at": "06/11/2015",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_target": "B2C",
          "business_phase": "Ideação",
          "business_model": "E-commerce",
          "uf": "SC",
          "state": "Santa Catarina",
          "city": "Florianópolis",
          "place": "Florianópolis - SC",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Varejo / Atacado"
          }
      },
      {
          "founded_at": "31/07/2013",
          "id": "03400563-3aa7-4e90-adce-b138a22be9cc",
          "name": "Logos Lab",
          "tags": [ ],
          "slug": "logos-lab",
          "is_verified": 0,
          "created_at": "13/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_target": "B2B",
          "business_phase": "Ideação",
          "business_model": "SaaS",
          "uf": "SP",
          "state": "São Paulo",
          "city": "Itapetininga",
          "place": "Itapetininga - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Big Data"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/08/educadoo.png",
          "id": "03970989-01e1-453a-9c10-880f0a06d65f",
          "name": "Educadoo",
          "description": "Conectamos pessoas talentosas com empresas de alto crescimento. Será que alguma empresa tem um propósito semelhante ao seu? Nós te ajudaremos a encontrar essas respostas!",
          "tags": [ ],
          "slug": "educadoo",
          "is_verified": 0,
          "created_at": "22/05/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_target": "B2B2C",
          "business_phase": "Ideação",
          "business_model": "Marketplace",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Uberlândia",
          "place": "Uberlândia - MG",
          "is_active": 1,
          "badges": [
              {
                  "name": "Troposlab",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_troposlab.png"
              },
              {
                  "name": "GO Minas",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_go_minas.png"
              }
          ],
          "segments": {
              "primary": "Recrutamento"
          }
      },
      {
          "founded_at": "09/05/2015",
          "id": "03c6deec-c549-42cd-8b1d-00f1bf3225a8",
          "name": "Chuuze",
          "description": "O objetivo do Chuuze é dar a possibilidade aos comerciantes de pequeno e médio porte, dos segmentos de bares e restaurantes, analisar a avaliação de seus produtos oeferecido a partir da opinião de seus consumidores. Para isto, desenvolveremos um ambiente Web, onde o comerciante deverá cadastrar os seus produtos, ao menos aqueles que tem maior aceitação e/ou valor agregado (diferencial) e marcá-los para posterior avaliação.\r\nOs seus clientes, terão acesso à uma aplicação para mobile (Android e IOS) onde poderão escolher o estabeleciemnto do comerciante e visualizar os produtos que podem ser avaliados daquele local. \r\nOs itens a serem avaliados estão sendo desenhados, pois serão foco de estudo para um BI para apoio à decisão. \r\nO comerciante terá a opção de uso gratuito, igualmente os clientes. Após um determinado tempo, por exemplo, 30 dias, mostraremos a ele as possibilidades de visões estratégicas sobre as votações, passando a oferecer-lhe uma contratação Gold ou Premium. Demonstrando assim as possibilidades de cruzar o seu produto com outros similares que foram chuuzados em outros estabelecimentos por outros clientes. Indicando o seu posicionamento estratégico no mercado e como poderíamos apoia-lo em decisões para alavancar o seu negócio.",
          "tags": [ ],
          "slug": "chuuze",
          "is_verified": 0,
          "created_at": "04/08/2015",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Ideação",
          "uf": "SC",
          "state": "Santa Catarina",
          "city": "Blumenau",
          "place": "Blumenau - SC",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Outros"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/teeq5ybrugqzkyrcoia9.opt.png",
          "id": "03eaf996-cf3c-4b6c-8e04-3a56be907b29",
          "name": "Animavideo",
          "description": "Somos uma equipe de profissionais com o objetivo principal de criar animações em vídeos explicativos atraentes para qualquer segmento empresarial.\r\n\r\nDesenvolvemos vários estilos de vídeos animados; seja pra explicar uma ideia, um serviço, vender produtos ou apresentar uma empresa.\r\n\r\nNossos vídeos contém o melhor auxílio visual para o seu site,  fazendo com que o visitante se interesse pelo seu conteúdo.\r\n\r\nOferecemos as empresas e startups uma oportunidade eficaz de expandir a sua presença de marca no mercado digital.\r\n",
          "tags": [ ],
          "slug": "animavideo",
          "is_verified": 0,
          "created_at": "20/12/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_target": "B2B",
          "business_phase": "Ideação",
          "uf": "SC",
          "state": "Santa Catarina",
          "city": "Florianópolis",
          "place": "Florianópolis - SC",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Comunicação e Mídia"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/10/20191028-191116_5baa6974-0a9c-424e-af5a-bcedc8fcf808.jpg",
          "founded_at": "11/12/2018",
          "id": "04042e75-3504-47b4-a3ed-4cf51021c17e",
          "name": "Busca Óculos",
          "short_description": "Uma nova forma de pesquisar e economizar para comprar seus óculos.",
          "description": "Comprar um óculos pode ser caro, complicado e demorado não é?\nDiversas vezes você pode se deparar com uma grande dúvida... Comprar o que o médico indicou (se indicou) ou comprar o que o vendedor afirma ser o melhor? \nVocê pode ir em diversas lojas e achar o mesmo produto com uma variação de preço de até 200%. Pensando nisso, nós da Opticom, criamos uma plataforma que consegue atráves da sua receita, encontrar o óculos mais barato para o seu grau, você pode buscar pelo menor preço, proximidade ou até pelo menor prazo de entrega.\nNOS DAMOS A VOCÊ O PODER DE ECONOMIZAR SEM SAIR DE CASA!",
          "tags": [
              "Busca",
              "unicórnio",
              "óculos",
              "disrupção",
              ""
          ],
          "slug": "busca-oculos",
          "is_verified": 0,
          "created_at": "28/10/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_target": "B2B2C",
          "business_phase": "Ideação",
          "business_model": "Marketplace",
          "uf": "AM",
          "state": "Amazonas",
          "city": "Manaus",
          "place": "Manaus - AM",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Saúde e Bem-estar"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/agro-inteli.png",
          "founded_at": "26/03/2017",
          "id": "040a3e42-4bdb-495d-b489-f598bda7f06d",
          "name": "Agro Inteli",
          "company_name": "Agro Inteli",
          "description": "A Agro Inteli auxilia os agricultores a tomar decisões com base em números reais de sua lavoura de forma sustentável, pensando no meio ambiente, com o menor impacto possível sobre recursos hídricos e energéticos e aumentando a produtividade.",
          "tags": [
              "Agronegócio"
          ],
          "slug": "agro-inteli",
          "is_verified": 0,
          "created_at": "28/06/2017",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_target": "B2C",
          "business_phase": "Ideação",
          "business_model": "Outros",
          "uf": "MS",
          "state": "Mato Grosso do Sul",
          "city": "Campo Grande",
          "place": "Campo Grande - MS",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Advertising"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/10/ativo-1111_10d16782-a3cf-4937-ad6b-f14d7063f269.png",
          "founded_at": "19/02/2019",
          "id": "04213041-6f39-454f-acdd-808b30805473",
          "name": "Food Custom",
          "short_description": "O Food Custom é uma startup parnaibana idealizada por acadêmicos do curso de Ciência da Computação.",
          "tags": [
              "FoodCustom",
              "FoodCustom",
              "Parnaíba",
              "Piauí",
              "PI",
              "Comida",
              "aplicativodecomida",
              "Delivery"
          ],
          "slug": "food-custom",
          "is_verified": 0,
          "created_at": "06/06/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_target": "B2C",
          "business_phase": "Ideação",
          "business_model": "Outros",
          "uf": "PI",
          "state": "Piauí",
          "city": "Parnaíba",
          "place": "Parnaíba - PI",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Vendas e Marketing"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/01/11275-06927bd57282fb8c213cec2481c2716740e5d086.opt.png",
          "founded_at": "25/08/2013",
          "id": "045b4027-7f9a-4b83-a35a-6127b0687155",
          "name": "BoccacioMoreno Advogados",
          "short_description": "Escritório pró-business que oferece assessoria para empresas de pequeno e médio porte através das áreas de contratos, societário e compliance.",
          "description": "Acreditamos que a prestação de serviços jurídicos deve acompanhar a evolução do mercado. Por isso, o BM Advogados alinha a sua atuação para ser um escritório pró-business, sendo um verdadeiro parceiro de negócios do seu cliente e prezando pela multidisciplinaridade para a entrega de resultados. Oferecemos auxílio à empresas de pequeno e médio porte nas áreas de contratos, societário, compliance, M&A e resolução de conflitos.  ",
          "tags": [ ],
          "slug": "boccaciomoreno-advogados",
          "is_verified": 0,
          "created_at": "31/01/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_target": "B2S",
          "business_phase": "Ideação",
          "business_model": "Marketplace",
          "uf": "RS",
          "state": "Rio Grande do Sul",
          "city": "Porto Alegre",
          "place": "Porto Alegre - RS",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Direito"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/08/investidores_anjos.png",
          "founded_at": "31/12/2014",
          "id": "046b3f91-ad7f-436e-a00f-670bb9188065",
          "name": "Investidoresanjos.com",
          "short_description": "Clube de investidores anjo",
          "description": "Clube de investidores anjo",
          "tags": [ ],
          "slug": "investidoresanjoscom",
          "is_verified": 1,
          "created_at": "22/05/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_target": "B2B",
          "business_phase": "Ideação",
          "business_model": "Marketplace",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Belo Horizonte",
          "place": "Belo Horizonte - MG",
          "is_active": 1,
          "badges": [
              {
                  "name": "GO Minas",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_go_minas.png"
              },
              {
                  "name": "Troposlab",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_troposlab.png"
              }
          ],
          "segments": {
              "primary": "Finanças"
          }
      },
      {
          "founded_at": "26/07/2015",
          "id": "0491f5d3-fc9b-446e-9f80-315a6b4a52bb",
          "name": "JÁpDO",
          "description": "JÁpDO é uma plataforma mobile que faz a comunicação entre os Restaurantes Fast-Food e seus clientes, permitindo que consultem seus cardápios e façam seus pedidos sem filas e sem esperas.",
          "tags": [ ],
          "slug": "japdo",
          "is_verified": 0,
          "created_at": "24/08/2015",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_target": "B2C",
          "business_phase": "Ideação",
          "uf": "SP",
          "state": "São Paulo",
          "city": "Sertãozinho",
          "place": "Sertãozinho - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Mobile"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/sagran.png",
          "founded_at": "03/05/2018",
          "id": "04eb4b81-d55b-4b1e-a896-1fa0449b2505",
          "name": "Sagran",
          "company_name": "Anderson Botelho Barbosa 43159861864",
          "tags": [
              "Plataforma Web",
              "Plataforma iOS",
              "Plataforma Android",
              "Tabacarias"
          ],
          "slug": "sagran",
          "is_verified": 0,
          "created_at": "21/06/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_target": "B2B2C",
          "business_phase": "Ideação",
          "business_model": "E-commerce",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "E-commerce"
          }
      },
      {
          "founded_at": "04/10/2015",
          "id": "053385e0-7c04-437a-9c21-cbf77cbc3c89",
          "name": "Ousadia conversão de veiculos para eletricidade",
          "short_description": "Oficina de conversão de veículos para eletricidade",
          "description": "Oficina de conversão de veículos para eletricidade",
          "tags": [ ],
          "slug": "ousadia-conversao-de-veiculos-para-eletricidade",
          "is_verified": 0,
          "created_at": "05/10/2015",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Ideação",
          "business_model": "Outros",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Outros"
          }
      },
      {
          "id": "05621e05-df02-4fc1-9ddf-831646d6674b",
          "name": "Showcase (vitrine Musical)",
          "company_name": "Showcase (vitrine Musical)",
          "description": "O projeto consiste em abreviar o caminho de músicos profissionais,amadores e alunos. Abrindo uma Showcase para empresas,empressarios,ongs,governo e lojas do mercado musical. Showcase foca em fomentar social e econômicamente este setor,gerando lucros tanto para os usuários como para os controladores da startup.",
          "tags": [ ],
          "slug": "showcase-vitrine-musical",
          "is_verified": 0,
          "created_at": "22/05/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_target": "B2B",
          "business_phase": "Ideação",
          "business_model": "Marketplace",
          "uf": "RJ",
          "state": "Rio de Janeiro",
          "city": "Rio de Janeiro",
          "place": "Rio de Janeiro - RJ",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Advertising"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/13400-690d114141d0d5f1dcab96ca43828e2d4fe2beb6.opt.png",
          "founded_at": "06/06/2018",
          "id": "05a89994-8153-4a20-84ed-c926c3fb276b",
          "name": "Mac Inn Tecnologia em Automação",
          "company_name": "Mac Inn Tecnologia em Automação",
          "short_description": "É um centro que desenvolve soluções para a Manufatura Avançada (Industria 4.0), \nintegração de sistemas.",
          "description": "É um centro que desenvolve soluções para a Manufatura Avançada (Industria 4.0), \nintegração de sistemas que incluem: Acionamentos, Supervisão e controle de máquinas e Processos \nIndustriais, sendo especializada na programação de CLPs, IHMs, Software Supervisório, Drivers, \nControladores de Processo, Redes Industriais, além de realizar montagem, comissionamento e Startup em \nprojetos de automação industrial.",
          "tags": [ ],
          "slug": "mac-inn-tecnologia-em-automacao",
          "is_verified": 0,
          "created_at": "29/04/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_target": "B2B",
          "business_phase": "Ideação",
          "business_model": "Outros",
          "uf": "PR",
          "state": "Paraná",
          "city": "Francisco Beltrão",
          "place": "Francisco Beltrão - PR",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Indústria"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/asian-secret-cosmeticos.png",
          "founded_at": "01/12/2014",
          "id": "05ce2694-6a7b-48da-a296-b86a971d99d8",
          "name": "Asian Secret Cosméticos ",
          "company_name": "Asian Secret Cosméticos ",
          "description": "Asian Secret é a primeira marca brasileira a desvendar os mistérios do Óleo de Camélia em seus produtos de beleza. Um dos óleos vegetais mais nutritivos, é facilmente absorvido pelo cabelo e deixa um toque aveludado nos fios. \r\n\r\nOs produtos Asian Secret são indicados para todos os tipos de cabelo, mesmo os finos, para restaurar a maciez e o brilho dos fios, sem pesar. Pode ser usado em quem tem química nos fios, colorações ou quem está com o cabelo danificado. Um luxo milenar do Japão diretamente para a sua casa.",
          "tags": [
              "E-commerce"
          ],
          "slug": "asian-secret-cosmeticos",
          "is_verified": 0,
          "created_at": "15/05/2017",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_target": "B2B",
          "business_phase": "Ideação",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "068d8b19-8f1b-48e4-9f97-46e7ba664369",
          "name": "Launchers Inc",
          "tags": [ ],
          "slug": "launchers-inc",
          "is_verified": 0,
          "created_at": "15/03/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Ideação",
          "uf": "MT",
          "state": "Mato Grosso",
          "city": "Cuiabá",
          "place": "Cuiabá - MT",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Saúde e Bem-estar"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/qf2gbhdpndbqzfssvxkg.opt.png",
          "founded_at": "06/01/2018",
          "id": "06e0741a-d2a0-4f48-be93-2fd4cc381077",
          "name": "EmpreSeed",
          "tags": [
              "chatbot"
          ],
          "slug": "empreseed",
          "is_verified": 0,
          "created_at": "24/10/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_target": "B2B",
          "business_phase": "Ideação",
          "business_model": "API",
          "uf": "RN",
          "state": "Rio Grande do Norte",
          "city": "Natal",
          "place": "Natal - RN",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Comunicação e Mídia"
          }
      },
      {
          "founded_at": "08/08/2017",
          "id": "0704b0e3-2a00-47b9-b018-60a36cbf23e0",
          "name": "TISCO - TI SOLUÇÕES CONECTADAS",
          "company_name": "THAIS RIBEIRO PESSANHA 09321503730",
          "short_description": "Desenvolvimento Pessoal",
          "description": "Promover a melhoria na qualidade de vida das pessoas e a inclusão social por meio de palestras motivacionais",
          "tags": [
              "palestras",
              "TD",
              "motivacionais"
          ],
          "slug": "tisco-ti-solucoes-conectadas",
          "is_verified": 0,
          "created_at": "29/05/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_target": "B2C",
          "business_phase": "Ideação",
          "business_model": "Outros",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Saúde e Bem-estar"
          }
      },
      {
          "founded_at": "25/03/2019",
          "id": "0726cf61-e74c-49e9-a902-c8ea337aa85f",
          "name": "O Santo Guia",
          "company_name": "JOB de Vasconcelos Divulgações",
          "short_description": "Uma plataforma de turismo que une o turista, os influenciadores digitais e os empresários locais",
          "description": "Para o B2B, OSG é uma empresa de divulgação que conecta influenciadores digitais a empreendedores de regiões turísticas.\n\nPara o B2C, OSG é um portal de turismo onde você encontra informações sobre as regiões turísticas através de conteúdos de blogueiros, youtubers, instagramers e outros influenciadores digitais.",
          "tags": [ ],
          "slug": "o-santo-guia",
          "is_verified": 0,
          "created_at": "28/03/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_target": "B2B2C",
          "business_phase": "Ideação",
          "business_model": "Venda de dados",
          "uf": "ES",
          "state": "Espírito Santo",
          "city": "Vitória",
          "place": "Vitória - ES",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Eventos e Turismo"
          }
      },
      {
          "founded_at": "14/02/2018",
          "id": "07845589-34d9-4c70-a6c0-5e1c09f92a11",
          "name": "Construa.me",
          "tags": [ ],
          "slug": "construame",
          "is_verified": 0,
          "created_at": "01/10/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_target": "B2B2C",
          "business_phase": "Ideação",
          "business_model": "Outros",
          "uf": "PB",
          "state": "Paraíba",
          "city": "João Pessoa",
          "place": "João Pessoa - PB",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Construção Civil"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/10/viagem-surpresa.png",
          "founded_at": "31/01/2018",
          "id": "07e2f9dc-55bd-44bb-b03b-d2c4decb1ba6",
          "name": "Viagem Surpresa",
          "company_name": "GABRIEL FERREIRA DE MIRANDA",
          "short_description": "Descubra as melhores viagens e destinos pelo mundo.\n",
          "description": "Apresentamos um novo formato de viajar e se divertir.\nCurta o inesperado e surpreenda-se na sua próxima aventura.\nO blog Viagem Surpresa tem como objetivo fornecer a melhor seleção de artigos online a respeito de turismo e viagem de pelo mundo. \nO Viagem Surpresa foi criado e é mantido pela startup COODESH.",
          "tags": [
              "Internet",
              "plataforma",
              "Blog",
              "api"
          ],
          "slug": "viagem-surpresa",
          "is_verified": 0,
          "created_at": "18/07/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_target": "B2B",
          "business_phase": "Ideação",
          "business_model": "Marketplace",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Belo Horizonte",
          "place": "Belo Horizonte - MG",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Eventos e Turismo"
          }
      },
      {
          "founded_at": "16/07/2015",
          "id": "0802ca49-36b3-4575-8c54-f3eb6a7f22d5",
          "name": "Puggy Entregas - Logística para ecommerce",
          "short_description": "Equipe de entregas rápidas realizando entregas no mesmo dia de mercadorias de pequenas e médias lojas online.",
          "description": "Equipe de entregas rápidas realizando entregas no mesmo dia de mercadorias de pequenas e médias lojas online.",
          "tags": [ ],
          "slug": "puggy-entregas-logistica-para-ecommerce",
          "is_verified": 0,
          "created_at": "17/07/2015",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Ideação",
          "business_model": "Outros",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "E-commerce"
          }
      },
      {
          "founded_at": "31/12/2014",
          "id": "00005646-fc1b-4acc-93cd-35fc11914670",
          "name": "BAZ Negócios de A a Z",
          "description": "Somos uma empresa de serviços financeiros contábeis. Processamos as informações dos nossos clientes a partir dos seus comprovantes de pagamentos (fotos de recibos/NF e recibos/NF digitais), gerando simultaneamente relatórios gerenciais e contábeis sem que a empresa precise gastar tempo interno com um trabalho burocrático e mecânico de lançamentos de despesas - além de todo o amparo com as obrigações contábeis, como as fiscais e trabalhistas",
          "tags": [ ],
          "slug": "baz-negocios-de-a-a-z",
          "is_verified": 0,
          "created_at": "10/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "RS",
          "state": "Rio Grande do Sul",
          "city": "Porto Alegre",
          "place": "Porto Alegre - RS",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Finanças"
          }
      },
      {
          "id": "0002c3cb-79d8-4ffd-8c14-22018c1f51e7",
          "name": "Beleza.com",
          "short_description": "Beleza.Com Ltd. was incorporated in 2012 and is based in Sao Paulo, Brazil.",
          "description": "Beleza.Com Ltd. was incorporated in 2012 and is based in Sao Paulo, Brazil.",
          "tags": [ ],
          "slug": "belezacom",
          "is_verified": 0,
          "created_at": "17/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Moda e Beleza"
          }
      },
      {
          "id": "0006fb92-876d-4224-91e1-0eab4b75d671",
          "name": "CLICKSPOT",
          "description": "O ClickSpot é um site de Leilão de Centavo diferenciado por ter 3 tipos de compra diferente e principalmente por ser um dos únicos, se não o único site de leilões de centavo que não utiliza \"robôs\" na programação estrutural do site.",
          "tags": [ ],
          "slug": "clickspot",
          "is_verified": 0,
          "created_at": "19/10/2011",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "SP",
          "state": "São Paulo",
          "city": "Barueri",
          "place": "Barueri - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "00153887-1972-4018-b28b-20709f8e19be",
          "name": "Zimp Recompensas",
          "short_description": "Reward points that work like money. No shady values. No breakage. No Bullshit.",
          "description": "Reward points that work like money. No shady values. No breakage. No Bullshit.",
          "tags": [ ],
          "slug": "zimp-recompensas",
          "is_verified": 0,
          "created_at": "17/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "001a546b-fac0-47d7-b946-4b867d51cc1d",
          "name": "Prime time",
          "tags": [ ],
          "slug": "prime-time",
          "is_verified": 0,
          "created_at": "21/06/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_model": "SaaS",
          "uf": "RJ",
          "state": "Rio de Janeiro",
          "city": "Rio de Janeiro",
          "place": "Rio de Janeiro - RJ",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Educação"
          }
      },
      {
          "id": "003f3abf-de32-4854-b981-625eb82cb153",
          "name": "Neemu",
          "short_description": "Shopping experience startup for the developing of brazilian e-commerce.",
          "description": "Shopping experience startup for the developing of brazilian e-commerce.",
          "tags": [ ],
          "slug": "neemu",
          "is_verified": 0,
          "created_at": "17/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "AM",
          "state": "Amazonas",
          "city": "Manaus",
          "place": "Manaus - AM",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Internet"
          }
      },
      {
          "founded_at": "31/12/2017",
          "id": "0045489c-dd71-4c86-a900-51af8b9c2f74",
          "name": "ReNature",
          "description": "We help farmers to change their production method to a sustainable agroforestry system. Instead of one crop like corn or cocoa that needs too much water and chemicals, and just exhausts the soil, we show farmers how to grow multiple types of crop together that support and strengthen each other and improve the condition of the soil.",
          "tags": [ ],
          "slug": "renature",
          "is_verified": 0,
          "created_at": "10/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "RS",
          "state": "Rio Grande do Sul",
          "city": "Porto Alegre",
          "place": "Porto Alegre - RS",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Agronegócio"
          }
      },
      {
          "id": "00508a2a-47e0-4b0f-88ec-96fa1e0b6281",
          "name": "Talent Sentiment Ltd.",
          "description": "Talent Sentiment is a web and mobile app that allows your employees to intuitively and safely express their emotions and opinions regarding key performance areas of your company. It gives your managers real time feedback about their team's engagement and their own performance as leaders.",
          "tags": [ ],
          "slug": "talent-sentiment-ltd",
          "is_verified": 0,
          "created_at": "08/11/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "005247cb-026d-4ff0-a876-b01d5915ea8f",
          "name": "Solis Imperium",
          "short_description": "Almejamos democratizar a energia solar facilitando novos acessos reduzindo gastos energéticos e incentivando um mundo mais sustentável.",
          "tags": [ ],
          "slug": "solis-imperium",
          "is_verified": 0,
          "created_at": "07/11/2019",
          "updated_at": "07/11/2019",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/livetrack.png",
          "id": "0052c876-8777-4f8f-89ce-435e712337ba",
          "name": "LIVETRACK",
          "short_description": "Monitore embalagens, malotes, caixas térmicas, baús de carga, motos, carros ou caminhões em tempo real.",
          "description": "Monitore embalagens, malotes, caixas térmicas, baús de carga, motos, carros ou caminhões em tempo real.",
          "tags": [ ],
          "slug": "livetrack",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "0056aaad-c11a-4df9-ba16-4619c4be3ad9",
          "name": "Rhodes Kaffe Shopp & Gelateria",
          "description": "A idéia de implantar uma metodologia de trabalho diferente, aliada ao prazer de saborear um bom Gelato Italiano e café Italiano, num ambiente agradável, com produtos de extrema qualidade, deu vida ao sonho. \r\n\r\nA Gelateria e cafeteria com estilo próprio, ambiente moderno e aconchegante, quer tornar-se referência pela qualidade de seus produtos e atendimento.\r\n\r\nFazendo grande sucesso fara,nascer uma nova loja em 2011, na mesma cidade, solidificando assim a marca e um novo conceito em Gelateria cafeteria.\r\n\r\n",
          "tags": [ ],
          "slug": "rhodes-kaffe-shopp-and-gelateria",
          "is_verified": 0,
          "created_at": "26/07/2011",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "0067dce8-c0e5-45c0-b6d6-af572f8e658b",
          "name": "MobMidia",
          "short_description": "Technology solutions for mobile marketing, including apps, websites, games and telecommunications",
          "description": "Technology solutions for mobile marketing, including apps, websites, games and telecommunications",
          "tags": [ ],
          "slug": "mobmidia",
          "is_verified": 0,
          "created_at": "17/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "PE",
          "state": "Pernambuco",
          "city": "Recife",
          "place": "Recife - PE",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Mobile"
          }
      },
      {
          "id": "006b24f9-6e24-49da-a176-94b2b8955cfd",
          "name": "Agenda Beleza",
          "description": "Quem nunca teve um problema com agendamento de serviços?\n\nCom inspiração nessa pergunta e com o objetivo de fornecer soluções inovadoras para facilitar o dia a dia das pessoas, foi fundado, em junho de 2011, o Agenda Beleza, uma plataforma de agendamentos online de vários tipos de serviços, que pode ser usada tanto pelo consumidor quanto pelo profissional.No Agenda Beleza, o consumidor tem a seu alcance informações sobre profissionais da área desejada. De forma fácil, rápida e segura consegue agendar um horário com aquele cujas qualificações e disponibilidade melhor lhe atendem.",
          "tags": [ ],
          "slug": "agenda-beleza",
          "is_verified": 0,
          "created_at": "27/09/2012",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "PR",
          "state": "Paraná",
          "city": "Curitiba",
          "place": "Curitiba - PR",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.cubo.network/img/logos/geofusion.jpg",
          "id": "0071843c-f8d4-46b8-9fed-3d75ce8a8ee5",
          "name": "Geofusion",
          "short_description": "A Geofusion oferece uma tecnologia que permite aos usuários cruzarem dados geográficos online.",
          "description": "Uma empresa focada na criação de tecnologia, a qual permite aos usuários cruzarem dados geográficos online. Com clientes em diversos setores, como o varejo, a indústria e o imobiliário, que se utilizam dessa tecnologia diariamente para tomar decisões estratégicas para o seu negócio. A inovação é o combustível que move a Geofusion.As tecnologias e metodologias mais avançadas na área de TI são usadas como recurso na construção do OnMaps. O OnMaps manipula milhões de informações de forma muito rápida e escalável, para o cliente tenha uma resposta precisa, no menor tempo possível. Com um ambiente de trabalho leve e descontraído, o time recebe grandes desafios técnicos e tem a liberdade para solucionálos.",
          "tags": [ ],
          "slug": "geofusion",
          "is_verified": 0,
          "created_at": "25/06/2018",
          "updated_at": "05/11/2019",
          "employees": "51-100",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Big Data"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/gump-brasil.png",
          "id": "0085edb5-848f-4059-b50e-09de4004d758",
          "name": "Gump Brasil",
          "description": "Somos uma empresa especialista em soluções para gestão da produção e controle dos processos no chão de fábrica. Nossas soluções tem como objetivo a melhoria da produtividade, rastreabilidade, controle e gestão de estoque, minimização de perdas, garantia da montagem ou formulação do produto conforme as Boas práticas da fabricação. Ainda permite redução da possibilidade de fraudes, informação online do processo produtivo e interface com todos os ERP´s do mercado (SAP, TOTVS, ORACLE, e outros). Possuímos soluções implantadas em mais de 80 empresas em todo Brasil, entre elas: Scania, Bimbo, Nestlé, Toyota, Solvay Rhodia, Santa Massa, DSM, Zoetis, Aché, Coopersucar, Saint Gobain, Clariant, CSN, Petrobras, Frigorífico Marba e Química Anastácio.\n\nEm 2017 a Gump Brasil, por oferecer soluções inovadoras para indústrias, foi selecionada para ser incubada no INCIT (Incubadora de empresas de base tecnológica de Itajubá). Com isso, podemos proporcionar soluções robustas e inteligentes, de baixo custo e conforme a necessidade dos nossos clientes.",
          "tags": [ ],
          "slug": "gump-brasil",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Itajubá",
          "place": "Itajubá - MG",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "00980cf8-db67-4dfc-af21-fea8bc366b3e",
          "name": "Central de Cursos Online",
          "company_name": "Central de Cursos Online",
          "description": "A Central de Cursos Online é uma plataforma que reúne milhares de cursos online grátis ou pagos das diversas áreas do conhecimento disponíveis na web, organizado e dividido por áreas e separado por categorias, permitindo ao usuário buscar e encontrar os melhores cursos online de maneira mais rápida e eficiente, minimizando a perda de tempo, que é tão ou até mais valioso que dinheiro.",
          "tags": [ ],
          "slug": "central-de-cursos-online",
          "is_verified": 0,
          "created_at": "22/05/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "009dca87-3d5e-4c82-a884-44cfa50ce8b8",
          "name": "Papel Pré-furado",
          "description": "Papel pré-furado é ideal para repartições públicas e empresas privadas. Com o papel pré-furado você não precisará mais de furador de papel, todos já estariam automaticamente na mesma medida para arquivar. As pessoas economizariam tempo furando, não desperdiçariam papel (os picados), e não precisariam mais de furador. Isso traria economia em todos os sentidos e as empresas fabricantes teriam mais um tipo de produto para vender.",
          "tags": [ ],
          "slug": "papel-pre-furado",
          "is_verified": 0,
          "created_at": "21/08/2011",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "00a1d8f6-15a0-45e6-bc77-c81d7a240dae",
          "name": "Loucas por Descontos ",
          "description": "Direcionado para mulheres de todas as idades, estilos e gostos, o portal Loucar por descontos reúne diversas ofertas dos principais portais de compra coletiva, clubes de descontos e promoções diversas disponíveis no ambiente online. No canal, a internauta pode encontrar ofertas nas mais variadas regiões do Brasil e ainda olhar o mapa que aponta o local com a promoção para facilitar ainda mais a pesquisa. Entre algumas das opções, é possível comprar com descontos itens que vão de jantares a viagens inesquecíveis. Para mais informações, acesse: www.loucaspordesconto.com.br ",
          "tags": [ ],
          "slug": "loucas-por-descontos",
          "is_verified": 0,
          "created_at": "15/06/2011",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/30de9a7810eb78db2efe809de45ee68da7477556.opt.png",
          "founded_at": "28/02/2015",
          "id": "00ae1cff-0cd4-4b15-908b-1e7807733251",
          "name": "PigPeg",
          "short_description": "PigPeg develops apps that pay users for visting or buying products in affiliated stores.",
          "tags": [ ],
          "slug": "pigpeg",
          "is_verified": 0,
          "created_at": "11/04/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Internet"
          }
      },
      {
          "id": "00aee3b4-ca24-48a3-9920-fad707b74108",
          "name": "Escola Games",
          "tags": [ ],
          "slug": "escola-games",
          "is_verified": 0,
          "created_at": "21/06/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_model": "Consumer",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Uberaba",
          "place": "Uberaba - MG",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Educação"
          }
      },
      {
          "id": "00c260ae-2dc1-476b-8667-7ba03be2af36",
          "name": "iDtv",
          "description": "Empresa de comunicação, com software proprietário de criação de conteúdo de broadcast para diversos canais e ferramentas digitais, como: TV Corporativa, Mural Eletrônico, Video-Wall, blogs, apps, etc.",
          "tags": [ ],
          "slug": "idtv",
          "is_verified": 0,
          "created_at": "08/04/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "RJ",
          "state": "Rio de Janeiro",
          "city": "Rio de Janeiro",
          "place": "Rio de Janeiro - RJ",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "00d4e3a6-df72-4bfd-a455-252f05d525d1",
          "name": "Comer Alimentos",
          "company_name": "Comer Alimentos",
          "tags": [ ],
          "slug": "comer-alimentos",
          "is_verified": 0,
          "created_at": "28/02/2017",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "founded_at": "31/12/2011",
          "id": "00d699e9-05a2-4af6-9741-2c14793c49e5",
          "name": "egestor",
          "description": "Controle financeiro, vendas, prestação de serviços, boletos bancários, notas fiscais eletrônicas, cupom fiscal e muito mais! ERP online fácil e intuitivo.",
          "tags": [ ],
          "slug": "egestor",
          "is_verified": 0,
          "created_at": "10/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "RS",
          "state": "Rio Grande do Sul",
          "city": "Santa Maria",
          "place": "Santa Maria - RS",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Gestão"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/ccrr-rfid.png",
          "id": "00e5b716-ff8c-40d1-95bc-73f866daa480",
          "name": "CCRR RFID",
          "description": "Somos uma startup de tecnologia em RFID dentro de uma estrutura sólida de uma grande fabricante de rolos auto-adesivos, trazendo robustez e portfólio de projetos de IoT.",
          "tags": [ ],
          "slug": "ccrr-rfid",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "00e6647f-77b1-4344-91ff-7c19ec914797",
          "name": "DataEduc",
          "tags": [ ],
          "slug": "dataeduc",
          "is_verified": 0,
          "created_at": "21/06/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_model": "SaaS",
          "uf": "SP",
          "state": "São Paulo",
          "city": "Guariba",
          "place": "Guariba - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Educação"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/ld9rocfiedw2ashpdrfa.opt.png",
          "id": "00ed7505-b6f4-4eed-8c5a-f8fe90127c57",
          "name": "Tecnologia Pessoal",
          "description": "Sistema web desenvolvido com o objetivo de auxiliar o novo usuário de tecnologia pessoal. Análise feita pelos próprios usuários, vídeos-tutoriais com demonstrações das principais plataformas do mercado e um blog com atualidades no segmento.",
          "tags": [ ],
          "slug": "tecnologia-pessoal",
          "is_verified": 0,
          "created_at": "18/01/2012",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/mi9vgkbcfaxyaspj67mp.opt.png",
          "id": "00f1aab2-58f0-474b-855b-23a5382622f7",
          "name": "Zupot",
          "description": "A Zupot desenvolveu o ZuChat - Atendimento Online via Chat em nuvem que permite prestar suporte em tempo real aos visitantes do seu website por meio do facebook, computadores, dispositivos mobile e inclusive, por QR Code em qualquer lugar e a qualquer hora.",
          "tags": [ ],
          "slug": "zupot",
          "is_verified": 0,
          "created_at": "01/04/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "DF",
          "state": "Distrito Federal",
          "city": "Brasília",
          "place": "Brasília - DF",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/afccd46c1d6b7f56e2cc5da5338e15ac9bf3623a.opt.png",
          "founded_at": "31/12/2014",
          "id": "01028e8b-b94d-42a7-b18d-6de516aa761d",
          "name": "D'Gitais",
          "short_description": "D'Gitais is a company that proposes and implements digital solutions for innovative companies.",
          "description": "D'Gitais is a company that proposes and implements digital solutions for innovative companies, providing personalized and reliable service, with a 360º vision of their business in the online environment. Mission: To generate revenue for small and medium-sized businesses through digital solutions Vision: To be a 100% digital company, which contributes to consolidate the digital universe as a business unit, giving facility and total autonomy to Brazilian entrepreneurs to manage their brand online. Values: - Always help the client - Focus on results generation - Excellence with simplicity and humility - Great work environment with competent and cheerful professionals - Environmental sustainability.",
          "tags": [ ],
          "slug": "dgitais-2",
          "is_verified": 0,
          "created_at": "11/04/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "RJ",
          "state": "Rio de Janeiro",
          "city": "Rio de Janeiro",
          "place": "Rio de Janeiro - RJ",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Comunicação e Mídia"
          }
      },
      {
          "id": "01038ef6-7cce-44a3-91be-aaf5dad3ef33",
          "name": "malaio.me",
          "short_description": "Inscrições online de eventos, Pagamento integrado, emissão de crachás e certificado. Site do evento gerenciável e integrado com redes sociais.",
          "description": "Inscrições online de eventos, Pagamento integrado, emissão de crachás e certificado. Site do evento gerenciável e integrado com redes sociais.",
          "tags": [ ],
          "slug": "malaiome",
          "is_verified": 0,
          "created_at": "09/10/2011",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "RS",
          "state": "Rio Grande do Sul",
          "city": "Porto Alegre",
          "place": "Porto Alegre - RS",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/cc7aceae65f3f7b5d8e48d48f5493cfe6ae22af4.opt.png",
          "id": "0103ff22-718a-4a77-8ef2-247cf0e8341e",
          "name": "Profissionais Rj",
          "short_description": "Profissionaisrj is a digital magazine focused on young entrepreneurs and vocational skills.",
          "description": "Profissionaisrj is a digital magazine focused on young entrepreneurs and vocational skills.  The magazine features information about events, lectures, courses, awards, and business roundtables useful for them.",
          "tags": [ ],
          "slug": "profissionais-rj",
          "is_verified": 0,
          "created_at": "11/04/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Educação"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/21347aa16243fb9f99849e4e3b54125acee0c5cf.opt.png",
          "id": "010e4c65-b29d-4034-9922-1938c85f9212",
          "name": "Status Club",
          "short_description": "The Club Status is an innovative and pioneering company in the market.",
          "tags": [ ],
          "slug": "status-club",
          "is_verified": 0,
          "created_at": "11/04/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "014848a3-3503-423c-9ec2-1a314e32de4a",
          "name": "Detecta Mais ",
          "description": "Muitos empresários desconhecem que é possivel recuperar os créditos que foram pagos a mais ou de forma indevida nos ultimos 5 (cinco) anos.\r\nA Detecta Mais realiza o processo de revisão dos tributos e impostos pagos por sua empresa nos últimos 5 (cinco) anos. Recuperando os tributos que foram pagos a mais e regularizando pendências que poderiam gerar multas junto a receita federal. ",
          "tags": [ ],
          "slug": "detecta-mais",
          "is_verified": 0,
          "created_at": "19/02/2012",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "BA",
          "state": "Bahia",
          "city": "Salvador",
          "place": "Salvador - BA",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/mixpay.png",
          "id": "014b043b-ca1a-450d-af78-828f9598cdbb",
          "name": "MixPay",
          "short_description": "Empresa de Meios de Pagamentos com soluções destinadas à nichos específicos.",
          "description": "Empresa de Meios de Pagamentos com soluções destinadas à nichos específicos.",
          "tags": [ ],
          "slug": "mixpay",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "SP",
          "state": "São Paulo",
          "city": "Santo André",
          "place": "Santo André - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/helpbell.png",
          "id": "01591c56-4048-4abb-b8da-dba93cefa10d",
          "name": "HelpBell",
          "description": "A HelpBell disponibiliza maneiras eficientes e simples para que pessoas com mais idade ou que necessitem cuidados especiais possam estar conectadas de forma simples e eficaz, melhorando sua qualidade de vida.",
          "tags": [ ],
          "slug": "helpbell",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.cubo.network/img/logos/sumup.jpg",
          "id": "01618845-9156-4366-8fc9-69c09c2029c6",
          "name": "SumUp",
          "short_description": "A SumUp permite que pessoas e negócios podem aceitar pagamentos em cartão de forma simples e segura.",
          "description": "A SumUp é um empresa alemã presente em 13 países na Europa e no Brasil. Com a SumUp, pessoas e negócios podem aceitar pagamentos em cartão de forma simples e segura. Desde o nosso nascimento na Alemanha, temos uma crença muito forte em transparência e de que devemos crescer junto com nossos parceiros. Estar na SumUp é trabalhar em um ambiente desafiador, em qualquer um de nossos principais escritórios em São Paulo, Londres, Sofia e Berlim. Em São Paulo, você vai encontrar pessoas tão talentosas e especiais quanto você. Nosso time é o que faz trabalhar na SumUp ser tão única. Em abril passou por um processo de fusão com a também alemã Payleven, e os dois times que tinham os mesmos propósitos uniram-se em uma força só. Um time feito por pessoas incríveis e que, apesar dos constantes desafios, mantêm um ambiente sensacional.",
          "tags": [ ],
          "slug": "sumup",
          "is_verified": 0,
          "created_at": "25/06/2018",
          "updated_at": "05/11/2019",
          "employees": "51-100",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Finanças"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/2a91fb6cab75668465330ac233fcd9e1dc5229f1.opt.png",
          "founded_at": "31/12/2011",
          "id": "01676a35-9e7a-437f-819f-dc63490ce30e",
          "name": "A3Data",
          "short_description": "A3Data is a company focused on intelligence that can be extracted from data.",
          "tags": [ ],
          "slug": "a3data",
          "is_verified": 0,
          "created_at": "11/04/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Belo Horizonte",
          "place": "Belo Horizonte - MG",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Big Data"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/idcel-solucoes-em-geolocalizacao.png",
          "id": "0177fe85-e293-4396-bab8-6b453f134e08",
          "name": "IdCel - Soluções em Geolocalização",
          "description": "Estamos operando há um ano. Temos soluções de Geolocalização que, diferente das soluções existentes no mercado, privilegiamos compartilhar informações com o Destino (visitado) e com gestores via DashBoard WEB. Dentre as soluções criadas, destacamos Gestão de Visita Técnica, Gestão de Entregas, Drive ThruVirtual e estamos lançando o Motofrete.",
          "tags": [ ],
          "slug": "idcel-solucoes-em-geolocalizacao",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "0183aa51-a661-4d08-b22d-07dfb28eb3cb",
          "name": "airflowing",
          "description": "Airflowing organiza o seu trabalho criativo. Ele é ótimo para agencias de publicidade ou digitais e empresas de serviço em geral. Vendas, tarefas e finanças fluindo sem complicações num só lugar.",
          "tags": [ ],
          "slug": "airflowing",
          "is_verified": 0,
          "created_at": "21/01/2011",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "PR",
          "state": "Paraná",
          "city": "Foz do Iguaçu",
          "place": "Foz do Iguaçu - PR",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/td9d5zxjieicyefnkjyo.opt.png",
          "id": "01856710-220e-4bc9-b617-2c86bcfdb44e",
          "name": "Ecosynth",
          "short_description": "Biotecnologia Ambiental",
          "description": "Biotecnologia Ambiental",
          "tags": [ ],
          "slug": "ecosynth",
          "is_verified": 0,
          "created_at": "17/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Meio Ambiente"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/loadtap.png",
          "id": "0188af7d-620e-42ba-80de-9e78ea926b13",
          "name": "Loadtap",
          "short_description": "Loadtap oferece uma plataforma que possibilita o controle e monitoramento de frete e frotas em tempo real.",
          "description": "Loadtap oferece uma plataforma que possibilita o controle e monitoramento de frete e frotas em tempo real.",
          "tags": [ ],
          "slug": "loadtap",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "0190682d-6a09-42b9-bae8-04a5a19e021a",
          "name": "Ativa Propaganda",
          "short_description": "Somos uma agencia de propaganda e marketing que atua no Oeste Paulista há 10 anos.",
          "description": "Somos uma agencia de propaganda e marketing que atua no Oeste Paulista há 10 anos.",
          "tags": [ ],
          "slug": "ativa-propaganda",
          "is_verified": 0,
          "created_at": "18/06/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "SP",
          "state": "São Paulo",
          "city": "Presidente Prudente",
          "place": "Presidente Prudente - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/zyluiafhgjldriyfqhrh.opt.png",
          "id": "0191d7d6-41a4-4405-af25-5be750693a02",
          "name": "Conexão de Negócios",
          "description": "Big data para uma experiência inteligente de consumo e analise de negócio segmentada, por meio de uma plataforma Integrada de Análise de Dados para auxiliar Micro, Pequenos e Médios negócios na obtenção de vantagem competitiva, A aplicação permite o processamento e a análise dos dados distribuídos em diversas fontes resultando na obtenção de conhecimento a partir de grandes volumes de dados, fornecendo visualizações ágeis e análise preditiva avançada para todos os níveis de usuários.\r\n \r\n",
          "tags": [ ],
          "slug": "conexao-de-negocios",
          "is_verified": 0,
          "created_at": "18/06/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "PR",
          "state": "Paraná",
          "city": "Dois Vizinhos",
          "place": "Dois Vizinhos - PR",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "019212b0-08d3-45a0-bdc0-7b3db4596c75",
          "name": "Máxima Sistemas",
          "tags": [ ],
          "slug": "maxima-sistemas",
          "is_verified": 0,
          "created_at": "17/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Gestão"
          }
      },
      {
          "id": "0193e2d6-57bf-4bab-8a4c-0498905eb7b0",
          "name": "Sulmaq",
          "short_description": "Project, manufacture and assemble equipment and production lines for slaughtering and de-boning for the meat industry.",
          "description": "Project, manufacture and assemble equipment and production lines for slaughtering and de-boning for the meat industry.",
          "tags": [ ],
          "slug": "sulmaq",
          "is_verified": 0,
          "created_at": "17/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "RS",
          "state": "Rio Grande do Sul",
          "city": "Guaporé",
          "place": "Guaporé - RS",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "01a5e05f-16fa-4ab4-80e7-1a0522721892",
          "name": "Juridoc",
          "short_description": "Online law services for small and medium businesses.",
          "description": "Online law services for small and medium businesses.",
          "tags": [ ],
          "slug": "juridoc",
          "is_verified": 0,
          "created_at": "17/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Gestão"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/2a7e396746c43c0a88436b224d808adbe73c62f5.opt.png",
          "founded_at": "30/09/2012",
          "id": "01bdd060-faa3-49cf-9646-65b0185acf00",
          "name": "CloudMenu",
          "short_description": "Restaurant Menu Aggregator",
          "description": "CloudMenu is a platform for restaurants to publish their menus in a beautiful, interactive, geolocated and social way.  CloudMenu provides a new way of interacting with menus. Access the best restaurants nearby and find exactly what you want to eat. Look up prices and pictures of the dishes, share with friends and add comments and notes to every dish of the restaurant.   CloudMenu provides analytical data for restaurants, gathering their customer's profiles and matching dishes to their nationality, age and gender.   CloudMenu translates, for a annually fee paid by the restaurants, the menus to many languages, facilitating the ordering experience for foreigns and tourists.",
          "tags": [ ],
          "slug": "cloudmenu",
          "is_verified": 0,
          "created_at": "11/04/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Produtos de Consumo"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/b020fb9b16ad92375b06da35342c2c18c4b675c7.opt.png",
          "founded_at": "31/05/2017",
          "id": "01c18102-994b-4cb3-bf74-585002d5a930",
          "name": "Place'n Pepper",
          "short_description": "Place'n Pepper is a booking platform for parties and events places.",
          "description": "Place'n Pepper is a booking platform for parties and events places. It provides customers with access to a network of unique and carefully selected spaces, reducing the booking process to minutes and uncomplicating the current fragmented market.  The company was founded on June 2017 and is based in São Paulo, Brazil.",
          "tags": [ ],
          "slug": "placen-pepper-2",
          "is_verified": 0,
          "created_at": "11/04/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Vendas e Marketing"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/tunad-moment-marketing.png",
          "id": "01c940ec-ca43-4da5-bcd5-461356f89c26",
          "name": "TunAd - Moment Marketing",
          "description": "TunAd é uma plataforma de moment marketing que melhora o ROI de campanhas publicitárias online e off-line. Através do monitoramento e detecção de conteúdos de TV (propagandas e contextos), eventos esportivos (gol, início/intervalo/final de jogo) e eventos climáticos (mudanças climáticas), ativamos campanhas na internet em tempo real, ganhando os lances de palavras chaves nesses momentos mais relevantes de interesse do consumidor. Essa estratégia de investir nos momentos mais levantes traz aumento médio de 85% de CTR.",
          "tags": [ ],
          "slug": "tunad-moment-marketing",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "01ce887d-a097-4c74-b4cb-cb7c7e060965",
          "name": "appsclube.com",
          "description": "Com o www.appsclube.com você pode compartilhar e descobrir os melhores aplicativos para smartphone (Iphone e Android) e tablets (Ipad e Android) de acordo com o seu perfil. De acordo com os seus aplicativos cadastrados, rede social, cadastro e navegação, nosso algoritmo irá recomendar os melhores aplicativos para o seu smartphone e tablet. Tudo isto sem pagar nada! ",
          "tags": [ ],
          "slug": "appsclubecom",
          "is_verified": 0,
          "created_at": "05/04/2012",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "01dbf871-6f05-4f31-8a1b-5e2370fff419",
          "name": "Filaweb",
          "description": "A filaweb é pra acabar com filas em bancos, clinicas e qualquer area que deseja um melhor atendimento ao seu cliente. Ela consiste em um software que quando você entra na fila ele manda uma mensagem com o posicionamento na fila e o tempo estimado que sera atendido, com isso você não precisa estar no local da fila para esperar o atendimento, pois quando estiver chegando sua vez ele lhe mandara outra mensagem lhe avisando que esta chegando sua vez para você retornar ao atendimento. Isso acabara com aquelas aglomerações em clinicas, bancos e outros seguimentos.\r\n\r\n",
          "tags": [ ],
          "slug": "filaweb",
          "is_verified": 0,
          "created_at": "10/10/2014",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/beoog.png",
          "id": "01f885d6-8201-42eb-8648-1899c5262131",
          "name": "Beoog",
          "description": "A Beoog é a plataforma de empregos, estágios e aprimoramento profissional exclusiva aos profissionais de arquitetura. Feita por arquitetos que atuam há anos e entendem das relações entre profissionais, escritórios e empresas.",
          "tags": [ ],
          "slug": "beoog",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "01ff9967-9303-4d7f-b0a7-331ceda12abd",
          "name": "Shopping Náutico ",
          "description": "O SHOPPING NÁUTICO é o mais completo, moderno e eficiente portal de classificados de embarcações da internet brasileira. Com a mais alta tecnologia em site de busca, reunimos os melhores profissionais em tecnologia da informação e idealizamos nesse site onde buscamos simultaneamente “Qualidade de serviço – veracidade nas informações – segurança de dados”.\r\n\r\nO portal reúne em um só lugar interessados em comprar e vender embarcações, bem como outros produtos e serviços.\r\n\r\n",
          "tags": [ ],
          "slug": "shopping-nautico",
          "is_verified": 0,
          "created_at": "23/02/2014",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/pxghj0nvawamkbljvofo.opt.png",
          "id": "0202ae4b-57ba-46a2-b60f-f97af504a516",
          "name": "Nativoo",
          "tags": [ ],
          "slug": "nativoo",
          "is_verified": 0,
          "created_at": "17/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Eventos e Turismo"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/fe67af22ae459311a6ad64a361242cb2e0dd0f24.opt.png",
          "id": "020335b5-aab2-4a4a-b639-45e2f1803716",
          "name": "Play Sports App",
          "short_description": "Play Sports App is a sports and fitness platform.",
          "description": "Play Sports App is a sports and fitness platform.",
          "tags": [ ],
          "slug": "play-sports-app",
          "is_verified": 0,
          "created_at": "11/04/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Saúde e Bem-estar"
          }
      },
      {
          "id": "0206cc0b-2faa-4236-a45d-8fc066f92ae6",
          "name": "LZT",
          "short_description": "tecnologia de gestão empresarial para o varejo",
          "description": "tecnologia de gestão empresarial para o varejo",
          "tags": [ ],
          "slug": "lzt",
          "is_verified": 0,
          "created_at": "17/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Gestão"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/eb23b06e86db4d17997c9c5768d0280beab4155c.opt.png",
          "founded_at": "31/07/2018",
          "id": "0209fad6-1c2e-403b-8ee9-d37c9bac38e1",
          "name": "I'm Health",
          "short_description": "I'm Health adds value in the relationship between customer and service provider in the health area.",
          "description": "I'm Health is the missing solution in the relationship between customers and suppliers of Health Products and Services. We enable the increase of the customer base of the suppliers and approach the customer of the best product or service, providing greater quality, safety, and reduced cost.",
          "tags": [ ],
          "slug": "im-health-2",
          "is_verified": 0,
          "created_at": "11/04/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Nova Lima",
          "place": "Nova Lima - MG",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Saúde e Bem-estar"
          }
      },
      {
          "id": "021dd3d5-b9b8-406e-b575-db6606a94824",
          "name": "Troca Digital",
          "description": "Troca Digital é uma plataforma de troca de jogos de Playstation 3 e Xbox 360. Os usuários adicionam seus jogos e desejos nas listas e encontram as melhores oportunidades de troca através de buscas ou recomendações personalizadas de acordo com o perfil de cada usuário.",
          "tags": [ ],
          "slug": "troca-digital",
          "is_verified": 0,
          "created_at": "12/12/2011",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/194064d519efbad497f67300d246997a4e61768c.opt.png",
          "founded_at": "30/09/2017",
          "id": "02364209-8b72-47b6-8f54-a6644a8da294",
          "name": "Todos Destinos",
          "short_description": "Discover the best experiences and feel inspired for your next trip",
          "description": "TodosDestinos.com é um portal de conteúdo sobre destinos, experiências, viagens e entretenimento. Criamos dicas e roteiros que revelam o que é único e especial sobre um lugar, seu povo e sua cultura. TodosDestinos.com é um produto mantido pela startup de tecnologia @COODESH. Procure um destino e sinta-se em casa. Queremos que todas as pessoas viagem por todos os lugares e se sintam acolhidas e bem recebidas. Tenha as melhores e mais intensas experiências de conhecer lugares e pessoas. Contamos com uma equipe criativa e especialista para produzir e revisar todos os conteúdos. Nossa rede de freelancers produz dicas e roteiros baseados em localização incluindo artigos, vídeos, fotografias, ilustrações e animações.",
          "tags": [ ],
          "slug": "todos-destinos-2",
          "is_verified": 0,
          "created_at": "11/04/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Comunicação e Mídia"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/q8wb5bm4f8t7rhwsnvar.opt.png",
          "id": "024060ab-0c55-4764-a811-3a0a71259b32",
          "name": "BR4Games",
          "description": "ADVERGAMES \r\nJogos como ferramentas para divulgar e promover marcas, produtos, organizações ou\r\npontos de vista.\r\nSOCIAL GAMES \r\nJogos integrados com\r\nredes sociais utilizados\r\npara distribuir idéias de forma viral.",
          "tags": [ ],
          "slug": "br4games",
          "is_verified": 0,
          "created_at": "27/06/2011",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "024bdfc6-693d-40d6-881b-3ed395fcd72e",
          "name": "Sapiens Solutions",
          "description": "> 1ª Empresa Mineira a prestar Consultoria em Redução de Despesas.\r\n> Desenvolvemos Soluções Web em Cloud Computing\r\n> Desenvolvemos Aplicações sob Demanda",
          "tags": [ ],
          "slug": "sapiens-solutions",
          "is_verified": 0,
          "created_at": "20/05/2011",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "024f6e6b-8c3b-473a-bc5d-9054a9b3f307",
          "name": "Bolacha Entretenimento",
          "description": "A Bolacha nasceu da necessidade de pensar, construir e aperfeiçoar novos caminhos para a música. No cenário atual, onde os antigos modelos não conseguem acompanhar a explosão da comunicação em rede, nosso objetivo é participar da evolução da produção artística e potencializar a distribuição desse conteúdo. Lado a lado com artistas e consumidores de música, desenvolvemos alternativas p um mercado em transformação. Criada e gerenciada por uma equipe ligada diretamente a música, a empresa aposta na liberdade artística e na criação de formatos dinâmicos p trabalhar as necessidades de cada projeto",
          "tags": [ ],
          "slug": "bolacha-entretenimento",
          "is_verified": 0,
          "created_at": "08/06/2011",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "RJ",
          "state": "Rio de Janeiro",
          "city": "Rio de Janeiro",
          "place": "Rio de Janeiro - RJ",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/araca-filmes.png",
          "id": "02679f64-fff8-4f8f-9d07-49f353ef9fea",
          "name": "Araçá Filmes",
          "company_name": "Araçá Filmes",
          "description": "A Araçá Azul é uma produtora e distribuidora de filmes. E está lançando uma campanha inovadora para levar mais brasileiros ao cinema. Participem: http://www.kickante.com.br/campanhas/araca-filmesleve-mais-brasileiros-ao-cinema",
          "tags": [ ],
          "slug": "araca-filmes",
          "is_verified": 0,
          "created_at": "22/05/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "0270d27b-a6c7-4e11-81f5-c49cf178a9e7",
          "name": "Pingmind",
          "description": "Pingmind foca em prover uma infra-estrutura educacional on-line para professores e empresas que querem ensinar e compartilhar conhecimento aos estudantes que procuram conteúdo de qualidade e serem bonificados por isso.",
          "tags": [ ],
          "slug": "pingmind",
          "is_verified": 0,
          "created_at": "27/12/2012",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "PE",
          "state": "Pernambuco",
          "city": "Recife",
          "place": "Recife - PE",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/bitcast-engenharia-e-sistemas-embarcados.png",
          "id": "02730d7f-652e-495f-a102-c7fb7d2507d8",
          "name": "Bitcast Engenharia e Sistemas Embarcados",
          "description": "Empresa  voltada para o desenvolvimento de projetos de engenharia com foco em sensoreamento remoto em redes locais e conectividade (IOT).",
          "tags": [ ],
          "slug": "bitcast-engenharia-e-sistemas-embarcados",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "ES",
          "state": "Espírito Santo",
          "city": "Vitória",
          "place": "Vitória - ES",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/10/Hit Cursos.png",
          "founded_at": "31/12/2013",
          "id": "02733d6a-658f-4607-8c27-80e9b98f6e73",
          "name": "Hit Cursos",
          "company_name": "Hit Cursos",
          "short_description": "O Hit Cursos é uma plataforma de Ensino a Distância possibilitando professores/escolas/universidades e produtores de cursos online a disponibilizarem ",
          "description": "O Hit Cursos é uma plataforma de Ensino a Distância possibilitando professores/escolas/universidades e produtores de cursos online a disponibilizarem e venderem seus cursos na internet.",
          "tags": [ ],
          "slug": "hit-cursos",
          "is_verified": 0,
          "created_at": "22/05/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Uberaba",
          "place": "Uberaba - MG",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "TIC e Telecom"
          }
      },
      {
          "founded_at": "01/01/2019",
          "id": "027bba30-eac2-455a-af38-2d7d614e93a3",
          "name": "H&T Health and Timeline",
          "short_description": "Health & Timeline App, (H&T)  é uma Startup que organiza e torna acessível a pacientes e profissionais um Prontuário Medico Online",
          "description": "Health & Timeline App, (H&T) é uma Startup que organiza e torna acessível a pacientes e profissionais de saúde \nEste aplicativo oferece mais que um banco de dados, pois além da grande capacidade de armazenamento de dados relativos a procedimentos, programas de saúde, etc.; organiza de forma integrada o quadro geral, uma Linha do Tempo da Saúde dos pacientes, facilitando a análise por parte dos profissionais e adesão ao tratamento médico.\num Prontuário Online Pessoal, um Histórico de Saúde Individual, no qual o usuário registra e atualiza informações sobre sua situação de saúde, dentre as quais: procedimentos realizados, resultados de exames, histórico familiar de doenças; montando um perfil único através de um aplicativo.\n",
          "tags": [
              "Health",
              "Saúde",
              "Tecnologia",
              "Healtech",
              "Agendamento",
              "Consulta"
          ],
          "slug": "h-t-health-and-timeline",
          "is_verified": 0,
          "created_at": "06/11/2019",
          "updated_at": "07/11/2019",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "02ab8949-3912-48de-91e7-3385c4864e54",
          "name": "Mawdoo3",
          "short_description": "Mawdoo3 is the Jordanian startup modelling",
          "description": "Mawdoo3 is the Jordanian startup modelling",
          "tags": [ ],
          "slug": "mawdoo3",
          "is_verified": 0,
          "created_at": "17/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "02b4d942-75a1-4acb-b408-31e449b0954f",
          "name": "Reclame Aqui",
          "tags": [ ],
          "slug": "reclame-aqui",
          "is_verified": 0,
          "created_at": "21/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "MS",
          "state": "Mato Grosso do Sul",
          "city": "Campo Grande",
          "place": "Campo Grande - MS",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "02bad422-1be2-4ae8-8e29-2b8064d8ec85",
          "name": "Vinhos Recomendados",
          "description": "Vinhos Recomendados uma loja virtual de vinhos que ajuda o consumidor a fazer a melhor escolha. Como um vinho só é bom se for adequado ao que o consumidor procura, o site possibilita que as pessoas encontrem exatamente o que estejam buscando. \r\n\r\nAgora o consumidor não precisa mais ser um expert para comprar bons vinhos. Com a nossa ajuda fica fácil fazer a melhor escolha. Vinhos Recomendados, a loja que ajuda você a comprar os melhores vinhos.",
          "tags": [ ],
          "slug": "vinhos-recomendados",
          "is_verified": 0,
          "created_at": "10/04/2012",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/elettrocrafts-aerospace-industry.png",
          "id": "02bb9596-704e-41fc-b911-6504955b1a27",
          "name": "ElettroCrafts Aerospace Industry",
          "short_description": "Aerospace Industry to develop aircrafts to personal use",
          "description": "Aerospace Industry to develop aircrafts to personal use",
          "tags": [ ],
          "slug": "elettrocrafts-aerospace-industry",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "02c19ead-e616-44d2-ad9a-85ef978ee6ae",
          "name": "Lance Certo",
          "tags": [ ],
          "slug": "lance-certo",
          "is_verified": 0,
          "created_at": "30/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "AC",
          "state": "Acre",
          "city": "Rio Branco",
          "place": "Rio Branco - AC",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/ppgqc1kjlby2eziffrkc.opt.png",
          "id": "02c6381c-cb63-4a9a-a2a8-4f069b5b5a18",
          "name": "GAFIT - Soluções em Automação",
          "description": "Para você que possui um comércio e preocupa-se com o consumo de luz, ou para você que viaja com frequência e pretende manter o seu patrimônio a salvo. A GAFIT fornece um produto simples e inteligente de controle de iluminação e de aparelhos eletrônicos por meio de smartphones, possibilitando controlar e agendar o uso da iluminação ou de aparelhos eletrônicos. Equipe composta por 3 sócios, com conhecimentos computacionais desde hardware até software mobile e web.",
          "tags": [ ],
          "slug": "gafit-solucoes-em-automacao",
          "is_verified": 0,
          "created_at": "11/06/2014",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Belo Horizonte",
          "place": "Belo Horizonte - MG",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "02d7cf81-6300-4229-a8c0-655b8774cfc4",
          "name": "Sincronicidade Startup",
          "description": "Para o desenvolvimento e a maturação de um negócio há fatores que dependem de um plano estratégico adequado , e os pilares desse método são baseados nos conceitos de resiliência ,sinergia, sincronia . Entende-se que fatores externos e internos aferem diretamente nas organizações e em toda sociedade. Isto é há um zonalidade que pode-se antever contra possíveis turbulências de mercado. ",
          "tags": [ ],
          "slug": "sincronicidade-startup",
          "is_verified": 0,
          "created_at": "19/02/2014",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "RJ",
          "state": "Rio de Janeiro",
          "city": "Rio de Janeiro",
          "place": "Rio de Janeiro - RJ",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/081b2c943c9f967665abd99858ad76457f8b3b4b.opt.png",
          "founded_at": "31/12/2010",
          "id": "02ef53bf-b9d7-4540-ba72-3ab3aa5d9718",
          "name": "Piao",
          "short_description": "Piao is a virtual platform that connects people, businesses, and non-profit organizations with one another.",
          "description": "Piao is a virtual platform that connects people, businesses, and non-profit organizations with one another maximizing the impact of projects and enhancing the social and environmental performance.  The platform helps people and companies choose, invest, and work with projects and organizations, and have greater access to financial and human resources.",
          "tags": [ ],
          "slug": "piao",
          "is_verified": 0,
          "created_at": "11/04/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Finanças"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/9a66f71ff09e23e19b838236b9db7475a26b4de2.opt.png",
          "founded_at": "31/12/2009",
          "id": "0306fac9-dd9b-45ee-b781-1b0177b25234",
          "name": "Eu Compraria",
          "short_description": "Eu Compraria is a online store where you can find everything a geek like to have.",
          "tags": [ ],
          "slug": "eu-compraria",
          "is_verified": 0,
          "created_at": "11/04/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Internet"
          }
      },
      {
          "id": "03082f26-92ca-4edc-a4dd-7d4586210a9f",
          "name": "BeerPro",
          "description": "Somos uma startup especialista em software cervejeiro que gostaria de mudar a forma como microcervejarias automatizam e controlam suas produções.\r\nDe forma bem prática e específica, o BeerPro visa cobrir os processos de estoque, relacionamento com clientes, melhoria de processos internos e finanças.",
          "tags": [ ],
          "slug": "beerpro",
          "is_verified": 0,
          "created_at": "21/11/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "RS",
          "state": "Rio Grande do Sul",
          "city": "Porto Alegre",
          "place": "Porto Alegre - RS",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/flingo.png",
          "id": "03176786-e94b-4bab-a50c-a3e2872f0aad",
          "name": "Flingo",
          "short_description": "O Flingo atua no mercado de turismo, procuramos o melhor hotel na região que você precisa, pelo menor preço.",
          "description": "O Flingo atua no mercado de turismo, procuramos o melhor hotel na região que você precisa, pelo menor preço.",
          "tags": [ ],
          "slug": "flingo",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Belo Horizonte",
          "place": "Belo Horizonte - MG",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "031efc2a-470f-452e-ada7-0c7a0c677079",
          "name": "W2Mobi",
          "description": "Criar uma agenda na Cloud possibilitando fazer um agendamento prévio de qualquer lugar aonde você esteja via smartphone, ipod e ipad à qualquer hora do dia e da noite. Ex: Procura disponibilidade de horário no salão mais próximos e seus serviços disponíveis (ex: cortes) e consultórios médicos e exames.",
          "tags": [ ],
          "slug": "w2mobi",
          "is_verified": 0,
          "created_at": "27/08/2012",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "03218228-7c29-4ed4-b3d3-fab6df6391a0",
          "name": "Zynk",
          "tags": [ ],
          "slug": "zynk",
          "is_verified": 0,
          "created_at": "17/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/gmqrytdrgvhl3d0aktmc.opt.png",
          "id": "0323a974-df15-4685-887f-79e4fdf3338e",
          "name": "Startup English",
          "tags": [ ],
          "slug": "startup-english",
          "is_verified": 0,
          "created_at": "21/06/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_model": "SaaS",
          "uf": "RJ",
          "state": "Rio de Janeiro",
          "city": "Rio de Janeiro",
          "place": "Rio de Janeiro - RJ",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Educação"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/hubblefy.png",
          "id": "0336871e-4754-46c4-a01c-28397cca2d65",
          "name": "HUBBLEFY",
          "description": "Hubblefy é um App que encapsula informações relevantes de diversas fontes para evitar reenvio e duplicidade, fazendo com que empresas acima de 100 funcionários ou de crescimento rápido, reduzam mais de 70% suas caixas de entrada e aumentem em 10x a velocidade de engajamento dos colaboradores em processos, produtos e onboarding no time.",
          "tags": [ ],
          "slug": "hubblefy",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "034c9c5d-03c6-498e-a3d9-25158a188255",
          "name": "KMM",
          "tags": [ ],
          "slug": "kmm",
          "is_verified": 0,
          "created_at": "21/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "PR",
          "state": "Paraná",
          "city": "Ponta Grossa",
          "place": "Ponta Grossa - PR",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "036a43c6-a95b-4e3c-a86c-1f0453368a4d",
          "name": "Trajeto Escola",
          "description": "O site www.trajetoescola.com.br trata-se de um serviço de busca de transporte escolar que surgiu da oportunidade identificada na necessidade social e paterna que tem pouco tempo disponível para buscar informações suficientes para contratar um bom serviço de transporte escolar. O site vem facilitar a aproximação entre pais e o transporte escolar de forma simples e amigável via internet, proporcionando uma fonte de divulgação especifica e segura sobre o transporte escolar com qualidade e segurança na informação. ",
          "tags": [ ],
          "slug": "trajeto-escola",
          "is_verified": 0,
          "created_at": "31/05/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "036e4873-5c49-425c-bfcc-2a4a1c41f48f",
          "name": "MinDSS",
          "short_description": "Software de inteligência de Negócios e análise de dados para apoio a tomada de decisão e promoção do lucro em micro, pequenas e médias empresas.",
          "description": "Software de inteligência de Negócios e análise de dados para apoio a tomada de decisão e promoção do lucro em micro, pequenas e médias empresas.",
          "tags": [ ],
          "slug": "mindss",
          "is_verified": 0,
          "created_at": "17/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_model": "SaaS",
          "uf": "SP",
          "state": "São Paulo",
          "city": "Ribeirão Preto",
          "place": "Ribeirão Preto - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/ser.png",
          "id": "0379b35d-9be3-4241-b7e6-8cae73f52f64",
          "name": "SER",
          "description": "A Solução Casting, maximiza o desempenho da sua equipe de vendas monitorando indicadores, promovendo um processo aberto de feedback, desenvolvendo-os e criando campanhas para disputa e reconhecimento",
          "tags": [ ],
          "slug": "ser",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "SP",
          "state": "São Paulo",
          "city": "Campinas",
          "place": "Campinas - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "037ab3af-3237-4456-bd5a-7f8f86debce9",
          "name": "MEDICSYS",
          "company_name": "MEDICSYS",
          "tags": [ ],
          "slug": "medicsys",
          "is_verified": 0,
          "created_at": "22/05/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/todo-item.png",
          "id": "037b0b8f-358d-4492-981b-0a7ef5f2c719",
          "name": "Todo Item",
          "description": "Startup criada afim de solucionar problemas de cadastro de itens de material de construção, auxiliando pesquisa, orçamento e projetos.",
          "tags": [ ],
          "slug": "todo-item",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "RJ",
          "state": "Rio de Janeiro",
          "city": "Rio de Janeiro",
          "place": "Rio de Janeiro - RJ",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "0389c53f-2b01-4136-8216-2b5b8adecef4",
          "name": "IPosition",
          "description": "Serviremos de ponte entre transportadora e entregador. Diminuindo o tempo de contratação e aumentando oferta de trabalho para entregadores. A transportadora faz um cadastro básico em nosso site e divulga as vagas. O entregador receberá vagas no e-mail e poderá consultar no site e candidatar-se. Com todas as partes de acordo, a IPosition por meio de geoprocessamento ajudará a empresa a monitorar sua frota, tendo apenas o entregar com um smartphone com android e o GPS mandando informações pela internet. A empresa por meio de um painel verá em tempo real a localização de todas suas entregas.",
          "tags": [ ],
          "slug": "iposition",
          "is_verified": 0,
          "created_at": "13/11/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/94ff5a9a7618e14233abf3ca8e83bfae3531344a.opt.png",
          "founded_at": "02/08/2010",
          "id": "038a9f93-2b04-4cb1-8c23-31d965fb99cf",
          "name": "AureoSoft",
          "short_description": "AureoSoft mission is a software company specializing in high technology and creative design.",
          "description": "AureoSoft mission is to be a software company of high technology and creative design. Our priorities and main targets are directed towards Education, Health and Technological Development.  AureoSoft develops software applications that aim at improving the ergonomic conditions of computer use.   Our scientific team creates software for people with visual impairment, computer vision syndrome, dyslexia, and attention deficit-hyperactivity disorder.   AureoSoft also emphasizes the development of presentation tools for live meetings and web conferences (with desktop sharing), as well as educational and multimedia software.",
          "tags": [ ],
          "slug": "aureosoft",
          "is_verified": 0,
          "created_at": "11/04/2019",
          "updated_at": "05/11/2019",
          "employees": "11-20",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Educação"
          }
      },
      {
          "profile_image": "https://firebasestorage.googleapis.com/v0/b/cubo-platform.appspot.com/o/logos%2FSocialbase%2F1512997990890-logo-sb.png?alt=media&token=dfd8f0b1-95e4-46ae-bae7-c9586711d3f8",
          "founded_at": "31/12/2010",
          "id": "038fa514-212c-4df8-aae7-48dbe3e52846",
          "name": "Socialbase",
          "description": "Fundada em 2011, a SocialBase desenvolve e fornece uma rede social corporativa e serviços de consultoria que são referência de comunicação interna para empresas. Com a SocialBase, os clientes conseguem ser mais produtivos, com colaboradores mais integrados e engajados.\r\n\r\nSeu portfólio abrange o armazenamento e disponibilidade da solução, além da consultoria na implantação, customização, integração com sistemas legados, suporte e treinamento.",
          "tags": [ ],
          "slug": "socialbase",
          "is_verified": 0,
          "created_at": "25/06/2018",
          "updated_at": "05/11/2019",
          "employees": "11-20",
          "uf": "SC",
          "state": "Santa Catarina",
          "city": "Florianópolis",
          "place": "Florianópolis - SC",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "TIC e Telecom"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/9b56862851043764f8ca068b95db5178015117f9.opt.png",
          "founded_at": "26/07/2018",
          "id": "039ebdad-95ea-4ec5-8259-7971140069db",
          "name": "Fanclic",
          "short_description": "Mobile app and content distribution platform",
          "description": "Fanclic is a content distribution platform: websites, blogs, youtubers, instagrammers can use Fanclic as a way to organically reach their fans and to monetize their fanbases.  Users install the Fanclic mobile app, follow their favorite creators and receive push notifications when there is new content. No automatic filters, no restritions of any kind.  Fanclic shows non-intrusive, user-friendly ads and share the advertising revenue with its content partners.",
          "tags": [ ],
          "slug": "fanclic",
          "is_verified": 0,
          "created_at": "11/04/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Internet"
          }
      },
      {
          "id": "03a2c7e2-ef3f-4586-935a-8073b6d04182",
          "name": "Policard",
          "short_description": "Payment solutions",
          "description": "Payment solutions",
          "tags": [ ],
          "slug": "policard",
          "is_verified": 0,
          "created_at": "17/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Uberlândia",
          "place": "Uberlândia - MG",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Finanças"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/573be3c5ce90e264574fe38c8e197f2fc0da912d.opt.png",
          "founded_at": "31/12/2010",
          "id": "03af95b2-3355-4c20-b431-54745161722a",
          "name": "imageeo",
          "short_description": "DAM via SaaS for Marketing Teams",
          "description": "Digital Asset Management (DAM) via SaaS for Marketing teams  The easiest way for marketing teams to organize and distribute images and digital assets.  The Imageeo consists of a SaaS for managing and distributing digital asset-specific marketing. A tool in which content producers (like designers, photographers, writers...) can store and categorize your files as a repository, since the management of marketing professionals can comment, rate, approve and distribute the files.",
          "tags": [ ],
          "slug": "imageeo",
          "is_verified": 0,
          "created_at": "11/04/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Comunicação e Mídia"
          }
      },
      {
          "id": "03b875dc-985a-45fb-8c29-fd50590b8275",
          "name": "Já Entendi",
          "tags": [ ],
          "slug": "ja-entendi",
          "is_verified": 0,
          "created_at": "21/06/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_model": "Outros",
          "uf": "PR",
          "state": "Paraná",
          "city": "Curitiba",
          "place": "Curitiba - PR",
          "is_active": 1,
          "badges": [
              {
                  "name": "500 Startups",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_500.png"
              }
          ],
          "segments": {
              "primary": "Educação"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/2f7c67576248d91c4e014c8b377e520ac58448cd.opt.png",
          "founded_at": "31/12/2016",
          "id": "03c52b1b-3d3a-4768-81ed-d2d537076181",
          "name": "Clube Greens",
          "short_description": "Clube Greens is a platform that enables transactions of healthy and conscientious products between sellers and buyers.",
          "description": "Clube Greens is a platform that enables transactions of healthy and conscientious products between sellers and buyers.",
          "tags": [ ],
          "slug": "clube-greens",
          "is_verified": 0,
          "created_at": "11/04/2019",
          "updated_at": "05/11/2019",
          "employees": "11-20",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Saúde e Bem-estar"
          }
      },
      {
          "id": "03ca943f-4ee1-4fbf-a402-ba8bef7e654f",
          "name": "Wooh!",
          "description": "Somos uma empresa de compras coletivas. Acreditamos no futuro do segmento com acomodações e segmentações. Por isso criamos o Wooh!, especializado em crianças e adolescentes.  Nosso objetivo é oferecer as melhores ofertas ao público mais exigente: os pais. Investimos em canais de relacionamento (on line, posts..) e buscamos parceiros estratégicos e confiáveis. Recentemente fomos escolhidos pelo CompraFácil.com para sermos o primeiro site de compras coletivas a vender seus produtos fora da holding.  Desenhamos em conjunto um modelo de ofertas e continuamos a pensar em novas estratégias de venda.",
          "tags": [ ],
          "slug": "wooh",
          "is_verified": 0,
          "created_at": "07/11/2011",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "RJ",
          "state": "Rio de Janeiro",
          "city": "Rio de Janeiro",
          "place": "Rio de Janeiro - RJ",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "03f43c33-bb18-462e-84f1-ca77fa4982d3",
          "name": "Unidas SA",
          "short_description": "Unidas provides fleet management and vehicle rental solutions.",
          "description": "Unidas provides fleet management and vehicle rental solutions.",
          "tags": [ ],
          "slug": "unidas-sa",
          "is_verified": 0,
          "created_at": "17/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/ogjvgxmnamgjc8pszhbk.opt.png",
          "id": "03fd333c-cc84-4fb8-9016-e19fc7763dea",
          "name": "Gorlami",
          "tags": [ ],
          "slug": "gorlami",
          "is_verified": 0,
          "created_at": "21/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "PE",
          "state": "Pernambuco",
          "city": "Recife",
          "place": "Recife - PE",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "042e3270-19ef-49b7-8996-22de68cca83e",
          "name": "S.P.In",
          "description": "O SPIn irá atuar em soluções para o agronegócio. Oferecerá aos seus clientes serviços de monitoramento patológico e/ou climáticos de sua plantação. Os clientes terão acesso á dados climáticos e de risco patológicos do seu cultivo, oferecendo métricas para operação e otimização de sua produção. Também oferecerá opcionalmente serviços de automatização de irrigação, sistemas de proteção para eventos climáticos desfavoráveis á produção e estimativas de safra.",
          "tags": [ ],
          "slug": "spin-2",
          "is_verified": 0,
          "created_at": "12/05/2014",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Santa Rita do Sapucaí",
          "place": "Santa Rita do Sapucaí - MG",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "042f9841-0f25-47c1-b2e2-e39937ec27e3",
          "name": "2DO Soluções Digitais",
          "description": "Entregamos com qualidade dentro do prazo desejado.\r\n\r\nQueremos ser o braço direito das Agências e Corporações.\r\n\r\nAssim que pensamos dentro da 2DO.",
          "tags": [ ],
          "slug": "2do-solucoes-digitais",
          "is_verified": 0,
          "created_at": "15/11/2011",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "0431714a-b256-4bb7-a75a-8d13e8f3262f",
          "name": "PergunteDireito.com.br",
          "description": "O Pergunte Direito aplica regras de conduta que afastam conteúdo de baixa qualidade. O formato da pergunta já permite verificar se ela pode ser respondida ou se a sua falta de objetividade provocará discussões improdutivas. Isto elimina a necessidade de conferir o nível acadêmico dos participantes, posto que os questionamentos que individualizam o problema são capazes de gerar soluções rápidas para os problemas enfrentados por juristas e estudantes.\r\n\r\nwww.perguntedireito.com.br",
          "tags": [ ],
          "slug": "perguntedireitocombr",
          "is_verified": 0,
          "created_at": "06/11/2012",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/5d04014ab35acffb7f9f4ceddb3dd415e4ddd4ea.opt.png",
          "founded_at": "19/08/2013",
          "id": "043d3893-0bd2-4523-b197-c4de614e18e3",
          "name": "MaisApp",
          "short_description": "MaisApp is an innovative application aimed at promoting promotions, which reach the user in a practical way.",
          "description": "MaisApp is an innovative application aimed at promoting promotions, which reach the user in a practical way. From your smartphone or tablet you can download promotion coupons from participating merchants.",
          "tags": [ ],
          "slug": "maisapp",
          "is_verified": 0,
          "created_at": "11/04/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Juiz de Fora",
          "place": "Juiz de Fora - MG",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "TIC e Telecom"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/13be72a02f5d71f88dd4bbe83a16c4ac240a6a83.opt.png",
          "id": "0462221b-7349-472c-b940-ce81049c8d6a",
          "name": "Ad Verum",
          "short_description": "Ad Verum is a provider of online preparatory courses for public examinations and Brazilian Bar Association (OAB) examinations.",
          "description": "Ad Verum is a provider of online preparatory courses for public examinations and Brazilian Bar Association (OAB) examinations. Ad Verum offers mock exams, study plans, coaching services, and detailed resources.",
          "tags": [ ],
          "slug": "ad-verum",
          "is_verified": 0,
          "created_at": "11/04/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "PE",
          "state": "Pernambuco",
          "city": "Recife",
          "place": "Recife - PE",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Educação"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/augmentecture-inc..png",
          "id": "047f7e9a-bd32-4e9a-8cff-1fd0aef1778f",
          "name": "AUGMENTECTURE INC.",
          "description": "O AUGmentecture é um aplicativo que simplifica toda a configuração de realidade aumentada, impressão e o processamento dos modelos. Pense nisso como imprimir um PDF, mas seria no formato de realidade aumentada.\n\nA dor atual na indústria de design:\nAtualmente, a comunicação de projeto e a colaboração com os usuários finais são demoradas e caras. Compartilhar ideias com clientes não é eficiente e a intenção do design interativo com os contratados é limitada. Transferir o modelo de design para o formato de realidade aumentada é complicado e consome tempo.\n\nA solução\nO AUGmentecture agiliza a configuração, o upload e o processamento dos modelos em realidade aumentada.",
          "tags": [ ],
          "slug": "augmentecture-inc",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "04870d81-682a-408f-b4ed-447d817a3586",
          "name": "GuiaCultura",
          "description": "O GuiaCultura é uma publicação on-line que pretende promover os melhores eventos públicos divulgados no Facebook e eventos cadastrados no próprio site. Nele, os eventos são separados por filtros inteligentes de data, categoria e cidade, sendo possível também visualizá-los por geolocalização.\r\n \r\nO objetivo maior do projeto é valorizar a cultura local, através de um canal de comunicação ágil, dinâmico e social, trazendo recomendações de amigos, comentários e informações úteis sobre cada evento.",
          "tags": [ ],
          "slug": "guiacultura",
          "is_verified": 0,
          "created_at": "10/04/2012",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/daff4e89c0dfb4bbd6830dd77291cc6b742bd384.opt.png",
          "founded_at": "30/11/2014",
          "id": "04988aee-e332-42e1-be89-c8ee2b3b274f",
          "name": "Goleiro de Aluguel",
          "short_description": "Goleiro de Aluguel develops mobile application and an online platform that connects athletes to football teams, and goalkeepers.",
          "description": "Goleiro de Aluguel develops mobile application and an online platform that connects athletes to football teams, and goalkeepers.",
          "tags": [ ],
          "slug": "goleiro-de-aluguel",
          "is_verified": 0,
          "created_at": "11/04/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "PR",
          "state": "Paraná",
          "city": "Curitiba",
          "place": "Curitiba - PR",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Mobile"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/fbed77ziixpvmu3lwreh.opt.png",
          "id": "04b24207-38e8-413b-acf9-e86cac440b03",
          "name": "StudioY",
          "description": "StudioY ou para os que já conhecem nosso trabalho e gostam da nossa agência a \"Y\" vem buscando mudar o mercado web com um formato de agência diferente e de muita superação, onde sua equipe é formada por jovens espalhados por todos os estados do Brasil e ser composta por literalmente jovens de 18 a 19 anos. Mantendo nosso ditado interno e o nosso slogan vamos aos poucos cativando e mostrando para as pessoas e os clientes que a geração Y vem para substituir de vez as antigas formas e empresas.",
          "tags": [ ],
          "slug": "studioy",
          "is_verified": 0,
          "created_at": "23/03/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "RN",
          "state": "Rio Grande do Norte",
          "city": "Natal",
          "place": "Natal - RN",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/c898ee595e7f4a1de39ecf1160e4c85fca0512b4.opt.png",
          "founded_at": "18/05/2017",
          "id": "04b5a627-181a-43ad-ba86-eccf3aed892e",
          "name": "Drafteam",
          "short_description": "Drafteam is a fantasy sports platform that is changing the way fans engage with live matches.",
          "description": "Drafteam is a fantasy sports platform that is changing the way fans engage with live matches. Primarily focused on Brazil/LatAm markets, we're building a new experience for millions of sports fans across the globe.  Drafteam - Seja o dono do jogo.",
          "tags": [ ],
          "slug": "drafteam",
          "is_verified": 0,
          "created_at": "11/04/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [
              {
                  "name": "Google for Startups",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_google_for_startups.png"
              }
          ],
          "segments": {
              "primary": "Games"
          }
      },
      {
          "id": "04b647f9-8b2f-4db5-a764-71669de494cd",
          "name": "IG",
          "short_description": "iG - Internet Group - is the largest internet service provider network in Latin America and of of the top portals in Brazil.",
          "description": "iG - Internet Group - is the largest internet service provider network in Latin America and of of the top portals in Brazil.",
          "tags": [ ],
          "slug": "ig",
          "is_verified": 0,
          "created_at": "17/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Internet"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/osyris.png",
          "id": "04cb6d28-4e4d-4669-879a-cd8ad210867e",
          "name": "OSYRIS",
          "short_description": "Microempresa de desenvolvimento de sistemas em nuvem",
          "description": "Microempresa de desenvolvimento de sistemas em nuvem",
          "tags": [ ],
          "slug": "osyris",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "SC",
          "state": "Santa Catarina",
          "city": "Itapoá",
          "place": "Itapoá - SC",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/07c0ead870851f6936714bae6e75b0a431efc94f.opt.png",
          "founded_at": "10/10/2016",
          "id": "04e1f886-10f6-4304-9e0c-18168c213b5b",
          "name": "PetrolApp",
          "short_description": "The real life car game",
          "description": "PetrolApp  encourages automotive culture by offering innovative products and services.   PetrolApp is a mobile application for integration between petrolheads, stores, and events. The platform has more than thirteen thousand registrations throughout the country and our perspective is to serve the more than two million petrolheads in Brazil.",
          "tags": [ ],
          "slug": "petrolapp",
          "is_verified": 0,
          "created_at": "11/04/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Internet"
          }
      },
      {
          "id": "04e33c4b-92a1-45f9-a347-ad87d351b5c6",
          "name": "REDE SOCIAL DE E-COMMERCE PME",
          "description": "O facebook é uma rede social para amigos e cumpre o papel de conectar amigos no mundo todo, o linked-in é uma rede social para profissionais e conecta profissionais do mundo todo, a OXIBIZ chega no mercado para ser a rede social de negócios e nosso objetivo é conectar negócios e fazer você crescer.  http://www.oxibiz.com/sobre/a-oxibiz\r\n",
          "tags": [ ],
          "slug": "rede-social-de-e-commerce-pme",
          "is_verified": 0,
          "created_at": "15/05/2013",
          "updated_at": "05/11/2019",
          "employees": "11-20",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "04e3888e-a25b-428d-81f1-2f3d744cc6a8",
          "name": "Tapps Games",
          "tags": [ ],
          "slug": "tapps-games",
          "is_verified": 0,
          "created_at": "29/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "0500ead9-ed1b-4111-b6cc-eb03e2335088",
          "name": "TesK",
          "description": "O 1° site em 3D da internet: www.tesk.com.br tem uma navegação totalmente diferenciada e divertida! Um local que reúne diversas facilidades à vida dos internautas, onde o usuário sempre economiza ou ganha dinheiro. Criamos e enxergamos tendências de web 3.0 (web semântica) quando ainda estamos entrando na web 2.0. Lá você encontra sites como compras coletivas, trabalhos freelance, classificados e games. Um ambiente onde pode se criar uma publicidade totalmente diferenciada prendendo a atenção do usuário, fugindo da web padrão com seus banners piscando. Um novo modelo para novos tempos!",
          "tags": [ ],
          "slug": "tesk",
          "is_verified": 0,
          "created_at": "24/09/2011",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Bernardo do Campo",
          "place": "São Bernardo do Campo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "05155f1a-7d79-4a1e-a0c4-f883466f53f6",
          "name": "CloudTeam",
          "description": "A CloudTeam adapta os conceitos de cloud (recursos genéricos e elásticos) para o mercado de desenvolvimento de software. É o modelo de outsourcing tradicional, mas com uma equipe inesgotável. Os custos são totalmente controláveis, a qualidade garantida, e o progresso sempre tangível.\r\n\r\nConcorrentes, como o oDesk e Elancer, criaram um mercado para casar clientes com fornecedores de serviço. Mas o trabalho de escolher e negociar com os fornecedores, e o gerenciamento, fica a responsabilidade do contratante. A CloudTeam consegue oferecer o serviço completo e ainda aproveitar do cloud.",
          "tags": [ ],
          "slug": "cloudteam",
          "is_verified": 0,
          "created_at": "07/03/2012",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/zieezo0hlfvhefsx2sid.opt.png",
          "id": "051d1e73-1cbb-4925-bfca-6a81448187e9",
          "name": "Cobre Bem Tecnologia",
          "short_description": "Among the brazilian leaders of payment processing with PCI DSS compliance",
          "description": "Among the brazilian leaders of payment processing with PCI DSS compliance",
          "tags": [ ],
          "slug": "cobre-bem-tecnologia",
          "is_verified": 0,
          "created_at": "17/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Finanças"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/e629e53e9ac9214f62c1639532bf5e2213b9061e.opt.png",
          "founded_at": "31/12/2015",
          "id": "0529d78d-07fb-4cf8-84e7-5b2e33001f84",
          "name": "S!dequest",
          "short_description": "S!dequest develops sites and unique applications for companies that want to offer the best digital experience for their clients.",
          "description": "S!dequest is a startup that works from concept to final product, developing sites and unique applications for companies that want to offer the best digital experience for their clients. We create and manage development and design teams for companies and startups.",
          "tags": [ ],
          "slug": "sdequest",
          "is_verified": 0,
          "created_at": "11/04/2019",
          "updated_at": "05/11/2019",
          "employees": "11-20",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Belo Horizonte",
          "place": "Belo Horizonte - MG",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Produtos de Consumo"
          }
      },
      {
          "id": "053049b3-4a2d-464c-86e7-f8a84669bfb8",
          "name": "Pleno Tecnologia",
          "short_description": "Software specialist for syndicate administrators",
          "description": "Software specialist for syndicate administrators",
          "tags": [ ],
          "slug": "pleno-tecnologia",
          "is_verified": 0,
          "created_at": "17/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Gestão"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/fdcc36b5e39ffb34d76b21868e93b3a55690b177.opt.png",
          "id": "0534fe39-a360-40c1-8449-46d056ec2770",
          "name": "Arcolabs",
          "short_description": "Arcolabs provides promote personal growth by creating entertainment solutions for the digital world.",
          "description": "Arcolabs is a Technology Startup, created by professionals with more than 18 years of experience. We offer innovative solutions in the form of mobile apps, electronic games, websites and software in general.    Arcolabs promote personal growth by creating entertainment solutions for the digital world.",
          "tags": [ ],
          "slug": "arcolabs",
          "is_verified": 0,
          "created_at": "11/04/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/9a9fafc7eb5e84956575e09d65365857ccfb5d98.opt.png",
          "founded_at": "31/12/2015",
          "id": "0536b756-8fac-4db3-b5b6-3955044381f7",
          "name": "UllerAgro",
          "short_description": "UllerAgro provides an app for agricultural machinery.",
          "description": "The mechanization of agriculture is an increasingly present reality. The high investment in tractors, harvesters and other implements requires that the use is optimized. The characteristics of agribusiness make it difficult to share resources. The Uller application was designed to change that reality. Our goal is to provide the conditions to increase your revenue with the resources you already have in the property. Make your farm machinery and implements available for rent or lease them from one of our partners quickly, efficiently and safely. The platform is composed of two applications that interact, the Uller Maq, developed for the use of people who own machines and implements available for rent, and Uller, developed for the user who wants to find agricultural machines and implements.",
          "tags": [ ],
          "slug": "ulleragro",
          "is_verified": 0,
          "created_at": "11/04/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Três Pontas",
          "place": "Três Pontas - MG",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Internet"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/0bf571c021c36e8163aa5e1c7c41b64178ae5c27.opt.png",
          "id": "054f1409-198d-438e-bbde-a9cc4124c92b",
          "name": "Mobility Turismo",
          "short_description": "Mobility Turismo works with major car rental companies to ensure the best experience and quality services to its customers.",
          "description": "Mobility Turismo works with major car rental companies to ensure the best experience and quality services to its customers.   Mobility has brought to the Brazilian market a new concept: the best-offer. With a single phone call or over the Internet, you can search for prices from all major national and international rental companies and choose the most advantageous rate, always considering insurance and mandatory fees included.",
          "tags": [ ],
          "slug": "mobility-turismo",
          "is_verified": 0,
          "created_at": "11/04/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Imobiliário"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/8a17db7b23649a26d479655b69278aceed3197ab.opt.png",
          "id": "0550bf64-7e8d-4882-9e7c-e49e4861ed67",
          "name": "Vivenda",
          "short_description": "Vivenda is an our commitment is to make people live well and live better.",
          "description": "Vivenda is an our commitment is to make people live well and live better. They have developed a complete solution in housing reforms that, in a fast and non-bureaucratic way, allows the client to have, within 15 days, to have his project prepared and his retirement ready.",
          "tags": [ ],
          "slug": "vivenda",
          "is_verified": 0,
          "created_at": "11/04/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Imobiliário"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/dac05bcd5e586a14d727d91b1ce175801eaf5f2a.opt.png",
          "id": "055e0889-1580-4373-a08c-98ae46250bfd",
          "name": "Liv+",
          "short_description": "Liv+ is the connection between you and your well being.",
          "description": "Liv+ is the connection between you and your well being. We are businesswomen and, above all, three friends who value life, but with the many tasks of everyday life we ​​​​realize that lack of time deprives us of the moments necessary to achieve the quality of life that we were looking for. From there, we decided to opt for practical alternatives where we could improve our well-being without harming our professional and personal commitments. The word Liv means \"Life\" in Swedish and the + symbol is the way we have to say that we choose health, more beauty, more well-being, more quality, more happiness, more family, more happy moments, more friends, more care, more ourselves. Much is said about the lack of time these days, but we believe that the time who does it is us, so the importance of every minute lived with what we have the most value: our life. Connecting people in order to organize and value your time, transforming common days into incredible moments, providing unique experiences, dedicating oneself to the important things in life is our main mission.",
          "tags": [ ],
          "slug": "liv",
          "is_verified": 0,
          "created_at": "11/04/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "RJ",
          "state": "Rio de Janeiro",
          "city": "Rio de Janeiro",
          "place": "Rio de Janeiro - RJ",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Finanças"
          }
      },
      {
          "id": "056365b7-5e88-48ca-b4dc-610fee3c3c7c",
          "name": "Ilog Tecnologia",
          "tags": [ ],
          "slug": "ilog-tecnologia",
          "is_verified": 0,
          "created_at": "17/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "0578c0f8-457a-449e-803b-210b16ce1bb9",
          "name": "Bauer AeroSystems",
          "tags": [ ],
          "slug": "bauer-aerosystems",
          "is_verified": 0,
          "created_at": "21/06/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_model": "SaaS",
          "uf": "SC",
          "state": "Santa Catarina",
          "city": "Joinville",
          "place": "Joinville - SC",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Agronegócio"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/b5ezpsqyr4eomzwb8qxw.opt.png",
          "id": "057b5adb-8a29-43be-993e-135e739abe7e",
          "name": "Mettzer",
          "tags": [ ],
          "slug": "mettzer",
          "is_verified": 0,
          "created_at": "21/06/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_model": "SaaS",
          "uf": "SC",
          "state": "Santa Catarina",
          "city": "Florianópolis",
          "place": "Florianópolis - SC",
          "is_active": 1,
          "badges": [
              {
                  "name": "InovAtiva",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_inovativa.png"
              }
          ],
          "segments": {
              "primary": "Educação"
          }
      },
      {
          "id": "058b4354-2278-4889-8f7f-473160c850ff",
          "name": "Agro Service Prest de serv ...",
          "short_description": "Empresa de prest de serv fitossanitarios , domissanitarios e quarentenarios.",
          "description": "Empresa de prest de serv fitossanitarios , domissanitarios e quarentenarios.",
          "tags": [ ],
          "slug": "agro-service-prest-de-serv",
          "is_verified": 0,
          "created_at": "18/06/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "RJ",
          "state": "Rio de Janeiro",
          "city": "Rio de Janeiro",
          "place": "Rio de Janeiro - RJ",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/0b1fad55dcb49b22a24a63c85713fa550d7503ad.opt.png",
          "founded_at": "19/08/2012",
          "id": "0591eb96-3282-481c-880c-b6c9239c23c0",
          "name": "Lab22.co",
          "short_description": "Makers. Believers. Transforming Great Ideas.",
          "tags": [ ],
          "slug": "lab22co",
          "is_verified": 0,
          "created_at": "11/04/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "RJ",
          "state": "Rio de Janeiro",
          "city": "Rio de Janeiro",
          "place": "Rio de Janeiro - RJ",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Internet"
          }
      },
      {
          "founded_at": "31/12/2015",
          "id": "05928b52-7e67-49c7-acef-7f9acb118896",
          "name": "amipet",
          "short_description": "A Amipet é um serviço de entrega de comida natural para cachorro, que cria a porção personalizada para o seu pet e entrega semanalmente em sua casa",
          "description": "A Amipet é um serviço de entrega de comida natural para cachorro, que cria a porção personalizada para o seu pet e entrega semanalmente em sua casa",
          "tags": [ ],
          "slug": "amipet",
          "is_verified": 0,
          "created_at": "10/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "RS",
          "state": "Rio Grande do Sul",
          "city": "Porto Alegre",
          "place": "Porto Alegre - RS",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Pets"
          }
      },
      {
          "id": "0592cfb3-f0af-42c9-a29b-da3dd4ac425e",
          "name": "CuboZ",
          "tags": [ ],
          "slug": "cuboz",
          "is_verified": 0,
          "created_at": "21/06/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_model": "SaaS",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Belo Horizonte",
          "place": "Belo Horizonte - MG",
          "is_active": 1,
          "badges": [
              {
                  "name": "SP Stars",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_spstars.png"
              }
          ],
          "segments": {
              "primary": "Educação"
          }
      },
      {
          "id": "05ab924d-141a-4744-9fe0-3935f22bed1d",
          "name": "Crowdtask",
          "description": "Oferecemos soluções para empresas de e-commerce ajudando-as a aumentar suas vendas através da limpeza e melhoria de suas respectivas bases de dados de produtos. Oferecemos soluções como: Desduplicação de produtos; Product matching; Tradução de textos; Análise de produtos em pontos de venda.\r\n\r\nOs benefícios oferecidos são: Alta velocidade de entrega de resultado; Baixo custo; Disponibilidade 24x7; Time sob-demanda; Escalabilidade; O processo é 100% gerenciado pela equipe do Crowdtask; Todos os encargos sociais são de responsabilidade do Crowdtask.",
          "tags": [ ],
          "slug": "crowdtask",
          "is_verified": 0,
          "created_at": "08/10/2014",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "founded_at": "31/12/2016",
          "id": "05b50a30-5a54-4f18-814d-aa819c0b5623",
          "name": "Volpe Luxo Inteligente",
          "description": "Startup que fomenta o uso compartilhado de bolsas de luxo através de alugueis de produtos do acervo próprio e, também, intermediação de pessoas que tenham interesse em disponibilizar suas bolsas para alugar.",
          "tags": [ ],
          "slug": "volpe-luxo-inteligente",
          "is_verified": 0,
          "created_at": "10/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "RS",
          "state": "Rio Grande do Sul",
          "city": "Porto Alegre",
          "place": "Porto Alegre - RS",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Serviços Profissionais"
          }
      },
      {
          "id": "05ba1cae-35f7-4f62-941e-18bf7d137568",
          "name": "Quanto Tempo Leva",
          "short_description": "Informe apenas o local de sua saída e aonde quer chegar, traçamos a rota e dizemos o tempo de duração e a distância do seu passeio ou viagem.",
          "description": "Informe apenas o local de sua saída e aonde quer chegar, traçamos a rota e dizemos o tempo de duração e a distância do seu passeio ou viagem.",
          "tags": [ ],
          "slug": "quanto-tempo-leva",
          "is_verified": 0,
          "created_at": "14/02/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/mnyuvrq5h2dn5nwbwjqx.opt.png",
          "id": "05ba9006-e475-4230-b25d-a4025a97b15b",
          "name": "Telein - www.telein.com.br",
          "description": "Viabilizar em empresas públicas, privadas e desenvolvedores o informações e gerenciamento da telefonia do Brasil de abordagem simples e fácil integração, agregando novos recursos de telecomunicações às empresas.",
          "tags": [ ],
          "slug": "telein-wwwteleincombr",
          "is_verified": 0,
          "created_at": "17/11/2011",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "PE",
          "state": "Pernambuco",
          "city": "Recife",
          "place": "Recife - PE",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/refillpet.png",
          "id": "05bc3c2a-8d6b-4ae1-b11a-3eaee3a83931",
          "name": "RefillPet",
          "description": "Somos um Marketplace para Pet Shops de pequeno e médio porte, com foco na venda de produtos para animais de estimação.\nAproximamos os clientes e as lojas para oferecer uma compra mais vantajosa.",
          "tags": [ ],
          "slug": "refillpet",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/bd32bfa5b3ff005aa217c0b28df05e5352338ff7.opt.png",
          "founded_at": "31/12/2011",
          "id": "05c617e0-e449-4774-b1b5-c00a3646b0b7",
          "name": "LINCROS",
          "short_description": "LINCROS is a platform company that provides solutions for logistics transformation.",
          "description": "LINCROS is a platform company (formerly known as  Transpobrasil) that provides solutions for logistics transformation. The company integrates and connects the important points by promoting agile and uncomplicated logistics, providing continuous flow, potentializing the movements, and eliminating the barriers.  LINCROS was founded in 2012 and is headquartered in Santa Carina, Brazil.",
          "tags": [ ],
          "slug": "lincros",
          "is_verified": 0,
          "created_at": "11/04/2019",
          "updated_at": "05/11/2019",
          "employees": "51-100",
          "uf": "SC",
          "state": "Santa Catarina",
          "city": "Blumenau",
          "place": "Blumenau - SC",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Logística e Mobilidade Urbana"
          }
      },
      {
          "id": "05c661ad-f6b5-43f5-94fe-923bb0937808",
          "name": "Spoken Communications",
          "tags": [ ],
          "slug": "spoken-communications",
          "is_verified": 0,
          "created_at": "17/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/jwx3fgwjcpaqlaijqdyh.opt.png",
          "id": "05cc4a20-3a22-47aa-9d56-f8916f32b4c1",
          "name": "Raizs",
          "tags": [ ],
          "slug": "raizs",
          "is_verified": 0,
          "created_at": "21/06/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_model": "Marketplace",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Agronegócio"
          }
      },
      {
          "id": "05d4fae8-15e1-45b3-b8eb-eb4ef9a6e613",
          "name": "Fábrica de Provas",
          "tags": [ ],
          "slug": "fabrica-de-provas",
          "is_verified": 0,
          "created_at": "21/06/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_model": "SaaS",
          "uf": "DF",
          "state": "Distrito Federal",
          "city": "Brasília",
          "place": "Brasília - DF",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Educação"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/apasrjixizttreimaezi.opt.png",
          "founded_at": "31/12/2009",
          "id": "06113330-3606-433e-acae-29eda0d3d806",
          "name": "UMov.me",
          "short_description": "A plataforma líder no segmento de criação e gestão de aplicativos corporativos no Brasil.",
          "description": "A plataforma líder no segmento de criação e gestão de aplicativos corporativos no Brasil.",
          "tags": [ ],
          "slug": "umovme",
          "is_verified": 0,
          "created_at": "10/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "RS",
          "state": "Rio Grande do Sul",
          "city": "Porto Alegre",
          "place": "Porto Alegre - RS",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Gestão"
          }
      },
      {
          "founded_at": "30/09/2015",
          "id": "0618e07d-197c-4b22-85c1-f6d30ce88abf",
          "name": "Roupateca",
          "short_description": "Shared Closet",
          "description": "Brazilians first shared closet company. Monthly subscription based.",
          "tags": [ ],
          "slug": "roupateca",
          "is_verified": 0,
          "created_at": "11/04/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "E-commerce"
          }
      },
      {
          "id": "061bd6d6-6da0-4b8f-9412-b1fec1f5405c",
          "name": "Geekie",
          "tags": [ ],
          "slug": "geekie",
          "is_verified": 0,
          "created_at": "21/06/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_model": "Venda de dados",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [
              {
                  "name": "Artemisia",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_artemisia.png"
              }
          ],
          "segments": {
              "primary": "Educação"
          }
      },
      {
          "id": "061ca1d6-43f6-498b-befa-6eb983b6e4fb",
          "name": "EduCritivo",
          "short_description": "EduCritivo isa an education platform that teaches users on content creation and allows them to connect with other creators.",
          "description": "EduCritivo isa an education platform that teaches users on content creation and allows them to connect with other creators.",
          "tags": [ ],
          "slug": "educritivo",
          "is_verified": 0,
          "created_at": "11/04/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Comunicação e Mídia"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/fd5u7t055agvsxdkfrvp.opt.png",
          "founded_at": "31/12/2016",
          "id": "063b1673-36cc-460d-9bfe-f160f43c9e0a",
          "name": "Aztec Online Solutions",
          "short_description": "Nosso objetivo é claro, transformar a experiência de hospedagem de sites WordPress.",
          "description": "Nosso objetivo é claro, transformar a experiência de hospedagem de sites WordPress.",
          "tags": [ ],
          "slug": "aztec-online-solutions",
          "is_verified": 0,
          "created_at": "10/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "RS",
          "state": "Rio Grande do Sul",
          "city": "Porto Alegre",
          "place": "Porto Alegre - RS",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "TIC e Telecom"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/wp8se0ccsbpgivzibsgg.opt.png",
          "id": "0640d3cf-9177-400e-819f-09cf16753207",
          "name": "I10 Studio",
          "tags": [ ],
          "slug": "i10-studio",
          "is_verified": 0,
          "created_at": "18/06/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Vicente",
          "place": "São Vicente - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/nanometallis.png",
          "id": "0645f045-da17-4413-9d91-b89f0efb269e",
          "name": "NanoMetallis",
          "description": "Tecnologia própria para P&D e produção em escala de nanopartículas funcionalizadas. Atuamos nas áreas de Energia com Nova Tecnologia para produção de Biodiesel e Polímeros bactericidas e fungicidas com propriedades diferenciadas.",
          "tags": [ ],
          "slug": "nanometallis",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "PR",
          "state": "Paraná",
          "city": "Curitiba",
          "place": "Curitiba - PR",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/trace-genomics.png",
          "id": "0658c942-8102-4202-b4fe-3a107cdb61b2",
          "name": "Trace Genomics",
          "description": "Na Trace Genomics, estamos envolvidos em tornar as informações sobre os solos mais facilmente acessíveis, fazendo testes NPK e interpretando as informações para lhe informar sobre decisões críticas quanto a genética, rotações e fertilizações.",
          "tags": [ ],
          "slug": "trace-genomics",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "065cac80-a868-4890-9f5d-d82212653430",
          "name": "CCRM",
          "description": "O Catálogo & CRM é uma solução que permite aos \r\nmicro e pequenos empresários criar catálogos digitais de seus produtos ou serviços, controlar vendas e contas a receber, gerenciar as informações dos clientes off-line, fazer cobranças via o Pagseguro da UOL e publicar informações dos seus produtos e serviços no Facebook através de Tablet ou Smartphone Android.",
          "tags": [ ],
          "slug": "ccrm",
          "is_verified": 0,
          "created_at": "22/02/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "AL",
          "state": "Alagoas",
          "city": "Maceió",
          "place": "Maceió - AL",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/iotmakers.png",
          "id": "06695586-aa7f-4b8f-a158-9689cbc13f52",
          "name": "IoTMakers",
          "short_description": "Soluções de conectividade para a Internet das Coisas",
          "description": "Soluções de conectividade para a Internet das Coisas",
          "tags": [ ],
          "slug": "iotmakers",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "SP",
          "state": "São Paulo",
          "city": "Campinas",
          "place": "Campinas - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "0669b75c-9ada-48ed-a764-1936ab27f910",
          "name": "Inoovare Solução e Inovação",
          "description": "Instituto de Pesquisa Privado Sem Fins Lucrativos que visa desenvolver soluções inovadoras, viáveis e acessíveis que atendam aos problemas e facilitem a vida da sociedade como um todo .",
          "tags": [ ],
          "slug": "inoovare-solucao-e-inovacao",
          "is_verified": 0,
          "created_at": "18/06/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "GO",
          "state": "Goiás",
          "city": "Goiânia",
          "place": "Goiânia - GO",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "066c366d-dc61-4f47-9658-054dea20bf98",
          "name": "Fashion.me",
          "short_description": "Fashion.me - crie, compartilhe e descubra tudo sobre o mundo da moda na maior Rede Social de Moda do mundo.",
          "description": "Fashion.me - crie, compartilhe e descubra tudo sobre o mundo da moda na maior Rede Social de Moda do mundo.",
          "tags": [ ],
          "slug": "fashionme",
          "is_verified": 0,
          "created_at": "23/02/2012",
          "updated_at": "05/11/2019",
          "employees": "11-20",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "066d2588-18ec-4402-90fc-991fed68683f",
          "name": "BlogBlogs",
          "description": "Indexador de blogs em língua portuguesa. Criado em 2006 por Manoel Lemos, tornou-se o maior indexador de blogs em língua portuguesa do mundo. Seu widget presente em milhares de blogs chegou a ter 70 milhões de impressões por mês.",
          "tags": [ ],
          "slug": "blogblogs",
          "is_verified": 0,
          "created_at": "17/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Comunicação e Mídia"
          }
      },
      {
          "id": "066fd967-88a4-4208-8379-29211538bfeb",
          "name": "Busca Bico",
          "description": "Esse site foi criado com o intuito de pessoas postarem ofertas de bicos onde que muitas vezes é muito difícil encontrar um bom mecânico para seu carro, um bom pedreiro. Qualquer pessoa querendo um serviço(bico) pode postar seu pedido, para que ache um profissional ideal para realização do serviço devido. Os profissionais podem usar essa ferramenta para buscarem empregos temporários. Este site é gratuito, e todos podem usufruir dos recursos.",
          "tags": [ ],
          "slug": "busca-bico",
          "is_verified": 0,
          "created_at": "28/08/2012",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "RJ",
          "state": "Rio de Janeiro",
          "city": "Rio de Janeiro",
          "place": "Rio de Janeiro - RJ",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/quem-cuida.png",
          "id": "067e05c5-73bf-4588-b3c0-0d61e161877c",
          "name": "Quem Cuida",
          "description": "É uma plataforma online que promove a contratação de babás e cuidadores de crianças, cuidadores de idosos e de pessoas com necessidades especiais.",
          "tags": [ ],
          "slug": "quem-cuida",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/sz38ezmlh0pzb9rdzq3p.opt.png",
          "id": "068669bf-6a76-47ee-a721-c985a9cca4b4",
          "name": "Inovathys",
          "tags": [ ],
          "slug": "inovathys",
          "is_verified": 0,
          "created_at": "21/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "PB",
          "state": "Paraíba",
          "city": "João Pessoa",
          "place": "João Pessoa - PB",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "068dc45e-82d4-409c-beed-ab4a82b8bda9",
          "name": "Speedy Food",
          "description": "Speedy Food é uma empresa 100% delivery, que utiliza um site próprio para o recebimento de pedidos. Atualmente comercializa lanches, dogs, porções e bebidas.\r\n\r\nO Speedy visa entregar de forma fácil, rápida e confiável um produto de qualidade.",
          "tags": [ ],
          "slug": "speedy-food",
          "is_verified": 0,
          "created_at": "23/10/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "06a94292-254a-418c-b87c-f73a41a8dfef",
          "name": "COBO IDEAS",
          "description": "Foco em uma gestão e ou criação de marca, essa gestão associa resultado no sucesso de implantação de produtos, serviços ou a própria marca, a ideia é desenvolver uma gama de serviços que se inicia desde a criação de uma nome, elaboração de logo, posicionamento no mercado, patentes, a união de estrategia, design e sua forma de estudo de comportamento e criação, comunicação e até auxilio jurídico para preservação de intelecto, é como um serviço completo a marca, nós desenvolvemos, implantamos e ainda treinamos a empresa a entender a ideia implantada para a sua marca, procuto ou serviço. ",
          "tags": [ ],
          "slug": "cobo-ideas",
          "is_verified": 0,
          "created_at": "14/04/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/pnhlrtnklm158xi2ofqy.opt.png",
          "id": "06ab8416-cd2e-4642-a261-5dbd4eda6224",
          "name": "Vale Presente S.A.",
          "short_description": "A Vale Presente é uma nova empresa que vai chegar ao mercado brasileiro com uma ideia muito simples: facilitar a troca de presentes entre as pessoas.",
          "description": "A Vale Presente é uma nova empresa que vai chegar ao mercado brasileiro com uma ideia muito simples: facilitar a troca de presentes entre as pessoas.",
          "tags": [ ],
          "slug": "vale-presente-sa",
          "is_verified": 0,
          "created_at": "18/06/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "SP",
          "state": "São Paulo",
          "city": "Barueri",
          "place": "Barueri - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "06b84856-2bd8-4720-b6b3-c669c4268d54",
          "name": "Vakinha.com.br",
          "description": "O Vakinha é o maior portal de vaquinhas online do Brasil.\r\nCrowdfunding, aniversários, formaturas, casamentos, chá de fraldas, ajuda a pessoas e animais... são inúmeros casos bem sucedidos.\r\nAfinal, amigo que é amigo está sempre pronto para ajudar!",
          "tags": [ ],
          "slug": "vakinhacombr",
          "is_verified": 0,
          "created_at": "24/01/2011",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "06b9bc6b-539d-4034-9453-3b2effd5bb60",
          "name": "M4U",
          "short_description": "Top-up integrator and and solution provider",
          "description": "Top-up integrator and and solution provider",
          "tags": [ ],
          "slug": "m4u",
          "is_verified": 0,
          "created_at": "17/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "RJ",
          "state": "Rio de Janeiro",
          "city": "Rio de Janeiro",
          "place": "Rio de Janeiro - RJ",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "TIC e Telecom"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/b15c310de36d24f079e857ef9db2f0679cdc4c88.opt.png",
          "id": "06bc7ecf-2fca-42b7-80d7-d1545b8980b0",
          "name": "Kyvo Design",
          "short_description": "Kyvo Design is a global innovation consultancy that enables organizations to provide valuable experiences that become great stories.",
          "description": "Kyvo Design is a global innovation consultancy that enables organizations to provide valuable experiences that become great stories.  They understand that to innovate is to create new possibilities for companies and people. Is to improve the present and design a more creative, connected and favorable future.  Innovating is collective. It’s a positive impact of a value that transforms not only a company but whole lives. It’s more than a step ahead. It’s a primordial step.  Their APPROACH Inspired by design processes, they created a 3-step method, that makes use of several visual tools to extract the best of everyone in the projects and deliver what is relevant for the client.  DIVE > they dive into their client’s problem with an immersion research.  DRAFT > they design solutions through ideating in a cocreative environment of experimentation  DELIVER > they deliver what is important for their client and relevant for the user.",
          "tags": [ ],
          "slug": "kyvo-design",
          "is_verified": 0,
          "created_at": "11/04/2019",
          "updated_at": "05/11/2019",
          "employees": "11-20",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Desenvolvimento de Software"
          }
      },
      {
          "id": "06c3782a-2216-4f79-aacc-d01b8bdbddfb",
          "name": "Due Laser",
          "tags": [ ],
          "slug": "due-laser",
          "is_verified": 0,
          "created_at": "17/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/17220d936b4841927e5753f1114c054edc4b7b69.opt.png",
          "founded_at": "09/12/2017",
          "id": "06c90ce3-fa81-473c-804b-164bba23e551",
          "name": "iMudou",
          "short_description": "iMudou is an online real estate marketplace in Brazil.",
          "description": "iMudou is an online real estate marketplace in Brazil that enables its users to buy, rent, or invest in residential and commercial properties, vacation homes, beach front properties, and investment properties.  iMudou was launched in 2017.",
          "tags": [ ],
          "slug": "imudou",
          "is_verified": 0,
          "created_at": "11/04/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Internet"
          }
      },
      {
          "founded_at": "31/12/2014",
          "id": "06cd69e6-9126-4315-91f9-4e6a3f4c806f",
          "name": "Site Campus",
          "description": "Nossa missão é promover o crescimento profissional de nossos alunos por meio da oferta de cursos online preparatórios para certificações gerenciais e cursos práticos em gestão de projetos e serviços de TI.",
          "tags": [ ],
          "slug": "site-campus",
          "is_verified": 0,
          "created_at": "10/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "RS",
          "state": "Rio Grande do Sul",
          "city": "Porto Alegre",
          "place": "Porto Alegre - RS",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Educação"
          }
      },
      {
          "id": "06d0d0d9-85f6-4964-9a04-dab611bcbb93",
          "name": "Estudar Com Você",
          "tags": [ ],
          "slug": "estudar-com-voce",
          "is_verified": 0,
          "created_at": "21/06/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_model": "SaaS",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Educação"
          }
      },
      {
          "id": "06d425e2-f246-4014-90a0-703e301e86aa",
          "name": "Power.com",
          "tags": [ ],
          "slug": "powercom",
          "is_verified": 0,
          "created_at": "17/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "06ec1373-e68f-41d1-a465-46867f586941",
          "name": "TUI Group",
          "short_description": "Integrated tourism business, booking, flights, hotels and cruises.",
          "description": "Integrated tourism business, booking, flights, hotels and cruises.",
          "tags": [ ],
          "slug": "tui-group",
          "is_verified": 0,
          "created_at": "17/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Eventos e Turismo"
          }
      },
      {
          "founded_at": "31/12/2016",
          "id": "06ee5762-8601-48c8-bf4a-242abfcd42b6",
          "name": "Alugadireto",
          "description": "O ALUGADIRETO é a evolução do mercado imobiliário. Na era do consumo compartilhado e da redução de despesas, o poder de escolha deve estar na mão do cliente. Através do aplicativo você pode escolher entre os serviços que deseja comprar. Com a evolução dos sistemas de informação hoje podemos usufruir de funcionalidades antes impensáveis. Oferecidas na palma da mão. É o caso do ALUGADIRETO, que revoluciona o mercado de locação de imóveis.",
          "tags": [ ],
          "slug": "alugadireto",
          "is_verified": 0,
          "created_at": "10/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "RS",
          "state": "Rio Grande do Sul",
          "city": "Porto Alegre",
          "place": "Porto Alegre - RS",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Imobiliário"
          }
      },
      {
          "founded_at": "31/12/2009",
          "id": "06f0b8d8-90a5-4faa-87d4-a9da273bb3b6",
          "name": "Optix",
          "description": "A Optix Imagens Médicas possui 8 anos de experiência em soluções na área de radiologia e trabalha para que os médicos possam visualizar e laudar exames radiológicos em qualquer lugar. A empresa busca desenvolver produtos que agilizam os processos de diagnóstico por imagem nas clínicas e hospitais, que reduzam custos, com menor impacto ambiental, e que tragam mais segurança, rapidez e confiabilidade nos laudos.",
          "tags": [ ],
          "slug": "optix",
          "is_verified": 0,
          "created_at": "10/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "RS",
          "state": "Rio Grande do Sul",
          "city": "Campo Bom",
          "place": "Campo Bom - RS",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Saúde e Bem-estar"
          }
      },
      {
          "id": "06f21400-72ff-40d1-98c4-c0d0d4146037",
          "name": "Draw Up Web Projects",
          "description": "A draw UP é uma empresa de desenvolvimento de sistemas de informação, focada em projetos para a internet.\r\nNossa missão é desenvolver projetos web inovadores e de qualidade fazendo uso das mais atualizadas tecnologia seguras e estáveis do mercado.",
          "tags": [ ],
          "slug": "draw-up-web-projects",
          "is_verified": 0,
          "created_at": "18/06/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "RS",
          "state": "Rio Grande do Sul",
          "city": "Porto Alegre",
          "place": "Porto Alegre - RS",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "06f68a16-ac3e-4137-967f-11116950f890",
          "name": "Facesites",
          "description": "O Facesites desenvolve aplicativos para serem utilizados na Fanpage da sua empresa no Facebook. Temos 2 categorias de apps, os personalizados (que será criado de acordo com sua necessidade) e os padronizados, que são aplicativos prontos já criados por nós.\r\nNo portfólio de aplicativos padrão estão: Ecommerce, Delivery Pizzaria, Convite de Casamento, Formulario de contato e Cardapio on-line.\r\nDentro do apps personalizados é possivel ciar, jogos interativos, paginas para lançamento de produtos, sites, portifolio, vitrine online e varios outros sistemas.",
          "tags": [ ],
          "slug": "facesites",
          "is_verified": 0,
          "created_at": "26/02/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "072aeda6-012a-4405-806a-7ecff07dba81",
          "name": "oevento.com",
          "description": "Organizar eventos ficou fácil, oevento.com é uma plataforma on-line para eventos! Onde você pode criar o site do seu evento, divulgar, vender ingressos, receber presentes virtuais e doações em minutos!",
          "tags": [ ],
          "slug": "oeventocom",
          "is_verified": 0,
          "created_at": "02/05/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "RJ",
          "state": "Rio de Janeiro",
          "city": "Rio de Janeiro",
          "place": "Rio de Janeiro - RJ",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/9926682aabf60da180bb827b2375341767605c04.opt.png",
          "founded_at": "31/12/2014",
          "id": "072f74ec-d7af-4eaa-877f-3520b0e50179",
          "name": "Balta.io",
          "short_description": "Balta.io is a complete tool to assist you on your way to becoming a developer of respect.",
          "tags": [ ],
          "slug": "baltaio",
          "is_verified": 0,
          "created_at": "11/04/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "SP",
          "state": "São Paulo",
          "city": "Piracicaba",
          "place": "Piracicaba - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Educação"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/4014360e62843d0904c3a7ed77331d5834b6c193.opt.png",
          "id": "07352d01-2f1e-4aa9-b304-0d7d0c803d45",
          "name": "Sync Company",
          "short_description": "Sync Company connects family, pets and objects.",
          "description": "Sync Company connects family, pets and objects. All through SyncApp, an easy and powerful reporting and notification tool.",
          "tags": [ ],
          "slug": "sync-company",
          "is_verified": 0,
          "created_at": "11/04/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Internet"
          }
      },
      {
          "id": "073fa4ec-7836-4eca-8cf4-cb1b8889efbb",
          "name": "Electric Dreams",
          "tags": [ ],
          "slug": "electric-dreams",
          "is_verified": 0,
          "created_at": "21/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São José dos Campos",
          "place": "São José dos Campos - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "0742db44-ea79-4063-ba81-c1939e26f143",
          "name": "hpG",
          "tags": [ ],
          "slug": "hpg",
          "is_verified": 0,
          "created_at": "17/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Internet"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/08/whatsapp-image-20190625-at-15-4253_3ad239a4-bc0a-49ca-aac4-f43ab81f58b4.jpeg",
          "founded_at": "07/06/2006",
          "id": "076d88f2-f736-4e44-9deb-5152a5bb2f55",
          "name": "Ageu Contabilidade",
          "company_name": "Ageu Assessoria Contabil Ltda",
          "short_description": "Serviços Contábeis",
          "tags": [ ],
          "slug": "ageu-contabilidade",
          "is_verified": 0,
          "created_at": "09/08/2019",
          "updated_at": "05/11/2019",
          "employees": "11-20",
          "business_target": "B2B",
          "business_model": "Outros",
          "uf": "SP",
          "state": "São Paulo",
          "city": "Guarulhos",
          "place": "Guarulhos - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Serviços Profissionais"
          }
      },
      {
          "id": "07730a01-8523-440b-9973-e274c98546f3",
          "name": "Wama soluções web",
          "short_description": "Criação de sites, lojas virtuais, otimização de sites e lojas virtuais, desenvolvimento de software e criação de identidade virtual.",
          "description": "Criação de sites, lojas virtuais, otimização de sites e lojas virtuais, desenvolvimento de software e criação de identidade virtual.",
          "tags": [ ],
          "slug": "wama-solucoes-web",
          "is_verified": 0,
          "created_at": "18/06/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "RJ",
          "state": "Rio de Janeiro",
          "city": "São Gonçalo",
          "place": "São Gonçalo - RJ",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "0786f2be-962e-46ad-bb21-b065d2e07ee2",
          "name": "Mastertech",
          "tags": [ ],
          "slug": "mastertech",
          "is_verified": 0,
          "created_at": "21/06/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_model": "Marketplace",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [
              {
                  "name": "Cubo",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_cubo.png"
              },
              {
                  "name": "100 Open Startups",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_100_open.png"
              }
          ],
          "segments": {
              "primary": "Educação"
          }
      },
      {
          "id": "07cd3776-6a3d-4223-91b4-c07e383c2dbf",
          "name": "EbaH!",
          "short_description": "O ebaH! é uma rede social voltada para universitários, onde o principal objetivo é o intercâmbio de materiais de estudo.",
          "description": "O ebaH! é uma rede social voltada para universitários, onde o principal objetivo é o intercâmbio de materiais de estudo.",
          "tags": [ ],
          "slug": "ebah",
          "is_verified": 0,
          "created_at": "03/08/2011",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "07d3d6d7-af96-4a65-ba5c-e637bc6e3949",
          "name": "Nomus",
          "description": "Especialistas no desenvolvimento de softwares com tecnologia web com aplicação de conceitos avançados de Engenharia de Produção para indústrias. Possuímos conhecimento profundo de teorias de Engenharia de Produção e experiência prática em fábricas. Esses são os ingredientes para criarmos sistemas exclusivos para indústrias.",
          "tags": [ ],
          "slug": "nomus",
          "is_verified": 0,
          "created_at": "17/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_model": "SaaS",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/d71052712b748996421f5dea55ce3984985455b5.opt.png",
          "founded_at": "22/05/2013",
          "id": "07db70e5-15f6-45f1-8162-0cadc2a0af4f",
          "name": "Dunno App",
          "short_description": "Pedagogical tool and network of learning communities.",
          "description": "Dunno is a web and mobile application that enables teachers and students to communicate with each other.  The application features file transfers, content sharing, class overviews, and email notifications. Furthermore, it enables teachers to filter content so that it cannot be viewed by students. In addition, it allows its users to set deadlines and reminders by inputting them into the platform.  Dunno was launched in 2013 by Lucas Boscacci Lima and is based in Rio de Janeiro.",
          "tags": [ ],
          "slug": "dunno-app",
          "is_verified": 0,
          "created_at": "11/04/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "RJ",
          "state": "Rio de Janeiro",
          "city": "Rio de Janeiro",
          "place": "Rio de Janeiro - RJ",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Educação"
          }
      },
      {
          "id": "07e01fee-d7d3-4036-a220-2efdda73a646",
          "name": "ProspectaInc",
          "company_name": "ProspectaInc",
          "description": "No nosso atual mundo corporativo, cada vez mais temos que reduzir custos, vender mais e melhor, capacitar os profissionais (que são o nosso principal ativo: pessoas), e por aí vai.   Com isto, o propósito da ProspectaInc é fazer mais com menos em marketing em vendas. Somos uma consultoria focada na eficiência de marketing em vendas. Fazemos isto de duas maneiras:   – Inbound e Outbound Marketing: o principal objetivo aqui é agregar dinamismo nos novos negócios de sua empresa sempre pensando em dar um boost na geração de leads / propostas em termos de qualidade, probabilidade de fechamento e quantidade.  – Capacitação:  ministramos palestras, treinamentos e oficinas nos temas prospecção, networking,  follow-up e inbound e outbound marketing.",
          "tags": [ ],
          "slug": "prospectainc",
          "is_verified": 0,
          "created_at": "22/05/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "07fe92c2-5de0-4b48-a4de-09e8f16f995d",
          "name": "Ticies",
          "tags": [ ],
          "slug": "ticies",
          "is_verified": 0,
          "created_at": "18/06/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "DF",
          "state": "Distrito Federal",
          "city": "Brasília",
          "place": "Brasília - DF",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/medmep-excelencia-em-medicina-personalizada.png",
          "id": "0805d922-2146-4e00-98c8-251f2e666173",
          "name": "MedMep Excelência em Medicina Personalizada",
          "description": "MEDMEP é formada por três empresas cuja missão é promover saúde e qualidade de vida animal com excelência e foco em Medicina Personalizada. Fazem parte do grupo as empresas PETMEP, EQUIMEP e VETMEP.",
          "tags": [ ],
          "slug": "medmep-excelencia-em-medicina-personalizada",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "0810132c-2dfc-4a31-bb97-9c1ea630bf7d",
          "name": "Trapo Tri",
          "description": "A Trapo Tri é uma marca focada em criar roupas com estilo próprio e que mostrem o orgulho e bairrismo. Queremos que os gaúchos carreguem a paixão pela sua terra de uma forma descontraída e moderna, uma maneira tri de expor as tradições gaúchas.",
          "tags": [ ],
          "slug": "trapo-tri",
          "is_verified": 0,
          "created_at": "25/07/2012",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "RS",
          "state": "Rio Grande do Sul",
          "city": "Novo Hamburgo",
          "place": "Novo Hamburgo - RS",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "081225c7-5046-4ff3-83b1-3eab5775d578",
          "name": "Dinni",
          "tags": [ ],
          "slug": "dinni",
          "is_verified": 0,
          "created_at": "21/06/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_model": "SaaS",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Viçosa",
          "place": "Viçosa - MG",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Agronegócio"
          }
      },
      {
          "id": "0815582d-46b5-40be-80c4-9fc5408a502f",
          "name": "ZAZ",
          "tags": [ ],
          "slug": "zaz",
          "is_verified": 0,
          "created_at": "17/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Internet"
          }
      },
      {
          "id": "0821d683-c2ab-4c08-bc8a-ed282639747f",
          "name": "Dotpipol",
          "description": "\r\nDespretencioso e básico. O Dotpipol é feito pela galera que quer uma rede social simples para trocar ideias e compartilhar o que quiser com quem é importante na vida. \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nNão queremos dominar o mundo. Não queremos uma rede social cheia de botões, cheia de armadilhas e funções que sejam complicadas de usar para poder tornar algo privado ou público. \r\n",
          "tags": [ ],
          "slug": "dotpipol",
          "is_verified": 0,
          "created_at": "31/12/2012",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "082e1d9b-423d-4d97-be28-ec5fc5d87b3d",
          "name": "Simples Dental",
          "description": "O Simples Dental é um software odontológico completo de gerenciamento de clínicas e consultórios, que também pode ser manipulado por gestos e movimentos, evitando contaminação do profissional da saúde durante o atendimento.",
          "tags": [ ],
          "slug": "simples-dental",
          "is_verified": 0,
          "created_at": "17/03/2014",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "0833e6a8-c771-4a03-b7a3-094c272ae4e5",
          "name": "intoo",
          "tags": [ ],
          "slug": "intoo",
          "is_verified": 0,
          "created_at": "17/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Finanças"
          }
      },
      {
          "id": "08381ec6-9b33-4e99-9342-f57f6e7fbe98",
          "name": "MT Empregos",
          "description": "O site MT Empregos é uma iniciativa que visa fornecer ao estado de Mato Grosso um sistema ágil, moderno e confiável na área de classificados de empregos on-line.\n\nSua criação vem atender as necessidades de uma das regiões que mais cresce no Brasil e que demanda cada dia mais por profissionais qualificados nas mais variadas áreas de atuação.\n\nNosso foco é fornecer serviços gratuitos, de qualidade, e sem limite de tempo, permitindo às empresas a divulgação de suas oportunidades de emprego e, aos candidatos, a opção de cadastrarem seus currículos.",
          "tags": [ ],
          "slug": "mt-empregos",
          "is_verified": 0,
          "created_at": "05/10/2012",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "MT",
          "state": "Mato Grosso",
          "city": "Cuiabá",
          "place": "Cuiabá - MT",
          "is_active": 1,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/2d261702bdf2059d58a03d8907ed037d23cbb451.opt.png",
          "founded_at": "10/11/2011",
          "id": "0842049d-f324-4239-a393-eb651d9c9e22",
          "name": "ampfy",
          "short_description": "always-on advertising in Brazil",
          "description": "born in a time when social media are transforming the way to interact with consumers, ampfy helps brands to be truly shareable. we are an advertising agency grounded in social, empowering brands to find, shape and amplify their social assets. let’s ampfy! we play it seriously.",
          "tags": [ ],
          "slug": "ampfy",
          "is_verified": 0,
          "created_at": "11/04/2019",
          "updated_at": "05/11/2019",
          "employees": "51-100",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Advertising"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/mokation.png",
          "id": "08456798-171c-4b2c-8e44-5f1f94873593",
          "name": "Mokation",
          "company_name": "Mokation",
          "short_description": "Plataforma Musica Social - Permite que as pessoas possam escolher o que ouvir em qualquer lugar que estiverem",
          "description": "Plataforma Musica Social - Permite que as pessoas possam escolher o que ouvir em qualquer lugar que estiverem",
          "tags": [ ],
          "slug": "mokation",
          "is_verified": 0,
          "created_at": "22/05/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Internet"
          }
      },
      {
          "id": "086dc9a0-7005-4664-9c38-652882e5e0ff",
          "name": "Pto de Contato",
          "description": "Um escritório colaborativo, onde pessoas e ideias se encontram.\r\nÉ um ponto de encontro de empreendedores!\r\nNão trabalhe mais sozinho, venha para o coworking!",
          "tags": [ ],
          "slug": "pto-de-contato",
          "is_verified": 0,
          "created_at": "02/02/2011",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "0895b6e9-c4a6-4329-b952-07365a86842d",
          "name": "Citibuddies",
          "tags": [ ],
          "slug": "citibuddies",
          "is_verified": 0,
          "created_at": "17/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "089ba923-ef3e-4e36-8efb-8696bb73f1fc",
          "name": "Você sabe fazer",
          "description": "O Você Sabe Fazer é um programa de tv focado em estratégias de marketing que visa o desenvolvimento de ações de comunicação e marketing, afim de oferecer mais visibilidade e novos clientes para as empresas.  \r\n\r\n\"Você Sabe Fazer\" é inovador, de entretenimento, e permite qualquer pessoa a ganhar descontos em diversos estabelecimentos e a concorrer a diversos prêmios, através de sorteios, de uma maneira prática, criativa e divertida. ",
          "tags": [ ],
          "slug": "voce-sabe-fazer",
          "is_verified": 0,
          "created_at": "30/04/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "SC",
          "state": "Santa Catarina",
          "city": "Joinville",
          "place": "Joinville - SC",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/fflgn61cn4yxaz8hnb3m.opt.png",
          "founded_at": "29/01/2012",
          "id": "08b85c70-b8ba-4b16-9fa4-1843063be406",
          "name": "Clube dos Formandos",
          "description": "O Clube dos Formandos é uma empresa única no segmento, tendo como finalidade a aproximação dos fornecedores/prestadores de serviços no segmento de eventos para formaturas e seus formandos. Com estratégias bem elaboradas, nós do Clube dos Formandos, desenvolvemos um conceito diferenciado para atrair os formandos a fazer parte de nossa empresa, assim como os fornecedores.  Estratégias essas que irão beneficiar ambas as partes, pois irá colocá-los juntos, um expondo seus produtos, no caso fornecedor, do outro a comissão de formatura, tendo a oportunidade e liberdade em escolher o melhor (pacote) de formatura para sua turma.",
          "tags": [ ],
          "slug": "clube-dos-formandos",
          "is_verified": 0,
          "created_at": "01/11/2015",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_phase": "Fora de Operação",
          "business_model": "Marketplace",
          "uf": "PR",
          "state": "Paraná",
          "city": "Cascavel",
          "place": "Cascavel - PR",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Eventos e Turismo"
          }
      },
      {
          "id": "08bad56e-cf05-420e-a689-e18536e7446d",
          "name": "KNOW SYSTEM TECNOLOGIA DA I...",
          "description": "A KnowSystem é uma empresa focada no desenvolvimento de sistemas para a área tributária que se preocupa com a qualidade dos seus produtos e procura criar e manter relacionamentos duradouros com seus clientes e parceiros.\r\n\r\nA KnowSystem conta com o apoio de especialistas na área contábil e de tecnologia da informação, que estão em constate aprimoramento, para desenvolver seus produtos. ",
          "tags": [ ],
          "slug": "know-system-tecnologia-da-i",
          "is_verified": 0,
          "created_at": "18/06/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "PR",
          "state": "Paraná",
          "city": "Curitiba",
          "place": "Curitiba - PR",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "founded_at": "30/09/1995",
          "id": "08d2dd6a-a05b-45d8-a8c8-e4d19fd37ebb",
          "name": "Horeb Group Consultoria ",
          "company_name": "Horeb Group Consultoria ",
          "tags": [
              "Educação"
          ],
          "slug": "horeb-group-consultoria",
          "is_verified": 0,
          "created_at": "17/09/2017",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_target": "B2B2C",
          "business_phase": "Fora de Operação",
          "business_model": "Marketplace",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Comunicação e Mídia"
          }
      },
      {
          "id": "08e318c3-03f6-44a6-a072-15230c205eac",
          "name": "bipshop",
          "description": "Nós temos a ambição de ser uma rede social aonde vendors possam exibir e mercar seus produtos. Uma experiência completamente nova e humana para o comércio eletrônico.",
          "tags": [ ],
          "slug": "bipshop",
          "is_verified": 0,
          "created_at": "01/05/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "founded_at": "04/10/2015",
          "id": "0925c79c-8f8c-4f15-bae2-873b3f166247",
          "name": "php tamo aqui",
          "short_description": "teste de ferramenta para o projeto que estamos desenvolvendo",
          "description": "teste de ferramenta para o projeto que estamos desenvolvendo",
          "tags": [ ],
          "slug": "php-tamo-aqui",
          "is_verified": 0,
          "created_at": "05/10/2015",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_phase": "Fora de Operação",
          "business_model": "Outros",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Entretenimento"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/app-do-estudante.png",
          "id": "09309118-52bf-42d4-b1d8-fdb5740b1ef9",
          "name": "APP do Estudante",
          "short_description": "Aplicativo de agendamento de aulas particulares.",
          "description": "Aplicativo de agendamento de aulas particulares.",
          "tags": [ ],
          "slug": "app-do-estudante",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Belo Horizonte",
          "place": "Belo Horizonte - MG",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "founded_at": "29/03/2015",
          "id": "0958adde-95c7-4541-84ee-646e98a3f313",
          "name": "Helamb",
          "description": "O Helamb tem como objetivo estreitar a relação entre músicos e estabelecimentos que oferecem ou desejam oferecer música ao vivo. Através de uma plataforma web o serviço será capaz de proporcionar uma negociação viável e produtiva, além de oferecer um ambiente de divulgação totalmente dedicado. \r\nO músico poderá encontrar com maior facilidade locais para tocar e o estabelecimento poderá encontrar o músico que cabe no seu orçamento e que melhor representa o seu ambiente.\r\n\r\nDivulgação do Músico\r\nO músico que utilizar o Helamb poderá criar sua própria página de divulgação sendo possível inserir materiais como música, vídeo, foto, repertório e até mesmo equipamento utilizado.\r\n\r\nDivulgação do Estabelecimento\r\nO dono do estabelecimento que utilizar o Helamb também terá sua própria página de divulgação, onde ele poderá promover seu espaço com fotos e informações sobre os serviços que o local oferece.\r\n\r\nNegociação Estabelecimento X Músico\r\nNo Helamb o músico terá maior visibilidade das oportunidades de apresentar o seu trabalho e enviar propostas aos estabelecimentos. O estabelecimento terá acesso direto às páginas dos músicos podendo realizar uma avaliação do seu material e enviar uma oferta ou contraproposta.\r\n\r\nDivulgação de Eventos\r\nO músico e o estabelecimento que fecharem um negócio terão o evento divulgado no site para o público, estes poderão acessar tanto a página do músico quanto a página do estabelecimento para conhecimento.\r\n\r\nAcompanhamento do Público\r\nO público que acessar o site, visualizará todos os eventos que estão ocorrendo ao seu redor. Poderá acompanhar sua banda predileta, sabendo onde ela tocará nos próximos dias e poderá acompanhar seu estabelecimento preferido, ficando por dentro de todas as atrações musicais que acontecem no local.",
          "tags": [ ],
          "slug": "helamb",
          "is_verified": 0,
          "created_at": "04/08/2015",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "SC",
          "state": "Santa Catarina",
          "city": "Blumenau",
          "place": "Blumenau - SC",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Entretenimento"
          }
      },
      {
          "founded_at": "16/10/2015",
          "id": "096d92fb-69c0-4a25-82c5-36e2932a9f7e",
          "name": "Hashtag Soluções e Inspirações Ilimitadas",
          "tags": [ ],
          "slug": "hashtag-solucoes-e-inspiracoes-ilimitadas",
          "is_verified": 0,
          "created_at": "17/10/2015",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Outros"
          }
      },
      {
          "id": "09a49388-1280-4745-9a3a-a7375e93f576",
          "name": "AulaZ",
          "description": "O conhecimento vale dinheiro! Queremos ajudar quem sabe muito de alguma coisa a compartilhar e ganhar dinheiro com seu conhecimento e experiência, através de uma plataforma de financiamento de cursos online completa e eficiente.\r\nAtravés de um sistema de financiamento coletivo, monte um curso de qualidade viabilizado pela comunidade e aprenda através de conteúdos e vídeo-aulas feitas por pessoas como você.\r\n\r\nIdentificamos a necessidade de alternativas e extensões de cursos presenciais que hoje consomem bastante tempo e dinheiro.",
          "tags": [ ],
          "slug": "aulaz",
          "is_verified": 0,
          "created_at": "15/11/2012",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "RJ",
          "state": "Rio de Janeiro",
          "city": "Rio de Janeiro",
          "place": "Rio de Janeiro - RJ",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "09b8ed16-19b9-4ba6-8b89-468a803da947",
          "name": "Plugger",
          "description": "O Plugger é uma ferramenta fácil de usar para você administrar o seu negócio. Com o Plugger, você salva e gerencia na nuvem, os seus contatos, vendas e finanças, sendo possível compartilhar o que você quiser com quem você desejar. Voltado às micros, pequenas e médias empresas, e profissionais autônomos, o Plugger é a ferramenta perfeita para você simplificar a administração das suas atividades profissionais diárias, tornando possível acessar as informações do seu negócio quando e onde você quiser. Trabalhe Online com o Plugger, a ferramenta perfeita para gerenciar o seu negócio.",
          "tags": [ ],
          "slug": "plugger",
          "is_verified": 0,
          "created_at": "03/01/2012",
          "updated_at": "05/11/2019",
          "employees": "11-20",
          "business_phase": "Fora de Operação",
          "uf": "RS",
          "state": "Rio Grande do Sul",
          "city": "Porto Alegre",
          "place": "Porto Alegre - RS",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "09c2ba3b-defd-4240-ab99-79c436fd5f2a",
          "name": "ISOL INSTITUTO DE EDUCAÇÃO",
          "short_description": "Cursos ead",
          "description": "Cursos ead",
          "tags": [ ],
          "slug": "isol-instituto-de-educacao",
          "is_verified": 0,
          "created_at": "18/06/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "09e91d4c-05fe-444a-a2de-b7033ee860e9",
          "name": "Novo Sertão",
          "company_name": "Novo Sertão",
          "short_description": " ",
          "tags": [
              "Big Data"
          ],
          "slug": "novo-sertao",
          "is_verified": 0,
          "created_at": "31/01/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_target": "B2B",
          "business_phase": "Fora de Operação",
          "business_model": "Venda de dados",
          "uf": "PR",
          "state": "Paraná",
          "city": "Curitiba",
          "place": "Curitiba - PR",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Serviços Profissionais"
          }
      },
      {
          "id": "09ebd399-f974-4f7b-9ac2-ea875961d095",
          "name": "Marcelo Guedes",
          "description": "Trabalhamos desde 2000 com hospedagem de sites em 2007 iniciamos soluções de desenvolvimento de sites, lojas virtuais e outros aplicativos.... em 2010 lançamos um projeto próprio, uma loja virtual de distribuição de informatica, com cerca de 1 milhão de acessos o site ... atualmente com projetos em andamento",
          "tags": [ ],
          "slug": "marcelo-guedes",
          "is_verified": 0,
          "created_at": "18/06/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "SP",
          "state": "São Paulo",
          "city": "Praia Grande",
          "place": "Praia Grande - SP",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/zhuah5uesm7od93uwa2k.opt.png",
          "id": "0a0d79eb-29bd-471b-b520-ae254269b83e",
          "name": "ProCompra",
          "short_description": "ProCompra is a marketplace connecting providers and buyers to facilitate purchase decisions.",
          "description": "ProCompra is a marketplace connecting providers and buyers to facilitate purchase decisions.",
          "tags": [ ],
          "slug": "procompra",
          "is_verified": 0,
          "created_at": "17/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/sakoola.png",
          "founded_at": "06/03/2018",
          "id": "0a29ac0f-21e1-492b-ae95-db6d2b58be76",
          "name": "Sakoola",
          "company_name": "SAKOOLA NEGOCIOS TECNOLOGICOS LTDA",
          "short_description": "Plataforma que uni lojistas do atacado a revendedores de moda",
          "description": "Nosso objetivo é dar maior visibilidade aos lojistas que não possuem a cultura de vendas online. Através de nossa plataforma, os lojistas disponibilizam o catálogo dos seus produtos com valores diferenciados nas vendas para o revendedor de atacado de forma segmentada.",
          "tags": [
              "plataforma",
              "lojista",
              "revendedor",
              "moda"
          ],
          "slug": "sakoola",
          "is_verified": 0,
          "created_at": "30/06/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B2C",
          "business_phase": "Fora de Operação",
          "business_model": "E-commerce",
          "uf": "CE",
          "state": "Ceará",
          "city": "Fortaleza",
          "place": "Fortaleza - CE",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Moda e Beleza"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/c219b9ff616517b312e26c6313bd2ae7.opt.png",
          "id": "0a2c54f1-9433-4b7f-a0f7-aa7fee198142",
          "name": "Zeemp",
          "description": "Decida o que é mais popular na Internet e em sua região.\nSe um site que você gosta ainda não está listado no Zeemp, adicione-o agora mesmo. Se você é dono de um negócio, não perca tempo, envie seu site gratuitamente para promovê-lo neste vasto mundo da Internet.",
          "tags": [ ],
          "slug": "zeemp",
          "is_verified": 0,
          "created_at": "08/08/2011",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "PA",
          "state": "Pará",
          "city": "Belém",
          "place": "Belém - PA",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "0a442282-1140-4bd3-afee-0400f8cb4716",
          "name": "Safira Tecnologia",
          "short_description": "Conglomerado de empresas de tecnologia, comunicação e serviços (desenvolvimento de software).",
          "description": "Conglomerado de empresas de tecnologia, comunicação e serviços (desenvolvimento de software).",
          "tags": [ ],
          "slug": "safira-tecnologia",
          "is_verified": 0,
          "created_at": "18/06/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "BA",
          "state": "Bahia",
          "city": "Salvador",
          "place": "Salvador - BA",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "0a81163c-ece3-47fb-a649-23424b1c2703",
          "name": "Plantões Médicos",
          "description": "Plantões Médicos é um portal desenvolvido para facilitar o acesso do médico e do acadêmico aos mais diversos setores de saúde e às melhores oportunidades de trabalho. Facilita também a aproximação entre empresas e pacientes na busca dos mais variados serviços médicos.",
          "tags": [ ],
          "slug": "plantoes-medicos",
          "is_verified": 0,
          "created_at": "20/04/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "RS",
          "state": "Rio Grande do Sul",
          "city": "Porto Alegre",
          "place": "Porto Alegre - RS",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/bmgckirknt4zwyrg6ud2.opt.png",
          "id": "0acb398f-e1fa-4fc0-ac29-cdab44fa6d39",
          "name": "Ezlike",
          "description": "Otimizamos a verba investida em anúncios no Facebook. Entregamos melhores resultados dentro de um orçamento disponível.\r\n\r\nNossa plataforma disponibiliza inúmeras opções para parametrização e controle de campanhas e anúncios, possibilitando a automatização de processos, ações em massa e gestão inteligente de testes.\r\n\r\nAliada à uma boa estratégia, nossa solução entrega cliques de qualidade, reduz custos e diminui o tempo necessário para gerenciar os Facebook Ads.",
          "tags": [ ],
          "slug": "ezlike",
          "is_verified": 0,
          "created_at": "11/11/2013",
          "updated_at": "05/11/2019",
          "employees": "11-20",
          "business_phase": "Fora de Operação",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Belo Horizonte",
          "place": "Belo Horizonte - MG",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/sx5mtksmlacb5badsqn5.opt.png",
          "id": "0af55487-98ee-4732-9b13-47529fa0bc54",
          "name": "SkyErp",
          "description": "O SkyErp é um sistema totalmente online que tem como foco as micro e pequenas empresas que precisam de agilidade para seus negócios. Através dele, você pode controlar estoque, ordens de serviço, fluxo de caixa, compras, vendas, contas a pagar e contas a receber, e muito mais. Por ser em plataforma web, permite que você acesse as informações da sua empresa de qualquer computador com acesso à Internet.",
          "tags": [ ],
          "slug": "skyerp",
          "is_verified": 0,
          "created_at": "13/02/2012",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/slxe0qffrpcytlv8iteb.opt.png",
          "id": "0af7a65d-abb1-473f-8dc0-65af2ce9aa81",
          "name": "CupomNow",
          "short_description": "CupomNow offers daily discount coupons for products and services from local businesses throughout Brazil.",
          "description": "CupomNow offers daily discount coupons for products and services from local businesses throughout Brazil.",
          "tags": [ ],
          "slug": "cupomnow",
          "is_verified": 0,
          "created_at": "17/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "RJ",
          "state": "Rio de Janeiro",
          "city": "Rio de Janeiro",
          "place": "Rio de Janeiro - RJ",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "E-commerce"
          }
      },
      {
          "id": "0b321177-de01-4c64-ad42-d9b72dd9502e",
          "name": "Convidados",
          "description": "O convidados.com.br é um site totalmente gratuito, onde tem como objetivo, unir todas as suas listas de casamento em apenas uma.\r\n\r\nAqui seus convidados poderão de maneira fácil, rápida e dinâmica encontrar o presente ideal para esse momento tão especial.\r\n\r\nVocê só precisa informar o código da sua lista única para os convidados terem acesso a sua lista de presentes.\r\n\r\nLista de presentes suportadas\r\n\r\nAtualmente o convidados.com.br suporta as seguintes listas de presentes: \r\nExtra - Fastshop - Leader - Pontofrio - Ricardo eletro - Shoptime - Tokstok",
          "tags": [ ],
          "slug": "convidados",
          "is_verified": 0,
          "created_at": "25/03/2011",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "0b477446-d309-4306-a79f-7683e5ce0f3e",
          "name": "Garageiros",
          "description": "Nosso site tem a proposta de disponibilizar uma ferramenta de anúncios classificados a todos os Garageiros, concessionarias, revendas de carros de todo pais. Todos os serviços de forma gratuita.\n\nNosso grande diferencial é uma ferramenta construída utilizando tecnologias de ultima geração (java, ajax, apache, linux).\n\nContratamos uma Data Center localizado no Brasil, que garante SLA de 99,9%.\n\nNosso site não tem poluição visual com \"bugigangas\" e nem aquele turbilhão de publicidade.\n\nNossa receita é exclusivamente de publicidade.",
          "tags": [ ],
          "slug": "garageiros",
          "is_verified": 0,
          "created_at": "30/01/2012",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "TO",
          "state": "Tocantins",
          "city": "Palmas",
          "place": "Palmas - TO",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "founded_at": "23/06/2015",
          "id": "0b4d6846-e924-4608-b1f0-837bb3a1afe0",
          "name": "Wanted - You are Police",
          "description": "A Starup ''Wanted - You are Police\" tem como objetivo ajudar a policia a capturar suspeitos e foragidos. Essa ajuda é feita através de um site e um aplicativo de celular, que somente a polícia federal e estadual poderá atualizar, o qual serão divulgados fotos, nomes, características, ocorrências e demais informações dos foragidos, assim qualquer cidadão poderá ver essas informações e se tornar um ajudante da polícia, denunciando foragidos e suspeitos divulgados no site e aplicativo. A principal ideia é trabalhar com as informações policiais para potencializar a captura dos foragidos com um baixo investimento, a sinergia entre os dois players está claro, pois a população ajuda na segurança de sua cidade e a policia potencializa seu poder de busca.  ",
          "tags": [ ],
          "slug": "wanted-you-are-police",
          "is_verified": 0,
          "created_at": "24/06/2015",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "PR",
          "state": "Paraná",
          "city": "Curitiba",
          "place": "Curitiba - PR",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Outros"
          }
      },
      {
          "id": "0b54ce74-7ddc-4d72-bd09-8d59b7d8f2b1",
          "name": "Sharemy.tel",
          "description": "If you have a great phonebook at your mobile, maybe you must have a lot of money parked in your hands. Share it with us and we can help you be happy with it! Just click and call them.",
          "tags": [ ],
          "slug": "sharemytel",
          "is_verified": 0,
          "created_at": "06/04/2011",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "0b65846e-e09d-405f-9f2c-52aa03a79adb",
          "name": "CTE2",
          "tags": [ ],
          "slug": "cte2",
          "is_verified": 0,
          "created_at": "04/06/2012",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "founded_at": "31/05/2017",
          "id": "0b668905-3871-4af0-a0b1-ef5617ba170e",
          "name": "ludi.land",
          "company_name": "ludi.land",
          "short_description": "A missão da empresa está ligada diretamente a “ludificação das coisas”",
          "description": "Seguindo a ideia de IoT, internet das coisas, a missão da nova empresa está ligada diretamente a “ludificação das coisas”, seja um software de sistema de suporte, um treinamento online de business game.",
          "tags": [
              "Comunicação e Mídia",
              "E-commerce",
              "Educação",
              "Entretenimento",
              "Games"
          ],
          "slug": "ludiland",
          "is_verified": 0,
          "created_at": "22/06/2017",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_target": "B2B",
          "business_phase": "Fora de Operação",
          "uf": "SP",
          "state": "São Paulo",
          "city": "Campinas",
          "place": "Campinas - SP",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "0b8cadb7-a623-4e5f-91e7-dd0f133e6dd7",
          "name": "GoCarros - Classificados On...",
          "description": "GoCarros é um completo, fácil e rápido Classificados Online de Carros em Goiânia. O melhor negócio para comprar e vender carros usados, seminovos e novos em Goiás.",
          "tags": [ ],
          "slug": "gocarros-classificados-on",
          "is_verified": 0,
          "created_at": "18/06/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/egirnwssqhf77a9szaik.opt.png",
          "id": "0bd94170-2af0-4151-9bc7-df1000f858ab",
          "name": "PENSE STARTUP",
          "description": "A PENSE SRTARTUP reúne em um único lugar todo talentos, conhecimento técnico e criatividade necessário para atuar como facilitadora na identificação de oportunidades, antecipando competências, dimensionando implementações que promovam o empreendedorismo e a inovação. ",
          "tags": [ ],
          "slug": "pense-startup",
          "is_verified": 0,
          "created_at": "03/08/2012",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "founded_at": "15/09/2014",
          "id": "0c10cf29-578c-4f8a-9603-628625297cb0",
          "name": "Bifrost Games",
          "description": "A Bifrost é uma Startup que busca revolucionar o mercado de games oferecendo acesso a um catalogo de jogos digitais para PC a partir de uma assinatura mensal com valor fixo. Em outras palavras a Bifrost será como o Netflix, porém voltada para o mercado de games, que serão baixados e gerenciados pela plataforma Bifrost.",
          "tags": [ ],
          "slug": "bifrost-games",
          "is_verified": 0,
          "created_at": "09/03/2015",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_target": "B2C",
          "business_phase": "Fora de Operação",
          "business_model": "SaaS",
          "uf": "RJ",
          "state": "Rio de Janeiro",
          "city": "Campos dos Goytacazes",
          "place": "Campos dos Goytacazes - RJ",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Entretenimento"
          }
      },
      {
          "id": "0c3adc11-82d9-4f0e-bd3f-65d51a02e464",
          "name": "Winfit ",
          "tags": [ ],
          "slug": "winfit",
          "is_verified": 0,
          "created_at": "21/06/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "business_model": "SaaS",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Viçosa",
          "place": "Viçosa - MG",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Agronegócio"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/gflgc2oitf3xs9cl5dqv.opt.png",
          "id": "0c463189-f759-43d2-bb17-dddff3492df2",
          "name": "Mosketeiros",
          "description": "O Mosketeiros é um site de intermediação de vendas, que visa 1º reunir as intenções de compra dos consumidores para depois leiloá-las aos varejistas, o chamado leilão reverso. O objetivo com isso é trazer o poder de barganha para a mão do consumidor e conseguir a melhor condição do mercado.",
          "tags": [ ],
          "slug": "mosketeiros",
          "is_verified": 0,
          "created_at": "01/04/2011",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "founded_at": "09/03/2013",
          "id": "0c831ae9-ee74-4463-adb6-5ef879cad17b",
          "name": "Desk14",
          "description": "Plataforma SaaS de Colaboração para apoiar pequenas e médias empresas a controlar o atendimento a clientes e gestão de equipes, de forma integrada ao e-mail.",
          "tags": [ ],
          "slug": "desk14",
          "is_verified": 0,
          "created_at": "27/02/2015",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_phase": "Fora de Operação",
          "uf": "SC",
          "state": "Santa Catarina",
          "city": "Joinville",
          "place": "Joinville - SC",
          "is_active": 0,
          "badges": [
              {
                  "name": "InovAtiva",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_inovativa.png"
              }
          ],
          "segments": {
              "primary": "Outros"
          }
      },
      {
          "id": "0c8693b6-174d-4e93-ac25-0d40a8e7292a",
          "name": "ConcurseiroOrientado",
          "description": "O ConcurseiroOrientado tem a proposta ajudar os concurseiros e estudantes a cumprirem seus objetivos, com a ferramenta online de planejamento, organização e execução dos estudos os estudantes/concurseiros estimados em  mais de 1 milhão de pessoas, têm a sua disposição uma moderna forma de planejar e organizar seus estudos e com isso obter uma preparação maior para os concursos, de forma simples e prática cumprir seus objetivos, passar nos concursos aplicados.\r\nA ferramenta é oferecida na forma de serviço online mediante assinatura por concurso prestado.",
          "tags": [ ],
          "slug": "concurseiroorientado",
          "is_verified": 0,
          "created_at": "18/12/2011",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Uberlândia",
          "place": "Uberlândia - MG",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "0cb7b469-0982-4881-ba16-d835c2a9ba20",
          "name": "euapoio.net",
          "description": "Somos um portal de financiamento colaborativo voltado para o lançamentos de startups. Nosso diferencial está na geração de renda e fomento do empreendedorismo no Brasil.",
          "tags": [ ],
          "slug": "euapoionet",
          "is_verified": 0,
          "created_at": "25/05/2012",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "RS",
          "state": "Rio Grande do Sul",
          "city": "Porto Alegre",
          "place": "Porto Alegre - RS",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/2478bce4ef3f529fb1e2ea84c52b989ef14e970f.opt.png",
          "founded_at": "31/12/2012",
          "id": "0cceea10-474c-438b-b297-0c6783c84795",
          "name": "We Are Heroes",
          "short_description": "We Are Heroes",
          "tags": [ ],
          "slug": "we-are-heroes",
          "is_verified": 0,
          "created_at": "11/04/2019",
          "updated_at": "05/11/2019",
          "employees": "11-20",
          "business_phase": "Fora de Operação",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Belo Horizonte",
          "place": "Belo Horizonte - MG",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Vendas e Marketing"
          }
      },
      {
          "id": "0cd19723-db11-4932-abca-5c019f816892",
          "name": "ABIT",
          "company_name": "ABIT",
          "short_description": "A odisseia de um programador depressivo ",
          "tags": [
              "Internet"
          ],
          "slug": "abit",
          "is_verified": 0,
          "created_at": "26/10/2017",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_target": "B2B2C",
          "business_phase": "Fora de Operação",
          "business_model": "SaaS",
          "uf": "RJ",
          "state": "Rio de Janeiro",
          "city": "Rio de Janeiro",
          "place": "Rio de Janeiro - RJ",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Outros"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/gaou6hj5ycyb520oo0b9.opt.png",
          "id": "0ce35336-5cdd-473e-997c-fdeeecc43625",
          "name": "Do Primeiro ao Quinto",
          "tags": [ ],
          "slug": "do-primeiro-ao-quinto",
          "is_verified": 0,
          "created_at": "21/06/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "business_model": "SaaS",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Belo Horizonte",
          "place": "Belo Horizonte - MG",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Educação"
          }
      },
      {
          "id": "0ceb745b-0a9e-4916-b94c-392ec370fb91",
          "name": "Ápis Intelligent Solutions",
          "description": "A Ápis-IS desenvolve soluções inteligentes para o mercado financeiro, utilizando para isso métodos computacionais avançados.\r\n\r\nCom uma forte associação à área acadêmica, a Ápis-IS busca aliar conhecimento técnico de ponta com experiência de mercado e atua principalmente na pesquisa e desenvolvimento de softwares para o mercado financeiro.\r\n\r\nA equipe integrante possui uma vasta experiência profissional e formação de excelência, com mestrandos e doutorandos.",
          "tags": [ ],
          "slug": "apis-intelligent-solutions",
          "is_verified": 0,
          "created_at": "20/05/2011",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "RJ",
          "state": "Rio de Janeiro",
          "city": "Rio de Janeiro",
          "place": "Rio de Janeiro - RJ",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "founded_at": "18/11/2014",
          "id": "0d2152ed-bb5a-4ad4-b568-f767e1403230",
          "name": "InvestFÁCIL",
          "short_description": "Um novo jeito de investir em imóveis, simples. Fazendo os juros trabalharem por você e não contra.",
          "description": "Um novo jeito de investir em imóveis, simples. Fazendo os juros trabalharem por você e não contra.",
          "tags": [ ],
          "slug": "investfacil",
          "is_verified": 0,
          "created_at": "19/11/2014",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_target": "P2P",
          "business_phase": "Fora de Operação",
          "business_model": "E-commerce",
          "uf": "TO",
          "state": "Tocantins",
          "city": "Palmas",
          "place": "Palmas - TO",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Finanças"
          }
      },
      {
          "founded_at": "31/03/2015",
          "id": "0d23bb86-6701-4225-b606-2ab0a618f829",
          "name": "Investstartup",
          "short_description": "O Investstartup é uma plataforma de equity-crowdfunding que busca fomentar projetos inovadores.",
          "description": "O Investstartup é uma plataforma de equity-crowdfunding que busca fomentar projetos inovadores.",
          "tags": [ ],
          "slug": "investstartup",
          "is_verified": 0,
          "created_at": "06/05/2015",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_phase": "Fora de Operação",
          "business_model": "Outros",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Belo Horizonte",
          "place": "Belo Horizonte - MG",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Finanças"
          }
      },
      {
          "founded_at": "06/07/2015",
          "id": "0d3d2132-0751-4d45-9692-643fb6cd323f",
          "name": "iGuardanapo",
          "description": "iGuardanapo surgiu pra você pedir sua música favorita em qualquer local que estiver. É um APP gratuito para facilitar a interação do ouvinte com o artista que estiver cantando no bar/restaurante/evento ou em qualquer outro local. ",
          "tags": [ ],
          "slug": "iguardanapo",
          "is_verified": 0,
          "created_at": "07/07/2015",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_phase": "Fora de Operação",
          "uf": "MT",
          "state": "Mato Grosso",
          "city": "Cáceres",
          "place": "Cáceres - MT",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Mobile"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/fxcviwah2c3fpls9zx0v.opt.png",
          "id": "0d51eed0-2830-4bc9-82b4-917ff193576e",
          "name": "Kecaia",
          "description": "A Kecaia é um portal de ofertas de moda e acessórios com uma proposta diferenciada: descobrir as melhores quedas de preços da internet. Todos os dias, os produtos das principais lojas online são monitorados, até que uma queda de preço seja identificada e disponibilizada em nosso site. Para evitar pegadinhas, em todos os produtos é possível encontrar um gráfico de histórico de preço, comprovando ou não que existe uma real promoção do produto. Na Kecaia todo dia é dia de liquidação. São milhares de quedas de preços por dia para você aproveitar!",
          "tags": [ ],
          "slug": "kecaia",
          "is_verified": 0,
          "created_at": "06/06/2014",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2C",
          "business_phase": "Fora de Operação",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "E-commerce"
          }
      },
      {
          "founded_at": "03/04/2017",
          "id": "0d5e8760-7f05-4d8a-9c3d-728b3532739b",
          "name": "Robotica Educacional",
          "tags": [
              "robotica educacional",
              "kit escola",
              "robotica didatica",
              "kit arduino",
              "braço mecanico",
              "robotica escolar",
              "kit escolar robotica",
              "braço robotico",
              "braço robotico didatico"
          ],
          "slug": "robotica-educacional",
          "is_verified": 0,
          "created_at": "08/11/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2C",
          "business_phase": "Fora de Operação",
          "business_model": "Hardware",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Educação"
          }
      },
      {
          "id": "0d6cb6c7-2bcb-467f-b81e-a98b99ff3200",
          "name": "Tá Na Obra",
          "description": "O Tá Na Obra é o primeiro mercado comunitário confiável para pessoas anunciarem, descobrirem e reservarem equipamentos voltados para construção civil seja de um computador ou de um celular.\r\n\r\nNão importa se você precisa de uma furadeira por um dia, uma betoneira por uma semana ou uma caçamba por um mês: o Tá Na Obra conecta as pessoas ao compartilhamento por um custo baixo e fácil acesso.\r\n\r\nTá Na Obra é a maneira mais fácil de transformar seu equipamento ocioso em dinheiro e mostrá-lo para milhões de pessoas.\r\n",
          "tags": [ ],
          "slug": "ta-na-obra",
          "is_verified": 0,
          "created_at": "03/09/2014",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_target": "P2P",
          "business_phase": "Fora de Operação",
          "uf": "AM",
          "state": "Amazonas",
          "city": "Manaus",
          "place": "Manaus - AM",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Construção Civil"
          }
      },
      {
          "id": "0d6fb526-7697-47b8-b720-02ad71c9f9a2",
          "name": "Se eu Morrer Primeiro",
          "description": "O site funciona como um cofre digital online que armazena segredos durante toda a sua vida, sendo revelados apenas após a sua morte. \nArmazena mensagens, imagens ou vídeos em uma plataforma 100% restrita e segura.\nVocê poderá cadastrar até 40 pessoas para receber por e-mail as mensagens após a sua morte.\nAo se cadastrar você terá que informar 2 pessoas de confiança que ficaram responsáveis em nos avisar sobre a sua morte para iniciarmos a pesquisa com seus familiares e amigos para confirmarmos a sua morte. Em seguida asseguramos enviar as mensagens aos beneficiários. ",
          "tags": [ ],
          "slug": "se-eu-morrer-primeiro",
          "is_verified": 0,
          "created_at": "02/12/2012",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "MS",
          "state": "Mato Grosso do Sul",
          "city": "Campo Grande",
          "place": "Campo Grande - MS",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "founded_at": "13/08/2015",
          "id": "0dade0cd-6293-4ef4-bff1-6c510e241fbb",
          "name": "Curso Jaguar - Preparatório Militar",
          "description": "O Curso Jaguar é uma Escola Preparatória para os Concursos da Marinha, Exército, Aeronáutica, Polícia Militar, dentre outros.\r\n\r\nSeu diferencial é que ela é totalmente online, ou seja, o aluno poderá se preparar no horário e local que melhor lhe convier, entretanto, o mesmo será submetido a mesma carga horária ou até superior aos dos cursinhos tradicionais.",
          "tags": [ ],
          "slug": "curso-jaguar-preparatorio-militar",
          "is_verified": 0,
          "created_at": "14/08/2015",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "business_model": "Outros",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Educação"
          }
      },
      {
          "id": "0dbef13c-ecf5-430f-a610-a6973f79e895",
          "name": "Loko de Fome",
          "short_description": "Online food delivery website",
          "description": "Online food delivery website",
          "tags": [ ],
          "slug": "loko-de-fome",
          "is_verified": 0,
          "created_at": "17/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "RS",
          "state": "Rio Grande do Sul",
          "city": "Rio Grande",
          "place": "Rio Grande - RS",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Mobile"
          }
      },
      {
          "id": "0dc350f2-276d-456b-9ecd-0871236a59d5",
          "name": "Axado",
          "short_description": "Axado is a SaaS-based online freight services company developing solutions for managing and monitoring shipments of orders.",
          "description": "Axado is a SaaS-based online freight services company developing solutions for managing and monitoring shipments of orders.",
          "tags": [ ],
          "slug": "axado",
          "is_verified": 0,
          "created_at": "17/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "SC",
          "state": "Santa Catarina",
          "city": "Florianópolis",
          "place": "Florianópolis - SC",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "founded_at": "21/09/2015",
          "id": "0e7d3b8c-6b3b-4cec-b0d3-f9155fe8040f",
          "name": "Pointe",
          "description": "O Pointe é um sistema para transporte coletivos baseado em hardware e software, oferecendo informação, interação e acessibilidade aos usuários e estratégias em logística para as empresas de transporte coletivo.",
          "tags": [ ],
          "slug": "pointe",
          "is_verified": 0,
          "created_at": "06/11/2015",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_target": "B2B",
          "business_phase": "Fora de Operação",
          "business_model": "E-commerce",
          "uf": "RJ",
          "state": "Rio de Janeiro",
          "city": "Macaé",
          "place": "Macaé - RJ",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Hardware"
          }
      },
      {
          "id": "0e81095a-ca80-4ad7-9746-8ff68c75ec62",
          "name": "MakesAPP",
          "description": "O Makes App nasce com a missão de fornecer a todos uma plataforma simples para o desenvolvimento de Apps nas plataformas iOS, Android, Web Os e Firefox OS. \r\n\r\nVocê personaliza seu App em minutos, inseri diversos widgets e funções, e se você precisa de algo customizado a Makes App pode atender sua necessidade. \r\n\r\nTudo isso em uma plataforma simples e objetiva. \r\n\r\nOs Apps criados podem ser publicados nas lojas da Google Play e App Store.",
          "tags": [ ],
          "slug": "makesapp",
          "is_verified": 0,
          "created_at": "18/10/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "São Lourenço",
          "place": "São Lourenço - MG",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "0e835124-ed09-45d4-b23d-7e8e9cc4227f",
          "name": "Tarefeiro",
          "description": "Sistema de oportunidades e projetos baseado em crowdsourcing, onde clientes podem publicar suas oportunidades ou projetos e os tarefeiros (profissionais) fazem ofertas com seu preço e o tempo de execução, com isso o cliente pode avaliar cada tarefeiro e ter um ótimo custo beneficio para seu projeto.\n\nPara Profissionais\nhttp://www.tarefeiro.com.br/sistema-de-tarefas-projetos-freelancer-on-line\n\nPara ser nosso Parceiro\nhttp://www.tarefeiro.com.br/seja-parceiro-tarefeiro",
          "tags": [ ],
          "slug": "tarefeiro",
          "is_verified": 0,
          "created_at": "17/10/2011",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "DF",
          "state": "Distrito Federal",
          "city": "Brasília",
          "place": "Brasília - DF",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "id": "0e87c34a-67cf-4c30-af15-ddcb7d35f7a8",
          "name": "iPolítico",
          "description": "O iPolítico é uma ferramenta de uso importante em sua campanha eleitoral. Com ela, será possível administrar um site moderno e muito útil.\r\n\r\nÉ possível adicionar páginas, notícias, álbum de fotos, enquetes, arquivos multimídia da campanha (jingles, vídeos e imagens em diversos formatos), acompanhar os recados dos eleitores (com uma prévia administração de cada recado antes de ir ao ar), acompanhar as visitas ao site em cada página e sessão, adicionar inúmeros usuários com níveis hierárquicos e muito mais!",
          "tags": [ ],
          "slug": "ipolitico",
          "is_verified": 0,
          "created_at": "06/06/2012",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "BA",
          "state": "Bahia",
          "city": "Salvador",
          "place": "Salvador - BA",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/curocare.png",
          "id": "0e9080f3-e136-401a-a673-4324ccdcdb4d",
          "name": "CuroCare",
          "description": "O HUB Digital da Atenção Domiciliar.\nSomos uma equipe de profissionais dedicados a criar soluções que facilitam o dia-a-dia das pessoas envolvidas com atenção domiciliar: pacientes, familiares, profissionais ou empresas.\nE Cupons e Descontos !",
          "tags": [ ],
          "slug": "curocare",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "RS",
          "state": "Rio Grande do Sul",
          "city": "Porto Alegre",
          "place": "Porto Alegre - RS",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/yhpk9bieu9ts7ylvqaxu.opt.png",
          "id": "0eb03ec8-84a4-4ed1-b7ff-ee96f68640a9",
          "name": "administri",
          "short_description": "Controle financeiro pessoal de forma simples e rápida.",
          "description": "Controle financeiro pessoal de forma simples e rápida.",
          "tags": [ ],
          "slug": "administri",
          "is_verified": 0,
          "created_at": "28/02/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "MT",
          "state": "Mato Grosso",
          "city": "Cuiabá",
          "place": "Cuiabá - MT",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/lara-chat.png",
          "id": "0eb3f797-850f-4ad9-9391-939337d999e6",
          "name": "Lara Chat",
          "short_description": "Ajuda deliverys a automatizar o atendimento via redes sociais, através de um chat bot.",
          "description": "Ajuda deliverys a automatizar o atendimento via redes sociais, através de um chat bot.",
          "tags": [ ],
          "slug": "lara-chat",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "SC",
          "state": "Santa Catarina",
          "city": "Florianópolis",
          "place": "Florianópolis - SC",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/2782652c79551407ccd4ad9f941b982e2b0c9406.opt.png",
          "founded_at": "11/02/2015",
          "id": "0ee40393-3fbd-4851-ac09-2be877a35131",
          "name": "Tster",
          "short_description": "Tster is a wireframe, mockup and prototyping tool that allows users to sketch ideas directly from the iPhone without a single line of code.",
          "description": "Tster is innovating the way of how designers, engineers, agencies and startups are organized to test, validate and share ideas. We are bringing a new experience to create wireframes, mockups and prototypes for mobile devices.  People today suffer from complexity with the number of tools to organize your work, staying dependent on more than one tool to sketch an idea.  With Tster, you can start many projects you want to work. In each project you can create pages, add interactions and transitions as you wish.  Add, adjust, and edit elements on the artboard, rectangle, rounded rectangle, ellipse, text and icons. One touch to select the elements and display options: duplicate, send to front, send to back and delete. Has available one native element library making their fastest and elegant creation, Navigations Bar, Tab Bar and Table View. For example, do only one Tab Bar and refill on other pages, keeping any interaction, gestures or screen transitions added earlier, avoiding rework.  Work from offline anywhere, feel free to drop your imagination and turn your ideas into reality, this is magic!",
          "tags": [ ],
          "slug": "tster",
          "is_verified": 0,
          "created_at": "11/04/2019",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "SC",
          "state": "Santa Catarina",
          "city": "Florianópolis",
          "place": "Florianópolis - SC",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Desenvolvimento de Software"
          }
      },
      {
          "founded_at": "15/06/2015",
          "id": "0ef9565a-be9b-44d8-983a-8a001eac69ca",
          "name": "FIELO",
          "description": "Aplicativo móvel para Programa de Fidelidade . A criação e personalização do app com a marca do cliente é gratuita e seu uso até 25 usuários também não tem custo, a partir de 26 clientes tem um taxa mensal de R$ 19,90. Dentre vários outros planos com funções adicionais.",
          "tags": [ ],
          "slug": "fielo",
          "is_verified": 0,
          "created_at": "16/06/2015",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Fora de Operação",
          "business_model": "SaaS",
          "uf": "PE",
          "state": "Pernambuco",
          "city": "Recife",
          "place": "Recife - PE",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Outros"
          }
      },
      {
          "id": "0f0c4f25-6519-4748-a5cd-12a21810dbec",
          "name": "HairBooking",
          "description": "Nós acreditamos que a sua vida possa ser simplificada com 5 cliques para agendar serviços e horários. Desafiamos o estado atual do processo de agendar por telefone, queremos fazer você ter mais benefícios, praticidade, ter controle das ações no momento que pensar em ficar mais linda em seu salão de beleza. Se você é como nós, o HairBooking foi feito para você. Agende horários, serviços e muito mais com facilidade, praticidade e rapidez pela internet em seu salão de beleza ou clínica estética",
          "tags": [ ],
          "slug": "hairbooking",
          "is_verified": 0,
          "created_at": "05/08/2013",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "PR",
          "state": "Paraná",
          "city": "Toledo",
          "place": "Toledo - PR",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/megasoares-qrcode.png",
          "founded_at": "01/12/2017",
          "id": "0f265c75-989c-42b9-9a54-8a89c5c8f460",
          "name": "MegaSoares - QRCode",
          "company_name": "MegaSoaers - QRCode",
          "short_description": "Na MegaSoares QRCode os clientes terá uma nova experiência de compra – aqui você controla toda experiência de compra dentro da loja.",
          "description": "A  Loja do Futuro – O novo Varejo de Eletrodomésticos e Eletroeletrônicos Brasileiro e a primeira da América latina!! Nunca foi tão fácil e seguro efetuar suas compras! O mundo mudou e com ele surge uma nova forma de comprar e interagir com os seus produtos favoritos. Na MegaSoares QRCode os clientes terá uma nova experiência de compra – aqui você controla toda experiência de compra dentro da loja. Como? Abaixando nosso aplicativo, você irá capturar o QRcode do seu produto que você curte, irá aparecer o produto escolhido e  pronto!! Agora é só escolher a forma de pagamento e receber o produto  no conforto de sua casa!!\nFoi rápido Né!!\nA ainda tem um espaço interativo com internet grátis pra você chamar a galera, e ainda participar de eventos culturais, lançamentos de produtos e diversas palestras.\nNosso objetivo é proporcionar o melhor serviço com produtos de qualidade que superem as expectativas dos nossos clientes\nChame a família e os amigos e venha capturar o seu produto favorito.",
          "tags": [
              "Serviços Profissionais",
              "científicos ou técnicos"
          ],
          "slug": "megasoares-qrcode",
          "is_verified": 0,
          "created_at": "18/12/2017",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Fora de Operação",
          "business_model": "Marketplace",
          "uf": "PR",
          "state": "Paraná",
          "city": "Maringá",
          "place": "Maringá - PR",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Varejo / Atacado"
          }
      },
      {
          "founded_at": "31/12/2014",
          "id": "0fac734a-f775-4981-96aa-a707ebd1de2d",
          "name": "K_R TECNOLOGIA DE SOFTWARE",
          "description": "Empresa criada para fornecer soluções de controle e monitoramento de grupos\ngeradores, garantindo assim a eficiência dos equipamento e prevenção contra falhas.\nOs grupos geradores são utilizados para suprir a necessidade de energia elétrica de\nforma confiável em empreendimentos de todo e qualquer porte, para quaisquer\naplicações, como indústrias, supermercados, shopping centers, hospitais, edifícios\nresidenciais e comerciais, hotéis e outros.\n\nA empresa também objetiva desenvolver futuramente projetos de automação\nindustrial para garantir produtividade às empresas através de automatização de\nprocessos, controle de falhas e monitoramento da performance de equipamentos\nindustriais.",
          "tags": [ ],
          "slug": "k_r-tecnologia-de-software",
          "is_verified": 0,
          "created_at": "22/05/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Fora de Operação",
          "business_model": "SaaS",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Belo Horizonte",
          "place": "Belo Horizonte - MG",
          "is_active": 0,
          "badges": [
              {
                  "name": "Troposlab",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_troposlab.png"
              },
              {
                  "name": "GO Minas",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_go_minas.png"
              }
          ],
          "segments": {
              "primary": "Energia"
          }
      },
      {
          "founded_at": "31/12/2014",
          "id": "0fb7fcb7-5767-41ec-a7ff-58e526e356a5",
          "name": "Decisório",
          "short_description": "Decisório é um app que te ajuda a tomar a decisão mais segura, com base no que é mais importante para você, sem sorteio.",
          "description": "Decisório é um app que te ajuda a tomar a decisão mais segura, com base no que é mais importante para você, sem sorteio.",
          "tags": [ ],
          "slug": "decisorio",
          "is_verified": 0,
          "created_at": "26/04/2015",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_target": "B2C",
          "business_phase": "Fora de Operação",
          "uf": "BA",
          "state": "Bahia",
          "city": "Lauro de Freitas",
          "place": "Lauro de Freitas - BA",
          "is_active": 0,
          "badges": [ ],
          "segments": {
              "primary": "Outros"
          }
      },
      {
          "id": "0fc28092-11e1-4ab6-8dad-8451d7b5281f",
          "name": "Minha Saúde Online",
          "description": "Vendemos  segurança, prevenção e qualidade de vida.  Minha Saúde Online armazena informações médicas em cloud e disponibiliza diversas ferramentas para prevenção de saúde.  Agora todas as suas informações de saúde (exames, receitas, medicamentos, consultas e muito mais) ficam em um único local, com acesso simples e rápido e permitindo compartilhamento com seu médico. Em caso de emergência, nossos diversos dispositivos exclusivos permitem acesso ao histórico médico e enviamos automaticamente um email e sms aos contatos cadastrados (familiares e médicos) informando a localização e o ocorrido.",
          "tags": [ ],
          "slug": "minha-saude-online",
          "is_verified": 0,
          "created_at": "03/10/2011",
          "updated_at": "05/11/2019",
          "employees": "1-5",
          "business_phase": "Fora de Operação",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 0,
          "badges": [ ],
          "segments": null
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/ffx.png",
          "founded_at": "23/01/2015",
          "id": "084bc36b-bb1a-443a-acb8-6c89b90118e3",
          "name": "FFX",
          "company_name": "FFX",
          "description": "Propomos uma carteira diversificada de serviços para nossos clientes, prestando assessoria personalizada para otimizar qualquer operação. Nossa independência perante aos bancos e instituições privadas, e nossas parcerias com diversas instituições financeiras, nos permite oferecer um vasto leque de serviços relacionados à área de câmbio com taxas reduzidas. Através do nosso relacionamento com os mais diversos bancos, atuamos como um facilitador, operando de forma transparente e ágil com objetivo de gerar valor à sua operação.",
          "tags": [
              "Serviços Profissionais",
              "científicos ou técnicos"
          ],
          "slug": "ffx",
          "is_verified": 0,
          "created_at": "20/10/2017",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Tração",
          "business_model": "Outros",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Finanças"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/08/profile_34473d25-b214-4d97-8e50-e3e94acb2df6.png",
          "founded_at": "14/01/2019",
          "id": "084d626a-d05b-4bb5-ac38-e6f11d5dd669",
          "name": "Devninjas I.T Solutions",
          "company_name": "DEVNINJAS SOLUÇÕES EM TECNOLOGIA LTDA",
          "short_description": "Somos transformadores Digitais. Somos ninjas.",
          "description": "Somos uma startup focada no desenvolvimento de soluções em aplicações móveis (Android e\niOS), Sistemas Web e Soluções em Outsourcing de Profissionais para Desenvolvimento e TI. Inovação,\nqualidade no desenvolvimento e uma cultura de excelência, tanto na comunicação, quanto no desenvolvimento de projetos são o que direcionam a visão de negócio de nossos clientes para as soluções desenvolvidas.\n\nCom uma equipe especializada nas mais diversas ferramentas, linguagens e processos de mercado, criamos soluções que inovam e promovem a transformação digital e cultural de nossos clientes.\n\nTudo de forma personalizada.",
          "tags": [
              "Mobile",
              "IA",
              "desenvolvimentodesoftware",
              "APIS",
              "integrações"
          ],
          "slug": "devninjas-i-t-solutions",
          "is_verified": 0,
          "created_at": "28/11/2018",
          "updated_at": "19/11/2019",
          "employees": "21-50",
          "business_target": "B2B",
          "business_phase": "Tração",
          "business_model": "SaaS",
          "uf": "PR",
          "state": "Paraná",
          "city": "Maringá",
          "place": "Maringá - PR",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Desenvolvimento de Software"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/mjjzsyqinvyrbzh6a16o.opt.png",
          "founded_at": "31/10/2013",
          "id": "08785d5c-a1ba-46cb-85a4-4533dbffebda",
          "name": "Treinus",
          "company_name": "Treinus Tecnologia e Serviços Ltda",
          "description": "A Treinus nasceu para possibilitar que as pessoas vivam melhor e superem seus limites, todos os dias.\r\nPor isso, construímos uma plataforma ampla que gera facilidade e praticidade para que todos possam mudar suas vidas através do esporte.\r\nSomos um ecossistema multifuncional que inspira a prática esportiva com apoio dos melhores especialistas.\r\n\r\nConectamos pessoas, inspirando a prática esportiva.",
          "tags": [
              "Saúde",
              "bem-estar"
          ],
          "slug": "treinus",
          "is_verified": 0,
          "created_at": "30/11/2018",
          "updated_at": "05/11/2019",
          "employees": "21-50",
          "business_target": "B2B2C",
          "business_phase": "Tração",
          "business_model": "Outros",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Belo Horizonte",
          "place": "Belo Horizonte - MG",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Esportes"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/recrutamento-inteligente.png",
          "id": "08b4d617-efa3-47a9-b63f-9dde24f87731",
          "name": "Recrutamento Inteligente",
          "company_name": "RI SOLUÇÕES DIGITAIS LTDA",
          "short_description": "Plataforma de gestão e recrutamento e seleção",
          "description": "Plataforma de gestão e recrutamento e seleção que une análise humana e inteligência artificial para apoiar o RH. Redução de tempo na atração de talentos.",
          "tags": [
              "recrutamento",
              "saas",
              "talentos",
              "recrutamento e seleção"
          ],
          "slug": "recrutamento-inteligente",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Tração",
          "business_model": "SaaS",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Belo Horizonte",
          "place": "Belo Horizonte - MG",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Recursos Humanos"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/bawi.png",
          "founded_at": "25/04/2017",
          "id": "08c25381-494a-48fb-8f36-d6ae00ca2bc0",
          "name": "BAWI",
          "company_name": "BAWI",
          "short_description": "Fintech que atua no fornecimento de tecnologias para recuperação de crédito de maneira mais rápida, precisa e barata.",
          "description": "O Brasil, conhecido mundo afora como o país do futuro, amarga a liderança em um triste ranking que perfaz sua história no passado e no presente, o de países com a maior taxa real de juros da economia (descontada a inflação). Isso é o que mostra um estudo da Administradora de Recursos Infinity Asset Management.\r\nEssa situação acaba por ser sempre um entrave ao potencial de desenvolvimento do país, uma vez que as altas taxas de juros dificultam o acesso ao crédito e desestimulam os investimentos necessários para o crescimento.\r\nContudo, observando com mais profundidade a composição dos juros, nota-se que essa condição de taxas elevadas não se justifica somente pela conjuntura econômica, mas também pelos altos custos com a recuperação de crédito.\r\nA recuperação de crédito é uma atividade ainda realizada predominantemente por meio de práticas tradicionais e massificadas.\r\nNo intuito de inovar nesse cenário, a Bawi propõe soluções tecnológicas para uma recuperação de crédito mais rápida, precisa e barata. A Bawi acredita que pode contribuir muito para a universalização do acesso ao crédito em condições justas e que pode ajudar a materializar, hoje, a promessa de país do futuro.",
          "tags": [
              "Finanças"
          ],
          "slug": "bawi",
          "is_verified": 0,
          "created_at": "15/05/2017",
          "updated_at": "05/11/2019",
          "employees": "21-50",
          "business_target": "B2B",
          "business_phase": "Tração",
          "business_model": "Marketplace",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Patos de Minas",
          "place": "Patos de Minas - MG",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Advertising"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/08/buskar.png",
          "founded_at": "31/12/2017",
          "id": "08d15fc8-0b12-4864-a708-1d2f6d702869",
          "name": "Buskar",
          "short_description": "Plataforma de otimização de rotas e gestão de transporte de veículos",
          "description": "Uma plataforma de otimização de rotas e gestão\nde transporte de veículos. Utilizando uma rede de pátios e transportadores\ncredenciados, a empresa remove, armazena, aglutina\ne entrega veículos em seus destinos finais.",
          "tags": [ ],
          "slug": "buskar",
          "is_verified": 1,
          "created_at": "22/05/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Tração",
          "business_model": "SaaS",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Belo Horizonte",
          "place": "Belo Horizonte - MG",
          "is_active": 1,
          "badges": [
              {
                  "name": "Troposlab",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_troposlab.png"
              },
              {
                  "name": "BMG Uptech",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_bmg_uptech.png"
              },
              {
                  "name": "Conecta",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_conecta.png"
              }
          ],
          "segments": {
              "primary": "Logística e Mobilidade Urbana"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/caveon.png",
          "founded_at": "29/11/2016",
          "id": "08dc2678-01c3-4290-98b6-c0ad569d0489",
          "name": "CaveOn",
          "company_name": "CaveOn",
          "short_description": "Compre mais de 3.000 vinhos direto do Produtor e Importador pelo seu celular.",
          "description": "CaveOn é um mobile marketplace de vinhos, espumantes e afins. ",
          "tags": [
              "Internet"
          ],
          "slug": "caveon",
          "is_verified": 0,
          "created_at": "17/08/2017",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B2C",
          "business_phase": "Tração",
          "business_model": "Marketplace",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Produtos de Consumo"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/118b214acda9a42e1d044297f57d8d8fc9ea8a14.opt.png",
          "id": "091b8da8-f2c7-4687-a419-ce0e03a2981c",
          "name": "IndicaObra",
          "short_description": "Solicite propostas e contrate sua obra online",
          "description": "Contratação de serviços da construção civil. Sistema de orçamento pré-definido o cliente monta o pacote de serviços, compara e contrata, realizando os pagamentos da obra na plataforma. Os fornecedores são validados, certificados e ranqueados pelo NPS",
          "tags": [ ],
          "slug": "indicaobra",
          "is_verified": 0,
          "created_at": "17/11/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B2C",
          "business_phase": "Tração",
          "business_model": "Marketplace",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [
              {
                  "name": "ACE",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_ace.png"
              }
          ],
          "segments": {
              "primary": "Construção Civil"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/score.png",
          "founded_at": "30/06/2016",
          "id": "092263c1-2525-4c8b-959b-ab4431b7a112",
          "name": "Score",
          "company_name": "Score",
          "description": "Todo profissional de educação envolvido no aprendizado de um grupo de alunos já se perguntou o que deve ser feito para seus alunos aprenderem cada vez mais. Para isso, é preciso saber não somente como está o desempenho do estudantes nos exames oficiais, mas, principalmente, entender os motivos que o explicam.\nA Plataforma de Desempenho da Score fornece para os educadores a tradução dos microdados dos alunos nos exames oficiais, apresentando uma devolutiva pedagógica das evidências relacionadas ao desempenho dos alunos, comparando-os aos alunos de um grupo de escolas semelhantes. Tudo isso de modo claro e acessível para auxiliar o planejamento pedagógico da escola, e ainda com um grande diferencial: Fornecendo um plano de ação pedagógico através das informações obtidas.\nAtravés de um investimento mensal fixo acessível, esta plataforma fornece para a escola um instrumento de diagnóstico pedagógico que permita ao educador o aprimoramento na realização do seu fazer pedagógico.",
          "tags": [
              "Big Data"
          ],
          "slug": "score",
          "is_verified": 0,
          "created_at": "30/10/2017",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Tração",
          "business_model": "Venda de dados",
          "uf": "CE",
          "state": "Ceará",
          "city": "Fortaleza",
          "place": "Fortaleza - CE",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Educação"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/icx-labs.png",
          "id": "093992b1-7c8d-4f6c-aabc-a91179d44095",
          "name": "ICX Labs",
          "description": "Criamos produtos que melhoram os processos de negócios no varejo por meio de soluções IoT, inteligência artificial e analytics. Focamos no desenvolvimento de software e hardware, inclusive na exploração de informações através de sistemas de BI e Big Data.",
          "tags": [ ],
          "slug": "icx-labs",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B2C",
          "business_phase": "Tração",
          "business_model": "Hardware",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Construção Civil"
          }
      },
      {
          "founded_at": "31/01/2014",
          "id": "094c932e-983b-41cf-981e-fdec51f38539",
          "name": "Denox",
          "description": "Tranquilidade para você, em qualquer hora e lugar. Controle de pessoas, segurança e automação residencial sem instalações complexas e obras.\r\nMissão\r\nAcreditamos em paz de espírito, autonomia e comodidade para uma sociedade mais colaborativa.\r\nInformações gerais\r\nAmpliar a experiência de gestão de residências e pequenos estabelecimentos, provendo controle, segurança e conforto, em tempo real e a partir de qualquer lugar.\r\nDescrição\r\nOi! Aqui vamos falar sobre o universo que gira em torno da sua casa, e de um monte de coisas que podem facilitar, dar mais conforto e segurança à sua vida doméstica. Fique à vontade para comentar, compartilhar, estaremos sempre aqui para conversar. E se quiser saber mais sobre o que nossa empresa pode fazer por você e sua casa, fale com a gente.",
          "tags": [ ],
          "slug": "denox",
          "is_verified": 0,
          "created_at": "14/11/2014",
          "updated_at": "05/11/2019",
          "employees": "21-50",
          "business_target": "B2C",
          "business_phase": "Tração",
          "business_model": "Marketplace",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Nova Lima",
          "place": "Nova Lima - MG",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Outros"
          }
      },
      {
          "founded_at": "26/01/2015",
          "id": "09875802-79ca-421f-b00a-c2280a06d94b",
          "name": "Bom Corpo",
          "description": "Saúde e bem-estar são os princípios que regem o universo fitness Bom Corpo. Acreditamos em uma vida plena, repleta de alegrias e momentos de descontração com a família e os amigos. Defendemos a prática esportiva como uma injeção de adrenalina fundamental para enfrentar o dia a dia de uma forma saudável. E queremos contagiar, você, com nossa paixão por esse universo tão estimulante. ",
          "tags": [ ],
          "slug": "bom-corpo",
          "is_verified": 0,
          "created_at": "21/07/2015",
          "updated_at": "05/11/2019",
          "employees": "21-50",
          "business_phase": "Tração",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Varejo / Atacado"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2020/01/meu-chapa-logo_e6b07573-d5c9-4d5f-b2be-c1571e55d1e9.jpg",
          "founded_at": "10/09/2019",
          "id": "09bd8311-647f-407b-9d57-6dc4b848bd12",
          "name": "Meu Chapa",
          "short_description": "O jeito mais fácil de descarregar entregas. Uma plataforma que conecta caminhoneiros e transportadoras a ajudantes quando e onde precisarem.",
          "description": "Uma plataforma que conecta caminhoneiros e transportadoras a chapas, tornando mais fácil carregar e descarregar entregas.\n\nO app traz mais segurança para o caminhoneiro, que poderá encontrar os melhores profissionais para atendê-lo onde ele precisar.",
          "tags": [
              "Entregas",
              "Logística",
              "LogTech",
              "Caminhoneiro",
              "Transportadora",
              "Tracking",
              "Frete",
              "GestãoLogística"
          ],
          "slug": "meu-chapa",
          "is_verified": 0,
          "created_at": "28/01/2020",
          "updated_at": "28/01/2020",
          "employees": "1-5",
          "business_target": "B2C",
          "business_phase": "Tração",
          "business_model": "Marketplace",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Logística e Mobilidade Urbana"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/12069-450b5a09ee8eb10879afc5b267e9a608bd0a0500.opt.png",
          "founded_at": "09/02/2015",
          "id": "09c7fad1-4316-43b6-b6be-7f56854fc14b",
          "name": "ADDLOG",
          "company_name": "ADDLOG Soluções Tecnológicas LTDA",
          "short_description": "Gestão operacional logística otimizada e gestão de frotas integradas em uma solução de rastreamento GPS e telemetria veícular",
          "tags": [
              "AI",
              "Rastreamento GPS",
              "Telemetria veicular",
              "Gestão de frota",
              "Gestão logística"
          ],
          "slug": "addlog",
          "is_verified": 1,
          "created_at": "08/04/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Tração",
          "business_model": "SaaS",
          "uf": "PR",
          "state": "Paraná",
          "city": "Curitiba",
          "place": "Curitiba - PR",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Logística e Mobilidade Urbana"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/03/1158-d4b277ea2a51baef01c76a2a9af0e08be429fda8.opt.png",
          "founded_at": "28/07/1998",
          "id": "09c8a413-5c8e-4c87-af57-1242fd7d5464",
          "name": "KCMS",
          "company_name": "KCMS",
          "short_description": "Desenvolvimento de Softwares de Gestão para Varejo, PDV, ERP e Nuvem.",
          "description": "Desenvolvemos soluções de softwares de gestão, ponto de venda, ERP e nuvem para micro, pequenas e médias empresas do varejo, potencializando os resultados através de mais gestão e controle.Atualmente contamos com mais de 6.000 usuários das soluções e estamos voltando todas as aplicações para nuvem.",
          "tags": [
              "Desenvolvimento de Soluções de Gestão",
              "Fábrica de Softwares",
              "Automação Comercial",
              "PDV",
              "POS",
              "ERP",
              "Food Service",
              "Franquias",
              "Restaurantes",
              "Fast Food",
              "Sistemas de Gestão"
          ],
          "slug": "kcms",
          "is_verified": 0,
          "created_at": "30/10/2017",
          "updated_at": "05/11/2019",
          "employees": "21-50",
          "business_target": "B2B",
          "business_phase": "Tração",
          "business_model": "SaaS",
          "uf": "SP",
          "state": "São Paulo",
          "city": "Sorocaba",
          "place": "Sorocaba - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Varejo / Atacado"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/contatows.png",
          "founded_at": "10/01/2015",
          "id": "09cea5a9-0c9b-4e71-a92a-4e5f653d2e69",
          "name": "ContatoWS",
          "company_name": "Claudio da Silva",
          "short_description": "Crie seu Endereço Digital Grátis!\nE compartilhe seus contatos e suas Redes Sociais com um clique",
          "description": "Crie seu Endereço Digital Grátis!\nE compartilhe seus contatos e suas Redes Sociais com um clique\n\nContatoWS é um endereço da web personalizado que permite que você direcione visitantes para onde quiser. Registre www.SeuNom.Contato.ws e compartilhe seus contatos, seu site, blog ou página que você controla. Não há limite em relação a quantos Endereços Digitais você pode ter.\n\n",
          "tags": [
              "Comunicação e Mídia",
              "link para whatsapp",
              "cartão de visita digital",
              "site básico",
              "site para perfil",
              "negócio"
          ],
          "slug": "contatows",
          "is_verified": 0,
          "created_at": "13/05/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B2C",
          "business_phase": "Tração",
          "business_model": "SaaS",
          "uf": "AL",
          "state": "Alagoas",
          "city": "Maceió",
          "place": "Maceió - AL",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Internet"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/02/11354-51800abb7e9d58a529510aabd008189fbd5b61c5.opt.png",
          "founded_at": "03/02/2019",
          "id": "09ef99c3-4518-47fb-b8a5-36a802a4fb1e",
          "name": "FATECOINS",
          "company_name": "FATECOINS INTERMEDIAÇÃO E AGENCIAMENTO DE SERVIÇOS LTDA",
          "short_description": "Prover recursos financeiros e intelectuais aos alunos para que empreendam em suas ideias.",
          "description": "Grandes ideias de negócios promissores se perdem nas instituições de ensino, como faculdades, universidades e escolas técnicas.\nEm geral, alunos não continuam seus projetos durante o curso na instituição e/ou após o curso. Isso acontece porque os alunos não são motivados a continuar. Muitos alunos realizam projetos apenas para serem aprovados nas disciplinas. Além disso, eles não sabem o valor de suas ideias. Responder à pergunta \"Quanto vale uma ideia?\" é complexo, especialmente, porque é difícil mensurá-la.\nAlém disso, a avaliação (ou julgamento) de apenas um professor (ou conjunto de professores) não determina o sucesso ou o fracasso de uma ideia.\nPor fim, faltam oportunidades de trabalho nas regiões mais distantes dos grandes centros urbanos.\n\nComo solução, criamos um jogo de investimentos em projetos para mensurar o valor de cada ideia e incentivar os alunos a empreender.\nEm cada instituição de ensino, os alunos desenvolvem suas ideias como projetos. Os projetos são inseridos no Fatecoins. Os alunos publicam informações relevantes sobre o desenvolvimento e recebem uma avaliação coletiva do projeto, que é realizada por alunos, professores, funcionários e ex-alunos da instituição. Todos esses participantes escolhem as melhores ideias e realizam investimentos através de uma moeda virtual, chamada fatecoins. Ao final do período letivo, os professores que acompanharam e orientaram o projeto atribuem uma nota de execução. Com os fatecoins investidos e a nota de execução, é calculado o valor final de cada ideia. Assim, respondemos à pergunta \"Quanto vale uma ideia?\". Cada projeto rende fatecoins aos investidores e aos alunos que o desenvolveram. Com os fatecoins, todos os participantes podem adquirir cupons de desconto nas empresas parceiras.\nAtravés do fatecoins, há maior motivação e comprometimento dos alunos durante o curso. Há também maior engajamento dos envolvidos na realização do projeto e no cumprimento das disciplinas. Além disso, outras habilidades e competências são promovidas (e.g. negociação, comunicação, liderança, energia, criatividade, resolução de conflitos, atitude).\nAlém disso, as pessoas de fora das instituições participantes podem comprar os cupons de desconto com dinheiro real, e o capital arrecado será, em sua maior parte, doado aos melhores projetos das instituições de ensino. Visando a capacitar os alunos, daremos o apoio (consultoria) para que os projetos sejam transformados em negócios. Com isso, temos o objetivo de estimular o empreendedorismo e à criação de oportunidades nas microrregiões onde estão as instituições de ensino.",
          "tags": [
              "inovação",
              "empreendedorismo",
              "descontos",
              "P&D"
          ],
          "slug": "fatecoins",
          "is_verified": 1,
          "created_at": "26/02/2019",
          "updated_at": "05/11/2019",
          "employees": "21-50",
          "business_target": "B2B2C",
          "business_phase": "Tração",
          "business_model": "Marketplace",
          "uf": "SP",
          "state": "São Paulo",
          "city": "Guaratinguetá",
          "place": "Guaratinguetá - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Educação"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/m7wjphvisinzp7axxf0z.opt.png",
          "founded_at": "15/04/2013",
          "id": "0a590c4f-daff-4b46-93a7-dd4ede301ae4",
          "name": "Manual Hacker",
          "description": "O Manual Hacker é um aplicativo voltado para a área de segurança da informação, que visa aumentar o envolvimento das pessoas com a área. O aplicativo promove a disseminação de informações, artigos, tutoriais e dicas, além de diversas ferramentas para testes de segurança diretamente do celular. A intenção real, é promover a área de segurança para todas as pessoas, criando um 'tudo em um'. O App ainda conta com diversos feeds de notícias e um chat para interação entre os usuários. Hoje, o aplicativo já conta com mais de 140 mil usuários e versões em português, inglês e espanhol. Foi reconhecido pela mídia brasileira como um dos 100 melhores aplicativos lançados em 2014, ficou entre os 50 melhores projetos de Startups do Brasil, aprovados pela FIESP(SP), além de ser eleita a terceira melhor startup universitária do Brasil, pela comissão avaliadora da University Startup World Cup.",
          "tags": [ ],
          "slug": "manual-hacker",
          "is_verified": 0,
          "created_at": "06/08/2015",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_phase": "Tração",
          "business_model": "Marketplace",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Uberlândia",
          "place": "Uberlândia - MG",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Mobile"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/05/11509-5f8bb6684507bffa0c0163f23745125b15a89609.opt.png",
          "founded_at": "30/08/2015",
          "id": "0a8a1cba-e541-4aaa-afca-2348a98be8da",
          "name": "Eficiencia Fiscal",
          "company_name": "EFICIENCIA FISCAL LTDA",
          "short_description": "Auxilia Empresas e Contadores com informações tributárias sobre cálculos de imposto nas operações de entrada e saída de mercadorias",
          "description": "O Eficiência Fiscal é um software na nuvem, exclusivo em sua proposta de inovação, repleto de funcionalidades e recursos de inteligência artificial, para auxiliar Empresas e Contadores que desejam obter de maneira rápida e precisa, informações tributárias sobre cálculos de imposto nas operações de entrada e saída de mercadorias. Assista aos nossos vídeos, abaixo.\r\n\r\nCom a nossa tecnologia de inteligência artificial é possível obter de forma rápida e precisa informações sobre as operações tributárias que tenham como destino o estado de Rondônia, seguindo fielmente as diretrizes da legislação estadual e federal, fornecendo assim, sólidos demonstrativos sobre os cálculos de PIS, COFINS e ICMS, além de vários outros benefícios em automatização que, reduzem de maneira muito expressiva a necessidade de intervenção humana nas operações diárias de cálculos complexos com elevado grau de risco de prática de ilícitos tributários indesejados que podem ensejar autuações fiscais e imputação de penalidades tributárias onerosas.",
          "tags": [
              "Gestão Fiscal",
              "Tributos",
              "Consultoria Tributária",
              "Fiscal",
              "ICMS",
              "PIS",
              "COFINS"
          ],
          "slug": "eficiencia-fiscal",
          "is_verified": 1,
          "created_at": "15/03/2019",
          "updated_at": "05/11/2019",
          "employees": "21-50",
          "business_target": "B2B",
          "business_phase": "Tração",
          "business_model": "SaaS",
          "uf": "RO",
          "state": "Rondônia",
          "city": "Ji-Paraná",
          "place": "Ji-Paraná - RO",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Finanças"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/xaa9i9sywq0z3woye48e.opt.png",
          "id": "0ab9ebcc-0a2d-41b4-a70d-424fa5a5a839",
          "name": "ATOM BI",
          "tags": [ ],
          "slug": "atom-bi",
          "is_verified": 0,
          "created_at": "15/03/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_phase": "Tração",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Big Data"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/want2play.png",
          "founded_at": "29/01/2016",
          "id": "0ababce8-62f2-4a6a-993b-649dc84cce5a",
          "name": "Want2Play",
          "company_name": "Want2Play",
          "short_description": "Plataforma colaborativa para conectar pessoas querendo praticar o mesmo esporte em determinada região e hora.",
          "description": "Plataforma colaborativa para conectar pessoas querendo praticar o mesmo esporte em determinada região e hora.",
          "tags": [
              "Eventos e Turismo"
          ],
          "slug": "want2play",
          "is_verified": 0,
          "created_at": "25/10/2017",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B2C",
          "business_phase": "Tração",
          "business_model": "Consumer",
          "uf": "RJ",
          "state": "Rio de Janeiro",
          "city": "Rio de Janeiro",
          "place": "Rio de Janeiro - RJ",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Esportes"
          }
      },
      {
          "id": "0abcbd2a-9a4c-42c1-a67f-ea20cc6f2c90",
          "name": "Kretos",
          "tags": [ ],
          "slug": "kretos",
          "is_verified": 0,
          "created_at": "15/03/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_phase": "Tração",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Recursos Humanos"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/03/11971-bc62a1a1bc007f38dbbbdb14aa0d1751914de2e4.opt.png",
          "founded_at": "14/03/2013",
          "id": "0add8004-08eb-440e-a208-693a5b839248",
          "name": "Neogyp",
          "company_name": "Nossa Casa Premoldada Eireli ME",
          "short_description": "Solução ágil e eficiente que produz alvenarias ultrarresistentes Neogyp, que permitem construções de melhor qualidade e menor custo!",
          "description": "Construir com o Sistema Construtivo Neogyp significa ter à sua disposição um material bastante versátil, o processo produtivo utiliza pouca água com equipamento simples de ser operado, o processo construtivo é ágil e intuitivo, por um sistema de encaixes – tipo LEGO – que além de reduzir a possibilidade de erros, apresenta alta produtividade, proporciona baixo custo de construção, excelentes desempenho acústico e conforto térmico (devido às características naturais do elemento, reduz-se os ruídos e evita-se a transmissão de calor através da parede, do ambiente externo para o ambiente interno do imóvel).",
          "tags": [
              "construtech",
              "greentech",
              "manufacture",
              "reuseofwaste"
          ],
          "slug": "neogyp",
          "is_verified": 1,
          "created_at": "21/03/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Tração",
          "business_model": "Outros",
          "uf": "TO",
          "state": "Tocantins",
          "city": "Palmas",
          "place": "Palmas - TO",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Construção Civil"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/proteclick-protetores-eletricos.png",
          "id": "0af376ea-6423-4120-9c18-10470b8d6d7d",
          "name": "PROTECLICK PROTETORES ELÉTRICOS",
          "description": "Os PROTETORES ELÉTRICOS PROTECLICK são uma inovação tecnológica na área de proteção elétrica, pois são os únicos protetores que realmente funcionam e protegem os equipamentos ligados à energia elétrica, levando tranquilidade, conforto, segurança e economia para ambientes residenciais, corporativos e industriais.",
          "tags": [ ],
          "slug": "proteclick-protetores-eletricos",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B2C",
          "business_phase": "Tração",
          "business_model": "E-commerce",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Seguros"
          }
      },
      {
          "founded_at": "09/06/2015",
          "id": "0b422b6b-39fb-454f-b8e8-7adf016eeaba",
          "name": "eFator",
          "short_description": "Um sistema para gerenciar a sua empresa da maneira mais fácil, Descubra agora mesmo!",
          "description": "Um sistema para gerenciar a sua empresa da maneira mais fácil, Descubra agora mesmo!",
          "tags": [ ],
          "slug": "efator",
          "is_verified": 0,
          "created_at": "12/06/2015",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Tração",
          "uf": "SC",
          "state": "Santa Catarina",
          "city": "Joinville",
          "place": "Joinville - SC",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Outros"
          }
      },
      {
          "profile_image": "https://cdn.cubo.network/img/logos/doghero.jpg",
          "id": "0b51f47b-f5d1-4c73-a7f9-262cfcd64f5c",
          "name": "DogHero",
          "short_description": "A DogHero é uma plataforma online de hospedagem domiciliar para cães.",
          "description": "A DogHero é uma plataforma online de hospedagem domiciliar para cães. Através dos aplicativos mobile ou do site, tutores de animais encontram, entram em contato e reservam hospedagem com Anfitriões que hospedam cachorros em suas casas. Somos uma startup com crescimento acelerado que conta com um time de liderança que já construiu outras startups de sucesso, além de sermos amantes de cachorros e estarmos construindo um serviço que amamos usar.",
          "tags": [ ],
          "slug": "doghero",
          "is_verified": 0,
          "created_at": "25/06/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "P2P",
          "business_phase": "Tração",
          "business_model": "Marketplace",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [
              {
                  "name": "100 Startups to Watch",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_100_watch.png"
              },
              {
                  "name": "Google Launchpad Accelerator",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_google_launchpad.png"
              },
              {
                  "name": "Monashees",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_monashees.png"
              }
          ],
          "segments": {
              "primary": "Pets"
          }
      },
      {
          "id": "0b940f45-65e1-46c2-a42f-2ef5ea80fc89",
          "name": "Minha Maquete Digital",
          "tags": [ ],
          "slug": "minha-maquete-digital",
          "is_verified": 0,
          "created_at": "15/03/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_phase": "Tração",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Esportes"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/bp-sistemas.png",
          "id": "0ba009e4-ec8f-4b58-ad1f-d33e31354520",
          "name": "BP Sistemas",
          "short_description": "Somos uma empresa de inovação em tecnologia",
          "description": "Somos uma empresa de inovação em tecnologia",
          "tags": [ ],
          "slug": "bp-sistemas",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Tração",
          "business_model": "SaaS",
          "uf": "PE",
          "state": "Pernambuco",
          "city": "Recife",
          "place": "Recife - PE",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Construção Civil"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/08/logoancoraofficesescritoriosvirtuaisjoinville_c1b222a9-89de-4f63-a443-fd8e71b98c71.jpeg",
          "founded_at": "03/03/2011",
          "id": "0bfcace4-d669-4db0-8092-f1718cba7177",
          "name": "ANCORA BOSS",
          "company_name": "ANCORA BUREAU OF SERVICES AGENCIA DE SERVICOS EIRELI",
          "short_description": "ESPECIALISTA EM ENDEREÇO FISCAL, IMPORTAÇÃO E EXPORTAÇÃO, FRETES EXPRESSOS NACIONAL E INTERNACIONAL",
          "description": "A Âncora Offices Escritórios Virtuais® foi projetada para operar como uma plataforma de apoio empresarial, no centro de Joinville, Santa Catarina, Brasil. Estamos localizados em sala térreo do edifício Turim, ponto privilegiado para a instalação de empresas, seja ela startup, micro, pequena, média ou grande empresa.\n\nDispomos de sala para reuniões, sala executiva, estações de trabalho, copa, banheiro masculino e feminino, em ambiente climatizado, com acesso a Internet e totalmente mobiliado para locação por tempo integral ou parcial.\n\nO nosso diferencial é que trabalhamos com salas próprias e realmente estamos a poucos passos de estacionamentos, hotéis, lojas, restaurantes, cafés, bancos, cartórios, enfim, em local de extrema concentração comercial.\n\nA Âncora Offices Escritórios Virtuais é especializada na locação de endereço fiscal, inscrição estadual, sala de reuniões, endereço industrial, remessa de documentos e encomendas para o exterior, sala de eventos e comex.",
          "tags": [
              "ENDEREÇO FISCAL",
              "ENDEREÇO FISCAL INDUSTRIAL",
              "FRETE EXPRESSO",
              "FRETE EXPRESSO NACIONAL",
              "FRETE EXPRESSO INTERNCIONAL",
              "FRETES URGENTES",
              "ARMAZENAMENTO MERCADORIAS",
              "MOVIMANTACÁO MERCADORIAS",
              "IMPORTAÇÃO MERCADORIAS",
              "EXPORTAÇÃO"
          ],
          "slug": "ancora-boss",
          "is_verified": 1,
          "created_at": "17/08/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B2C",
          "business_phase": "Tração",
          "business_model": "Outros",
          "uf": "SC",
          "state": "Santa Catarina",
          "city": "Joinville",
          "place": "Joinville - SC",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Outros"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/9613-79be22f56e987a72d4d3a9e3463212dfe272f1f8.opt.png",
          "founded_at": "31/12/2017",
          "id": "0c0bbe6a-a5ea-4335-9f48-6075755a4621",
          "name": "Dinvo Cashback e Cupom de Desconto",
          "company_name": "DINVO DIVULGACAO E VEICULACAO NA INTERNET LTDA - ME",
          "short_description": "Somos um site que devolve parte do seu dinheiro de volta em suas compras on-line, alem de oferecer vários cupons de desconto.",
          "description": "Dinvo, é nosso nome para Dinheiro de volta, isso que proporcionamos para você alem de cupons de descontos e ofertas, tudo em um só lugar. Já pensou em realizar suas compras on-line e receber uma parte do dinheiro do volta, quanto você pode economizar em um ano? Acesse cadastre-se e comece a economizar.",
          "tags": [
              "cashback",
              "dinheiro de volta",
              "vendas de e-commerce",
              "cupom de desconto"
          ],
          "slug": "dinvo-cashback-e-cupom-de-desconto",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2C",
          "business_phase": "Tração",
          "business_model": "Outros",
          "uf": "PR",
          "state": "Paraná",
          "city": "Maringá",
          "place": "Maringá - PR",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Vendas e Marketing"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/q8lwjlalsaqqmv7kf2la.opt.png",
          "founded_at": "12/07/2015",
          "id": "0c26c43d-f3d9-472b-a3f1-dee98c719eec",
          "name": "Price Beer",
          "description": "O Price Beer é uma prateleira de cervejas ilimitada. Reunimos mais de 10 mil produtos de todo o mundo, mais de 50 e-commerces. Nós levamos até você aquela cerveja inacessível, até então.  Todas as lojas cadastradas em nossa plataforma realizam entregas em todo o território brasileiro. \r\nPara completar, organizamos tudo isso para você com o melhor preço. Ou seja, além de encontrar a sua cerveja favorita, ou aquela que você ainda não experimentou, nós te mostramos onde está o melhor custo benefício.\r\nAlém disso, nós estamos preocupados com o seu paladar, por isso disponibilizamos sommeliers para ajuda-los na escolha da sua cerveja. E ainda, nós reunimos as melhores promoções da Internet e ofertas exclusivas na nossa newsletter.  \r\nEm poucos meses de vida, a nossa plataforma já possui cerca de 200 mil pageviews ao mês, mais de 20 mil seguidores nas redes sociais. \r\nVale lembrar que 75% dos brasileiros consumem cerveja uma vez por semana.  A venda de cerveja artesanal cresceu 24% em 2014. E como se não bastasse, o Brasil é o terceiro maior produtor de cerveja artesanal do mundo, produz cerca de 13,4 bilhões de litros, só perde para China e Estados Unidos. \r\nDepois de saber de tudo isso, está esperando o que para começar a buscar na nossa plataforma? \r\nEncontrar a sua cerveja com o melhor preço esse é o nosso objetivo. ",
          "tags": [ ],
          "slug": "price-beer",
          "is_verified": 1,
          "created_at": "28/10/2015",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2C",
          "business_phase": "Tração",
          "business_model": "E-commerce",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Belo Horizonte",
          "place": "Belo Horizonte - MG",
          "is_active": 1,
          "badges": [
              {
                  "name": "FIEMG Lab",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_fiemglab.png"
              },
              {
                  "name": "Troposlab",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_troposlab.png"
              }
          ],
          "segments": {
              "primary": "Produtos de Consumo"
          }
      },
      {
          "founded_at": "06/12/2018",
          "id": "0c54d68c-27e4-4cb9-bdf2-db96ca5a5739",
          "name": "iFarm ",
          "company_name": "IFARM Tecnologia e Treinamentos Ltda",
          "short_description": "Plataforma de gestão da produção à venda direta, de produtos orgânicos certificados",
          "description": "Somos uma empresa de tecnologia com conhecimento prático em agricultura orgânica certificada de base agroflorestal, permacultura e biodinâmica. \nDesenvolvemos os processos de acompanhamento da produção em campo, com evidência para a certificação orgânica por auditoria (modelo IBD) e conectamos o produtor rural diretamente com o consumidor final (B2B) bem como com o varejo (B2C).\nNossa proposta é ser um SaaS de baixo custo para fomentar o crescimento da agricultura orgânica certificada como diferencial de competitividade para os produtores e para o Brasil.\nA plataforma é um ERP na retaguarda, com CRM e BI, e aplicativos Android e iOS para o produtor e o consumidor.",
          "tags": [ ],
          "slug": "ifarm-",
          "is_verified": 0,
          "created_at": "18/07/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Tração",
          "business_model": "SaaS",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Agronegócio"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/03/cianove.png",
          "id": "0cb23da8-1c77-417d-81a5-763141b05d4e",
          "name": "CIANOVE",
          "short_description": "Com o propósito de transformar a obra em um\nlugar mais seguro e produtivo, a CIANOVE fabrica\nsoluções de automação para elevadores de obras.",
          "tags": [ ],
          "slug": "cianove",
          "is_verified": 0,
          "created_at": "20/03/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Tração",
          "business_model": "Hardware",
          "uf": "SC",
          "state": "Santa Catarina",
          "city": "Florianópolis",
          "place": "Florianópolis - SC",
          "is_active": 1,
          "badges": [
              {
                  "name": "Darwin Startups",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_darwin.png"
              }
          ],
          "segments": {
              "primary": "Construção Civil"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/alugue-sempre.png",
          "founded_at": "12/01/2013",
          "id": "0ce64007-c14c-4fcd-9c5f-06a6da4766ab",
          "name": "Alugue Sempre",
          "company_name": "Alugue Sempre",
          "tags": [ ],
          "slug": "alugue-sempre",
          "is_verified": 0,
          "created_at": "19/09/2017",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Tração",
          "business_model": "SaaS",
          "uf": "SP",
          "state": "São Paulo",
          "city": "Marília",
          "place": "Marília - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Eventos e Turismo"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/zara-falcao-sistemas-inteligentes.png",
          "id": "0ceb59b4-3d4e-4269-8be2-cd5af46109fe",
          "name": "Zara Falcão Sistemas Inteligentes",
          "description": "A Zara Falcão é uma empresa que nasceu com inovação no centro de suas atividades, propondo soluções disruptivas para o mercado de calibração industrial e mais recente energia fotovoltaica além de automação residencial e sob demanda.",
          "tags": [ ],
          "slug": "zara-falcao-sistemas-inteligentes",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Tração",
          "business_model": "Hardware",
          "uf": "GO",
          "state": "Goiás",
          "city": "Goiânia",
          "place": "Goiânia - GO",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Agronegócio"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/01/11172-2de1a70ff4f330fa80ded692f57edcac385233b0.opt.png",
          "founded_at": "02/09/2018",
          "id": "0d0931db-55e8-46f8-828a-6f674451f5b4",
          "name": "Bambu Tecnologia",
          "short_description": "Criada em setembro de 2018, a Bambu Tecnologia esta focada na terceirização do desenvolvimento de aplicações web e mobile sob medida para sua startup.",
          "description": "Criada em setembro de 2018, a Bambu Tecnologia chega ao mercado de software, para atender à necessidade das empresas quando o tema é desenvolvimento de sistemas sob demanda/medida, ou seja, terceirizamos o desenvolvimento de suas aplicações.\n\nAssim, como nosso nome temos flexibilidade, resiliência, ramificações e uma complexa estrutura de raiz, que nos garante assumirmos projetos com alta complexidade e escalabilidade.\n\nEntendemos que cada solução é única e requer uma abordagem com foco nos objetivos do seu negócio, sempre aliamos robustez, qualidade e iteratividade em nossos projetos, seguindo metodologias ágeis e engajadas, desde o brainstorming/briefing até a entrega do seu projeto. Todo o nosso time é envolvido, e claro, junto ao cliente, sempre acompanhamos cada etapa do processo de desenvolvimento, validando o projeto, até sua entrega.\n\nEspecializada no desenvolvimento de sistemas e soluções de hospedagem para empresas que buscam criar e desenvolver seus projetos sem complicações e com investimento pequeno.\n\nPrestando serviços na terceirização de mão de obra no desenvolvimento de sistemas web, desktop, aplicativos mobile, hospedagem de aplicações (compartilhada, semi-dedicada, dedicada) e na integração de aplicações tudo sob medida, utilizando as melhores tecnologias.\n\nDesenvolvemos também soluções customizadas para atender a necessidade da sua Startup, com isso você obtém seu MVP (Minimum Viable Product), fazendo uso do mesmo em seus pitch’s.",
          "tags": [
              "Desenvolvimento Mobile",
              "Desenvolvimento de Aplicações Web",
              "Terceirização de Mão de Obra em Desenvolvimento de aplicações",
              "NodeJS",
              "React",
              "React Native"
          ],
          "slug": "bambu-tecnologia",
          "is_verified": 0,
          "created_at": "02/01/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B2C",
          "business_phase": "Tração",
          "business_model": "Consumer",
          "uf": "SC",
          "state": "Santa Catarina",
          "city": "Tubarão",
          "place": "Tubarão - SC",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Desenvolvimento de Software"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/08/lincare.png",
          "founded_at": "31/12/2014",
          "id": "0d29c03d-19ca-4110-a4ae-b5c8587b3a0d",
          "name": "LinCare",
          "short_description": "LinCare é uma plataforma de cuidados à distância que atua no fortalecimento das relações, prevenção e avisos de urgências/emergência.",
          "description": "LinCare é uma plataforma de cuidados à distância que atua no fortalecimento das relações, prevenção e avisos de urgências/emergência.",
          "tags": [ ],
          "slug": "lincare",
          "is_verified": 1,
          "created_at": "22/05/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Tração",
          "business_model": "SaaS",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Belo Horizonte",
          "place": "Belo Horizonte - MG",
          "is_active": 1,
          "badges": [
              {
                  "name": "Troposlab",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_troposlab.png"
              },
              {
                  "name": "FIEMG Lab",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_fiemglab.png"
              }
          ],
          "segments": {
              "primary": "Saúde e Bem-estar"
          }
      },
      {
          "id": "0d2e451f-4864-4e8e-acd5-e70fe7114ad8",
          "name": "E-XPLORE",
          "tags": [ ],
          "slug": "e-xplore",
          "is_verified": 0,
          "created_at": "15/03/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_phase": "Tração",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Viçosa",
          "place": "Viçosa - MG",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Outros"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/lth0drygxrtdeu99exk3.opt.png",
          "founded_at": "11/02/2015",
          "id": "0d8740e2-14e6-4e01-b422-40e5b3c881b8",
          "name": "Kardshare",
          "description": "A Kardshare é uma plataforma onde profissionais aceleram seus negócios, vendem e buscam soluções em todas as áreas.\r\nAtravés de cartões de visita virtuais que agregam todas as suas informações e links na web, os usuários trocam contatos e impulsionam ainda mais seus serviços.",
          "tags": [ ],
          "slug": "kardshare",
          "is_verified": 0,
          "created_at": "19/08/2015",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2C",
          "business_phase": "Tração",
          "uf": "PR",
          "state": "Paraná",
          "city": "Curitiba",
          "place": "Curitiba - PR",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Internet"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/12/1959-45e094ee6d2c6ac5a78a6974773668e8d9dc2bfc.opt.png",
          "founded_at": "22/09/2016",
          "id": "0dc521d1-005c-4996-9c2a-5c6fc72bab41",
          "name": "Refresher",
          "company_name": "Refresher Trends Ltda",
          "description": "O REFRESHER é uma plataforma on-line onde Arquitetos, Designers de Interiores e Decoradores tem as melhores ferramentas digitais, métodos e conteúdos para entender a fundo o que seu cliente precisa e ter mais previsibilidade na hora de projetar. \n\nTudo de um modo simples, prático e objetivo! Você verá seu trabalho ser muito mais valorizado :)\n\nUm pouco do que você vai encontrar dentro da plataforma: \n-Detector de estilos e personalidade\n-Programa de Necessidades Digital\n-Moodboards e Wishlists\n-Tendências de Arquitetura e Design\n\nTudo 100% online e digital para que você possa utilizar quando quiser e onde quiser. E contando com o visual diferenciado do REFRESHER.",
          "tags": [
              "Construção Civil",
              "arquitetura",
              "design de interiores"
          ],
          "slug": "refresher",
          "is_verified": 0,
          "created_at": "14/05/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B2C",
          "business_phase": "Tração",
          "business_model": "SaaS",
          "uf": "RS",
          "state": "Rio Grande do Sul",
          "city": "Bento Gonçalves",
          "place": "Bento Gonçalves - RS",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Serviços Profissionais"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/03/11375-657d15e806c9dad9d615716b007ac736fd77e336.opt.png",
          "founded_at": "18/11/2018",
          "id": "0dd0eef7-1810-4542-9ec6-7667a6bc747f",
          "name": "Kondado",
          "short_description": "Soluções de iPaaS, ETL, Engenharia de Dados, Business Intelligence as a Service, decision science e auxílio à tomada de decisões",
          "description": "Conecte-se às suas ferramentas\nAs informações geradas nas diferentes áreas e produtos da sua empresa são coletados via APIs ou bancos de dados, sem que você precise escrever uma linha de código.\n\nTenha informações atualizadas\nApós conexão, nossa plataforma constantemente coleta e devolve os dados das suas ferramentas de volta para você, deixando todas as informações centralizadas e atualizadas no seu banco de dados.\n\nAcesse suas informações de várias maneiras\nCom dados centralizados e atualizados, você é capaz de utilizar vários softwares de visualização ou análise para gerar métricas e estudos de maneira prática e rápida para tomar decisões assertivas.",
          "tags": [
              "Business Intelligence",
              "BI",
              "Data Science",
              "iPass",
              "Decision Science",
              "ETL",
              "Auxílio à Tomada de Decisões"
          ],
          "slug": "kondado",
          "is_verified": 1,
          "created_at": "08/03/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Tração",
          "business_model": "SaaS",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Big Data"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/jus.com.br.png",
          "founded_at": "18/11/1996",
          "id": "0def8c50-062d-4765-93f1-0e4b46af7ce2",
          "name": "Jus.com.br",
          "company_name": "Jus.com.br",
          "short_description": "Compartilhamos o conhecimento jurídico. Conectamos quem tem demandas jurídicas às soluções.",
          "description": "O Jus conecta quem tem problemas jurídicos às soluções.\n\nDiminuímos a distância entre as pessoas e o exercício de seus direitos, facilitando o acesso à Justiça.\n\nOferecemos aos advogados a possibilidade de prospectar novos clientes, além de contratar serviços técnicos de apoio jurídico.\n\nDivulgamos artigos e documentos produzidos por uma grande rede de colaboradores, para compartilhar o conhecimento jurídico.\n\n",
          "tags": [
              "Serviços Profissionais",
              "científicos ou técnicos"
          ],
          "slug": "juscombr",
          "is_verified": 0,
          "created_at": "25/10/2017",
          "updated_at": "05/11/2019",
          "employees": "21-50",
          "business_target": "B2B2C",
          "business_phase": "Tração",
          "business_model": "Marketplace",
          "uf": "PI",
          "state": "Piauí",
          "city": "Teresina",
          "place": "Teresina - PI",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Direito"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/11/9608-27fa9f50875a24ba16ba1d2cb2b1946ea9cffc58.opt.png",
          "founded_at": "19/05/2017",
          "id": "0e071add-c0e0-4ec8-a5c1-6862b34177a2",
          "name": "Site do Ovo - Clube de Assinatura",
          "short_description": "Somos o primeiro clube de assinatura de ovos do Brasil!",
          "tags": [
              "franquia",
              "Clube de assinatura",
              "Recorrência"
          ],
          "slug": "site-do-ovo-clube-de-assinatura",
          "is_verified": 0,
          "created_at": "27/11/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2C",
          "business_phase": "Tração",
          "business_model": "E-commerce",
          "uf": "BA",
          "state": "Bahia",
          "city": "Salvador",
          "place": "Salvador - BA",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "E-commerce"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/05/facil_consulta.png",
          "founded_at": "31/12/2015",
          "id": "0e343772-ff40-41ab-8d97-5ef29a0144a4",
          "name": "Fácil Consulta",
          "short_description": "Marketplace online para agendamento de consultas médicas até 60% mais baratas.",
          "description": "Fácil Consulta é um marketplace da saúde que entrega consultas médicas particulares com até 60% de economia, oferecendo uma nova experiência no agendamento.",
          "tags": [ ],
          "slug": "facil-consulta",
          "is_verified": 1,
          "created_at": "10/11/2018",
          "updated_at": "05/11/2019",
          "employees": "21-50",
          "business_target": "B2B2C",
          "business_phase": "Tração",
          "business_model": "Marketplace",
          "uf": "RS",
          "state": "Rio Grande do Sul",
          "city": "Pelotas",
          "place": "Pelotas - RS",
          "is_active": 1,
          "badges": [
              {
                  "name": "WOW",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_wow.png"
              }
          ],
          "segments": {
              "primary": "Saúde e Bem-estar"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/esfera-tecnologia.png",
          "founded_at": "27/08/2014",
          "id": "0e711080-6d46-4b35-9e60-6f7323310991",
          "name": "Esfera Tecnologia",
          "short_description": "A Esfera é especialista de projetos em resultados comerciais utilizando de tecnologias inovadoras para tais, como: Realidade Virtual e Aumentada",
          "description": "A Esfera é especialista de projetos em resultados comerciais utilizando de tecnologias inovadoras para tais, como: Realidade Virtual e Aumentada\n\nSe sua estrutura, é ponto chave para o seu negócio e demonstra-las com os seus diferenciais pode resultar na fidelização ou aquisição de novos clientes. Para isso em todo projeto que fazemos utilizamos da coleta de dados e estudo do comportamento do público alvo.\n\nÉ possível que seu negócio esteja aberto 24h por dia e que imerso nesta tecnologia, seu cliente conheça, seu negócio, nos mínimos detalhes, independente do segmento com nossas ferramentas de conversão.\n",
          "tags": [
              "Resultados Comericiais",
              "Realidade Virtual",
              "Realidad Aumentada"
          ],
          "slug": "esfera-tecnologia",
          "is_verified": 0,
          "created_at": "29/05/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B2C",
          "business_phase": "Tração",
          "business_model": "Venda de dados",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Juiz de Fora",
          "place": "Juiz de Fora - MG",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Eventos e Turismo"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/agencia-ignite.png",
          "founded_at": "30/04/2016",
          "id": "0ea6ca56-a396-4df0-9904-e1a254cfc165",
          "name": "Agência Ignite",
          "company_name": "Agência Ignite",
          "short_description": "A ponte que leva uma ideia brilhante a um mundo de oportunidades.",
          "description": "Nós somos uma agência de publicidade idealizada em 2012 e criada em 2016.\n\nNosso objetivo é ser a ponte que liga uma ideia brilhante a um mundo de grandes oportunidades, acreditamos que o design e a publicidade andam de mãos dadas para transformar o mundo que nos rodeia.\n\nO nome Ignite vem da ideia em que temos uma grande chama dentro de nós, uma chama que nos faz trabalhar cada vez mais nas grandes ideias, nos deixa criativos e nos instiga a sempre criar grandes projetos para nossos clientes.\n\nQuando há a necessidade de criar uma solução, todos precisam pensar muito, ter ideias, raciocínio, e isso envolve um processo criativo, esse processo é a parte que nós adoramos e amamos fazer, o que costuma nos deixar em chamas! assim como o nome da agência.\n\nSeu negócio é como um foguete que precisa de explosão e combustão para voar, nós somos a faísca que faz tudo pegar fogo!",
          "tags": [
              "Internet"
          ],
          "slug": "agencia-ignite",
          "is_verified": 0,
          "created_at": "14/01/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B2C",
          "business_phase": "Tração",
          "business_model": "Outros",
          "uf": "PR",
          "state": "Paraná",
          "city": "Curitiba",
          "place": "Curitiba - PR",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Comunicação e Mídia"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/mobit-solucoes.png",
          "founded_at": "18/04/2017",
          "id": "0eb768f9-c2f7-4b01-a4e2-12498e0e25dd",
          "name": "MOBIT SOLUÇÕES ",
          "company_name": "MOBIT SOLUÇÕES ",
          "tags": [
              "Mobile"
          ],
          "slug": "mobit-solucoes",
          "is_verified": 0,
          "created_at": "09/01/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Tração",
          "business_model": "Outros",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "TIC e Telecom"
          }
      },
      {
          "founded_at": "08/05/2017",
          "id": "0f045701-57f5-4804-9d7c-225a82a5037e",
          "name": "e-UB",
          "company_name": "e-UB",
          "tags": [
              "E-commerce",
              "Vendas e Marketing",
              "Produtos de Consumo"
          ],
          "slug": "e-ub",
          "is_verified": 0,
          "created_at": "23/11/2017",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B2C",
          "business_phase": "Tração",
          "business_model": "E-commerce",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Varejo / Atacado"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/wpensar.png",
          "id": "0f1a7315-36b0-4278-a149-b6a355b3cfbe",
          "name": "WPensar ",
          "company_name": "WPensar ",
          "short_description": "Sistema de Gestão Escolar",
          "description": "Seremos a opção natural para soluções tecnológicas para instituições de Ensino",
          "tags": [ ],
          "slug": "wpensar",
          "is_verified": 0,
          "created_at": "26/10/2017",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Tração",
          "business_model": "SaaS",
          "uf": "RJ",
          "state": "Rio de Janeiro",
          "city": "Niterói",
          "place": "Niterói - RJ",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Educação"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/fjiqyoaozemnjmlzaatw.opt.png",
          "founded_at": "31/01/2013",
          "id": "0f2fe082-00de-4ca0-9f1a-e83c81f14e10",
          "name": "ALT Systems Tecnologia",
          "short_description": "Desenvolvemos soluções gerenciais, que ajuda no sucesso da sua empresa!",
          "description": "Desenvolvemos soluções gerenciais, que ajuda no sucesso da sua empresa!",
          "tags": [ ],
          "slug": "alt-systems-tecnologia",
          "is_verified": 0,
          "created_at": "04/02/2015",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_phase": "Tração",
          "business_model": "Outros",
          "uf": "AL",
          "state": "Alagoas",
          "city": "Maceió",
          "place": "Maceió - AL",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Finanças"
          }
      },
      {
          "id": "0f57fc31-21ca-494e-b9e9-8efed434666f",
          "name": "Abútua Tecnologia",
          "tags": [ ],
          "slug": "abutua-tecnologia",
          "is_verified": 0,
          "created_at": "15/03/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_phase": "Tração",
          "uf": "SP",
          "state": "São Paulo",
          "city": "Sorocaba",
          "place": "Sorocaba - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Games"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/04/eaotvo15wejnjsgvj0gy.opt.png",
          "founded_at": "09/07/2014",
          "id": "0f8f92eb-82ac-4141-b421-ffae343e4086",
          "name": "Gama Academy",
          "company_name": "Gama Academy",
          "tags": [ ],
          "slug": "gama-academy",
          "is_verified": 0,
          "created_at": "25/09/2017",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B2C",
          "business_phase": "Tração",
          "business_model": "Marketplace",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Educação"
          }
      },
      {
          "founded_at": "31/12/2015",
          "id": "0fb8119c-6dc3-4eba-ae1a-e3cf10b9ef89",
          "name": "Inspeasy Soluções e comércio",
          "description": "Empresa trabalha atualmente com representação de produtos (de outras empresas)\npara melhoria da produtividade industrial (i), acompanhamento de uso de EPI (ii) e\nautomação industrial (iii).\n\nA ideia do empreendedor é desenvolver 3 produtos próprios: um equipamento de\nrealidade virtual para treinamentos (em desenvolvimento na Índia) e duas soluções\npara controle de áreas, equipamentos e pessoas, através de tecnologias como beacons\ne RFID, que garantem maior segurança, precisão e rastreabilidade; ambas as\ntecnologias também estão em fase de desenvolvimento, com parceiros no Brasil (Santa\nRita do Sapucaí e DCC/UFMG).",
          "tags": [ ],
          "slug": "inspeasy-solucoes-e-comercio",
          "is_verified": 0,
          "created_at": "22/05/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B",
          "business_phase": "Tração",
          "business_model": "SaaS",
          "uf": "MG",
          "state": "Minas Gerais",
          "city": "Belo Horizonte",
          "place": "Belo Horizonte - MG",
          "is_active": 1,
          "badges": [
              {
                  "name": "GO Minas",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_go_minas.png"
              },
              {
                  "name": "Troposlab",
                  "profile_image": "https://cdn.startupbase.com.br/assets/images/badges/badge_troposlab.png"
              }
          ],
          "segments": {
              "primary": "Construção Civil"
          }
      },
      {
          "founded_at": "13/09/2013",
          "id": "0fc6309c-cd8f-48bd-a38b-74548c95e94b",
          "name": "SistemaPET",
          "description": "Sistema de gestão e divulgação para criadores de cães, gatos, etc. Contando com controle zootécnico dos animais, gestão financeiro, alertas importantes, etc",
          "tags": [ ],
          "slug": "sistemapet",
          "is_verified": 0,
          "created_at": "20/10/2015",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_phase": "Tração",
          "business_model": "SaaS",
          "uf": "SC",
          "state": "Santa Catarina",
          "city": "Florianópolis",
          "place": "Florianópolis - SC",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Outros"
          }
      },
      {
          "id": "087e6416-b058-4c3f-98bf-45a111d11e1f",
          "name": "Electro Wave",
          "tags": [ ],
          "slug": "electro-wave",
          "is_verified": 0,
          "created_at": "15/03/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_phase": "Operação",
          "uf": "SP",
          "state": "São Paulo",
          "city": "São Paulo",
          "place": "São Paulo - SP",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Big Data"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2019/09/marca-principal_0218e9fb-8fe4-4869-8967-b896bed4a9d6.png",
          "founded_at": "26/12/2018",
          "id": "08bafb32-36cd-4ca9-b781-89a6af2e4cd9",
          "name": "Nekto ",
          "company_name": "NEKTO TECNOLOGIA EM GESTAO DE PESSOAS LTDA.",
          "short_description": "Plataforma de Gestão de Pessoas intuitiva, moderna e gamificada que é customizável e facilita a conexão entre pessoas e empresas.",
          "description": "Problema:\n* As pessoas são o capital intangível das organizações, mas muitas MPEs não possui ferramentas para fazer gestão de pessoas e existem poucas opções de sistemas de RH para MPEs. \n* As Plataformas de Gestão de Pessoas e de Recrutamento e Seleção são defasadas, falta de integração das informações para os gestores; as opções que existem no mercado possuem um elevado custo. \nProposta de Valor: Promover Conexão em Gestão de Pessoas.\nQueremos possibilitar que as empresas façam efetivamente gestão estratégica de pessoas de uma forma tecnológica, atualizada e colaborativa, gerando mais produtividade e resultados para as organizações e pessoas. \nSolução: Plataforma de Gestão por Competências: processos de Gestão de Pessoas gamificados e colaborativos. – Diferentes Módulos.\nMVP: 1º Módulo da Plataforma   -  R&S: Uma plataforma intuitiva e moderna para fazer Recrutamento e Seleção que integra todas as informações relacionadas às pessoas e aos processos de recrutamento e seleção.",
          "tags": [
              "gestão de pessoas",
              "recrutamento e seleção de pessoas",
              "Recursos humanos",
              "Blockchain"
          ],
          "slug": "nekto-",
          "is_verified": 0,
          "created_at": "11/09/2019",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2B2C",
          "business_phase": "Operação",
          "business_model": "Outros",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Recursos Humanos"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/7cantos.png",
          "id": "08d37f24-ac11-47d4-a1ee-f75750f4254b",
          "name": "7Cantos",
          "company_name": "7Cantos",
          "tags": [
              "Casa e Família"
          ],
          "slug": "7cantos",
          "is_verified": 0,
          "created_at": "26/03/2018",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2C",
          "business_phase": "Operação",
          "business_model": "SaaS",
          "uf": "CE",
          "state": "Ceará",
          "city": "Fortaleza",
          "place": "Fortaleza - CE",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Imobiliário"
          }
      },
      {
          "profile_image": "https://cdn.startupbase.com.br/uploads/startups/2018/07/promobot.png",
          "founded_at": "01/02/2016",
          "id": "0932ec3e-f5ba-43f2-a4d7-e082d727225f",
          "name": "Promobot",
          "company_name": "Promobot",
          "short_description": "Chatbot de consulta por promoções locais",
          "description": "Chatbot que busca em todos os sites de promoções, descontos e compras coletivas locais por ofertas e entrega sobre demanda para seus usuários.",
          "tags": [
              "Big Data",
              "E-commerce",
              "Varejo / Atacado"
          ],
          "slug": "promobot",
          "is_verified": 0,
          "created_at": "13/11/2017",
          "updated_at": "05/11/2019",
          "employees": "6-10",
          "business_target": "B2C",
          "business_phase": "Operação",
          "business_model": "Consumer",
          "uf": "TO",
          "state": "Tocantins",
          "city": "Palmas",
          "place": "Palmas - TO",
          "is_active": 1,
          "badges": [ ],
          "segments": {
              "primary": "Vendas e Marketing"
          }
      },
    ]);

  
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
