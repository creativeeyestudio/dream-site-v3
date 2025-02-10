import React, { useState, useEffect } from "react";
import axios from "axios";
import { BaseHeaderLayout, Box, Button, TextInput, Stack, SingleSelect, SingleSelectOption } from "@strapi/design-system";
import { useNotification, useLibrary } from "@strapi/helper-plugin";

const Etablissement = () => {
  const [etablissement, setEtablissement] = useState({
    nom: "",
    type: "Hôtel",
    adresse: "",
    code_postal: "",
    ville: "",
    telephone: "",
    email: "",
    logo: null,
  });

  const notify = useNotification();
  const { components } = useLibrary(); // Accès à la bibliothèque de médias

  useEffect(() => {
    const fetchEtablissement = async () => {
      try {
        const response = await axios.get("/etablis/etablissement");
        setEtablissement(response.data || {});
      } catch (error) {
        console.error("Erreur lors du chargement :", error);
        notify({ type: "warning", message: "Impossible de charger les informations." });
      }
    };
    fetchEtablissement();
  }, []);

  const handleChange = (e) => {
    setEtablissement({ ...etablissement, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      await axios.put("/etablis/etablissement", etablissement);
      notify({ type: "success", message: "Informations mises à jour !" });
    } catch (error) {
      console.error("Erreur lors de la sauvegarde :", error);
      notify({ type: "warning", message: "Échec de la mise à jour." });
    }
  };

  const handleFileChange = (files) => {
    setEtablissement({ ...etablissement, logo: files[0] });
  };

  return (
    <Box padding={4}>
        <BaseHeaderLayout title="Fiche Établissement" subtitle="Modifier les informations" as="h2" />
        <Box padding={4}>
            <TextInput label="Nom" name="nom" value={etablissement.nom} onChange={handleChange} required />
          
            <SingleSelect label="Type" name="type" value={etablissement.type} onChange={(value) => setEtablissement({ ...etablissement, type: value })}>
                <SingleSelectOption value="Hôtel">Hôtel</SingleSelectOption>
                <SingleSelectOption value="Restaurant">Restaurant</SingleSelectOption>
            </SingleSelect>
            
            <TextInput label="Adresse" name="adresse" value={etablissement.adresse} onChange={handleChange} required />
            <TextInput label="Code Postal" name="code_postal" value={etablissement.code_postal} onChange={handleChange} required />
            <TextInput label="Ville" name="ville" value={etablissement.ville} onChange={handleChange} required />
            <TextInput label="Téléphone" name="telephone" value={etablissement.telephone} onChange={handleChange} />
            <TextInput label="Email" name="email" value={etablissement.email} onChange={handleChange} required type="email" />
          
            {/* Upload du logo */}
            {components && components.MediaLibraryInput && (
                <components.MediaLibraryInput
                name="logo"
                label="Logo"
                onChange={handleFileChange}
                selectedFiles={etablissement.logo ? [etablissement.logo] : []}
                />
            )}

            <Button onClick={handleSave}>Sauvegarder</Button>
        </Box>
    </Box>
  );
};

export default Etablissement;
