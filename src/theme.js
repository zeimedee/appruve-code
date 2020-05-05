import { createMuiTheme } from '@material-ui/core/styles';
import { blue, orange, green } from '@material-ui/core/colors';


const theme = createMuiTheme({
    palette:{
        primary: blue,
        secondary: green,
        inherit: '#ff9800',
    },
    staus:{
        danger: orange,
    }
})

export default theme;