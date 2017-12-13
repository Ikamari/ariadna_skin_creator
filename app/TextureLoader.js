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
            alert("Список текстур не был получен от сервера. Стоит перезагрузить страницу или попробовать" +
                " собрать скин немного позже. Если вновь появилось это сообщение, тогда сервер не отвечает" +
                " или ловит ошибки при выполнении скрипта.");
            getTexturesFromServer(
                [{"head":{},"body":{},"hand":{},"leg":{}},{"head":{},"body":{},"hand":{},"leg":{}}]
            );
        })
};
