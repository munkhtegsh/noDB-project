import React from 'react';
import axios from 'axios';

const localURL = 'http://localhost:3005/api/players';

export default  {
    get: () => {
        axios.get(`${localURL}`)
            .then(( result ) => {
            return result.data;
        });
    },

    // put: () => {

    // },

    // update: () => {

    // },

    // delete: () => {

    // }
}