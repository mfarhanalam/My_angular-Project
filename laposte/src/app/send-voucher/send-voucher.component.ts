import { Component, OnInit } from '@angular/core';
import { PostmethodService } from '../config/postmethod.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-voucher',
  templateUrl: './send-voucher.component.html',
  styleUrl: './send-voucher.component.scss'
})
export class SendVoucherComponent implements OnInit {

  paymentstep: string = 'selectrecipient';
  selectedPayment: string | null = null;
  selectedCountry: string | null = null;
  exchangeRates: any = null;
  errorMessage: string = '';
  isShowLoader: boolean = false;
  reasonForSending: string = '';

  constructor(private postservices: PostmethodService, private router: Router) { }

  ngOnInit(): void {
    this.getDta();
  }

  handleRecipientSelect() {
    this.paymentstep = 'selectCurrency';
  }

  handleselectCurrency() {
    this.paymentstep = 'typeOfPayment';
  }


  handlePaymentType() {
    this.paymentstep = 'reasonForSending';
  }

  handleReasonSubmit() {
      this.paymentstep = 'selectvouchervalue';
  }

  handleVoucher() {
    this.paymentstep = 'transactionsummary';
  }

  handlePaymentMethodSelect() {
    this.postservices.closeOffcanvas('selectPaymentMethod');
    this.isShowLoader = true;
    setTimeout(() => {
      this.isShowLoader = false;
      this.paymentstep = 'success';
    }, 3000);
  }

  // New variables for Select Amount section
  youPayAmount: number = 0;
  youPayCurrency: string = 'USD'; // Default currency for "You Pay"
  recipientReceivesAmount: number = 0;
  recipientReceivesCurrency: string = 'ZWL'; // Default currency for "Recipient Receives"
  exchangeFee: number = 5; // Example exchange fee
  totalAmount: number = 0;

  // Function to calculate recipient receives amount and total
  calculateRecipientReceives() {
    if (this.exchangeRates && this.exchangeRates.conversion_rates) {
      const exchangeRate = this.exchangeRates.conversion_rates[this.recipientReceivesCurrency];
      if (exchangeRate) {
        this.recipientReceivesAmount = this.youPayAmount * exchangeRate;
        this.totalAmount = this.youPayAmount + this.exchangeFee;
      }
    }
  }




  // ... (rest of the code remains the same)



  getDta() {
    this.postservices.getExchangeRates().subscribe(
      (data) => {
        this.exchangeRates = data;
        console.log("echange ::: " + JSON.stringify(this.exchangeRates))
      },
      (error) => {
        this.errorMessage = 'Failed to fetch exchange rates.';
        console.error(error);
      }
    );
  }

  openOffcanvas(canvasID: string) {
    if (!!canvasID) {
      this.postservices.openOffcanvas(canvasID);
    }
  }

  // Function to handle country selection
  selectCountry(currencyCode: string) {
    this.selectedCountry = currencyCode;
  }

  navigateTo(pagename: string) {
    if (!!pagename) {
      this.router.navigateByUrl(pagename);
    }
  }
  // Map currency codes to country codes
  currencyCodeToCountryCode(currencyCode: string): string {
    const currencyToCountry = {
      'USD': 'US',  // United States Dollar -> United States
      'EUR': 'EU',  // Euro -> European Union (used in multiple countries)
      'GBP': 'GB',  // British Pound -> United Kingdom
      'AED': 'AE',  // United Arab Emirates Dirham -> United Arab Emirates
      'AFN': 'AF',  // Afghan Afghani -> Afghanistan
      'ALL': 'AL',  // Albanian Lek -> Albania
      'DZD': 'DZ',  // Algerian Dinar -> Algeria
      'ARS': 'AR',  // Argentine Peso -> Argentina
      'AUD': 'AU',  // Australian Dollar -> Australia
      'AZN': 'AZ',  // Azerbaijani Manat -> Azerbaijan
      'BAM': 'BA',  // Bosnia and Herzegovina Convertible Mark -> Bosnia and Herzegovina
      'BDT': 'BD',  // Bangladeshi Taka -> Bangladesh
      'BGN': 'BG',  // Bulgarian Lev -> Bulgaria
      'BIF': 'BI',  // Burundian Franc -> Burundi
      'BRL': 'BR',  // Brazilian Real -> Brazil
      'BND': 'BN',  // Brunei Dollar -> Brunei
      'KHR': 'KH',  // Cambodian Riel -> Cambodia
      'CAD': 'CA',  // Canadian Dollar -> Canada
      'CNY': 'CN',  // Chinese Yuan -> China
      'COP': 'CO',  // Colombian Peso -> Colombia
      'CRC': 'CR',  // Costa Rican Colón -> Costa Rica
      'HRK': 'HR',  // Croatian Kuna -> Croatia
      'CUP': 'CU',  // Cuban Peso -> Cuba
      'CZK': 'CZ',  // Czech Koruna -> Czech Republic
      'DKK': 'DK',  // Danish Krone -> Denmark
      'DJF': 'DJ',  // Djiboutian Franc -> Djibouti
      'DOP': 'DO',  // Dominican Peso -> Dominican Republic
      'EGP': 'EG',  // Egyptian Pound -> Egypt
      'ERN': 'ER',  // Eritrean Nakfa -> Eritrea
      'EEK': 'EE',  // Estonian Kroon -> Estonia
      'ETB': 'ET',  // Ethiopian Birr -> Ethiopia
      'FJD': 'FJ',  // Fijian Dollar -> Fiji
      'FKP': 'FK',  // Falkland Islands Pound -> Falkland Islands
      'FOK': 'FO',  // Faroese Króna -> Faroe Islands
      'GEL': 'GE',  // Georgian Lari -> Georgia
      'GHS': 'GH',  // Ghanaian Cedi -> Ghana
      'GIP': 'GI',  // Gibraltar Pound -> Gibraltar
      'GMD': 'GM',  // Gambian Dalasi -> Gambia
      'GNF': 'GN',  // Guinean Franc -> Guinea
      'GTQ': 'GT',  // Guatemalan Quetzal -> Guatemala
      'GYD': 'GY',  // Guyanese Dollar -> Guyana
      'HKD': 'HK',  // Hong Kong Dollar -> Hong Kong
      'HUF': 'HU',  // Hungarian Forint -> Hungary
      'IDR': 'ID',  // Indonesian Rupiah -> Indonesia
      'INR': 'IN',  // Indian Rupee -> India
      'IQD': 'IQ',  // Iraqi Dinar -> Iraq
      'IRR': 'IR',  // Iranian Rial -> Iran
      'ISK': 'IS',  // Icelandic Króna -> Iceland
      'ILS': 'IL',  // Israeli New Shekel -> Israel
      'JMD': 'JM',  // Jamaican Dollar -> Jamaica
      'JPY': 'JP',  // Japanese Yen -> Japan
      'KES': 'KE',  // Kenyan Shilling -> Kenya
      'KGS': 'KG',  // Kyrgyzstani Som -> Kyrgyzstan
      'KMF': 'KM',  // Comorian Franc -> Comoros
      'KRW': 'KR',  // South Korean Won -> South Korea
      'KWD': 'KW',  // Kuwaiti Dinar -> Kuwait
      'KYD': 'KY',  // Cayman Islands Dollar -> Cayman Islands
      'KZT': 'KZ',  // Kazakhstani Tenge -> Kazakhstan
      'LAK': 'LA',  // Laotian Kip -> Laos
      'LBP': 'LB',  // Lebanese Pound -> Lebanon
      'LKR': 'LK',  // Sri Lankan Rupee -> Sri Lanka
      'LRD': 'LR',  // Liberian Dollar -> Liberia
      'LSL': 'LS',  // Lesotho Loti -> Lesotho
      'MAD': 'MA',  // Moroccan Dirham -> Morocco
      'MDL': 'MD',  // Moldovan Leu -> Moldova
      'MGA': 'MG',  // Malagasy Ariary -> Madagascar
      'MKD': 'MK',  // Macedonian Denar -> North Macedonia
      'MMK': 'MM',  // Burmese Kyat -> Myanmar
      'MNT': 'MN',  // Mongolian Tugrik -> Mongolia
      'MOP': 'MO',  // Macanese Pataca -> Macau
      'MUR': 'MU',  // Mauritian Rupee -> Mauritius
      'MXN': 'MX',  // Mexican Peso -> Mexico
      'MYR': 'MY',  // Malaysian Ringgit -> Malaysia
      'MZN': 'MZ',  // Mozambican Metical -> Mozambique
      'NAD': 'NA',  // Namibian Dollar -> Namibia
      'NGN': 'NG',  // Nigerian Naira -> Nigeria
      'NIO': 'NI',  // Nicaraguan Córdoba -> Nicaragua
      'NOK': 'NO',  // Norwegian Krone -> Norway
      'NPR': 'NP',  // Nepalese Rupee -> Nepal
      'NZD': 'NZ',  // New Zealand Dollar -> New Zealand
      'OMR': 'OM',  // Omani Rial -> Oman
      'PAB': 'PA',  // Panamanian Balboa -> Panama
      'PEN': 'PE',  // Peruvian Nuevo Sol -> Peru
      'PGK': 'PG',  // Papua New Guinean Kina -> Papua New Guinea
      'PHP': 'PH',  // Philippine Peso -> Philippines
      'PKR': 'PK',  // Pakistani Rupee -> Pakistan
      'PLN': 'PL',  // Polish Zloty -> Poland
      'PYG': 'PY',  // Paraguayan Guarani -> Paraguay
      'QAR': 'QA',  // Qatari Rial -> Qatar
      'RON': 'RO',  // Romanian Leu -> Romania
      'RUB': 'RU',  // Russian Ruble -> Russia
      'RWF': 'RW',  // Rwandan Franc -> Rwanda
      'SAR': 'SA',  // Saudi Riyal -> Saudi Arabia
      'SBD': 'SB',  // Solomon Islands Dollar -> Solomon Islands
      'SCR': 'SC',  // Seychellois Rupee -> Seychelles
      'SEK': 'SE',  // Swedish Krona -> Sweden
      'SGD': 'SG',  // Singapore Dollar -> Singapore
      'SHP': 'SH',  // Saint Helena Pound -> Saint Helena
      'SLL': 'SL',  // Sierra Leonean Leone -> Sierra Leone
      'SOS': 'SO',  // Somali Shilling -> Somalia
      'SRD': 'SR',  // Surinamese Dollar -> Suriname
      'SSP': 'SS',  // South Sudanese Pound -> South Sudan
      'STN': 'ST',  // São Tomé and Príncipe Dobra -> São Tomé and Príncipe
      'SYP': 'SY',  // Syrian Pound -> Syria
      'SZL': 'SZ',  // Swazi Lilangeni -> Eswatini (Swaziland)
      'THB': 'TH',  // Thai Baht -> Thailand
      'TJS': 'TJ',  // Tajikistani Somoni -> Tajikistan
      'TMT': 'TM',  // Turkmenistani Manat -> Turkmenistan
      'TND': 'TN',  // Tunisian Dinar -> Tunisia
      'TOP': 'TO',  // Tongan Paʻanga -> Tonga
      'TRY': 'TR',  // Turkish Lira -> Turkey
      'TTD': 'TT',  // Trinidad and Tobago Dollar -> Trinidad and Tobago
      'TWD': 'TW',  // New Taiwan Dollar -> Taiwan
      'TZS': 'TZ',  // Tanzanian Shilling -> Tanzania
      'UAH': 'UA',  // Ukrainian Hryvnia -> Ukraine
      'UGX': 'UG',  // Ugandan Shilling -> Uganda
      'UYU': 'UY',  // Uruguayan Peso -> Uruguay
      'UZS': 'UZ',  // Uzbekistani Som -> Uzbekistan
      'VEF': 'VE',  // Venezuelan Bolívar -> Venezuela
      'VND': 'VN',  // Vietnamese Đồng -> Vietnam
      'VUV': 'VU',  // Vanuatu Vatu -> Vanuatu
      'WST': 'WS',  // Samoan Tala -> Samoa
      'XOF': 'FR',  // West African CFA Franc -> West African countries
      'XPF': 'FR',  // CFP Franc -> French territories
      'YER': 'YE',  // Yemeni Rial -> Yemen
      'ZAR': 'ZA',  // South African Rand -> South Africa
      'ZMK': 'ZM',  // Zambian Kwacha -> Zambia
      'ZWL': 'ZW',  // Zimbabwean Dollar -> Zimbabwe
      'AMD': 'AD',  // Zimbabwean Dollar -> Zimbabwe
      'ANG': 'AG',  // Zimbabwean Dollar -> Zimbabwe
      'AOA': 'AA',  // Zimbabwean Dollar -> Zimbabwe
    };
    return currencyToCountry[currencyCode.toUpperCase()] || '';
  }

  setFallbackImage(event: any) {
    event.target.src = 'img/images/world.png';
  }

  paymentTypes = [
    { label: 'Shoping', value: 'Voucher' },
    // { label: 'Credit Card', value: 'credit' },
    // { label: 'Debit Card', value: 'debit' },
    // { label: 'Bank Transfer', value: 'bank' }V
  ];


  recentRecipient = [
    { name: 'Alexa', payDate: '2024-02-10', phoneNumber: '+17 123466789' },
    { name: 'Tom', payDate: '2024-02-12', phoneNumber: '+17 123466789' },
    { name: 'Curran', payDate: '2024-02-08', phoneNumber: '+17 123466789' },
    { name: 'Root', payDate: '2024-02-15', phoneNumber: '+17 123466789' },
    { name: 'Steve', payDate: '2024-02-14', phoneNumber: '+17 123466789' },
    { name: 'Mark', payDate: '2024-02-11', phoneNumber: '+17 123466789' },
    { name: 'Emily', payDate: '2024-02-09', phoneNumber: '+17 123466789' },
    { name: 'Olivia', payDate: '2024-02-13', phoneNumber: '+17 123466789' },
    { name: 'Sophia', payDate: '2024-02-07', phoneNumber: '+17 123466789' },
    { name: 'Liam', payDate: '2024-02-06', phoneNumber: '+17 123466789' },
    { name: 'Ethan', payDate: '2024-02-05', phoneNumber: '+17 123466789' },
  ];

  colors = ['#FF5733', '#33B5E5', '#9C27B0', '#FFC107', '#4CAF50', '#E91E63', '#009688', '#FF9800', '#3F51B5', '#795548'];
}
