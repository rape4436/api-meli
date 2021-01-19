const api = process.env.API_URL;
const axios = require('axios');

/*Servicio de busqueda por texto de busqueda*/
let getItemFindText = async (body, res) => {

    const encodedUlr = encodeURI(body);
    try {
        const response = await axios.get(
            `${api}sites/MLA/search?q=:${encodedUlr}`,
        );
        let items = response.data.results;

        const json = {
            author: {
                name: 'rances',
                lastname: 'pena'
            },
            categories: {
            },
            items
        };
        return res.json({
            ok: true,
            entity: json,
        });
    } catch (error) {
        return res.status(error.response.status).json({
            ok: false,
            message: error.response.data.message,
        });
    }
};


/*Servicio que Recupera la información de un artículo*/
let getItemFindId = async (body, res) => {

    const encodedUlr = encodeURI(body);


    try {

        const response = await axios.get(
            `${api}/items/:${encodedUlr}`,
        );

        let item = response.data.results;

        const json = {
            author: {
                name: 'rances',
                lastname: 'pena'
            },
            item
        };


        return res.json({
            ok: true,
            entity: json,
        });
    } catch (error) {
        return res.status(error.response.status).json({
            ok: false,
            message: error.response.data.message,
        });
    }
};

/*Servicio que Recupera descripciones y revisiones de artículos*/
let getItemFindIdAndDesc = async (body, res) => {

    const encodedUlr = encodeURI(body);

    try {

        const response = await axios.get(
            `${api}/items/${encodedUlr}/description`,
        );


        let item = response.data;

        const json = {
            author: {
                name: 'rances',
                lastname: 'pena'
            },
            item
        };

        return res.json({
            ok: true,
            entity: json,
        });
    } catch (error) {
        return res.status(error.response.status).json({
            ok: false,
            message: error.response.data.message,
        });
    }
};

module.exports = {
    getItemFindText,
    getItemFindId,
    getItemFindIdAndDesc
}