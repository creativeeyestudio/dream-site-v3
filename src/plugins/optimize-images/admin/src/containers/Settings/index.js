'use strict';

import React, { useState, useEffect } from 'react';
import { TextInput } from '@strapi/design-system/TextInput';
import { useNotify } from '@strapi/helper-plugin';
import { useGlobalContext } from '@strapi/plugin-content-manager';
import { request } from '@strapi/helper-plugin';

const Settings = () => {
  const [microserviceUrl, setMicroserviceUrl] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const notify = useNotify();

  useEffect(() => {
    // On récupère l'URL actuelle du microservice (si elle existe)
    const fetchData = async () => {
      try {
        const response = await request('/admin/plugins/optimize-images/settings', {
          method: 'GET',
        });
        setMicroserviceUrl(response.data.microserviceUrl || '');
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setMicroserviceUrl(e.target.value);
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await request('/admin/plugins/optimize-images/settings', {
        method: 'POST',
        body: { microserviceUrl },
      });
      notify({
        type: 'success',
        message: 'URL du microservice mise à jour avec succès!',
      });
    } catch (err) {
      console.error(err);
      notify({
        type: 'warning',
        message: 'Une erreur est survenue.',
      });
    }
    setIsSaving(false);
  };

  return (
    <div>
      <TextInput
        label="URL du microservice d'optimisation"
        name="microserviceUrl"
        value={microserviceUrl}
        onChange={handleChange}
      />
      <button onClick={handleSave} disabled={isSaving}>
        Sauvegarder
      </button>
    </div>
  );
};

export default Settings;
