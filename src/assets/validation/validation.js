import * as Yup from "yup"

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, "Name can not be less than two characters")
    .max(40, "Name can not be more than two characters").required("Name is required"),
    phone: Yup.string().matches(phoneRegExp, "Phone number is not valid").required("Phone number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    avatar: Yup.number().min(0, "Number can not be less than 0")
    .max(99, "Number can not be more than 99").required("Avatar is required"),
    gender: Yup.string().oneOf(["Men", "Women"], "Invalid gender").required("Gender is required"),
    category: Yup.string().required("Category is required"),
    favorite: Yup.boolean()
})