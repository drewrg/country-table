export type TableProps = {
  data: Countries
}

export type Countries = Country[]

export interface Country {
  name: Name
  independent: boolean
  currencies: Record<string, Currency>
  capital: string[]
  region: string
  subregion: string
  languages: Languages
  area: number
  flag: string
}

export interface Name {
  common: string
  official: string
  nativeName: Record<string, LocalizedCountryName>
}
export interface LocalizedCountryName {
  official: string
  common: string
}

export interface Currency {
  name: string
  symbol: string
}

export type Languages = Record<string, string>
