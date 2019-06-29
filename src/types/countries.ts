export interface ICountriesState {
  countries: string[],
  cities: string[]
}

export interface IResponseCountry {
  continent: string
  currencyCode: string
  externalIds: object
  fips: string
  id: number
  iso: string
  iso3: string
  isoNumeric: string
  languages: string[]
  localizedNames: object
  name: string
  phonePrefix: string[]
  postalCodeFormat: string
  postalCodeRegex: string
}
