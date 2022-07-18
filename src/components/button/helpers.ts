import { ButtonVariant } from './types'
import { sButtonPrimary, sButtonDanger } from './styles'

export const getButtonVariant = (variant: ButtonVariant) => {
    switch (variant) {
        case 'primary':
            return sButtonPrimary
        case 'danger':
            return sButtonDanger
        default:
            return sButtonPrimary
    }
}
