import axios from 'axios'

export const getInfo = () => {
    return axios.get('https://api.spacexdata.com/v3/info')
}

export const uzetiSveBrodove = () => {
    return axios.get('https://api.spacexdata.com/v3/ships')
}
