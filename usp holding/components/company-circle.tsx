import { motion } from "framer-motion";
import { useState } from "react";

const subsidiaries = [
	{ id: "usp-parking", name: "USP Parking", logo: "/usp-parking.png" },
	{ id: "usp-janitorial", name: "USP Janitorial", logo: "/usp-janitorial.png" },
	{ id: "usp-security", name: "USP Security", logo: "/usp-security.png" },
	{ id: "usp-investment", name: "USP Investment", logo: "/usp-investment.png" },
	{ id: "usp-consulting", name: "USP Consulting", logo: "/usp-consulting.png" },
	{ id: "dcgcc", name: "DCGCC", logo: "/dcgcc.png" },
	{ id: "potomac-management", name: "Potomac Management Group", logo: "/8.png" },
];

export default function CompanyCircle() {
	const [hoveredCompany, setHoveredCompany] = useState<string | null>(null);

	return (
		<motion.div
			initial={{ opacity: 0, x: 30 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.8, delay: 0.3 }}
			className="flex justify-center"
		>
			<motion.div
				className="relative w-[32rem] h-[32rem]"
				initial={{ rotate: 0 }}
				animate={{ rotate: 360 }}
				transition={{
					duration: 2,
					delay: 1.5,
					ease: "easeInOut",
				}}
			>
				{/* Central Logo */}
				<motion.div
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-xl z-10 border-2 border-[#002B55]/20"
				>
					<img
						src="/header-logo-removebg-preview.png"
						alt="USP Holdings Logo"
						className="w-24 h-24 object-contain"
					/>
				</motion.div>

				{/* Orbiting Logos */}
				{subsidiaries.map((subsidiary, index) => {
					const angle = (index * 360) / subsidiaries.length - 90;
					const radius = 240;
					const x = Math.cos((angle * Math.PI) / 180) * radius;
					const y = Math.sin((angle * Math.PI) / 180) * radius;

					return (
						<motion.div
							key={subsidiary.id}
							initial={{ scale: 0, x: 0, y: 0 }}
							animate={{
								scale: 1,
								x: x,
								y: y,
							}}
							transition={{
								duration: 0.8,
								delay: 0.8 + index * 0.1,
							}}
							whileHover={{
								scale: 1.2,
								zIndex: 20,
							}}
							onHoverStart={() => setHoveredCompany(subsidiary.id)}
							onHoverEnd={() => setHoveredCompany(null)}
							className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-[#002B55]/20 hover:border-[#002B55] transition-all duration-300 cursor-pointer group"
							style={{
								transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
							}}
						>
							<div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
								<img
									src={subsidiary.logo}
									alt={subsidiary.name}
									className="w-16 h-16 object-contain"
								/>
							</div>
							{/* Tooltip */}
							{hoveredCompany === subsidiary.id && (
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-[#002B55] text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg z-30"
								>
									{subsidiary.name}
									<div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#002B55] rotate-45"></div>
								</motion.div>
							)}
						</motion.div>
					);
				})}
			</motion.div>
		</motion.div>
	);
}