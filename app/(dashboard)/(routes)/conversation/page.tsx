'use client';

import * as z from 'zod';
import { Heading } from '@/components/Heading';
import { MessageSquareText } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { formSchema } from './constant';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const Conversation = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			prompt: '',
		},
	});

	const isLoading = form.formState.isSubmitting;
	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		console.log('submit', values);
	};

	return (
		<div className='bg-[#081229] flex flex-col justify-center h-full py-10'>
			<Heading
				title='Conversation'
				description='Transform Conversations with BrainBox AI: Elevate your online dialogue using our advanced chat model. '
				icon={MessageSquareText}
				iconColor='text-yellow-400'
				bgColor='bg-yellow-600/20'
			/>
			<div className='px-4 lg:px-8'>
				<div>
					<Form {...form}>
						<form
							action=''
							method='post'
							onSubmit={form.handleSubmit(onSubmit)}
							className='rounded-md border-muted-foreground border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2'>
							<FormField
								name='prompt'
								render={({ field }) => (
									<FormItem className='col-span-12 lg:col-span-10'>
										<FormControl className='m-0 p-0'>
											<Input
												className='border-0 !outline-0 !focus-visible:ring-0 px-4 py-6 placeholder:text-slate-200/40 rounded-md text-slate-300 focus-visible:ring-transparent bg-muted-foreground/20'
												disabled={isLoading}
												placeholder='How do i calculate a radius of circle'
												{...field}
											/>
										</FormControl>
									</FormItem>
								)}
							/>
						</form>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default Conversation;
