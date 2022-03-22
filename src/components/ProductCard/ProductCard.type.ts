export default interface CardProps {
  item: {
    product_id: number;
    product_img: string;
    product_name: string;
    price: number;
    isChecked: boolean;
  };
}
