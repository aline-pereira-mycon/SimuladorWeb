
import '../styles/globals.css'
import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';


export const metadata = {
  title: 'Simulador Mycon',
  description: 'Simulador Mycon',
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body suppressHydrationWarning={true}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                bgcolor: 'background.default',
                mt: ['48px', '56px', '64px'],
                p: 3,
              }}
            >
              {children}
            </Box>
            
          </ThemeProvider>
        </AppRouterCacheProvider>
        
      </body>
    </html>
  );
}
