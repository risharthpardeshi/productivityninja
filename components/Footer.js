function Footer() {
	return (
		<>
			<div className="flex flex-col justify-center items-center text-center  p-5 #e4e0e0d2">
				<h1 className=" text-gray-800 font-semibold">
					 Build with ❤️ by{" "}
					<span className="hover:text-blue-600 font-semibold cursor-pointer">
						<a href="https://risharthpardeshi.vercel.app">Risharth Pardeshi</a> 
					</span>
                    <span>{" |  All rights reserved  "} </span>
				</h1>
			</div>
		</>
	);
}

export default Footer;