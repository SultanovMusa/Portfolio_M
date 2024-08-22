import React, { useState } from "react";

const Page = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const sendMessage = () => {
		// Сиздин WhatsApp номериңизди ушул жерге эл аралык форматта киргизиңиз (мисалы, +996XXXXXXXXX)
		const phoneNumber = "+996551366001";
		const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
			`Name: ${name}\nEmail: ${email}\nMessage: ${message}`
		)}`;

		// WhatsApp URL'ин жаңы терезеде ачат
		window.open(url, "_blank");
	};

	return (
		<div className="relative h-screen bg-black text-white">
			<div className="pt-[100px] overflow-y-auto h-full">
				<div className="container">
					<div className="flex flex-col h-[600px] space-y-6 gap-3 items-center">
						<input
							className="text-blue-800 rounded-xl cursor-progress shadow-[0px_4px_20px_rgba(0,0,255,0.3)] hover:shadow-[0px_4px_20px_rgba(0,0,255,0.6)] p-5 w-[500px] h-[50px] bg-transparent"
							type="text"
							placeholder="your Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>

						<input
							className="text-blue-800 rounded-xl cursor-progress shadow-[0px_4px_20px_rgba(0,0,255,0.3)] hover:shadow-[0px_4px_20px_rgba(0,0,255,0.6)] p-5 w-[500px] h-[50px] bg-transparent"
							type="email"
							placeholder="your Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>

						<textarea
							className="text-blue-800 rounded-xl cursor-progress shadow-[0px_4px_20px_rgba(0,0,255,0.3)] hover:shadow-[0px_4px_20px_rgba(0,0,255,0.6)] p-5 w-[500px] h-[300px] bg-transparent resize-none"
							placeholder="your Message"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>

						<button
							className="text-blue-800 shadow-[0px_4px_20px_rgba(0,0,255,0.3)] hover:shadow-[0px_4px_20px_rgba(0,0,255,0.6)] w-[500px] h-[40px] bg-transparent"
							onClick={sendMessage}
						>
							Add
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
