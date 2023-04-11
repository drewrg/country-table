import { Country } from 'components/Table/types'

export interface ModalProps {
  data: Country | undefined
  modalState: [boolean, (state: boolean) => void]
}
