import { BaseSetter } from "@/page/App/components/PanelSetters/interface"
import { PanelFieldConfig } from "@/page/App/components/InspectPanel/interface"

export interface OptionItemShape {
  id: string
  value?: string
  label?: string
  disabled?: string
}

export interface HeaderProps {
  labelName: string
  handleAddOption: () => void
}

export interface ListItemProps extends Omit<OptionItemShape, "disabled"> {
  index: number
}

export interface DragIconAndLabelProps {
  index: number
}

export interface MoreProps {
  index: number
}

export interface ModalProps {
  title: string
  index: number
  handleCloseModal: () => void
}

export interface OptionListSetterProps extends BaseSetter {
  value: OptionItemShape[]
  childrenSetter?: PanelFieldConfig[]
}

export interface DragItem {
  index: number
  id: string
  type: string
}

export interface ActionMenuProps {
  index: number
  handleCloseMode: () => void
}

export enum ActionType {
  DUPLICATE = "DUPLICATE",
  DELETE = "DELETE",
}
