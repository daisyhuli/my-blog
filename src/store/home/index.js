let initialState = {
    isLogin:123, //是否已经登录 默认为false
}

export const setProduct = product => {
    return {
        type: types.SET_PRODUCT,
        payload:{
            ...product,
        }
    }
};
// const arr = [...this.props.islogin]
// const result = arr.push(11)
// setProduct({ isLogin: result})

export const types = {
    SET_PRODUCT: 'SET_PRODUCT',
}

export const homeReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case types.SET_PRODUCT:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
};

