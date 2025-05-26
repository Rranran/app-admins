import Vant from 'vant';
import components from "./components/index.js"
import 'vant/lib/index.css';
import './style.css'

const install = (app, options) => {
  app.use(Vant)
  Object.keys(components).forEach((key) => {
    app.component(key, components[key])
  })
}

const appAdmins = {
  install,
  ...components
}
export default appAdmins
