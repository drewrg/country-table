export const parseCountryData = (data: any): Record<string, string> => ({
  name: data.name.common,
  officialName: data.name.official,
  borders: data.borders?.join(', ') || 'None',
  capital: data.capital[0],
  independent: data.independent ? 'Yes' : 'No',
  region: data.region,
  subregion: data.subregion,
  population: new Intl.NumberFormat().format(data.population),
  area: new Intl.NumberFormat().format(data.area),
  languages: Object.values(data.languages).join(', '),
  currencies: Object.values(data.currencies)
    .map((currency: any) => `${currency.name} (${currency.symbol})`)
    .join(', '),
  flag: data.flag,
})
