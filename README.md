# Skyanchor 🌩️

Bootstrapped with create-react-app. See [CRA.md](./CRA.md) for instructions.

## Running locally

### Requirements

* Node.js 12+
* Yarn: https://classic.yarnpkg.com/en/ (though npm should also work)

### Instructions

* Clone repository: `git clone https://github.com/nearwood/skyanchor.git`
* Install dependancies: `yarn`
* Build and serve locally: `yarn run start`
* Open a browser to: http://localhost:3000/

## Stack

* React
* Material UI?
* https://www.weather.gov/documentation/services-web-api

## Features

* Responsive!
* Shareable links? (would need react-router, and/or some type of persistence)
* PWA?
* Easily swappable API?
* a11y?
* HTML geolocation: https://www.npmjs.com/package/react-geolocated?
  * might roll my own
* zip or geolocation
  * would need zip to lat+lon/grid
* get prob. of precip? Latest? Hourly?
* Alerts? https://api.weather.gov/alerts/active?area={state}

* Parse icon URL to derive emoji + percentage?
* Settable units C/F

## Testing

* API Tests?
* Meaningful React component tests
* Selenium? Overkill?

## Deployment

* Github pages: https://nearwood.dev/skyanchor/

# TODO

- Ensure nix/windows script/line ending differences won't affect anything.
- Turn linter up to 11
- Check API status: GET https://api.weather.gov/
- Mobile: Bottom nav, Desktop: side nav
