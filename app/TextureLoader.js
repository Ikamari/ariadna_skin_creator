//React
import React, { Component } from 'react';
//Axios
import axios from 'axios';

export const loadTextures = (props, isDev) => {
    const { getTexturesFromServer } = props;
    axios(isDev ? "http://skins.back.ariadna.loc/handleTextures.php" : "http://ariadna-rp.ru/skin-creator/handleTextures.php")
        .then((response) => {
            console.log("Successfully loaded texture names from server");
            console.log(response.data);
            getTexturesFromServer(response.data);
        })
        .catch((error) => {
            console.log("Can't load texture names from server");
            console.log(error);
            getTexturesFromServer(
                [{"head":{},"body":{},"hand":{},"leg":{}},{"head":{},"body":{},"hand":{},"leg":{}}]
            );
        })
};
