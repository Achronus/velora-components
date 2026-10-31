import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "../ui/dialog";

type Props = {
	title: string;
	description: string;
	open: boolean;
	setOpen: (open: boolean) => void;
	children: React.ReactNode;
};

const SearchDialog = ({
	title,
	description,
	open,
	setOpen,
	children,
}: Props) => {
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent
				showCloseButton={false}
				className="top-16 w-[min(1040px,calc(100%-2rem))] max-w-none! translate-y-0 gap-0 overflow-hidden p-0 sm:max-w-none!"
			>
				<DialogHeader className="sr-only">
					<DialogTitle>{title}</DialogTitle>
					<DialogDescription>{description}</DialogDescription>
				</DialogHeader>
				{children}
			</DialogContent>
		</Dialog>
	);
};

export default SearchDialog;
