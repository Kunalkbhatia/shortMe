import { Select, ThemeIcon } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react'

const SelectFolder = () => {
  return (
    <Select
      placeholder="Folders"
      c="black"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      variant='filled'
      radius="md"
      rightSection={
        <ThemeIcon variant='transparent' c="black">
            <IconChevronDown/>
        </ThemeIcon>
      }
      comboboxProps={{ dropdownPadding: 10 }}
      maxDropdownHeight={300}
      className="font-bold"
    />
  )
}

export default SelectFolder
