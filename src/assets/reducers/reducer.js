export const initialState = {
	isLoading: true,
	isSignout: false,
	userToken: null,
};

const appReducer = (prevState, action) => {
	switch (action.type) {
		case 'RESTORE_TOKEN':
			return {
				...prevState,
				userToken: action.token,
				isLoading: false,
			};
		case 'SIGN_IN':
			return {
				...prevState,
				isSignout: false,
				userToken: action.token,
			};
		case 'SIGN_OUT':
			console.log(prevState, action);
			return {
				...prevState,
				isSignout: true,
				userToken: null,
			};
	}
};

export default appReducer;