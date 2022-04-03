import baseApi from "./baseApi";
const adminApi = (callback) => {
    baseApi.get('/Admin').then(res => {
        const data = res.data;
        const isOk = true;
        callback(isOk ,data);
    }).catch(err => {
        const error = err.data;
        const isOk = false;
        callback(isOk , error);
    })
}
export default adminApi;