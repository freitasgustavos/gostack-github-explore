import React from 'react';

import logo from '../../assets/logo.svg';

import { Title } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Logo" />
      <Title>Explore repositórios no GitHub</Title>
    </>
  );
};

export default Dashboard;
