
const initialAuth = {
    user: []
}

const authReducer = (state = initialAuth, {type, payload}) => {
    switch (type) {
        case 'a': {
            return {
                user: payload.user
            }
        }
        default : {
            return {

            }
        }
    }
}

export default authReducer;