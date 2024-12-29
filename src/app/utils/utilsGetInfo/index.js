import { subYears } from 'date-fns'
import { errorsConstants } from '../../constants/errorsConstants'

export const getPartnerUrl = (url) => {
  const partner = url.split('.')

  if (partner.length) {
    return partner[0]
  }

  return null
}


export const handleErrorMessage = (errors) => {
  if (!errors) return null

  const errorMessage = Object.values(errors).map(
    (error) => errorsConstants[error] || error,
  )

  return errorMessage.join(' ')
}

export const getTypePartner = (type) => {
  const typePartner = {
    AGGREGATOR: 'Agregador',
    DISTRIBUTOR: 'Distribuidor',
    SPONSOR: 'Sponsor',
  }

  return typePartner[type]
}

export const formatCodePartner = (inputValue) => {
  const normalizedValue = inputValue
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
  const trimmedValue = normalizedValue.trim()
  const code = trimmedValue.replace(/[^\w\s-]|_/g, '')

  return code.replace(/\s+/g, '-')
}

export const formatDate = (date, dateFormatType = 'en-GB') => {
  const newDate = new Date(date)

  return new Intl.DateTimeFormat(dateFormatType).format(newDate)
}

export const validationLegalAge = (date) => subYears(date, 18)

export const getTextErrorUploadFile = (error) => errorsConstants[error] || error

export const getTextActionUploadFile = (action) => {
  const actionText = {
    CANCELED: 'Baja',
    REGISTRATION: 'Alta',
  }

  return actionText[action] || action
}

export const formatSentCampaign = (status) => (status ? 'Enviada' : 'Pendiente')

export const formatCaretInfo = (last, percent) => (Math.sign(percent) !== -1
  ? `Subió ${Number(percent).toFixed(2)}% (${last})`
  : `Bajó ${Number(percent).toFixed(2)}% (${last})`)

export const isPositivePercentage = (percent) => Math.sign(percent) !== -1

export const getKey = (model) => {
  const keyMap = {
    user: '',
    products: 'subscriptions.products.',
  }

  return keyMap[model] ?? `${model}.`
}

export const createFilterCampaignsPayload = (properties) => {
  const entry = 0
  const filters = {}

  properties.forEach((property) => {
    const key = Object.keys(property)[entry]
    const { model, operator, values: value } = property[key]
    const filterKey = `${getKey(model)}${key}`
    const filterObject = { [operator]: value }

    filters[filterKey] = Object.assign(filters[filterKey] || {}, filterObject)
  })

  return filters
}
