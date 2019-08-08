import axios from "axios";
const state = {
    adminName:localStorage.adminName,
    adminLog:[],
};
const mutations = {
    CHANGE_TOKEN(state,adminName){
        state.adminName = localStorage.adminName = adminName
    },
};
const actions ={
    register({commit},obj){
        axios.post("http://127.0.0.1/register",obj)
            .then((data)=>{
                console.log(data.data.adminName)
                if(data.data.ok === 1) {
                    commit("CHANGE_TOKEN", {
                        adminName: data.data.adminName
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