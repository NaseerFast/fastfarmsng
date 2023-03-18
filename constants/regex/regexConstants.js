export const quantityRegex = /^([2-9]|[1-9]\d{1,2}|1000)$/;
export const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
export const emailRegex = /(\w\.?)+@[\w\.-]+\.\w{2,}/;
export const phoneNumberRegex = /\(?(\d{3})\)?[-\.\s]?(\d{3})[-\.\s]?(\d{4})/;