import {
  Avatar,
  Box,
  Button,
  Container,
  Stack,
  Typography,
  Link,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import HomeIcon from "@mui/icons-material/Home";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import jayant from "../../assets/jayant3.jpg";
import { COLORS, LINKS } from "../../configs";
// import bg from "./../../assets/bg.jpg";

const Home = ({ id }) => {
  return (
    <Box
      sx={{
        scrollMarginTop: "350px",
        // backgroundImage: `url(${bg})`,
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
      }}
      id={id}
      padding={{ xs: "50px 0px 50px 0px", sm: "60px 0px 100px 0px" }}
    >
      <Container
        sx={{
          width: { xs: "95%", sm: "90%", lg: "70%" },
          margin: "0 auto",
        }}
      >
        <Grid
          container
          spacing={3}
          padding={{ xs: "10px 0px", sm: "20px 0px" }}
        >
          <Grid
            size={{ xs: 12, md: 6 }}
            margin={"0 auto"}
            order={{ xs: 1, md: 2 }}
          >
            <Box
              sx={{
                display: "grid",
                placeItems: "center",
                maxWidth: "100%", // Ensures the Box doesn't overflow
                overflow: "hidden", // Prevents any overflow
              }}
            >
              <img
                src={jayant}
                alt="Profile"
                style={{
                  maxWidth: "350px",
                  maxHeight: "350px",
                  width: "100%",
                  height: "auto", // Maintains aspect ratio
                  borderRadius: "50%",
                }}
              />
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            margin={"0 auto"}
            order={{ xs: 2, md: 1 }}
          >
            <Box
              sx={{
                padding: "20px 0px",
                display: "grid",
                placeItems: "center",
                maxWidth: "450px",
                width: "100%",
              }}
              color={COLORS.TEXT}
              margin={"0 auto"}
            >
              <Stack spacing={1}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                    fontFamily: "Moul, serif;",
                    fontStyle: "normal",
                  }}
                >
                  Java & Backend Engineer
                </Typography>
                <Typography color={COLORS.TEXT_SHADE}>
                  Hello, I'm{" "}
                  <span
                    style={{
                      color: COLORS.PUPLE_HIGHLIGHT,
                      fontWeight: "bold",
                    }}
                  >
                    Jayant Kumar Sadhu
                  </span>
                  . A passionate Java Backend Engineer, Android Developer and
                  blog writer based in India📍. I feel most satisfaction when
                  challeged and thrive on it, keeping the learning curve
                  exponent.
                </Typography>
                <Box>
                  <Stack direction={"row"} spacing={1}>
                    <HomeIcon />
                    <Typography>Bangalore, India</Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={1}>
                    <WorkIcon />
                    <Typography>Software Engineer in Samsung</Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={1}>
                    <SchoolIcon />
                    <Typography>Jadavpur University, 2022</Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={1}>
                    <CodeIcon />
                    <Link
                      href="https://leetcode.com/u/jayantsadhu/"
                      target="_blank"
                      underline="none"
                    >
                      LeetCode (1726)
                    </Link>
                  </Stack>
                </Box>
                <Box>
                  <Stack
                    spacing={2}
                    direction={"row"}
                    justifyContent={"center"}
                    sx={{ margin: "10px auto" }}
                  >
                    <a href={LINKS.LINKEDIN} target="_blank" rel="noreferrer">
                      <Avatar>
                        <LinkedInIcon
                          fontSize="large"
                          sx={{ color: "black" }}
                        />
                      </Avatar>
                    </a>
                    <a href={LINKS.GITHUB} target="_blank" rel="noreferrer">
                      <Avatar>
                        <GitHubIcon fontSize="large" sx={{ color: "black" }} />
                      </Avatar>
                    </a>
                  </Stack>
                </Box>
                <Stack spacing={1} direction={{ xs: "column", lg: "row" }}>
                  <Button
                    variant="contained"
                    href="#contact me"
                    sx={{
                      margin: "8px 0px",
                      width: "100%",
                      padding: { xs: "0.3rem 0.5rem", md: "0.4rem 0.5rem" },
                    }}
                  >
                    CONTACT ME HERE{" "}
                    <KeyboardDoubleArrowDownIcon
                      sx={{ marginLeft: "8px", marginRight: "" }}
                    />
                  </Button>
                  <Button
                    variant="contained"
                    href={LINKS.RESUME}
                    target="_blank"
                    sx={{
                      margin: "8px 0px",
                      width: "100%",
                      padding: { xs: "0.3rem 0.5rem", md: "0.4rem 0.5rem" },
                      backgroundColor: "#112743",
                      "&:hover": {
                        backgroundColor: "primary.main",
                      },
                    }}
                  >
                    VIEW CV <ArrowRightAltIcon sx={{ marginLeft: "8px" }} />
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
