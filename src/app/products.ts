export interface Product {
    id: number;
    coverImage: string;
    name: string;
    price: number;
    stock: number;
    description: string;
    heading1: string;
    heading2: string;
    heading3: string;
    headingText1: string;
    headingText2: string;
    headingText3: string;
  }
  
  export const products = [
    {
      id: 1,
      coverImage: './assets/img/phone-cover.jpg',
      name: 'Phone XL',
      price: 99000,
      stock: 50,
      description: 'A large phone with one of the best screens',
      heading1: 'ヘディング1',
      heading2: 'ヘディング2',
      heading3: 'ヘディング3',
      headingText1: 'サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　',
      headingText2: 'サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　',
      headingText3: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
    },
    {
      id: 2,
      coverImage: './assets/img/phone-cover.jpg',
      name: 'Phone Mini',
      price: 88000,
      stock: 40,
      description: 'A great phone with one of the best cameras',
      heading1: 'ヘディング1',
      heading2: 'ヘディング2',
      heading3: 'ヘディング3',
      headingText1: 'サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　',
      headingText2: 'サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　',
      headingText3: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
    },
    {
      id: 3,
      coverImage: './assets/img/phone-cover.jpg',
      name: 'Phone Standard',
      price: 77000,
      stock: 30,
      description: '',
      heading1: 'ヘディング1',
      heading2: 'ヘディング2',
      heading3: 'ヘディング3',
      headingText1: 'サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　',
      headingText2: 'サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　',
      headingText3: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
    },
    {
      id: 4,
      coverImage: './assets/img/phone-cover.jpg',
      name: 'Phone 16',
      price: 160000,
      stock: 40,
      description: '最新のiPhone',
      heading1: 'ヘディング1',
      heading2: 'ヘディング2',
      heading3: 'ヘディング3',
      headingText1: 'サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　',
      headingText2: 'サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　',
      headingText3: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
    },
  ];
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */
  