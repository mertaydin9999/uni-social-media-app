import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const signupSchema = yup.object().shape({
  firstName: yup.string().required("Ad girmek zorunludur"),
  lastName: yup.string().required("Soyad girmek zorunludur"),
  email: yup
    .string()
    .email("Gecerli bir email giriniz")
    .required("Email girmek zorunludur"),
  password: yup
    .string()
    .min(8, "Sifreniz en az 8 karakter olmalidir")
    .matches(passwordRules, {
      message: "1 buyuk,1 kucuk harf,1 sayi giriniz",
    })
    .required("Sifre girmek zorunludur"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Sifreler eslesmiyor")
    .required("Tekrar sifre girmek zorunludur"),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Gecerli bir email giriniz")
    .required("Email girmek zorunludur"),
  password: yup.string(),
});

export const createAdvertSchema = yup.object().shape({
  title: yup
    .string()
    .required("Ilan basligi zorunludur.")
    .min(8, "Ilan basligi en az 8 karakterden olusmalidir."),
  description: yup.string(),
  images: yup.mixed(),
  address: yup.string(),
  price: yup
    .number("Yalnizca Sayi giriniz")
    .typeError("Fiyat bir sayı olmalıdır")
    .required("Fiyat gereklidir")
    .positive("Fiyat pozitif olmalıdır")
    .min(0, "Fiyat en az 0 olmalıdır"),

  date: yup.date(),
  category: yup.string().required("Kategori alanı zorunludur."),
});

export const updateAdvertSchema = yup.object().shape({
  title: yup
    .string()
    .required("Ilan basligi zorunludur.")
    .min(8, "Ilan basligi en az 8 karakterden olusmalidir."),
  description: yup.string(),
  images: yup.mixed(),
  address: yup.string(),
  price: yup
    .number("Yalnizca Sayi giriniz")
    .typeError("Fiyat bir sayı olmalıdır")
    .required("Fiyat gereklidir")
    .positive("Fiyat pozitif olmalıdır")
    .min(0, "Fiyat en az 0 olmalıdır"),

  date: yup.date(),
});
