import React, { useState } from 'react';

import { Container, ContainerConteudo, GroupInfo, FormInputs, ContainerConteudoInterno } from './styles';

import logo from './logo.png';

export default function Login() {

  const [pageTab,setPageTab] = useState('login');

  const Tabs = value => {
    setPageTab(value);
  } 

  const handleDashboard = redirec => {
      window.location.href = "/dashboard";
  }

  return (
    <Container >
        <ContainerConteudo>
          <ContainerConteudoInterno activoaba={pageTab} >
            <div className="areaConteudo01">
                <div className="optionsForm">
                    <button type="buttom" className="opt01" onClick={() => Tabs('login')} >LOGIN</button>
                    <button type="buttom" className="opt02" onClick={() => Tabs('cadastro')} >CADASTRO</button>
                </div>
                <FormInputs>
                    {
                      pageTab === 'cadastro' ? 
                      <GroupInfo>
                        <input type="text" placeholder="Nome Startup" />
                      </GroupInfo>
                      :
                      ''
                    }
                   
                    <GroupInfo>
                        <input type="email" placeholder="E-mail da Startup" value="statup@gmail.com" />
                    </GroupInfo>
                    <GroupInfo>
                        <input type="password" placeholder="Senha da Startup" value="123456" />
                    </GroupInfo>
                    <GroupInfo>
                        <input type="buttom" value="Entrar" onClick={() => handleDashboard('/dashboard')} />
                    </GroupInfo>

                    {
                      pageTab === 'login' ? 
                      <GroupInfo>
                          <strong>USER</strong>: statup@gmail.com <br/>
                          <strong>PASS</strong>: 123456
                      </GroupInfo>
                      :
                      ''
                    }
  
                </FormInputs>
              </div>
              <div className="areaConteudo02">
                  <img src={logo} border="0" alt="LOGO" />
              </div>
            </ContainerConteudoInterno>
        </ContainerConteudo>
    </Container>
  );
}
