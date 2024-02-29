import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='h-full relative'>
			<div className='hidden h-full md:w-96 md:flex md:flex-col md:fixed md:inset-y-0 z-[80] '>
				<Sidebar />
			</div>
			<main className='md:pl-96 h-full'>
				<Navbar />
				{children}
			</main>
		</div>
	);
};

export default DashboardLayout;
