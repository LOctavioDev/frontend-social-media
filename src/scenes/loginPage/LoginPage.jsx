import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
export const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box
      width="100%"
      backgroundColor={theme.palette.background.alt}
      p="1rem 6%"
      textAlign="center"
    >
      <Box>
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          SOCIAL-UTXJ
        </Typography>
      </Box>
      <Box width={isNonMobileScreens ? "50%" : "93%"}></Box>
    </Box>
  );
};
