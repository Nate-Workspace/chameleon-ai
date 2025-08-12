import {createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({
  primaryColor: 'green',
  fontFamily: 'Poppins, sans-serif',
});

export const MantineProviderWrapper = ({children}: {children: React.ReactNode})=>{
    return (
        <MantineProvider theme={theme}  defaultColorScheme="dark">
            {children} 
        </MantineProvider>
    )
}