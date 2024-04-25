import { toast } from 'react-toastify'

export const notify = (m) => (toast(m, {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: false,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: "dark",
  className: 'font-black',
}))

export const errorNotify = (m) => (toast(m, {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: false,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: "dark",
  className: 'font-black',
  type: 'error'
}))