import { loadState } from '../../utils/utilsLocalStorage'

class HttpService {
  get = (path) => {
    const requestOptions = {
      method: 'GET',
      headers: this.getHeaders(),
    }

    return fetch(`${import.meta.env.REACT_APP_API_URL}${path}`, requestOptions)
      .then((response) => this.handleResponse(response))
      .then((response) => response)
  }

  post = (path, data, isForm = false) => {
    const requestOptions = {
      method: 'POST',
      headers: this.getHeaders(isForm),
      body: isForm ? data : JSON.stringify(data),
    }

    return fetch(`${import.meta.env.REACT_APP_API_URL}${path}`, requestOptions)
      .then((response) => this.handleResponse(response))
      .then((response) => response)
  }

  patch = (path, data) => {
    const requestOptions = {
      method: 'PATCH',
      headers: this.getHeaders(),
      body: JSON.stringify(data),
    }

    return fetch(`${import.meta.env.REACT_APP_API_URL}${path}`, requestOptions)
      .then((response) => this.handleResponse(response))
      .then((response) => response)
  }

  put = (path, data) => {
    const requestOptions = {
      method: 'PUT',
      headers: this.getHeaders(),
      body: JSON.stringify(data),
    }

    return fetch(`${import.meta.env.REACT_APP_API_URL}${path}`, requestOptions)
      .then((response) => this.handleResponse(response))
      .then((response) => response)
  }

  delete = (path, data) => {
    const requestOptions = {
      method: 'DELETE',
      headers: this.getHeaders(),
      body: JSON.stringify(data),
    }

    return fetch(`${import.meta.env.REACT_APP_API_URL}${path}`, requestOptions)
      .then((response) => this.handleResponse(response))
      .then((response) => response)
  }

  getLogInfo = (path, token) => {
    const requestOptions = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }

    return fetch(`${import.meta.env.REACT_APP_API_URL}${path}`, requestOptions)
      .then((response) => this.handleResponse(response))
      .then((response) => response)
  }

  handleResponse = (response) => response.text().then((text) => {
    const data = text && JSON.parse(text)
    if (!response.ok) {
      const errorResponse = {
        ...data,
        status: response.status,
      }
      return Promise.reject(errorResponse)
    }

    return data
  })

  getHeaders(isForm = false) {
    const accessToken = loadState()
    const { user } = JSON.parse(accessToken?.auth)

    if (user?.token) {
      return {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${user?.token}`,
        ...(!isForm && { 'Content-Type': 'application/json' }),
      }
    }
    return {
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  }
}

const httpService = new HttpService()

export default httpService
