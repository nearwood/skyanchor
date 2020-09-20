# Skyanchor 🌩️

* Simple 7 day forecast, with expandable hourly breakdown
* Weather alerts
* Mobile-first UI

Deployed to: https://nearwood.dev/skyanchor/

---

## Running Locally

### Requirements
* Node.js 12+
* Yarn: https://classic.yarnpkg.com/en/ (though npm should also work)

### Instructions
* Clone repository: `git clone https://github.com/nearwood/skyanchor.git`
* Install dependancies: `yarn`
* Build and serve locally: `yarn run start`
* Open a browser to: http://localhost:3000/

---

## Tech Stack
* React
* Material UI (MUI)
* NOAA Weather API: https://www.weather.gov/documentation/services-web-api

> Bootstrapped with create-react-app. See [CRA.md](./CRA.md) for more details.

### Tech Features
* Responsive (basic; mobile-first)
* Progressive Web App (PWA) - though lacks active offline capabilities
* HTML geolocation

## Testing
* API Tests?
* Meaningful React component tests
* Selenium? Overkill?

## Deployment
* Handled by GitHub Actions: https://github.com/nearwood/skyanchor/actions
* Deployed to Github pages, where a DNS CNAME record points to my domain.

## To Do
- Check API status: GET https://api.weather.gov/
- Add tests

## Known Issues; Caveats

### UI
- Theme colors, consistency could be better.

### Performance
- Virtualize hourly list
- Consider MUI's hidden strategy
- Reduce calculations made within rendering

### API
- Should decouple from NOAA weather and add intermediary layer
- Authentication discrepancy (sending `User-Agent` requires API to send correct CORS preflight)

## Future Features
- Custom logo
- Zip code alternative to HTML5 geolocation
- Dark mode (easy with MUI)
- Would really like prob. of precip. more prominent and by the hour.
- Better icons/emoji. Parse icon URL to derive emoji + percentage?
- Settable units C/F
- Radar
- Shareable links? (would need routing, and/or some type of persistence)
