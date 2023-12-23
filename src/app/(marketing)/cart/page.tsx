// Components //
import CartList from "@/components/cart/CartList";
import Breadcrumb from "@/components/ui/Breadcrumb";
import OrderSummaryBox from "@/components/cart/OrderSummaryBox";

const page = () => {
  return (
    <>
      <Breadcrumb />
      <div className="flex flex-col lg:flex-row justify-between space-y-4 md:space-y-0 container">
        <CartList />
        <OrderSummaryBox />
      </div>
    </>
  );
};
export default page;
