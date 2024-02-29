'use client';

import { Poppins } from 'next/font/google';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import {
	BrainCircuit,
	Code2,
	ImageIcon,
	LayoutDashboard,
	MessageSquareText,
	Music,
	Settings,
	VideoIcon,
} from 'lucide-react';
import { usePathname } from 'next/navigation';

const poppins = Poppins({ weight: '900', subsets: ['latin'] });
const routes = [
	{
		label: 'Dashboard',
		icon: LayoutDashboard,
		href: '/dashboard',
		color: 'text-sky-500',
	},
	{
		label: 'Conversation',
		icon: MessageSquareText,
		href: '/conversation',
		color: 'text-yellow-400',
	},
	{
		label: 'Image Generation',
		icon: ImageIcon,
		href: '/image',
		color: 'text-pink-600',
	},
	{
		label: 'Video Generation',
		icon: VideoIcon,
		href: '/video',
		color: 'text-purple-600',
	},
	{
		label: 'Music Generation',
		icon: Music,
		href: '/music',
		color: 'text-orange-600',
	},
	{
		label: 'Code Generation',
		icon: Code2,
		href: '/code',
		color: 'text-green-600',
	},
	{
		label: 'Settings',
		icon: Settings,
		href: '/settings',
		color: 'text-slate-400',
	},
];

const Sidebar = () => {
	const pathName = usePathname();
	return (
		<div className='space-y-4 py-4 flex flex-col h-full text-white bg-[#020817] border-r-2 border-blue-600'>
			<div className='px-3 py-2 flex-1'>
				<Link href='/dashboard' className='flex items-center  pl-3 mb-28'>
					<div className='flex items-center gap-2'>
						<BrainCircuit size={28} />
						<h1
							className={cn(
								'text-3xl font-bold uppercase tracking-widest',
								poppins.className
							)}>
							<span className='text-blue-600'>Brain </span>Box
						</h1>
					</div>
				</Link>
				<div className='space-y-1 '>
					{routes.map((route) => (
						<Link
							href={route.href}
							key={route.href}
							className={cn(
								'px-3 py-4 hover:bg-blue-950/60 rounded border-l-2 border-[#020817] hover:border-blue-700 text-md flex group w-full cursor-pointer transition-colors mb-2 ',
								pathName === route.href
									? 'bg-blue-950/60 font-semibold border-blue-700'
									: 'text-zinc-400'
							)}>
							<div className='flex items-center flex-1'>
								<route.icon className={cn('h-6 w-6 mr-2', route.color)} />
								{route.label}
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
