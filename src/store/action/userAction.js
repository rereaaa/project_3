export const USER_ADMIN = "USER_ADMIN";

export const userAdmin = (user)=>{
    return {
        type : USER_ADMIN,
        payload: user,
    };
};
