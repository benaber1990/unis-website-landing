import { m } from 'framer-motion';
// @mui
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// routes
import { paths } from 'src/routes/paths';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function HomeLookingFor() {
  const mdUp = useResponsive('up', 'md');

  const renderBtn = (
    <Button
      color="inherit"
      size="large"
      variant="outlined"
      target="_blank"
      rel="noopener"
      href={paths.zoneUI}
      endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
    >
      Speak to a Team Member Now
    </Button>
  );

  const renderDescription = (
    <Stack
      sx={{
        textAlign: {
          xs: 'center',
          md: 'left',
        },
      }}
    >
      <m.div variants={varFade().inDown}>
        <Typography variant="overline" component="div" sx={{ color: 'text.disabled' }}>
          UNIS Compliance
        </Typography>
      </m.div>

      <m.div variants={varFade().inDown}>
        <Typography
          variant="h2"
          sx={{
            mt: 3,
            mb: { md: 5 },
          }}
        >
          Be Organised. <br />
          Be Secure.
          <br />
          Be Compliant.
        </Typography>
      </m.div>

      {mdUp && <m.div variants={varFade().inDown}> {renderBtn} </m.div>}
    </Stack>
  );

  return (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <Grid container alignItems="center" justifyContent="space-between" spacing={{ xs: 5, md: 0 }}>
        <Grid xs={12} md={4}>
          {renderDescription}
        </Grid>

        <Grid xs={12} md={7}>
          <m.div variants={varFade().inUp}>
            {/* <Image disabledEffect alt="rocket" src="/assets/images/home/zone_landing.webp" /> */}
            {/* <video width="580" height="460" autoPlay loop muted> */}
            {/* <source src="https://i.imgur.com/YQpGMYK.mp4" type="video/mp4" /> */}
            {/* <source src="https://i.imgur.com/2Nbqnkk.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
            <div style={{ borderRadius: 20 }}>
              <img
                src="https://i.imgur.com/0ZDTjQd.jpg"
                alt=""
                style={{ width: 550, objectFit: 'contain', borderRadius: 40, marginTop: 100 }}
              />
            </div>
          </m.div>
        </Grid>

        {!mdUp && (
          <Grid xs={12} sx={{ textAlign: 'center' }}>
            {renderBtn}
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
