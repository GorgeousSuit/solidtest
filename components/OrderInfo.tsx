import Divider from "./Divider";

const OrderInfo = () => {
  return (
    <div className="bg-[#F7F7F9] px-[16px] pb-[16px] pt-[12px] rounded-[8px] flex flex-col justify-center text-[14px] font-[500] leading-[24px] space-y-[16px]">
      <span className="font-[600] text-[18px]">Order info &lt;= 100 char.</span>
      <span className="">Description &lt;= 400 char.</span>
      <Divider />
      <div className="flex flex-col">
        <span className="leading-[20px]">
          Lamel Professional Smart Skin Compact Powder
        </span>
        <span className="text-[#797E8B] text-[12px] leading-[16px]">
          Пудра для лица
        </span>
      </div>
      <Divider />
      <div className="self-end">
        <span className="font-[600] text-[16px] leading-[24px]">
          299.99 UAH <p className="font-[500]">/</p>{" "}
          <p className="text-[14px]">month</p>
        </span>
      </div>
    </div>
  );
};

export default OrderInfo;
