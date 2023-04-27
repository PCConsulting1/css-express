export const validateEmail = (email) => {
  return email.match(/\S+@\S+\.\S+/) === null
}

export const validatePhone = (phone) => {
  return (
    phone.match(
      /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
    ) === null
  )
}
