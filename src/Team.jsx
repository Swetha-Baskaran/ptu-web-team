import React from "react";
import {FaTwitter, FaLinkedin, FaDribbble} from "react-icons/fa";

const teamData = [
	{
		name: "Olivia Rhye",
		role: "Founder & CEO",
		description:
			"Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
		image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
	},
	{
		name: "Phoenix Baker",
		role: "Engineering Manager",
		description: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
		image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	},
	{
		name: "Olivia Rhye",
		role: "Founder & CEO",
		description:
			"Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
		image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
	},
	{
		name: "Phoenix Baker",
		role: "Engineering Manager",
		description: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
		image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	},
	{
		name: "Olivia Rhye",
		role: "Founder & CEO",
		description:
			"Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
		image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
	},
	{
		name: "Phoenix Baker",
		role: "Engineering Manager",
		description: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
		image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	},
	{
		name: "Olivia Rhye",
		role: "Founder & CEO",
		description:
			"Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
		image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
	},
	{
		name: "Phoenix Baker",
		role: "Engineering Manager",
		description: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
		image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	},
	{
		name: "Olivia Rhye",
		role: "Founder & CEO",
		description:
			"Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
		image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
	},
	{
		name: "Phoenix Baker",
		role: "Engineering Manager",
		description: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
		image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	},
	{
		name: "Olivia Rhye",
		role: "Founder & CEO",
		description:
			"Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
		image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
	},
	{
		name: "Phoenix Baker",
		role: "Engineering Manager",
		description: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
		image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	},
	{
		name: "Olivia Rhye",
		role: "Founder & CEO",
		description:
			"Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
		image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
	},
	{
		name: "Phoenix Baker",
		role: "Engineering Manager",
		description: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
		image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	},
	{
		name: "Olivia Rhye",
		role: "Founder & CEO",
		description:
			"Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
		image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
	},
	{
		name: "Phoenix Baker",
		role: "Engineering Manager",
		description: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
		image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	},
	// Add more team members here
];

const TeamSection = () => {
	return (
		<div className='container mx-auto py-8'>
			<div className='flex flex-col text-center gap-4 mb-8 p-4'>
				<div className='text-purple-600 text-sm font-bold'>Our team</div>
				<div className='text-gray-900 text-3xl md:text-4xl font-bold'>
					Some of the people you'll be working with
				</div>
				<div className='text-gray-600 md:text-lg'>
					We're a 100% remote team spread all across the world. Join us!
				</div>
			</div>
			<div className='flex items-center justify-center flex-wrap gap-12 p-4'>
				{teamData.map((member, index) => (
					<div
						key={index}
						className='relative object-cover transition duration-200 hover:shadow-xl hover:scale-110 flex items-center justify-center flex-col gap-4 p-5 w-72 h-full bg-gray-100 border rounded-2xl pt-16 mt-12'
					>
						<div className='flex justify-center sm:pt-4 sm:pb-6 absolute -top-12 sm:-top-16 left-1/2 transform -translate-x-1/2'>
							<img
								src={member.image}
								className='w-24 h-24 rounded-full object-cover transition duration-200 hover:scale-110'
								alt={member.name}
							/>
						</div>
						<div className='text-center text-gray-900 text-lg font-bold'>
							{member.name}
							<div className='text-purple-600 font-medium'>
								{member.role}
							</div>
							<div className='text-gray-600 font-light pt-4'>{member.description}</div>
						</div>
						<div className='flex items-center justify-center gap-3 mt-2 w-auto h-5 text-gray-600 pt-7 pb-5'>
							<FaTwitter className='mx-2 text-2xl cursor-pointer transition duration-200 hover:text-gray-400' />
							<FaLinkedin className='mx-2 text-2xl cursor-pointer transition duration-200 hover:text-gray-400' />
							<FaDribbble className='mx-2 text-2xl cursor-pointer transition duration-200 hover:text-gray-400' />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default TeamSection;
