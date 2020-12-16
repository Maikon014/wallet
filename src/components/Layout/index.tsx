import React from 'react';

import {Container} from './styles';

import MainHeader from  '../MainHeader';
import Content from '../Content';
import Aside from '../Aside';

const Layout: React.FC = ({children}) => (
  <Container>
    <Aside/>
    <Content>
      {children}
    </Content>
    <MainHeader/>
  </Container>    
);


export default Layout;