import { makeStyles } from "@mui/styles"

export const useStyles = makeStyles(() => ({
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    mTop: {
        marginTop: '25px'
    },
    mBot: {
        marginBottom: '25px'
    },
    filter: {
        justifyContent: 'center',
        // flexDirection: 'column', Unsure why this does not work, therefore I had to apply an inline style
        alignItems: 'center'
    },
    displayCats: {
        padding: 0
    },
    answer: {
        justifyContent: 'space-around',
        marginTop: '25px'
    },
    search: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '25px',
    },
    mBot2: {
        marginBottom: '50px'
    },
    invisible: {
        visibility: 'hidden'
    }
}))