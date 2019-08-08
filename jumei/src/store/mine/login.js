import axios from "axios";
const state = {
    token:localStorage.token,
    adminName:localStorage.adminName,
    adminLog:[]
}
const mutations = {
    CHANGE_TOKEN(state,{token,adminName}){
        state.token = localStorage.token = token;
        state.adminName = localStorage.adminName = JSON.stringify(adminName)
    },
};
const actions ={
    login({commit},obj){
        axios.post("http://127.0.0.1/login",obj)
            .then((data)=>{
                console.log(data);
                if(data.data.ok === 1){
                    commit("CHANGE_TOKEN",{
                        token:data.data.token,
                        adminName:data.data.adminName
                    })
                }
            })
    }
};

export default {
    state,
    mutations,
    actions
}