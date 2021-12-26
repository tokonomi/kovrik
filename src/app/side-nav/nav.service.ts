import { Injectable } from '@angular/core';

export interface Lang{
  country: string
  lang: string
  value: string
}
export interface Reg{
  regionName: string
  region: Lang[]
}
@Injectable({
  providedIn: 'root'
})
export class NavService {

  languages: Reg[] = [
    {
      regionName: 'North America',
      region: [{country: 'United States', lang: 'English', value: 'en'}]
    },
    {
      regionName: 'Europe',
      region: [
      {country: 'Nederland', lang: 'Nederlands', value: 'ned'},
      {country: 'Russia', lang: 'Russian', value: 'ru'}
    ]},
    {
      regionName: 'Asia',
      region: [{country: '中国大陆', lang: '简体中文', value: 'ch'}]
    },
  ]
  constructor() { }
}
