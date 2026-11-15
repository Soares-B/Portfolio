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
				<button className={`max-w-[200px] md:max-w-[300px] h-1/5 xl:h-[15%] mt-3 ${themes[currentTheme].button} rounded-[5px] ${themes[currentTheme].highlight_text} font-monteserrat font-bold text-2xl outline-none ${themes[currentTheme].themeAnimation} hover:cursor-pointer`} aria-label="Customise options">
					Themes
				</button>
			</DropdownMenu.Trigger>

			<DropdownMenu.Portal>
				<DropdownMenu.Content className={`${themes[currentTheme].button} w-[200px] md:w-[300px] rounded-[5px] flex justify-center`} sideOffset={5}>
					<DropdownMenu.RadioGroup value={currentTheme} onValueChange={setCurrentTheme}>
						<DropdownMenu.RadioItem
							className={`${themes.Config.ThemeItem} ${themes[currentTheme].highlight_text}`}
							value="Milk"
						>
							<DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
								<DotFilledIcon className="size-4"/>
							</DropdownMenu.ItemIndicator>
							Milk
							<DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
								<DotFilledIcon className="size-4"/>
							</DropdownMenu.ItemIndicator>
						</DropdownMenu.RadioItem>

						<DropdownMenu.RadioItem
							className={`${themes.Config.ThemeItem} ${themes[currentTheme].highlight_text}`}
							value="Dreams"
						>
							<DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
								<DotFilledIcon />
							</DropdownMenu.ItemIndicator>
							Dreams
							<DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
								<DotFilledIcon className="size-4"/>
							</DropdownMenu.ItemIndicator>
						</DropdownMenu.RadioItem>

						<DropdownMenu.RadioItem
							className={`${themes.Config.ThemeItem} ${themes[currentTheme].highlight_text}`}
							value="Vampire"
						>
							<DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
								<DotFilledIcon className="size-4"/>
							</DropdownMenu.ItemIndicator>
							Vampire
							<DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
								<DotFilledIcon className="size-4"/>
							</DropdownMenu.ItemIndicator>
						</DropdownMenu.RadioItem>

						<DropdownMenu.RadioItem
							className={`${themes.Config.ThemeItem} ${themes[currentTheme].highlight_text}`}
							value="Genius"
						>
							<DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
								<DotFilledIcon className="size-4"/>
							</DropdownMenu.ItemIndicator>
							Genius
							<DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
								<DotFilledIcon className="size-4"/>
							</DropdownMenu.ItemIndicator>
						</DropdownMenu.RadioItem>

						<DropdownMenu.RadioItem
							className={`${themes.Config.ThemeItem} ${themes[currentTheme].highlight_text}`}
							value="Trial"
						>
							<DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
								<DotFilledIcon className="size-4"/>
							</DropdownMenu.ItemIndicator>
							Trial
							<DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
								<DotFilledIcon className="size-4"/>
							</DropdownMenu.ItemIndicator>
						</DropdownMenu.RadioItem>

						<DropdownMenu.RadioItem
							className={`${themes.Config.ThemeItem} ${themes[currentTheme].highlight_text}`}
							value="Silent"
						>
							<DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
								<DotFilledIcon className="size-4"/>
							</DropdownMenu.ItemIndicator>
							Silent
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
