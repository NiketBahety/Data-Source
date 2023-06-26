const axios = require('axios');

exports.getWeather = async (req, res, next) => {
    let response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=895e98dca51f4649870133757230706&q=${req.query.latitude},${req.query.longitude}&days=1&aqi=no&alerts=no`
    );

    res.status(200).json({
        status: 'success',
        serviceType: 'weather',
        res: response.data,
    });
};
