/* eslint-disable */
import axios from 'axios';
import data from "@/static/datas.json";

export const state = () => ({
    houses: [],
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
    }
}

export const mutations = {
    SET_HOUSES(state, houses) {
        state.houses = houses
    }
}
