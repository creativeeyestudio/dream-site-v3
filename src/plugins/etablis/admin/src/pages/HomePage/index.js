/*
 *
 * HomePage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { BaseHeaderLayout, Box, Button, LinkButton } from '@strapi/design-system';
import Etablissement from '../Etablissement';

const HomePage = () => {
  return (
    <Box padding={8}>
      <BaseHeaderLayout title="Etablis" subtitle="Gestion des informations de l'établissement" as="h2" />
      <LinkButton tag={Etablissement} to="/plugins/etablis/settings">Gérer l'Établissement</LinkButton>
    </Box>
  );
};

export default HomePage;
