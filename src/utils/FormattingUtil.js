class FormattingUtil {
    static capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    static roundOff(number) {
        return Math.round((number  + Number.EPSILON) * 100) / 100
    }
}

export default FormattingUtil;