const initialDrawerState = {
	
	title: "Keep",
	
};

export const DrawerReducer = (state = initialDrawerState, action) => {
	console.log(action)
	switch (action.type) {
		case 'notes':
			return {
				...state,
				title : "Keep"
			};
            case 'reminder':
			return {
				...state,
				title : "Reminder"
			};
            case 'archive':
			return {
				...state,
				title : "Archive"
			};
            case 'trash':
			return {
				...state,
				title : "Trash"
			};
            case 'edit':
			return {
				...state,
				title : "Edit labels"
			};
	default:
			return state;
	}
};