import axios from 'axios'
import { METHOD } from './constant'

export const apiGetAuth = (URL, params) =>
  axios({
    url: URL,
    method: METHOD.GET,
    params
  })

export const apiPostAuth = (URL, data) =>
  axios({
    url: URL,
    method: METHOD.POST,
    data
  })
