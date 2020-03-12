const SET_FORMDATA = (state, obj) => {
    state.formData = obj
}

const SET_ERRORS = (state, obj) => {
    state.errors = obj
}

const SET_LIST = (state, obj) => {
    state.list = obj
}

export default{
    SET_FORMDATA,
    SET_ERRORS,
    SET_LIST
}