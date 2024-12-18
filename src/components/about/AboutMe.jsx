import { Box, Paper, Stack, Typography } from "@mui/material";
import { ABOUTME } from "../../configs";
import { COLORS } from "../../configs";

const AboutMe = ({ id }) => {
  return (
    <Paper
      id={id}
      sx={{
        scrollMarginTop: { xs: "400px", md: "100px" },
      }}
    >
      <Box
        sx={{ backgroundColor: COLORS.CARD_SHADE }}
        padding={{ xs: "50px 10px", sm: "100px 20px" }}
      >
        <Box
          sx={{ width: { xs: "95%", sm: "90%", lg: "70%" } }}
          margin="0 auto"
        >
          <Stack
            color={COLORS.TEXT}
            textAlign={"center"}
            sx={{
              fontFamily: "Inter, BlinkMacSystemFont, Segoe UI",
            }}
          >
            <Box paddingBottom={"30px"}>
              <Typography
                fontSize="1.5rem"
                fontWeight={"bold"}
                lineHeight={1.5}
              >
                About Me
              </Typography>
            </Box>
            <Box>
              <Typography
                fontSize={{ xs: "0.8rem", sm: "1rem" }}
                fontWeight={"500"}
                lineHeight={{ xs: 1.5, sm: 2 }}
              >
                {ABOUTME}
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Paper>
  );
};

export default AboutMe;
