'use client';

import { Menu } from 'lucide-react';

import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import Sidebar from './Sidebar';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';

const MobileSidebar = () => {
	const [isMounted, setIsMounted] = useState(false);
	useEffect(() => {
	  setIsMounted(true);
	}, [])
	if(!isMounted) return null;

	return (
		<div>
			<Sheet>
				<SheetTrigger>
					<Button variant='default' size='icon' className='md:hidden'>
						<Menu size={26} color='#ffffff' />
					</Button>
				</SheetTrigger>
				<SheetContent side={'left'} className='p-0'>
					<Sidebar />
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default MobileSidebar;
