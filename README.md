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

- `yarn test` - run tests and watch files.
- `yarn run coverage` - to run all tests and generate a code coverage report.

> Snapshot testing MUI components turned out to be more tricky than I thought. See https://material-ui.com/guides/testing/

### Coverage

As of 94ede39:

```
Statements   : 43.56% ( 71/163 )
Branches     : 53.97% ( 34/63 )
Functions    : 36.17% ( 17/47 )
Lines        : 45.89% ( 67/146 )
```

#### Notes:

- Inflated due to simple render tests.
- Not much business logic to actually test.

### `src/exampleData`

- Contains saved responses from api.weather.gov
- Embedded URLs have been modified to work with tests
- However testing against mocked *external* APIs was non-trivial with react-testing-library, msw, etc.

## Deployment
* Handled by GitHub Actions: https://github.com/nearwood/skyanchor/actions
* Deployed to Github pages, where a DNS CNAME record points to my domain

## To Do
- Check API status: GET https://api.weather.gov/
- Add tests

## Known Issues; Caveats

### UI
- Theme colors, consistency could be better
- Firefox has issues with the flexbox column

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
- Would really like prob. of precip. more prominent and by the hour
- Better icons/emoji. Parse icon URL to derive emoji + percentage?
- Settable units C/F
- Radar
- Shareable links? (would need routing, and/or some type of persistence)
