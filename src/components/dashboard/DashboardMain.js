import { Stack } from "@mui/material";
import { useState } from "react";
import { WhiteLogo, WhiteLogoSymbol } from "../common/Logo";
import { createContext } from "react";
import { MenuItems } from "./DashboardLayout";
import DashboardLayout from "../common/dashboardLayout/PanelLayout";

export const MinWidthContext = createContext(false);

export const RequestPanelItemContext = createContext()

export default function DashboardMain() {
    const [showMinWidth, setShowMinWidth] = useState(false);
    const [requestedPanel,setRequestedPanel] = useState(null)
    const badge = <Stack alignItems='center' sx={{pt:0, pb:3}}>
        {showMinWidth?<WhiteLogoSymbol width = {30}/>:<WhiteLogo width={110}/>}
    </Stack>;
    const dashboardItems = MenuItems.map(mi => mi(() => setShowMinWidth(!showMinWidth)))
    return (
        <RequestPanelItemContext.Provider value={{requestedPanel, setRequestedPanel}}>
            <MinWidthContext.Provider value={showMinWidth}>
                <Stack>
                    <DashboardLayout 
                        badge={badge} 
                        showMinWidth = {showMinWidth}
                        onHideSidePanel={() => setShowMinWidth(!showMinWidth)}
                        dashboardItems={dashboardItems}
                    />
                </Stack>
            </MinWidthContext.Provider> 
        </RequestPanelItemContext.Provider>
    )
}