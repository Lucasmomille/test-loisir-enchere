/* eslint-disable */
import axios from 'axios';
import data from "@/static/datas.json";

export const state = () => ({
    houses: [],
    /* cart: [], */
})

export const getters = {
    allHouses: (state) => state.houses,
    getHouseById: (state) => (id) => {
        return state.houses.find(house => house.id == id)
    },
    getThirdHouse: (state) => state.houses.slice(3)
    ,

}

export const actions = {
    getHouses({ commit }) {
        let datas = data.results;
        commit('SET_HOUSES', datas)
    },
    /* if API do this */
    /* 
    async getHouses({ commit }) {
        await axios.get(
            'URL'
        ).then(response => {
            let data = response.data.results;
            commit('SET_HOUSES', data)
        })
            .catch((error) => {
                console.log(error)
            })
    }
    */

    addProducts({ commit }, { product, quantity }) {
        commit('ADD_TO_CART', { product, quantity })

    }
}

export const mutations = {
    SET_HOUSES(state, houses) {
        state.houses = houses
    },
    /* For v2
    ADD_TO_CART(state, { product, quantity }) {
        state.cart.push(
            {
                product,
                quantity
            }
        )
    } */
}
