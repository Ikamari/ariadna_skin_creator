//React
import React, { Component } from 'react';
//Axios
import axios from 'axios';

export const loadTextures = (props) => {
    const { getTexturesFromServer } = props;
    axios("http://ariadna.skins.back/handleTextures.php")
        .then((response) => {
            console.log("Successfully loaded texture names from server");
            console.log(response.data);
            getTexturesFromServer(response.data);
        })
        .catch((error) => {
            console.log("Can't load texture names from server");
            console.log(error);
        })
};