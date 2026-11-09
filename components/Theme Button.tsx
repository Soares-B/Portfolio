import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { DotFilledIcon } from "@radix-ui/react-icons";
import type { Theme } from "@/types/themes";

export default function Theme({
  themes,
  currentTheme,
  setCurrentTheme,
}: Theme & {
  setCurrentTheme: any;
}) {
  return (
    <DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<button className={`w-[150px] h-12 mt-2 ${themes[currentTheme].button} rounded-[5px] ${themes[currentTheme].background_text} font-monteserrat font-bold text-2xl outline-none ${themes[currentTheme].themeAnimation} hover:cursor-pointer`} aria-label="Customise options">
					Themes
				</button>
			</DropdownMenu.Trigger>

			<DropdownMenu.Portal>
				<DropdownMenu.Content className={`${themes[currentTheme].button} w-[150px] rounded-[5px] flex justify-center`} sideOffset={5}>
					<DropdownMenu.RadioGroup value={currentTheme} onValueChange={setCurrentTheme}>
						<DropdownMenu.RadioItem
							className={`${themes.Config.ThemeItem} ${themes[currentTheme].highlight_text}`}
							value="Calmness"
						>
							<DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
								<DotFilledIcon className="size-4"/>
							</DropdownMenu.ItemIndicator>
							Calmness
							<DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
								<DotFilledIcon className="size-4"/>
							</DropdownMenu.ItemIndicator>
						</DropdownMenu.RadioItem>

						<DropdownMenu.RadioItem
							className={`${themes.Config.ThemeItem} ${themes[currentTheme].highlight_text}`}
							value="Wisdom"
						>
							<DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
								<DotFilledIcon />
							</DropdownMenu.ItemIndicator>
							Wisdom
							<DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
								<DotFilledIcon className="size-4"/>
							</DropdownMenu.ItemIndicator>
						</DropdownMenu.RadioItem>

						<DropdownMenu.RadioItem
							className={`${themes.Config.ThemeItem} ${themes[currentTheme].highlight_text}`}
							value="Creativity"
						>
							<DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
								<DotFilledIcon className="size-4"/>
							</DropdownMenu.ItemIndicator>
							Creativity
							<DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
								<DotFilledIcon className="size-4"/>
							</DropdownMenu.ItemIndicator>
						</DropdownMenu.RadioItem>

						<DropdownMenu.RadioItem
							className={`${themes.Config.ThemeItem} ${themes[currentTheme].highlight_text}`}
							value="Purity"
						>
							<DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
								<DotFilledIcon className="size-4"/>
							</DropdownMenu.ItemIndicator>
							Purity
							<DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
								<DotFilledIcon className="size-4"/>
							</DropdownMenu.ItemIndicator>
						</DropdownMenu.RadioItem>

					</DropdownMenu.RadioGroup>

					<DropdownMenu.Arrow className="DropdownMenuArrow" />
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
  );
}
