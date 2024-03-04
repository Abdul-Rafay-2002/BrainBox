'use client'

import { UserButton } from '@clerk/nextjs';
import MobileSidebar from './MobileSidebar';

const Navbar = () => {
	return (
		<div className='flex items-center p-4 py-4 fixed right-0 left-0 w-full '>
			<MobileSidebar />
			<div className='flex w-full justify-end'>
				<UserButton afterSignOutUrl='/' showName />
			</div>
		</div>
	);
};

export default Navbar;
