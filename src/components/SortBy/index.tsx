import { Select, ThemeIcon } from '@mantine/core'
import { IconSortDeacendingSmallBig } from '@tabler/icons-react'


const SortBy = () => {
  return (
    <Select
      placeholder="Sort by"
      c="black"
      data={['Date created', 'Number of clicks']}
      variant='filled'
      radius="md"
      rightSection={
        <ThemeIcon variant='transparent' c="black">
            <IconSortDeacendingSmallBig/>
        </ThemeIcon>
      }
      comboboxProps={{ dropdownPadding: 10 }}
      maxDropdownHeight={300}
      className="font-bold"
    />
  )
}

export default SortBy
