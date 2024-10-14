import { ICON_SETS, IconSet } from '@/constants/icons'
import { IconType, IconBaseProps } from 'react-icons'

type SetKey = keyof IconSet
type IconNames<T extends SetKey> = keyof IconSet[T]

interface IProps<T extends SetKey> extends Omit<IconBaseProps, 'name'> {
  set: T
  name: IconNames<T>
  size?: number
}

export default function Icon<T extends SetKey> ({ set, name, size=16, ...props }: IProps<T>) {
  const IconSet = ICON_SETS[set]
  const IconComponent = IconSet[name] as IconType | undefined
  if (!IconComponent) { return null }
  return <IconComponent size={size} {...props} />
}
