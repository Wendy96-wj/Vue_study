import axios from 'axios'

export function request(config) {
     // 1.创建axios实例
    const instance = axios.create({
        baseURL: 'https://szapi.bendibao.com/bdfwjk/v2',
        timeout: 5000
    })

    // 2.axios 的拦截器

    // 2.1 请求拦截的作用
    instance.interceptors.request.use(config =>{
        // console.log(config);
        
        // (1) 比如config中的一些信息不符合服务器的要求
        // (2) 比如每次发送网络请求时，都希望在界面中显示一个请求的图标
        // (3) 某些网络请求(比如登录(token)),必须携带一些特殊的信息
        return config;
    },err =>{
        // console.log(err);
        
    });

    // 2.2 响应拦截
    instance.interceptors.response.use(res=>{
        console.log(res.data);
        return res.data
    },err=>{
        console.log(err);
    })


    instance.interceptors.request


    //  发送真正的网络请求
    return instance(config)
}


// export function request(config) {
//     return new Promise((resolve, rejects) => {
//         const instance = axios.create({
//             baseURL: 'https://szapi.bendibao.com/bdfwjk/v2',
//             timeout:5000
//         })

//         //  发送真正的网络请求
//         instance(config).then(res => {
//             console.log(res);
//             resolve(res)
//         }).catch(err => {
//             console.log(err);
//             rejects(err)
//         })
//     })

// }


// export function request(config, success, failure) {
//     // 1.创建axios实例
//     const instance = axios.create({
//         baseURL:'https://szapi.bendibao.com/bdfwjk/v2',
//     })

//     //  发送真正的网络请求
//     instance(config).then(res=>{
//         console.log(res);
//         success(res)
//     }).catch(err=>{
//         console.log(err);
//         failure(err)

//     })
// }

// export function request(config) {
//     // 1.创建axios实例
//     const instance = axios.create({
//         baseURL:'https://szapi.bendibao.com/bdfwjk/v2',
//     })

//     //  发送真正的网络请求
//     instance(config.baseConfig).then(res=>{
//         console.log(res);
//         config.success(res)
//     }).catch(err=>{
//         console.log(err);
//         config.failure(err)

//     })
// }

