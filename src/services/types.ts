export interface ISearchItem {
  firstPreviewImage: {
    watermarked: string;
  };
  title: string;
  author: {
    details: {
      publicName: string;
    };
  };
  price: number;
}
