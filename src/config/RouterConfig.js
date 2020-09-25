import React from 'react';
import HomeComponent from '../components/HomeComponent';
import LoginPage from '../components/LoginPage/LoginPage';
import ProjectPage from '../components/ProjectPage/ProjectPage';
import Table from '../components/search/index';
import RUN from '../components/search/main';
import Main from '../components/search/main';

import WorkSpaceComponent from '../components/WorkSpace/WorkSpaceComponent';

export const RouterConfig = [
  {
    path: '/',
    exact: true,
    component: () => <HomeComponent></HomeComponent>,
  },

  {
    path: '/login',
    exact: true,
    component: () => <LoginPage></LoginPage>,
  },

  {
    path: '/project',
    exact: true,
    component: () => <ProjectPage></ProjectPage>,
  },

  {
    path: '/workspace/:id',
    exact: true,
    component: () => <WorkSpaceComponent></WorkSpaceComponent>,
  },

  {
    path: '/run/:id',
    exact: true,
    component: () => <RUN></RUN>,
  },
  {
    path: '/table',
    exact: true,
    component: () => <Table></Table>,
  },

  {
    path: '/main/:id',
    exact: true,
    component: () => <Main></Main>,
  },
];
