import OrderInfo from "@components/OrderInfo";
import Payment from "@components/Payment/Payment";
import Footer from "@components/Footer";

export default function Home() {


  return (
    <div className="p-[16px] text-[#363A43] space-y-[32px]">
     <Payment />
     <OrderInfo />
     <Footer />
    </div>
  );
}
