export const getEmailPattern = () => {
  const emailAddressRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return {
    value: emailAddressRegex,
    message: 'Ingrese un email válido',
  }
}

export const getPasswordPattern = () => {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/

  return {
    value: passwordRegex,
    message:
      'El password debe contener entre 8 y 20 caracteres, al menos una letra mayúscula, una letra minúscula y un dígito.',
  }
}

export const getRfcPattern = () => {
  const rfcRegex = /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/

  return {
    value: rfcRegex,
    message: 'Ingresa un RFC válido',
  }
}

export const getPhonePattern = () => {
  const phoneRegex = /^\d{10}$/

  return {
    value: phoneRegex,
    message: 'Ingresa un número válido a 10 dígitos',
  }
}

export const getRepeatPasswordValidation = (valueToCompare) => {
  const errorMessage = 'Las contraseñas no coinciden'

  return (value) => value === valueToCompare || errorMessage
}

export const getDateformat = () => {
  const regEx = /^\d{4}\/\d{2}\/\d{2}$/

  return {
    value: regEx,
    message: 'Ingresa una fecha válida yyyy/mm/dd',
  }
}

export const getCodePattern = () => {
  const regEx = /^\S{1,}$/

  return {
    value: regEx,
    message: 'El código no debe contener espacios ej. MI-CODIGO-PARTNER',
  }
}

export const getSkuProduct = () => {
  const skuRegex = /^(?!.*[-_]{2,})(?![_-])(?!.*[_-]$)[a-zA-Z0-9][-_a-zA-Z0-9]{6,14}[a-zA-Z0-9]$/

  return {
    value: skuRegex,
    message: 'El sku debe tener el siguiente formato ej. BAMBA-SEGURO',
  }
}

export const getCurpPattern = () => {
  const curpRegex = /^[A-Z]{4}\d{6}[H,M][A-Z]{5}[A-Z0-9]{2}$/

  return {
    value: curpRegex,
    message: 'Ingresa un CURP válido',
  }
}

export const validationFileUploadUsers = (users) => {
  let userValidated = []

  users.forEach((user) => {
    let errorMessages = []

    if (!user.phone && !user.email) {
      errorMessages = [...errorMessages, 'Debe contener email o celular']
    }

    if (user.sku) {
      if (!user.birthdate || !user.rfc || !user.action) {
        errorMessages = [
          ...errorMessages,
          'Debe contener RFC, Fecha de nacimiento, Tipo de movimiento',
        ]
      }
    }

    if (errorMessages.length > 0) {
      userValidated = [
        ...userValidated,
        {
          ...user,
          error: errorMessages.join(', '),
        },
      ]
    }
  })

  return userValidated
}

export const defaultResetInput = {
  keepErrors: true,
  keepDirty: true,
  keepIsSubmitted: false,
  keepTouched: false,
  keepIsValid: false,
  keepSubmitCount: false,
}
