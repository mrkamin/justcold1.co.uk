import { Box, Flex } from "@chakra-ui/react"

const YouTube = () => {
  return (
    <Flex padding={5}  justify="center" borderRadius={10}>
    <iframe className="youtube" 
    width="1000"
    height={563}  
    src='https://www.youtube.com/embed/UqCK4SrLzCk' 
    title="Youtube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen >

    </iframe>
    </Flex>
  )
}

export default YouTube
