import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { DotFilledIcon } from "@radix-ui/react-icons";
import type { Theme } from "@/types/themes";

import { Button } from "./ui/button";

const itemHover = {
		Milk: 'hover:bg-[#0D0E13] hover:text-[#F2E9E4]'
}

export function Theme({
  themes,
  currentTheme,
  setCurrentTheme,
  windowWidth,
}: Theme & {
  setCurrentTheme: any;
  windowWidth: number;
}) {
  return (
    <DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<Button className={`mt-3 w-full h-1/6 sm:h-1/5 sm:w-3/5 lg:w-2/5 xl:w-1/4 ${themes[currentTheme].button} rounded-[5px] ${themes[currentTheme].highlight_text} font-monteserrat font-bold text-2xl lg:text-xl outline-none ${themes[currentTheme].themeAnimation} hover:cursor-pointer outline-none`}>
					Themes
				</Button>
			</DropdownMenu.Trigger>

			<DropdownMenu.Portal>
				<DropdownMenu.Content className={`rounded-[5px] flex justify-center`} sideOffset={5}>
					<DropdownMenu.RadioGroup value={currentTheme} onValueChange={setCurrentTheme}>
						<DropdownMenu.RadioItem
							className={`${themes.Config.ThemeItem} ${themes[currentTheme].highlight_text} ${themes[currentTheme].items} ${themes[currentTheme].items_hover} flex justify-center w-[366px] sm:w-[370px] md:w-[446px] lg:w-[400px] xl:w-[314px] 2xl:w-[474] rounded-[5px_5px_0px_0px]`}
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
							className={`${themes.Config.ThemeItem} ${themes[currentTheme].highlight_text} ${themes[currentTheme].items} ${themes[currentTheme].items_hover}`}
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
							className={`${themes.Config.ThemeItem} ${themes[currentTheme].highlight_text} ${themes[currentTheme].items} ${themes[currentTheme].items_hover}`}
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
							className={`${themes.Config.ThemeItem} ${themes[currentTheme].highlight_text} ${themes[currentTheme].items} ${themes[currentTheme].items_hover}`}
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
							className={`${themes.Config.ThemeItem} ${themes[currentTheme].highlight_text} ${themes[currentTheme].items} ${themes[currentTheme].items_hover}`}
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
							className={`${themes.Config.ThemeItem} ${themes[currentTheme].highlight_text} ${themes[currentTheme].items} ${themes[currentTheme].items_hover} rounded-[0px_0px_5px_5px]`}
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