import * as React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

export default function Values() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [glowPositions, setGlowPositions] = React.useState({
    control: { x: 0.487732, y: 171.039, visible: false, progress: 0 },
    clarity: { x: 0.487732, y: 171.039, visible: false, progress: 0 },
    liquidity: { x: 0.487732, y: 171.039, visible: false, progress: 0 },
  });
  const [completedArcs, setCompletedArcs] = React.useState({
    control: false,
    clarity: false,
    liquidity: false,
  });
  
  const controlPathRef = React.useRef<SVGPathElement | null>(null);
  const clarityPathRef = React.useRef<SVGPathElement | null>(null);
  const liquidityPathRef = React.useRef<SVGPathElement | null>(null);
  const animationRef = React.useRef<number | undefined>(undefined);
  const startTimeRef = React.useRef<number>(0);

  const durationPerArc = 1600;
  const betweenArcs = 0;
  const betweenCycles = 600;
  
  const totalCycleDuration = (durationPerArc + betweenArcs) * 3 + betweenCycles;

  React.useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      
      const elapsed = timestamp - startTimeRef.current;
      const cycleProgress = (elapsed % totalCycleDuration) / totalCycleDuration;
      const cycleTime = elapsed % totalCycleDuration;
      
      const controlStart = 0;
      const controlEnd = durationPerArc;
      
      const clarityStart = durationPerArc + betweenArcs;
      const clarityEnd = clarityStart + durationPerArc;
      
      const liquidityStart = 2 * (durationPerArc + betweenArcs);
      const liquidityEnd = liquidityStart + durationPerArc;
      
      const resetStart = liquidityEnd;
      
      let newGlowPositions = { ...glowPositions };
      let newCompletedArcs = { ...completedArcs };
      
      if (cycleTime >= controlStart && cycleTime < controlEnd) {
        const progress = (cycleTime - controlStart) / durationPerArc;
        if (controlPathRef.current) {
          const path = controlPathRef.current;
          const length = path.getTotalLength();
          const point = path.getPointAtLength(progress * length);
          newGlowPositions.control = { x: point.x, y: point.y, visible: true, progress };
          newCompletedArcs.control = progress >= 1;
        }
      } else if (cycleTime >= controlEnd && cycleTime < resetStart) {
        newCompletedArcs.control = true;
        if (isMobile && controlPathRef.current) {
          const path = controlPathRef.current;
          const length = path.getTotalLength();
          const endPoint = path.getPointAtLength(length);
          newGlowPositions.control = { x: endPoint.x, y: endPoint.y, visible: true, progress: 1 };
        } else {
          newGlowPositions.control = { ...newGlowPositions.control, visible: false, progress: 1 };
        }
      } else {
        newCompletedArcs.control = false;
        newGlowPositions.control = { x: 0.487732, y: 171.039, visible: false, progress: 0 };
      }
      
      if (cycleTime >= clarityStart && cycleTime < clarityEnd) {
        const progress = (cycleTime - clarityStart) / durationPerArc;
        if (clarityPathRef.current) {
          const path = clarityPathRef.current;
          const length = path.getTotalLength();
          const point = path.getPointAtLength(progress * length);
          newGlowPositions.clarity = { x: point.x, y: point.y, visible: true, progress };
          newCompletedArcs.clarity = progress >= 1;
        }
      } else if (cycleTime >= clarityEnd && cycleTime < resetStart) {
        newCompletedArcs.clarity = true;
        if (isMobile && clarityPathRef.current) {
          const path = clarityPathRef.current;
          const length = path.getTotalLength();
          const endPoint = path.getPointAtLength(length);
          newGlowPositions.clarity = { x: endPoint.x, y: endPoint.y, visible: true, progress: 1 };
        } else {
          newGlowPositions.clarity = { ...newGlowPositions.clarity, visible: false, progress: 1 };
        }
      } else {
        newCompletedArcs.clarity = false;
        newGlowPositions.clarity = { x: 0.487732, y: 171.039, visible: false, progress: 0 };
      }
      
      if (cycleTime >= liquidityStart && cycleTime < liquidityEnd) {
        const progress = (cycleTime - liquidityStart) / durationPerArc;
        if (liquidityPathRef.current) {
          const path = liquidityPathRef.current;
          const length = path.getTotalLength();
          const point = path.getPointAtLength(progress * length);
          newGlowPositions.liquidity = { x: point.x, y: point.y, visible: true, progress };
          newCompletedArcs.liquidity = progress >= 1;
        }
      } else if (cycleTime >= liquidityEnd && cycleTime < resetStart) {
        newCompletedArcs.liquidity = true;
        if (isMobile && liquidityPathRef.current) {
          const path = liquidityPathRef.current;
          const length = path.getTotalLength();
          const endPoint = path.getPointAtLength(length);
          newGlowPositions.liquidity = { x: endPoint.x, y: endPoint.y, visible: true, progress: 1 };
        } else {
          newGlowPositions.liquidity = { ...newGlowPositions.liquidity, visible: false, progress: 1 };
        }
      } else {
        newCompletedArcs.liquidity = false;
        newGlowPositions.liquidity = { x: 0.487732, y: 171.039, visible: false, progress: 0 };
      }
      
      setGlowPositions(newGlowPositions);
      setCompletedArcs(newCompletedArcs);
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isMobile]);
  
  return (
    <Box
      component="section"
      sx={{
        bgcolor: "#FFFFFF",
        py: { xs: 6, md: 12 },
      }}
    >
      <Box sx={{ maxWidth: 1340, mx: "auto", px: { xs: 2, md: 4 } }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: 22, sm: 32, md: 56 },
            fontWeight: 400,
            color: "#000000",
            lineHeight: 1.3,
            letterSpacing: "-0.02em",
            maxWidth: 1340,
            mx: "auto",
            mb: { xs: 6, md: 10 },
          }}
        >
          Bringing clarity and automation to freight finance helping logistics
          teams move money smarter and faster and with complete confidence.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            position: "relative",
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              borderLeft: { xs: "1px solid #E0E0E0", md: "1px solid #E0E0E0" },
              borderRight: { xs: "1px solid #E0E0E0", md: "1px solid #E0E0E0" },
              minHeight: { xs: "auto", md: 280 },
              pt: { xs: 4, md: 0 },
              pb: { xs: 0, md: 0 },
              mb: { xs: 6, md: 0 },
            }}
          >
            <Box
              sx={{
                display: { xs: "block", md: "block" },
                position: "absolute",
                bottom: 0,
                left: -4.5,
                width: 8,
                height: 8,
                borderRadius: "50%",
                bgcolor: "#E0E0E0",
              }}
            />
            
            <Box
              sx={{
                display: { xs: "block", md: "block" },
                position: "absolute",
                bottom: 0,
                right: -4.5,
                width: 8,
                height: 8,
                borderRadius: "50%",
                bgcolor: "#E0E0E0",
              }}
            />

            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: 20, sm: 22, md: 24 },
                fontWeight: 400,
                color: "#0C5533",
                mb: "auto",
                mt: { xs: 0, md: 0 },
              }}
            >
              Control
            </Typography>

            <Box
              sx={{
                width: "100%",
                marginLeft: "-10%",
                marginRight: "-10%",
                position: "relative",
                overflow: "visible",
                aspectRatio: { xs: "434 / 252", md: "434 / 252" },
                pb: 0,
                mb: 0,
                mt: { xs: "auto", md: 0 },
              }}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 -80 434 252"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
                style={{ display: "block", overflow: "visible" }}
              >
                <path
                  ref={controlPathRef}
                  id="motionPath"
                  d="M0.487732 171.039C51.9517 -56.9826 376.766 -55.732 433.488 171.039"
                  stroke="#D6D6D6"
                  strokeDasharray="7 7"
                  fill="none"
                />
                
                <defs>
                  <filter id="glowTrailControl" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
                  </filter>
                </defs>
                
                {(glowPositions.control.visible || completedArcs.control) && (
                  <>
                    <path
                      d="M0.487732 171.039C51.9517 -56.9826 376.766 -55.732 433.488 171.039"
                      stroke="#1BC577"
                      strokeOpacity="0.15"
                      strokeWidth="30"
                      strokeDasharray={controlPathRef.current?.getTotalLength() || 560}
                      strokeDashoffset={
                        controlPathRef.current
                          ? controlPathRef.current.getTotalLength() *
                            (1 -
                              (completedArcs.control
                                ? 1
                                : glowPositions.control.progress))
                          : 560
                      }
                      fill="none"
                      filter="url(#glowTrailControl)"
                      style={{
                        pointerEvents: "none",
                      }}
                    />
                  </>
                )}
                
                <defs>
                  <filter id="glowControl" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
                  </filter>
                </defs>
                {glowPositions.control.visible && (
                  <circle
                    cx={glowPositions.control.x}
                    cy={glowPositions.control.y}
                    r="15"
                    fill="#1BC577"
                    opacity="0.7"
                    filter="url(#glowControl)"
                    style={{
                      willChange: "transform",
                      pointerEvents: "none",
                    }}
                  />
                )}
                
                <g transform="translate(217, 0)">
                  <image
                    href="/images/lightbulb.svg"
                    x="-24.5"
                    y="-24.5"
                    width="49"
                    height="49"
                  />
                  {(glowPositions.control.visible || completedArcs.control) && (
                    <g opacity={completedArcs.control ? "0.35" : glowPositions.control.progress * 0.35}>
                      <circle cx="0" cy="0" r="24.5" fill="#1BC577" opacity="0.3" />
                    </g>
                  )}
                </g>
              </svg>
            </Box>
          </Box>

          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              borderLeft: { xs: "1px solid #E0E0E0", md: "none" },
              borderRight: { xs: "1px solid #E0E0E0", md: "1px solid #E0E0E0" },
              minHeight: { xs: "auto", md: 280 },
              pt: { xs: 4, md: 0 },
              pb: { xs: 0, md: 0 },
              mb: { xs: 6, md: 0 },
            }}
          >
            <Box
              sx={{
                display: { xs: "block", md: "none" },
                position: "absolute",
                bottom: 0,
                left: -4.5,
                width: 8,
                height: 8,
                borderRadius: "50%",
                bgcolor: "#E0E0E0",
              }}
            />
            
            <Box
              sx={{
                display: { xs: "block", md: "block" },
                position: "absolute",
                bottom: 0,
                right: -4.5,
                width: 8,
                height: 8,
                borderRadius: "50%",
                bgcolor: "#E0E0E0",
              }}
            />

            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: 20, sm: 22, md: 24 },
                fontWeight: 400,
                color: "#0C1855",
                mb: "auto",
                mt: { xs: 0, md: 0 },
              }}
            >
              Clarity
            </Typography>

            <Box
              sx={{
                width: "100%",
                marginLeft: "-10%",
                marginRight: "-10%",
                position: "relative",
                overflow: "visible",
                aspectRatio: { xs: "434 / 252", md: "434 / 252" },
                pb: 0,
                mb: 0,
                mt: { xs: "auto", md: 0 },
              }}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 -80 434 252"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
                style={{ display: "block", overflow: "visible" }}
              >
                <path
                  ref={clarityPathRef}
                  id="motionPath2"
                  d="M0.487732 171.039C51.9517 -56.9826 376.766 -55.732 433.488 171.039"
                  stroke="#D6D6D6"
                  strokeDasharray="7 7"
                  fill="none"
                />
                
                <defs>
                  <filter id="glowTrailClarity" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
                  </filter>
                </defs>
                
                {(glowPositions.clarity.visible || completedArcs.clarity) && (
                  <>
                    <path
                      d="M0.487732 171.039C51.9517 -56.9826 376.766 -55.732 433.488 171.039"
                      stroke="#1BC577"
                      strokeOpacity="0.15"
                      strokeWidth="30"
                      strokeDasharray={clarityPathRef.current?.getTotalLength() || 560}
                      strokeDashoffset={
                        clarityPathRef.current
                          ? clarityPathRef.current.getTotalLength() *
                            (1 -
                              (completedArcs.clarity
                                ? 1
                                : glowPositions.clarity.progress))
                          : 560
                      }
                      fill="none"
                      filter="url(#glowTrailClarity)"
                      style={{
                        pointerEvents: "none",
                      }}
                    />
                  </>
                )}
                
                <defs>
                  <filter id="glowClarity" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
                  </filter>
                </defs>
                {glowPositions.clarity.visible && (
                  <circle
                    cx={glowPositions.clarity.x}
                    cy={glowPositions.clarity.y}
                    r="15"
                    fill="#1BC577"
                    opacity="0.7"
                    filter="url(#glowClarity)"
                    style={{
                      willChange: "transform",
                      pointerEvents: "none",
                    }}
                  />
                )}
                
                <g transform="translate(217, 0)">
                  <image
                    href="/images/diamond.svg"
                    x="-24.5"
                    y="-24.5"
                    width="49"
                    height="49"
                  />
                  {(glowPositions.clarity.visible || completedArcs.clarity) && (
                    <g opacity={completedArcs.clarity ? "0.35" : glowPositions.clarity.progress * 0.35}>
                      <circle cx="0" cy="0" r="24.5" fill="#1BC577" opacity="0.3" />
                    </g>
                  )}
                </g>
              </svg>
            </Box>
          </Box>

          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              borderLeft: { xs: "1px solid #E0E0E0", md: "none" },
              borderRight: { xs: "1px solid #E0E0E0", md: "1px solid #E0E0E0" },
              minHeight: { xs: "auto", md: 280 },
              pt: { xs: 4, md: 0 },
              pb: { xs: 0, md: 0 },
            }}
          >
            <Box
              sx={{
                display: { xs: "block", md: "none" },
                position: "absolute",
                bottom: 0,
                left: -4.5,
                width: 8,
                height: 8,
                borderRadius: "50%",
                bgcolor: "#E0E0E0",
              }}
            />
            
            <Box
              sx={{
                display: { xs: "block", md: "block" },
                position: "absolute",
                bottom: 0,
                right: -4.5,
                width: 8,
                height: 8,
                borderRadius: "50%",
                bgcolor: "#E0E0E0",
              }}
            />

            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: 20, sm: 22, md: 24 },
                fontWeight: 400,
                color: "#0C5533",
                mb: "auto",
                mt: { xs: 0, md: 0 },
              }}
            >
              Liquidity
            </Typography>

            <Box
              sx={{
                width: "100%",
                marginLeft: "-10%",
                marginRight: "-10%",
                position: "relative",
                overflow: "visible",
                aspectRatio: { xs: "434 / 252", md: "434 / 252" },
                pb: 0,
                mb: 0,
                mt: { xs: "auto", md: 0 },
              }}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 -80 434 252"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
                style={{ display: "block", overflow: "visible" }}
              >
                <path
                  ref={liquidityPathRef}
                  id="motionPath3"
                  d="M0.487732 171.039C51.9517 -56.9826 376.766 -55.732 433.488 171.039"
                  stroke="#D6D6D6"
                  strokeDasharray="7 7"
                  fill="none"
                />

                <defs>
                  <filter id="glowTrailLiquidity" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
                  </filter>
                </defs>
                
                {(glowPositions.liquidity.visible || completedArcs.liquidity) && (
                  <>
                    <path
                      d="M0.487732 171.039C51.9517 -56.9826 376.766 -55.732 433.488 171.039"
                      stroke="#1BC577"
                      strokeOpacity="0.15"
                      strokeWidth="30"
                      strokeDasharray={liquidityPathRef.current?.getTotalLength() || 560}
                      strokeDashoffset={
                        liquidityPathRef.current
                          ? liquidityPathRef.current.getTotalLength() *
                            (1 -
                              (completedArcs.liquidity
                                ? 1
                                : glowPositions.liquidity.progress))
                          : 560
                      }
                      fill="none"
                      filter="url(#glowTrailLiquidity)"
                      style={{
                        pointerEvents: "none",
                      }}
                    />
                  </>
                )}
                
                <defs>
                  <filter id="glowLiquidity" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
                  </filter>
                </defs>
                {glowPositions.liquidity.visible && (
                  <circle
                    cx={glowPositions.liquidity.x}
                    cy={glowPositions.liquidity.y}
                    r="15"
                    fill="#1BC577"
                    opacity="0.7"
                    filter="url(#glowLiquidity)"
                    style={{
                      willChange: "transform",
                      pointerEvents: "none",
                    }}
                  />
                )}
                
                <g transform="translate(217, 0)">
                  <image
                    href="/images/dollar-sign.svg"
                    x="-24.5"
                    y="-24.5"
                    width="49"
                    height="49"
                  />
                  {(glowPositions.liquidity.visible || completedArcs.liquidity) && (
                    <g opacity={completedArcs.liquidity ? "0.35" : glowPositions.liquidity.progress * 0.35}>
                      <circle cx="0" cy="0" r="24.5" fill="#1BC577" opacity="0.3" />
                    </g>
                  )}
                </g>
              </svg>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

