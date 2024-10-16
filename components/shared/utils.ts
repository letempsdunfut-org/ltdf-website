export const PRIMARY_COLOR = '#095d78'
export const ACCENT_COLOR = '#ffffff'

export const MAGIC_RATIO = ['95%', '95%', '90%', '85%', '85%', '80%'];

export const isNil = (value: any): value is null | undefined => value == null

export const nilOrInvalid = (aString: string | undefined) => {
    return isNil(aString) || aString.length <= 0
}