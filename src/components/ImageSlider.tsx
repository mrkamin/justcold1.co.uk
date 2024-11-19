import { useState } from "react";
import { Box, Image, Button, HStack, useBreakpointValue } from "@chakra-ui/react";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <Box position="relative"  overflow="hidden" h={`{40}%`} padding={0} margin={0} >
      <Box display="flex" transition="transform 0.5s ease" transform={`translateX(-${currentIndex * 100}%)`}>
        {images.map((src, index) => (
          <Box key={index} minW="100%">
            <Image src={src} alt={`Slide ${index}`} boxSize="100%" objectFit="cover" h={`{50}%`} />
          </Box>
        ))}
      </Box>
      <HStack position="absolute" top="50%" w="full" justify="space-between" px={4} transform="translateY(-50%)">
        <Button onClick={prevSlide} colorScheme="teal" variant="outline" size="sm">
          &#10094;
        </Button>
        <Button onClick={nextSlide} colorScheme="teal" variant="outline" size="sm">
          &#10095;
        </Button>
      </HStack>
    </Box>
  );
};

export default ImageSlider;
