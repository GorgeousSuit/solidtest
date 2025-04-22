import Image from "@node_modules/next/image";

const Nav = () => {
  return <nav className="flex justify-between items-center px-[24px] pt-[16px]">
	<button className="h-[40px] w-[40px]">
		<Image
		 src="/icons/arrow.svg"
		 alt="Image"
		 width={14}
		 height={12}
		 className="px-[13px] py-[14px]"
		 unoptimized
		/>
	</button>
	<h2 className="font-[600] text-[18px] leading-[32px] m-[0]">Checkout</h2>
	<button className="p-[8px] font-[500] text-[14px] leading-[24px]">Укр</button>
  </nav>;
};

export default Nav;
