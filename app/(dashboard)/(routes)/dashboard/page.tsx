'use client';

import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import {
	ArrowRight,
	Code,
	ImageIcon,
	MessageSquare,
	Music,
	VideoIcon,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
	const router = useRouter();
	const tools = [
		{
			label: 'Conversation',
			icon: MessageSquare,
			color: 'text-yellow-400',
			bgColor: 'bg-yellow-600/50',
			href: '/conversation',
		},
		{
			label: 'Image Generation',
			icon: ImageIcon,
			href: '/image',
			color: 'text-pink-700',
			bgColor: 'bg-pink-900/50'
		},
		{
			label: 'Video Generation',
			icon: VideoIcon,
			href: '/video',
			color: 'text-purple-700',
			bgColor: 'bg-purple-950/50'
		},
		{
			label: 'Music Generation',
			icon: Music,
			href: '/music',
			color: 'text-orange-600',
			bgColor: 'bg-orange-800/20',
		},
		{
			label: 'Code Generation',
			icon: Code,
			href: '/code',
			color: 'text-green-600',
			bgColor: 'bg-green-800/50'
		},
	];
	return (
		<div className='bg-[#081229] flex flex-col justify-center h-full py-10'>
			<div className=' py-8'>
				<h2 className='text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-bold text-center text-white/90 uppercase font-poppins'>
					Explore the Power of AI
				</h2>
				<p className='text-center text-blue-400 text-sm md:text-md px-4 lg:text-lg'>
					Chat with the smartest AI tool - Experience the power of AI
				</p>
			</div>
			<div className='px-4 md:px-14 lg:px-32  space-y-4'>
				{tools.map((tool) => (
					<Card
						onClick={() => {
							router.push(tool.href);
						}}
						key={tool.href}
						className='p-4 group bg-[#020817] border-white/5 flex items-center justify-between hover:shadow-md hover:shadow-blue-950 transition-colors cursor-pointer'>
						<div className='flex items-center  gap-x-4 flex-1'>
							<div className={cn('p-2 w-fit rounded-lg', tool.bgColor)}>
								<tool.icon className={cn('w-8 h-8', tool.color)} />
							</div>
							<div className='font-semibold text-white/90'>{tool.label}</div>
						</div>
						<ArrowRight size={30} color='#ccc' className='group-hover:translate-x-2 transition-transform' />
					</Card>
				))}
			</div>
		</div>
	);
};

export default Dashboard;
