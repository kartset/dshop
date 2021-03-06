import fbt from 'fbt'

export const Currencies = [
  ['fiat-USD', 'USD', '$'],
  ['fiat-GBP', 'GBP', '£'],
  ['fiat-EUR', 'EUR', '€'],
  ['fiat-KRW', 'KRW', '₩'],
  ['fiat-JPY', 'JPY', '¥'],
  ['fiat-CNY', 'CNY', '¥'],
  ['fiat-SGD', 'SGD', 'S$']
]

// Eg CurrenciesByKey['fiat-EUR'] = ['fiat-EUR', 'EUR', '€']
export const CurrenciesByKey = Currencies.reduce((m, o) => {
  m[o[0]] = o
  return m
}, {})

// Eg CurrenciesByKey['USD'] = ['fiat-USD', 'USD', '$']
export const CurrenciesByCode = Currencies.reduce((m, o) => {
  m[o[1]] = o
  return m
}, {})

export const CurrenciesByCountryCode = {
  FR: CurrenciesByCode['EUR'],
  DE: CurrenciesByCode['EUR'],
  IE: CurrenciesByCode['EUR'],
  IT: CurrenciesByCode['EUR'],
  ES: CurrenciesByCode['EUR'],
  NL: CurrenciesByCode['EUR'],
  US: CurrenciesByCode['USD'],
  GB: CurrenciesByCode['GBP'],
  KR: CurrenciesByCode['KRW'],
  JP: CurrenciesByCode['JPY'],
  CN: CurrenciesByCode['CNY'],
  SG: CurrenciesByCode['SGD']
}

// Items commented out not supported by crypto-compare
export const AllCurrencies = [
  ['USD', fbt('US Dollar (USD)', 'currencies.USD'), '${{amount}}'],
  ['EUR', fbt('Euro (EUR)', 'currencies.EUR'), '€{{amount}}'],
  ['GBP', fbt('British Pound (GBP)', 'currencies.GBP'), '£{{amount}}'],
  ['CAD', fbt('Canadian Dollar (CAD)', 'currencies.CAD'), '${{amount}} CAD'],
  // ['AFN', 'Afghan Afghani (AFN)'],
  ['ALL', fbt('Albanian Lek (ALL)', 'currencies.ALL')],
  ['DZD', fbt('Algerian Dinar (DZD)', 'currencies.DZD')],
  ['AOA', fbt('Angolan Kwanza (AOA)', 'currencies.AOA')],
  ['ARS', fbt('Argentine Peso (ARS)', 'currencies.ARS')],
  ['AMD', fbt('Armenian Dram (AMD)', 'currencies.AMD')],
  // ['AWG', fbt('Aruban Florin (AWG)', 'currencies.AWG')],
  ['AUD', fbt('Australian Dollar (AUD)', 'currencies.AUD')],
  // ['BBD', fbt('Barbadian Dollar (BBD)', 'currencies.BBD')],
  // ['AZN', fbt('Azerbaijani Manat (AZN)', 'currencies.AZN')],
  ['BDT', fbt('Bangladeshi Taka (BDT)', 'currencies.BDT')],
  // ['BSD', fbt('Bahamian Dollar (BSD)', 'currencies.BSD')],
  ['BHD', fbt('Bahraini Dinar (BHD)', 'currencies.BHD')],
  ['BIF', fbt('Burundian Franc (BIF)', 'currencies.BIF')],
  ['BYN', fbt('Belarusian Ruble (BYN)', 'currencies.BYN')],
  // ['BYR', fbt('Belarusian Ruble (BYR)', 'currencies.BYR')],
  // ['BZD', fbt('Belize Dollar (BZD)', 'currencies.BZD')],
  // ['BMD', fbt('Bermudan Dollar (BMD)', 'currencies.BMD')],
  // ['BTN', fbt('Bhutanese Ngultrum (BTN)', 'currencies.BTN')],
  ['BAM', fbt('Bosnia-Herzegovina Convertible Mark (BAM)', 'currencies.BAM')],
  ['BRL', fbt('Brazilian Real (BRL)', 'currencies.BRL')],
  ['BOB', fbt('Bolivian Boliviano (BOB)', 'currencies.BOB')],
  ['BWP', fbt('Botswanan Pula (BWP)', 'currencies.BWP')],
  ['BND', fbt('Brunei Dollar (BND)', 'currencies.BND')],
  ['BGN', fbt('Bulgarian Lev (BGN)', 'currencies.BGN')],
  ['MMK', fbt('Myanmar Kyat (MMK)', 'currencies.MMK')],
  ['KHR', fbt('Cambodian Riel (KHR)', 'currencies.KHR')],
  // ['CVE', fbt('Cape Verdean Escudo (CVE)', 'currencies.CVE')],
  // ['KYD', fbt('Cayman Islands Dollar (KYD)', 'currencies.KYD')],
  ['XAF', fbt('Central African CFA Franc (XAF)', 'currencies.XAF')],
  ['CLP', fbt('Chilean Peso (CLP)', 'currencies.CLP')],
  ['CNY', fbt('Chinese Yuan (CNY)', 'currencies.CNY')],
  ['COP', fbt('Colombian Peso (COP)', 'currencies.COP')],
  // ['KMF', fbt('Comorian Franc (KMF)', 'currencies.KMF')],
  ['CDF', fbt('Congolese Franc (CDF)', 'currencies.CDF')],
  ['CRC', fbt('Costa Rican Colón (CRC)', 'currencies.CRC')],
  ['HRK', fbt('Croatian Kuna (HRK)', 'currencies.HRK')],
  ['CZK', fbt('Czech Koruna (CZK)', 'currencies.CZK')],
  ['DKK', fbt('Danish Krone (DKK)', 'currencies.DKK')],
  // ['DJF', fbt('Djiboutian Franc (DJF)', 'currencies.DJF')],
  ['DOP', fbt('Dominican Peso (DOP)', 'currencies.DOP')],
  // ['XCD', fbt('East Caribbean Dollar (XCD)', 'currencies.XCD')],
  ['EGP', fbt('Egyptian Pound (EGP)', 'currencies.EGP')],
  ['ETB', fbt('Ethiopian Birr (ETB)', 'currencies.ETB')],
  // ['FKP', fbt('Falkland Islands Pound (FKP)', 'currencies.FKP')],
  // ['XPF', fbt('CFP Franc (XPF)', 'currencies.XPF')],
  // ['FJD', fbt('Fijian Dollar (FJD)', 'currencies.FJD')],
  ['GIP', fbt('Gibraltar Pound (GIP)', 'currencies.GIP')],
  // ['GMD', fbt('Gambian Dalasi (GMD)', 'currencies.GMD')],
  ['GHS', fbt('Ghanaian Cedi (GHS)', 'currencies.GHS')],
  ['GTQ', fbt('Guatemalan Quetzal (GTQ)', 'currencies.GTQ')],
  // ['GYD', fbt('Guyanaese Dollar (GYD)', 'currencies.GYD')],
  ['GEL', fbt('Georgian Lari (GEL)', 'currencies.GEL')],
  // ['GNF', fbt('Guinean Franc (GNF)', 'currencies.GNF')],
  // ['HTG', fbt('Haitian Gourde (HTG)', 'currencies.HTG')],
  ['HNL', fbt('Honduran Lempira (HNL)', 'currencies.HNL')],
  ['HKD', fbt('Hong Kong Dollar (HKD)', 'currencies.HKD')],
  ['HUF', fbt('Hungarian Forint (HUF)', 'currencies.HUF')],
  ['ISK', fbt('Icelandic Króna (ISK)', 'currencies.ISK')],
  ['INR', fbt('Indian Rupee (INR)', 'currencies.INR')],
  ['IDR', fbt('Indonesian Rupiah (IDR)', 'currencies.IDR')],
  ['ILS', fbt('Israeli New Shekel (ILS)', 'currencies.ILS')],
  ['IRR', fbt('Iranian Rial (IRR)', 'currencies.IRR')],
  ['IQD', fbt('Iraqi Dinar (IQD)', 'currencies.IQD')],
  ['JMD', fbt('Jamaican Dollar (JMD)', 'currencies.JMD')],
  ['JPY', fbt('Japanese Yen (JPY)', 'currencies.JPY')],
  // ['JEP', fbt('Jersey Pound (JEP)', 'currencies.JEP')],
  ['JOD', fbt('Jordanian Dinar (JOD)', 'currencies.JOD')],
  ['KZT', fbt('Kazakhstani Tenge (KZT)', 'currencies.KZT')],
  ['KES', fbt('Kenyan Shilling (KES)', 'currencies.KES')],
  ['KWD', fbt('Kuwaiti Dinar (KWD)', 'currencies.KWD')],
  ['KGS', fbt('Kyrgystani Som (KGS)', 'currencies.KGS')],
  // ['LAK', fbt('Laotian Kip (LAK)', 'currencies.LAK')],
  // ['LVL', fbt('Latvian Lats (LVL)', 'currencies.LVL')],
  ['LBP', fbt('Lebanese Pound (LBP)', 'currencies.LBP')],
  ['LSL', fbt('Lesotho Loti (LSL)', 'currencies.LSL')],
  // ['LRD', fbt('Liberian Dollar (LRD)', 'currencies.LRD')],
  // ['LYD', fbt('Libyan Dinar (LYD)', 'currencies.LYD')],
  // ['MGA', fbt('Malagasy Ariary (MGA)', 'currencies.MGA')],
  // ['MKD', fbt('Macedonian Denar (MKD)', 'currencies.MKD')],
  ['MOP', fbt('Macanese Pataca (MOP)', 'currencies.MOP')],
  ['MWK', fbt('Malawian Kwacha (MWK)', 'currencies.MWK')],
  // ['MVR', fbt('Maldivian Rufiyaa (MVR)', 'currencies.MVR')],
  ['MXN', fbt('Mexican Peso (MXN)', 'currencies.MXN')],
  ['MYR', fbt('Malaysian Ringgit (MYR)', 'currencies.MYR')],
  ['MUR', fbt('Mauritian Rupee (MUR)', 'currencies.MUR')],
  ['MDL', fbt('Moldovan Leu (MDL)', 'currencies.MDL')],
  ['MAD', fbt('Moroccan Dirham (MAD)', 'currencies.MAD')],
  // ['MNT', fbt('Mongolian Tugrik (MNT)', 'currencies.MNT')],
  // ['MZN', fbt('Mozambican Metical (MZN)', 'currencies.MZN')],
  ['NAD', fbt('Namibian Dollar (NAD)', 'currencies.NAD')],
  ['NPR', fbt('Nepalese Rupee (NPR)', 'currencies.NPR')],
  // ['ANG', fbt('Netherlands Antillean Guilder (ANG)', 'currencies.ANG')],
  ['NZD', fbt('New Zealand Dollar (NZD)', 'currencies.NZD')],
  ['NIO', fbt('Nicaraguan Córdoba (NIO)', 'currencies.NIO')],
  ['NGN', fbt('Nigerian Naira (NGN)', 'currencies.NGN')],
  ['NOK', fbt('Norwegian Krone (NOK)', 'currencies.NOK')],
  ['OMR', fbt('Omani Rial (OMR)', 'currencies.OMR')],
  ['PAB', fbt('Panamanian Balboa (PAB)', 'currencies.PAB')],
  ['PKR', fbt('Pakistani Rupee (PKR)', 'currencies.PKR')],
  ['PGK', fbt('Papua New Guinean Kina (PGK)', 'currencies.PGK')],
  ['PYG', fbt('Paraguayan Guarani (PYG)', 'currencies.PYG')],
  ['PEN', fbt('Peruvian Sol (PEN)', 'currencies.PEN')],
  ['PHP', fbt('Philippine Piso (PHP)', 'currencies.PHP')],
  ['PLN', fbt('Polish Zloty (PLN)', 'currencies.PLN')],
  ['QAR', fbt('Qatari Rial (QAR)', 'currencies.QAR')],
  ['RON', fbt('Romanian Leu (RON)', 'currencies.RON')],
  ['RUB', fbt('Russian Ruble (RUB)', 'currencies.RUB')],
  ['RWF', fbt('Rwandan Franc (RWF)', 'currencies.RWF')],
  // ['WST', fbt('Samoan Tala (WST)', 'currencies.WST')],
  // ['SHP', fbt('St. Helena Pound (SHP)', 'currencies.SHP')],
  ['SAR', fbt('Saudi Riyal (SAR)', 'currencies.SAR')],
  // ['STD', fbt('São Tomé &amp; Príncipe Dobra (STD)', 'currencies.STD')],
  ['RSD', fbt('Serbian Dinar (RSD)', 'currencies.RSD')],
  // ['SCR', fbt('Seychellois Rupee (SCR)', 'currencies.SCR')],
  // ['SLL', fbt('Sierra Leonean Leone (SLL)', 'currencies.SLL')],
  ['SGD', fbt('Singapore Dollar (SGD)', 'currencies.SGD')],
  // ['SDG', fbt('Sudanese Pound (SDG)', 'currencies.SDG')],
  // ['SYP', fbt('Syrian Pound (SYP)', 'currencies.SYP')],
  ['ZAR', fbt('South African Rand (ZAR)', 'currencies.ZAR')],
  ['KRW', fbt('South Korean Won (KRW)', 'currencies.KRW')],
  ['SSP', fbt('South Sudanese Pound (SSP)', 'currencies.SSP')],
  ['SBD', fbt('Solomon Islands Dollar (SBD)', 'currencies.SBD')],
  ['LKR', fbt('Sri Lankan Rupee (LKR)', 'currencies.LKR')],
  // ['SRD', fbt('Surinamese Dollar (SRD)', 'currencies.SRD')],
  ['SZL', fbt('Swazi Lilangeni (SZL)', 'currencies.SZL')],
  ['SEK', fbt('Swedish Krona (SEK)', 'currencies.SEK')],
  ['CHF', fbt('Swiss Franc (CHF)', 'currencies.CHF')],
  ['TWD', fbt('New Taiwan Dollar (TWD)', 'currencies.TWD')],
  ['THB', fbt('Thai Baht (THB)', 'currencies.THB')],
  // ['TJS', fbt('Tajikistani Somoni (TJS)', 'currencies.TJS')],
  ['TZS', fbt('Tanzanian Shilling (TZS)', 'currencies.TZS')],
  ['TOP', fbt('Tongan Paʻanga (TOP)', 'currencies.TOP')],
  ['TTD', fbt('Trinidad &amp; Tobago Dollar (TTD)', 'currencies.TTD')],
  ['TND', fbt('Tunisian Dinar (TND)', 'currencies.TND')],
  ['TRY', fbt('Turkish Lira (TRY)', 'currencies.TRY')],
  // ['TMT', fbt('Turkmenistani Manat (TMT)', 'currencies.TMT')],
  ['UGX', fbt('Ugandan Shilling (UGX)', 'currencies.UGX')],
  ['UAH', fbt('Ukrainian Hryvnia (UAH)', 'currencies.UAH')],
  ['AED', fbt('United Arab Emirates Dirham (AED)', 'currencies.AED')],
  ['UYU', fbt('Uruguayan Peso (UYU)', 'currencies.UYU')],
  ['UZS', fbt('Uzbekistani Som (UZS)', 'currencies.UZS')],
  ['VUV', fbt('Vanuatu Vatu (VUV)', 'currencies.VUV')],
  ['VES', fbt('Venezuelan Bolívar (VES)', 'currencies.VES')],
  ['VND', fbt('Vietnamese Dong (VND)', 'currencies.VND')],
  ['XOF', fbt('West African CFA Franc (XOF)', 'currencies.XOF')],
  // ['YER', fbt('Yemeni Rial (YER)', 'currencies.YER')],
  ['ZMW', fbt('Zambian Kwacha (ZMW)', 'currencies.ZMW')]
]
