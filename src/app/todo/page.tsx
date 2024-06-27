import KanbanBoard from "@/components/KanbabBoard/KanbabBoard";

const Todo = async ({ searchParams }: any) => {
	
	return (
		<>
			<div className='container mx-auto px-5'>
				<KanbanBoard />
			</div>
		</>
	);
};

export default Todo;
