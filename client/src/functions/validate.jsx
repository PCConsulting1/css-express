export const validateName = (name) => {
  return name !== ''
}

export const validateEmail = (email) => {
  return email !== '' && email.match(/\S+@\S+\.\S+/)
}

export const validatePhone = (phone) => {
  return (
    phone !== '' &&
    phone.match(
      /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
    )
  )
}
