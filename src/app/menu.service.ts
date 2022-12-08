import { Injectable } from '@angular/core';

import { Menu } from './menu';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor() {}
  getMenus(): Menu[] {
    return [
      {
        id: 0,
        url: 'http://bit.ly/3gEcn6i',
        name: 'マルゲリータ',
        description:
          'トマト・モッツァレラチーズ・バジルを自家製生地にのせ、石窯で焼き上げたシンプルなピザ。',
        en: 'Margherita',
        price: 1280,
        calories: 658,
      },
      {
        id: 1,
        url: 'http://bit.ly/3AHtJWv',
        name: 'ココアケーキ',
        description:
          'ふんわりと焼き上げたココアケーキに、ブルーベリーとレッドカラントをトッピング。',
        en: 'Cocoa Cake',
        price: 650,
        calories: 489,
      },
      {
        id: 2,
        url: 'http://bit.ly/3UnTPFn',
        name: 'チーズステーキサンド',
        description:
          '甘辛くソテーした牛薄切り肉とチーズを使用した、フィラデルフィアのサンドイッチ。お好みでソースをつけてお召し上がりください。',
        en: 'Cheese Steak Sandwich',
        price: 880,
        calories: 590,
      },
      {
        id: 3,
        url: 'http://bit.ly/3AOyJJg',
        name: 'レモンパイ',
        description:
          '甘酸っぱいレモンカードの上にメレンゲをのせ、さっくりと焼き上げたパイ。',
        en: 'Lemon Pie',
        price: 480,
        calories: 320,
      },
      {
        id: 4,
        url: 'http://bit.ly/3gEcNJU',
        name: 'カフェラテ',
        description:
          '本日のおすすめのコーヒー豆を深煎りし、じっくり淹れたカフェラテ。ミルクはソイミルクに変更可(+￥50)。コーヒー豆の産地は店員にお尋ねください。',
        en: 'Cafe Latte',
        price: 400,
        calories: 185,
      },
      {
        id: 5,
        url: 'http://bit.ly/3gJ5eBw',
        name: '季節の温野菜サラダ',
        description:
          'オーブンでグリルした旬の野菜とグリーンリーフのサラダ。ドレッシングは、シーザー、セサミ、ソテードオニオンからお選びいただけます。',
        en: 'Seasonal Vegetable Salad',
        price: 850,
        calories: 250,
      },
      {
        id: 6,
        url: 'http://bit.ly/3u1GuHO',
        name: 'かぼちゃのスープ',
        description:
          'バターナッツかぼちゃを使用したなめらかなポタージュスープ。テイクアウトもできます。',
        en: 'Butternut Squash Soup',
        price: 520,
        calories: 180,
      },
      {
        id: 7,
        url: 'http://bit.ly/3tZgUTJ',
        name: 'クリスマスティー',
        description:
          'スパイスとオレンジをブレンドした冬季限定のフレーバードティー。ストレートでもミルクティーでもお楽しみいただけます。※12/25までの限定メニュー',
        en: 'Christmas Tea',
        price: 480,
        calories: 32,
      },
      {
        id: 8,
        url: 'http://bit.ly/3FcNpEJ',
        name: 'BLTサンド',
        description:
          'アンガス牛100%の直火焼きパティに、北海道産のチェダーチーズをあわせたこだわりのBLTサンド。野菜の産地は店内掲示をご覧ください。',
        en: 'BLT Sandwich',
        price: 680,
        calories: 520,
      },
    ];
  }
}
